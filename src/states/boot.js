import GameState from 'states/game-state';
import Preloader from 'states/preloader';
import Stage1 from 'states/stages/stage-1';
import {startStage} from 'core/game';

export default class Boot extends GameState {
  preload() {
    this.load.bitmapFont(
      'press-start-2p',
      require('assets/fonts/bitmap/press-start-2p/press-start-2p.png'),
      require('assets/fonts/bitmap/press-start-2p/press-start-2p.fnt')
    );

    this.load.image('preloadBar', require('assets/spritesheets/preloader.png'));
  }

  create() {
    super.create();

    this.game.state.add('Preloader', Preloader, false);

    startStage('Stage1', Stage1);
  }
}
