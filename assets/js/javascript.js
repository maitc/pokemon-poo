function boton(){//función principal que al accionar click ase activa.

	function Pokemon(nombre, color, poderDeAtaque){//constructor por donde pasaran todos los pokemones que yo quiera.
			this.nombre = nombre;
			this.color = color;
			this.nivelDeAmistad = 0;
			this.vida = 100;
			this.poderDeAtaque = poderDeAtaque;
			
			this.mostrarPokemon = function(){
				return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
			}

			this.aumentarAmistad = function(valor){
				this.nivelDeAmistad = this.nivelDeAmistad + valor;
			}

			this.atacar = function(pokemon){
				return pokemon.vida = pokemon.vida - this.poderDeAtaque;
			}
		}


var select1 = document.getElementById("pikac").value;//se trae select.
var select2 = document.getElementById("charma").value;

var pik = new Pokemon(select1, "amarillo", 50);//se une al constructor.
var char = new Pokemon(select2, "rojo", 20);

var respuesta = document.getElementById("res");//donde se mostrará el resultado de la batalla.
respuesta.innerHTML = "Pokémon " + pik.nombre + " atacó a Pokémon " + char.nombre + " y pokémon " + char.nombre + " tiene " + char.vida + " de vida restante.";

}




