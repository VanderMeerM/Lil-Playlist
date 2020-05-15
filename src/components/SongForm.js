import React from "react";



const SongForm = ( { addSong, clickHeader} ) => {

    return(
        
        <form >
        <input
          placeholder="Song"
          type="text"
          id="song"
          ></input>
        <input 
        placeholder="Artist"
        type="text"
        id="artist"
        ></input>
        <select 
        id="genre" name="genre">
          <option value=""></option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Pop">Pop</option>
        </select>
       <select 
        id="rating" name="rating">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
     
        <button onClick={addSong} type="submit"> Add song</button>
         </form>
               
       
    )}


export default SongForm;