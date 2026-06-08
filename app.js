let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");



btn.addEventListener("click",function(){
    let item =document.createElement("li");

    // console.log(inp.value);
    item.innerText=inp.value;
     let delBtn =document.createElement("button");
     delBtn.innerText="delete";
     delBtn.classList.add("delete");
     item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});


//USINGB EVENT BUBBLING
ul.addEventListener("click",function(){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        // console.log(listItem);
        listItem.remove();
        console.log("deleted");
    }

})


// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         // console.log(delBtn.value);
//         // delBtn.value="";

//         let parent=delBtn.parentElement;
//         console.log(parent);
//         parent.remove();
//     });
// }