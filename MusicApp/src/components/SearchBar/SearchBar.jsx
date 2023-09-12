import React from 'react'
import styles from './SearchBar.style'
import { View, TextInput } from 'react-native'

const SearchBar = ({handleSearch}) => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Search..." onChangeText={handleSearch}/>
    </View>
  )
}

export default SearchBar