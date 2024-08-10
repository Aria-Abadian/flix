import React, { useState, useEffect, useRef } from "react";

// Data
import { animations, kDrama, comedy } from "../data/TrendingData";

// Icons
import { IoMdFunnel } from "react-icons/io";
import { HiOutlineFunnel } from "react-icons/hi2";

const TrendingAnimation = ({ category }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [trendingCards, setTrendingCards] = useState([...animations]);
  const [openFilters, setOpenFilters] = useState("h-0");
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const scrollContainerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  let originalCards = [];

  if (category === "kDrama") {
    originalCards = [...kDrama];
  } else if (category === "comedy") {
    originalCards = [...comedy];
  } else {
    originalCards = [...animations];
  }

  // Update windowWidth on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle filter visibility
  const handleFilters = () => {
    if (windowWidth >= 767) {
      setOpenFilters(openFilters === "h-0" ? "h-[3vw]" : "h-0");
    } else {
      setOpenFilters(openFilters === "h-0" ? "h-[20vw]" : "h-0");
    }
  };

  // Handle sorting by rating
  const sortByRating = () => {
    const sortedByRating = [...trendingCards].sort((a, b) => b.rate - a.rate);
    setTrendingCards(sortedByRating);
  };

  // Handle sorting by year
  const sortByYear = () => {
    const sortedByYear = [...trendingCards].sort((a, b) => b.year - a.year);
    setTrendingCards(sortedByYear);
  };

  // Function to apply filters
  const applyFilters = () => {
    let filteredCards = [...originalCards];

    // Apply rating filter if selected
    if (selectedRating !== null) {
      filteredCards = filteredCards.filter(
        (card) => card.rate >= selectedRating
      );
    }

    // Apply year filter if selected
    if (selectedYear !== null) {
      if (selectedYear === "older") {
        filteredCards = filteredCards.filter((card) => card.year < 2020);
      } else {
        filteredCards = filteredCards.filter(
          (card) => card.year >= selectedYear
        );
      }
    }

    setTrendingCards(filteredCards);
  };

  // Handle filtering by selected rating
  const filterByRating = (rating) => {
    setSelectedRating(rating);
  };

  // Handle filtering by selected year
  const filterByYear = (year) => {
    setSelectedYear(year);
  };

  // Clear all filters and sorting
  const clearFilters = () => {
    setSelectedRating(null);
    setSelectedYear(null);
    setTrendingCards(originalCards);
  };

  // Apply filters whenever selectedRating or selectedYear changes
  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedYear]);

  // Update the originalCards and trendingCards based on the category prop
  useEffect(() => {
    let data;
    if (category === "kDrama") {
      data = kDrama;
    } else if (category === "comedy") {
      data = comedy;
    } else {
      data = animations;
    }

    originalCards = data;
    setTrendingCards(data);
    setSelectedRating(null); // Reset filters
    setSelectedYear(null); // Reset filters
  }, [category]);

  const handleMouseDown = (e) => {
    if (e.target.tagName === "IMG") return; // Skip dragging if mouse is on an image
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2; // Adjust the scrolling speed
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const handleDragStart = (e) => {
    e.preventDefault(); // Prevent dragging of images
  };

  // Scroll functions
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -window.innerWidth * 0.8, // Adjust scroll amount as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: window.innerWidth * 0.8, // Adjust scroll amount as needed
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div>
        <div className="h-[20vw] md:h-[4vw] md:w-full flex flex-row justify-between items-center md:px-[2vw] text-[5vw] md:text-[2.1vw] font-bold text-white">
          <h2>Trending in {category}</h2>

          <div className="flex flex-row-reverse items-end gap-[3vw]"> 
            <div
              className="bg-slate-900 w-[25vw] h-[8vw] md:w-[8.3vw] md:h-[3vw] rounded-full flex flex-row justify-between
            items-center px-[4vw] md:px-[1.5vw] text-[5vw] md:text-[1.5vw]"
            >
              <button onClick={handleFilters}>
                <div className="text-gray-300 hover:text-white">
                  <IoMdFunnel />
                </div>
              </button>
              <div className="text-gray-500 font-thin -translate-y-1">
                <span>|</span>
              </div>
              <button onClick={handleFilters}>
                <div className="text-gray-300 hover:text-white">
                  <HiOutlineFunnel />
                </div>
              </button>
            </div>
            <div className="inset-x-0 bottom-0 hidden md:flex justify-center gap-[1vw] text-sm md:text-[1vw]">
              <button
                className="bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 flex justify-center items-center h-[2vw] w-[2vw]"
                onClick={scrollLeft}
              >
                <span className="2xl:-translate-y-[.2vw]">&lt;</span>
              </button>
              <button
                className="bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 flex justify-center items-center h-[2vw] w-[2vw]"
                onClick={scrollRight}
              >
                <span className="2xl:-translate-y-[.2vw]">&gt;</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`text-white text-nowrap ${openFilters} overflow-x-scroll overflow-hidden bg-slate-900/90
          mb-[5vw] md:mb-[2vw] flex md:flex-row items-center px-[10vw] md:px-[3vw] gap-[15vw] md:gap-[5vw]`}
        >
          <div className="flex flex-row gap-[5vw] md:gap-[1vw]">
            <p className="font-semibold">Sort by:</p>
            <button onClick={sortByRating}>Rating</button>
            <button onClick={sortByYear}>Year</button>
          </div>

          <div className="flex flex-row gap-[5vw] md:gap-[2vw]">
            <p className="font-semibold">Filter by:</p>
            <div className="flex flex-row gap-[5vw] md:gap-[1vw]">
              <p className="font-semibold">Ratings:</p>
              <button onClick={() => filterByRating(9)}>9+</button>
              <button onClick={() => filterByRating(8)}>8+</button>
              <button onClick={() => filterByRating(7)}>7+</button>
              <button onClick={() => filterByRating(6)}>6+</button>
              <button onClick={() => filterByRating(5)}>5+</button>
              <button onClick={() => filterByRating(0)}>Lower</button>
            </div>
            <div className="flex flex-row gap-[5vw] md:gap-[1vw]">
              <p className="font-semibold">Year:</p>
              <button onClick={() => filterByYear(2024)}>2024</button>
              <button onClick={() => filterByYear(2023)}>2023</button>
              <button onClick={() => filterByYear(2022)}>2022</button>
              <button onClick={() => filterByYear(2021)}>2021</button>
              <button onClick={() => filterByYear(2020)}>2020</button>
              <button onClick={() => filterByYear("older")}>Older</button>
            </div>
            <div className="flex flex-row gap-[1vw]">
              <p className="font-semibold">Actions:</p>
              <button onClick={clearFilters}>Clear Filters</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="h-[85vw] md:h-[27.5vw] flex px-[5vw] flex-row items-center overflow-x-scroll"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {trendingCards.map((trendingCard, index) => (
            <div className="flex flex-col gap-[.5vw] px-[2vw]" key={index}>
              <div className="object-cover h-[70vw] w-[50vw] md:h-[21vw] md:w-[15vw] cursor-pointer overflow-hidden rounded-[2vw]">
                <img
                  className="w-full self-center"
                  src={trendingCard.image}
                  alt={trendingCard.title}
                  onDragStart={handleDragStart} // Prevent image dragging
                />
              </div>
              <a href={trendingCard.url}>
                <h3 className="text-white font-semibold text-[5vw] md:text-[1.5vw] cursor-pointer">
                  {trendingCard.title}
                </h3>
                <div className="cursor-pointer flex flex-row justify-start gap-3 font-semibold text-white text-[3vw] md:text-[1vw]">
                  <p>⭐ {trendingCard.rate}</p>
                  <p className="text-gray-300">|</p>
                  <p>{trendingCard.year}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingAnimation;
