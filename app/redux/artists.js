import axios from 'axios'

/* initial state */
const initialState = [
  {
  	artistName: "The Weeknd",
  	description: "Feat. August Alsina, Jeremih and more",
  	url: "http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)"
  },
  {
  	artistName: "Selena Gomez",
  	description: "Feat. Ariana Grande, Demi Lovato and more",
  	url: "http://iscale.iheart.com/catalog/artist/57706?ops=fit(250,0)"
  },
  {
  	artistName: "R.City",
  	description: "Feat. Nelly, Iyaz, Wiz Khalifa and more",
  	url: "http://iscale.iheart.com/catalog/artist/30005067?ops=fit(250,0)"
  },
  {
  	artistName: "Justin Bieber",
  	description: "Feat. Shawn Mendes, One Direction and more",
  	url: "http://iscale.iheart.com/catalog/artist/44368?ops=fit(250,0)"
  },
  {
  	artistName: "Major Lazer",
  	description: "Feat. Iyaz, Dillon Francis & DJ Snake and more",
  	url: "http://iscale.iheart.com/catalog/artist/43557?ops=fit(250,0)"
  },
  {
  	artistName: "Taylor Swift",
  	description: "Feat. Meghan Trainor, Katy Perry and more",
  	url: "http://iscale.iheart.com/catalog/artist/33221?ops=fit(250,0)"
  }
]

/* actions */

const INITIALIZE = 'INITIALIZE_ARTISTS'

/* action creators */

const init  = artists => ({ type: INITIALIZE, artists })

/* reducer */

export default function reducer (artists=initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return action.artists
    default:
      return artists;
  }
}

/* dispatchers */

export const fetchArtists = (url) => dispatch => {
  axios.get(url)
   .then(res => {
     // only take first six
     const data = res.data.artists.slice(0,6)
     dispatch(init(data))
   })
   .catch((err)=>console.error('unsuccessful fetch', err))
}
