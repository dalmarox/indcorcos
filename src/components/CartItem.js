import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/globals/colors";
import fonts from "../utils/globals/fonts";
import { useDispatch } from "react-redux";
import { deleteCartItem, addCartItem } from "../features/cart/cartSlice";
import Counter from "./Counter";
import CounterCart from "./CounterCart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handlerAddCartItem = (quantity) => {
    dispatch(addCartItem(...item, quantity));
  };

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text2}>{item.brand}</Text>
        <CounterCart value={item.quantity}/>
       
        <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
        <Text style={styles.text2}>Precio: ${item.price} </Text>
      </View>
      <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
        <Ionicons name="trash" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.ghostwhite,
    padding: 20,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
  },
  text: {
    color: colors.lightGray,
    fontSize: 19,
    fontFamily: fonts.JosefinSansBold,
  },
  text2: {
    color: colors.lightGray,
    fontSize: 14,
    fontFamily: fonts.JosefinSansBold,
  },
});
