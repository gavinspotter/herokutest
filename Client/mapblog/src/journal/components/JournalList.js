import React from "react";

import JournalItem from "../components/JournalItem";
import "./JournalList.css";

const JournalList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2> no entry's found </h2>
      </div>
    );
  }

  return (
    <ul className="journal-list">
      {props.items.map((journ) => (
        <JournalItem
          key={journ.id}
          id={journ.id}
          entry={journ.entry}
          date={journ.date}
        />
      ))}
    </ul>
  );
};

export default JournalList;
