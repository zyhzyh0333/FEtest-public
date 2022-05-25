import React, { Component } from "react";
import Select from 'react-select';
import { components } from "react-select";
import '../App.css'

const genreOptions = [
  { value: 'Any Genre', label: 'Any Genre' },
  { value: 'Action', label: 'Action' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Drama', label: 'Drama' },
  { value: 'Thriller', label: 'Thrill' },
];

/**
 * Adding checkbox to dropdown selection bar
 *
 * reference: https://medium.com/geekculture/creating-multi-select-dropdown-with-checkbox-in-react-792ff2464ef3
 */
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};


class Genres extends Component {

  render() {

    return (
      <div>
        <Select
          options={genreOptions}
          isMulti
          placeholder={"Genre"}
          closeMenuOnSelect={false}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          components={{Option}}
          onChange={this.props.onChange}
          allowSelectAll={true}
        />
      </div>
    );
  }
}

export default Genres;