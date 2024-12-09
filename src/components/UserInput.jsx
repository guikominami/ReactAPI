import { useState } from "react";
import "../components/UserInput.css";
import DropDown from "./DropDown";

export default function UserInput() {
  const [dropDownVisible, setDropDownVisible] = useState(false);

  function handleButtonClick() {
    setDropDownVisible((open) => !open);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Category</label>
          <input type="text" onClick={handleButtonClick} />
          {dropDownVisible ? <DropDown /> : undefined}
        </p>
        <p>
          <label htmlFor="">Place of Birth</label>
          <input type="text" />
        </p>
      </div>
    </section>
  );
}
