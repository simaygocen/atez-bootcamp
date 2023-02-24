const multiplyingFunction=(...args)=>{
    let total;
    let flag=true;

    for(i=0; i<args.length;i++){
        if(typeof args[i]=='number' && !isNaN(args[i])){
            flag=true;
        }
        else{
            if((typeof args[i])=='string'){
                console.log("You entered a string,please enter all variables as a number");
            }
            else if((typeof args[i])=='boolean'){
                console.log("You entered a boolean,please enter all variables as a number");
            }
            else if((typeof args[i])=='undefined'){
                console.log("You entered a undefined variable,please enter all variables as a number");
            }
            else if((typeof args[i])=='object'){
                if(args[i]==null){
                    console.log("You entered a null variable,please enter all variables as a number")
                }
                else if(Array.isArray(args[i])){
                    console.log("You entered a array variable,please enter all variables as a number")
                }
                else if(Object.prototype.toString.call(args[i]) === "[object Date]"){
                    console.log("You entered a date variable,please enter all variables as a number")
                }
                else{
                    console.log("You entered an object,please enter all variables as a number");
                }
            }
            else if((typeof args[i])=='function'){
                console.log("You entered a function,please enter all variables as a number");
            }
            else if((typeof args[i])=='symbol'){
                console.log("You entered a symbol,please enter all variables as a number");
            }
            else if((typeof args[i])=='bigint'){
                console.log("You entered a bigint,please enter all variables as a number");
            }
            else if(isNaN(args[i])){
                console.log("You entered Not a Number,please enter all variables as a number")
            }
            flag=false;
            break;
        }
    }
    if(flag){
        total=1;
        for(i=0; i<args.length;i++){
            total=total*args[i];
        }
    }
    return total;
}

let x; //for undefined testing
const addFunction=()=>{}; //for function testing
class C {};//for function testing
Math.sin;//for function testing
const array=[1, 2, 4];//for array testing
const object={ a: 1 };//for object testing
const symbol=Symbol();//for symbol testing
42n //for bigint testing
const today=new Date()//for date testing


console.log(multiplyingFunction(2,3,8,5,10));