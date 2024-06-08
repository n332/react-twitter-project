import React from "react";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <div className="sideBarSplitter">
        <div className="sideBarItemsContainer">
          <div className="sideBarLogoContainer">
            <img
              className="sideBarLogo"
              src="/Assets/x-logo.png"
              alt="Sidebar Twitter / X"
            />
          </div>
          <a href="/home" className="sideBarItem">
            <img
              src="/Assets/home.png"
              alt="Sidebar Home tab Icon"
              className="sideBarItemIcon"
            />
            <span className="sideBarItemText">Home</span>
          </a>
          <a href="/explore" className="sideBarItem">
            <img
              src="/Assets/SI.png"
              alt="Sidebar Explore tab Icon"
              className="sideBarItemIcon"
            />
            <span className="sideBarItemText">Explore</span>
          </a>
          <a href="/bookmarks" className="sideBarItem">
            <img
              src="/Assets/bookmark.png"
              alt="Sidebar Bookmarks tab Icon"
              className="sideBarItemIcon"
            />
            <span className="sideBarItemText">Bookmarks</span>
          </a>
          <a href="/notifications" className="sideBarItem">
            <img
              src="/Assets/notification.png"
              alt="Sidebar Notifications tab Icon"
              className="sideBarItemIcon"
            />
            <span className="sideBarItemText">Notifications</span>
          </a>
          <a href="/profile" className="sideBarItem">
            <img
              src="/Assets/profile.png"
              alt="Sidebar Home tab Icon"
              className="sideBarItemIcon"
            />
            <span className="sideBarItemText">Profile</span>
          </a>
        </div>
        <div className="sideBarBottomContainer">
          <button className="post-button">Post</button>
          <div className="sideBarProfileItem">
            <img
              alt="Sidebar profile icon"
              src="/Assets/person1.jpeg"
              className="sideBarProfileAvatar"
            />
            <div className="sideBarProfileData">
              <div className="sideBarProfileName">Youssef</div>
              <div className="sideBarProfileUsername">@Youssef</div>
            </div>
            <img
              src="/Assets/sidebar-option.png"
              alt="Side bar options"
              className="sideBarProfileOptions"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
