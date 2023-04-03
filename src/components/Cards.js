import $ from "jquery";
import React, { useState } from "react";
import "../App.scss";

export default function Cards() {
  $(".size").on("click", function () {
    $(this).toggleClass("focus").siblings().removeClass("focus");
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Description");

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };
  return (
    <>
      <div
        className="container projects"
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="images">
          <img
            src="https://img.freepik.com/premium-vector/basketball_319667-191.jpg"
            alt="shoe"
          />
        </div>

        <div className="product">
          <p>Heroku: Fullstack</p>
          <h1>MongoSports</h1>

          <p className="desc" style={{ fontSize: "14px" }}>
            With over 10,000 datasets scraped from ESPN urls, MongoSports is a
            fullstack application that allows users to interact with sports data
            in a variety of ways. This site includes full use of RESTful API to
            interact with MongoDB Atlas, apollo servers and GaphQL to connect
            the databases to the front end with creative queries to analyse
            sports data.
          </p>
          <div
            className="buttons"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button className="add"><a style={{color: 'inherit', textDecoration: 'none'}} href="https://mongosports.herokuapp.com/">Check It Out</a></button>
            <button className="add"><a style={{color: 'inherit', textDecoration: 'none'}} href="https://github.com/evanhu96/sportsApplication">Repository</a></button>
          </div>
        </div>
      </div>
      <div
        className="container projects"
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="images">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Binary_tree_v2.svg/800px-Binary_tree_v2.svg.png"
            alt="shoe"
          />
        </div>

        <div className="product">
          <p>Fullstack</p>
          <h1>Site-Builder-Pro</h1>
          <div>
            <div className="dropdown">
              <button onClick={toggleDropdown} className="dropdown-toggle">
                {selectedOption}
              </button>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleOptionClick("Description")}>
                    Description
                  </li>
                  <li onClick={() => handleOptionClick("Skills")}>Skills</li>
                </ul>
              )}
            </div>
            {selectedOption === "Description" && (
              <p className="desc" style={{ fontSize: "14px" }}>
                With Site-Builder-Pro you can create a professional website in
                minutes. Simply choose the components you would like to include,
                and Site-Builder-Pro will do the rest. Once you have created
                your website, you can remove the build and styles folders and
                put them into your own react app for further customization.
              </p>
            )}
            {selectedOption === "Skills" && (
              <ul>
                <li>Web design</li>
                <li>UI/UX design</li>
                <li>HTML/CSS</li>
                <li>Javascript</li>
              </ul>
            )}
          </div>
          <div
            className="buttons"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button className="add"><a href="https://github.com/evanhu96/site4builder" style={{color:'inherit',textDecoration:'none'}}>Repository</a></button>
          </div>
        </div>
      </div>
      <div
        className="container projects"
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="images">
          <img
            src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg"
            alt="shoe"
          />
        </div>

        <div className="product">
          <p>Heroku: Fullstack</p>
          <h1>InstaGarage</h1>

          <p className="desc" style={{ fontSize: "14px" }}>
            This is a full stack instagram clone that allows users to upload
            photos of things you no longer want. It is a garage sale with all
            your friends and when you someone buys something you can take the
            post down.
          </p>
          <div
            className="buttons"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button className="add"><a style= {{color:'inherit',textDecoration:'none'}}href="https://instagarage.herokuapp.com/">Check It Out</a></button>
            <button className="add"><a style= {{color:'inherit',textDecoration:'none'}}href="https://github.com/evanhu96/Instagram-Garage-Sale">Repository</a></button>
          </div>
        </div>
      </div>
      <div
        className="container projects"
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="images">
          <img
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61XwvvFvnVL.jpg"
            alt="Leukemia Ribbon"
          />
        </div>

        <div className="product">
          <p>GitHub Pages: Front End</p>
          <h1>Blood Drive Support</h1>

          <p className="desc" style={{ fontSize: "14px" }}>
            In this front end project, I created a website that allows users to
            learn about blood donation and find a blood drive near them. I used
            HTML, SCSS, and JavaScript to create this site.
          </p>
          <div
            className="buttons"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button className="add"><a style={{color:'inherit' , textDecoration:'none'}} href="https://evanhu96.github.io/BloodDrive/">Check It Out</a></button>
            <button className="add"><a style={{color:'inherit' , textDecoration:'none'}}href="https://github.com/evanhu96/BloodDrive">Repository</a></button>
          </div>
        </div>
      </div>
    </>
  );
}
