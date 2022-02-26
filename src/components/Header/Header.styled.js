import styled from "styled-components";

export const Styledheader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  width: 100%;

  h1 {
    font-size: 36px;
    flex: 1;
    margin: 0;
  }
  & > div {
    display: flex;
    align-items: center;
  }
  i {
    color: inherit;
    font-size: 16px;
    cursor: pointer;
    &:hover::before {
      transform: rotateZ(15deg);
    }
    &::before {
      transform: rotateZ(0deg);
      transition: 0.2s;
    }
  }
  span {
    display: inline-block;
    margin-left: 15px;
  }
`;

export const ImageWrapper = styled.div`
  transform: translateY(5px);
  width: 44px;
  height: 44px;
  margin-left: 25px;
  cursor: pointer;
  img {
    border-radius: 50%;
  }
`;
