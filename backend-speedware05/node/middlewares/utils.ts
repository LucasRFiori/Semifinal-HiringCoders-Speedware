export function calculateUserPoints(param: string | number) {
  return Math.round(Number(param) / 100)
}
