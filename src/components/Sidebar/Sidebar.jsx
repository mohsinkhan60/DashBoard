import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PortraitIcon from '@mui/icons-material/Portrait';
import ReportIcon from '@mui/icons-material/Report';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
         <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
               <li className="sidebarListItem active">
               <LineStyleIcon className="sidebarIcon" />
               Home
               </li>
               <li className="sidebarListItem">
               <TimelineIcon className="sidebarIcon" />
               Analytics
               </li>
               <li className="sidebarListItem">
               <TrendingUpIcon className="sidebarIcon" />
               Sales
               </li>
            </ul>
         </div>

         <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
               <li className="sidebarListItem">
               <PermIdentityIcon className="sidebarIcon" />
               User
               </li>
               <li className="sidebarListItem">
               <LocalGroceryStoreIcon className="sidebarIcon" />
                Products
               </li>
               <li className="sidebarListItem">
               <AttachMoneyIcon className="sidebarIcon" />
                Transactions
               </li>
               <li className="sidebarListItem">
               <StackedBarChartIcon className="sidebarIcon" />
                Reports
               </li>
            </ul>
         </div>

         <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
               <li className="sidebarListItem">
               <MailOutlineIcon className="sidebarIcon" />
               Mail
               </li>
               <li className="sidebarListItem">
               <DynamicFeedIcon className="sidebarIcon" />
                Feedback
               </li>
               <li className="sidebarListItem">
               <ChatBubbleOutlineIcon className="sidebarIcon" />
                Messages
               </li>
            </ul>
         </div>

         <div className="sidebarMenu">
            <h3 className="sidebarTitle">staff</h3>
            <ul className="sidebarList">
               <li className="sidebarListItem">
               <PortraitIcon className="sidebarIcon" />
               Manage
               </li>
               <li className="sidebarListItem">
               <TimelineIcon className="sidebarIcon" />
               Analytics
               </li>
               <li className="sidebarListItem">
               <ReportIcon className="sidebarIcon" />
               Reports
               </li>
            </ul>
         </div>
      </div>
    </div>
  )
}
export default Sidebar