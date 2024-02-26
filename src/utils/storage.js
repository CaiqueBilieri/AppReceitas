import AsyncStorange from '@react-native-async-storage/async-storage'

export async function getFavorites(key){
    const favorites = await AsyncStorange.getItem(key)
    return JSON.parse(favorites) || [];
}

export async function saveFavorite(key, newItem){
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some(item => item.id === newItem.id)

    if(hasItem){
        console.log('ESSE ITEM JÁ ESTA SALVO NA SUA LISTA')
    }

    myFavorites.push(newItem)

    await AsyncStorange.setItem(key, JSON.stringify(myFavorites))
    console.log('SALVO COM SUCESSO')
}



export async function removeFavorite(id){
    let receipes = await getFavorites('@appreceitas')

let myFavorites = receipes.filter(item => {
    return(item.id !== id)
})

await AsyncStorange.setItem('@appreceitas', JSON.stringify(myFavorites));
console.log('ITEM DELETADO COM SUCESSO!')
return myFavorites;
}



export async function isFavorite(receipes){
    
    let myReceipes = await getFavorites('@appreceitas')

    const favorites = myReceipes.find(item => item.id === receipes.id)

    if(favorites){
        return true;
    }
    return false;
}