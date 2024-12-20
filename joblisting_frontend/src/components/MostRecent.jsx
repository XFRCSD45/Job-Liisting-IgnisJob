import React from 'react'

const MostRecent = () => {
  return (
    <div className='flex flex-row gap-2 border border-blue-600 text-blue-600 p-2 rounded-2xl  place-self-end mr-0 my-5 '>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" class="sc-4203a236-2 kWWHIw"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm3 6c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Zm4 6c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"></path></svg>
      <p>Most Recent</p>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" width="24" ><path fill-rule="evenodd" clip-rule="evenodd" d="M5.3 8.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path></svg>
    </div>
  )
}

export default MostRecent;
