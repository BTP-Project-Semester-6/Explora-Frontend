import styled from "styled-components";
import { FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  right: 0;
  margin-top: 15px;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-outs;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }
  @media screen and (max-width: 960px) {
    width: 50%;
    font-size: 10px;
  }
`;

export const Nav = styled.nav`
  background: #ff6363;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  position: fixed;
  z-index: 10000;
  top: 0;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 55px;
  padding-left: 55px;

  @media screen and (max-width: 990px) {
    padding-right: 25px;
    padding-left: 25px;
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.7rem;
  display: flex;
  align-items: center;
  &:hover {
    color: #fff;
    transition: all at 0.3 ease;
  }
`;

export const NavIcon = styled(FaGift)`
  margin-right: 0.5rem;
`;

export const SideIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: ${({ click }) => (click ? "70%" : "-15%")};
    height: 100vh;
    position: absolute;
    top: 80px;
    right: 0;
    opacity: ${({ click }) => (click ? 1 : 0)};
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItems = styled.li`
  height: 60px;
  border-bottom: 2px solid transparent;
  margin-top: 15px;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #fff;
    transition: all at 0.3 ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all at 0.3 ease;
    }
  }
`;

export const NavBtnItem = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
