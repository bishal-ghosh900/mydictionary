import React, { useEffect } from "react";

function Details({ data, message, loading }) {
  useEffect(() => {
    console.log(data);
  }, [data, message]);

  return (
    <div className="details">
      {data?.meanings && !loading && (
        <>
          <h1 className="h1Style">{data.word}</h1>
          {data.meanings.map((v) => {
            return (
              <>
                <h2 className="h2Style">{v.partOfSpeech}</h2>
                <ul>
                  {v?.definitions?.map((def) => {
                    return (
                      <>
                        <li className="liStyle">
                          {def.definition ? def.definition : null}
                          <br />
                          {def.example && (
                            <>
                              <strong>
                                <em>
                                  <u>Example</u>:
                                </em>
                              </strong>{" "}
                              {def.example}
                            </>
                          )}
                        </li>
                        <br />
                      </>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </>
      )}

      {message && !loading ? <h2 className="h2Style">{message}</h2> : null}
      {loading ? (
        <div className="loading">
          {" "}
          <h2 className="h2Style">Loading...</h2>{" "}
        </div>
      ) : null}
    </div>
  );
}

export default Details;
