import React, {useEffect, useState} from 'react';
import { Button, ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import basemanager from '../service/baseservice';
import { ListItem, Icon } from 'react-native-elements';

export default function Products({ navigation }) {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fillProducts();


  }, [])

  const fillProducts = () => {
    basemanager.get('api/products').then((data) => {
      setProducts(data)

    })

    console.log(products)



  }

  const deleteProduct = (productId) => {
    basemanager.delete('api/products', productId).then(() => {
      fillProducts()
    })





  }

  const goToProductDetails = (productId) => {
      navigation.navigate('Product Details', {id: productId})
  }



    return (
      <ScrollView >
        <View>

            {
              products.map((item) => (

                <ListItem  key={item.id}>
                  <ListItem.Content>
                    <ListItem.Title onPress={() => goToProductDetails(item.id)}>
                      {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      Quantity per unit: {item.quantityPerUnit}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle>
                      Price: ${item.unitPrice}
                    </ListItem.Subtitle>
                    <Icon
                                      name='delete' onPress={() => deleteProduct(item.id)} />




                  </ListItem.Content>


                </ListItem>

              ))
            }

        </View>
        </ScrollView>
    )
}
