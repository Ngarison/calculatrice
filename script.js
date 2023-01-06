
//  setInterval(()=>{confirm("Please, use me…")}, 3000)
function traitement(){
   let operator = document.querySelector("select").value;
   let left_member = parseInt(document.getElementById("left_member").value);
   let right_member = parseInt(document.getElementById("right_member").value);

   let result=0;

   if(left_member>=0 && right_member>=0){

   switch (operator) {
    case "+":
        result=left_member+right_member;
        break;
    case "-":
        result=left_member-right_member;
        break;
    case "/":
        if(right_member!=0){
            result=left_member/right_member;
        }else{
           console.log("It’s over 9000!");
        }
        break;
    case "*":
           result=left_member*right_member;
        break;
    case "%":
        if(right_member!=0){
        result=left_member%right_member;
        }else{
           console.log("It’s over 9000!");
        }
        break;
   
    default:
        break;
   }

   console.log(result);
   alert(result);
}else{
    alert("Error :(");
}

   
}