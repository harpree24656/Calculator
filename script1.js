let inputbox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("#button-container button"); 

let string = "";
buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string);
                inputbox.value = string;
            } catch {
                inputbox.value = "Error";
            }
        } else if (value === "AC") {
            string = "";
            inputbox.value = string;
        } else if (value === "DEL") {
            string = string.slice(0, -1);
            inputbox.value = string;
        } else {
            string += value;
            inputbox.value = string;
        }
    });
});
