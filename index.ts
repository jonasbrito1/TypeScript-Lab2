import * as readline from 'readline';

class Aluno {
    id: number;
    nomeCompleto: string;
    idade: number;
    altura: number;
    peso: number;

    constructor(id: number, nomeCompleto: string, idade: number, altura: number, peso: number) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}

class Turma {
    id: number;
    nome: string;
    alunos: Aluno[];

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }

    adicionarAluno(aluno: Aluno) {
        this.alunos.push(aluno);
    }

    removerAluno(id: number) {
        this.alunos = this.alunos.filter(aluno => aluno.id !== id);
    }

    getNumAlunos(): number {
        return this.alunos.length;
    }

    getMediaIdades(): number {
        const totalIdades = this.alunos.reduce((acc, aluno) => acc + aluno.idade, 0);
        return totalIdades / this.getNumAlunos();
    }

    getMediaAlturas(): number {
        const totalAlturas = this.alunos.reduce((acc, aluno) => acc + aluno.altura, 0);
        return totalAlturas / this.getNumAlunos();
    }

    getMediaPesos(): number {
        const totalPesos = this.alunos.reduce((acc, aluno) => acc + aluno.peso, 0);
        return totalPesos / this.getNumAlunos();
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function criarAluno(id: number) {
    rl.question(`Digite o nome completo do aluno ${id}: `, (nomeCompleto) => {
        rl.question(`Digite a idade do aluno ${id}: `, (idadeInput) => {
            const idade = parseInt(idadeInput);
            rl.question(`Digite a altura do aluno ${id} (em metros): `, (alturaInput) => {
                const altura = parseFloat(alturaInput);
                rl.question(`Digite o peso do aluno ${id} (em kg): `, (pesoInput) => {
                    const peso = parseFloat(pesoInput);
                    const aluno = new Aluno(id, nomeCompleto, idade, altura, peso);
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

const turma = new Turma(1, "Turma A");

rl.question("Quantos alunos deseja adicionar à turma? ", (numAlunosInput) => {
    const numAlunos = parseInt(numAlunosInput);
    for (let i = 1; i <= numAlunos; i++) {
        criarAluno(i);
    }
});
