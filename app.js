let num1 = ''
let num2 = ''
let operator = ''

// let xNum = document.querySelectorAll('.btn')

let result = document.querySelector('.calc-screen p')
function ca() {
    num1 = ''
    num2 = ''
    operand = ''
}
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        value = this.textContent
        if (/[0-9]+/g.test(+value)&& operator =='') {
            num1 += +value
            console.log(num1);
            console.log('проверка первого числа прошла');
        } else if (!/[0-9]+/g.test(value)) {
            operator = value
            console.log('проверка ');
        }else{
            num2+=+value
            console.log(num2);
            console.log('проверка второго числа прошла');
        }
    })
})
