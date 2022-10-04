console.log("bmi started");
const form = document.querySelector(".form")
const input_kg = document.querySelector(".input_kg")
const input_metr = document.querySelector(".input_metr")
const result = document.querySelector(".result")


form.addEventListener("submit", (event)=>{
    event.preventDefault()

    let kgValue = input_kg.value
    let metrValue = input_metr.value

    let bmiformula = kgValue / Math.pow(metrValue, 2)


    console.log(bmiformula);

    if( bmiformula < 18.5 ){
       result.innerHTML = "Oriqsiz"
    }else if( bmiformula < 25 ){
       result.innerHTML = "O'rtachasiz" 
    }else if( bmiformula < 30 ){
       result.innerHTML = "Semizsiz" 
    }else if( bmiformula < 40 ){
       result.innerHTML = "O'ta semizsiz"
    }else{
        result.innerHTML = "Yumaloqsiz"
    }
})