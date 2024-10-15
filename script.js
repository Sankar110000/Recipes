let tooglerBtns = document.querySelectorAll(".tooglerBtn");
let ingredients = document.querySelector(".ingredients");
let startBtn = document.querySelector(".startBtn");
let guideWindow = document.querySelector(".guideWindow");
let nxtBtn = document.querySelector(".nextBtn"); 
let colseBtn = document.querySelector(".closeBtn");
let stepTxt = document.querySelector(".guideWindow p");

tooglerBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (ingredients.style.maxHeight == "") {
      ingredients.style.maxHeight = "400px";
    } else {
      ingredients.style.maxHeight = "";
      ingredients.style.overflow = "hidden";
    }
  });




let steps = ["The first Step", "The second step",  "the last step"]; 
let stepCounter = 0;
let isComplete = false;

startBtn.addEventListener("click", () => {
    guideWindow.style.display = "block";
    stepTxt.innerHTML = steps[stepCounter];
    if((stepCounter+1 == steps.length)&&isComplete){
      stepTxt.innerHTML = "You can have your meal now";
      nxtBtn.style.display = "none";
    }else{
      nxtBtn.style.display = "inline";
    }

});

nxtBtn.addEventListener("click", () => {
  let checkInput = document.querySelector(".guideWindow input");
  let progressBar = document.querySelector(".progress .progress-bar");

  
  if(stepCounter < steps.length-1){
    stepCounter++;
    stepTxt.innerHTML = steps[stepCounter];
    if(checkInput.checked){
      progressBar.innerHTML = `${Math.floor((stepCounter/steps.length)*100)}%`;
      progressBar.attributes[1].nodeValue = `width: ${Math.floor((stepCounter/steps.length)*100)}%`;
    }
    checkInput.checked = false;
  }else{
    stepTxt.innerHTML = "Now you are done";
    nxtBtn.style.display = "none";
    checkInput.style.display = "none"
    let checkLabel = document.querySelector(".form-check-label");
    if(checkInput.checked){
      progressBar.innerHTML = "100%";
      progressBar.attributes[1].nodeValue = `width: 100%`;
      isComplete = true;
    }

    checkLabel.style.display = "none";
  };

  
})

colseBtn.addEventListener("click", () => {
  guideWindow.style.display = "none";
});


});