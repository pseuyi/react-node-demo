import React from 'react'

const header = ({ searchTerm }) => (

  <div className="header">
    <div className="row">
      <div className="
        col-xs-12
        col-sm-12
        col-md-12
        col-lg-12
        ">
        <div className="logo"><h1><a href="/">iHeartFinder</a></h1></div>
      </div>
    </div>
    <div className="row">
      <div className="
        col-xs-12
        col-sm-4
        col-md-4
        col-lg-4
        ">
        <div className="title section"><h2>{searchTerm? `Results for ${searchTerm}` : "Artists"}</h2></div>
      </div>
    </div>
  </div>
)

export default header
