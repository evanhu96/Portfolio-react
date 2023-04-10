import React from "react";
import Selfie from "./Selfie";
import Cards from "./Cards";
import Footer from "./Footer";
import CurvedHeader from "./CurvedHeader";
export default function Home() {
  return (
    <div>
      {" "}
      <CurvedHeader />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom:'150px',
          height: "2900px",
        }}
      >
        <Cards />
      </div>
      <span style={{ marginTop: "50px" }}>
        <Footer />
      </span>
    </div>
  );
}
