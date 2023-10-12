import TechnologyData from "../data.json";

const TechnologyDetail=({technology})=>{
    const technologyN = TechnologyData.technology.find(tech => tech.name === technology);
    if (!technologyN) {
        return <div>Technology not found.</div>;
    }
    return(
        <div className="techDetail">
            <div>
                <h3 className="heading1">THE TERMINOLOGY ...</h3>
                <h1>{technologyN.name}</h1>
                <div>
                    <p>
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                    it's quite an awe-inspiring sight on the launch pad!
                    </p>
                </div>
            </div>
            <div>
                <img src={require(`../assets/technology/${technologyN.images.portrait}`)} alt="" />
            </div>
        </div>
    )
}

export default TechnologyDetail;