import React from "react";
import { Container, Stack, Image } from "react-bootstrap";

export default function Quarters() {
  return (
    <Container
      style={{
        marginLeft: "100px",
        marginTop: "10px",
        height: "600px",
        width: "980px",
        display: "flex",
        flexWrap: "wrap",
        borderRadius: "50px",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "50%",
          position: "relative",
        }}
      >
        <h1 style={{ position: "relative", zIndex: "2" }}>MongoSports</h1>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "1",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/ibn7ziuxwushdqmmozoppw.png"
          />
        </div>

        {/* <p>
          MongoSports is an api made from around 10,000 datsets scraped from
          espn urls. This site includes full use of RESTful API to interact with
          MongoDB Atlas, apollo servers and GaphQL to connect the databases to
          the front end with creative queries to analyse sports data.
        </p> */}
      </div>
      <div style={{ width: "50%", height: "50%" }}>
        <h1>Apps</h1>

      </div>
      <Stack
        direction="horizontal"
        style={{
          width: "50%",
          height: "50%",
          color: "white",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "grey",
          }}
        >
          <div style={{ position: "relative", height: "100%" }}>
            <h2 style={{ position: "relative", zIndex: "1" }}>SiteBuilder</h2>
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: "1",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  marginTop: "20px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Binary_tree_v2.svg/330px-Binary_tree_v2.svg.png"
              />
            </div>
          </div>
        </div>
        {/* <ul style={{ position: "absolute", width: "400px" }}>
          <li>
            With efficient use of recursive functions to create, traverse, edit,
            and display the contents of node trees, a user can make a full
            professional website or game in minutes.
          </li>
          <li>
            {" "}
            SiteBuilder's tech stack is: React, Javascript, mongodb, and Node.js
          </li>
          <li>
            {" "}
            GameBuilder's tech stack is: Angular, TypeScript, MySQL, and java
          </li>
        </ul> */}

        <div
          style={{
            width: "50%",
            height: "100%",
          }}
        >
          <div style={{ position: "relative", height: "100%" }}>
            <h2 style={{ position: "relative", zIndex: "1" }}>GameBuilder</h2>
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: "-1",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/1683023-inline-inline-1-why-video-games-were-never-the-same-after-pac-man-burst-into-arcades.jpg"
              />
            </div>
          </div>
        </div>
      </Stack>
      <div style={{ width: "50%", height: "50%" }}>
        <h1> FrontEnd Sites</h1> 
      </div>
    </Container>
  );
}
