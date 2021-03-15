import React, { useState } from "react";
import { render } from "react-dom";
import Picker, { SKIN_TONE_MEDIUM_NEUTRAL } from "emoji-picker-react";

const App = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
      <h1> EMOJI PICKER</h1>
      <Picker
        onEmojiClick={onEmojiClick}
        disableAutoFocus={true}
        skinTone={SKIN_TONE_MEDIUM_NEUTRAL}
      />
      {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
    </div>
  );
};

const EmojiData = ({ chosenEmoji }) => (
  <div>
    <br/>
    <br/>
     <strong>Unified:</strong> {chosenEmoji.unified} 
    <br />
    <strong>Names:</strong> {chosenEmoji.names.join(", ")}
    <br />
    <strong>Symbol:</strong> {chosenEmoji.emoji}
    <br />
    <strong>ActiveSkinTone:</strong> {chosenEmoji.activeSkinTone}
  </div>
);

render(<App />, document.getElementById("root"));
