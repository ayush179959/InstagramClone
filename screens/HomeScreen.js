import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Header from '../components/home/Header.js'
import Stories from "../components/home/Stories.js";
import Posts from "../components/home/posts.js";

const HomeScreen = () => {
   return(
      <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <Posts />
      </SafeAreaView>
      
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'black',
   },
   
});
 
export default HomeScreen