"use client";
import { useState } from "react";
import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";

const defaultColumns = [
  { id: "a", name: "todo", index: 0 },
  { id: "b", name: "in progress", index: 1 },
  { id: "c", name: "done", index: 2 },
];
export type CardType = {
  name: string;
  id: string | number;
  index: number;
  columnId: string;
};

const defaultCards = [
  { id: "asdas", name: "task 1", index: 0, columnId: "a" },
  { id: "asddas", name: "task 5", index: 0, columnId: "a" },
  { id: "asdas1", name: "task 2", index: 1, columnId: "b" },
  { id: "asdas2", name: "task 3", index: 2, columnId: "c" },
];
export default function Board() {
  const [cards, setCards] = useState(defaultCards);
  const [columns, setColumns] = useState(defaultColumns);
  return (
    <div className="flex gap-4">
      {columns.map((column) => {
        return (
          <Column
            key={column.id}
            setCards={setCards}
            {...column}
            cards={cards
              .sort((a, b) => a.index - b.index)
              .filter((c) => c.columnId === column.id)}
          />
        );
      })}
      <NewColumnForm />
    </div>
  );
}
