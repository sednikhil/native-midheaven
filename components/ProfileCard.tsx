// ProfileCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ProfileCardProps {
  name: string;
  expertise: string;
  language: string;
  experience: string;
  rate: string;
  orders: string;
  imageUrl: string;
  isNew: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  expertise,
  language,
  experience,
  rate,
  orders,
  imageUrl,
  isNew,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    style={styles.card}
    onPress={() =>
      navigation.navigate('details', {
        name,
        expertise,
        language,
        experience,
        rate,
        orders,
        imageUrl,
        isNew,
      })
    }
  >
      <View style={styles.profileInfo}>
        <Image source={{ uri: imageUrl }} style={styles.profileImage} />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.info}>{expertise}</Text>
          <Text style={styles.info}>{language}</Text>
          <Text style={styles.info}>{experience}</Text>
          <Text style={styles.rate}>₹ {rate}/min</Text>
          <Text style={styles.orders}>{orders} orders</Text>
          {isNew && <Text style={styles.newTag}>NEW!</Text>}
        </View>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
  rate: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  orders: {
    fontSize: 12,
    color: '#999',
  },
  newTag: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  chatButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ProfileCard;
