function testarTamanho(valor){
    if (valor > 15){
      return "maior que 15"  
    }else if (valor <3 && valor>0){
        return "menor que 3"
    }else if (valor>=3 && valor<=15){
        return "maior ou igual a 3 e menor e igual a 15"
    }else{
        return "numero negativo"
    }
    
}