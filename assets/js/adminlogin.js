function adminLog() {
    window.location.href = '../html/loginadmin.html'
}

function showVisits() {
    const alert = document.getElementById('errorAlert');
    const loginValue = document.getElementById('loginAdmin').value;
    if (loginValue === 'admin123') {
        window.location.href = '../html/showRegisteredVisits.html'
    } else {
        alert.innerHTML = `<p>Ingrese clave válida</p>`
    } 
}

let container = document.getElementById('cont');
var databaseRef = firebase.database().ref('users/');

databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        let contenedor = document.getElementById('cont');
        let divcreator = document.createElement('div');
        divcreator.classList = 'divcreator';
        let row = document.createElement('div');
        row.classList = 'row';
        
        let col12 = document.createElement('div');
        col12.classList = 'col s6 m6 l6 xl6';
        let col6creator = document.createElement('div');
        col6creator.classList = 'col s6 m6 l6 xl6';        
        let pcreator = document.createElement('p');
        let ptexto =  document.createElement('p');
        let textcreator = document.createTextNode(childData.nombre + '  ' + childData.apellido);
        let date = document.createTextNode(childData.hora + '  ');
        let company = document.createTextNode("empresa");

        
        pcreator.appendChild(date);
    pcreator.appendChild(textcreator);
    pcreator.appendChild(company);
    row.appendChild(col12);
    col12.appendChild(ptexto);        
    col6creator.appendChild(pcreator);
    row.appendChild(col6creator);       
    contenedor.appendChild(row);
  });
});  




   