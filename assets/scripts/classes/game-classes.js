// Trail effect class for visual effects
export class cs {
  /**
   * Constructor for the trail effect.
   * @param {Phaser.Scene} scene - The Phaser scene to add graphics to.
   * @param {number} duration - Duration of the trail in seconds.
   * @param {number} minSegment - Minimum segment length squared.
   * @param {number} strokeWidth - Width of the trail stroke.
   * @param {number} maxSegment - Maximum segment length.
   * @param {number} color - Color of the trail (default white).
   * @param {number} opacity - Opacity of the trail (default 1).
   */
  constructor(_0x9c2356, _0x171c7f, _0x49d49a, _0xb01616, _0x5aac4b, _0x293ce3, _0x5c7bc5 = 16777215, _0x5a3e29 = 1) {
    this._color = _0x5c7bc5;
    this._opacity = _0x5a3e29;
    this._fadeDelta = 1 / _0x49d49a;
    this._minSegSq = _0xb01616 * _0xb01616;
    this._maxSeg = _0x293ce3;
    this._maxPoints = Math.floor(_0x49d49a * 60 + 2) * 5;
    this._stroke = _0x5aac4b;
    this._pts = [];
    this._posR = {
      x: 0,
      y: 0
    };
    this._posInit = false;
    this._active = false;
    const graphicsSettings = window.performanceOptimizer ? window.performanceOptimizer.getGraphicsSettings() : {
      enableGlow: true,
      blendMode: Phaser.BlendModes.ADD
    };
    
    this._gfx = _0x9c2356.add.graphics();
    this._gfx.setBlendMode(graphicsSettings.blendMode);
  }
  /**
   * Adds the trail graphics to a container and sets its depth.
   * @param {Phaser.GameObjects.Container} container - The container to add to.
   * @param {number} depth - The depth level for rendering.
   */
  addToContainer(_0xa23240, _0x4b05db) {
    _0xa23240.add(this._gfx);
    this._gfx.setDepth(_0x4b05db);
  }
  /**
   * Sets the current position of the trail.
   * @param {number} x - X position.
   * @param {number} y - Y position.
   */
  setPosition(_0x388397, _0x292e79) {
    this._posR.x = _0x388397;
    this._posR.y = _0x292e79;
    this._posInit = true;
  }
  /**
   * Starts the trail effect.
   */
  start() {
    this._active = true;
  }
  /**
   * Stops the trail effect.
   */
  stop() {
    this._active = false;
  }
  /**
   * Resets the trail, clearing all points.
   */
  reset() {
    this._pts = [];
    this._posInit = false;
    this._gfx.clear();
  }
  /**
   * Updates the trail effect each frame.
   * @param {number} deltaTime - Time elapsed since last update.
   */
  update(_0x2acf4c) {
    if (!this._posInit) {
      this._gfx.clear();
      return;
    }
    const _0x1817b7 = _0x2acf4c * this._fadeDelta;
    let _0x56ab0b = 0;
    for (let _0x3ca060 = 0; _0x3ca060 < this._pts.length; _0x3ca060++) {
      this._pts[_0x3ca060].state -= _0x1817b7;
      if (this._pts[_0x3ca060].state > 0) {
        if (_0x56ab0b !== _0x3ca060) {
          this._pts[_0x56ab0b] = this._pts[_0x3ca060];
        }
        _0x56ab0b++;
      }
    }
    this._pts.length = _0x56ab0b;
    if (this._active && this._pts.length < this._maxPoints) {
      const _0x89a79d = this._pts.length;
      let _0x3d12ca = true;
      if (_0x89a79d > 0) {
        const _0x2748e4 = this._pts[_0x89a79d - 1];
        const _0x3a1a00 = this._posR.x - _0x2748e4.x;
        const _0x4c247a = this._posR.y - _0x2748e4.y;
        const _0x1f9fea = _0x3a1a00 * _0x3a1a00 + _0x4c247a * _0x4c247a;
        if (this._maxSeg > 0 && Math.sqrt(_0x1f9fea) > this._maxSeg) {
          this._pts.length = 0;
        } else if (_0x1f9fea < this._minSegSq) {
          _0x3d12ca = false;
        } else if (_0x89a79d > 1) {
          const _0x375c40 = this._pts[_0x89a79d - 2];
          const _0x14c0c1 = this._posR.x - _0x375c40.x;
          const _0x2d01f0 = this._posR.y - _0x375c40.y;
          if (_0x14c0c1 * _0x14c0c1 + _0x2d01f0 * _0x2d01f0 < this._minSegSq * 2) {
            _0x3d12ca = false;
          }
        }
      }
      if (_0x3d12ca) {
        this._pts.push({
          x: this._posR.x,
          y: this._posR.y,
          state: 1
        });
      }
    }
    this._gfx.clear();
    if (this._pts.length > 1) {
      this._gfx.lineStyle(this._stroke, this._color, this._opacity);
      this._gfx.beginPath();
      this._gfx.moveTo(this._pts[0].x, this._pts[0].y);
      for (let _0x3ca060 = 1; _0x3ca060 < this._pts.length; _0x3ca060++) {
        this._gfx.lineTo(this._pts[_0x3ca060].x, this._pts[_0x3ca060].y);
      }
      this._gfx.strokePath();
    }
  }
}