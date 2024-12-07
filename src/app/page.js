import PokeCard from "@/components/PokeCard";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

async function loadData() {
	const { data } = await getClient().query({
		query: gql`
			query samplePokeAPIquery {
				pokemon_v2_pokemonsprites(limit: 12) {
					pokemon_v2_pokemon {
						name
						id
					}
					sprites(path: "front_default")
				}
			}
		`,
	});

	return data.pokemon_v2_pokemonsprites;
}

export default async function Home() {
	const pokemon = await loadData();

	return (
		<div className="grid grid-cols-4">
			{pokemon.map((item) => (
				<PokeCard key={item.pokemon_v2_pokemon.id} item={item} />
			))}
		</div>
	);
}
