/**
 * メインのTODOアプリケーションコンポーネント - カンバン方式でTODOを管理
 * @author k-kato1995
 */
import React, { useEffect, useState } from "react";
import "./App.css";
import { Member, Todo, Status } from "./types";

const MEMBERS_JSON = "/members.json";

function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  useEffect(() => {
    fetch(MEMBERS_JSON)
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);

  const handleAdd = () => {
    if (!input.trim() || selectedMembers.length === 0) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        memberIds: [...selectedMembers],
        status: Status.TODO,
      },
    ]);
    setInput("");
    setSelectedMembers([]);
  };

  const handleStatusChange = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          let nextStatus: Status;
          switch (todo.status) {
            case Status.TODO:
              nextStatus = Status.PROGRESS;
              break;
            case Status.PROGRESS:
              nextStatus = Status.DONE;
              break;
            case Status.DONE:
              nextStatus = Status.TODO;
              break;
            default:
              nextStatus = Status.TODO;
          }
          return { ...todo, status: nextStatus };
        }
        return todo;
      })
    );
  };

  const getMemberNames = (ids: number[]) => {
    return ids
      .map((id) => members.find((m) => m.id === id)?.name)
      .filter(Boolean)
      .join(", ");
  };

  const handleMemberToggle = (memberId: number) => {
    setSelectedMembers((prev) =>
      prev.includes(memberId)
        ? prev.filter((id) => id !== memberId)
        : [...prev, memberId]
    );
  };

  const getTodosByStatus = (status: Status) => {
    return todos.filter((todo) => todo.status === status);
  };

  const renderColumn = (status: Status, title: string) => (
    <div className="kanban-column">
      <h3>{title}</h3>
      <div className="todo-list">
        {getTodosByStatus(status).map((todo) => (
          <div key={todo.id} className="todo-item">
            <div className="todo-text">{todo.text}</div>
            <div className="todo-members">
              担当: {getMemberNames(todo.memberIds)}
            </div>
            <button
              className="status-button"
              onClick={() => handleStatusChange(todo.id)}
            >
              {status === Status.TODO && "開始する"}
              {status === Status.PROGRESS && "完了する"}
              {status === Status.DONE && "戻す"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="App">
      <h1>Todoアプリ</h1>
      <div className="todo-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="やることを入力"
        />
        <div className="member-selection">
          <h4>担当者を選択:</h4>
          {members.map((member) => (
            <label key={member.id} className="member-checkbox">
              <input
                type="checkbox"
                checked={selectedMembers.includes(member.id)}
                onChange={() => handleMemberToggle(member.id)}
              />
              {member.name}
            </label>
          ))}
        </div>
        <button onClick={handleAdd}>追加</button>
      </div>
      <div className="kanban-board">
        {renderColumn(Status.TODO, "TODO")}
        {renderColumn(Status.PROGRESS, "進行中")}
        {renderColumn(Status.DONE, "完了")}
      </div>
    </div>
  );
}

export default App;
