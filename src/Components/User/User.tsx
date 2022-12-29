import './user.css'
import { JSXElementConstructor, useState,useRef } from 'react'
// import React, { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
type userProp = {
    id: number,
    name: string,
    email: string,


}


 const User = ({ name, id, email }: userProp) => {

    const blur = useRef<HTMLDivElement>(null);
    const [flag, setflag] = useState(false)
    const [Uname, setUname] = useState(name)
    const [Uemail, setUemail] = useState(email)
    const [Mname, setname] = useState(name);
    const [Memail, setemail] = useState(email);

    const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUname(Mname);
        setUemail(Memail);
        setflag(false);

    }
  
    return (
        <>

            <div className='user' ref={blur} >
                <img src="assets/noAvatar.png" className='userImg' alt="" />
                <div className='userInfo' >{Uname}
                    <div>{Uemail} </div>
                </div>
                <div className="status">
                    Online
                </div>
                <div className="lastLogin">
                    June 20,2022.
                </div>
                <FontAwesomeIcon icon={faTrash} id='trash'  />
                <FontAwesomeIcon icon={faPen} id='pen' onClick={() => setflag(true)} />

            </div>
            <div className="underline"></div>

           {
                
                flag &&
                <div className="addUserModal edit" >
                    <div className="head">Add User Details Here</div>
                    <form onSubmit={handleClick} className='submitform' >
                        <input
                            value={Mname}
                            onChange={(e) => setname(e.target.value)}
                            type="text"
                            placeholder="Enter name"
                            className="input"
                        />
                        <input
                            value={Memail}
                            onChange={(e) => setemail(e.target.value)}
                            type="text"
                            placeholder="Enter email"
                            className="input"
                        />
                        <button type="submit">Submit</button>

                    </form>
                    <FontAwesomeIcon icon={faXmark} id='close' onClick={()=>setflag(false)} />
                </div>
            }
        </>
    )
}

export default User