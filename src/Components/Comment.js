//Spliting components into smaller components

let Avatar = (props) => {
    return (
        <img src={props.user.url} alt={props.user.name} />
    )
}

let UserInfo = (props) => {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

let Comment = (props) => {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.author.text}
            </div>
            <div className="Comment-date">
                {props.author.date}
            </div>
        </div>
    )
}


export default Comment;