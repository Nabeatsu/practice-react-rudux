export const plus = num => {
  return { type: "PLUS", payload: { num: num } };
};

export const minus = num => {
  return { type: "MINUS", payload: { num: num } };
};

// 関数を返す dispatchを受け取って内部で処理を書く
export const asyncMinus = num => {
  return dispatch => {
    dispatch({ type: "WAIT" });
    setTimeout(() => {
      dispatch(minus(num));
      dispatch({ type: "DONE" });
    }, 3000);
  };
};
