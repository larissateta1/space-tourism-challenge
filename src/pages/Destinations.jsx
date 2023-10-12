import "../styles/destinations.css"
import destinationsData from "../data.json"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import DestinationDetail from "../components/DestinationDetail"

const Destinations=()=>{
    const [destinationName, setDestinationName] = useState("Moon");
    
    const handleDestination =(value)=>{
        setDestinationName(value);
    }
    return(
        <div className="dest-main">
            <NavBar/>    
                <div>
                            <div className="sub">
                                <div>
                                    <h1 className="heading"><span className="one">01</span> Pick your destination</h1>
                                </div>
                                <div className="sub-nav">
                                    <ul>
                                        <li onClick={()=> handleDestination("Moon")} 
                                        className={destinationName === "Moon" ? "active1" : ""}
                                        >
                                            Moon
                                        </li>
                                        <li onClick={()=> handleDestination("Mars")}
                                        className={destinationName === "Mars" ? "active1" : ""}
                                        >
                                            Mars
                                        </li>
                                        <li onClick={()=> handleDestination("Europa")}
                                        className={destinationName === "Europa" ? "active1" : ""}
                                        >
                                            Europa
                                        </li>
                                        <li onClick={()=> handleDestination("Titan")}
                                        className={destinationName === "Titan" ? "active1" : ""}
                                        >
                                            Titan
                                        </li>
                                    </ul>
                                </div>
                            </div>
            {destinationsData.destinations.map((destination) => (
                <div key={destination.name}>
                    {destination.name === destinationName && (
                    <DestinationDetail destinationName={destination.name}/>
                    )}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Destinations;