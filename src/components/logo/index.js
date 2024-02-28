import {Text, StyleSheet } from 'react-native';
import {View} from 'moti'


export function Logo() {
    return (
    <View 
    style={styles.logoArea}
    from={{
        opacity:0,
        translateX: -50,
    }}
    animate={{
        opacity:1,
        translateX: 0
    }}
    transition={{
        type:'spring',
        duration:850
    }}
    >
        <Text style={styles.logo}>Receita facil</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    logoArea:{
        /*Cor do logo*/
        backgroundColor: '#4cbe6c',
        /*Alinha esse texto no começo*/
        alignSelf: 'flex-start',
        /*Espaço interno*/
        padding: 8,
        /*Espaço esquerdo maior*/
        paddingLeft: 16,
        /*Espaço direito maior*/
        paddingRight: 20,
        /*Arredondando cada ponta de um jeito diferente*/
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8
    },
    logo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})