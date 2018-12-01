//herbarios();
document.forms.crud = addEventListener("submit", function(e){
    e.preventDefault();
    let data = {
        nombre: document.querySelector('#nombre').value,
        familia: document.querySelector('#familia').value,
        anio: document.querySelector('#anio').value
    }
    let url = '/herbario';
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'content-type':'application/json'
        }.then(res => res.JSON()).catch(error => res.JSON({error:error})).then(responde => {
            alert("Insertado Correctamente");
        })
    })
    
});
