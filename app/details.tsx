import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Details = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity >
          <Text style={styles.backButton}>{"<"}</Text> 
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.shareButton}>Share</Text> 
        </TouchableOpacity>
      </View>
      
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: 'https://ik.imagekit.io/demo/tr:di-medium_cafe_B1iTdD0C.jpg/non_existent_image.jpg' }} 
          style={styles.profileImage} 
        />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>AnuradhaM</Text>
          <Text style={styles.expertise}>Vedic, Numerology, Vastu, Prashana</Text>
          <Text style={styles.language}>Tamil</Text>
          <Text style={styles.experience}>Exp: 2 Years</Text>
          <Text style={styles.rate}>₹ 20/min</Text>
          <Text style={styles.orders}>14390 orders</Text>
        </View>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>76K mins</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>5K mins</Text>
        </View>
      </View>
      
      <View style={styles.descriptionBox}>
        <Text style={styles.description}>
          AnuradhaM is a renowned Vedic astrologer. She has been experiencing Astrology for 2 years and she has deep knowledge of Vedic. 
          She is dealing with clients for the best reading and predictions as good remedies. Her aim is to guide people and help them 
          with simple and easy remedies. She has provided guidance and remedies to many users for relationship issues, financial matters, 
          health issues, and career problems. She provides very simple, easy, and effective remedies and her users are always satisfied 
          with her remedies. <Text style={styles.showLess}>show less</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fdd835',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backButton: {
    fontSize: 24,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  shareButton: {
    fontSize: 18,
    color: '#000',
  },
  profileSection: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileDetails: {
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  expertise: {
    fontSize: 16,
    color: '#555',
  },
  language: {
    fontSize: 14,
    color: '#555',
  },
  experience: {
    fontSize: 14,
    color: '#555',
  },
  rate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  orders: {
    fontSize: 14,
    color: '#777',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionBox: {
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  showLess: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Details;
