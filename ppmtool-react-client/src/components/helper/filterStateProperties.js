export default function extractStatePropertiesFromObject(state, object) {
  let newObject = {};
  if (!object) {
    object = state;
  }

  /** filters data by mapping the state's object keys
   * with another object excluding the errors property
   */
  for (const key in state) {
    if (key !== 'errors') {
      newObject[key] = object[key];
    }
  }
  return newObject;
}
