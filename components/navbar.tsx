// Navbar.jsx
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.icon}>☰</Text> 
      </TouchableOpacity>
      <Text style={styles.title}>Chat with Astrologer</Text>
      <View style={styles.navRight}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.icon}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.icon}>⚙️</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#EFCC00",
  },
  navItem: {
    paddingHorizontal: 10,
  },
  title: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
    flex: 1,
  },
  icon: {
    color: "black",
    fontSize: 24,
  },
  navRight: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Navbar;
