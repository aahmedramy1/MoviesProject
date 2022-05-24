import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from '../components/MovieList';
import { useConfigurationQuery } from '../framework/basic-rest/get-configuration';
import { useMoviesQuery } from '../framework/basic-rest/Movies/get-movies';
import ErrorScreen from './ErrorScreen';
import LoadingScreen from './LoadingScreen';

export default function MovieScreen() {
    const {data: movieData, isLoading: isLoadingMovies, error: errorMovies} = useMoviesQuery();
    const {data: configurationData, isLoading: isLoadingConfiguration, error: errorConfiguration} = useConfigurationQuery();
    if(isLoadingMovies || isLoadingConfiguration)
        return <LoadingScreen />
    if(errorMovies || errorConfiguration)
        return <ErrorScreen />
  return (
    <MovieList movies={movieData.results} configuration = {configurationData} />
  );
}
