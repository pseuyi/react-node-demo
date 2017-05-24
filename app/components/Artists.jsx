import React from 'react'

import SingleArtist from './SingleArtist'

const Artists = ({ artists }) => (
  <div className="main-content row">
    {
      artists.length?
        artists.map((artist,idx)=>(
          <SingleArtist artist={artist} key={`artist${idx}`}/>
        ))
        : <h3 className="no-results section">No results found.</h3>
    }
  </div>
)

export default Artists
