import { hazardData } from './hazard.js';

export const spikesObjects = Object.fromEntries(
  Object.entries(hazardData).filter(([, obj]) =>
    /^(spike|iceSpike|invis_spike|colorSpike|gdh_spike)/i.test(obj.frame || '')
  )
);
