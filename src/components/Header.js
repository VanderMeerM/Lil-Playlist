import React from "react";


function Header ({clickSong, clickArtist, clickRating}) {

    return(


		        <tr className="song-header">  
			        <th className="song-row__item" onClick={clickSong}>Song</th>
			        <th className="song-row__item" onClick={clickArtist}>Artist</th>
			        <th className="song-row__item">Genre</th>
			        <th className="song-row__item" onClick={clickRating} >Rating</th>
			      </tr>
                  
    )}

    export default Header;