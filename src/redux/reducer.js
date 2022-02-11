const initialState = {
  name: 'Sergey',
  age: 18,
  country: "",
};



const reducer = (state = initialState, action) => {

  switch (action.type) {

    case "SET_COUNTRY" :
      return  {...state, country : action.country}

    case "SET_VALUE" :
      return {...state, age : action.age}

    case "INCREMENT" :
      return {...state, age : state.age+1}

    default:
      return state;
  }
};

export default reducer;
