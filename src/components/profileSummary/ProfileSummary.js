import React from 'react'
import Summary from './Summary';
import ProfileAvatar from './ProfileAvatar';
import WhatIKnow from './WhatIKnow';
import "./profileSummary.css";
export default function ProfileSummary() {
  return (
    <> 
        <div className="profileSummary">
            <Summary/>
            <ProfileAvatar/>
        </div>
        <WhatIKnow/>
    </>
  )
}
