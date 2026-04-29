export function hexToHexadecimal(str) {
  return parseInt(str, 16);
}

export function hexadecimalToHex(num) {
  return num.toString(16).padStart(6, '0');
}