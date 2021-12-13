/**
 * A helper function used to dispatch an action,
 * all 3 params must be provided
 * @param {dispatch function} dispatchFn
 * @param {action type} type
 * @param {action payload} payload
 */
export default function dispatchAction(dispatchFn, type, payload) {
  dispatchFn({
    type,
    payload,
  });
}
