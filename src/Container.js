import React, {Component} from "react";
import SongForm from "./components/SongForm"
import Header from "./components/Header"
import SongList from "./components/SongList"


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

  clickHeaderSong = () => {
  
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table");
    switching = true;
    dir = "asc";
      while (switching) {
      switching = false;
      rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) {
      
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (dir === "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
        }
      } else if (dir ==="desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
      if (shouldSwitch) {
        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount === 0 && dir === "asc") {
          dir = "desc";
          switching = true;
      }
    }
  }
}
        
clickHeaderArtist() {
  
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc";
    while (switching) {
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
    
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (dir === "asc") {
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      shouldSwitch = true;
      break;
      }
    } else if (dir ==="desc") {
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
  }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
    }
  }
}
}

clickHeaderRating() {
  
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc";
    while (switching) {
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
    
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];
      if (dir === "asc") {
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      shouldSwitch = true;
      break;
      }
    } else if (dir ==="desc") {
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
  }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
    }
  }
}
}

clickRating1() {
  console.log('hallo')
}

  render() {
    return (
      <div>
        <h1> Marcello's Lil' playlist</h1>
          <SongForm addSong={this.addSong}/>

 <table id="table" style={{width:100}}>
          
          <Header 
          clickArtist={this.clickHeaderArtist}
          clickSong={this.clickHeaderSong}
          clickRating={this.clickHeaderRating} />
		     		                           	   
         <SongList songs={this.state.songs}
           deleteSong = {this.deleteSong}/>

         </table> 
               
                </div>
     
    );
  }
}

export default SongOverview;