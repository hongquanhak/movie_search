import React from 'react'

class MovieRow extends React.Component {
  render(){
    const {
      id,
      poster_src,
      title,
      overview
     } = this.props.movie
    return <table key={id}>
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={poster_src} />
        </td>
        <td>
          {title}
          <p>{overview}</p>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow