
//Implemente um método que crie um novo array baseado nos valores passados.
//Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
function criearray(tamanho,valores) {
    const novoarray = []
    for (let index = 0; index < tamanho; index++) {
        novoarray.push(valores)
        
    }
    //console.log(novoarray)
}
//criearray(3,'a')
//Implemente um método que inverta um array, não utilize métodos nativos do array.
//Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
function inverterarray(entrada) {
    let arrayreserva=[]
    const x = entrada.length
    for (let index = 0; index < x; index++) {
        arrayreserva.push(entrada.pop())
    }
    entrada = arrayreserva
    console.log(entrada)
}
//inverterarray([1,2,3,4])
//Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
//Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
function limpandoarray(entrada){
    for (let index = 0; index < entrada.length; index++) {
        if (entrada[index] ==false ||entrada[index] == undefined ||entrada[index] ==''||entrada[index] ==null||entrada[index] ==0) {
            entrada.splice(index)
        }
        
    }
    console.log(entrada)
}
//limpandoarray([1,2,'', undefined])
//Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor
function convertearray(entrada){
    const mapa = new Map()
    for (let index = 0; index < entrada.length; index++) {
        mapa.set(entrada[index][0],entrada[index][1])
    }
    console.log(mapa)
}
//convertearray([["c",2],["d",4]])
//Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
function identificaarray(arrayentrada,valor1,valor2) {
    const retorno=[]
    for (let index = 0; index < arrayentrada.length; index++) {
        if (arrayentrada[index] != valor1 && arrayentrada[index] != valor2) {
            retorno.push(arrayentrada[index])
        }
        
    }
    console.log(retorno)
}
//identificaarray([5,4,3,2,5],5,3)
//Implemente um método que retorne um array, sem valores duplicados.
function semduplicados(entrada) {
    var semduplicado =[]
    for (let index = 0; index < entrada.length; index++) {
        var contador = 0
       for (let index2 = 0; index2 < semduplicado.length; index2++) {
           if (semduplicado[index2] == entrada[index]) {
               contador ++
           }
       }
       if (contador == 0) {
           semduplicado.push(entrada[index])
       }
    }
    console.log(semduplicado)
    
}
//semduplicados([2,1,3,3,2,4,5,4,7,3])
function compare(array1, array2){
    for (let index = 0; index < array1.length; index++) {
        if (array1[index]!= array2[index]) {
            return false
        }
        
    }
    return true
}
//console.log(compare([1,2,3,4],[1,2,3,4]))
function removeaninhamentos(array){
    var arrayretorno = []
    for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])===true) {
            for (let index2 = 0; index2 < array[index].length; index2++) {
                arrayretorno.push(array[index][index2])
            }
        }else{
            arrayretorno.push(array[index])
        }
        
    }
    console.log(arrayretorno)
}
removeaninhamentos([1,2,3,[4,5]])

//mplemente um método divida um array por uma quantidade passada por parâmetro.
function dividindoarray(entrada, valor){
    var novoarray =[]
    var arrayretorno =[]
    for (let index = 0; index < entrada.length; index++) {
        if (novoarray.length == valor) {
            arrayretorno.push(novoarray)
            
            novoarray=[]
        }
        novoarray.push(entrada[index])

        
    }
    arrayretorno.push(novoarray)

    console.log(arrayretorno)
}
//dividindoarray([1,2,3,4,5],2)
function achandoiguais(array1,array2){
    const arrayretorno =[]
    for (let index = 0; index < array1.length; index++) {
        for (let index2 = 0; index2 < array2.length; index2++) {
            if (array1[index]== array2[index2]) {
                arrayretorno.push(array1[index])
            }
            
        }
        
    }
    console.log(arrayretorno)
}
//achandoiguais([6,8],[8,9])