const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'objects', 'hazard.js'), 'utf8');
const body = src.replace(/export const hazardObjects\s*=\s*/, 'const hazardObjects = ');
const obj = eval(body + '\n; hazardObjects');
const categories = {
  spikes: {},
  saws: {},
  blades: {},
  pits: {},
  miscHazards: {}
};
const prefixMap = [
  {key:'spikes', regex:/^(spike|iceSpike|invis_spike|colorSpike)/i},
  {key:'saws', regex:/^sawblade/i},
  {key:'blades', regex:/^(blade_b|bladeTrap|spinBlade|lightBlade|darkblade|blade)/i},
  {key:'pits', regex:/^pit/i}
];
for (const id of Object.keys(obj)) {
  const frame = obj[id].frame || '';
  const category = prefixMap.find(c => c.regex.test(frame));
  if (category) {
    categories[category.key][id] = obj[id];
  } else {
    categories.miscHazards[id] = obj[id];
  }
}
for (const [name, data] of Object.entries(categories)) {
  const filePath = path.join(__dirname, 'objects', `${name}.js`);
  const exportName = `${name}Objects`;
  const content = `// ${name.charAt(0).toUpperCase() + name.slice(1)} hazard objects\nexport const ${exportName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf8');
}
const hazardPath = path.join(__dirname, 'objects', 'hazard.js');
const imports = [
  "import { spikesObjects } from './objects/spikes.js';",
  "import { sawsObjects } from './objects/saws.js';",
  "import { bladesObjects } from './objects/blades.js';",
  "import { pitsObjects } from './objects/pits.js';",
  "import { miscHazardsObjects } from './objects/miscHazards.js';"
].join('\n');
const allContent = `${imports}\n\nexport const hazardObjects = {\n  ...spikesObjects,\n  ...sawsObjects,\n  ...bladesObjects,\n  ...pitsObjects,\n  ...miscHazardsObjects\n};\n`;
fs.writeFileSync(hazardPath, allContent, 'utf8');
console.log('Split hazard categories into: spikes, saws, blades, pits, miscHazards');
