import Phaser, {Game} from 'phaser';

import Boot from 'states/boot';

export const TILE_SIZE = 16;
export const PIXEL_SCALE = 2;

let _game;

/**
 * @return {Phaser.Game}
 */
export default function createGame() {
  _game = new Game(
    400,
    225,
    Phaser.AUTO,
    'phaser',
    null,
    false,
    false
  );

  _game.state.add('Boot', Boot, false);
  _game.state.start('Boot');

  return _game;
}

/**
 * @return {Phaser.Game}
 */
export function getGame() {
  return _game;
}

/**
 * @param {string} stageName
 * @param {Stage} stageClass
 */
export function startStage(stageName, stageClass) {
  getGame().state.start('Preloader', true, false, {stageName, stageClass});
}

/**
 * @param {number} tile
 * @return {number}
 */
export function getTileCoordinate(tile) {
  return TILE_SIZE * tile;
}
