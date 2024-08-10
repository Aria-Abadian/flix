import React, { useState, useMemo } from "react";
import { animations, comedy, kDrama } from "../data/TrendingData";

const AllMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState(null);
  
  const itemsPerPage = 15;
  const allVideos = useMemo(() => {
    // Filter by category
    let filteredVideos = [];
    if (selectedCategory === "all") {
      filteredVideos = [...comedy, ...animations, ...kDrama];
    } else if (selectedCategory === "comedy") {
      filteredVideos = [...comedy];
    } else if (selectedCategory === "animations") {
      filteredVideos = [...animations];
    } else if (selectedCategory === "kDrama") {
      filteredVideos = [...kDrama];
    }

    // Sort by the selected criteria
    if (sortBy === "year") {
      filteredVideos.sort((a, b) => b.year - a.year);
    } else if (sortBy === "rate") {
      filteredVideos.sort((a, b) => b.rate - a.rate);
    }

    return filteredVideos;
  }, [selectedCategory, sortBy]);

  const totalPages = Math.ceil(allVideos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allVideos.slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="relative z-10 pt-[18vw] md:pt-[10vw] flex flex-col items-center gap-[5vw]">
      <div className="md:bg-slate-500/30 backdrop-blur-3xl w-[70vw] md:w-[80vw] rounded-[2vw] shadow-2xl p-[5vw] md:p-[2vw]">
        <h4 className="text-white text-sm md:text-[2vw] md:font-semibold mb-2 md:mb-0">Filters:</h4>
        <div className="flex flex-col md:flex-row gap-[5vw] md:gap-0 items-center md:items-center justify-center">
          <div className="grid grid-cols-2 md:flex gap-[1vw]">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`md:text-[1.5vw] px-[2vw] py-[1vw] md:px-4 md:py-2 rounded ${selectedCategory === "all" ? "bg-blue-500" : "bg-slate-600"} text-white`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("comedy")}
              className={`md:text-[1.5vw] px-[2vw] py-[1vw] md:px-4 md:py-2 rounded ${selectedCategory === "comedy" ? "bg-blue-500" : "bg-slate-600"} text-white`}
            >
              Comedy
            </button>
            <button
              onClick={() => setSelectedCategory("animations")}
              className={`md:text-[1.5vw] px-[2vw] py-[1vw] md:px-4 md:py-2 rounded ${selectedCategory === "animations" ? "bg-blue-500" : "bg-slate-600"} text-white`}
            >
              Animations
            </button>
            <button
              onClick={() => setSelectedCategory("kDrama")}
              className={`md:text-[1.5vw] px-[2vw] py-[1vw] md:px-4 md:py-2 rounded ${selectedCategory === "kDrama" ? "bg-blue-500" : "bg-slate-600"} text-white`}
            >
              K-Drama
            </button>
          </div>
        </div>
          <div className=" flex flex-col justify-start mt-[5vw] md:mt-[1vw]">
            <h4 className="text-white text-sm md:text-[2vw] md:font-semibold mb-2">Sort by:</h4>
            <div className="flex flex-row justify-center gap-[1vw]">
              <button
                onClick={() => setSortBy("year")}
                className={`md:text-[1.5vw] px-[2vw] py-[1vw] md:px-4 md:py-2 rounded ${sortBy === "year" ? "bg-blue-500" : "bg-slate-600"} text-white`}
              >
                Year
              </button>
              <button
                onClick={() => setSortBy("rate")}
                className={`md:text-[1.5vw] px-[2vw] py-[1vw] md:px-4 md:py-2 rounded ${sortBy === "rate" ? "bg-blue-500" : "bg-slate-600"} text-white`}
              >
                Rating
              </button>
            </div>
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[10vw] md:gap-[2vw] pl-[3vw]">
        {currentItems.map((item, index) => (
          <div className="flex flex-col items-start gap-[1vw]" key={index}>
            <div className="object-cover shadow-2xl bg-black h-[70vw] w-[50vw] md:h-[21vw] md:w-[15vw] cursor-pointer overflow-hidden rounded-[2vw]">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="flex flex-col gap-[1vw]">
              <h2 className="text-white text-[5vw] md:text-[2vw] font-semibold">{item.title}</h2>
              <div className="flex flex-row items-center gap-[2vw] text-white font-semibold">
                <p className="md:text-[1vw]">⭐{item.rate}</p>
                <p className="md:text-[1vw]">|</p>
                <p className="md:text-[1vw]">{item.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center w-[80vw] text-white mb-[5vw]">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-slate-500 hover:bg-slate-700"}`}
        >
          Previous
        </button>
        <p className="font-semibold">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "bg-slate-500 hover:bg-slate-700"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllMovies;
