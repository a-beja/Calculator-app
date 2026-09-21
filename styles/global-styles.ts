// Y aquí se declaran los grupos de componentes usando los colores globales (2/2)

import { Dimensions, StyleSheet } from 'react-native';

import { Fonts } from '@/constants/fonts';
import { Colors } from '@/constants/theme';


const { width } = Dimensions.get('window');
const buttonSize = ( width - 80 ) / 4;


export const globalStyles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
        paddingHorizontal: 20,
    },

    normalText: {
        color: Colors.textNormal,
    },

    mainResult: {
        color: Colors.textPrimary,
        fontFamily: Fonts.fontFamily,
        fontVariant: ['common-ligatures'],
        fontSize: Fonts.fontSize.large,
        textAlign: 'right',
        fontWeight: Fonts.fontWeight.normal,
    },

    subResult: {
        color: Colors.blueberry,
        fontFamily: Fonts.fontFamily,
        fontVariant: ['common-ligatures'],
        fontSize: Fonts.fontSize.normal,
        textAlign: 'right',
        fontWeight: Fonts.fontWeight.light,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
    },

    button: {
        height: buttonSize,
        width: buttonSize,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 6.5,
    },

    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textNormal,
        fontFamily: Fonts.fontFamily,
        fontVariant: ['common-ligatures'],
        fontWeight: 300
    }
});