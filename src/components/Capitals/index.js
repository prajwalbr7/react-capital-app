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

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const CountryResults = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return CountryResults.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <div className="container1">
        <div className="container2">
          <h1 className="">Countries and Capitals</h1>
          <div className="container3">
            <select className="select-style" onChange={this.onChangeCapital}>
              {countryAndCapitalsList.map(eachItem => (
                <option className="" key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="span-style">is capital of which country?</p>
          </div>
          <p className="country-style">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
