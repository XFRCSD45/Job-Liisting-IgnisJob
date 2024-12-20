import React from "react";
import JobSearch from "./components/JobSearch";
import JobList from "./components/JobList";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-gray-100 ">
      <Header />
      <div className="w-5/6 mx-auto min-h-screen">
        <main className="container mx-auto px-4 mt-6 pb-10">
          <JobSearch />
          <JobList />
        </main>
      </div>
    </div>
  );
};

export default App;
