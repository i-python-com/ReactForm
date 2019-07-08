import React from 'react'

const initialState = {
  firstName: '',
  lastName: '',
  textarea: '',
  hobbys: [],
  gender: '',
  favColor: ''
}

class App extends React.Component {
  constructor() {
    super()
    this.state = initialState

    this.handleChange = this.handleChange.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const { name, value, type } = e.target

    type === 'checkbox'
      ? this.setState(prevState => {
          if (prevState.hobbys.includes(name)) {
            return {
              hobbys: prevState.hobbys.filter(hobby => hobby !== name)
            }
          } else {
            return {
              hobbys: [...prevState.hobbys, name]
            }
          }
        })
      : this.setState({ [name]: value })
  }

  handleReset() {
    this.setState(initialState)
  }

  handleSubmit() {}

  render() {
    console.log(this.state)

    return (
      <div>
        <form action="" method="POST" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            First Name:{' '}
            <input
              type="text"
              name="firstName"
              placeholder="input your first name"
              required
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="">
            Last Name:{' '}
            <input
              type="text"
              name="lastName"
              placeholder="input your last name"
              required
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          Gender:{' '}
          <label>
            <input
              type="radio"
              name="gender"
              id=""
              value="male"
              required
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              id=""
              value="female"
              required
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />
            Famale
          </label>
          <br />
          <br />
          <textarea
            name="textarea"
            id=""
            cols="30"
            rows="10"
            placeholder="input your instruction"
            required
            value={this.state.textarea}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <span>Hobby: </span>
          <label>
            <input
              type="checkbox"
              name="Reading"
              checked={this.state.hobbys.includes('Reading')}
              onChange={this.handleChange}
            />{' '}
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="Music"
              checked={this.state.hobbys.includes('Music')}
              onChange={this.handleChange}
            />{' '}
            Music
          </label>
          <label>
            <input
              type="checkbox"
              name="Movie"
              checked={this.state.hobbys.includes('Movie')}
              onChange={this.handleChange}
            />{' '}
            Movie
          </label>
          <br />
          <br />
          <label>Favorite color: </label>
          <select
            name="favColor"
            id=""
            required
            value={this.state.favColor}
            onChange={this.handleChange}
          >
            <option value="">Choose here</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
          </select>
          <hr />
          <h3>
            Hello{' '}
            {this.state.gender === 'male'
              ? 'Sir'
              : this.state.gender === 'female'
              ? 'Mrs'
              : ' '}{' '}
            , your name is {this.state.firstName + ' ' + this.state.lastName}
          </h3>
          <h3>You like {this.state.hobbys.join(',')}</h3>
          <h3>Your favorite color is {this.state.favColor}</h3>
          <button type="submit">Submit</button>
          <button type="reset" onClick={this.handleReset}>
            Reset
          </button>
        </form>
      </div>
    )
  }
}

export default App
