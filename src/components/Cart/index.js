import CartContext from '../../context/CartContext'
import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, RemoveAllItems} = value
      const showEmptyView = cartList.length === 0
      const gettingTotalPrice = Item => {
        const {price, quantity} = Item
        return price * quantity
      }
      const eachItemPrice = () => {
        const ActualPrice = cartList.map(eachItem =>
          gettingTotalPrice(eachItem),
        )
        const TotalPrice = ActualPrice.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
        )
        return TotalPrice
      }
      const onClickRemoveAllItems = () => {
        RemoveAllItems()
      }
      return (
        <>
          <Header />
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  className="RemoveAll-button"
                  type="button"
                  onClick={onClickRemoveAllItems}
                >
                  Remove All
                </button>
                <CartListView />
                <div className="order-total-container">
                  <p>
                    Order Total:{' '}
                    <span className="Total-price-badge">
                      Rs {eachItemPrice()}/-
                    </span>
                  </p>
                  <p className="Items-para">{cartList.length} items in cart</p>
                  <button className="Checkout-button" type="button">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
