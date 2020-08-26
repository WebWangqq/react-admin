import React from 'react'

class Detail extends React.Component {

  render () {
    // console.log(this.props)
    return (
      <div>{this.props.match.params.sid}</div>
    )
  }
}
export default Detail