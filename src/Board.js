import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { key_Direction } from './Action';

const Square = square => {
  //console.log('square');
  let classVal = 'wall';
  const squares = square.map((item, i) => {
    if (item === 5) classVal = 'pacman';
    if (item === 1) classVal = 'wall';
    if (item === 2) classVal = 'coin';
    if (item === 3) classVal = 'ground';
    return <div key={i} className={classVal} />;
  });
  return squares;
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  //based on the key code direction is been set for the state
  handleKey(event) {
    console.log('handle key' + this.props + event);
    this.props.handleKey(event);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  render() {
    const { board } = this.props;
    console.log(this.props.board);
    //const board = this.props.state.board;
    const rows = board.map((item, i) => {
      return (
        <div key={i} className="row">
          {Square(item)}
        </div>
      );
    });
    return (
      <div>
        {/* Player(state.player) */}
        {rows}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('redux state', state);
  return {
    board: state.board,
    player: state.player,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('disptach', ownProps.filter);
  return {
    handleKey: text => dispatch(key_Direction(text)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
