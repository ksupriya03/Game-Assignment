export const POP_GAMEBOARD = 'POP_GAMEBOARD';
export const KEY_EVENTDIRECTION = 'KEY_EVENTDIRECTION';
export const MOV_PACMAN_DIR = 'MOV_PACMAN_DIR';
export const MAP_DIRECTION = 'MAP_DIRECTION';
export const KEY_MOVEMENT = 'KEY_MOVEMENT';

export function pop_Gameboard(gameboardlist) {
  console.log('gameboard' + gameboardlist);
  return { type: POP_GAMEBOARD, gameboardlist };
}
export function key_Direction(text) {
  console.log('event direction' + text);
  return { type: KEY_EVENTDIRECTION, text };
}
export function movePacDirection(text) {
  console.log('event direction' + text);
  return { type: MOV_PACMAN_DIR, text };
}
export function map_Direction(text) {
  return { type: MAP_DIRECTION, text };
}
export function key_Movement(text) {
  return { type: KEY_MOVEMENT, text };
}
