import React from "react";

const JobSearch = () => {
  return (
    <div className="w-full bg-white shadow-md rounded-xl p-3 my-10">
      <div className="flex flex-col bg-gray-100 p-5 rounded-xl  items-center gap-4">
        <div className="w-full mx-1 flex flex-row rounded-2xl bg-white border-gray-300 p-3">
          <input
            type="text"
            placeholder="Search by job title"
            className=" w-11/12 flex-grow focus:ring-0 outline-none "
          />
          <div className="bg-blue-600 rounded-full p-2" >
           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="16" className="text-white rounded-full m-auto" ><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.94 15.94a1 1 0 0 1 1.42 0l4.35 4.35a1 1 0 0 1-1.42 1.42l-4.35-4.35a1 1 0 0 1 0-1.42Z"></path></svg>
           </div>
        </div>
        <div className="flex gap-5 flex-wrap">
          <button className="border border-gray-300 bg-white px-4 py-2 rounded-2xl flex flex-row gap-3">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              width="24"
             
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.55 1.1a1 1 0 0 1 .9 0l10 5a1 1 0 0 1 0 1.8l-10 5a1 1 0 0 1-.9 0l-10-5a1 1 0 0 1 0-1.8l10-5ZM4.24 7 12 10.88 19.76 7 12 3.12 4.24 7Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.1 16.55a1 1 0 0 1 1.35-.44L12 20.88l9.55-4.77a1 1 0 0 1 .9 1.78l-10 5a1 1 0 0 1-.9 0l-10-5a1 1 0 0 1-.44-1.34Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.1 11.55a1 1 0 0 1 1.35-.44L12 15.88l9.55-4.77a1 1 0 0 1 .9 1.78l-10 5a1 1 0 0 1-.9 0l-10-5a1 1 0 0 1-.44-1.34Z"
              ></path>
            </svg>
            <p>Job Type</p>
           
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.3 8.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path></svg>
          </button>
          <button className="border border-gray-300 bg-white px-4 py-2 rounded-2xl flex flex-row gap-3">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M11.39 1.21a1 1 0 0 1 1.22 0l9 7A1 1 0 0 1 22 9v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9c0-.3.14-.6.39-.79l9-7ZM4 9.5V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.49l-8-6.22-8 6.22Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-9h-4v9a1 1 0 1 1-2 0V12Z"></path></svg>
          <p>Workplace</p>
          
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.3 8.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path></svg>
          </button>
          <button className="border border-gray-300 bg-white px-4 py-2 rounded-2xl flex flex-row gap-3">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2a8 8 0 0 0-8 8c0 3.1 2.02 6.1 4.23 8.44A29.42 29.42 0 0 0 12 21.77l.78-.6c.82-.65 1.9-1.59 3-2.73C17.97 16.1 20 13.1 20 10a8 8 0 0 0-8-8Zm0 21-.56.83-.03-.02a9.7 9.7 0 0 1-.38-.27l-1.06-.8c-.87-.7-2.03-1.7-3.2-2.93C4.48 17.4 2 13.91 2 10a10 10 0 0 1 20 0c0 3.9-2.48 7.4-4.77 9.81a31.43 31.43 0 0 1-4.64 4l-.03.02L12 23Zm0 0 .55.83a1 1 0 0 1-1.1 0L12 23Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"></path></svg>
          <p> Country Time or Zone </p>
          
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.3 8.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path></svg>
          </button>
          <button className="border border-gray-300 bg-white px-4 py-2 rounded-2xl flex flex-row gap-3">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 1.25h5.06c.67 0 1.22 0 1.66.03.46.03.86.1 1.25.26a3.75 3.75 0 0 1 2.22 2.71H21.08c.38 0 .71 0 1 .08.78.2 1.39.81 1.6 1.59.07.29.07.62.07 1v.2c0 .81 0 1.37-.13 1.85a3.75 3.75 0 0 1-2.65 2.65 7.5 7.5 0 0 1-1.85.13h-.07a5.75 5.75 0 0 1-3.27 2.72c-.77.25-1.66.28-3.03.28v2.5h.34a3.66 3.66 0 0 1 3.66 3.66c0 1.02-.82 1.84-1.84 1.84H9.09a1.84 1.84 0 0 1-1.84-1.84 3.66 3.66 0 0 1 3.66-3.66h.34v-2.5c-1.37 0-2.26-.03-3.03-.28a5.75 5.75 0 0 1-3.27-2.72h-.07c-.81 0-1.37 0-1.85-.13A3.75 3.75 0 0 1 .38 8.97a7.5 7.5 0 0 1-.13-1.85v-.2c0-.38 0-.71.08-1 .2-.78.81-1.39 1.59-1.6.29-.07.62-.07 1-.07H4.34a3.75 3.75 0 0 1 2.22-2.71c.39-.16.8-.23 1.25-.26.44-.03.99-.03 1.66-.03Zm-5.22 4.5H3c-.51 0-.62 0-.7.03a.75.75 0 0 0-.52.53c-.02.07-.03.18-.03.69 0 .98 0 1.32.08 1.58.2.78.81 1.39 1.59 1.6.2.05.44.06.98.07a17.7 17.7 0 0 1-.15-3.09V5.75Zm6.66 13c-1.2 0-2.16.97-2.16 2.16 0 .19.15.34.34.34h5.82c.19 0 .34-.15.34-.34 0-1.2-.97-2.16-2.16-2.16h-2.18Zm1.09-5.5c1.92 0 2.7 0 3.31-.2a4.25 4.25 0 0 0 2.73-2.74c.2-.6.21-1.39.21-3.31v-.5c0-.7 0-1.2-.03-1.59-.02-.38-.07-.6-.14-.77a2.25 2.25 0 0 0-1.22-1.22 2.42 2.42 0 0 0-.77-.14 25.9 25.9 0 0 0-1.59-.03h-5c-.7 0-1.2 0-1.59.03-.38.02-.6.07-.77.14-.55.23-.99.67-1.22 1.22-.07.17-.12.39-.14.77-.03.39-.03.88-.03 1.59V7c0 1.92 0 2.7.2 3.31a4.25 4.25 0 0 0 2.74 2.73c.6.2 1.39.21 3.31.21Zm7.6-3c.54 0 .78-.02.98-.08.78-.2 1.39-.81 1.6-1.59.06-.26.07-.6.07-1.58 0-.51 0-.62-.03-.7a.75.75 0 0 0-.53-.52 3.53 3.53 0 0 0-.69-.03h-1.25v1.41c0 1.38 0 2.32-.15 3.09Z"></path></svg>
          <p> Seniority</p>
          
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.3 8.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path></svg>
          </button>
          <button className="border border-gray-300 bg-white px-4 py-2 rounded-2xl flex flex-row gap-3">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" class="sc-4203a236-2 kWWHIw"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm0-1.5a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5Zm0 4.5c.41 0 .75.34.75.75v.75H13A2.75 2.75 0 0 1 15.75 10a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25h-.25v2.7l1.3.44a2.5 2.5 0 0 1-.8 4.86h-.5v.75a.75.75 0 0 1-1.5 0v-.75H11A2.75 2.75 0 0 1 8.25 14a.75.75 0 0 1 1.5 0c0 .69.56 1.25 1.25 1.25h.25v-2.7l-1.3-.44a2.5 2.5 0 0 1 .8-4.86h.5V6.5c0-.41.34-.75.75-.75Zm-.75 3h-.5a1 1 0 0 0-.32 1.94l.82.27V8.75Zm1.5 4.3v2.2h.5a1 1 0 0 0 .32-1.94l-.82-.27Z"></path></svg>
          <p>Pay</p>
          
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.3 8.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path></svg>
          </button>
          <button className="border border-gray-300 bg-white px-4 py-2 rounded-2xl flex flex-row gap-3">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M16.56 1.25H17.23c.81 0 1.47 0 2 .04.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47.04.53.04 1.19.04 2V7.45c0 .88 0 1.45-.13 2-.12.49-.31.95-.57 1.38-.3.48-.7.88-1.33 1.5l-.06.07-1.35 1.35.25 1.24.03.12c.22 1.12.36 1.83.3 2.54a4.75 4.75 0 0 1-.54 1.77 8.87 8.87 0 0 1-1.66 1.95l-.08.08-1.08 1.08a.75.75 0 0 1-1.14-.1l-2.1-2.93-.18.1a4.75 4.75 0 0 1-4.22 0c-.7-.35-1.33-.97-2.3-1.96-.05-.03-.08-.07-.12-.11l-.11-.11c-.99-.98-1.61-1.61-1.96-2.31a4.75 4.75 0 0 1 .1-4.4L1.56 8.6a.75.75 0 0 1-.09-1.14l1.08-1.08.08-.08c.8-.8 1.32-1.32 1.95-1.66.55-.3 1.15-.47 1.77-.54.7-.06 1.42.08 2.54.3l.12.03 1.24.25 1.34-1.35.07-.06a8.7 8.7 0 0 1 1.51-1.33c.43-.26.9-.45 1.38-.57.54-.13 1.12-.13 2-.13ZM11 6.05a.78.78 0 0 0 .04-.04l1.6-1.6a8 8 0 0 1 1.3-1.18c.3-.18.62-.31.95-.39a8 8 0 0 1 1.75-.09h.55c.85 0 1.45 0 1.9.04.46.04.72.1.92.2.42.22.77.57.98.99.1.2.17.46.21.91.04.46.04 1.06.04 1.91v.55c0 1.01 0 1.4-.1 1.75-.07.33-.2.65-.38.94a8 8 0 0 1-1.18 1.3l-5.12 5.13c-1.13 1.13-1.58 1.56-2.03 1.79-.9.45-1.97.45-2.88 0-.38-.19-.74-.51-1.5-1.26l1.47-1.47a.75.75 0 0 0-1.06-1.06L7 15.94a6.52 6.52 0 0 1-1.26-1.5 3.25 3.25 0 0 1 0-2.88c.23-.45.66-.9 1.79-2.03l3.48-3.48Zm-2.03-.09-.27-.05a8.23 8.23 0 0 0-2.21-.3c-.43.04-.84.16-1.22.37-.4.21-.75.55-1.67 1.47l-.45.45 2.27 1.63c.26-.29.57-.6.93-.95l.1-.11 2.52-2.51Zm5.5 12.61 1.62 2.27.45-.45a8.23 8.23 0 0 0 1.48-1.67c.2-.38.32-.8.36-1.22.05-.45-.04-.94-.3-2.21l-.05-.27-2.51 2.51-.11.11c-.36.36-.66.67-.95.93ZM15 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"></path></svg>
          <p>Travel</p>
          
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.3 8.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path></svg>
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default JobSearch;
