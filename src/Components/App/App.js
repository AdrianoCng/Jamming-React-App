import React from 'react';
import './App.css';

import SearchBar from '../Searchbar/Searchbar';
import SearchResults from '../SearchResults/Searchresults';
import Playlist from '../PlayList/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      searchResults: [{
          name: 'name1',
          artist: 'artist1',
          album: 'album1',
          id: 1
        }, {
          name: 'name2',
          artist: 'artist2',
          album: 'album2',
          id: 2
        }, {
          name: 'name3',
          artist: 'artist3',
          album: 'album3',
          id: 3
      }],
      playlistName: "playlistName1",
      playlistTracks: [{
        name: "playlistTracksName1",
        artist: "playlistTracksArtist1",
        album: "playlistTracksAlbum1",
        id: 4
      }, {
        name: "playlistTracksName2",
        artist: "playlistTracksArtist2",
        album: "playlistTracksAlbum2",
        id: 5
      }]
    }
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({
      playlistTracks: tracks
    });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({
      playlistTracks: tracks
    });
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                           onAdd={this.addTrack}/>
            <Playlist onRemove={this.removeTrack}
                      playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}
                      searchResults={this.state.searchResults}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
