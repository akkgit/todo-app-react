import React from 'react';

class FormExample extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, type, checked, value } = event.target;
    type === 'checkbox'
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="firstName"
            placeholder="First Name"
            type="textbox"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
            type="textbox"
          />
          <input
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
            type="number"
          />
          <label>
            <input
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
              type="radio"
            />
            Male
          </label>
          <label>
            <input
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
              type="radio"
            />
            Female
          </label>
          <select
            name="location"
            onChange={this.handleChange}
            value={this.state.location}
          >
            <option value="hawai">Hawai</option>
            <option value="la">LA</option>
            <option value="hollywood">Hollywood</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
          </select>
          <p>Dietary Restrictions</p>
          <label>
            <input
              name="veg"
              type="checkbox"
              checked={this.state.veg}
              onChange={this.handleChange}
            />
            Vegetarian?
          </label>
          <label>
            <input
              name="kosh"
              type="checkbox"
              checked={this.state.kosh}
              onChange={this.handleChange}
            />
            Kosher?
          </label>
          <label>
            <input
              name="lact"
              type="checkbox"
              checked={this.state.lact}
              onChange={this.handleChange}
            />
            Lactose?
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <div>
          <p>{this.state.firstName}</p>
          <p>{this.state.lastName}</p>
          <p>{this.state.age}</p>
          <p>{this.state.gender}</p>
          <p>{this.state.location}</p>
          <p>Vegan: {this.state.veg ? 'Yes' : 'No'}</p>
          <p>Kosher: {this.state.kosh ? 'Yes' : 'No'}</p>
          <p>Lactose: {this.state.lact ? 'Yes' : 'No'}</p>
        </div>
      </div>
    );
  }
}

export default FormExample;
