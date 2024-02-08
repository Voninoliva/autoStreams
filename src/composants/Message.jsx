import { useEffect } from "react";

export default  function Message({data}){
    const token = localStorage.getItem('token');
    useEffect(()=>{
        if(token==null){
            document.querySelector("#sign-ins").click();
        }
    },[]);
    return (<>
        <h1>Messages ato</h1>
        </>);
}