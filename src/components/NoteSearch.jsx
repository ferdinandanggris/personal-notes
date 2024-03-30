import React from 'react'

class NoteSearch extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      search : ''
    }
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler(e){
    const value = e.target.value;
    this.setState({search: value});
    this.props.searchNote(value);
  }
  

  render(){
    return (
      <>
        <div className="note-search">
          <input type="text" placeholder="Cari catatan..." value={this.state.search} onChange={this.onSearchChangeHandler} />
        </div>
      </>
    )
  }
}

export default NoteSearch;
