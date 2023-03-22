import React from "react";
import { Audio } from 'expo-av';
import { MaterialIcons, AntDesign, FontAwesome5, iconType } from '@expo/vector-icons';
import { TouchableOpacity, SafeAreaView, ScrollView, Image, View, FlatList, StyleSheet, Text, Button,} from 'react-native';


const LaguKu = ({ navigation }) => {
    const [sound, setSound] = React.useState();

    async function mulaiMusik() {
        console.log("Loading Sound");
        const { sound } = await Audio.Sound.createAsync(
            require("../assets/lagu.mp3")
        );
        setSound(sound);

        console.log("Playing Sound");
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log("Unloading Sound");
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.tempat}>
            <View style={styles.kepala}>
                <View style={styles.top}>
                    <TouchableOpacity style={styles.tombol} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="#373737" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.detil}>
                <Text style={styles.putar}>Putar Lagu.</Text>
                <Image
                    style={{ width: 300, height: 300, borderRadius: 10, marginTop: 25 }}
                    source={require('../assets/11.png')}
                />
                <Text style={styles.judul}>Lagu Najib</Text>
                <Text style={styles.pemilik}>Kumpulan Lagu</Text>
            </View>
            <View style={styles.detil}>
                <Button title="Putar Lagu" onPress={mulaiMusik} color="#F03131" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    kepala: {
        width: '100%',
        padding: 20,
        height: 130,
    },
    detil: {
        margin: "auto",
        width: '100%',
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    heading: {
        color: '#ffff',
        fontSize: 30,
        fontWeight: "bold",
    },
    putar: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold"
    },
    judul: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: "bold"
    },
    pemilik: {
        textAlign: 'center',
        fontSize: 14,
        color: '#626262',
        marginBottom: 50
    },
    kepala2: {
        color: "#373737",
        fontSize: 12,
        textAlign: 'right',
        top: 4,
        left: 10
    },
    top: {
        top: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        padding: 15
    },
});

export default LaguKu;