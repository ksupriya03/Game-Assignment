import { cloneDeep } from "lodash";

import {
  MOVE_PACMAN,
  PLACE_PACMAN,
  INIT_GAMEBOARD,
  KEY_NAVIGATION,
  ROTATE_ANTI_CLOCKWISE,
  ROTATE_CLOCKWISE
} from "../actions";
import { getDirection, playerCore, rotate } from "./coreLogic";

export const emptyBoard =
  //1=<div class="wall"></div>
  //2= <div class="coin"></div>
  //3=<div class="ground"></div>
  //5= <div class="pacman"></div>
  [
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2]
  ];

const initialState = {
  board: cloneDeep(emptyBoard),
  player: {
    name: "Player1",
    direction: "up",
    x: 0,
    y: 0
  }
};

export default function pacmanApp(state = initialState, action) {
  console.log("switch type", action.type);
  switch (action.type) {
    case INIT_GAMEBOARD:
      return { ...initialState };
    case PLACE_PACMAN:
      const direction = getDirection(null, action.placeData.face);
      let yAxis = emptyBoard.length - action.placeData.y - 1;

      const updatedBoard = cloneDeep(emptyBoard);
      updatedBoard[yAxis][action.placeData.x] = 5;

      return {
        ...state,
        player: {
          ...state.player,
          x: Number(action.placeData.x),
          y: yAxis,
          direction
        },
        board: updatedBoard
      };
    case MOVE_PACMAN:
      return playerCore(state.player, state.board);
    case KEY_NAVIGATION:
      return playerCore(state.player, state.board);
    case ROTATE_CLOCKWISE:
      return {
        ...state,
        player: {
          ...state.player,
          direction: rotate(state.player.direction, true)
        }
      };
    case ROTATE_ANTI_CLOCKWISE:
      return {
        ...state,
        player: {
          ...state.player,
          direction: rotate(state.player.direction, false)
        }
      };
    default:
      return state;
  }
}
