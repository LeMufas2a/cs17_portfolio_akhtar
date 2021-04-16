import React from "react";
import ReactTypingEffect from 'react-typing-effect';

export default function ContactMe() {
  return (
    <>
      <ReactTypingEffect
        text={"Contact Me"}
        speed={125}
        typingDelay={1000}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text) => {
          return (
            <h1>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={
                      char === char.toUpperCase()
                        ? { color: "#b2ff6b" }
                        : { color: "white" }
                    }
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
          );
        }}
      />
    </>
  );
}
