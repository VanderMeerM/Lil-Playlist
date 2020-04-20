import React, { Component } from "react";
import SongList from "./SongList"
import InputField from "./InputField"

const SongForm = ( { addSong } ) => {

    return(
        <div>
         <InputField />
         <button onClick={addSong} type="submit"> Add song</button>
        <SongList />
        </div>
    )}


export default SongForm;