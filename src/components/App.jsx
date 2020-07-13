import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [list, setList] = React.useState([]);
  function addItem(note) {
    setList(prevList => [...prevList, note]);
  }
  function deleteNote(id) {
    setList(prevList =>
      prevList.filter((element, index) => {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {list.map((element, index) => (
        <Note
          key={index}
          id={index}
          title={element.title}
          content={element.content}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
