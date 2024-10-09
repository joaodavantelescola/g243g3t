const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function buscarinformacoes() {
    const res = await fetch(url);
    const dados = await res.json();
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');

    const pessoasConectadas = dados.total_pessoas_conectadas / le9;
    const pessoasNoMundo = dados.total_pessoas_mundo / le9;
    const horas = parseInt(dados.tempo_médio);
    const minutos = Math.round((dados.tempo_médio - horas))*60;
    const porcentagemConectada = ((pessoasConectadas/pessoasNoMundo)*100).toFixed(2);

    paragrafo.innerHTML = `Voce sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente<span>${dados.total_pessoas_conectadas}bilhões</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_médio}</span> horas conectadas.`;
     document.getElementById('graficos-container').appendChild(paragrafo);
}
buscarinformacoes();