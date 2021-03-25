import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardPrincipal: {
    width: "95%",
    height: "auto",
    backgroundColor: "#000000",
    marginLeft:"3%",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  contextLeft: {
    width: "36%",
    height: "100%",
    alignItems: "flex-start",
  },
  contextRigth: {
    alignItems: "flex-end",
    width: "60%",
    paddingRight: 10,
  },
  logBitcoin: {
    marginLeft: 2,
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  dayCotacion: {
    fontSize: 16,
    paddingLeft: 2,
    color: "white",
    fontWeight: "bold",
  },
  boxLogo: {
    flexDirection:"row",
    alignItems: "center",
  },
  nameCripto: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
