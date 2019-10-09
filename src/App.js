import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import pacmanApp from './Reducer';
import Board from './Board';
import Header from './Header';
import MovePacman from './MovePacman';
import { pop_Gameboard } from './Action';

const store = createStore(pacmanApp);
const Applist = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <PacmanApp />
      </div>
    </Provider>
  );
};
let emptyboard =
  //1=<div class="wall"></div>
  //2= <div class="coin"></div>
  //3=<div class="ground"></div>
  //5= <div class="pacman"></div>
  [
    [5, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
  ];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('componnet did mount', this.props);

    const { populateList } = this.props;

    populateList(emptyboard);
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <Header />
        <MovePacman />
        <Board />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  console.log('dispatch');
  return {
    populateList: gameboardlist => dispatch(pop_Gameboard(gameboardlist)),
  };
};
export const PacmanApp = connect(
  null,
  mapDispatchToProps,
)(App);

export default Applist;
