import React from "react";


function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });
  function addNote(event) {
    var { name, value } = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={addNote}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={addNote}
          value={note.content}
        />
        <button
          onClick={() => {
            props.addItem(note);
            setNote({
              title: "",
              content: ""
            });
          }}
        >
+        </button>
      </form>
    </div>
  );
}

export default CreateArea;
