const name = "Dev Ed";  




function logger() {
    console.log("neverParty Time");
    console.log("neverParty Time");
    console.log("neverParty Time");
    console.log("neverParty Time");

    }

    logger();


    function adder(num1, num2) {
        console.log(num1+num2);


    }

adder(5,10);


const youtuber = "Traversy Media";

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);
toUpper(youtuber);

    let car = Object.create(Object.prototype,
        {
          name:{
            value: 'Fiesta',
            configurable: true,
            writable: true,
            enumerable: false
          },
          maker:{
            value: 'Ford',
            configurable: true,
            writable: true,
            enumerable: true
          }
        });
      console.log(car.name)
    
      function Vehicle(name, maker) {
        this.name = name;
        this.maker = maker;
     }
     

     