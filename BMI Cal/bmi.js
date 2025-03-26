const form = document.querySelector('.form')

form.addEventListener('submit',function(e) {
    e.preventDefault()

    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const output = document.querySelector('#output')

    if(height === '' || height < 0 || isNaN(height)){
        output.innerHTML ="Please enter the valid height"
        return
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        output.innerHTML ="Please enter the valid weight"
        return
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2)

    if(bmi < 18.5){
                    output.innerHTML = `Your BMI is ${bmi}. You are underweight`
                } else if(bmi >= 18.5 && bmi <= 24.9){
                    output.innerHTML = `Your BMI is ${bmi}. You are normal weight`
                } else if(bmi >= 25 && bmi <= 29.9){
                    output.innerHTML = `Your BMI is ${bmi}. You are overweight`
                } else {
                    output.innerHTML = `Your BMI is ${bmi}. You are obese`
                }
            })
            
        