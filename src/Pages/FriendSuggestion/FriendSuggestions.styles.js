import styled from "styled-components";

export const FriendSuggestionPage = styled.div`
  background-color: #8bc6ec;
  text-align: center;
  padding: 10px;
  min-height: 100vh;
`;

export const FriendSuggestionContent = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

export const FriendCard = styled.div`
  margin: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  padding: 5px;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  height: 75px;
  width: 75px;
  margin-left: auto;
  margin-right: auto;
`;

export const FriendDetails = styled.div`
  text-align: left;
  margin: 5px;
`;

export const SendRequestButton = styled.button`
  height: 40px;
  margin: 10px auto 10px auto;
  padding: 10px;
  background-color: #1976d2;
  color: white;
  border-radius: 15px;
  border: none;
`;
