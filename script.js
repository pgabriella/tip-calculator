window.onload = () =>{
    let button = document.querySelector("#btn");
        button.addEventListener("click",calculateTip);
    
};

function calculateTip (){
    let bill = parseInt(document.querySelector("#bill").value) ;
    let people = parseInt(document.querySelector("#people").value);
    let result = document.querySelector("#result")
    let total = Math.floor((bill*0.20)/people)
    

    if(bill >= 1 && people >= 1){
        result.innerHTML = 'Bill:'+ " " +  bill + " " +'Tip;' + " " +  total;
    }else if( bill && people <= 0 || isNaN(bill) && isNaN(people)){
        result.innerHTML = 'Please enter valid information'
    } 

    document.getElementById('result').style.color = "white";
}
document.getElementById('tc').style.color = 'white';
document.getElementById('abt').style.color = 'white';



