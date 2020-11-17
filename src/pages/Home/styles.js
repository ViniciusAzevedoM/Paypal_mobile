import { StyleSheet } from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb'
    },

    header: {
        paddingTop: 20,
        backgroundColor: '#ffffff',
        height: 70,
        flexDirection: 'row',
        justifyContent:  'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        elevation: 1
    },

    detailsBorder: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#1256de',
        height: 250,
        width: 330,
        borderRadius: 5,
    },

    imagePerson: {
        marginTop: 30,
        marginLeft: 30,
    },

    dateText: {
        color: '#ffffff',
        fontSize: 13,
        marginLeft: 250,
        marginTop: -35,
    },

    reqText: {
        marginLeft: 20,
        color: '#ffffff',
        fontSize: 15,
        marginTop: 40,
    },

    productText: {
        marginLeft: 20,
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },

    detailsButton: {
        marginTop: 50,
        marginLeft: 20,
        backgroundColor: '#1256de',
        borderColor: '#ffffff',
        borderWidth: 1,
        height: 30,
        width: 100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    detailsButtonText: {
        fontSize: 12,
        color: '#ffffff',
    },

    footer: {
        flexWrap: 'wrap',
        marginTop: 155,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        elevation: 2,
        height: 100,
    },

    sendReceiveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1256de',
        height: 45,
        width: 45,
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 30
    },

    buttonText: {
        marginTop: 5,
        marginLeft: 45,
        fontSize: 15,
        color: '#000000'
    },

    buttonText2: {
        marginTop: 5,
        marginLeft: 30,
        fontSize: 15,
        color: '#000000'
    },

    buttonText3: {
        marginTop: 5,
        marginLeft: 48,
        fontSize: 15,
        color: '#000000'
    },

    moreButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ffffff',
        borderColor: '#001ba3',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 40
    }
});