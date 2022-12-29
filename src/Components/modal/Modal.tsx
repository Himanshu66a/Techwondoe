import './modal.css'
import { useState } from 'react'
type userProp={
    id: number,
    name: string,
    email: string,
   
}

function Modal({name,id,email}:userProp) {
    const [Mname, setname] = useState(name);
    const [Memail, setemail] = useState(email);

    const handleClick = ()=>{
        
    }

  return (
    <div className='modal'>
        {/* <input type="text" value={name} />
        <input type="text" value={email} /> */}
        <form onSubmit={handleClick}>
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
    </div>
  )
}

export default Modal