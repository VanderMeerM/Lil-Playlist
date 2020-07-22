<<<<<<< HEAD
import React from "react";


const SongForm = ( { addSong } ) => {
  

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
          <option value="">Kies genre</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Pop">Pop</option>
        </select>
       <select 
        id="rating" name="rating">
      <option value="">Bepaal rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
     
        <button onClick={addSong} type="submit"> Add song</button>
         </form>
               
       
    )}


=======
import React from "react";


const SongForm = ( { addSong } ) => {
  

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
          <option value="">Kies genre</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Pop">Pop</option>
        </select>
       <select 
        id="rating" name="rating">
      <option value="">Bepaal rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
     
        <button onClick={addSong} type="submit"> Add song</button>
         </form>
               
       
    )}


>>>>>>> 3b128b28d34a24bbf4015aa19be369d29827a4f8
export default SongForm;