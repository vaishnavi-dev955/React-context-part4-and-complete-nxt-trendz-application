import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  DecreaseCartQuantity: () => {},
  IncreaseCartQuantity: () => {},
  RemoveAllItems: () => {},
})

export default CartContext
