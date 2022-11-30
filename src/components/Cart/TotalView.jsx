import React from "react";
import { useState, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyle = makeStyles({
  component: {
    // width: '30%'
    // border:"1px solid red"
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  greyTextColor: {
    color: "#878787",
  },
  container: {
    "& > *": {
      marginBottom: 20,
      fontSize: 14,
    },
  },
  price: {
    float: "right",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0",
  },
});

const TotalView = ({ cartItems }) => {
  const classes = useStyle();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = () => {
    var price = 0,
      discount = 0;
    console.log(cartItems);
    cartItems.map((item) => {
      price = price + +item.price * item.quantity;
      discount = item.price * 0.02 * item.quantity;
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems, totalAmount]);

  return (
    <Box className={classes.component}>
      <Box
        className={classes.header}
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
      </Box>
      <Box className={clsx(classes.header, classes.container)}>
        <Typography>
          Price ({cartItems.length} item)
          <span className={classes.price}>₹{price}</span>
        </Typography>
        <Typography>
          Discount<span className={classes.price}>-₹{discount}</span>
        </Typography>
        <Typography>
          Delivery Charges<span className={classes.price}>₹40</span>
        </Typography>
        <Typography className={classes.totalAmount}>
          Total Amount
          <span className={classes.price}>₹{price - discount + 40}</span>
        </Typography>
        <Typography style={{ fontSize: 16, color: "green" }}>
          You will save ₹{discount.toFixed(2)} on this order
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalView;
