import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom'
import '../styles/components/Checkout.css'

const Checkout = () => {

    const { state, removeToCart } = useContext(AppContext)
    const { cart } = state

    const handleRemove = product => () => {
        removeToCart(product)
    }

    const handleSumtotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        const sum = cart.reduce(reducer, 0)
        return sum;
    }

    return (
        <>
            <Helmet>
                <title>Lista de pedidos - platzi conf merch</title>

            </Helmet>
            <div className="Checkout">
                <div className="Checkout-content">
                    {cart.length > 0 ? <h3>Lista de Pedidos</h3> : <h1>Sin pedidos</h1>}
                    {cart.map(item => (
                        <div key={item.id} className="Checkout-item">
                            <div className="Checkout-element">
                                <h3>{item.title}</h3>
                                <span>{item.price}</span>
                            </div>
                            <button type="button" onClick={handleRemove(item)}>
                                <i className="fas fa-trash-alt" title="Eliminar" />
                            </button>

                        </div>
                    ))}
                </div>
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>`Precio Total: $ ${handleSumtotal()}`</h3>
                        <Link to="/checkout/information">
                            <button type="button">Continuar pedido</button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default Checkout