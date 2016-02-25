import {Camera} from 'phaser';

import OxygenMeter from 'ui/oxygen-meter';
import Player from 'entities/actors/creatures/player';

/**
 * @param {GameState} state
 * @param {Object} [options]
 * @return {GameState}
 */
export default (state, options = {}) => {
  const trait = Object.assign({}, state, {
    /**
     * @param {number} x
     * @param {number} y
     */
    createPlayer(x, y) {
      trait.player = Player(x, y);
      trait.oxygenMeter = OxygenMeter(trait.getPlayer());
      trait.game.camera.follow(trait.player, Camera.FOLLOW_LOCKON);
    },

    /**
     * @return {Player}
     */
    getPlayer() {
      return trait.player;
    }
  });

  if (options.x && options.y) {
    trait.createPlayer(options.x, options.y);
  }

  return trait;
};
