// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameClicked = () => {
    this.setState(prevState => {
      if (prevState.firstName) {
        return {firstName: false}
      }
      return {firstName: true}
    })
  }

  lastNameClicked = () => {
    this.setState(prevState => {
      if (prevState.lastName) {
        return {lastName: false}
      }
      return {lastName: true}
    })
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="card">
          <div className="part">
            <button
              className="button"
              type="button"
              onClick={this.firstNameClicked}
            >
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="name-card">
                <p className="heading">Joe</p>
              </div>
            ) : null}
          </div>
          <div className="part">
            <button
              className="button"
              type="button"
              onClick={this.lastNameClicked}
            >
              Show/Hide Lastname
            </button>
            {lastName ? (
              <div className="name-card">
                <p className="heading">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
