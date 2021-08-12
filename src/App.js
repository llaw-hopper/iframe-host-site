import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Modal from "./Modal";

const copy = [
  "Necessitatibus at quisquam temporibus dicta ut laudantium error enim. Ut provident et laborum nam laborum id sed. Culpa quo quas esse harum autem. Exercitationem est non nihil.",
  "Perspiciatis distinctio ex laudantium a tempora ut. Omnis totam ut molestias quas facere. Minima nulla rerum ipsum tempora. Temporibus sed corporis natus perspiciatis rem dolorem quia omnis. Laboriosam minus necessitatibus voluptas.",
  "Vero necessitatibus adipisci necessitatibus minima esse alias qui. Accusantium officiis quo autem. Voluptas minima quia ex. Dolores iure vitae provident voluptatem.",
  "Optio enim quam veritatis modi illum et doloribus. Facere vel maxime corrupti nesciunt reiciendis voluptates assumenda ipsam. Labore suscipit odit nisi labore aperiam eum. Eligendi non reiciendis quae et.",
  "Numquam est beatae ab esse nesciunt. Porro sequi enim perspiciatis earum quae sit voluptatem. Quibusdam in placeat ducimus explicabo sequi occaecati dolores tenetur. Numquam distinctio nesciunt a quos. Voluptas qui ullam harum et voluptatem voluptatibus voluptatem architecto.",
];

function App() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("message", (ev) => {
      console.log(`${ev.origin} sent ${ev.data}`);
      if (ev.origin !== "http://localhost:3001") {
        return;
      }
      if (ev.data === "open") {
        setOpen(true);
      } else if (ev.data === "close") {
        setOpen(false);
      } else if (ev.data === "confirm") {
        window.location = "https://www.hopper.com/";
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {copy.slice(0, 2).map((c) => (
          <p key={`${c.slice(20)}`}>{c}</p>
        ))}

        <iframe src="http://localhost:3001"></iframe>

        {copy.slice(2).map((c) => (
          <p key={`${c.slice(20)}`}>{c}</p>
        ))}
      </header>

      <Modal open={open}>
        <iframe
          className="loaded-content"
          src="http://localhost:3001?content=1"
        ></iframe>
      </Modal>
    </div>
  );
}

export default App;
