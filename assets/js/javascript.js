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

}




