let input = document.querySelector(".input")

let buttons = document.querySelectorAll(".main")

let btnArray = Array.from(buttons)

let string = ""

btnArray.forEach((button)=>{
    button.addEventListener("click", () =>{
        if(button.innerHTML == "AC"){
            string = ""
            input.value = 0 
        }
        else if(button.innerHTML == "DEL"){
           
            input.value = string.substring(0, string.length - 1);
        }
        else if(button.innerHTML == "="){
            input.value = eval(string)
        }
        else{
            string += button.innerHTML
            input.value = string
        }
        
    })
})
