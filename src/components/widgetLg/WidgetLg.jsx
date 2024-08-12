/* eslint-disable react/prop-types */
import "./widgetLg.css";

export const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
          
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="img"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="./image/img3.jpg"
              alt="img"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jaff Seis</span>
          </td>
          <td className="widgetLgDate">9 Feb 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="./image/img4.jpeg"
              alt="img"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Joe Carol</span>
          </td>
          <td className="widgetLgDate">5 Jul 2021</td>
          <td className="widgetLgAmount">$232.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="./image/img2.jpeg"
              alt="img"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Filip Dozr</span>
          </td>
          <td className="widgetLgDate">10 Aug 2021</td>
          <td className="widgetLgAmount">$132.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};
export default WidgetLg;
