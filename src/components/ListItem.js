
export default function ListItem(props){
    return (
        <tr onClick={()=> props.buttonPress(props.coach._id+" has been pressed")}>
        <td>{props.coach.name}</td>
        <td>{props.coach.location}</td>
        <td>{props.coach.avgRating}</td>
    </tr>
    )
}