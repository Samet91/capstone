import { HiLogout } from "react-icons/hi";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  const navigate = useNavigate();

  const deleteToken = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };

  return (
    <>
      <Nav>
        <Link to={"/future"}>
          <FutureTrip />
        </Link>
        <Link to={"/home"}>
          <PastTrip />
        </Link>

        <LogoutIcon onClick={deleteToken} />
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: white;
  margin: 0 -10px;
`;

const FutureTrip = styled(GiAirplaneDeparture)`
  color: black;
  height: 1.5rem;
  width: 1.5rem;
`;

const PastTrip = styled(GiAirplaneArrival)`
  color: black;
  height: 1.5rem;
  width: 1.5rem;
`;

const LogoutIcon = styled(HiLogout)`
  color: black;
  height: 1.5rem;
  width: 1.5rem;
`;
