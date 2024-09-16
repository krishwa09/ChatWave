import './SideBar.css' 
import { assets } from '../../assets/assets';
import { useState } from 'react';
import { useContext } from 'react';
import { context } from '../../context/context';
function SideBar(){
    const{Onsent, prevPrompt,setRecentPrompt,newchat}=useContext(context);
    const [extended,Setextended]=useState(false);
    const loadPrompt=async(prompt)=>{
        setRecentPrompt(prompt);
        await Onsent(prompt);
    }
    return(
        <>
    <div className="sidebar">
        <div className="top">
        <img className="menu" src={assets.menu_icon} onClick={()=>(Setextended(prev=>!prev))} alt=''/>
        <div onClick={()=>newchat()} className="new-chat">
            <img src={assets.plus_icon} alt=''/>
            {extended?<p>New Chat</p>:null}
            
        </div>
        {extended?
         <div className="recent">
         <p className="recent-title">
             Recent</p>
             {prevPrompt.map((iten,index)=>{
                return(
                    
                    <div onClick={()=>loadPrompt(iten)} key={index} className="recent-entry" >
                    <img src={assets.message_icon}  alt=''/>
                    <p>{iten.slice(0,18)}...</p>
                </div>
                )
             })}
             
         
     </div>:null}
       
        </div>
        {/* <div className="bottom">
            <div className="bottom-item recent-entry">
           
            
        </div>
       
         <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended?<p>Activity</p>:null}
        </div>
        </div>

       
            <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Setting</p>:null}
        </div>
        </div>
        
    </div> */}
    </div>

    </>
    )
}
export default SideBar;