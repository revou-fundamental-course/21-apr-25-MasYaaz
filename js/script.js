const celciussuhu = document.getElementById("celcius");
const fahrenheitsuhu = document.getElementById("fahrenheit");
const kelvinsuhu = document.getElementById("kelvin");
const reamursuhu = document.getElementById("reamur");

const inputs = document.getElementsByClassName("input");

// ini fungsi input
for(let i=0; i<inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function(e) {
        let value = parseFloat(e.target.value);
        switch(e.target.name) {
                case "celcius" :
                    fahrenheitsuhu.value = (value * 1.8) + 32;
                    kelvinsuhu.value = value + 273.15;
                    reamursuhu.value = value * 0.8
                    break;
                case "fahrenheit":
                    celciussuhu.value = (value - 32) / 1.8;
                    kelvinsuhu.value = ((value - 32) / 1.8) + 273.15;
                    reamursuhu.value = ((value - 32) / 1.8) * 0.8;
                    break;
                case "kelvin":
                    celciussuhu.value = value - 273.15;
                    fahrenheitsuhu.value = ((value - 273.15) * 1.8) + 32;
                    reamursuhu.value = ((value - 273.15) * 0.8);
                    break;
                case "reamur":
                    celciussuhu.value = value * 1.25;
                    fahrenheitsuhu.value = ((value * 2.25) + 32);
                    kelvinsuhu.value = ((value * 1.25) + 273.15);
                    break;
                
        }
    });
}

function clearDisplay(){
    celciussuhu.value = "";
    fahrenheitsuhu.value = "";
    kelvinsuhu.value = "";
    reamursuhu.value = "";
}