import * as React from "react";
import { Typography } from "@mui/material";
import AccountSettings from "./AccountPage";

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
  return console.log("Account page here");
}

export default AccountBox;
