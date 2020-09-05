import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import "./JournalItem.css";

const JournalItem = (props) => {
  return (
    <li className="journal-item">
      <Card className="journal-item__content">
        <div className="">
          <div>{props.entry}</div>
          <div>{props.date}</div>
        </div>
        <Button>edit</Button>
        <Button>delete</Button>
      </Card>
    </li>
  );
};

export default JournalItem;
