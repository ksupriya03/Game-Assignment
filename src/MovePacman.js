import React from 'react';
import { connect } from 'react-redux';
//import 'bootstrap/dist/css/bootstrap.css';
import { movePacDirection, map_Direction, key_Movement } from './Action';
import Select from 'react-select';

const axis = { x: 0, y: 0 };
const options = [
  { value: 'North', label: 'North' },
  { value: 'South', label: 'South' },
  { value: 'East', label: 'East' },
  { value: 'West', label: 'West' },
];
class MovePacman extends React.Component {
  constructor(props) {
    super(props);
    this.state = { direction: axis, selectedOption: null };
    this.handlexChange = this.handlexChange.bind(this);
    this.movePac = this.movePac.bind(this);
    this.handleyChange = this.handleyChange.bind(this);
    this.mapPacDir = this.mapPacDir.bind(this);
    this.handleMovement = this.handleMovement.bind(this);
  }
  mapPacDir(e) {
    console.log('handle change' + e.value);
    this.props.mapPacDir(e.value);
  }
  handlexChange(e) {
    //const{x,y}=e.target.value
    console.log('handle change' + e.target.value);
    if (e.target.value > 4) {
      alert('X axis value cannot be greater than 4 or a negative value');
    }
    axis.x = e.target.value;
    //axis.y = e.target.value;
    this.setState({ direction: axis });
  }
  handleyChange(e) {
    //const{x,y}=e.target.value
    if (e.target.value > 4) {
      alert('Y axis value cannot be greater than 4 or a negative value');
    }
    console.log('handle change' + e.target.value + e.target.value);

    axis.y = e.target.value;
    this.setState({ direction: axis });
  }

  movePac() {
    this.props.movePac(this.state.direction);
  }
  handleMovement(props) {
    console.log('handlemovenet' + this.props.player.direction);
    this.props.handleMovement(this.props.player);
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <label>x axis:</label>
        <input
          type="text"
          value={this.state.direction.x}
          onChange={this.handlexChange}
        />
        <label>y axis:</label>
        <input
          type="text"
          value={this.state.direction.y}
          onChange={this.handleyChange}
        />
        <Select onChange={this.mapPacDir} options={options} autoFocus={true} />
        <button type="button" onClick={this.movePac}>
          Place
        </button>
        <button type="button" onClick={this.handleMovement}>
          Move
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log('redux state', state);
  return {
    player: state.player,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    movePac: text => dispatch(movePacDirection(text)),
    mapPacDir: text => dispatch(map_Direction(text)),
    handleMovement: text => dispatch(key_Movement(text)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovePacman);
