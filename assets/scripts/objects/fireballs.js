import { hazardData } from './hazard.js';

export const fireballsObjects = Object.fromEntries(
  Object.entries(hazardData).filter(([, obj]) =>
    /^fireball/i.test(obj.frame || '')
  )
);
