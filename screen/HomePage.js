import { React, useState, component } from "react";
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity, Icon, ScrollView } from 'react-native';


const HomePage = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileDiri')}>
            <FontAwesome5 name="user" size={24} color="green" />
          </TouchableOpacity>
        </View>
        <Image
          style={{ width: 140, height: 140, borderRadius: 10, top: -110 }}
          source={require('../assets/11.png')}
        />
        <View style={styles.cardItems}>
          <Text style={styles.daftarLagu}>Daftar Lagu</Text>
          <View style={styles.cardLagu}>
            <TouchableOpacity onPress={() => navigation.navigate('LaguKu')}>
              <Text style={styles.textContent}>Lagu POP</Text>
              <Image
                style={{ width: 140, height: 140, borderRadius: 10 }}
                source={require('../assets/11.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LaguKu')}>
              <Text style={styles.textContent}>Lagu Rock</Text>
              <Image
                style={{ width: 140, height: 140, borderRadius: 10 }}
                source={require('../assets/12.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardLagu}>
            <TouchableOpacity onPress={() => navigation.navigate('LaguKu')}>
              <Text style={styles.textContent}>Lagu Slowly</Text>
              <Image
                style={{ width: 140, height: 140, borderRadius: 10 }}
                source={require('../assets/13.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LaguKu')}>
              <Text style={styles.textContent}>Lagu Ulang Tahun</Text>
              <Image
                style={{ width: 140, height: 140, borderRadius: 10 }}
                source={require('../assets/14.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.kotak}>
          <Text style={styles.copyright}>Najib Wiharjanto - 120140029</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Header style
  headerProfileDiri: {
    color: 'black',
    fontSize: 10,
    fontWeight: "bold",
    top: 28,
  },
  // Container Style
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white',
    overflow: "hidden",
    alignItems: "center",
  },
  top: {
    width: "100%",
    flexDirection: 'row',
    padding: 163,
    paddingTop: 60,
    justifyContent: 'space-between'
  },
  daftarLagu: {
    color: "#373737",
    fontSize: 15,
    fontWeight: "bold",
    top: 0,
    textAlign: 'center',
  },
  cardItems: {
    top: -80,
    margin: "auto",
    width: '85%',
    borderRadius: 10,
    marginBottom: 10,
  },
  cardLagu: {
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: "auto",
    width: '100%',
    display: "flex",
    marginBottom: 5,
    borderRadius: 10,
  },
  textContent: {
    fontSize: 12,
    textAlign: 'center',
  },
  kotak: {
    marginTop: -40,
    width: "100%",
    backgroundColor: '#E5E4E2',
    borderRadius: 10,
  },
  copyright: {
    marginBottom: 10,
    paddingTop: 5,
    marginTop: 'auto',
    color: 'black',
    textAlign: 'center',
  },
  card: {
    top: 20,
    backgroundColor: 'white',
    margin: "auto",
    width: '90%',
    padding: 40,
    borderRadius: 10,
    textAlign:"center",
  },
});
export default HomePage;