const email = document.querySelector('#email');
const name = document.querySelector('#name');
const permision = document.querySelector('#permision');
const passwoert = document.querySelector('#password');
const form = document.querySelector('form');
const table =  document.querySelector('tbody');
const aviso = document.querySelector('#aviso');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  newUser();
  defaultUser();
});

function newUser(){
 try {
  const newUsers = [
    {
      id: Date.now(),
      email: email.value,
      name: name.value,
      permision: permision.value,
    }
  ];

  
  table.innerHTML += `
     ${newUsers.map(n =>{
                    return `
                        <tr id="${n.id}">
                            <td>${n.name}</td>
                            <td>${n.email}</td>
                            <td>${n.permision}</td>
                            <td><button id="delete" onclick="deleteUser('${n.id}')">Excluir</button></td>
                        </tr>
                    `
                })}
  
  `
  
  viewPrompt("Novo usuário criado com sucesso..", false);
  setInterval(hidePrompt, 9000)
  
 } catch (error) {
  alert("Usuário não cadastrado")
 }
}

function defaultUser(){
  email.value = '';
  name.value = '';
  permision.value = '';
  passwoert.value = '';
  name.focus();
}

function deleteUser(id){
  const user = document.getElementById(id);
  user.remove();
  viewPrompt("Usuário foi deletado com sucesso", true);
  setInterval(hidePrompt, 9000)
}

function viewPrompt(mensagem,status){
  aviso.style.display = 'block';
  aviso.textContent = mensagem;

  if(status == false){
    aviso.style.backgroundColor = 'rgba(68, 68, 255, 0.299)';
  }else if(status == true){
    aviso.style.backgroundColor = 'rgba(165, 42, 42, 0.629)';
  }
}

function hidePrompt(){
  aviso.style.display = 'none';
}

