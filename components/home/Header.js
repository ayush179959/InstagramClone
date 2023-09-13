import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native"
import * as Font from "expo-font";



 const Header = () => {
   Font.loadAsync({
      Billabong: require("../../assets/fonts/Billabong.ttf"),
      
    });
    
    
    return(
        
        <View style={styles.container}>
        <TouchableOpacity>
            <Text style={styles.text}>Lodagram</Text>
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
        <TouchableOpacity>
            <Image style={styles.icon} source={require('../../logos/insta_logo2.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.unreadBadge}>

        <Text style={styles.unreadBadgeText}>11</Text>

        </View>
            <Image style={styles.icon} source={require('../../logos/insta_msglogo.png')}/>
        </TouchableOpacity>
        </View>
    
        </View>
        
    )
 }
 const styles = StyleSheet.create({
    iconsContainer: {
        flexDirection: 'row',
     },
     logo:{
        width: 100,
        height: 50,
        resizeMode: 'contain',
        marginTop: 35,
     },
     container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 15,
        marginTop: 10,
     },
     icon:{
        width: 22,
        height: 22,
        resizeMode: 'contain',
        marginHorizontal: 5,
        marginLeft: 15,
        marginTop: 15,
     },
     unreadBadge:{
        backgroundColor: 'red',
        position: 'absolute',
        left: 25,
        bottom: 14,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
     },
     unreadBadgeText:{
        color: 'white',
        fontWeight: '600',
     },
     text:{
        
      color:'white',
       fontFamily: 'Billabong',
       marginTop: 15,
       fontWeight: '600',
      fontSize: 30,
      marginTop: 25,
     }
 })
 export default Header
 