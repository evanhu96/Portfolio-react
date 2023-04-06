import React from "react";
import "../styles/curvedHeader.scss";
import Selfie from "./Selfie";
import Stack from "react-bootstrap/Stack";
export default function SMFooter() {
  return (
    <header>
      <div id="overlay">
        <Stack style={{ fontSize: "25px" }}>
          <Selfie />

          <h2>About Me</h2>
          <p>
            My name is Evan Hughes, I am a 26 year old developer who loves the
            problem solving and creativity that comes with programming. I
            believe learning how to absorb knowledge efficiently is the most
            important ongoing journey we embark on. Aside from that I am
            just a person with a dog who tries to minimize mouse usage in favor
            of keyboard shortcuts.
          </p>
        </Stack>{" "}
        <br />
      </div>
    </header>
  );
}
