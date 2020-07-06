import React from "react";
	
function Header ({ clickHeader, filterGenre }) {

		return (
		
		<thead> 		
			<tr className="song-header">
			<th className="song-row__item" onClick={()=>clickHeader(0)}>Song</th>
			<th className="song-row__item" onClick={()=>clickHeader(1)}>Artist</th>
			
			<th className="song-row__item" onChange={filterGenre} id="select">Genre
			<select>
				 <option>Rock</option>
				 <option>Jazz</option>
				 <option>Pop</option>
				 </select>
				 </th>
						
			<th className="song-row__item" onClick={()=>clickHeader(3)}>Rating</th>
		</tr>
		</thead>
						
	)
}
export default Header;