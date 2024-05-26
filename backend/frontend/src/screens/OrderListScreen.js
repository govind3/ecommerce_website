import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listOrders } from "../actions/orderActions";

function OrderListScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>List of Orders:</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr style={{ color: "black", fontWeight: "900" }}>
              <th
                style={{
                  fontSize: "15px",
                }}
              >
                ID
              </th>
              <th
                style={{
                  fontSize: "15px",
                }}
              >
                USER
              </th>
              <th
                style={{
                  fontSize: "15px",
                }}
              >
                DATE
              </th>
              <th
                style={{
                  fontSize: "15px",
                }}
              >
                Total
              </th>
              <th
                style={{
                  fontSize: "15px",
                }}
              >
                PAID
              </th>
              <th
                style={{
                  fontSize: "15px",
                }}
              >
                DELIVERED
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.reverse().map((order) => (
              <tr key={order._id} style={{ color: "black", fontWeight: "900" }}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>₹ {order.totalPrice}</td>

                <td>
                  {order.isPaid ? (
                    <span style={{ color: "green", fontWeight: "900" }}>
                      {order.paidAt.substring(0, 10)}
                    </span>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>

                <td>
                  {order.isDelivered ? (
                    <span style={{ color: "green", fontWeight: "900" }}>
                      {order.deliveredAt.substring(0, 10)}
                    </span>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>

                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button className="btn-sm">Details</Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default OrderListScreen;
