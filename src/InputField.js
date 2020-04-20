import React, {Component} from "react";

class InputField extends Component {
    constructor() {
    super()

this.onInput = this.onInput.bind(this)
    }

onInput(event) {
        this.setState({
           [event.target.name]:event.target.value
            
        })
    }

 render() {
       return (
        <form >
        <input
          placeholder="Song"
          type="text"
          name="song"
          onChange={this.onInput}
          //value={this.state.songs.song}
          //className="input-primary"
        ></input>
        <input 
        placeholder="Artist"
        type="text"
        name="artist"
        onChange={this.onInput}
        ></input>
        <input 
        placeholder="Genre"
        type="text"
        name="genre"
        onChange={this.onInput}
        ></input>
        <input 
        placeholder="Rating"
        type="text"
        name="rating"
        onChange={this.onInput}
        ></input>
            
      </form>
        );
   }}

  
  export default InputField;