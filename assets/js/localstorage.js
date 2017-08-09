//Guardar a Local Storage
function saveToLocalStorage() {
    if (typeof (Storage) !== "undefined") {//soporte del navegador
       
        if ($('#autocomplete').val() != '') {//si el nombre es diferente de vacío
            localStorage.setItem('autocomplete', $('#autocomplete').val());
        }
        if ($('#input_from').val() != '') {//si el nombre es diferente de vacío
            localStorage.setItem('input_from', $('#input_from').val());
        } 
        if ($('#input_to').val() != '') {//si el nombre es diferente de vacío
            localStorage.setItem('input_to', $('#input_to').val());
        } 
        if ($('#hostages').val() != '') {//si el nombre es diferente de vacío
            localStorage.setItem('hostages', $('#hostages').val());
        }   
             

        alert('Buscando lugares');       
        
    } else {
        //No hay soporte de navegador
        console.log('Sorry there is not support for local storage.')
    }
}

function getFromLocalStorage() {
    console.log('getting info for: ' + localStorage.getItem('autocomplete'));
    $('#autocomplete').val(localStorage.getItem('autocomplete'));
}