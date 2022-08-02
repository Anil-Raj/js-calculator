const container = document.getElementById('container');
const sciContainer = container.querySelector('.sci_btns');
const normalContianer = container.querySelector('.nrml_btns');

const buttonList = [
    7, 9, 8, '/',
    4, 5, 6, '*',
    1, 2, 3, '-',
    0, '.', '=', '+']
const sciBtnList = [
    'Inv', 'sin', 'cos', 'tan',
    'exp', 'bet', 'asd', 'otn',
    'hnl', 'exp', 'bbb', 'anb',
    'Ans', 'tel', 'ffs', 'arv']


buttonList.forEach(btn => {
    const btnEle = document.createElement('div')
    btnEle.innerText = btn;
    btnEle.classList.add('btn')
    normalContianer.appendChild(btnEle)
})


sciBtnList.forEach(btn => {
    const btnEle = document.createElement('div')
    btnEle.innerText = btn;
    btnEle.classList.add('btn')
    sciContainer.appendChild(btnEle)
})

container.addEventListener('click', (e) => {
    //e.preventDefault();
    const numbers = '0123456789'
    const basicOp = '+-/*'
    input = container.querySelector('#input')

    if (e.target.innerText === 'fx') {
        document.querySelector('#sci_container').scrollIntoView();
        e.target.parentElement.classList = 'fx_selected'
    } else if (e.target.innerText === '123') {
        document.querySelector('#normal_container').scrollIntoView();
        e.target.parentElement.classList = 'basic_selected'

    } else if (e.target.innerText === '=') {
        input.innerText = eval(input.innerText)
    } else  if(numbers.includes(e.target.innerText) || basicOp.includes(e.target.innerText)){
        if(basicOp.includes(input.innerText.slice(-1)) && basicOp.includes(e.target.innerText)){
            input.innerText = input.innerText.slice(0,-1)
        }
        input.innerText += e.target.innerText
    }
})



window.addEventListener('resize', () => {
    document.querySelector('#normal_container').scrollIntoView();
    e.target.parentElement.classList = 'basic_selected'
})

document.querySelector('#normal_container').scrollIntoView();
e.target.parentElement.classList = 'basic_selected'