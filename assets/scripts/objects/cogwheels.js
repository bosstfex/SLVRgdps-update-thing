import { hazardData } from './hazard.js';

export const cogwheelsObjects = Object.fromEntries(
  Object.entries(hazardData).filter(([, obj]) =>
    /^blackCogwheel/i.test(obj.frame || '')
  )
);
