import React, {Component} from "react";
import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends Component {
  
    constructor() {
      super()
      this.state = 
      {
        songs: [
            { id: 0,
             }
        ]
      };
    }

    render() {
    const addSong = song => {
         // doe iets om de state aan te passen
        const newSong = { 
            id: this.state.songs.length + 1,
            song: "song",
            artist: "artist",
            genre: "genre",
            rating: "rating"
        }                   
           this.setState(prevState => {
            const newList = prevState.songs.concat(newSong);
            return {
              songs: newList
            };
        });
      };

    return (
        <div>
            <SongForm addSong={this.addSong}/>
                    <table>
                    <tr className="song-header">  
                      <th className="song-row__item">Song</th>
                      <th className="song-row__item">Artist</th>
                      <th className="song-row__item">Genre</th>
                      <th className="song-row__item">Rating</th>
                    </tr>
                  </table>
            <SongList songs={this.state.songs}/>
         
          </div>
      );
    }
  }

  export default SongOverview 