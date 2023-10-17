import { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/crew.css"
import MemberDetail from "../components/MemberDetail"

const CrewMembers =()=>{
    const [member, setMember] = useState("Douglas Hurley");
    const handleMember =(value)=>{
        setMember(value);
        console.log(member)
    }
    return(
        <div className="crew">
            <NavBar/>
            <div className="sub-crew">
                <h1 className="heading"><span className="one">02</span> Meet your crew</h1>
            </div>
            <MemberDetail memberName={member}/>
            <div className="crew-nav">
                <div onClick={()=> handleMember("Douglas Hurley")}
                className={member === "Douglas Hurley" ? "act" : ""}
                >
                    
                </div>
                <div onClick={()=> handleMember("Mark Shuttleworth")}
                className={member === "Mark Shuttleworth" ? "activee" : ""}
                >
                    
                </div>
                <div onClick={()=> handleMember("Victor Glover")}
                className={member === "Victor Glover" ? "activee" : ""}
                >
                    
                </div>
                <div onClick={()=> handleMember("Anousheh Ansari")}
                className={member === "Anousheh Ansari" ? "activee" : ""}
                >
                    
                </div>
            </div>
        </div>
    )
}
export default CrewMembers;