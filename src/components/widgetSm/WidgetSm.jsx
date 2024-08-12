import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

export const WidgetSm = () => {
  return <div className="widgetSm">
   <span className="widgetSmTitle">New Join Members</span>
   <ul className="widgetSmList">
      <li className="widgetSmListItem">
         <img src="./image/img1.jpg" alt="img" className="widgetSmImg" />
         <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
         </div>
         <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
         </button>
      </li>

      <li className="widgetSmListItem">
         <img src="./image/img2.jpeg" alt="img" className="widgetSmImg" />
         <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
         </div>
         <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
         </button>
      </li>

      <li className="widgetSmListItem">
         <img src="./image/img3.jpg" alt="img" className="widgetSmImg" />
         <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
         </div>
         <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
         </button>
      </li>

      <li className="widgetSmListItem">
         <img src="./image/img4.jpeg" alt="img" className="widgetSmImg" />
         <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
         </div>
         <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
         </button>
      </li>

      <li className="widgetSmListItem">
         <img src="./image/img.jpg" alt="img" className="widgetSmImg" />
         <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
         </div>
         <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
         </button>
      </li>
   </ul>

  </div>;
};
export default WidgetSm;
