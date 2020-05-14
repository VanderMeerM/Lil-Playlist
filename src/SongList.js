import React from "react";


function SongList (props) {
   
    return(
           
    props.songs.map (song => {
        return(
    <tr key={song.id} className ="song-row__purple">
        <td>{song.song}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        <td>{song.rating}</td>
        <button onClick={props.deleteSong}> Delete song</button>
    </tr>    
    )}
       
     
    
    ))
}

    
export default SongList;
