import React from "react";
import "../Footer.css";
import { IonIcon } from "@ionic/react";
import { logoInstagram, logoSnapchat,logoFacebook,logoTwitter } from "ionicons/icons";

export default function Footer() {
  return (
    <div>
      {" "}
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="https://www.google.com">
              <IonIcon icon={logoInstagram} />
            </a>
            <a href="https://www.google.com">
              <IonIcon icon={logoSnapchat} />
            </a>
            <a href="https://www.google.com">
              <IonIcon icon={logoFacebook} />
            </a>
            <a href="https://www.google.com">
              <IonIcon icon={logoTwitter} />
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://www.google.com">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.google.com">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.google.com">About</a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.google.com">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.google.com">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright">Company Name © 2018</p>
        </footer>
      </div>
    </div>
  );
}
