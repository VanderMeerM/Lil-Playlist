import React from "react";


function Header ({ clickHeader, filter }) {

		
	return (
		 <thead> 		
		<tr className="song-header">
			<th className="song-row__item" onClick={()=>clickHeader(0)}>Song</th>
			<th className="song-row__item" onClick={()=>clickHeader(1)}>Artist</th>
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
			<th className="song-row__item" onClick={()=>clickHeader(3)}>Rating</th>
		</tr>
		</thead>
	)
}
export default Header;