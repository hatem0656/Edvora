import { Nav, Item, Dropdown } from "./RideNav.styled";
import useRideNav from "./useRideNav";
const Rides = ["Nearest rides", "Upcoming rides", "Past rides"];
const RideNav = ({ setSelectedList, nextRides, pastRides }) => {
  const { active, changeActive } = useRideNav();
  return (
    <Nav>
      {Rides.map((Ride, index) => (
        <Item
          key={index}
          id={index}
          active={active[index]}
          onClick={(event) => {
            setSelectedList(Ride);
            changeActive(event.target.id);
          }}
        >
          {Ride}
          {index === 1 && nextRides && <span> ({nextRides})</span>}
          {index === 2 && pastRides && <span> ({pastRides})</span>}
        </Item>
      ))}

      <Dropdown>
        <i className="bi bi-filter-left"></i>
        Filters
      </Dropdown>
    </Nav>
  );
};

export default RideNav;
