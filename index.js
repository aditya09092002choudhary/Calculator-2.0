var screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
var screenValue = "";
var buttonText = 0;

for(items of buttons){
    items.addEventListener("click",function(e){
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText === 'Clear All') {
            screenValue = "0";
            screen.value = screenValue;
        }
        else if (buttonText === '=') {
            if(screenValue!==""){
                screen.value = parseFloat(eval(screenValue));
                screenValue = "";
            }

                
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}