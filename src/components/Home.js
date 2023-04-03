import React from "react";
import Selfie from "./Selfie";
import Cards from "./Cards";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Selfie />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "350px",
            marginTop: "800px",
            marginBottom: "800px",
          }}
        >
          <Cards />
      <Footer />

        </div>
      </div>
    </div>
  );
}
