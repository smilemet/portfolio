import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuLinkContainer = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: #222;
  font-size: 14px;
  font-weight: bold;

  /* hover 시 */
  &:hover {
    color: #f190b7;
  }

  &::after {
    content: "｜";
    display: inline-block;
    padding: 0 15px;
    color: #ccc;
  }

  /* &:last-child::after {
    color:
  } */

  &.active {
    color: #22b8cf;

    &:after {
      border-bottom: 4px solid #fff !important;
    }
  }
`;

const MenuLink = ({ to, children }) => <MenuLinkContainer to={to}>{children}</MenuLinkContainer>;

export default MenuLink;
