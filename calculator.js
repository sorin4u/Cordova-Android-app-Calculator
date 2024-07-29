function equlvalentChek(){
   //mentile valoarea pina alt valoare este introdusa ba presin a button
  if(parseInt(document.getElementById('equlvalent').value)) {
    
    document.getElementById('equlvalent').value = 0;
    document.getElementById('result').value = 0;


  }
  

}



function input(x){


  equlvalentChek();
      
         let y = parseFloat(document.getElementById('result').value);

         if(document.getElementById('decimalVar').value == 0 ){
          x += y * 10;

          document.getElementById('result').value = x;

         }
      else{
          let decimalCount = parseInt(document.getElementById('decimalVar').value);
     if(decimalCount == 1){
      x *= 1/10;
      y +=x;

      document.getElementById('result').value = y;

     }
       else{
        document.getElementById('result').value += x;

       }
       decimalCount++;
       document.getElementById('decimalVar').value = decimalCount;


 }

/*
        if (document.getElementById('result').value ==0)

            {
             document.getElementById('result').value = x;

           }
     else{
            document.getElementById('result').value += x;
        }*/

}


function decimalPoint(){

if(document.getElementById('decimalVar').value == 0){ 

  document.getElementById('decimalVar').value =1;

}

if (parseInt(document.getElementById('operation').value)){
  document.getElementById('result').value = 0;
}


}

function operandCheck()
{

  if (document.getElementById('operand').value ==""){

    
      document.getElementById('operand').value = document.getElementById('result').value;
    
      document.getElementById('equlvalent').value = 1;

    }  


   else{

    operatorChech();
   }
  

}


function operatorChech(){

     let a = parseFloat(document.getElementById('operand').value);
   
     let b = parseFloat(document.getElementById('result').value);

     switch(parseInt( document.getElementById('operation').value))
     {
        case 1:
            a += b;  
            break;

        case 2:
            a -= b;  
            break;
        case 3:
            a *= b;  
           break; 
        case 4:
            a /= b;  
            break;
     }

     document.getElementById('operand').value = a;
     document.getElementById('result').value = a;
     document.getElementById('equlvalent').value = 1;
}





function operators (x)

{

  switch (x) {
    case 1:
        document.getElementById('operation').value =1; //add
        break;
  
    case 2:
        document.getElementById('operation').value =2; //subtraction
        break;

    case 3:
        document.getElementById('operation').value =3; //miltiplication

        break;

    case 4:
        document.getElementById('operation').value =4; //division
         break;
    default:      

  }

    operandCheck();

}

  function equals()
  {
    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value ="";
    document.getElementById('equlvalent').value = 1;
  }


function allClear()
{

    document.getElementById('result').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = 0;
    document.getElementById('equlvalent').value = 0;
    document.getElementById('decimalVar').value =0;
};

function plusminus() 
{
   let x = parseFloat( document.getElementById('result').value);

   x *= -1;
   document.getElementById('result').value = x;
}

function percent()

{
    let x = parseFloat( document.getElementById('result').value);

    x *= 0.01;
    document.getElementById('result').value = x;

}



function square()

{
    let x = parseFloat( document.getElementById('result').value);

    x *= x;
    document.getElementById('result').value = x;

}
