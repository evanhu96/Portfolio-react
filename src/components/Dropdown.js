import React from "react";
import { useState } from "react";
export default function DropDown() {
  const [isChecked, setisChecked] = useState(4);
  const handleCheck = (e) => {
      if (isChecked === e.target.value) {
      setisChecked(null);
    } else {
        console.log(isChecked)
      setisChecked(e.target.value);
    }
  };
  return (
    <div id="scrollEffectAccordian">
      <ul>
        <li>
          <input
            type="checkbox"
            checked={isChecked !== '0'}
            value={0}
            onChange={handleCheck}
          />
          <i></i>
          <h2>Description</h2>
            <p>
              This page was written in HTML and CSS. The CSS was compiled from
              SASS. I used Normalize as my CSS reset and -prefix-free to save
              myself some headaches. I haven't quite gotten the hang of Slim for
              compiling into HTML, but someday I'll use it since its syntax
              compliments that of SASS. Regardless, this could all be done in
              plain HTML and CSS.
            </p>
        </li>
        <li>
          <input
            type="checkbox"
            checked={isChecked !== "1"}
            value={1}
            onChange={handleCheck}
          />
          <i></i>
          <h2>Skills Demonstrated</h2>
            <p>
              Using the sibling and checked selectors, we can determine the
              styling of sibling elements based on the checked state of the
              checkbox input element. One use, as demonstrated here, is an
              entirely CSS and HTML accordion element. Media queries are used to
              make the element responsive to different screen sizes.
            </p>
        </li>
      </ul>
    </div>
  );
}
