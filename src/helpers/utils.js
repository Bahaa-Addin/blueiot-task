export const filterByKes = (raw, allowed) => (
  Object.keys(raw)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => ({
        ...obj,
        [key]: raw[key]
      }), {})
);

export const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
