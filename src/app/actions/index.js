export const INIT_GAMEBOARD = "INIT_GAMEBOARD";

export const PLACE_PACMAN = "PLACE_PACMAN";
export const MOVE_PACMAN = "MOVE_PACMAN";
export const KEY_NAVIGATION = "KEY_NAVIGATION";
export const ROTATE_CLOCKWISE = "ROTATE_CLOCKWISE";
export const ROTATE_ANTI_CLOCKWISE = "ROTATE_ANTI_CLOCKWISE";

export function initGameboard(gameboardlist) {
  return { type: INIT_GAMEBOARD, gameboardlist };
}

export function placePacman(placeData) {
  return { type: PLACE_PACMAN, placeData };
}

export function movePacman() {
  return { type: MOVE_PACMAN };
}

export function keyPacmanNavigation(keyData) {
  return { type: KEY_NAVIGATION, keyData };
}

export function rotateClockwise() {
  return { type: ROTATE_CLOCKWISE };
}

export function rotateAntiClockwise() {
  return { type: ROTATE_ANTI_CLOCKWISE };
}
