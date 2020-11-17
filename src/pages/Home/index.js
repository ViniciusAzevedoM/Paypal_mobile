import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { EvilIcons, Ionicons, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './styles';

export default function Home() {

    const navigation = useNavigation();

    function navigationToConfig_Screen() {
        navigation.navigate('Config_Screen');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <EvilIcons name="bell" size={24} color="black" />
                <Ionicons name="ios-person" size={24} color="black" />

                <TouchableOpacity onPress={navigationToConfig_Screen}>
                    <AntDesign name="setting" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.detailsBorder}>
                <Ionicons style={styles.imagePerson} name="ios-person" size={30} color="white" />

                <Text style={styles.dateText}>
                    HOJE
                </Text>

                <Text style={styles.reqText}>
                    Cameron Strand requisitou R$ 50,00
                </Text>

                <Text style={styles.productText}>
                    Bolos de aniversário
                </Text>

                <TouchableOpacity style={styles.detailsButton}>
                    <Text style={styles.detailsButtonText}>
                        Ver detalhes
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>

                <TouchableOpacity style={styles.sendReceiveButton}>
                    <FontAwesome name="money" size={20} color="white" />
                </TouchableOpacity>

                <Text style={styles.buttonText}>
                    Enviar
                </Text>

                <TouchableOpacity style={styles.sendReceiveButton}>
                    <FontAwesome name="money" size={20} color="white" />
                </TouchableOpacity>

                <Text style={styles.buttonText2}>
                    Requisitar
                </Text>

                <TouchableOpacity style={styles.moreButton}>
                    <Entypo name="dots-three-horizontal" size={20} color="black" />
                </TouchableOpacity>

                <Text style={styles.buttonText3}>
                    Mais
                </Text>
            </View>
        </View>
    )
}