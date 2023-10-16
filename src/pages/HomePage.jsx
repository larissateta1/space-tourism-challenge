import NavBar from "../components/NavBar";
import "../styles/home.css"
const Home=()=>{
    return(
        <div className="home-main">
            <NavBar/>
            <div className="main1">
            <div className="sub-main">
                <div className="head">
                <h1 className="heading">So, you want to travel to
                    <span className="space">Space</span>
                </h1>
                </div>

                <div className="details1">
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p>
                
                </div>
            </div>

            <div className="group-hover">
                <div className="group">
                <div className="overlap-group1">
                    <div className="explore">
                    Explore
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;