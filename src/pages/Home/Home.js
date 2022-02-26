/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "../../helpers/Container.styled";
import RideNav from "../../components/RideNav/RideNav";
import RideCard from "../../components/RideCard/RideCard";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import getDistance from "../../utilts/getDistance";

const Home = ({ user }) => {
  const {
    loading,
    data: rides,
    error,
  } = useFetch("https://assessment.api.vweb.app/rides");
  const [selectedList, setSelectedList] = useState("Nearest rides");
  const [sortedRides, setSortedRides] = useState(null);
  const [selectedRides, setSelectedRides] = useState(null);
  const [nextridesNo, setNextRidesNo] = useState(null);
  const [pastridesNo, setPastRidesNo] = useState(null);
  const date = new Date();
  useEffect(() => {
    if (rides) {
      rides.forEach(
        (ride) =>
          (ride.distance = getDistance(ride.station_path, user.station_code))
      );
      rides.sort((a, b) => (a.distance > b.distance ? 1 : -1));
      setSortedRides(rides);
      setNextRidesNo(
        rides.filter((ride) => new Date(ride.date) >= date).length
      );
      setPastRidesNo(rides.filter((ride) => new Date(ride.date) < date).length);
    }
  }, [rides]);

  useEffect(() => {
    if (sortedRides) {
      switch (selectedList) {
        case "Nearest rides":
          setSelectedRides(sortedRides);
          break;
        case "Upcoming rides":
          setSelectedRides(
            sortedRides.filter((ride) => new Date(ride.date) >= date)
          );

          break;
        case "Past rides":
          setSelectedRides(
            sortedRides.filter((ride) => new Date(ride.date) < date)
          );
          break;
        default:
      }
    }
  }, [sortedRides, selectedList]);

  return (
    <Container>
      <RideNav
        setSelectedList={setSelectedList}
        nextRides={nextridesNo}
        pastRides={pastridesNo}
      />
      {selectedRides &&
        selectedRides.map((ride, index) => (
          <RideCard id={index} key={index} ride={ride} />
        ))}
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
    </Container>
  );
};

export default Home;
