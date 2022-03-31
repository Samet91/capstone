import { useEffect, useState } from "react";
import styled from "styled-components";
import { Travel } from "../../model";
import Navigation from "../../Navigation/Navigation";
import AppTitle from "../AppTitle/AppTitle";
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
    <Container>
      <AppTitle>Trage deine Reisen ein!</AppTitle>
      <Main>
        <PastTravelForm onSubmit={setItems} />

        {items.map((travel) => (
          <TravelItem
            key={travel.id}
            travel={travel}
            onTodoDeletion={fetchData}
          />
        ))}
        {errorMessage}
      </Main>

      <Navigation />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows:60px auto 60px;
  height: 100vh;
  margin: 0 10px;
`;

const Main = styled.main`
  overflow-y: auto;
`;
