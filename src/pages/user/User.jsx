import "./user.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to = "/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src="https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*" alt="" className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Jon Snow</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon"/>
              <span className="userShowInfoTitle">jonsnow69</span>
              </div>
              <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon"/>
              <span className="userShowInfoTitle">23/8/2000</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon"/>
              <span className="userShowInfoTitle">+91 123456789</span>
              </div>
              <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon"/>
              <span className="userShowInfoTitle">jonsnow69@gmail.com</span>
              </div>
              <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon"/>
              <span className="userShowInfoTitle">Vasai | India</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input type="text"  placeholder="jonsnow69" className="userUpdateInput" />
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input type="text"  placeholder="Jon Snow" className="userUpdateInput" />
                  </div>
                  <div className="userUpdateItem">
                    <label>E mail</label>
                    <input type="text"  placeholder="jonsnow69@gmail.com" className="userUpdateInput" />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input type="text"  placeholder="+91 123456789" className="userUpdateInput" />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input type="text"  placeholder="Vasai | India" className="userUpdateInput" />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img className="userUpdateImg" src="https://hips.hearstapps.com/hmg-prod/images/jon-snow-game-of-thrones-season-8-episode-1-sec-1555086224.jpg?crop=1.00xw:0.668xh;0,0.0369xh&resize=640:*" alt="" />

                    <label htmlFor="file">
                      <PublishIcon className="userUpdateIcon"/>
                    </label>
                    <input type="file" id="file" style={{display: "none"}}/>
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
          </div>
        </div>
    </div>
  )
}
