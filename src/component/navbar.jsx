import "./navbar.scss";
import { ArrowDropDown,  Search } from "@material-ui/icons";
import { NotificationsNone } from "@material-ui/icons";
import avatar from "../images/avatar.png";
import { useState } from "react";

const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false);

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0?false:true);
        return()=>window.onscroll=null;
    }

  return (
    <div className={isScrolled?"navbar scrolled": "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="NETFLIX-LOGO"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>Favorite</span>
        </div>

        <div className="right">
          <Search className="icons" />
          <span>Me</span>
          <NotificationsNone className="icons" />
          <img src={avatar} alt="avatar" />
          <div className="profile">
            <ArrowDropDown className="icons" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
