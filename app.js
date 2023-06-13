async function Sortear() {
    const totalresultados = Number(document.querySelector('#totalresultadosinput').value);
    const menorvalor = Number(document.querySelector('#menorvalorinput').value);
    const maiorvalor = Number(document.querySelector('#maiorvalorinput').value);

    const elementoHTMLresultvalues = document.querySelector('.results-values');
    elementoHTMLresultvalues.innerHTML = '';

    for (let i = 0; i < totalresultados; i++) {
        const resultado = Math.floor(Math.random() * (maiorvalor - menorvalor + 1)) + menorvalor;

        const elementoHTMLdoresultado = document.createElement('div');
        elementoHTMLdoresultado.classList.add('results-value');
        elementoHTMLdoresultado.innerText = resultado;

        elementoHTMLresultvalues.append(elementoHTMLdoresultado);
    }

    await wait(20);
}

function wait(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo);
    });
}
