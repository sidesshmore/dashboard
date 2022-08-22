import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
        <span className="widgetLgTitle">Latest Transactions</span>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Hiren Carol</span>
            </td>
            <td className="widgetLgDate"> 2 July 2022</td>
            <td className="widgetLgAmount">₹7830</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Hiren Carol</span>
            </td>
            <td className="widgetLgDate"> 2 July 2022</td>
            <td className="widgetLgAmount">₹7830</td>
            <td className="widgetLgStatus"><Button type="Declined"/></td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Hiren Carol</span>
            </td>
            <td className="widgetLgDate"> 2 July 2022</td>
            <td className="widgetLgAmount">₹7830</td>
            <td className="widgetLgStatus"><Button type="Pending"/></td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://xsgames.co/randomusers/assets/avatars/male/63.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Hiren Carol</span>
            </td>
            <td className="widgetLgDate"> 2 July 2022</td>
            <td className="widgetLgAmount">₹7830</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
        </table>
    </div>
  )
}