import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, Button, Alert } from "react-native";
import basemanager from '../service/baseservice';
import { ListItem, Icon } from 'react-native-elements';
import { Form, Field } from 'react-final-form'
import { useForm, Controller } from "react-hook-form";


export default function  AddCategory({ route, navigation }) {


  const { control, handleSubmit, watch, formState: { errors } } = useForm();




  const getCategory = (categoryId) => {
    basemanager.get('api/categories/' + categoryId).then((data) => {
      setCategory(data)

    })

  }

  const onSubmit = async values => {
    console.log(values);
    basemanager.post('api/categories', values).then(() => {
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

              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="name"
          rules={{ required: true }}
          defaultValue="Category Name"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput

              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="description"
          rules={{ required: true }}
          defaultValue="Category Description"
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />


        </View>
    )
}
