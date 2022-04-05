import { Travel } from "../../model";

interface TodoItemProps {
  travel: Travel;
  onTodoDeletion: () => void;
}

export default function TravelItem(props: TodoItemProps) {
  const deleteTravel = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/travel/${props.travel.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",

        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }).then(() => props.onTodoDeletion());
  };

  return (
    <>
      <div>
        <h3>Stadt/Land: {props.travel.city}</h3>
        <p>{props.travel.startDate}</p>
        <p>{props.travel.endDate}</p>
        <p>{props.travel.notes}</p>
        <button onClick={deleteTravel}>X</button>
      </div>
    </>
  );
}
