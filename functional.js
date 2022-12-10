
function bankOp(objectID,inputID,flag){
    var curr=document.getElementById(objectID).innerText
    curr=parseInt(curr)
    var input=document.getElementById(inputID).value
    input=parseInt(input)

    var result=input+curr
    
    document.getElementById(inputID).value=""
    var balance=document.getElementById('balance').innerText
    balance=parseInt(balance)

    if(flag>0){
        if(input>0){
            document.getElementById(objectID).innerText=result
            var new_bal=balance+input

            document.getElementById('balance').innerText=new_bal

        }
        else{
            alert('Invalid Amount')
        }

    }

    else{
        if(balance<input){
            alert('Insufficient Balance')
        }

        else{
            
            document.getElementById(objectID).innerText=result
            var new_bal=balance-input

            document.getElementById('balance').innerText=new_bal
        }
    }

}



//deposit

document.getElementById('depo-btn').addEventListener('click',function(){
    bankOp('depo','depo-input',1)
})

//withdraw

document.getElementById('with-btn').addEventListener('click',function(){
    bankOp('with','with-input',0)
})