import { HiLogout } from "react-icons/hi";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <Nav>
        <Link to={""}>
          <FutureTrip />
        </Link>
        <Link to={""}>
          <PastTrip />
        </Link>

        <Link to={""}>
          <LogoutIcon />
        </Link>
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
