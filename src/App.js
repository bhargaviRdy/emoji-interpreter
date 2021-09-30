import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😍": "Smiling Face with Heart-Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face"
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
