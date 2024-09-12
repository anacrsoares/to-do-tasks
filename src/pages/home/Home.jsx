import React, { useState } from "react";
import "./Home.css";
import trash_icon from "../../assets/trash_icon.png";

function Home() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  // { title: "", category: "", date: "", description: "" },

  const [entry, setEntry] = useState([]);

  function saveEntry(event) {
    event.preventDefault();

    const copyEntry = [...entry];

    copyEntry.push({
      title: title,
      category: category,
      date: date,
      description: description,
    });

    setEntry(copyEntry);

    setTitle("");
    setCategory("");
    setDate("");
    setDescription("");
  }

  function eraseEntry(indexEntry) {
    // alert(index);

    const entryFiltered = entry.filter((_, index) => indexEntry !== index);

    setEntry(entryFiltered);
  }

  return (
    <div className="container">
      <div className="container-form">
        <form className="form" onSubmit={(event) => saveEntry(event)}>
          <h2>Nova Entrada</h2>
          <input
            placeholder="Título"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <select
            defaultValue={category}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Class">Class</option>
            <option value="Study Programming">Study Programming</option>
            <option value="Instagram">Instagram</option>
            <option value="Supplement">Supplement</option>
            <option value="Duolingo (English)">Duolingo (English)</option>
            <option value="Drink Water (2,5L)">Drink Water (2,5L)</option>
          </select>

          <input
            placeholder="Data"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />

          <input
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <button type="submit">Salvar</button>
        </form>
      </div>

      <div className="container-list">
        <div className="tasks-titles">
          <h3>Lista de Estudos</h3>
          <p>Total: {entry.length} tarefas</p>
        </div>

        {/* {JSON.stringify(entry)}
         */}

        {entry.map((entry, index) => (
          <div className="card">
            <div className="card-left">
              <p>{entry.title}</p>
              <p>{entry.category}</p>
              <p>{entry.description}</p>
            </div>

            <div>
              <p>{entry.date}</p>
              <img onClick={() => eraseEntry(index)} src={trash_icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
