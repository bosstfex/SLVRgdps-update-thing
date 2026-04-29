import { hazardData } from './hazard.js';

export const miscHazardsObjects = Object.fromEntries(
  Object.entries(hazardData).filter(([, obj]) => {
    const frame = obj.frame || '';
    return !/^(spike|iceSpike|invis_spike|colorSpike|gdh_spike|sawblade|blade_b|bladeTrap|spinBlade|lightBlade|darkblade|blade|pit|fireball|blackCogwheel)/i.test(frame);
  })
);
