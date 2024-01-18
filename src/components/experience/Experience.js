import React,{useState} from 'react'
import WorkAlert from './WorkAlert'
import './experience.css'
import WorkTimeline from './WorkTimeline'
import WorkDetails from './WorkDetails'
import {Experiences} from '../../commons/masterData/masterData'

export default function Experience() {
  const [activeJob, setActiveJob] = useState(3);

  function onChangeActiveJob(aj) {
    console.log(aj)

    setActiveJob(aj);
  }
  return (
    <div>
        <WorkAlert/>
        <div className='work'>
            <h3>Where I've Worked!!</h3>
            
            <div className='d-flex-row'>
                <WorkTimeline experiences = {Experiences} activeJob={activeJob} onChangeActiveJob = {onChangeActiveJob}/>
                <WorkDetails job={Experiences.filter(elem=>elem.jobId==activeJob)[0]}/>
            </div>

        </div>
    </div>
  )
}
