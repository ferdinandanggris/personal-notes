import React from 'react';
class NoteInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      body : ''
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onFormSubmitHandler = this.onFormSubmitHandler.bind(this);
  }

  onTitleChangeHandler(e){
    if (e.target.value.length > 50) {
      return;
    }
    this.setState({
      title : e.target.value
    })
  }

  onBodyChangeHandler(e){
    this.setState({
      body : e.target.value
    })
  }

  onFormSubmitHandler(e){
    e.preventDefault();
    this.props.addNote({
      title : this.state.title,
      body : this.state.body
    });
    this.setState({
      title : '',
      body : ''
    })
  }

  render(){
    return (
      <>
        <div className="note-input">
          <h2>Buat Catatan</h2>
          <form onSubmit={this.onFormSubmitHandler}>
            <p className="note-input__title__char-limit">
              Sisa karakter: {50 - this.state.title.length}
            </p>
            <input type="text" className="note-input__title" placeholder="Judul catatan" value={this.state.title} onChange={this.onTitleChangeHandler} required/>
            <textarea className="note-input__body" placeholder="Isi catatan" value={this.state.body} onChange={this.onBodyChangeHandler} required></textarea>
            <button type="submit">Tambah</button>
          </form>
        </div>
      </>
    )
  }
}

export default NoteInput;
