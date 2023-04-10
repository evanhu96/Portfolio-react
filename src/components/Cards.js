import $ from "jquery";
import React, { useState } from "react";
import "../App.scss";
import DropDown from "./Dropdown";
import petsmart from '../assets/petsmart.png';

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
    <div style={{ height: "500px", marginLeft: "200px" }}>
      <div
        className="container projects"
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="images" style={{ height: "500px" }}>
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
          <ul>
            <li>CI/CD of a fullstack restful api</li>
            <li>
              Use of GraphQL and Apollo Servers for unique client side queries
            </li>
            <li>Seperation of client and server side api calls</li>
            <li>basic data analysis concepts</li>
          </ul>
          <div
            className="buttons"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button className="add">
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="https://mongosports.herokuapp.com/"
              >
                Check It Out
              </a>
            </button>
            <button className="add">
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="https://github.com/evanhu96/sportsApplication"
              >
                Repository
              </a>
            </button>
          </div>
        </div>
      </div>
      <div
        className="container projects"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "800px",
          height: "500px !important",
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <p className="desc" style={{ fontSize: "14px" }}>
                With Site-Builder-Pro you can create a professional website in
                minutes. Simply choose the components you would like to include,
                and Site-Builder-Pro will do the rest. Once you have created
                your website, you can remove the build and styles folders and
                put them into your own react app for further customization.
              </p>
              <ul>
                <li>Web design with wide range of components</li>
                <li>UI/UX design to make sitebuilding simple</li>
                <li>HTML/CSS</li>
                <li>Proficient use of MERN stack</li>
              </ul>
            </div>
            <div
              className="buttons"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <button className="add">
                <a
                  href="https://github.com/evanhu96/site4builder"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Repository
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container projects"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "800px",
          height: "500px !important",
        }}
      >
        <div className="images" style={{marginTop:'50px'}}>
          <img
            src={petsmart}
            height={250}
            alt="shoe"
          />
        </div>

        <div className="product">
          <p>FrontEnd</p>
          <h1>PetSmart Clone</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <p className="desc" style={{ fontSize: "14px" }}>
                This is a clone of the PetSmart website. It is client side only
                and uses React for state management. 
              </p>
              <ul>
                <li>UI/UX design to make sitebuilding simple</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div
              className="buttons"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <button className="add">
                <a
                  href="https://evanhu96.github.io/petSmart/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Check it out
                </a>
              </button>
              <button className="add">
                <a
                  href="https://github.com/evanhu96/petSmart"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Repository
                </a>
              </button>
            </div>
            
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
          <ul>
            <li>OAuth client side security</li>
            <li>client side GraphQL mutations</li>
            <li>use of bootstrap react components</li>
            <li>ability to make a fully functional social media application</li>
          </ul>
          <div
            className="buttons"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button className="add">
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="https://instagarage.herokuapp.com/"
              >
                Check It Out
              </a>
            </button>
            <button className="add">
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="https://github.com/evanhu96/Instagram-Garage-Sale"
              >
                Repository
              </a>
            </button>
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
            <button className="add">
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="https://evanhu96.github.io/BloodDrive/"
              >
                Check It Out
              </a>
            </button>
            <button className="add">
              <a
                style={{ color: "inherit", textDecoration: "none" }}
                href="https://github.com/evanhu96/BloodDrive"
              >
                Repository
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
