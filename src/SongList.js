import React, { Component } from "react";

const SongList = ({ songs } ) =>  {
    
    const allSongs = songs 
    ? songs.map(song => (
                <li>{song.song}, 
                {song.artist},
                {song.genre},
                {song.rating}
                <button> Verwijder song</button>
                </li>
    ))
    :"";
    

return (allSongs)
    }    
    
    export default SongList;