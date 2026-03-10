import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PokemonPage() {
    // const { name } = useParams();

    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //         .then(res => res.json())
    //         .then(data => setPokemon(data));
    //     }, [name]);
    
    // return (
    //     <h1>Pokemon Page</h1>
    // )
    const pokemon = ["pikachu", "bulbasaur", "charmander"];

    return (
        <div>
        <h1>Pokemon List</h1>

        {pokemon.map((p) => (
            <div key={p}>
            <Link to={`/pokemon/${p}`}>{p}</Link>
            </div>
        ))}
        </div>
    );
}

export default PokemonPage