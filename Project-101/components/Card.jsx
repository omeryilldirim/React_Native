import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Card = ({title, text,}) => {
  return (
    <View style={styles.card_container}>
        <View style={styles.card_body}>
            <Text style={styles.card_title}>{title}</Text>
            <Text style={styles.card_text}>{text}</Text>
        </View>
        <TouchableOpacity style={styles.card_footer} onPress={()=>alert('Hello '+ title)}>
            <Text style={styles.card_button_title}>LIKE</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:20,
      backgroundColor:'gray',
    },
    card_container:{
      backgroundColor:'white',
      margin:20,
      borderRadius:10,
      borderColor:'gray',
      borderWidth:2,
    },
    card_body:{
      padding:20,
    },
    card_title:{
      fontWeight:'bold',
      fontSize:25,
      marginBottom:10,
    },
    card_text:{
      fontSize:20
    },
    card_footer:{
      backgroundColor:'#00C2FF',
      padding:10,
      borderBottomRightRadius:8,
      borderBottomLeftRadius:8,
      alignItems:'center',
    }
    ,
    card_button_title:{
      color:'white',
      fontWeight:'bold',
      fontSize:20,
    }
  
  });