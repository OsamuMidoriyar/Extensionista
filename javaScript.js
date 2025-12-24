// Gerencia qual tela que vai aparecer
function navegar(idTela) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(idTela).classList.add('active');
}

let historico = JSON.parse(localStorage.getItem('poolData')) || [];

// Limpa os campos
function limparCampos() {
    document.getElementById('data-manutencao').value = "";
    document.getElementById('desc-manutencao').value = "";
    document.getElementById('litragem').value = "";

    const resultado = document.getElementById('resultado-texto');
    if(resultado) resultado.innerHTML = "";
}

function navegar(id) {

    limparCampos(); 

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Salvar Manutenção
function salvarManutencao() {
    const data = document.getElementById('data-manutencao').value;
    const desc = document.getElementById('desc-manutencao').value;

    if (!data || !desc) return alert("Não deixe nenhum campo vazio!");

    historico.push({ data, desc });
    localStorage.setItem('poolData', JSON.stringify(historico));
    
    alert("Manutenção salva com sucesso!");
    navegar('decisao-manutencao'); 
}
// 4. Revela o histórico, caso exista.
function verHistorico() {
    const lista = document.getElementById('lista-historico');
    lista.innerHTML = historico.map(item => `<li>${item.data}: ${item.desc}</li>`).join('');
    
    document.getElementById('msg-sem-historico').style.display = historico.length ? 'none' : 'block';
    navegar('historico');
}