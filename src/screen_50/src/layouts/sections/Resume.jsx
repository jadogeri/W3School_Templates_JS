import React from 'react'

const Resume = () => {
  return (
    <div className="w3-half w3-indigo w3-container" style={{ minHeight: 800 }}>
    <div className="w3-padding-64 w3-center">
      <h2>Resume</h2>
      <p>A draft from my CV</p>
      <div className="w3-container w3-responsive">
        <table className="w3-table">
          <tbody>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th>Where</th>
            </tr>
            <tr className="w3-white">
              <td>2012-2016</td>
              <td>The rest is history..</td>
              <td>Lorem ipsum</td>
            </tr>
            <tr>
              <td>2009-2012</td>
              <td>Started my own company</td>
              <td>My Garage</td>
            </tr>
            <tr className="w3-white">
              <td>2008-2009</td>
              <td>Started working for Lorem</td>
              <td>London, UK</td>
            </tr>
            <tr>
              <td>2005-2008</td>
              <td>Degree in Bachelor of Design</td>
              <td>Harvard, USA</td>
            </tr>
            <tr className="w3-white">
              <td>2002-2005</td>
              <td>Degree in Bachelor of Business</td>
              <td>RMIT University, Melbourne, Australia</td>
            </tr>
            <tr className="w3-hide-medium">
              <td>2002-2005</td>
              <td>Degree in Bachelor of Business</td>
              <td>RMIT University, Melbourne, Australia</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Resume