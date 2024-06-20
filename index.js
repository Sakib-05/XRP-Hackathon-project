let moneySent;
let id;
document.getElementById("send").onclick = function() {
    moneySent = document.getElementById("money").value;
    id = document.getElementById("options").value;
    if( moneySent==0 ||moneySent<0 ){
        document.getElementById("employer_balance").textContent = "Account balance (XRP): 1000";
        document.getElementById("employee").textContent = "amount received: ";
        document.getElementById("id").textContent = "employee ID: ";
        alert("enter a valid amount");
    }
    if(1000-moneySent<0 ){
        document.getElementById("employer_balance").textContent = "Account balance (XRP): 1000";
        document.getElementById("employee").textContent = "amount received: ";
        document.getElementById("id").textContent = "employee ID: ";
        alert("enter a valid amount");
    }
    if(id== "null"){
        alert("please select an option");
    }
    
    if((moneySent>0 && 1000-moneySent>=0) &&  id != "null"){
        document.getElementById("employer_balance").textContent = "Account balance (XRP): "+(1000-(moneySent));
        document.getElementById("employee").textContent = "amount received: "+(moneySent);
        document.getElementById("id").textContent = "employee ID: "+document.getElementById("options").value;
        alert("Funds sent");
    }

}