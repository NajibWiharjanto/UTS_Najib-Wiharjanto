import { React, useState, component } from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity, ScrollView, Icon } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const ProfileDiri = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')}><Text
          ><Feather name="home" size={24} color="green" /></Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.header}>ProfileDiri</Text>
        </View>
        <View>
          <Text style={styles.headerNama}>{'\n'}{'\n'}Najib Wiharjanto</Text>
        </View>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')}><Text style={styles.search}
          >Kembali Home</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Header style
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  headerNama: {
    fontSize: 15,
  },
  headerProfileDiri: {
    color: 'black',
    fontSize: 12,
    fontWeight: "bold",
    top: 28,
    marginLeft: -250,
  },
  search: {
    color: '#ffff',
    width: '100%',
    height: 40,
    margin: 10,
    backgroundColor: "green",
    paddingTop: 5,
    fontSize: 20,
    borderRadius: 5,
    alignSelf: "center",
    textAlign: "center",
    fontweight: "Bold"
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
    alignItems: 'center',
    padding: 40,
    paddingTop: 60,
    justifyContent: 'space-between'
  },
  // Card style
  card: {
    top: 20,
    backgroundColor: 'white',
    margin: "auto",
    width: '90%',
    padding: 40,
    borderRadius: 10,
  },
});
export default ProfileDiri;