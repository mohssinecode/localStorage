let buttons = document.querySelectorAll(".buttons span"),
   input = document.querySelector("input"),
   result  = document.querySelector(".results span");

   buttons.forEach(function(el){
      el.addEventListener("click", function(e){
         if(e.target.classList.contains("add-item")){
             addItem();
         }
         if(e.target.classList.contains("check-item")){
            checkItem();
        }
        if(e.target.classList.contains("delete-item")){
            deleteItem();
        }
        if(e.target.classList.contains("show-item")){
            showItems();
        }
      })
   })

   function showMessage(){
       result.innerHTML="Cannot deal with empty value!"
   }

   function addItem(){
       if(input.value !== ""){
           localStorage.setItem(input.value, "test")
           result.innerHTML = `localStorage added value<span>${ input.value}</span>`
           input.value=""

       }else{
           showMessage();
       }
   }
   function checkItem(){
       if(input.value !== ""){
           if(localStorage.getItem(input.value)){
               result.innerHTML=`The Value <span> ${input.value} </span>Fount inlocalStorage`
               input.value= "";
           }else{
            result.innerHTML=`The Value <span> ${input.value} </span> Not Fount in localStorage!`
            input.value= "";
           }

       }else{
        showMessage();
       }
   }
   function deleteItem(){
       if(input.value !== ""){
          if(localStorage.getItem(input.value)){
              localStorage.removeItem(input.value)
              result.innerHTML= `value <span> ${input.value} </span> removed from localStorage`;
              input.value= "";
          }else{
            result.innerHTML=`The Value <span> ${input.value} </span> Not Fount in localStorage!`
            input.value= "";
          }
       }else{
        showMessage();
       }
   }
   function showItems(){
       result.innerHTML= "";
       if(localStorage.length){
         for(let [key, value] of Object.entries(localStorage)){
            result.innerHTML+= `<span class="block">${key}</span>`
         }
       }else{
        result.innerHTML = "local storage is empty"
       }
   }