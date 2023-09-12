import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
        padding: 10,
        flexDirection: 'row',
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    innerContainer: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        gap: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoContainer: {
        flex:1
    },
    year:{
        color: 'grey',
        fontWeight: 'bold',
    },
    soldoutContainer:{
        borderWidth: 1,
        borderColor: 'maroon',
        borderRadius: 5,
        padding: 5,
    },
    soldoutTitle:{
        color: 'maroon',
        fontWeight: 'bold',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})