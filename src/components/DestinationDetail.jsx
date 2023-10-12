import destinationsData from "../data.json"

const DestinationDetail = ({destinationName}) =>{
    const destination = destinationsData.destinations.find(dest => dest.name === destinationName);
    if (!destination) {
        return <div>Destination not found.</div>;
    }
    return(
        <div className="destinationDetails">
            <div>
                <img src={require(`../assets/destination/${destination.images.png}`)} alt="destination"/>
            </div>
            <div className="more">
                <h1 className="location">{destination.name}</h1>
                <div className="details">
                    <p>{destination.description}</p>
                </div>
                <div className="line"></div>
                    <div className="groups">
                        <div className="group-1">
                            <p>Avg. distance</p>
                            <h3>{destination.distance}</h3>
                        </div>
                        <div className="group-2">
                            <p>Est. travel time</p>
                            <h3>{destination.travel}</h3>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default DestinationDetail