let nota = prompt("Qual a nota do aluno?")

nota = Number(nota);

if (isNaN(nota)){
    alert("ERRO: VALOR INVÁLIDO");
}

else if (nota < 5) { 
    alert("Reprovado");
} 
else if (nota >= 7) {
    alert("Aprovado");
}

else {
    alert("Exame");
}