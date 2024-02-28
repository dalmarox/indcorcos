import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import ShadowPrimary from "./wrappers/ShadowPrimary";
import colors from "../utils/globals/colors";
import fonts from "../utils/globals/fonts";

const CardCategory = ({ item, navigation }) => {
  return (
    
    <Pressable
      onPress={() =>
        navigation.navigate("ProductsByCategory", { categorySelected: item })
      }
    >
      <ShadowPrimary style={styles.container}>
        
        <Text style={styles.text}>{item}</Text>
      </ShadowPrimary>
    </Pressable>


  );
};

export default CardCategory;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: colors.primary,

    marginHorizontal: "10%",
    marginVertical: 10,
    padding:10,
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
    fontFamily: fonts.JosefinSansItalic,
  },

});
