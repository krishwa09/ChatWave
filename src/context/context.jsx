import { createContext, useState } from "react";
import run from "../config/gemini";
export const context=createContext();
const  ContextProvider=(props)=>{
    const[input,setInput]=useState("");
    const[recentPrompt,setRecentPrompt]=useState("");
    const[prevPrompt,setPrevPrompt]=useState([]);
    const[showResult,setShowResult]=useState(false);
    const[loading,setLoading]=useState(false);
    const[resultData,setResultdata]=useState("");
   
    const delayPara=(index,nextword)=>
    {
        setTimeout(function(){
            setResultdata(prev=>prev+nextword);
        },75*index)
    }

    const newchat=()=>{
        setLoading(false);
        setShowResult(false);
    }
    const Onsent=async(prompt)=>{
        setResultdata("");
        setLoading(true);
        setShowResult(true);
        let respons;
        if(prompt!==undefined)
        {
            respons=await run(prompt);
            setRecentPrompt(prompt);
        }
        else{
            setPrevPrompt(prev=>[...prev,input])
            setRecentPrompt(input);
            respons=await run(input);
        }
        
        let responsearray=respons.split("**");
        let newarray="";
        for(let i=0; i<responsearray.length; i++)
        {
            if(i===0 || i%2!==1)
            {
                newarray+=responsearray[i];
            }
            else{
                newarray+="<b>"+responsearray[i]+"</b>";
            }
        }
     let newresponse2=newarray.split("*").join("</br>");

      let newResponseArray=newresponse2.split(" ");
      for(let i=0; i<newResponseArray.length; i++)
      {
        const newword=newResponseArray[i];
        delayPara(i,newword+" ");

      }
        setLoading(false);
        setInput("");
    }
    const ContextValue={
prevPrompt,
setPrevPrompt,
Onsent,
setRecentPrompt,
recentPrompt,
showResult,
loading,
resultData,
input,
setInput,
newchat
    }
   
    return (
        <context.Provider value={ContextValue}>{props.children}</context.Provider>
    )
}
export default ContextProvider