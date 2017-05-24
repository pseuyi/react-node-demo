import React from 'react'

const SingleArtist = ({artist}) => (
  <div className="
    col-xs-6
    col-sm-4
    col-md-4
    col-lg-4"
  >
    <div className="section artist">
      <div className="artist-image">
        <img src={
            artist.url || `http://iscale.iheart.com/catalog/artist/${artist.artistId}?ops=fit(250,0)`}
            alt ={artist.artistName}
        />
      </div>
      <div className="artist-description">
        <h4>
          {artist.artistName}
        </h4>
        <p>
          {artist.description || null}
        </p>
      </div>
    </div>
  </div>
)

export default SingleArtist
