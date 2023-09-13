import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient from expo-linear-gradient
import { USERS } from '../../data/users';

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((Story, index) => (
          <View key={index} style={{alignItems:'center'}}>
          <LinearGradient
            key={index}
            colors={['#FF4500', '#FFA500']} // Gradient between red (#FF4500) and orange (#FFA500)
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.story}
          >
            <Image style={styles.image} source={{ uri: Story.image }} />
          </LinearGradient>
          <Text style={{color: 'white', marginLeft:15,}}>
          
            {Story.user.length>11?Story.user.slice(0, 10).toLowerCase() + '...':Story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 84,
    height: 84,
    borderRadius: 50,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 77,
    height: 77,
    borderRadius: 50,
    
  },
});

export default Stories;
