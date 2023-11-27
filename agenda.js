const form = document.getElementById('form-atividade');
let linhas = ' ';

form.addEventListener('submit', function(e) {

  e.preventDefault();
  adicionaLinha();
});


function adicionaLinha(){

  const inputNomeContato = document.getElementById('nome-contato');
  const inputNumeroContato = document.getElementById('numero-contato');


  let linha = ' ';
    linha += '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    console.log(linhas);

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;


    form.reset();
  }

