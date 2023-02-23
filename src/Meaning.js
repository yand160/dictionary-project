import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">{props.meaning.definitions}</div>
      <div className="example">{props.meaning.example}</div>
    </div>
  );
}
