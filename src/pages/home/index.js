import {useState, useEffect} from 'react'
import { View , Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList, } from 'react-native';
/*SafeAreaView: é mais para iphone onde a minha interface vai ficar abaixo da ilha dinamica*/
/*TextInput: Caixa de texto para escrever/ Pesquisar*/
/*TouchableOpacity: Um botão "clicavel"*/
import {Ionicons} from '@expo/vector-icons'
import {Logo} from '../../components/logo'
import api from '../../services/api'
import {FoodList} from '../../components/foodlist/'
import {useNavigation} from '@react-navigation/native'
import {Text as MotiText} from 'moti'



export function Home(){

    /*Variavel sendo criada usando useState do React*/
    /*Uma caixinha onde armazena um valor(inputValue), que foi trocado de algo vazio(setInputValue = '') pelo que eu escrevi*/
    const [inputValue, setInputValue] = useState('')
    const [foods, setFoods] = useState([])

    const navigation = useNavigation();

    useEffect(() => {
        async function fetchApi(){
            const response = await api.get('/foods')
            setFoods(response.data)
        }

        fetchApi();
    }, [])


    /*Criando uma função onde foi chamada ao clicar no botao na linha 37*/
    function handleSearch(){
        if(!inputValue) return;

        let input = inputValue;
        setInputValue('')
        navigation.navigate('Search', {name: input})
    }


    return (
        <SafeAreaView style={styles.container}>
            <Logo/>
            <MotiText 
                style={styles.title}
                from={{
                    opacity:0,
                    translateY: 15,
                }}
                animate={{
                    opacity:1,
                    translateY: 0
                }}
                transition={{
                    delay:100,
                    type:'timing',
                    duration:650
                }}
                >
                    Encontre a receita
            </MotiText>
            <MotiText 
                style={styles.title}
                from={{
                    opacity:0,
                    translateY: 19,
                }}
                animate={{
                    opacity:1,
                    translateY: 0
                }}
                transition={{
                    delay:200,
                    type:'timing',
                    duration:850
                }}
                >  
                    que combine com voce
            </MotiText>

            <View style={styles.form}>
                <TextInput
                    /*Criando uma caixa onde a pessoa pode digitar(TextInput) e com um icone de lupa(Ionicons) */
                    /*placeholder é quando ainda nao tem nada digitado e fica escrito "Digite o nome da comida"*/
                    placeholder='Digite o nome da comida'
                    style={styles.input}
                    value={inputValue}
                    /*trocando o texto vazio pelo que foi escrito*/
                    onChangeText={(Text) => setInputValue(Text)}
                />
                
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' size={28} color='#4cbe6c' />
                </TouchableOpacity>
            </View>

        <FlatList
            data={foods}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <FoodList data={item} />}
            showsVerticalScrollIndicator={false}
        />


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        /*Preenchendo o estilo na tela toda*/
        flex: 1,
        /*Cor*/
        backgroundColor: '#f3f9ff',
        /*Espaçamento top maior*/
        paddingTop: 36,
        /*Espaçamento do inicio*/
        paddingStart: 14,
        /*Espaçamento no fim*/
        paddingEnd: 14
    },
    title:{
        /*Fonte*/
        fontSize: 26,
        /*Texto em negrito*/
        fontWeight: 'bold',
        /*Cor do texto*/
        color: '#0e0e0e'
    },
    form:{
        /*Cor*/
        backgroundColor:'#fff',
        /*Largura*/
        width: '100%',
        /*Arredondamento das bordas*/
        borderRadius: 8,
        /*Margem do texto com o topo*/
        marginTop: 16,
        /*Margem do texto com a parte inferior*/
        marginBottom: 16,
        /*Borda da caixa do imput*/
        borderWidth: 1,
        /*Cor da borda*/
        borderColor: '#ececec',
        /*Preenchimento direita*/
        paddingRight: 8,
        /*Preenchimento esquerda*/
        paddingLeft: 8,
        /*UM DO LADO DO OUTRO*/
        flexDirection: 'row',
        /*ALINHADO NO CENTRO*/
        alignItems: 'center',
        /*UM EM CADA CANTO DA TELA*/
        justifyContent:'space-between'
    },
    input:{
        /*Largura*/
        width: '90%',
        /*Maximo que pode ser preenchido na largura*/
        maxWidth: '90%',
        /*Altura*/
        height: 54,
    }
})