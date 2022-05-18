import * as React from "react";
import { Typography } from "@mui/material";
import AccountBox from "./CurrentAccount";

//link it to your account system
function AccountSettings() {
  return (
    <div className="Account-settings">
      <Typography>Settings</Typography>
      <AccountBox />
    </div>
  );
}

export default AccountSettings;
