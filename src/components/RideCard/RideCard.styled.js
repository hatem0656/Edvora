import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 22px 30px 28px;
  margin-bottom: 13px;

  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow || "initial"};
`;

export const CardImage = styled.div`
  width: 296px;
  height: 148px;
  margin-right: 44px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const CardDescription = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 7px;
  div:not(:last-child) {
    margin-bottom: 8px;
  }
  span {
    color: ${({ theme }) => theme.fontSecondaryColor};
  }
`;

export const CardLabels = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  font-size: 12px;
`;

export const Label = styled.span`
  margin-right: 24px;
  padding: 4px 10px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.mainColor};
`;
