/**
 * @param {GameState} state
 * @return {GameState}
 */
export default state => {
  delete state.items;

  const trait = {
    items: state.game.add.group(),

    /**
     * @return {Phaser.Group}
     */
    getItems() {
      return trait.items;
    }
  };

  state.toUpdate = state.toUpdate || [];

  state.toUpdate.push(
    () => {
      trait.getItems().forEachAlive(item => {
        state.game.physics.arcade.collide(item, state.getPlatforms());

        state.game.physics.arcade.collide(item, state.getPlayer(), () => {
          item.handleCollision(state.getPlayer());
        });
      });
    }
  );

  return trait;
};
