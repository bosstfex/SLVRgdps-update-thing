import { solidObjects } from './objects/solid.js';
import { hazardObjects } from './objects/hazard.js';
import { decoObjects } from './objects/deco.js';
import { coinObjects } from './objects/coin.js';
import { portalObjects } from './objects/portal.js';
import { padObjects } from './objects/pad.js';
import { ringObjects } from './objects/ring.js';
import { triggerObjects } from './objects/trigger.js';
import { speedObjects } from './objects/speed.js';

window.allobjects = function() {
    return {
        ...solidObjects,
        ...hazardObjects,
        ...decoObjects,
        ...coinObjects,
        ...portalObjects,
        ...padObjects,
        ...ringObjects,
        ...triggerObjects,
        ...speedObjects
    };
};