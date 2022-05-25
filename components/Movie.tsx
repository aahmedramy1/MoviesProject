import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { MovieType } from '../framework/basic-rest/Movies/get-movies';
import { ConfigurationType } from '../framework/basic-rest/get-configuration';

const Movie: React.FC<{ movie: MovieType, configuration: ConfigurationType }> = ({movie, configuration}) => {
  const changeDateFormat = (str: string) => {
    /*
        change format of date from yyyy/mm/dd to dd/mm/yyyy
    */
    var splitString = str.split("-");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("-");
    return joinArray;
}
  return (
      <View style={styles.container}>
          <Image
            style= {styles.image}
            source={{
              uri: `${configuration.images.base_url}w342/${movie.poster_path}`,
            }}
            resizeMode={"center"}
          />
          <Text style = {[styles.boldText, { marginTop:windowHeight * 0 }]}>{movie.title}</Text>
          <Text style = {styles.boldText}>Release date</Text>
          <Text style = {{marginTop: windowHeight * 0.01}}>{changeDateFormat(movie.release_date)}</Text>
          <Text style = {styles.boldText}>Overview</Text>
          <Text style = {{marginTop: windowHeight * 0.01, textAlign: "center", paddingHorizontal: "8%"}}>{movie.overview}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "2%",
    marginTop: windowHeight * 0.05
  },
  image: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.35
  },
  boldText: {
    fontWeight: "bold",
    marginTop: windowHeight * 0.015,
    fontSize: windowWidth * 0.05
  }
});

export default Movie;
