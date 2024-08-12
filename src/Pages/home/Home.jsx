import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/WidgetSm/widgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="ActiveUser" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
export default Home;
