document.getElementById('btn').addEventListener('click',function(){
    const email=document.getElementById('mail')
    const pass=document.getElementById('pass')

    if(email.value=='nishataziz09@gmail.com' && pass.value=='8091'){
        window.open('bank.html')
    }
    else{
        alert('Invalid id/password')
    }



})





