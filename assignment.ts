let num :number=24
let FullName :string = "Mounika"
let student :boolean = true
let arr:number[]=[1,2,3,4,5]
let tup:[string,number]=["CSE",52]
enum week{
    Sunday=1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
console.log(num)
console.log(FullName)
console.log(student)
console.log(arr)
console.log(tup)
console.log(week)


function addition(a:number, b:number){
    return a+b
}
console.log("Addition is:"+ addition(2,4))

function capitalize(str:string){
    return str.charAt(0).toUpperCase()+str.slice(1)
}
console.log(capitalize("mounika"))

interface Person{
    name:string,
    age:number,
    email:string
}
let user : Person={
    name:"Mounika",
    age:21,
    email:"20981a0552@raghuenggcollege.in"
}
console.log("Name: "+user.name+" Age: "+user.age+" Email: "+user.email)

class car{
    make:string="";
    model:string="";
    year:number=0;
    displayInfo(){
        console.log("Car Details are: ")
        console.log("Make: "+this.make)
        console.log("Model: "+this.model)
        console.log("Year: "+this.year)
    }
}
let c= new car();
c.make="Corolla"
c.model="Toyota"
c.year=2001
c.displayInfo();
let array:number[]=[1,2,3,4];

function reversedArray(array:number[]){
    console.log("Hello");
    let r=[...array];
    return r.reverse();
}

console.log("Reveresed Array is : "+reversedArray(array));