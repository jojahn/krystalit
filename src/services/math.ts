export const deg2rad = (deg: number): number => deg * (Math.PI/180);
export const rad2deg = (rad: number): number => rad * (180/Math.PI);

export function generateCSSHexDimensions(height: number): { box: { w: number, h: number }, triangles: { h: number } } {
  const beta = deg2rad(90);
  const alpha = deg2rad(60);
  const h = 50;
  const k = Math.sin(alpha);
  const m = Math.cos(beta) * k;
  const l = Math.sin(beta) * k;
  return {
    box: {
      w: 2 * l,
      h: k
    },
    triangles: {
      h: m
    }
  };
}