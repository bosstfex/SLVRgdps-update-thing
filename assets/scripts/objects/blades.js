import { hazardData } from './hazard.js';

export const bladesObjects = Object.fromEntries(
  Object.entries(hazardData).filter(([, obj]) =>
    /^(blade_b|bladeTrap|spinBlade|lightBlade|darkblade|blade)/i.test(obj.frame || '')
  )
);
