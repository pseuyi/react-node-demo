import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Header from './Header'
import Search from './Search'
import Artists from './Artists'
import Footer from './Footer'

import { fetchArtists } from '../redux/artists'

export class App extends React.Component {
  constructor () {
    super()
    this.state={
      searchTerm: "",
      results: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({searchTerm: e.target.value})
  }
  handleSubmit (e) {
    e.preventDefault()
    this.setState({results: this.state.searchTerm})
    const url = this.createUrl(this.state.searchTerm)
    this.props.fetchArtists(url)
    this.setState({searchTerm: ""})
  }
  createUrl (queryArtist) {
    return  `http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords=
    ${queryArtist}
    &queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false&queryKeyword=false&countryCode=US`
  }
  render () {
    const { artists } = this.props
    return (
      <div className="app">
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.searchTerm}
        />
        <Header searchTerm={this.state.results}/>
        <Artists artists={artists}/>
        <Footer />
      </div>
    )
  }
}

export default connect(
  ({ artists }) => ({ artists }),
  { fetchArtists }
)(App)
