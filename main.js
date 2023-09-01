const form = document.getElementById('contact-form');
const contactList = document.getElementById('contacts');
const nome = [];
const telefone = [];


let linhas = '';

    form.addEventListener('submit',function(e) {
        e.preventDefault();
        
        adicionaContato();
        somaContato();
    });

    function adicionaContato () {

        const inputNomeContato = document.getElementById('name-contact');
        const inputTelContato = document.getElementById('phone-contact');

        if (telefone.includes(inputTelContato.value)) {
            alert(`O Telefone ${inputTelContato.value} já foi adicionado.`)
        } else {
            nome.push(inputNomeContato.value);
            telefone.push(inputTelContato.value);
    
    
            let linha = '<tr>';
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputTelContato.value}</td>`;
            linha += '</tr>';
    
            linhas += linha;
            
            contactList.querySelector('tbody').innerHTML = linhas;
    
            inputNomeContato.value = '';
            inputTelContato.value = '';
        }}

    function somaContato () {
        const totalContatos = telefone.length; 
        const totalContatosElement = document.getElementById('total-contacts');
        totalContatosElement.textContent = totalContatos;

        let soma = '<tr>';
        soma += `<td>${totalContatos.value}</td>`;
        soma += '</tr>';

    }