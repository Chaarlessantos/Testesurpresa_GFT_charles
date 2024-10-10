https://playcode.io/2038160

// Fiz uma lista onde separei por nome, level, gênero (m ou f), escala de força (Poder), idade, tipo do poder

//realizei um codigo que mostrasse no console os pokemon que podiam entrar numa futura competição. os requisitos para competir eram:
//[continuação] (pokemon.idade >= 12 && pokemon.poder >= 60) caso contrário não podia competir. Tenho conhecimento em java, ia fazer um 'for' nessa linguagem e pedir pro chatgpt refazer em JS, mas como o assunto não foi passado fiz só o que foi dado.

let pokemonLista = [
  ["Pikachu", 25, "M", 120, 15, "Choque"],
  ["Charmander", 18, "F", 70, 14, "Larva"],       
  ["Bulbassauro", 20, "M", 58, 13, "Grama/Veneno"],  
  ["Squirtle", 16, "F", 80, 10, "Água"],         
  ["Dragonite", 55, "M", 130, 16, "Voador"] 
];

console.log("Personagens do Gênero M:");
console.log("Nome:", "[" + pokemonLista[0][0] + "]", "Level:", "[" + pokemonLista[0][1] + "]", "Sexo:", "[" + pokemonLista[0][2] + "]", "Poder:", "[" + pokemonLista[0][3] + "]", "Idade:", "[" + pokemonLista[0][4] + "]");
console.log("Nome:", "[" + pokemonLista[2][0] + "]", "Level:", "[" + pokemonLista[2][1] + "]", "Sexo:", "[" + pokemonLista[2][2] + "]", "Poder:", "[" + pokemonLista[2][3] + "]", "Idade:", "[" + pokemonLista[2][4] + "]");
console.log("Nome:", "[" + pokemonLista[4][0] + "]", "Level:", "[" + pokemonLista[4][1] + "]", "Sexo:", "[" + pokemonLista[4][2] + "]", "Poder:", "[" + pokemonLista[4][3] + "]", "Idade:", "[" + pokemonLista[4][4] + "]");

console.log("\nPersonagens Gênero F:");
console.log("Nome:", "[" + pokemonLista[1][0] + "]", "Level:", "[" + pokemonLista[1][1] + "]", "Sexo:", "[" + pokemonLista[1][2] + "]", "Poder:", "[" + pokemonLista[1][3] + "]", "Idade:", "[" + pokemonLista[1][4] + "]");
console.log("Nome:", "[" + pokemonLista[3][0] + "]", "Level:", "[" + pokemonLista[3][1] + "]", "Sexo:", "[" + pokemonLista[3][2] + "]", "Poder:", "[" + pokemonLista[3][3] + "]", "Idade:", "[" + pokemonLista[3][4] + "]");


console.log("\nPokémon que podem competir:");
console.log("Nome:", "[" + pokemonLista[0][0] + "]", "Idade:", "[" + pokemonLista[0][4] + "]", "Poder:", "[" + pokemonLista[0][3] + "]" + " Cadastrado com sucesso");
console.log("Nome:", "[" + pokemonLista[1][0] + "]", "Idade:", "[" + pokemonLista[1][4] + "]", "Poder:", "[" + pokemonLista[1][3] + "]"+ " Cadastrado com sucesso");
console.log("Nome:", "[" + pokemonLista[4][0] + "]", "Idade:", "[" + pokemonLista[4][4] + "]", "Poder:", "[" + pokemonLista[4][3] + "]"+ " Cadastrado com sucesso");


console.log("\nPokémon que não podem competir (Poder abaixo de 60, mas idade >= 12):");
console.log("Nome:", "[" + pokemonLista[2][0] + "]", "Idade:", "[" + pokemonLista[2][4] + "]", "Poder:", "[" + pokemonLista[2][3] + "]");


console.log("\nPokémon que não podem competir (Idade abaixo de 12, mas poder >= 60):");
console.log("Nome:", "[" + pokemonLista[3][0] + "]", "Idade:", "[" + pokemonLista[3][4] + "]", "Poder:", "[" + pokemonLista[3][3] + "]");

let pokemonQuePassaram = [];

pokemonQuePassaram.push(pokemonLista[0][0], pokemonLista[1][0], pokemonLista[4][0]);


console.log("\nPokémon que passaram para a competição:");
console.log(pokemonQuePassaram);
