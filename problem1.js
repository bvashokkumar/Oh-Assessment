
//javascript function
function stringToNumber(num){
    let number="";
    //iterating over length of the string
    for(let i=0;i<num.length;i++){
        //checking if it is lies with in ascii range of numbers
        if(num.charCodeAt(i)>47 && num.charCodeAt(i)<58){
            number+=num[i];
        }else{
            //checking for the case of minus -45
            if(i==0 && num.charCodeAt(i)==45){
                continue;
            }else{
                if(number.length==0){
                    number="0";
                }
                break;
            }
        }
    }
    //printing output
    console.log(num,"->",number);
}


//Testing
stringToNumber("42");
stringToNumber("0");
stringToNumber("42a");
stringToNumber("42a35");
stringToNumber("abc42");
stringToNumber("-42");
stringToNumber("-0042");