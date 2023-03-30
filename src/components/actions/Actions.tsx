/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Actions.css";
import React, {useState, useEffect, useRef} from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from "../button/Button";

function Actions(){

    const [open, setOpen] = useState(false);


  let menuRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let handler = (e:any)=>{
          if(!menuRef!.current!.contains(e.target)){
            setOpen(false);
            console.log(menuRef.current);
          }      
        };
    
        document.addEventListener("mousedown", handler);
        
    
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    
      });
    
    
    return <div className="actions">
        <Button primary label="Get App"/>
        <Button label="Log In"/>
        
        <div className="profile" onClick={()=>{setOpen(!open)}}>
            <PersonOutlineOutlinedIcon/>
            <ArrowDropDownIcon/>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} ref={menuRef}>
          <ul>
            <DropdownItem  text = {"Log In/Sign Up"}/>
          </ul>
        </div>


      </div>;
}

function DropdownItem(props:any){
  return(
    <li className = 'dropdownItem'>
      <a> {props.text} </a>
    </li>
  );
}

export default Actions;