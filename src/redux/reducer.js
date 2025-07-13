// const initialState = {
//   cash: 0,
//   dark: true,
//   main: [],
// };

// // axtion: {type: "", payload: undefined}

// export const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_MONEY":
//       return { ...state, cash: state.cash + Number(action.payload) };
//     case "TAKE_MONEY":
//       return {
//         ...state,
//         cash: state.cash > 0 ? state.cash - action.payload : 0,
//       };

//     case "DARK_WHITE":
//       return { ...state, dark: (state.dark = true) };
//     case "DARK_BLACK":
//       return { ...state, dark: (state.dark = false) };

//     case "GET_USERS":
//       return { ...state, main: action.payload };
//     default:
//       return state;
//   }
// };

const initialState = {
  cash: 0,
  dark: false,
  main: [],
  weather: null
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return {
        ...state,
        cash: state.cash + Number(action.payload),
      };

    case "TAKE_MONEY":
      return {
        ...state,
        cash: Math.max(0, state.cash - action.payload),
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        dark: !state.dark,
      };

    case "GET_USERS":
      return {
        ...state,
        main: action.payload,
      };
    case "GET_WEATHER":
      return {
        ...state,
        weather: action.payload,
      };

    default:
      return state;
  }
};
