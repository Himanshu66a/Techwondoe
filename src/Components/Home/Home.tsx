import React, { useState, useEffect,useRef } from 'react'
import axios from 'axios'
import User from '../User/User'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark } from '@fortawesome/free-solid-svg-icons'


import './home.css'
type UserInfo = {
    id: number,
    name: string,
    email: string,
}[]



function Home() {
    const home = useRef<HTMLDivElement>(null);
    const [users, setusers] = useState<UserInfo>([] as UserInfo);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [newUser, setnewUser] = useState({})
    const [flag, setflag] = useState(false)
    let id = 10;

    useEffect(() => {
        const get = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(res);
            setusers(res.data)
        }
        get()
    }, [])
    console.log(users);



    const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const temp = {
            name: name,
            email: email,
            id: Math.floor((Math.random() * 100) + 171)
        }
        console.log(temp);
        const res = await axios.post("https://jsonplaceholder.typicode.com/users", temp);
        console.log(res.data)
        setusers([...users, res.data])
        setflag(false)
        setname('')
        setemail('')
    }
const blurBg = ()=>{
    console.log('blur');
    
    // home.current?.style.opacity(0.5);
}

    return (
        <div className='home' ref={home} >
            <div className="outer-container">
                <div className="header">
                    <span>USERS </span>

                    <button onClick={() => setflag(true)} >+ Add User</button>
                </div>
                <div className="underline"></div>
                <div className="row-details">
                    <span className="name">
                        Name
                    </span>
                    <span className="status">
                        Status
                    </span>
                    <span className="last-login">
                        Last Login
                    </span>
                </div>
                {
                    flag && 
                    <div className="addUserModal" >
                        <div className="head">Add User Details Here</div>
                        <form onSubmit={handleClick} className='submitform' >
                            <input
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                type="text"
                                placeholder="Enter name"
                                className="input"
                            />
                            <input
                                value={email}
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

                <div className="inner-container">
                    {
                        users.map((user) => (

                            <User name={user.name} email={user.email} id={user.id}  />
                        ))
                    }
                </div>
                <div>
                </div>

            </div>
        </div>
    )
}

export default Home