import React from 'react'
import WorkAlert from './WorkAlert'
import './experience.css'
import WorkTimeline from './WorkTimeline'
import WorkDetails from './WorkDetails'

export default function Experience() {
  return (
    <div>
        <WorkAlert/>
        <div className='work'>
            <h3>Where I've Worked!!</h3>
            
            <div className='d-flex-row'>
                <WorkTimeline/>
                <WorkDetails/>
            </div>

        </div>
    </div>
  )
}
