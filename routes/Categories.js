import React, {useEffect, useState} from 'react';
import { Button, ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import basemanager from '../service/baseservice';
import { ListItem, Icon } from 'react-native-elements';
import { useIsFocused, useFocusEffect } from "@react-navigation/native";

export default function Categories({ navigation }) {

  const [categories, setCategories] = useState([])


  useEffect(() => {

    fillCategories();



  }, [])

  useFocusEffect(
    React.useCallback(() => {
      fillCategories();
    }, [])
  );

  const fillCategories = () => {
    basemanager.get('api/categories').then((data) => {
      setCategories(data)

    })





  }

  const deleteCategory = (categoryId) => {
    basemanager.delete('api/categories', categoryId).then(()=> {
      fillCategories()
    })


  }



  const goToUpdateCategory = (categoryId) => {
      navigation.navigate('Update Category', {id: categoryId})
  }

  const goToAddCategory = () => {
      navigation.navigate('Add Category')
  }



    return (
      <ScrollView >
        <View>
          <Button title='Add New Category' onPress={() => goToAddCategory()} />

            {
              categories.map((item) => (

                <ListItem  key={item.id}>
                  <ListItem.Content>
                    <ListItem.Title >
                      {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                      {item.description}
                    </ListItem.Subtitle>
                    <Icon
                                      name='delete' onPress={() => deleteCategory(item.id)} />
                    <Icon
                                      name='update' onPress={() => goToUpdateCategory(item.id)} />



                  </ListItem.Content>



                </ListItem>



              ))


            }



        </View>
          </ScrollView>
    )
}
