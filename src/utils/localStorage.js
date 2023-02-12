const updateArrayElementById = (key, item) => {
  const keyValues = JSON.parse(localStorage.getItem(key)) ?? [];

  if (keyValues.length === 0) return null;

  const newArray = keyValues.map(v => {
    if (v.id === item.id) {
      return {
        ...item,
      };
    } else return v;
  });

  localStorage.setItem(key, JSON.stringify(newArray));

  return newArray;
};

const deleteArrayElementById = (key, id) => {
  const keyValues = JSON.parse(localStorage.getItem(key)) ?? [];

  if (keyValues.length === 0) return false;

  const newArray = keyValues.filter(v => v.id !== id);

  localStorage.setItem(key, JSON.stringify(newArray));

  return true;
};

const getArray = key => JSON.parse(localStorage.getItem('productCart')) ?? [];

export { updateArrayElementById, deleteArrayElementById, getArray };
