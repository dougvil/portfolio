import Button from '@mui/material/Button';
import { useGetPokemonByNameQuery } from './services/pokemon/pokemon';

function App() {
  const getPokemonByNameQuery = useGetPokemonByNameQuery('pikachu');

  return (
    <>
      <div>{getPokemonByNameQuery.data?.name}</div>
      <Button onClick={() => console.log('olá')}>Reload</Button>
    </>
  );
}

export default App;
