import React from 'react'
import { Button } from 'react-native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

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
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>



            <View style={styles.viewBtn} >
                  <TouchableOpacity
                    style={styles.button}
                  onPress={goCategories}
                    >
                  <Text style={styles.text}>Go to Categories</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.viewBtn} >
              <TouchableOpacity
                style={styles.button}
              onPress={goProducts}
                >
              <Text style={styles.text}>Go to Products</Text>
            </TouchableOpacity>
            </View>
            <View   style={styles.viewBtn} >
              <TouchableOpacity
                style={styles.button}
              onPress={goOrders}
                >
              <Text style={styles.text}>Go to Orders</Text>
            </TouchableOpacity>
            </View>



        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'




  },
  button: {

    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: '60%',


  },
  text: {
    fontSize: 30,
    alignItems: "center"
  },
  viewBtn: {
    flex: 1,
    justifyContent: 'space-evenly',
    width: '80%'

  }
});
