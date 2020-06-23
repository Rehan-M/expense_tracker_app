import React from "react";

const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      return [action.payload, ...state];
    }
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transactions) => transactions.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default TransactionReducer;
