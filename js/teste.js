// _____________________ My Store _____________________
let lista = document.getElementsByClassName('prod')
let item
let prod_name
let prod_price = 0
let qtde_prod = 1
let qtde_prod1 = 1
let qtde_prod2 = 1
let qtde_prod3 = 1
let subTotal_prod = 0

let qtde_itens = lista.length

//Função para recuperar nome dos itens e valor
function teste(valor){
	let indice_prod = valor

	let i = 0
	while(i < lista.length){
		lista[i] = i
		if(indice_prod == i){
			item = lista[i]
		}

		i++
	}

	prod_name = item.childNodes[1].textContent

	prod_price = item.childNodes[3].textContent

	criarElementos(prod_price)
}

//Função para criar e adiciona os elementos na tabela
function criarElementos(prod_price){
	let prod_table = document.getElementById('cart')

	let item_span = document.createElement('span')
	let qtde_span = document.createElement('span')
	let unit_price_span = document.createElement('span')
	let subTotal_span = document.createElement('span')
	let remove_span = document.createElement('span')

	let elemento_row = document.createElement('div')

	//atribicao de classes nos elementos
	elemento_row.className = 'row_prod'
	item_span.className = 'item_nome'
	qtde_span.className = 'qtde_item'
	unit_price_span.className = 'unid_item'
	subTotal_span.className = 'subTotal'
	remove_span.className = 'remove'

		
	addRow(prod_table, elemento_row, item_span, qtde_span, unit_price_span, subTotal_span, remove_span, prod_price)
}

let cont_prod1 = 0
let cont_prod2 = 0
let cont_prod3 = 0

//Funçao para adicionar os elemento na tabel
function addRow(prod_table, elemento_row, item_span, qtde_span, unit_price_span, subTotal_span, remove_span, prod_price){
	let itens_disponiveis = document.getElementsByClassName('row_prod')
	
	
	elemento_row.appendChild(item_span)
	elemento_row.appendChild(qtde_span)
	elemento_row.appendChild(unit_price_span)
	elemento_row.appendChild(subTotal_span)
	elemento_row.appendChild(remove_span)

		
		switch(prod_name){
			case 'Produto 1':
				if(cont_prod1 == 0 && itens_disponiveis.length < qtde_itens){
					prod_table.appendChild(elemento_row)
					elemento_row.id = 'p' + 0
					somaQtde(item_span, qtde_span, unit_price_span, subTotal_span, remove_span)
					cont_prod1 += 10
				}

				else if(cont_prod1 != 0){
					conferirItem1(qtde_span, subTotal_span, prod_price, elemento_row)
				}
				
				break

			case 'Produto 2':
				if(cont_prod2 == 0 && itens_disponiveis.length < qtde_itens){
					prod_table.appendChild(elemento_row)
					elemento_row.id = 'p' + 1
					somaQtde(item_span, qtde_span, unit_price_span, subTotal_span, remove_span)
					cont_prod2 += 10
				}

				else if(cont_prod2 != 0){
					conferirItem2(qtde_span, subTotal_span, prod_price, elemento_row)
				}

				break

			case 'Produto 3':
				if(cont_prod3 == 0 && itens_disponiveis.length < qtde_itens){
					prod_table.appendChild(elemento_row)
					elemento_row.id = 'p' + 2
					somaQtde(item_span, qtde_span, unit_price_span, subTotal_span, remove_span)
					cont_prod3 += 10
				}
				else if(cont_prod3 != 0){
					conferirItem3(qtde_span, subTotal_span, prod_price, elemento_row)
				}
				break
		}

		calcularTotal()
}

//Função que recebe as variaveis vazias a atribui os valores que serão apresentados na tabela

function somaQtde(item_span, qtde_span, unit_price_span, subTotal_span, remove_span){
	item_span.textContent = prod_name
	qtde_span.textContent = qtde_prod
	unit_price_span_value = parseFloat(prod_price)
	unit_price_span.textContent = `$ ${unit_price_span_value}`
	subTotal_span.textContent = prod_price
	remove_span.textContent = 'Remove'

	remove_span.textContent = 'Remove'
	remove_span.style.cursor = 'pointer'
	remove_span.style.color = '#0080FF'

	remove_span.onclick = function(){
		excluirItem(remove_span)
		calcularTotal()
	}
}



//Funcoes que incrementa a quantidade e o subtotal caso já exista o elemento no carrinho
function conferirItem1(item_span, qtde_span, unit_price_span, subTotal_span, remove_span){
	let row1 = document.getElementById('p0')
	let muda_qtde1 = row1.childNodes[1]
	let muda_price1 = row1.childNodes[3]
	let value_unit = parseFloat(prod_price)
	
	qtde_prod1 += 1
	muda_qtde1.textContent = qtde_prod1 

	let result = value_unit * qtde_prod1

	muda_price1.textContent = result.toFixed(2)

}



function conferirItem2(item_span, qtde_span, unit_price_span, subTotal_span, remove_span){
	let row2 = document.getElementById('p1')
	let muda_qtde2 = row2.childNodes[1]
	let muda_price2 = row2.childNodes[3]
	let value_unit = parseFloat(prod_price)
	
	qtde_prod2 += 1
	muda_qtde2.textContent = qtde_prod2

	let result = value_unit * qtde_prod2

	muda_price2.textContent = result.toFixed(2)

}

function conferirItem3(item_span, qtde_span, unit_price_span, subTotal_span, remove_span){
	let row3 = document.getElementById('p2')
	let muda_qtde3 = row3.childNodes[1]
	let muda_price3 = row3.childNodes[3]
	let value_unit = parseFloat(prod_price)
	
	qtde_prod3 += 1
	muda_qtde3.textContent = qtde_prod3

	let result = value_unit * qtde_prod3

	muda_price3.textContent = result.toFixed(2)
}

//Função que quando chamada exclui a linha selecionada
function excluirItem(remove_span){
	let row = remove_span.parentNode
	row.remove()

	//atribui 0 ao contador que verifica se existe o item na lista
	cont_prod1 = 0
	cont_prod2 = 0
	cont_prod3 = 0
}


function calcularTotal(){
	let sub_total = document.getElementsByClassName('subTotal')
	let soma_total = 0
	let div_total = document.getElementById('tot_result')

	for(var i = 0; i < sub_total.length; i++){
		soma_total += parseFloat(sub_total[i].textContent)
	}

	div_total.textContent = `$ ${soma_total.toFixed(2)}`
}