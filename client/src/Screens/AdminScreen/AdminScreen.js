import React from "react";
import "./AdminScreen.css";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getOrder as listOrders } from "../../redux/Commander/orderActions";

const AdminScreen = () => {
  const dispatch = useDispatch();

  const getOrders = useSelector((state) => state.order);
  const { orders, loading, error } = getOrders;

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let countItems = 0;
    let countPrice = 0;

    orders.map((item) =>
      item.order.forEach((prod) => {
        countItems += prod.qty;
        countPrice += prod.qty * prod.price;
      })
    );

    setTotalPrice(countPrice);
    setTotalItems(countItems);
  }, [orders, totalPrice, totalItems, setTotalItems, setTotalPrice]);

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  return (
    <div className="fond">
      {loading ? (
        <h2 className="Titre"> Currently loading... </h2>
      ) : error ? (
        <h2 className="Titre">{error}</h2>
      ) : (
        <div className="wrapper">

          <div className="cart">
            {orders.map((item) =>
              <div className="cart__summary">
                <h4 className="summary__title">Commandes</h4>

                {item.order.map((prod) => (
                  <div className="test" key={item._id}>
                    <span>{prod.title} x {prod.qty} :</span>
                    <span> {prod.qty * prod.price} € </span>
                  </div>))}


                <div className="barre">
                  __________________________________________
                </div>
                <div className="summary__price">
                  <span>TOTAL: {item.totalqty}  produits</span>
                  <span>{item.totalprice}€</span>
                </div>
                <button className="summary__checkoutBtn" onClick={() => { }}>
                  Supprimer la commande
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminScreen;
