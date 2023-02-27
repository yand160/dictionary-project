import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">{props.meaning.definitions}</div>
      <strong>Definition:</strong>
      <br />
      <strong>Example:</strong>
      <div className="example">
        <em>{props.meaning.example}</em>
      </div>
      {props.meaning.synonyms && (
        <>
          <strong>Synonyms:</strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </>
      )}
    </div>
  );
}
