/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import news_data from './news_data.json';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';


function App() {
  const renderNews = ({item}) => <NewsCard news={item}/>

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>News App</Text>

        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(bannerNews => 
                <Image key={bannerNews.id} style={styles.bannerImage} source={{uri:bannerNews.imageUrl}}/>  
              )}
            </ScrollView>
          )}
          keyExtractor={(item) => item.u_id.toString()}
          data={news_data}
          // renderItem={({item}) => <NewsCard news={item}/>}
          renderItem={renderNews}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e0e0',
  },
  heading:{
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  bannerImage:{
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 2,
  },
});

export default App;
