/**
 * @description Earth radius
 */
const R = 6371;

/**
 * @description degree to radians
 */
const toRadians = (degree: number) => (degree * Math.PI) / 180;

/**
 * @description Calculate the distance between two points
 * @param lat1 latitude from the point 1
 * @param lon1 longitude from the point 1
 * @param lat2 latitude from the point 2
 * @param lon1 longitude from the point 2
 * @returns distance in Km
 */
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;   
}

export {
  calculateDistance
}