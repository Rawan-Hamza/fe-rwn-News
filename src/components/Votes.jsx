import React, { useState, useRef } from "react";
import { patchArticlesById } from "./Api";

function Votes({ votes, article_id }) {
  const [votesChange, setVotesChange] = useState(0);
  let likeBtnRef = useRef();
  let disLikeBtnRef = useRef();
  const onBtnClick = (btnRef) => {
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }
  };
  const amendVotes = (num) => {
    setVotesChange((currentVotesChange) => currentVotesChange + num);
    patchArticlesById(article_id, num).catch((err) => {
      setVotesChange((currentVotesChange) => {
        return currentVotesChange - num;
      });
    });
  };

  return (
    <div className="vote">
      <button
        ref={likeBtnRef}
        className="vote-button"
        onClick={() => {
          onBtnClick(likeBtnRef);
          amendVotes(1);
        }}>
        👍 Like
      </button>
      <span> votes: {votes + votesChange} </span>
      <button
        ref={disLikeBtnRef}
        className="vote-button"
        onClick={() => {
          onBtnClick(disLikeBtnRef);
          amendVotes(-1);
        }}>
        Dislike 👎
      </button>
    </div>
  );
}

export default Votes;
