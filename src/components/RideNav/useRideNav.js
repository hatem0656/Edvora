import { useState } from "react";
const initialStates = [true, false, false];
const useRideNav = () => {
  const [active, setActive] = useState(initialStates);
  const changeActive = (id) => {
    setActive(active.map((item, index) => index === parseInt(id)));
  };
  return { active, changeActive };
};

export default useRideNav;
