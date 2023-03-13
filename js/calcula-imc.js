let titulo = document.querySelector('.titulo')




titulo.textContent = 'teste'



let pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i <= pacientes.length; i++) {
    let paciente = pacientes[i]

    console.log(paciente)
    let tdAltura = paciente.querySelector('.info-altura')
    let altura = tdAltura.textContent


    let tdpeso = paciente.querySelector('.info-peso')
    let peso = tdpeso.textContent

    let tdImc = paciente.querySelector('.info-imc')


    let imc = calculaimc(peso, altura)
    tdImc.textContent = imc


}

function calculaimc(peso, altura) {
    let imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}






