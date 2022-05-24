import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useMoviesQuery } from '../framework/basic-rest/Movies/get-movies';
import {Movie} from './Movie';

const MovieList: React.FC<{ movies: any, configuration: any }> = ({movies, configuration}) => {
  return (
      <ScrollView contentContainerStyle={styles.container}>
          {
            movies.map((movie: any) => {
                return <Movie movie = {movie} key = {movie.id} configuration = {configuration} />
            })
          }
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieList;
