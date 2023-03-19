const updateArrayElementById = (key: string, item: any): boolean => {
  try {
    const keyValues = JSON.parse(localStorage.getItem(key) ?? '[]');

    if (keyValues.length === 0) return false;

    const newArray = keyValues.map((v: any) => {
      if (v.id === item.id) {
        return {
          ...item,
        };
      } else return v;
    });

    localStorage.setItem(key, JSON.stringify(newArray));

    return true;
  } catch {
    return false;
  }
};

const deleteArrayElementById = (key: string, id: number): boolean => {
  try {
    const keyValues = JSON.parse(localStorage.getItem(key) ?? '[]');

    if (keyValues.length === 0) return false;

    const newArray = keyValues.filter((v: any) => v.id !== id);

    localStorage.setItem(key, JSON.stringify(newArray));
    return true;
  } catch {
    return false;
  }
};

const getArray = (key: string): any => JSON.parse(localStorage.getItem(key) ?? '[]');

export { updateArrayElementById, deleteArrayElementById, getArray };
