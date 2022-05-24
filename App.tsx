import { View, Text } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query'
import MovieScreen from './Screens/MovieScreen';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieScreen />
    </QueryClientProvider>
  );
}
