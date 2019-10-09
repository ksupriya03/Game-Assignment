import {
  POP_GAMEBOARD,
  KEY_EVENTDIRECTION,
  MOV_PACMAN_DIR,
  MAP_DIRECTION,
  KEY_MOVEMENT,
} from './Action';

let emptyBoard =
  //1=<div class="wall"></div>
  //2= <div class="coin"></div>
  //3=<div class="ground"></div>
  //5= <div class="pacman"></div>
  [
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 1, 1, 2],
    [2, 2, 2, 1, 2],
    [2, 2, 2, 1, 2],
  ];

const initialState = {
  board: emptyBoard,
  player: {
    name: 'Player1',
    direction: 'right',
    x: 0,
    y: 0,
  },
};
function get_direction(keyCode, mapState) {
  let keyvalue = keyCode;
  let direction;
  let mapValue = mapState;
  console.log(mapState);
  if (keyvalue === 37 || mapValue === 'East') {
    direction = 'left';
  }
  if (keyvalue === 38 || mapValue === 'North') {
    direction = 'up';
  }
  if (keyvalue === 39 || mapValue === 'West') {
    direction = 'right';
  }
  if (keyvalue === 40 || mapValue === 'South') {
    direction = 'down';
    console.log(direction);
  }
  return direction;
}

function Player(player, board) {
  const checkcollision = ({ x, y, direction }) => {
    //let board = appState.board;
    console.log('x', x, 'y', y);
    let value = null;
    console.log(direction);
    if (direction === 'left') {
      value = board[y][x - 1];
    }
    if (direction === 'right') {
      value = board[y][x + 1];
    }
    if (direction === 'up' && (y > 0 && y <= 4)) {
      value = board[y - 1][x];
    }
    if (direction === 'down' && (x >= 0 && x <= 4 && y < 4)) {
      console.log('board4*4');
      value = board[y + 1][x];
    }
    console.log('value is' + value);
    return value;
  };
  let direction = player.direction;
  let x = player.x;
  let y = player.y;
  console.log(
    'player function' + player.direction + 'x:' + player.x + 'y:' + player.y,
  );
  let collisionVal = checkcollision({ x, y, direction });
  console.log('collisionVal' + collisionVal);
  if (collisionVal == 2 || collisionVal == 3) {
    if (direction === 'left') {
      board[y][x] = 3;
      x = x - 1;
      board[y][x] = 5;
    }
    if (direction === 'right') {
      board[y][x] = 3;
      x = x + 1;
      board[y][x] = 5;
    }
    if (direction === 'up') {
      board[y][x] = 3;
      y = y - 1;
      board[y][x] = 5;
    }
    if (direction === 'down') {
      console.log('value in down', y, 'x', x);
      board[y][x] = 3;
      y = y + 1;
      board[y][x] = 5;
    }
    player.x = x;
    player.y = y;
    console.log('appstate board' + board);
  }
  return { board, player };
}

function movePacmanPos(player, board, xpos, ypos) {
  console.log('player x and y val', player.x + player.y);
  let x = player.x;
  let y = player.y;
  board[y][x] = 2;
  let a = xpos;
  let b = ypos;
  board[b][a] = 5;
  player.x = a;
  player.y = b;

  return { board, player };
}

export default function pacmanApp(state = initialState, action) {
  console.log('switch type', action.type);
  switch (action.type) {
    case POP_GAMEBOARD:
      return { ...state, board: [...action.gameboardlist] };
    case KEY_EVENTDIRECTION:
      console.log(action.text.keyCode);
      const direction = get_direction(action.text.keyCode, null);
      const initState = {
        ...state,
        player: {
          ...state.player,
          direction,
        },
      };
      return Player(initState.player, initState.board);
    case MOV_PACMAN_DIR:
      const initPos = {
        ...state,
        player: {
          ...state.player,
        },
      };
      return movePacmanPos(
        initPos.player,
        initPos.board,
        action.text.x,
        action.text.y,
      );
    case MAP_DIRECTION:
      const selectdir = get_direction(null, action.text);
      return {
        ...state,
        player: {
          ...state.player,
          direction: selectdir,
        },
      };
    case KEY_MOVEMENT:
      const initMov = {
        ...state,
      };
      return Player(initMov.player, initMov.board);
    default:
      return state;
  }
}
