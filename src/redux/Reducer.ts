const initialState = {
  data: null,
};

export const TodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_TODO_LIST":
      return { ...state, data: action.payload };
    case 'CREATE_TODO':
        return [...state.data,action.payload]
    default:
      return state;
  }
};
