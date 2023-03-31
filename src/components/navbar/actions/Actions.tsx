/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Actions.css";
import React, {useState, useEffect, useRef} from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import QrCodeScannerSharpIcon from '@mui/icons-material/QrCodeScannerSharp';
import LoginForm from "../../auth/LoginForm";

function Actions(){

    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleLoginClick = () => {
     
      if(open){
      setOpen(!open);

    }
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    }

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
        <div className="button primary-button">
               <QrCodeScannerSharpIcon/>         
               &nbsp;
            Get App
            
            </div>
        <div className="button secondary-button" onClick={handleLoginClick}>
          Log In
        </div>
        
        <div className="profile" onClick={()=>{setOpen(!open)}}>
            <PersonOutlineOutlinedIcon/>
            <ArrowDropDownIcon/>
        </div>

        <LoginForm isOpen={isOpen} onClose={handleCloseModal} />
        
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} ref={menuRef}>
          
        <ul>
            <li className = 'dropdownItem' onClick={handleLoginClick}>
              <a> Log In/ Sign Up </a>
            </li>
        </ul>

        </div>


      </div>;
}


export default Actions;