import React from "react";


function SongList (props) {

  const style = {backgroundColor: "white", 
                color: "black", 
               padding: "0 10px"}
             
   
    return(
           
    props.songs.map (song => {
        return(
      <tr key={song.id}  className ="song-row__purple">
        <td>{song.song}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        <td>{song.rating}</td>
        <td style={style} onClick= {props.deleteSong}>Delete song</td>
    </tr>    
    )}
       
     
    
    ))
}

    
export default SongList;
