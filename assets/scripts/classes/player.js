import { b } from '../utils/config.js';
import { playerSpeed } from '../utils/config.js';

/**
 * Class representing the player's state in the game.
 * Manages position, velocity, modes, and collision states.
 */
export class PlayerState {
  /**
   * Constructor for PlayerState.
   */
  constructor() {
    this.reset();
  }
  /**
   * Resets the player state to initial values.
   */
  reset() {
    this.y = 30;
    this.lastY = 30;
    this.lastGroundPosY = 30;
    this.yVelocity = 0;
    this.onGround = true;
    this.canJump = true;
    this.isJumping = false;
    this.gravityFlipped = false;
    this.isFlying = false;
    this.isBall = false;
    this.isWave = false;
    this.isUfo = false;
    this.isSpider = false;
    this.isBird = false;
    this.isDart = false;
    this.isRobot = false;
    this.isSwing = false;
    this.isJetpack = false;
    this.isMini = false;
    this.wasBoosted = false;
    this.pendingVelocity = null;
    this.collideTop = 0;
    this.collideBottom = 0;
    this.onCeiling = false;
    this.upKeyDown = false;
    this.upKeyPressed = false;
    this.queuedHold = false;
    this.isDead = false;
    this.mirrored = false;
    this.isDashing = false;
    this.dashYVelocity = 0;
    this.isDual = false;
  }
}

/**
 * Class for managing practice mode functionality, including checkpoints.
 */
export class PracticeMode {
  /**
   * Constructor for PracticeMode.
   */
  constructor() {
    this.checkpoints = [];
    this.practiceMode = false;
    this.checkpointSprites = [];
  }
  /**
   * Toggles practice mode on or off.
   * @returns {boolean} The new state of practice mode.
   */
  togglePracticeMode() {
    this.practiceMode = !this.practiceMode;
    if (!this.practiceMode) {
      this.clearCheckpoints();
    }
    return this.practiceMode;
  }
  /**
   * Saves a checkpoint with the current player state.
   * @param {PlayerState} playerState - The current player state.
   * @param {number} playerWorldX - Player's world X position.
   * @param {number} cameraX - Camera X position.
   * @param {Phaser.Scene} scene - The game scene.
   * @returns {boolean} True if checkpoint was saved.
   */
  saveCheckpoint(playerState, playerWorldX, cameraX, scene) {
    if (!this.practiceMode) return false;
    const checkpoint = {
      x: playerWorldX,
      y: playerState.y,
      yVelocity: playerState.yVelocity,
      gravityFlipped: playerState.gravityFlipped,
      isMini: playerState.isMini,
      isCube: playerState.isCube,
      isShip: playerState.isShip,
      isBall: playerState.isBall,
      isUfo: playerState.isUfo,
      isWave: playerState.isWave,
      isSpider: playerState.isSpider,
      isBird: playerState.isBird,
      isDart: playerState.isDart,
      isRobot: playerState.isRobot,
      isSwing: playerState.isSwing,
      isJetpack: playerState.isJetpack,
      isFlying: playerState.isFlying,
      isJumping: playerState.isJumping,
      onGround: playerState.onGround,
      canJump: playerState.canJump,
      wasBoosted: playerState.wasBoosted,
      rotation: playerState.rotation,
      gravity: playerState.gravity,
      jumpPower: playerState.jumpPower,
      mirrored: playerState.mirrored,
      isDashing: playerState.isDashing,
      dashYVelocity: playerState.dashYVelocity,
      cameraX: cameraX,
      flyCeilingY: scene._level._flyCeilingY,
      flyGroundActive: scene._level._flyGroundActive,
      flyVisualOnly: scene._level._flyVisualOnly,
      groundTargetValue: scene._level._groundTargetValue,
      flyCameraTarget: scene._level.flyCameraTarget,
      groundAnimating: scene._level._groundAnimating,
      groundAnimFrom: scene._level._groundAnimFrom,
      groundAnimTo: scene._level._groundAnimTo,
      groundAnimTime: scene._level._groundAnimTime,
      groundAnimDuration: scene._level._groundAnimDuration,
      cameraY: scene._cameraY,
      groundStartScreenY: scene._level._groundStartScreenY,
      ceilingStartScreenY: scene._level._ceilingStartScreenY,
      groundY: scene._level._groundY,
      ceilingY: scene._level._ceilingY,
      speed: playerSpeed,
      timestamp: Date.now()
    };
    this.checkpoints.push(checkpoint);
    const checkpointSprite = scene.add.image(playerWorldX, b(playerState.y), "GJ_GameSheet02", "checkpoint_01_001.png")
      .setOrigin(0.5, 0.5)
      .setScrollFactor(1)
      .setDepth(15)
      .setScale(1.0);
    scene._level.topContainer.add(checkpointSprite);
    this.checkpointSprites.push(checkpointSprite);
    return true;
  }
  /**
   * Deletes the last saved checkpoint.
   * @returns {boolean} True if a checkpoint was deleted.
   */
  deleteLastCheckpoint() {
    if (this.checkpoints.length > 0) {
      this.checkpoints.pop();
      if (this.checkpointSprites.length > 0) {
        const lastSprite = this.checkpointSprites.pop();
        if (lastSprite && lastSprite.destroy) {
          lastSprite.destroy();
        }
      }
      return true;
    }
    return false;
  }
  /**
   * Clears all checkpoints and their sprites.
   */
  clearCheckpoints() {
    this.checkpoints = [];
    for (const sprite of this.checkpointSprites) {
      if (sprite && sprite.destroy) {
        sprite.destroy();
      }
    }
    this.checkpointSprites = [];
  }
  /**
   * Loads the last checkpoint.
   * @returns {Object|null} The checkpoint data or null if none.
   */
  loadLastCheckpoint() {
    if (this.checkpoints.length > 0) {
      return this.checkpoints[this.checkpoints.length - 1];
    }
    return null;
  }
}