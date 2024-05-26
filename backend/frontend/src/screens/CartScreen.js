import React, { useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen() {
  const { id } = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  // console.log("Id : ", id);
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  // console.log("Qty : ", qty);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2);
  //console.log("CartItem : ", cartItems);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your card is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Link to={`/product/${item.product}`}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Link>
                  </Col>
                  <Col md={3}>
                    <Link
                      to={`/product/${item.product}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {item.name}
                    </Link>
                  </Col>

                  <Col md={2}>₹ {item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="dark"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i
                        className="fas fa-trash"
                        style={{ fontSize: "15px" }}
                      ></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item active>
              <span
                style={{
                  color: "white",
                  fontWeight: "900",
                  fontSize: "25px",
                }}
              >
                PRICE DETAILS
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  Price({cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                  items)
                </Col>
                <Col style={{ color: "black", fontWeight: "900" }}>
                  ₹
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Discount</Col>
                <Col style={{ color: "green", fontWeight: "900" }}>-₹0.00</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Delivery Charges</Col>
                <Col style={{ color: "green", fontWeight: "900" }}>FREE</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                color: "black",
                fontWeight: "900",
                fontSize: "17.1px",
              }}
            >
              <Row>
                <Col>Total Amount</Col>
                <Col>
                  ₹
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup.Item style={{ textAlign: "center" }}>
            <Button
              type="button"
              className="btn-block"
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed To Checkout
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen;
