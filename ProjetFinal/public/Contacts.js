document.querySelector('#btn-add-contact')
.addEventListener('click', function() {
    const nameInput = document.querySelector('#name-input');
    addContact(nameInput.value);
    nameInput.value = '';
});

function addContact(fullName){
    if(!fullName || !fullName.trim()) return;

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-entry';

    // Pour supprimer un contact, double-cliquez sur le nom du contact (uniquement sur un contact qui vient d'être ajouter)
    contactDiv.addEventListener('dblclick', function(){
        contactDiv.remove();
    })

    const nameInitialDiv = document.createElement('div');
    nameInitialDiv.className = 'name-initial';
    nameInitialDiv.textContent = fullName.charAt(0);
    nameInitialDiv.style.backgroundColor = randomColor();

    const fullNameDiv = document.createElement('div');
    fullNameDiv.className = 'full-name';
    fullNameDiv.textContent = fullName;

    // append in order 
    contactDiv.append(nameInitialDiv);
    contactDiv.append(fullNameDiv);
    document.querySelector('#contact-list').append(contactDiv);

}

function randomColor() {
    const colors = [
        '#75026e',
        '#059c16',
        '#000770', 
        '#7a3e02',
        '#036b64',
        '#505e2d',
        '#e30909', 
        '#b05e0c',
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];

}