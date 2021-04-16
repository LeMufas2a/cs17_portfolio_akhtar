import React from 'react'
import ReactTypingEffect from 'react-typing-effect';




export default function Wave() {
    return (
        <>

            <ReactTypingEffect
                text={"Full Stack Web Developer"}
                speed={125}
                typingDelay={1000}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text) => {
                    return (
                        <h1 className='mt-4 myAnim'>
                            {text.split('').map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span
                                        key={key}
                                        style={char === char.toUpperCase() ? { color: '#ff022c' } : { color: "white" }}
                                    >{char}</span>
                                );
                            })}
                        </h1>
                    );
                }}
            />
        </>
    );
};
