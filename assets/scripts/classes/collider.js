import { slopeType } from '../managers/level.js';

export class Collider {
  constructor(objType, xPos, yPos, width, height, rotation = 0) {
    this.type = objType;
    this.x = xPos;
    this.y = yPos;
    this.w = width;
    this.h = height;
    this.activated = false;
    this.rotationDegrees = rotation;
    this.slopeAngleDeg = 0;
    this.slopeDir = 1;
    this.slopeIsFilled = false;
    this.slopeFlipY = false;
  }
  getSlopeSurfaceY(worldX) {
    if (this.type !== slopeType) return null;
    const halfW = this.w / 2;
    const left = this.x - halfW;
    const right = this.x + halfW;
    if (worldX < left || worldX > right) return null;
    const frac = (worldX - left) / (right - left);
    let surfaceFrac = this.slopeDir > 0 ? frac : (1 - frac);
    if (this.slopeFlipY) surfaceFrac = 1 - surfaceFrac;
    return (this.y - this.h / 2) + surfaceFrac * this.h;
  }
  getSlopeAngleRad() {
    let angleDeg = this.slopeAngleDeg;
    if (this.slopeDir < 0) angleDeg = -angleDeg;
    if (this.slopeFlipY) angleDeg = -angleDeg;
    return angleDeg * Math.PI / 180;
  }
}