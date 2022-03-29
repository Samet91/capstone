import { useEffect, useState } from "react";
import { Travel } from "../../model";
import PastTravelForm from "../PastTravel/PastTravelForm";
import TravelItem from "../TravelItem/TravelItem";

export default function PastTravelList() {
  const [items, setItems] = useState([] as Array<Travel>);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = (
    url: string = `${process.env.REACT_APP_BASE_URL}/api/travel`
  ) => {
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(
          "Fehler beim ermitteln der Daten. statuscode: " + response.status
        );
      })
      .then((responseBody: Array<Travel>) => {
        setItems(responseBody);
      })
      .catch((e) => setErrorMessage(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <PastTravelForm onSubmit={setItems} />
      <div>
        {items.map((travel) => (
          <TravelItem key={travel.id} travel={travel} onTodoDeletion={fetchData} />
        ))}
        {errorMessage}
      </div>
    </div>
  );
}
