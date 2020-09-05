import React from "react";

import { useParams } from "react-router-dom";

import JournalList from "../components/JournalList";

const JOURNAL = [
  {
    id: "j1",
    date: "aug 25",
    entry: "my first journal entry",
    creator: "u1",
  },
  {
    id: "j1",
    date: "aug 25",
    entry: "my first journal entry",
    creator: "u2",
  },
  {
    id: "j1",
    date: "aug 25",
    entry: "my second journal entry",
    creator: "u1",
  },
];
const Journal = () => {
  const userId = useParams().userId;
  const loadedEntrys = JOURNAL.filter((piece) => piece.creator === userId);

  return <JournalList items={loadedEntrys} />;
};

export default Journal;
