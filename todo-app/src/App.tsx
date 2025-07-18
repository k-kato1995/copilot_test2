import React, { useEffect, useState } from "react";
import "./App.css";
import { Member, Todo } from "./types";

const MEMBERS_JSON = "/members.json";

function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [selectedMember, setSelectedMember] = useState<number>(0);

  useEffect(() => {
    fetch(MEMBERS_JSON)
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        if (data.length > 0) setSelectedMember(data[0].id);
      });
  }, []);

  const handleAdd = () => {
    if (!input.trim() || !selectedMember) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        memberId: selectedMember,
        done: false,
      },
    ]);
    setInput("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const getMemberName = (id: number) => {
    return members.find((m) => m.id === id)?.name || "";
  };

  return (
    <div className="App">
      <h1>Todoアプリ</h1>
      <div style={{ marginBottom: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="やることを入力"
        />
        <select
          value={selectedMember}
          onChange={(e) => setSelectedMember(Number(e.target.value))}
        >
          {members.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
        <button onClick={handleAdd}>追加</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 8 }}>
            <label
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggle(todo.id)}
              />
              {todo.text}（担当: {getMemberName(todo.memberId)}）
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
