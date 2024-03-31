import { Pressable, StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import ShadowPrimary from "./wrappers/ShadowPrimary";
import colors from "../utils/globals/colors";
import fonts from "../utils/globals/fonts";

const CardCategory = ({ item, navigation }) => {
  return (
    
    <Pressable
      onPress={() =>
        navigation.navigate("ProductsByCategory", { categorySelected: item.title })
      }
    >
      <ShadowPrimary style={styles.container}>
      <ImageBackground source={{uri:item.thumbnail}} style={styles.background}>
            <Text style={styles.text}>{item.title}</Text>
          </ImageBackground>
      </ShadowPrimary>
    </Pressable>


  );
};

export default CardCategory;

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:340,
    height:120,
    marginTop:23,
    marginRight:23,
    marginBottom:23,
    marginLeft:23,
    overflow:"hidden",
    alignItems: "center",
    borderRadius: 30,
    justifyContent:"center"
  },
  text: {
    fontSize: 18,
    color: "white",
    fontFamily: fonts.JosefinSansItalic,
  },
  background:{
    width:"100%",
    height:"100%",
    resizeMode:"cover",
    alignItems:"center",
    justifyContent:"center",
    
  }

});
