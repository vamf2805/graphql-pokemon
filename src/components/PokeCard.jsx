import React from "react";

function PokeCard({item}) {
	return (
		<div
			className="bg-gray-800 p-10 m-4 text-white rounded-md hover:cursor-pointer hover:bg-gray-700 flex items-center justify-center flex-col"
		>
			<h3 className="text-2xl font-bold text-center">{item.pokemon_v2_pokemon.name}</h3>
			<img src={item.sprites} alt={item.pokemon_v2_pokemon.name} />
		</div>
	);
}

export default PokeCard;
