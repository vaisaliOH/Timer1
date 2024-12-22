import React,{useState,useEffect}from "react";

function Digitalclock(){

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval=setInterval(()=>{
            setTime(new Date());
            },1000);
        return () => {
            clearInterval(interval);}},[]);  

    function formattime(){
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridiem=hours>=12?"PM":"AM";

        hours=hours%12||12;
        return `${zero(hours)}:${zero(minutes)}:${zero(seconds)} ${meridiem}`;

        function zero(number){
            return(number<10?"0":"")+number;
        }
    }  
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formattime()}</span>
            </div>
        </div>
    )
}
export default Digitalclock;