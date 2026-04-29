import { hazardData } from './hazard.js';

export const sawsObjects = Object.fromEntries(
  Object.entries(hazardData).filter(([, obj]) =>
    /^sawblade/i.test(obj.frame || '')
  )
);
