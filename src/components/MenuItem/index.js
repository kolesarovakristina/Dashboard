import React from "react";
import MenuItem from "./styles";

const styles = {
  borderLeft: "2px solid #f76f39",
  paddingLeft: ".5em"
};

const Item = ({ title, href, themeColor, isAdmin }) => (
  <MenuItem dark={themeColor} activeStyle={styles} to={href} isAdmin={isAdmin}>
    {title}
  </MenuItem>
);

export default Item;
