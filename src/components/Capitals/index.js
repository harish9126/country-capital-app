import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedId: countryAndCapitalsList[0].id,
  }

  onSelectChange = event => {
    this.setState({selectedId: event.target.value})
  }

  render() {
    const {selectedId} = this.state
    const menuItem = countryAndCapitalsList.find(item => item.id === selectedId)

    return (
      <div className="app-container">
        <div className="content-container">
          <h1>Countries And Capitals</h1>
          <div>
            <select
              onChange={this.onSelectChange}
              value={selectedId}
              id="countryDropDown"
            >
              {countryAndCapitalsList.map(item => {
                const {id, capitalDisplayText} = item
                return (
                  <option className="dropdown-item" key={id} value={id}>
                    {capitalDisplayText}
                  </option>
                )
              })}
            </select>
            <label className="label-text" htmlFor="countryDropDown">
              is capital of which country?
            </label>
          </div>
          <p>{menuItem.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
