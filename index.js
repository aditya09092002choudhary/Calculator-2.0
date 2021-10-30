var screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
var screenValue = "";
var buttonText = 0;

for(items of buttons){
    items.addEventListener("click",function(e){
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText === 'Clear All') {
            screenValue = "";
            screen.value = "0";
        }
        else if (buttonText === '=') {
            if(screenValue!==""){
                screen.value = eval(screenValue);
                screenValue = "";
            }

                
        }
        else {
            screen.value="";
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
