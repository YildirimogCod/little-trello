"use client";

import { FormEvent } from "react";

export default function NewColumnForm() {
  const handleNewColumn = (e: FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector("input");
    const columnName = input?.value;
    alert("Column name:" + columnName);
  };
  return (
    <form onSubmit={handleNewColumn} className="max-w-xs">
      <label className="block">
        <span className="text-gray-600 block">Column name:</span>
      </label>
      <input type="text" placeholder="new column name" />
      <button type="submit" className="mt-2 block w-full">
        Create column
      </button>
    </form>
  );
}
