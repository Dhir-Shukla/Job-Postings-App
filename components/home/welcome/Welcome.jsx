import { React, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View>
        <Text style={styles.userName}>Hello Dhir!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
      </View>

    </View>
  )
}

export default Welcome