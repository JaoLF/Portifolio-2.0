// console.log("Hello World!");

function copyToClickBoard(){
    let content = document.getElementById('dado').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert("Email copiado!");
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
 
}

