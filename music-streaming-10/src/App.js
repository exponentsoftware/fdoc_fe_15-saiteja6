import React from 'react'
import './App.css';
import AddAlbum from './components/AddAlbum';
// import Album from './components/Album';
import Albums from './components/Albums'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // aritst: 'A.R. Rahman',
        // album: 'Rockstar',
        // albumCover: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Rockstar_%28soundtrack%29.jpg',
        albums: [
        { id: 1,
          artist: 'A.R. Rahman', 
          album_title: 'Rockstar', 
          album_cover: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Rockstar_%28soundtrack%29.jpg', 
          songs: ['Kun Fayakun', 'Nadaan Parindey', 'Saadda Haq']
        },
        { id: 2, 
          artist: 'A.R. Rahman', 
          album_title: 'Highway', 
          album_cover: 'https://a10.gaanacdn.com/images/albums/86/150486/crop_175x175_150486.jpg', 
          songs: ['Patakha Guddi - Female Version', 'Maahi Ve']
        },
        { id: 3, 
          artist: 'Vishal-Shekhar', 
          album_title: 'I hate Luv Storys', 
          album_cover: 'https://a10.gaanacdn.com/images/albums/80/22080/crop_175x175_22080.jpg', 
          songs: ['Bahara', 'Bin Tere', 'I hate Luv Storys', 'Sadka Hua', 'Jab Mila Tu']
        }
      ]
      }
    }

    receiver = (objInHandleSubmit) => {
        let { albums } = this.state;
        albums.push(objInHandleSubmit)
    }

    delete = () => {

    }

    render() {
      return(
        <div className="App">
            {/* <Album artist={this.state.artist} album={this.state.album} albumCover={this.state.albumCover}/> */}
            <Albums albums={this.state.albums} delete={this.delete} />
            <AddAlbum receiver={this.receiver}/>
        </div>
      )
    }
}


export default App;
