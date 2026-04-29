import { hazardData } from './hazard.js';

export const pitsObjects = Object.fromEntries(
  Object.entries(hazardData).filter(([, obj]) =>
    /^pit/i.test(obj.frame || '')
  )
);
