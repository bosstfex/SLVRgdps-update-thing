import { screenWidth, centerX, S, E } from './config.js';
import { BootScene, loadFont } from './boot-scene.js';
import { PlayerState, PracticeMode, Easing, cs } from './game-classes.js';
import { parseLevel, getObjectFromId } from './level.js';

// The GameScene class xs
class xs extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene"
    });
  }
  create() {
    this._bgSpeedX = 0.1;
    this._bgSpeedY = 0.1;
    this._menuCameraX = -centerX;
    this._prevCameraX = -centerX;
    this._bg = this.add.tileSprite(0, 0, screenWidth, screenHeight, "game_bg_01").setOrigin(0, 0).setScrollFactor(0).setDepth(-10);
    const _0x15d27a = this.textures.get("game_bg_01").source[0].height;
    this._bgInitY = _0x15d27a - screenHeight - o;
    this._cameraX = -centerX;
    this._cameraY = 0;
    // ... rest of the create method
  }
  // ... rest of the GameScene methods
}

// Initialize the game
const config = {
  type: Phaser.WEBGL,
  width: screenWidth,
  height: screenHeight,
  parent: 'game-container',
  scene: [BootScene, xs],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

window.game = new Phaser.Game(config);