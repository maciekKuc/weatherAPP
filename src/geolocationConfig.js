export const success = (pos) => {
  console.log(pos.coords.latitude);
  return pos.coords.latitude;
}

export const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};