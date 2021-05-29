/*
escreva uma função que recebera um valor n e percorrera um loop
para exibir no console o valor na possição N da sequencia de fibonacci.
fibonacci: 0, 1, 1, 2, 3, 5, 8, ...
o numero é igual a soma dos dois anteriores
exemplo fibonacci(0)->0
fibonacci(6)->8
*/ 

function fibonacci(n){
    
    if (n<2){
        return n
    } 
    // primeira solução
    //else {
      //  return fibonacci(n-1) + fibonacci(n-2);
   // }


  /* 
  segunda solução
   let anterior=1;
   let penultimo=0;
   
   for (let i=2; i<=n; i++){
       if (i==n){
           return penultimo + anterior;
       }
       let temp = penultimo;
       penultimo=anterior;
       anterior= temp + penultimo;
   }
*/


// terçeira solução
let posicao =2;
let anterior =1;
let penultimo= 0;
while(true){
    if (posicao==n){
        
        return penultimo + anterior;
    }

    let temp=penultimo;
    penultimo=anterior;
    anterior=temp+ penultimo;
    posicao++;
}
}