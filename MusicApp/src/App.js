import { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import musicData from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';

function App(){
  const [musicList, setMusicList] = useState(musicData)

  const renderSong = ({item}) => <SongCard song={item}/>

  const renderSeparator =() => <View style={styles.separator}/>
  
  const handleSearch = (text) => {
    const filteredList = musicData.filter(song => {
      const inputText = text.toLowerCase()
      const songTitle = song.title.toLowerCase()

      return songTitle.includes(inputText)
    })
    setMusicList(filteredList)
  }
  
  return (
    <SafeAreaView style={styles.container}>
        <SearchBar handleSearch={handleSearch}/>
        <FlatList
          keyExtractor={(item) => item.id}
          data={musicList}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeparator}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  separator:{
    borderWidth: 1,
    borderColor: '#dcdcdc',
  }
});

export default App;
