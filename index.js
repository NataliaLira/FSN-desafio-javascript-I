// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:30},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,0,0],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
function adicionarAluno(nome){
    /* Verificando o tipo de dado enviado pelo cliente */
    if (typeof nome =="string"){
    alunosDaEscola.push({nome:nome,notas:[],cursos:[],faltas:0});
        /* verificando se o nome do aluno no último ítem no array confere com o enviado*/
        if (alunosDaEscola[alunosDaEscola.length-1].nome == nome){
            console.log(`Aluno(a) ${nome} foi cadastrado(a) com sucesso!`); 
        } else {
            console.log("Houve um erro. Cadastre Novamente!");
        }
    }
    else{
        console.log("O dado inserido não é um nome. Cadastre novamente!")
    }
}

function listarAlunos(){
    alunosDaEscola.forEach(aluno => console.log(aluno.nome))
}

function buscarAluno(nome){
    /* veirficando se aluno está cadastrado na base de dados*/
    let resultadoBusca = alunosDaEscola.filter(aluno => aluno.nome == nome );
    /* verificando se o array de resultado possui informações */
    if(resultadoBusca.length > 0){
        console.log(`${resultadoBusca.length} aluno(os) encontrado(os).`)
    } else {
        console.log("Não há alunos registrados com esse nome.")
    }
    /* como o desafio pede que retorne um aluno, é apresentado o primeiro resultado da busca */
    return resultadoBusca[0];
}

function matricularAluno(aluno, curso){
    /* veirficando se aluno está cadastrado na base de dados*/
    let resultadoDaBusca = alunosDaEscola.filter(alunoDaLista => alunoDaLista.nome == aluno.nome);
    /* verificando se o array de resultado possui informações */
    if(resultadoDaBusca.length > 0){
        /* percorrendo todos os registros para alterar o aluno recebido por parâmetro */
        alunosDaEscola.forEach(alunoDaLista => {
            if(alunoDaLista.nome == aluno.nome){
                /* adicionando matrícula no registro do aluno (essa parte já altera a base de dados na linha 2 */
                alunoDaLista.cursos.push({nomeDoCurso: curso, dataMatricula: new Date});
                console.log(`Aluno(a) ${aluno.nome} foi matriculado(a) no curso ${curso} com sucesso!`);
            }
        })
    } else {
        console.log(`${aluno.nome} não está cadastrado(a) em nossa base de dados.`);
    }   
}

function aplicarFalta(aluno){
    /* veirficando se aluno está cadastrado na base de dados*/
    let resultadoDaBusca = alunosDaEscola.filter(alunoDaLista => alunoDaLista.nome == aluno.nome);
    /* verificando se o array de resultado possui informações */
    if(resultadoDaBusca.length == 0){
        console.log(`${aluno.nome} não está cadastrado(a) em nossa base de dados.`);
    } 
    /* verificando se o aluno está matriculado em algum curso (não importa qual) */  
    else if(resultadoDaBusca.length > 0 && aluno.cursos.length == 0){
        console.log(`Aluno(a) ${aluno.nome} não está matriculado(a) em nenhum curso para receber faltas`);
    } 
    else {
        /* percorrendo todos os registros para alterar o aluno recebido por parâmetro */
        alunosDaEscola.forEach(alunoDaLista => {
            if(alunoDaLista.nome == aluno.nome){
                /* adicionando uma falta no registro do aluno (essa parte já altera a base de dados na linha 2 */
                alunoDaLista.faltas = alunoDaLista.faltas + 1;
                console.log(`Falta adicionada ao aluno(a) ${aluno.nome} com sucesso!`);
            }
        })
    } 
}

function aplicarNota(aluno){
    /* veirficando se aluno está cadastrado na base de dados*/
    let resultadoDaBusca = alunosDaEscola.filter(alunoDaLista => alunoDaLista.nome == aluno.nome);
    /* verificando se o array de resultado possui informações */
    if(resultadoDaBusca.length == 0){
        console.log(`${aluno.nome} não está cadastrado(a) em nossa base de dados.`);
    } 
    /* verificando se o aluno está matriculado em algum curso (não importa qual) */  
    else if(resultadoDaBusca.length > 0 && aluno.cursos.length == 0){
        console.log(`Aluno(a) ${aluno.nome} não está matriculado(a) em nenhum curso para receber notas`);
    } 
    else {
        /* percorrendo todos os registros para alterar o aluno recebido por parâmetro */
        alunosDaEscola.forEach(alunoDaLista => {
            if(alunoDaLista.nome == aluno.nome){
                /* adicionando nota no registro do aluno (essa parte já altera a base de dados na linha 2 */
                alunoDaLista.notas.push(10); 
                console.log(`Nota adicionada ao aluno(a) ${aluno.nome} com sucesso!`);
            }
        })
    } 
}

function aprovarAluno(aluno){
    /* veirficando se aluno está cadastrado na base de dados*/
    let resultadoDaBusca = alunosDaEscola.filter(alunoDaLista => alunoDaLista.nome == aluno.nome);
    /* verificando se o array de resultado possui informações */
    if(resultadoDaBusca.length == 0){
        console.log(`${aluno.nome} não está cadastrado(a) em nossa base de dados.`);
    } 
    /* verificando se o aluno está matriculado em algum curso (não importa qual) */  
    else if(resultadoDaBusca.length > 0 && aluno.cursos.length == 0){
        console.log(`Aluno(a) ${aluno.nome} não está matriculado(a) em nenhum curso para ser aprovado.`);
    } 
    else {
        let mediaDeNotas = (aluno.notas.reduce((nota,indice) => nota+indice)) / aluno.notas.length
        /* caso tenha média satisfatória mas ultrapassado o limite de faltas */
        if(aluno.faltas > 3 && mediaDeNotas >= 7){
            console.log(`Aluno ${aluno.nome} foi reprovado por ultrapassar o número máximo de faltas.`)
        }
        /* caso tenha presença satisfatória mas não tenha atingido a média escolar */
        else if(aluno.faltas <= 3 && mediaDeNotas < 7 ){
            console.log(`Aluno ${aluno.nome} foi reprovado não atingir a média de notas necessária.`)
        } 
        /* caso não tenha média satisfatória e também ultrapassado o limite de faltas */
        else if(aluno.faltas > 3 && mediaDeNotas < 7){
            console.log(`Aluno ${aluno.nome} foi reprovado por ultrapassar o número máximo de faltas e por não atingir a média de notas necessária.`)
        }
        else {
            console.log(`Aluno(a) ${aluno.nome} foi aprovado(a) com êxito!`)
        }
    } 
}