// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação 

const adicionarAluno = (_nome) => {
    let aluno = { nome: _nome}
    alunosDaEscola.push(aluno)
    console.log(alunosDaEscola)
    console.log("Aluno(a) " + _nome + " cadastrado com sucesso!")
}

// adicionarAluno("Enzo Valentino")


const listarAlunos = () => {
    for(aluno of alunosDaEscola){
        console.log("Nome: " + aluno.nome);

        if(aluno.notas != 0){
            console.log("Notas: ")
            for(notas of aluno.notas){
                console.log(notas)
            }
        }

        if(aluno.cursos != 0){
            for(curso of aluno.cursos){
                console.log("Cursos: " + curso.nomeDoCurso)
                let data = new Date(curso.dataMatricula)
                let dataFormat = data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear() 
                console.log("Data de matrícula: " + dataFormat ) 
            }
        }

        console.log("Faltas: " + aluno.faltas);

        console.log(" ")
    }
}

// listarAlunos()


const buscarAluno = (_nome) => {
    let aluno = alunosDaEscola.find( function(alunos) {
        return _nome == alunos.nome;
    })

    if(aluno) {
        console.log("Aluno encontrado!");
        console.log(aluno)
    } 
    else {
        console.log("Aluno não foi encontrado!");
    }
}

// buscarAluno("Lucca")


const matricularAluno = (_aluno, _curso) => {


    for(aluno of alunosDaEscola) {
        if(aluno.nome == _aluno.nome){
            console.log("Aluno matriculado no curso de " + _curso)
            let cursoMatricula = {
                nomeDoCurso: _curso,
                dataMatricula: new Date()
            }
            aluno.cursos.push(cursoMatricula)
            return console.log(aluno)
        }
        
    }

    return console.log("Aluno não é cadastrado no sistema!")

}


// let umAluno = {nome: "Lucca"}
// let umCurso = "FullStack"
// matricularAluno(umAluno, umCurso)


const aplicarFalta = (_aluno) => {
    for(aluno of alunosDaEscola) {
        if(aluno.nome == _aluno.nome && aluno.cursos != 0){
            console.log("Falta de aluno aplicada.")
            aluno.faltas = aluno.faltas + 1;
            return console.log(aluno)
        }
        
    }

    return console.log("Aluno não é cadastrado no sistema ou não está matriculado em algum curso.")
}

// let umAluno = {nome: "Lucca"}
// aplicarFalta(umAluno)



const aplicarNota = (_aluno) => {
    for(aluno of alunosDaEscola) {
        if(aluno.nome == _aluno.nome && aluno.cursos != 0){
            console.log("Nota de aluno aplicada.")
            let nota = _aluno.nota
            aluno.notas.push(nota)
            return console.log(aluno)
        }
        
    }

    return console.log("Aluno não é cadastrado no sistema ou não está matriculado em algum curso.")
}

// let umAluno = {nome: "Lucca", nota: 10}
// aplicarNota(umAluno)


const aprovarAluno = (_aluno) => {
    for(aluno of alunosDaEscola) {
        if(aluno.nome == _aluno.nome && aluno.cursos != 0){
            let media = 0, soma = 0;

            for(nota of aluno.notas) {
                soma += nota;
            }
            media = (soma / aluno.notas.length).toFixed(2);

            if(aluno.faltas <= 3 && media >= 7) {
                return console.log("O aluno " + aluno.nome +  " está aprovado.")
            }
            else {
                return console.log("O aluno " + aluno.nome +  " não foi aprovado.")
            }

        }
        
    }

    return console.log("Aluno não é cadastrado no sistema ou não está matriculado em algum curso.")
}

let umAluno = {nome: "Lucca"}
aprovarAluno(umAluno)