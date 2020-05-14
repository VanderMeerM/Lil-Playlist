import React, {Component} from "react";
import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends Component {
  
  constructor() {
    super()
    this.state = 
    {
      songs: [ 
      ]
    }
    
  }

  addSong = (song) => {
    song.preventDefault();
    const thissong = document.getElementById('song').value;
    const artist = document.getElementById('artist').value;
    const genre = document.getElementById('genre').value;
    const rating = document.getElementById('rating').value;

    const newSong = {
      id: this.state.songs.length+1,
      song: thissong,
      artist: artist,
      genre: genre,
      rating: rating};
      this.setState (prevState => {
        const newList = prevState.songs.concat(newSong);
        return {
          songs: newList
        };
    }
    )
  }

  deleteSong = (song) => {
    console.log('hallo')
  }

  clickHeader = (header) => {
    const sort = this.state.songs.sort((a,b) => (a.song > b.song) ? 1 : -1);
    console.log(sort)
   }
   
  
 

  render() {
    return (
      <div>
        <h1> Marcello's Lil' playlist</h1>
          <SongForm addSong={this.addSong}
          clickHeader={this.clickHeader}/>
		      <table style={{width:100}}>
		        <tr className="song-header">  
			        <th className="song-row__item" onClick={this.clickHeader}>Song</th>
			        <th className="song-row__item">Artist</th>
			        <th className="song-row__item">Genre</th>
			        <th className="song-row__item">Rating</th>
			      </tr>
                    	   
         <SongList songs={this.state.songs}
                deleteSong = {this.deleteSong}/>
          
         </table> 
         </div>
     
    );
  }
}

export default SongOverview;