import { StyleSheet } from "react-native";

export default StyleSheet.create({
// General
    container: {
        flex: 1,
        backgroundColor: '#E4DDB3',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#911B04',
    },
    headerText: {
        fontSize: '30px',
        fontFamily: 'Verdana',
        color: '#FFF',
        padding: '10px',
        fontWeight: 'bold',
    },
    boxOrder: {
        flexDirection: 'flex-start',
        padding: '15px',
        margin: '20px',
        borderRadius: '10px',
        backgroundColor: '#FB8D13'
    },
    orderData: {
        fontSize: '20px',
        fontFamily: 'Verdana',
        color: '#FFF',
        padding: '4px'
    },
    subscribeInput: {
      height: '50px',
      marginHorizontal: '15px',
      marginVertical: '10px',
      borderRadius: '10px',
      backgroundColor: '#FFF',
    },

// Components    
btn1: {
    height: "50px",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    margin: "15px",
    backgroundColor: "#008000"
  },
  textBtn1: {
    fontWeight: "bold",
    fontSize: "17px",
    color: "#FFF",
    
  },
  btn2: {
    height: "50px",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    margin: "15px",
    backgroundColor: "#CB1E04"
  },
  textBtn2: {
    fontWeight: "bold",
    fontSize: "17px",
    color: "#FFF",
  },
  btn3: {
    height: "50px",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    margin: "15px",
    backgroundColor: "#008000"
  },
  textBtn3: {
    fontWeight: "bold",
    fontSize: "17px",
    color: "#FFF",
  },
});