import React, {useEffect, useState} from 'react';
import { Button } from 'react-native'
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



    return (
        <View>
            
            {
              products.map((item) => (

                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>
                      {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {item.quantityPerUnit}
                    </ListItem.Subtitle>




                  </ListItem.Content>


                </ListItem>

              ))
            }

        </View>
    )
}
