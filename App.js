import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const handleContactPress = () => {
    alert("Email me at: your.email@example.com");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
        style={styles.profilePic}
      />

      {/* Name and Title */}
      <Text style={styles.name}>Arpanpreet Kaur</Text>
<Text style={styles.title}>Innovative Thinker | Creative Developer</Text>


      {/* Bio Section */}
      <View style={styles.section}>
      <Text style={styles.sectionContent}>
  Hi there! I'm Arpanpreet, a developer who thrives on challenges and innovation. I specialize in creating user-friendly applications with React Native and JavaScript. 
  When I'm not coding, I'm exploring new design trends or brainstorming creative solutions for complex problems.
 </Text>

      </View>

      {/* Interests Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interests</Text>
        <Text style={styles.sectionContent}>📚 Reading | 🌍 Traveling | 🎮 Gaming</Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Skills</Text>
        <Text style={styles.sectionContent}>⚡ React Native | 🖌️ UI/UX Design | 🖥️ Web Development</Text>
      </View>

      {/* Contact Button */}
      <TouchableOpacity style={styles.contactButton} onPress={handleContactPress}>
        <Text style={styles.contactButtonText}>Contact Me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
  },
  section: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  contactButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  contactButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
