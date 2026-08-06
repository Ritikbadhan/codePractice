export const initalState = [];

export function reducerFunction(state = [], action) {
  switch (action.type) {
    case "addToCart": {
      const isExist = state.find((item) => item.id === action.product.id);

      if (isExist) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...state,
        {
          ...action.product,
          quantity: 1,
        },
      ];
    }
    case "inc": {
      return state.map((e) =>
        e.id === action.product.id ? { ...e, quantity: e.quantity + 1 } : e,
      );
    }

    case "dec": {
      const isLastItem = state.find((e) => e.id == action.product.id);
      if (isLastItem?.quantity === 1) {
        return state.filter((e) => e.id !== action.product.id);
      } else {
        return state.map((e) =>
          e.id === action.product.id ? { ...e, quantity: e.quantity - 1 } : e,
        );
      }
    }

    case "rem": {
      return state.filter((e) => e.id !== action.product.id);
    }
  }
}
