import memberData from "../data.json"
const MemberDetail=({memberName})=>{
    const member = memberData.crew.find( memb => memb.name === memberName);
    if(!member){
        return <div>Member not found</div>;
    }
    return(
        <div className="memberDetails">
            <div className="detai">
                <div>
                    <h1 className="role">{member.role}</h1>
                    <h1 className="name">{member.name}</h1>
                </div>
                <div className="bio">
                    <p>{member.bio}</p>
                </div>
            </div>
            <div>
                <img src={require(`../assets/crew/${member.images.png}`)}/>
            </div>
        </div>
    )
}

export default MemberDetail;