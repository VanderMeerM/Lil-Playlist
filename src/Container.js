import React, {Component} from "react";
import SongForm from "./components/SongForm"
import Header from "./components/Header"
import SongList from "./components/SongList"


class SongOverview extends Component {
  
  constructor() {
    super()
    this.state = 
    {
      songs: [{id: 0, 
        song: "Dancing Queen",
        artist: "Abba", 
        genre: "Pop", 
        rating: 4}]   
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

 deleteSong() {
      let index, table = document.getElementById("table");
            for(let i = 1; i < table.rows.length; i++)
            {
                table.rows[i].cells[4].onclick = function() 
                {
                       index = this.parentElement.rowIndex;
                        table.deleteRow(index);
                    }
                                  
                };
                
            }

filterGenre = (event) => {
  
  //let table = document.getElementById("table");

  let songs = this.state.songs;
  let filter = songs.filter(song => song.genre === event.target.value);
  console.log(filter)
     }

/*
  for (var i = 1; i < select.length; i++) {
      var txt = select.options[0].text;
            
     if (txt.substring(0, selectedGenre.length).toLowerCase() !== selectedGenre.toLowerCase() && selectedGenre.trim() !== "") {
          select.options[i].style.display = 'none';
      } else {
          select.options[i].style.display = 'list-item';
      }
  */
          
    clickHeaderSong() {
  
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

  render() {

    
    return (
      <div>
        <h1> Marcello's Lil' playlist</h1>
          <SongForm addSong={this.addSong}/>

 <table id="table" style={{width:100}}>
          
          <Header 
          clickArtist={this.clickHeaderArtist}
          clickSong={this.clickHeaderSong}
          clickRating={this.clickHeaderRating}
          filter = {this.filterGenre} />
		     		                           	   
         <SongList songs={this.state.songs}
          deleteSong = {this.deleteSong}/>

         </table> 
               
                </div>
     
    );
  }
}

export default SongOverview;