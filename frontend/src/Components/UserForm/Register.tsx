import { Link, useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import { Container, LinkContainer, StyledHeadline } from "./Login";

export default function Register(): JSX.Element {
  const navigate = useNavigate();

  async function handleSubmit(username: string, password: string, passwordAgain: string) {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, passwordAgain}),
      }
    );
    if (response.status === 201) {
      navigate("/");
    } else {
      alert("Benutzername vorhanden!");
    }
  }

  return (
    <Container>
      <StyledHeadline>Jetzt registrieren und starten!</StyledHeadline>
      <UserForm type="Registrieren" onSubmit={handleSubmit} />
      <LinkContainer>
        <Link to="/">Login</Link>
      </LinkContainer>
    </Container>
  );
}
