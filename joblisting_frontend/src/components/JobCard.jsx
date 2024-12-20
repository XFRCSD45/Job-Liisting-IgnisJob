import React from "react";

const JobCard = ({ job }) => {
    const calculateTimeAgo = (postedDate) => {
        const now = new Date();
        const posted = new Date(postedDate);
        const diffInMs = now - posted; 
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60)); 
    
        if (diffInMinutes < 60) {
          return "Just now";
        } else if (diffInMinutes < 1440) { 
          const diffInHours = Math.floor(diffInMinutes / 60);
          return `${diffInHours} hours ago`;
        } else {
          const diffInDays = Math.floor(diffInMinutes / 1440);
          return `${diffInDays} days ago`;
        }
      };
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex  flex-col my-5 ">
        <div className=" flex flex-row justify-between mb-1" >
            <div className="flex flex-row  gap-5 items-baseline  ">
                <p className="text-gray-400 text-xs " >{calculateTimeAgo(job.posted_date)}</p>
                {job.work_from_home_availability && <div className="p-1 bg-gray-100 rounded-2xl">
                    <p className="text-purple-700 font-semibold text-xs" >Remote</p>
                </div>}
            </div>
            <div className="rounded-full bg-transparent border border-1 p-2" >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.82.99a2.75 2.75 0 0 1 2.36 0c.51.24.88.7 1.2 1.23.33.53.69 1.24 1.14 2.13l.37.76c.3.6.4.77.5.89.12.12.26.21.41.28.15.06.33.1 1.01.17l.37.04c1.07.12 1.92.21 2.57.34a3.1 3.1 0 0 1 1.65.75c.6.6.88 1.46.76 2.3a3.1 3.1 0 0 1-.88 1.59c-.44.49-1.07 1.07-1.86 1.8l-.37.35c-.6.56-.75.72-.84.88-.09.18-.14.37-.14.56 0 .19.06.4.34 1.18l.01.04c.4 1.15.72 2.07.9 2.77.18.7.28 1.37.05 1.96a2.75 2.75 0 0 1-1.88 1.66c-.61.15-1.27-.03-1.92-.29-.68-.26-1.53-.69-2.6-1.22l-.87-.44a3.87 3.87 0 0 0-.87-.38c-.15-.03-.3-.03-.46 0-.15.03-.3.1-.87.38l-.87.44c-1.07.53-1.92.96-2.6 1.22-.65.26-1.3.44-1.92.29A2.75 2.75 0 0 1 3.63 21c-.23-.59-.13-1.27.04-1.96.19-.7.5-1.62.91-2.77l.01-.04c.28-.78.34-1 .34-1.18 0-.2-.05-.38-.14-.56a4.05 4.05 0 0 0-.84-.88l-.37-.34a32.15 32.15 0 0 1-1.86-1.81c-.44-.49-.8-1-.88-1.59-.12-.84.16-1.7.76-2.3a3.1 3.1 0 0 1 1.65-.75c.65-.13 1.5-.22 2.57-.34l.37-.04c.68-.08.86-.1 1-.17.16-.07.3-.16.41-.28.11-.12.2-.28.5-.9l.38-.75c.45-.89.8-1.6 1.13-2.13.33-.52.7-.99 1.21-1.23Zm1.72 1.35a1.25 1.25 0 0 0-1.08 0c-.1.05-.28.2-.57.67a29 29 0 0 0-1.08 2.05l-.36.72-.04.08c-.25.49-.44.87-.72 1.17-.26.27-.56.48-.9.62-.38.17-.8.22-1.34.28h-.1l-.32.04c-1.12.13-1.91.22-2.48.33-.6.12-.8.25-.88.33-.27.28-.4.66-.35 1.05.02.11.11.34.51.78s.97.98 1.8 1.74l.34.32.09.08c.47.44.84.79 1.07 1.22.19.38.3.8.3 1.23 0 .48-.17.96-.38 1.58l-.04.11c-.42 1.2-.72 2.05-.88 2.69-.17.66-.15.92-.1 1.03.14.37.46.66.85.75.11.03.37.03 1-.22.6-.24 1.4-.63 2.52-1.2l.83-.41.08-.04c.45-.23.8-.4 1.18-.47.34-.07.68-.07 1.02 0 .38.07.73.24 1.18.47l.08.04.83.42c1.12.56 1.91.95 2.52 1.19.63.25.89.25 1 .22.39-.1.7-.38.85-.75.05-.1.07-.37-.1-1.03a37.29 37.29 0 0 0-.92-2.8 4.78 4.78 0 0 1-.38-1.58c0-.43.11-.85.3-1.23.23-.44.6-.78 1.07-1.22l.09-.08.34-.32c.83-.76 1.4-1.3 1.8-1.74.4-.44.5-.67.5-.78.06-.39-.07-.77-.34-1.05-.08-.08-.29-.2-.88-.33-.57-.11-1.36-.2-2.48-.33l-.32-.03-.1-.01c-.54-.06-.96-.1-1.34-.28a2.75 2.75 0 0 1-.9-.62 4.64 4.64 0 0 1-.76-1.25l-.36-.72c-.47-.93-.8-1.59-1.08-2.05-.3-.47-.47-.62-.57-.67Z"></path></svg>
            </div>
        </div>
        <div className="w-full flex  flex-row items-center gap-4 bg-gray-100 p-5 rounded-2xl justify-between">
            
      <div className="flex flex-row gap-5">
        <div>
        <img
          src={job.company_logo_url || "https://via.placeholder.com/50"}
          alt="Company Logo"
          className="w-12 h-12 rounded-full"
        />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-sm">{job.company_name}</p>
          
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-right " >
        <p className="text-lg text-black font-semibold">{job.salary} </p>
        </div>
        <div className=" flex flex-row gap-5" > 
        <div className="flex flex-row gap-2">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#364452" width="16px"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.13 2.3c-.74-.2-1.52-.2-2.26 0-.39.11-.78.31-1.31.68-.54.37-1.19.88-2.09 1.6l-2 1.6c-1.13.91-1.59 1.28-1.91 1.73-.3.41-.52.87-.66 1.36-.14.54-.15 1.12-.15 2.58V14c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h4c1.41 0 2.43 0 3.22-.07.79-.06 1.3-.18 1.71-.4.8-.4 1.45-1.05 1.86-1.85.2-.41.33-.92.4-1.7.06-.8.06-1.82.06-3.23v-2.15c0-1.46 0-2.04-.15-2.58-.14-.49-.36-.95-.66-1.36-.32-.45-.78-.82-1.91-1.73l-2-1.6c-.9-.72-1.55-1.23-2.09-1.6a4.38 4.38 0 0 0-1.3-.67ZM10.47.87c1-.28 2.06-.28 3.06 0 .6.17 1.16.46 1.76.88.6.4 1.28.96 2.15 1.65l2.03 1.62.09.07c1.01.82 1.64 1.32 2.1 1.95.4.56.7 1.18.88 1.85.21.75.21 1.55.21 2.85V14.03c0 1.38 0 2.45-.07 3.32-.07.88-.22 1.6-.56 2.26a5.75 5.75 0 0 1-2.51 2.51c-.66.34-1.38.49-2.26.56-.87.07-1.94.07-3.32.07H9.97c-1.38 0-2.45 0-3.32-.07a5.92 5.92 0 0 1-2.26-.56 5.75 5.75 0 0 1-2.51-2.51 5.92 5.92 0 0 1-.56-2.26c-.07-.87-.07-1.94-.07-3.32V11.73c0-1.3 0-2.1.2-2.85.19-.67.49-1.3.9-1.85.45-.63 1.08-1.13 2.1-1.95l.08-.07L6.56 3.4c.87-.7 1.56-1.24 2.15-1.65.6-.42 1.15-.71 1.76-.88ZM8.25 16c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"></path></svg>

        <p className="text-sm text-gray-500">{job.work_from_home_availability ? "Remote" : "On-Site"  }</p>
        </div>
        <div className="flex flex-row gap-2">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#364452" width="16px"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75c-4.64 0-8.25 3.22-8.25 7.75 0 3.68 1.63 6.37 3.52 8.15.94.9 1.94 1.55 2.81 1.99.9.44 1.6.61 1.92.61a5.1 5.1 0 0 0 1.92-.61 11.8 11.8 0 0 0 2.81-1.99 10.98 10.98 0 0 0 3.52-8.15c0-4.53-3.6-7.75-8.25-7.75ZM2.25 10.5c0-5.47 4.4-9.25 9.75-9.25 5.36 0 9.75 3.78 9.75 9.25 0 4.17-1.87 7.23-3.98 9.24-1.06 1-2.19 1.74-3.19 2.24-.97.48-1.9.77-2.58.77-.67 0-1.6-.29-2.58-.77-1-.5-2.13-1.24-3.19-2.24-2.11-2-3.98-5.07-3.98-9.24ZM12 8.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 11a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"></path></svg>
        <p className="text-sm text-gray-400">{job.location}</p>
        </div>
        <div className="flex flex-row gap-2">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="#364452" width="16px"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.53.47c.3.3.3.77 0 1.06l-3 3A.75.75 0 0 1 .47 3.47l3-3c.3-.3.77-.3 1.06 0Zm14.94 0c.3-.3.77-.3 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12a10.75 10.75 0 1 1 21.5 0 10.75 10.75 0 0 1-21.5 0ZM12 7.25c.41 0 .75.34.75.75v3.6l2.67 1.78a.75.75 0 1 1-.84 1.24l-3-2a.75.75 0 0 1-.33-.62V8c0-.41.34-.75.75-.75Z"></path></svg>
        <p className="text-sm text-gray-500">{job.employment_type}</p>
        </div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default JobCard;
