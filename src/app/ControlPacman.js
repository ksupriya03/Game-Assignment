import React from "react";
import { connect } from "react-redux";
//import 'bootstrap/dist/css/bootstrap.css';

import {
  placePacman,
  movePacman,
  rotateAntiClockwise,
  rotateClockwise
} from "./actions";
import Select from "react-select";

const options = [
  { value: "North", label: "North" },
  { value: "South", label: "South" },
  { value: "East", label: "East" },
  { value: "West", label: "West" }
];

class ControlPacman extends React.Component {
  constructor(props) {
    super(props);
    this.state = { xAxis: 0, yAxis: 0, selectedOption: options[0] };

    this.handleChange = this.handleChange.bind(this);
    this.handleFaceChange = this.handleFaceChange.bind(this);
    this.handlePlace = this.handlePlace.bind(this);
    this.handleMovement = this.handleMovement.bind(this);
  }

  handleChange(e) {
    console.log("handle change" + e.target.value);

    if (e.target.value > 4 || e.target.value < 0) {
      alert("Value cannot be greater than 4 or a negative value");
      return;
    }

    this.setState({ [e.target.name]: e.target.value });
  }

  handleFaceChange(selectedOption) {
    this.setState({ selectedOption });
  }

  handlePlace() {
    this.props.placePacman({
      x: this.state.xAxis,
      y: this.state.yAxis,
      face: this.state.selectedOption.value
    });
  }

  handleMovement() {
    this.props.movePacman();
  }

  render() {
    console.log("State: ", this.state);
    return (
      <form>
        <label htmlFor="xAxis">
          <b>x axis:</b>
        </label>
        <input
          className="inputclass"
          id="xAxis"
          type="number"
          name="xAxis"
          value={this.state.xAxis}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="yAxis">
          <b>y axis:</b>
        </label>
        <input
          className="inputclass"
          type="number"
          name="yAxis"
          id="yAxis"
          value={this.state.yAxis}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <Select
          onChange={this.handleFaceChange}
          options={options}
          value={this.state.selectedOption}
        />
        <br />
        <button className="btnclass" type="button" onClick={this.handlePlace}>
          Place
        </button>
        <button
          className="btnclass"
          type="button"
          onClick={this.handleMovement}
        >
          Move
        </button>
        <button
          className="btnclass"
          type="button"
          onClick={() => {
            this.props.rotateLeft();
          }}
        >
          {"<--"}
        </button>
        <button
          className="btnclass"
          type="button"
          onClick={() => {
            this.props.rotateRight();
          }}
        >
          {"-->"}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    placePacman: placeData => dispatch(placePacman(placeData)),
    movePacman: () => dispatch(movePacman()),
    rotateLeft: () => dispatch(rotateAntiClockwise()),
    rotateRight: () => dispatch(rotateClockwise())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ControlPacman);
