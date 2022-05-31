import "../App.css";
import * as React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

function News(newsContent, NewsImage) {
  return (
    <div
      className="Blur"
      style={{
        height: 250,
        width: 300,
        justifyContent: "center",
        marginTop: 10,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>{newsContent.content}</Typography>
      <div
        style={{
          backgroundImage: `url(${newsContent.NewsImage})`,
          width: 275,
          height: 200,
          borderRadius: 4,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default News;
