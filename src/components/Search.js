import React, { useState } from "react";
import Details from "./Details";

function Search(props) {
  const [text, setText] = useState("");
  const [option, setOption] = useState("en_US");
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const doFetch = () => {
    let tempText = text;
    setText("");
    setLoading(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/${option}/${tempText}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setData(data[0]);
          setMessage("");
        } else {
          setData({});
          setMessage(data.message);
        }
        setLoading(false);
      });
  };

  return (
    <div className="search">
      <div className="searchField">
        <input
          type="search"
          className="input"
          placeholder="Search"
          autoComplete="on"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="button" value="Search" className="btn" onClick={doFetch} />
      </div>
      <div className="datalist">
        <label htmlFor="language">Choose language: </label>
        <select
          name="language"
          className="options option"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option className="option" value="en_US">
            English (US)
          </option>
          <option className="option" value="hi">
            Hindi
          </option>
          <option className="option" value="es">
            Spanish
          </option>
          <option className="option" value="fr">
            French
          </option>
          <option className="option" value="ja">
            Japanese
          </option>
          <option className="option" value="ru">
            Russian
          </option>
          <option className="option" value="en_GB">
            English (UK)
          </option>
          <option className="option" value="de">
            German
          </option>
          <option className="option" value="it">
            Italian
          </option>
          <option className="option" value="ko">
            Korean
          </option>
          <option className="option" value="pt-BR">
            Brazilian Portuguese
          </option>
          <option className="option" value="ar">
            Arabic
          </option>
          <option className="option" value="tr">
            Turkish
          </option>
        </select>
      </div>
      <Details data={data} message={message} loading={loading} />
    </div>
  );
}

export default Search;
