let modal = {
  closeModal: ()=>{
    this.wrapper.style.display = "none";
    window.history.pushState({"formtoggle": false},"","index8.html");
  },
  openModal: ()=>{
    this.wrapper.style.display = "flex";
    window.history.pushState({"formtoggle": true},"","/form");
  }
};
window.addEventListener("DOMContentLoaded", function(event){
  modal["showbutton"] = document.getElementById("showbutton");
  modal["wrapper"] = document.getElementById("wrapper");
  modal["closeX"] = document.getElementById("close"); //closing on X
  modal["fields"] = document.querySelectorAll(".fields");
  modal["submitButton"] = document.getElementById("submitbutton");
  modal["postForm"] = document.getElementById("contact");
  modal.fields.forEach((element) => {   // LOCAL STORAGE REALIZATION
      element.value = localStorage.getItem(element.name);
      element.addEventListener("blur",
      (event)=>localStorage.setItem(event.target.name, event.target.value));
  });
  modal.closeX.addEventListener("click",modal.closeModal);
  modal.showbutton.onclick = modal.openModal;
  window.onclick = function(event) { //CLOSES WINDOW ON CLICKING OUTSIDE IT
  if(event.target === modal.wrapper)
  {
   modal.closeModal();
  }
  };
  window.history.pushState({"formtoggle": false},"","8.html"); // HISTORY API REALIZATION
  window.addEventListener("popstate",(event) => {
  (event.state.formtoggle)? (modal.wrapper.style.display = "flex") : (modal.wrapper.style.display = "none");
  });
  window.addEventListener("keydown",function(event){ //CLOSES WINDOW ON ESC HIT
      if(modal.wrapper.style.display!=="none")
      {
          switch(event.key){
              case "Esc":
              case "Escape":
                  modal.closeModal();
              break;
      }
  }
  });
  (modal.fields.item(3).checked)? (modal.submitButton.disabled=false) : (modal.submitButton.disabled=true);
  modal.fields.item(3).addEventListener("change", (event)=>
  {(event.target.checked)? (modal.submitButton.disabled=false) : (modal.submitButton.disabled=true);});
  modal.postForm.addEventListener("submit", function(event){  //AJAX USING FETCH
      event.preventDefault();
      fetch("https://formcarry.com/s/KAkRhB37_6s",
      {
          method:"POST",
          headers:
          {
              "Content-type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(Object.fromEntries(new FormData(modal.postForm)))
      })
      .then(function(response){
          if(!response.ok)
          {
              throw new Error(response.status);
          }
          return response;
      })
      .then((response)=>{alert("Успешная отправка");
          console.log(response.text());})
      .catch((error)=>{alert("Ошибка отправки");
          console.log(error);});
      modal.fields.forEach((element) => {element.value = "";});
      localStorage.clear();
  });
});
