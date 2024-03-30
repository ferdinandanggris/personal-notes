import React from 'react';
import NotesBody from "./NotesBody";
import NotesHeader from "./NotesHeader";
import { getInitialData } from '../utils';

class NotesApp extends React.Component {
  constructor(props){
    super(props);
    const data = getInitialData();

    this.state = {
      data : data,
      notes : data.filter((note) => note.archived === false),
      archivedNotes : data.filter((note) => note.archived === true)
    }

    this.filterNotes = this.filterNotes.bind(this);
    this.filterArchivedNotes = this.filterArchivedNotes.bind(this);
    this.onArchivedToggleHandler = this.onArchivedToggleHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  filterArchivedNotes(data){
    return data.filter((note) => note.archived === true);
  }

  filterNotes(data){
    return data.filter((note) => note.archived === false);
  }

  onArchivedToggleHandler(id){
    this.setState((prevState) => {
      const data = prevState.data.map((note) => note.id === id ? ({...note, archived : note.archived = !note.archived}) : note);
      return {
        data: data,
        notes : this.filterNotes(data),
        archivedNotes : this.filterArchivedNotes(data)
      }
    }
      );
  }

  onDeleteHandler(id){
    this.setState((prevState) => {
        const dataAfterDelete = prevState.data.filter((note) => note.id !== id);
        return {
          data: dataAfterDelete,
          notes : this.filterNotes(dataAfterDelete),
          archivedNotes : this.filterArchivedNotes(dataAfterDelete)
        }
      });
  }

  onAddNoteHandler(note){
    this.setState((prevState) => {
      const data =  [...prevState.data,
        {
          id : +new Date(),
          title : note.title,
          body : note.body,
          archived : false,
          createdAt : new Date().toISOString()
        }]
      return {
        data : data,
        notes : this.filterNotes(data),
        archivedNotes : this.filterArchivedNotes(data)
      }
    })
  }

  onSearchNoteHandler(title){
    this.setState((prevState) => {
      const filteredData = prevState.data.filter((note) => note.title.toLowerCase().includes(title.toLowerCase()));
      return {
        data : prevState.data,
        notes: this.filterNotes(filteredData),
        archivedNotes : this.filterArchivedNotes(filteredData)
      }
    }
      );
  }


  render() {
    return (
      <>
        <NotesHeader searchNote={this.onSearchNoteHandler} />
        <NotesBody notes={this.state.notes} archivedNotes={this.state.archivedNotes} onChangeStatus={this.onArchivedToggleHandler} onDelete={this.onDeleteHandler} addNote={this.onAddNoteHandler} />
      </>
    )
  }
}

export default NotesApp;
