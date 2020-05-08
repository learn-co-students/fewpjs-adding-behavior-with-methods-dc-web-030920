// Your code here

class Cat{
constructor(name, sex){  //name and sex are parameters
      this.name = name
      this.sex = sex
}
speak(){
    return `${this.name} says meow!`
}
}

class Dog{
    constructor(name, sex){
        this.name = name
        this.sex = sex

    }
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird{
    constructor(name, sex){
        this.name = name
        this.sex = sex

    }
    speak(){
        // if bird is male 
        //return It's me! name, the parrot!
        // else erturn "name says squawk!"
         if(this.sex === "male"){
             return `It's me! ${this.name}, the parrot!`
         }else{
             return `${this.name} says squawk!`
         }

    }
}
