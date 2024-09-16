import { useContext } from 'react';
import { assets } from '../../assets/assets'
import { context } from '../../context/context';
import './Main.css'
function Main(){
    const date=new Date();
    const time=date.getHours();
    const{Onsent,recentPrompt,showResult,loading,resultData,input,setInput}=useContext(context);
return(
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>

        </div>
      
        <div className="main-container">
            {!showResult?<><div className="greet">
                
                <p>
                    {time>=0 && time<12 && <span>Good Morning,</span>}
                    {time>=12 && time<=16 && <span>Good Afternoon,</span>}
                        {time>16 && time<=23 &&<span>Good Evening,</span> }</p>
                       
                <p>How can I help you today</p>
                
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest Beautiful Places to see on an upcoming RoadTrip</p>
                    <img src={assets.compass_icon}/>

                </div>

                <div className="card">
                    <p>Suggest an organized list of the best food spots in a city</p>
                    <img src={assets.bulb_icon}/>
                    
                </div>

                <div className="card">
                    <p>BrainStrom a tagline for my online store</p>
                    <img src={assets.message_icon}/>
                    
                </div>

                <div className="card">
                    <p>Help design a Database schema for a bussiness </p>
                    <img src={assets.code_icon}/>
                    
                </div>
            </div></>:
            <div className='result'> 
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p> }
                    
                </div>
                </div>
                }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} placeholder='Enter a Prompt Here' />
                    <div>
                        {/* <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" /> */}
                        {input?<img onClick={()=>{Onsent()}}src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. 
                </p>
            </div>
        </div>
    </div>
)
}
export default Main