import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Movie: React.FC<{ movie: any, configuration: any }> = ({movie, configuration}) => {
  return (
      <View style={styles.container}>
          {/* <Image
            style= {styles.image}
            source={{
              uri: 'http://image.tmdb.org/t/p/w342/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
            }}
          /> */}
          <Text>{movie.title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "2%"
  },
  image: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.3
  }
});
