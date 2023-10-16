import { useState } from 'react';
import NavBar from '../components/NavBar';
import technologyData from "../data.json"

import '../styles/tech.css'
import TechnologyDetail from '../components/TechnologyDetail';
const Technology=()=>{
    const [technologyName, setTechnology] = useState("Launch vehicle")
    const handleClick = (value)=>{
        setTechnology(value);
    }
    return(
        <div className="tech-main">
            <NavBar activeLink={"Technology"}/>
            <div className="sub2">
                <div>
                    <h1 className="heading"><span className="one">03</span> SPACE LAUNCH 101</h1>
                    <div className='circles'>
                        <div onClick={()=> handleClick("Launch vehicle")}
                        className={technologyName === "Launch vehicle" ? "act" : ""}
                        >
                            1
                        </div>
                        <div onClick={()=> handleClick("Spaceport")}
                        className={technologyName === "Spaceport" ? "act" : ""}
                        >
                            2
                        </div>
                        <div onClick={()=> handleClick("Space capsule")}
                        className={technologyName === "Space capsule" ? "act" : ""}
                        >
                            3
                        </div>

                    </div>
                </div>
                {technologyData.technology.map((tech) => (
                    <div key={tech.name}>
                        {tech.name === technologyName && (
                        <TechnologyDetail technology={tech.name}/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Technology;