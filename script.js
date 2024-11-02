const progress = document.querySelector(".progress")
const circle = document.querySelectorAll(".circle")
const previousBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")

progressIndex = 1;

function updatingUI(){
    circle.forEach((circle, index) =>{
        if(index < progressIndex ){
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
    });
    const actives = document.querySelectorAll(".active");
    // console.log(((actives.length - 1)/ (circle.length - 1)) * 100 +'%');
    
    progress.style.width = ((actives.length - 1)/ (circle.length - 1)) * 100 +'%'

    if(progressIndex === 1){
        previousBtn.disabled = true;
    }
    else if(progressIndex === circle.length){
        nextBtn.disabled = true;
    }
    else{
        nextBtn.disabled = false;
        previousBtn.disabled = false;
    }
}

nextBtn.addEventListener("click", ()=>{
    progressIndex++;
    if(progressIndex > circle.length){
        progressIndex = circle.length
    }
    updatingUI()
})

previousBtn.addEventListener("click", ()=>{
    progressIndex--;
    if(progressIndex < 1){
        progressIndex = 1;
    }
    updatingUI()
})