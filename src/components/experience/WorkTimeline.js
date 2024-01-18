import React from 'react'

export default function WorkTimeline({experiences, activeJob, onChangeActiveJob}) {
  return (
    <div className='workTimeline m1p1'>
       {
        experiences.map(element=>
          <div>
            <div key={element.jobId} className={activeJob === element.jobId?"timeline_detail active":"timeline_detail"} onClick={()=>{onChangeActiveJob(element.jobId)}}>
              <h5>{element.companyName}</h5>
            </div>
          </div>
        )
       }
    </div>
  )
}

