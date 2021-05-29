function calcularVetor(vetor, numero){
/*    for(let i=0; i<vetor.length; i++){
        if(vetor[i]>5){
            vetor[i]*=numero;
        }
    }
    return vetor;
    */

    let resultado =[];
    for(let item of vetor > 5){
        if(item >5){
        /*
        resultado = [] -> length =0
        resultado = [10] -> length =1
        resultado = [10, 45] -> length =2
        */
   resultado[resultado.length]=item*numero;
    }else{
        resultado[resultado.length]=item;
    }
}
return resultado;
}