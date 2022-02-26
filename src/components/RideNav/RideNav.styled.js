import styled from "styled-components";

export const Nav = styled.ul`
  display: flex;
  font-size: 18px;
  margin-bottom: 30px;
`;
export const Item = styled.li`
  position: relative;
  margin-right: 30px;
  cursor: pointer;
  font-weight: 400;

  &: after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: ${({ theme }) => theme.fontColor};
    transition: 0.2s;
    position: absolute;
    bottom: -7px;
    left: 0;
  }

  ${(props) =>
    props.active
      ? `color: ${props.theme.fontColor} ;
        &:after{
          width: 100%; ;
        }   
      `
      : `color : ${props.theme.fontSecondaryColor}`};
`;

export const Dropdown = styled.div`
  margin-left: auto;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  i {
    margin-right: 5px;
    font-size: inherit;
  }
`;
