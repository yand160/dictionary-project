import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=7eo5ded69c3ffa8b7taebbf0b44b9fb2`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "6pZsC5dKBV1iNt33G7VzqZA4Xvl9niom2Rkp9s5LeFWt119mqC5QJlAS";
    let pexelsApiUrl =
      "https://api.shecodes.io/images/v1/search?query=book&key=7eo5ded69c3ffa8b7taebbf0b44b9fb2";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word would you like to look up?🤔</h1>
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: blue, sunrise, fire, pink...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
