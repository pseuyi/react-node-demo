import React from 'react'
import 'material-design-icons'

const Search = ({ handleSubmit, handleChange, value }) => (
  <div className="search-bar">
    <form onSubmit={handleSubmit}>
      <input
        className="search-input"
        placeholder="Enter artist name"
        onChange={handleChange}
        value={value}
      />
    <i
      className="search-icon material-icons md-36"         onClick={handleSubmit}>
      search
    </i>
    </form>
  </div>
)

export default Search
