import { text } from "@fortawesome/fontawesome";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function IdTyping() {
  return (
    <>
      <ReactTypingEffect
        text={[
          "Trello",
          "Node.js",
          "Git bash",
          "Github",
          "HTML5",
          "CSS3",
          "Npm",
          "Sass",
          "Bootstrap",
          "JavaScript",
          "React",
          "Laravel",
          "Php",
          "Wordpress",
        ]}
        speed={100}
        typingDelay={500}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text) => {
          return (
            <h1 className="mt-5">
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    className="mt-5"
                    key={key}
                    style={
                      char === char.toUpperCase()
                        ? { color: "#047cec" }
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
