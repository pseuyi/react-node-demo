import React from 'react'

export default class Footer extends React.Component {

  render () {
    return (
      <div className="footer">
        <div className="row">
          <div className="
            col-xs-12
            col-sm-4
            col-md-4
            col-lg-4
            ">
            <div className="title section"><h2>Info.</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="
            col-xs-12
            col-sm-4
            col-md-4
            col-lg-4
            ">
            <div className="section">
              <h3>Thank you for visiting!</h3>
              <p>
                Type in any name to begin searching for artists. iHeartFinder will show you the top six results for your search.<br />
              </p>
            </div>
          </div>
          <div className="
            col-xs-12
            col-sm-4
            col-md-4
            col-lg-4
            ">
            <div className="section">
              <h3>Code</h3>
              <p><a href="https://github.com/pseuyi/">github</a><br />
              <a href="https://pseuyi.xyz">pseuyi.xyz</a></p>
            </div>
          </div>
          <div className="
            col-xs-12
            col-sm-4
            col-md-4
            col-lg-4
            ">
            <div className="section">
              <h3>Contact</h3>
              <p>
                freda suyi ding<br />
                +1 562 328 4960<br />
                pseuyi@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
