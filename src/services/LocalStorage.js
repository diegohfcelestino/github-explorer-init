const _storage = localStorage;

const remove = (value) => {
  _storage.removeItem(value);
};

const set = (key, value) => {
  _storage.setItem(key, value);
};

const LocalStorage = {
  remove,
  set,
};

export { LocalStorage };
