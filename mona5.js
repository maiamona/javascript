let alunos = [{
    nome: "Maria",
    nota: 8
},
{
    nome: "Pedro",
    nota: 4
},
{
    nome: "João",
    nota: 10
},
{
    nome: "Paulo",
    nota: 9
},
{
    nome: "Ana",
    nota: 7
},
{
    nome: "Bianca",
    nota: 6
}
];



for (let i =0; i< alunos.length; i++) {
   

   if (alunos[i].nota>7){
    console.log("o(a) aluno(a) " + alunos[i].nome + " passou porque teve " + alunos[i].nota + " nota suficiente");
}
else {
    console.log("o(a) aluno(a) " + alunos[i].nome + " reprovou porque teve " + alunos[i].nota + " nota insuficiente");
}
}

