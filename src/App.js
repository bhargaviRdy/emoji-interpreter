import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "ð": "Smiling",
  "ðģ": "disbelief",
  "ð": "sad",
  "ðĨĄ": "takeout box",
  "âĪïļ": "love",
  "ð": "annoyance",
  "ð": "Smiling Face with Heart-Eyes",
  "ð": "Face Savoring Food",
  "ð": "Face with Tongue",
  "ð": "Winking Face with Tongue",
  "ðĪŠ": "Zany Face",
  "ð": "Squinting Face with Tongue",
  "ðĪ": "Money-Mouth Face",
  "ðĪ": "Hugging Face",
  "ðĪ­": "Face with Hand Over Mouth",
  "ðĪŦ": "Shushing Face",
  "ðĪ": "Thinking Face"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "The emoji is not there in our database";
    }
    setMeaning(meaning);
  }

  function onClickHandler(item) {
    // console.log(item);
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        style={{
          fontSize: "large",
          fontWeight: "bold"
        }}
        type="text"
        onChange={onChangeHandler}
      />
      <p> {meaning}</p>
      <h3>emojis we know </h3>

      {emojisWeKnow.map(function (item) {
        return (
          <span
            key={item}
            onClick={() => onClickHandler(item)}
            style={{
              border: "none",
              backgroundColor: "none",
              padding: "0.5rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
