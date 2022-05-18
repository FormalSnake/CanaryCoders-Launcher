import * as React from "react";
import { Typography } from "@mui/material";

//link it to your account system
function AccountBox() {
  return (
    <div className="Account-box" onClick={OnClick}>
      <div className="Profile-pic"></div>
      <Typography>Kyan De Sutter</Typography>
    </div>
  );
}
function OnClick() {
  return console.log("Hi");
}

export default AccountBox;
