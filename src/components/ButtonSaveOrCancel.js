import React from "react";
import { Button } from "semantic-ui-react";

export default function ButtonSaveOrCancel({ addEntry, description, value, isExpense }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry(description, value, isExpense)}>
        OK
      </Button>
    </Button.Group>
  );
}
