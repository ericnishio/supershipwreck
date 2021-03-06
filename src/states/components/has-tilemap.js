import {TILE_SIZE} from 'core/game';

/**
 * @param {GameState} parent
 * @param {Object} options
 * @return {Object}
 */
export default (parent, {tilemap, tilesets = []}) => {
  const component = {};

  parent.stage = parent.game.add.tilemap(tilemap, TILE_SIZE, TILE_SIZE);

  tilesets.forEach(tileset => {
    parent.stage.addTilesetImage(tileset);
  });

  parent._components.hasTilemap = component;

  return component;
};
