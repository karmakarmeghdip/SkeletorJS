/**
 * 
 * @param {*} initialValue Value to be set initially
 * @returns Signal Object
 */
export const createSignal = (initialValue) => {
  let value = initialValue;
  let listeners = [];
  return {
    /**
     * 
     * @returns {*} Current Value
     */
    get: () => value,
    /**
     * 
     * @param {*} newValue Value to be set
     */
    set: (newValue) => {
      value = newValue;
      listeners.forEach(listener => listener(value));
    },
    /**
     * 
     * @param {(value)=>void} listener Listener Handler Function
     */
    $: (listener) => {
      listeners.push(listener);
    }
  }
};

/**
 * 
 * @param {number} value only accepts number
 */
export const number = (value) => {
  if (typeof value !== 'number') {
    throw new Error(`Expected number but got ${typeof value}`);
  }
}

/**
 * 
 * @param {string} value only accepts string
 */
export const string = (value) => {
  if (typeof value !== 'string') {
    throw new Error(`Expected string but got ${typeof value}`);
  }
}

/**
 * 
 * @param {boolean} value only accepts boolean
 */
export const boolean = (value) => {
  if (typeof value !== 'boolean') {
    throw new Error(`Expected boolean but got ${typeof value}`);
  }
}

/**
 * 
 * @param {object} schema The schema object
 * @returns {(object)=>void} Function to validate object
 */
export const type = (schema) => {
  if (typeof schema !== 'object') {
    throw new Error(`Expected object but got ${typeof object}`);
  }
  const keys = Object.keys(schema);
  const values = Object.values(schema);
  for(let i = 0; i < keys.length; i++) {
    if (typeof values[i] !== 'function') {
      throw new Error(`Expected function but got ${typeof values[i]}`);
    }
  }
  return (object) => {
    keys.forEach(key => {
      if (!object.hasOwnProperty(key)) {
        throw new Error(`Expected key ${key} in object`);
      }
      values[keys.indexOf(key)](object[key]);
    });
  }
}