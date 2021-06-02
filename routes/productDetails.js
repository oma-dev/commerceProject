import React, {useEffect, useState} from 'react';
import { Button } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import basemanager from '../service/baseservice';
import { ListItem, Icon } from 'react-native-elements';

export default function ProductDetails({ route, navigation }) {

  const productId = route.params.id;
  const [product, setProduct] = useState({})

  useEffect(() => {

    getProduct(productId)


  }, [])



  const getProduct = (productId) => {
    basemanager.get('api/products/' + productId).then((data) => {
      setProduct(data)

    })



  }




    return (
        <View  style={styles.container}>


            <View style={styles.viewTxt}><Text style={styles.text}>Name: {product.name}</Text></View>
            <View style={styles.viewTxt}><Text style={styles.text}>Quantity per Unit: {product.quantityPerUnit}</Text></View>
            <View style={styles.viewTxt}><Text style={styles.text}>Price: ${product.unitPrice}</Text></View>
            <View style={styles.viewTxt}><Text style={styles.text}>Units in Stock: {product.unitsInStock}</Text></View>
            <View style={styles.viewTxt}><Text style={styles.text}>Units on Order: {product.unitsOnOrder}</Text></View>
            <View style={styles.viewTxt}><Text style={styles.text}>Discontinued: {product.discontinued ? "Yes" : "No" }</Text></View>


        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',


  },
  text: {

    fontSize: 20,
    backgroundColor: "#DDDDDD",
    width: '100%',
    textAlign: 'center',
    height: '60%'




  },
  viewTxt: {
    flex: 1,
    width: '80%',
    justifyContent: 'space-evenly',

  }
});
