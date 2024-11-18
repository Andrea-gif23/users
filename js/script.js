
function obtenerUsuarios() {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respuesta => {
      
        return respuesta.json();
      })
      .then(usuarios => {
       
        mostrarUsuarios(usuarios);
      })
      .catch(error => {
        
        console.error('Error al obtener los usuarios:', error);
      });
  }
  
 
  function mostrarUsuarios(usuarios) {
    const listaUsuarios = document.getElementById('listaUsuarios');
    
  
    listaUsuarios.innerHTML = '';
  
  
    usuarios.forEach(usuario => {
     
      const age = Math.floor(Math.random() * (60 - 18 + 1)) + 18; 
      const img = `assets/img/${usuario.id}.jpeg`; 
      
     
      const { name, username, email, phone, company, address } = usuario;
  
      const li = document.createElement('li');
      li.classList.add('usuario'); 
  
      li.innerHTML = `
        <div class="usuario-info">
          <img src="${img}" alt="Foto de ${name}" class="usuario-img">
          <div class="usuario-details">
            <h3>${name}</h3>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Compañía:</strong> ${company.name}</p>
            <p><strong>Dirección:</strong> ${address.street}, ${address.suite}, ${address.city}</p>
            <p><strong>Edad:</strong> ${age}</p>
          </div>
        </div>
      `;
  
   
      listaUsuarios.appendChild(li);
    });
  }
  
  
  obtenerUsuarios();
  