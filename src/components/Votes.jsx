import React, { useState } from "react";
import { patchArticlesById } from "./Api";

function Votes({ votes, article_id }) {
  const [hasVoted, setHasVoted] = useState(null);
  const [votesChange, setVotesChange] = useState(0);

  const handleUpVote = () => {
    if (hasVoted === "like") {
      setHasVoted(null);
      amendVotes(-1);
    } else {
      setHasVoted("like");
      if (hasVoted === "dislike") {
        amendVotes(1);
      }
      amendVotes(1);
    }
  };

  const handleDownVote = () => {
    if (hasVoted === "dislike") {
      setHasVoted(null);
      amendVotes(1);
    } else {
      setHasVoted("dislike");
      if (hasVoted === "like") {
        amendVotes(-1);
      }
      amendVotes(-1);
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
        className={hasVoted === "like" ? "vote-button-active" : "vote-button"}
        onClick={handleUpVote}
      >
        👍 Like
      </button>
      <span> votes: {votes + votesChange} </span>
      <button
        className={
          hasVoted === "dislike" ? "vote-button-active" : "vote-button"
        }
        onClick={handleDownVote}
      >
        Dislike 👎
      </button>
    </div>
  );
}

export default Votes;
