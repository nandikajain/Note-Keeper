import React from "react";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [expand, setExpand] = React.useState(false);
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
  function updateExpand() {
    setExpand(true);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        {expand && (
          <input
            name="title"
            placeholder="Title"
            onChange={addNote}
            value={note.title}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
          onChange={addNote}
          value={note.content}
          onClick={updateExpand}
        />
        <Zoom in={expand ? true : false}>
          <Fab
            onClick={() => {
              props.addItem(note);
              setNote({
                title: "",
                content: ""
              });
            }}
          >
            <AddOutlinedIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
