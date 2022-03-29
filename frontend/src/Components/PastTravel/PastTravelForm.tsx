import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Travel } from "../../model";
import Button from "../Button/Button";

interface PastTravelFormProps {
  onSubmit: (travel: Array<Travel>) => void;
}

export default function PastTravelForm(props: PastTravelFormProps) {
  const [city, setCity] = useState<string>(localStorage.getItem("city") ?? "");
  const [startDate, setStartDate] = useState<string>(
    localStorage.getItem("startDate") ?? ""
  );
  const [endDate, setEndDate] = useState<string>(
    localStorage.getItem("endDate") ?? ""
  );
  const [notes, setNotes] = useState<string>(
    localStorage.getItem("notes") ?? ""
  );

  const addTravel = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/api/travel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: city,
        startDate: startDate,
        endDate: endDate,
        notes: notes,
      }),
    })
      .then((response) => response.json())
      .then((travelFromBackend: Array<Travel>) =>
        props.onSubmit(travelFromBackend)
      );
    setCity("");
    setStartDate("");
    setEndDate("");
    setNotes("");
  };

  useEffect(() => {
    localStorage.setItem("city", city);
    localStorage.setItem("start", startDate);
    localStorage.setItem("end", endDate);
    localStorage.setItem("notes", notes);
  }, [city, startDate, endDate, notes]);

  return (
    <AddForm onSubmit={(event) => addTravel(event)}>
      <Label>
        Stadt:{" "}
        <Input
          type="text"
          maxLength={50}
          required
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </Label>

      <Label>
        Start:{" "}
        <Input
          type="date"
          required
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </Label>
      <Label>
        Ende:{" "}
        <Input
          type="date"
          required
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </Label>
      <Label>
        Notizen:{" "}
        <Input
          type="text"
          maxLength={50}
          required
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />
      </Label>

      <Button type="submit">Reise speichern</Button>
    </AddForm>
  );
}

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: blue;
  padding: 20px;
  color: yellow;
  font-size: 1.5rem;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  border: 0;
  border-radius: 5px;
  height: 1.5rem;
`;
