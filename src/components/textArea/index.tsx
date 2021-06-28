import React from "react";

interface ITextArea {
  myText: string;
}

const TextArea: React.FC<ITextArea> = (props) => {
  return (
    <>
      <p>{props.myText}</p>
    </>
  );
};

export default TextArea;
