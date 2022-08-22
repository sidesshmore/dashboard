import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Kelle</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>
                    Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Kelle</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>
                    Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://randomuser.me/api/portraits/women/36.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Kelle</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>
                    Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://minimaltoolkit.com/images/randomdata/male/38.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Kelle</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>
                    Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Kelle</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}