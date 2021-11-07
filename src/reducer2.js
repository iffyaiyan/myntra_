export const initialState2 = {
    dcount: [],
    user: null
  };
  
//   Selector
  export const getDesign = (dcount) => 
    dcount?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer2 = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "GO_TO_DESIGN":
            return {
              ...state,
              dcount: [...state.dcount, action.item],
            };
        default:
        return state;
    }
  };
  
  export default reducer2;