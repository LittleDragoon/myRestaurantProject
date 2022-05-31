import React from "react";
import "./AdminScreen.css";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getOrder as listOrders } from "../../redux/Commander/orderActions";

import axios from "axios";

const AdminScreen = () => {

  const Delete = (id) => {
    axios.delete(`https://my-restaurant-proj.herokuapp.com/order/${id}`);
    window.location.reload();
  }
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
    <div className="fonds">
      {loading ? (
        <h2 className="Titres"> Currently loading... </h2>
      ) : error ? (
        <h2 className="Titres">{error}</h2>
      ) : (
        <div className="wrappers">

          <div className="carts">
            {orders.map((item) =>
              <div className="cart__summarys">
                <h4 className="summary__titles">Commandes</h4>
                <div className="directions">
                  {item.order.map((prod) => (
                    <div className="tests" key={item._id}>
                      <span>{prod.title} x {prod.qty} :</span>
                      <span> {prod.qty * prod.price} € </span>
                    </div>))}

                </div>
                <div className="barres">
                  _____________________________________________
                </div>
                <div className="summary__prices">
                  <span>TOTAL: {item.totalqty}  produits</span>
                  <span>{item.totalprice}€</span>
                </div>
                <button className="summary__checkoutBtns" onClick={() => { Delete(item._id) }}>
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
