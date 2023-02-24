const factorialFunction =(parameter)=>{

    if ((typeof parameter)=='number'&& !isNaN(parameter)){
        let factorial=1;
        for(i=parameter; i>=1;i--){
            factorial=parameter*factorial;
            parameter=parameter-1; 
        }
        return factorial
    }
    
    else if((typeof parameter)=='string'){
        console.log("You entered a string,please enter a number");
    }
    else if((typeof parameter)=='boolean'){
        console.log("You entered a boolean,please enter a number");
    }
    else if((typeof parameter)=='undefined'){
        console.log("You entered a undefined variable,please enter a number");
    }

    else if((typeof parameter)=='object'){
        if(parameter==null){
            console.log("You entered a null variable,please enter a number")
        }
        else if(Array.isArray(parameter)){
            console.log("You entered a array variable,please enter a number")
        }
        else if(Object.prototype.toString.call(parameter) === "[object Date]"){
            console.log("You entered a date variable,please enter all variables as a number")
        }
        else{
            console.log("You entered an object,please enter a number");
        }
    }
    else if((typeof parameter)=='function'){
        console.log("You entered a function,please enter a number");
    }
    else if((typeof parameter)=='symbol'){
        console.log("You entered a symbol,please enter a number");
    }
    else if((typeof parameter)=='bigint'){
        console.log("You entered a bigint,please enter a number");
    }
    else if(isNaN(parameter)){
        console.log("You entered Not a Number,please enter a number")
    }
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


console.log(factorialFunction(7));