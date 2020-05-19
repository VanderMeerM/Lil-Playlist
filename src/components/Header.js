import React from "react";


function Header({ clickSong, clickArtist, clickRating, filter }) {
	
	return (


		<tr className="song-header">
			<th className="song-row__item" onClick={clickSong}>Song</th>
			<th className="song-row__item" onClick={clickArtist}>Artist</th>
			<th className="song-row__item">Genre</th>
			
				{/* nodig voor poging genre te filteren 
			<select onChange={filter} id="select">Genre
				<option></option>
         		 <option>Rock</option>
					<option>Jazz</option>
					<option>Pop</option>
				</select>
			</th>
				*/}
			<th className="song-row__item" onClick={clickRating} >Rating</th>
		</tr>

	)
}

export default Header;