const buttons = [...document.querySelectorAll('#button')];
const listValues = buttons.map((key) => key.value);
console.log(listValues);
const screen = document.querySelector('#screen');

document.addEventListener('click', (e) => {
    const valeur = e.target.value;
    calculate(valeur);
});

const calculate = (valeur) => {
    if (listValues.includes(valeur)) {
        switch (valeur) {
            case 'C':
                screen.textContent = '';
                break;
            case '=':
                const calculation = eval(screen.textContent);
                screen.textContent = calculation;
                break;
            default:
                const indexValue = listValues.indexOf(valeur);
                const button = buttons[indexValue];
                screen.textContent += button.innerHTML;
        }
    }
};

window.addEventListener('error', (e) => {
    alert(`Il y a une erreur dans votre calcul : ${e.message}.`);
});
