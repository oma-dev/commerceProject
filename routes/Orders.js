import React, {useEffect, useState} from 'react';
import { ActivityIndicator, Button, ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import basemanager from '../service/baseservice';
import { ListItem, Icon } from 'react-native-elements';

export default function Orders({ navigation }) {

  const [orders, setOrders] = useState([])

  useEffect(() => {

    fillOrders();


  }, [])

  const fillOrders = () => {
    basemanager.get('api/orders').then((data) => {
      setOrders(data)

    })





  }





    return (
      <ScrollView >
        <View>


             


            {
              orders.map((item) => (

                <ListItem  key={item.id}>
                  <ListItem.Content>
                    <ListItem.Title >
                      {item.customerId}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {item.shipName}
                    </ListItem.Subtitle>




                  </ListItem.Content>


                </ListItem>

              ))
            }

        </View>
        </ScrollView>
    )
}
