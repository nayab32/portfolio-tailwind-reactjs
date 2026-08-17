function Constructor(){
    class Person{
        constructor(name){
            this.name=name;
        }
    }

const person1 = new Person("iqra");
return(
    <div>
        <h1>{person1.name}</h1>
    </div>
);
}
export default Constructor;