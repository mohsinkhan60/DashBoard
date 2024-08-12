import "./topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Mohsin Dev</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconsContainer">
            <LanguageIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconsContainer">
            <SettingsIcon />
          </div>
          <img src="./image/img.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};
export default Topbar;
