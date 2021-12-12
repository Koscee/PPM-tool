export default function dispatchAction(dispatchFn, type, payload) {
  dispatchFn({
    type,
    payload,
  });
}
