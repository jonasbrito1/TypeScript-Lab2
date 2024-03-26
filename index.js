"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Aluno = /** @class */ (function () {
    function Aluno(id, nomeCompleto, idade, altura, peso) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    return Aluno;
}());
var Turma = /** @class */ (function () {
    function Turma(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }
    Turma.prototype.adicionarAluno = function (aluno) {
        this.alunos.push(aluno);
    };
    Turma.prototype.removerAluno = function (id) {
        this.alunos = this.alunos.filter(function (aluno) { return aluno.id !== id; });
    };
    Turma.prototype.getNumAlunos = function () {
        return this.alunos.length;
    };
    Turma.prototype.getMediaIdades = function () {
        var totalIdades = this.alunos.reduce(function (acc, aluno) { return acc + aluno.idade; }, 0);
        return totalIdades / this.getNumAlunos();
    };
    Turma.prototype.getMediaAlturas = function () {
        var totalAlturas = this.alunos.reduce(function (acc, aluno) { return acc + aluno.altura; }, 0);
        return totalAlturas / this.getNumAlunos();
    };
    Turma.prototype.getMediaPesos = function () {
        var totalPesos = this.alunos.reduce(function (acc, aluno) { return acc + aluno.peso; }, 0);
        return totalPesos / this.getNumAlunos();
    };
    return Turma;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function criarAluno(id) {
    rl.question("Digite o nome completo do aluno ".concat(id, ": "), function (nomeCompleto) {
        rl.question("Digite a idade do aluno ".concat(id, ": "), function (idadeInput) {
            var idade = parseInt(idadeInput);
            rl.question("Digite a altura do aluno ".concat(id, " (em metros): "), function (alturaInput) {
                var altura = parseFloat(alturaInput);
                rl.question("Digite o peso do aluno ".concat(id, " (em kg): "), function (pesoInput) {
                    var peso = parseFloat(pesoInput);
                    var aluno = new Aluno(id, nomeCompleto, idade, altura, peso);
                    turma.adicionarAluno(aluno);
                    exibirEstatisticas();
                    rl.close();
                });
            });
        });
    });
}
function exibirEstatisticas() {
    console.log("\nEstatísticas da Turma:");
    console.log("Número de alunos na turma:", turma.getNumAlunos());
    console.log("Média de idades na turma:", turma.getMediaIdades());
    console.log("Média de alturas na turma:", turma.getMediaAlturas());
    console.log("Média de pesos na turma:", turma.getMediaPesos());
}
var turma = new Turma(1, "Turma A");
rl.question("Quantos alunos deseja adicionar à turma? ", function (numAlunosInput) {
    var numAlunos = parseInt(numAlunosInput);
    for (var i = 1; i <= numAlunos; i++) {
        criarAluno(i);
    }
});
