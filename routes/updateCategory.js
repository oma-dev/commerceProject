import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";

import basemanager from '../service/baseservice';
import { ListItem, Icon } from 'react-native-elements';
import { useForm, Controller } from "react-hook-form";


export default function UpdateCategory({ route, navigation }) {


  const { control, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const categoryId = route.params.id;
  const [category, setCategory] = useState({})

  useEffect(() => {

    getCategory(categoryId)


  }, [])



  const getCategory = (categoryId) => {
    basemanager.get('api/categories/' + categoryId).then((data) => {
      setCategory(data)
      reset(data)


    })



  }

  const onSubmit = async (values) => {
    console.log(values);
    basemanager.put('api/categories', values, categoryId).then(() => {
      goToCategories()

    })
  }

  const goToCategories = () => {
      navigation.navigate('Categories')
  }




    return (
      <View>




      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="name"
        rules={{ required: true }}
        defaultValue={category.name}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="description"
        rules={{ required: true }}
        defaultValue={category.description}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />



      </View>


    )
}


const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',

    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
