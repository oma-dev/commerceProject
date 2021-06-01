import React from 'react'
import { Button } from 'react-native'
import { View, Text } from 'react-native'

export default function Home({ navigation }) {


    const goCategories = () => {
        // navigation.navigate('Contact');
        navigation.push('Categories');
    }

    const goProducts = () =>{
        navigation.navigate('Products')
    }

    const goOrders = () =>{
        navigation.navigate('Orders')
    }

    return (
        <View>
            <Text>Home Screen!</Text>
            <Button onPress={() => goCategories()} title='Go to Categories!'></Button>
            <Button onPress={() => goProducts()} title='Go to Products!'></Button>
            <Button onPress={() => goOrders()} title='Go to Products!'></Button>
        </View>
    )
}
