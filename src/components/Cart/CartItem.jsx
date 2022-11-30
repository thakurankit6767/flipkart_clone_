import React from "react";
import { Card, makeStyles, Box, Typography, Button } from "@material-ui/core";
import clsx from "clsx";
import GroupButton from "./GroupButton";

const useStyle = makeStyles({
  component: {
    borderTop: "1px solid #f0f0f0",
    borderRadius: 0,
    display: "flex",
  },
  leftComponent: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: 110,
    width: 110,
  },
  mid: {
    margin: 20,
  },
  greyTextColor: {
    color: "#878787",
  },
  smallText: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  remove: {
    marginTop: 20,
    fontSize: 16,
    color: "white",
    backgroundColor: "Orange",
    "&:hover": {
      borderRadius: 4,
      backgroundColor: "blue",
      color: "white",
    },
  },
});

const CartItem = ({ item, removeItemFromCart }) => {
  console.log(item);
  const classes = useStyle();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <div>
      {item && (
        <Card className={classes.component}>
          <Box className={classes.leftComponent}>
            <img src={item.images.image1} className={classes.image} alt="" />
            <GroupButton item={item} />
          </Box>
          <Box className={classes.mid}>
            <Typography>{item.title}</Typography>
            <Typography
              className={clsx(classes.greyTextColor, classes.smallText)}
              style={{ marginTop: 10 }}
            >
              Seller:RetailNet
              <span>
                <img
                  src={fassured}
                  style={{ width: 50, marginLeft: 10 }}
                  alt=""
                />
              </span>
            </Typography>
            <Typography style={{ margin: "20px 0" }}>
              <span className={classes.pricex}>
                ₹{item.quantity * item.price}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>
                  ₹{(item.quantity * (item.price * 1.2)).toFixed(2)}
                </strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>20% off</span>
            </Typography>
            <Button
              className={classes.remove}
              onClick={() => removeItemFromCart(item.id)}
            >
              Remove
            </Button>
          </Box>
        </Card>
      )}
    </div>
  );
};

export default CartItem;
