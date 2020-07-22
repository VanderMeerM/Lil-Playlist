<<<<<<< HEAD
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
=======
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
>>>>>>> 3b128b28d34a24bbf4015aa19be369d29827a4f8
export default Header;