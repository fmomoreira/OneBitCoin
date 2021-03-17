import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    cardPrincipal:{
       width: '90%',
       height:65,
       backgroundColor:'#1C1B1B',
       marginLeft:'5%',
       marginBottom:15,
       borderRadius:5,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
    },
    contextLeft:{
       width: '36%',
       height:'90%',
       alignItems:'flex-start'
    },
    contextRigth:{
       alignItems:"flex-end",
       justifyContent:'center',
       width: '60%',
       height:'90%',
       paddingRight:10,
   
    },
    logBitcoin:{
      marginLeft: 2,
       height: 40,
       width: 40,
       borderRadius: 50
    },
    priceDate:{
        fontSize:12,
        paddingLeft:2,
        color:'white',
        fontWeight:'bold'
        
    },
    boxLogo:{
       flexDirection:'row',
       alignItems:'center',
   
    },
    nameCripto:{
        color:'white',
        fontSize:14,
        fontWeight:'bold',
       
    },
    price:{
       color:'white',
       fontSize:18,
       fontWeight:'bold'
    },
   })

   export default styles