import axios from "axios";

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

export const changeTitle = title => {
  return { type: "CHANGE_TITLE", payload: { title: title } };
};

export const getJson = () => {
  return dispatch => {
    dispatch({ type: "WAIT" });
    const url = "https://api.myjson.com/bins/159wqn";
    axios.get(url).then(res => {
      dispatch(changeTitle(res.data.member[0].name));
    });
  };
};
