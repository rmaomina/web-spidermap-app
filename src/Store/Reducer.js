const initialState = {
  nodeName: '',
  nodeBg: '',
  edgeStyle: ''
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NODE_NAME":
      return { ...state, nodeName: action.payload };

    case "SET_NODE_BG":
      return { ...state, nodeBg: action.payload };

    case "SET_EDGE_STYLE":
      return { ...state, edgeStyle: action.payload };
      
    default:
      return state;
  }
};

export default Reducer;