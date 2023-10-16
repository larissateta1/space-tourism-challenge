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
                        {technologyN.description}
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