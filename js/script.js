// _____________________ My Store _____________________
let botao = document.getElementsByClassName('submit')
console.log(botao)



// ______ Classes de Produtos ______

//Classe para criar objetos e calcular valor da quantidade 
let Produto = function(ident, nome, preco){
	this.ident = ident
	this.nome = nome
	this.preco = preco

	//metodo recebe a quantidade de produtos e calcula o valor final 
	this.cartItem = function(qtde){
		this.qtde = qtde
		this.preco = preco * qtde
		let lista = [this.ident, this.nome, this.preco]

		console.log(`Preço: ${this.preco}`)
	}
}

//classe que recebe o objeto como parametro e adiciona ou remove da lista de produtos
let Cart = function(produto){
	this.itens = []
	this.addItem = function(produto){
		this.itens.push(produto)
		console.log('Item adicionado')
		console.log(this.itens)
		
	}

	this.removeItem = function(produto){
		this.produto = produto
		for(let i = 0; i < this.itens.length; i++){
			if(this.produto == i){
				this.itens.splice(i, 1)
				console.log('Item removido')
				console.log(this.itens)
				
			}
			
		}
	}
}



let produto1 = new Produto(101, 'Maçã', 2.00)
let produto2 = new Produto(102, 'Melão', 4.00)
let produto3 = new Produto(103, 'Abaxi', 5.00)

let cart = new Cart()

cart.addItem(produto1)
cart.addItem(produto2)
cart.addItem(produto3)

console.log(cart.itens)



