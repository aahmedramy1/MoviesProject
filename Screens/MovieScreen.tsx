import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, SafeAreaView} from 'react-native';
import { useConfigurationQuery } from '../framework/basic-rest/get-configuration';
import { useMoviesQuery } from '../framework/basic-rest/Movies/get-movies';
import ErrorScreen from './ErrorScreen';
import LoadingScreen from './LoadingScreen';
import { Movie } from '../components/Movie';

export default function MovieScreen() {
  const {data: movieData, isLoading: isLoadingMovies, error: errorMovies, hasNextPage, fetchNextPage, isFetching} = useMoviesQuery();
  const {data: configurationData, isLoading: isLoadingConfiguration, error: errorConfiguration} = useConfigurationQuery();

  const renderItem: (item: any) => any = ({item}) => {
    return <Movie movie={item} configuration = {configurationData} />;
  }
  const keyExtractor: (item: any) => any = (item) => {
    return item.id
  }

  const loadMore = () => {
    if(hasNextPage)
      fetchNextPage();
  }

  if(isLoadingMovies || isLoadingConfiguration)
      return <LoadingScreen />
  if(errorMovies || errorConfiguration)
      return <ErrorScreen />

  return (
    <SafeAreaView style = {styles.container}>
      <FlatList onEndReached={loadMore} contentContainerStyle = {{flexGrow: 1}} data = {movieData!.pages.map((page: any) =>  page).flat()} renderItem = {renderItem} keyExtractor={keyExtractor}  onEndReachedThreshold = {0.2} />
      {isFetching ? <ActivityIndicator size={'small'} color = "#999999" style={{marginBottom: "5%"}}/> : null}
      {!hasNextPage ? <Text>No more movies to fetch</Text> : null}
    </SafeAreaView>
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
