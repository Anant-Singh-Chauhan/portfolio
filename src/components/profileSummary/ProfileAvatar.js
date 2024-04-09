import React from "react";
import { avatar, profilePic } from "../../assests/images/images";
export default function ProfileAvatar() {
  return (
    <div className="scene">
      <div className="card">
        <div className="card__face card__face--front">
          <img src={avatar} alt="avatarImg" />
        </div>
        <div className="card__face card__face--back">
          <img src={profilePic} alt="profilePic" />
        </div>
      </div>
    </div>
  );
}
