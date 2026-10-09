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

    mainResult: {
        color: Colors.textPrimary,
        fontFamily: Fonts.fontFamily,
        fontVariant: ['common-ligatures'],
        fontSize: Fonts.fontSize.large,
        textAlign: 'right',
        fontWeight: Fonts.fontWeight.normal,
    },

    subResult: {
        color: Colors.textSecondary,
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
    },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },

    card: {
        width: '80%',
        maxWidth: 320,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
        elevation: 6,
    },

    title: {
        fontSize: 17,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 6,
    },

    body: {
        fontSize: 13,
        lineHeight: 19,
        color: '#6b7280',
        marginBottom: 16,
    },

    buttonModal: {
        backgroundColor: '#e8a108',
        borderRadius: 8,
        paddingVertical: 10,
        alignItems: 'center',
    },

    buttonModalPressed: {
        opacity: 0.85,
    },

    buttonModalText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '500',
    },
    
});