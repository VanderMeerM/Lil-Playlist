<<<<<<< HEAD
import React from "react";


function SongList( { songs, deleteSong, YouTube, filter } ) {

  const style = {
    backgroundColor: "white",
    color: "black"
      }

    console.log(filter);
       
    return (
    songs.map(song => {
    //.filter(genre => genre.genre === filter)
     
      return (
        <tbody key={song.id} className="song-row__purple">
          <tr >
            <td>{song.song}</td>
            <td>{song.artist}</td>
            <td>{song.genre}</td>
            <td>{song.rating}</td>
            <td style={style} onClick={YouTube}><img alt="find on YouTube" src={require('./YouTube.png')}></img></td>
            <td style={style} onClick={deleteSong}>Delete song</td>
          </tr>
        </tbody>
      )
    }

    ))
  }



export default SongList;
=======
import React from "react";


function SongList (props) {

  const style = {backgroundColor: "white", 
                color: "black", 
               padding: "0 10px"}
             
   
    return(
           
    props.songs.map (song => {
        return(
      <tbody key={song.id} className ="song-row__purple">
      <tr >
        <td>{song.song}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        <td>{song.rating}</td>
        <td style={style} onClick= {props.deleteSong}>Delete song</td>
    </tr>    
    </tbody>
    )}
       
     
    
    ))
}

    
export default SongList;
>>>>>>> 3b128b28d34a24bbf4015aa19be369d29827a4f8
