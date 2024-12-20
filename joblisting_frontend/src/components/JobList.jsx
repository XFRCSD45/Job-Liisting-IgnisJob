import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import MostRecent from "./MostRecent";
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/jobs/")
      .then((response) => setJobs(response.data))
      .catch((error) => console.error(error));
  }, []);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);


  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);


  const maxPageNumbersToShow = 5; 
  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="space-y-4">
      <MostRecent />
      {currentJobs.map((job, index) => (
        <a href={job.details_url} key={index} >
        <JobCard  job={job} />
        </a>
      ))}

     
      <div className="flex justify-center my-6 items-center space-x-2">
        
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>

       
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-md ${
              currentPage === page ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}

        
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobList;
