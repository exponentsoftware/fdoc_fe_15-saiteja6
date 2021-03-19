import React from 'react'

export default class AddAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album_title: '',
            artist: '',
            album_cover: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
    return (
        <div>
            <form className='addAlbum-container'>
                <label>Album Title:</label>
                <input
                    type='text'
                    placeholder='album_title'
                    name='album_title'
                    value={this.state.album_title}
                    onChange={this.handleChange}
                    >
                </input>
                <label>Aritst:</label>
                <input
                    type='text'
                    placeholder='aritst'
                    name='artist'
                    value={this.state.artist}
                    onChange={this.handleChange}
                    >
                        
                </input>
                <label>Upload Album Cover:</label>
                <input
                    type='file'
                    placeholder='album_cover'
                    name='album_cover'
                    value={this.state.album_cover}
                    onChange={this.handleChange}
                    >
                </input>
                <button type='submit'>Submit</button>
            </form>

            <p>{this.state.album_title}</p>
            <p>{this.state.artist}</p>

        </div>
    )}
}
