import {
  CardContainer,
  CardImage,
  CardDescription,
  CardLabels,
  Label,
} from "./RideCard.styled";

import location from "./location.png";

const RideCard = ({ id, ride }) => {
  return (
    <CardContainer id={id} key={id}>
      <CardImage>
        <img src={location} alt="country flag" />
      </CardImage>

      <CardDescription>
        <div>
          <span>Ride Id : </span> {ride.id}
        </div>
        <div>
          <span>Origin Station : </span> {ride.origin_station_code}
        </div>
        <div>
          <span>station_path : </span> [{ride.station_path.toString()}]
        </div>
        <div>
          <span>Date : </span> {ride.date}
        </div>
        <div>
          <span>Distance : </span> {ride.distance}
        </div>
      </CardDescription>

      <CardLabels>
        <Label>{ride.city}</Label>
        <Label>{ride.state}</Label>
      </CardLabels>
    </CardContainer>
  );
};

export default RideCard;
