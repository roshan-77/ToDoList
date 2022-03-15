//store all the selectors in a variable
let todo_item = document.querySelector(".input-field");
let add_button = document.querySelector(".button1");
let clear_button = document.querySelector(".clear")
let positive_list = document.querySelector(".positive-list-area")
let done_list = document.querySelector(".done-list-area")

//initialise a value to give id to all the items added in a list.
let idVal=0

//this function adds the todo activities in a list
function addtolist(){
    
    if(todo_item.value !=""){
        //create an element and buttons for todo tasks
        let div1=document.createElement("div");
        div1.setAttribute("class", "to-do-activities");
        let div2=document.createElement("div");
        let button1 = document.createElement("button");
        let button2 = document.createElement("button");

        button1.classList.add("done")
        button2.classList.add("clear")

        let node= document.createTextNode(`${todo_item.value}`);
        let btn1 = document.createTextNode("Done");
        let btn2 = document.createTextNode("Clear");

        div2.setAttribute("id", `${increment()}`)
        div2.appendChild(node);
        div1.append(div2);
        button1.appendChild(btn1)
        button2.appendChild(btn2)
        
        div1.append(button1);
        div1.append(button2)
        positive_list.append(div1);

        //create element for complated tasks
        let div3=document.createElement("div");
        let button3= document.createElement("button");
        button3.classList.add("revert");
        button3.innerText = "Revert";
        
        //to make sure the value is cleared from input field when it is submitted.
        todo_item.value=""

        //listener to do action when clear button is clicked.
        button2.addEventListener("click",()=>{
            positive_list.removeChild(div1);
        })

        //listener to do action when done button is clicked.
        button1.addEventListener("click",()=>{
            
            div3.classList.add("completed-activities");
            done_list.append(div3);
            div3.append(div2)
            div3.append(button3);
            positive_list.removeChild(div1)
        })

        //listener to revert the activities in the done section back to inpro tasks
        button3.addEventListener('click',()=>{
            positive_list.append(div1)
            div1.appendChild(div2)
            div1.append(button1)
            div1.append(button2)
            done_list.removeChild(div3)
            console.log("success")
        })
    }
    
    //incremnets the value of the id for the activities.
    function increment(){
        return idVal = idVal+1;}
    
  
        
}

//main event to add the items to the list
add_button.addEventListener("click",
    addtolist
)

//clears the text field
clear_button.addEventListener('click',()=>{
todo_item.value="";
})



