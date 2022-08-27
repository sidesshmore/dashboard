import "./newUser.css"

export default function NewUser() {
  return (
    <div className='NewUser'>
       <h1 className="newUserTitle">New User</h1>
       <form className="newUserForm">
           <div className="newUserItem">
               <label htmlFor="">Username</label>
               <input type="text" placeholder="cersie" />
           </div>
           <div className="newUserItem">
               <label htmlFor="">Full Name</label>
               <input type="text" placeholder="Cersie Lannister" />
           </div>
           <div className="newUserItem">
               <label htmlFor="">Email</label>
               <input type="email" placeholder="cersie@gmail.com" />
           </div>
           <div className="newUserItem">
               <label htmlFor="">Password</label>
               <input type="password" placeholder="cersie" />
           </div>
           <div className="newUserItem">
               <label htmlFor="">Phone</label>
               <input type="text" placeholder="+91 69 123 45678" />
           </div>
           <div className="newUserItem">
               <label htmlFor="">Address</label>
               <input type="text" placeholder="Thane | India" />
           </div>
           <div className="newUserItem">
               <label htmlFor="">Gender</label>
               <div className="newUserGender">
               <input type="radio" name="gender" id="male" value="male"/>
               <label for="male">Male</label>
               <input type="radio" name="gender" id="female" value="female"/>
               <label for="female">Female</label>
               <input type="radio" name="gender" id="other" value="other"/>
               <label for="other">Other</label>
               </div>
           <button className="newUserButton">Create</button>
           </div>
           <div className="newUserItem">
               <label>Active</label>
               <select className="newUserSelect" name="active" id="active">
                   <option value="yes">Yes</option>
                   <option value="no">No</option>
               </select>
           </div>
       </form>
    </div>
  )
}
