import React from 'react'
import Album from './Album'

export default function Albums(props) {
    // console.log(props);
    return (
        <div className='container'>
{props.albums.map(album => {
    return( <Album 
                key={album.id} 
                albumCover={album.album_cover}
                artist={album.artist}
                albumTitle={album.album_title}
                />
            )})}
        </div>
    )
    }


