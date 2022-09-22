const n = 5;
for (let i = 1; i <= n; i++) {
    console.log(i);     // for you loop 
}


var count = 3; 
var i = 5;

while (count < 5) {              // while loop 
    let text = "";
console.log("im doing while loop");
console.log("javascript is hard");
count = count + 1;
text+="<br>Number of dogs is " + i;
i++;
}





const text = document.querySelector(".title");   // practice from video
const changeColor = document.querySelector("changeColor");
text.style.backgroundColor = "red";










const btn = document.querySelector('#btn');             // loop with color
btn.addEventListener('click', () => {
    const h1 = document.querySelector('h1');
    const colors = ['red', 'yellow', 'brown', 'green', 'blue']
    for (let i = 0; i < colors.length; i++) {
        h1.style.color = colors[i];

    }
});



const userlist = document.querySelectorAll('.name-list li'); //user  list color 
console.log(userlist);
function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById('name-list li').style.listStyleType = listValue;
  }

console.log;







