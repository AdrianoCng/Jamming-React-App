import React from 'react';
import TrackList from '../TrackList/Tracklist';
import './Playlist.css';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"} />
                <TrackList tracks={this.props.playlistTracks} />
                <button className="Playlist1-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;