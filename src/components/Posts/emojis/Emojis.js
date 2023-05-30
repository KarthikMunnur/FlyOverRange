import React, { useState } from "react";
import { render } from "react-dom";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import EmojiData from "../createPost";

const Emojis = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showPanel, togglePanel] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <ul className="attachments d-flex align-items-center">
      {showPanel ? (
        <div className="emjo-con ">
          {/* onEmojiClick={onEmojiClick} */}

          <Picker skinTone={SKIN_TONE_MEDIUM_DARK} />
          {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
        </div>
      ) : null}
      <li onClick={() => togglePanel(!showPanel)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <g fill="none" fillRule="evenodd">
            <g fill="#373737" fillRule="nonzero">
              <g>
                <g>
                  <path
                    d="M7.608 15.23C3.408 15.23 0 11.81 0 7.622S3.42.014 7.608.014c4.2 0 7.608 3.42 7.608 7.608s-3.408 7.608-7.608 7.608zm0-14.028c-3.54 0-6.408 2.88-6.408 6.408 0 3.54 2.88 6.408 6.408 6.408 3.528 0 6.408-2.88 6.408-6.408 0-3.528-2.868-6.408-6.408-6.408z"
                    transform="translate(-165 -720) translate(145 696) translate(20 24)"
                  />
                  <path
                    d="M10.512 11.786c-.216 0-.42-.108-.528-.312-.48-.864-1.392-1.404-2.376-1.404s-1.896.54-2.376 1.404c-.156.288-.528.396-.816.228-.288-.156-.396-.528-.228-.816C4.884 9.638 6.192 8.87 7.62 8.87s2.736.78 3.432 2.016c.156.288.06.66-.228.816-.108.06-.204.084-.312.084zm-5.448-4.62c-.336 0-.6-.264-.6-.6v-1.2c0-.336.264-.6.6-.6.336 0 .6.264.6.6v1.2c0 .324-.264.6-.6.6zm4.992 0c-.336 0-.6-.264-.6-.6v-1.2c0-.336.264-.6.6-.6.336 0 .6.264.6.6v1.2c0 .324-.264.6-.6.6z"
                    transform="translate(-165 -720) translate(145 696) translate(20 24)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </li>
    </ul>
  );
};
// const EmojiData = ({chosenEmoji}) => (
//     <div style={{textAlign: 'center',marginRight: '810px'}}>
//       <br></br>
//       <br></br>
//       <hr></hr>
//       <strong>Names:</strong> {chosenEmoji.names.join(', ')}<br/>
//       <strong>Symbol:</strong> {chosenEmoji.emoji}<br/>
//     </div>
//   );

export default Emojis;
