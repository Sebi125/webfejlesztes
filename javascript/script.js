//Form validation

$().ready(function () {
 
  $("#signupForm").validate({
    rules: {
      name: {
        required : true,
        minlength : 2
      },
      email: {
      required: true,
      email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },
      age: {
      required: true,
      },
      agree : "required",
      gender : "required",
      fitnesslevel : "required"
      },

      messages: {
        name : {
          required :  "Please enter your lastname",
          minlength : " Your name must consist of at least 2 characters"
        },
        password: {
            required: " Please enter a password",
            minlength:
                " Your password must be consist of at least 5 characters"
        },
        confirm_password: {
            required: " Please enter a password",
            minlength:
                " Your password must be consist of at least 5 characters",
            equalTo: " Please enter the same password as above"
        },
        age : "Please enter you age",
        agree: "Please accept our policy",
        gender : "Please chose your gender",
        fitnesslevel : "Please chose your fitness level"
    }
      
  });
  });

// Fitness kalkulátor
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const gender = document.getElementById('gender').value;
    const workoutsPerWeek = parseInt(document.getElementById('workouts').value);
  
    if (
      isNaN(weight) ||
      isNaN(height) ||
      weight <= 0 ||
      height <= 0 ||
      workoutsPerWeek <= 0 ||
      !['male', 'female'].includes(gender)
    ) {
      document.getElementById('bmiResult').innerText = 'Please enter valid information.';
      return;
    }
  
    const bmi = weight / (height * height);
    const roundedBMI = bmi.toFixed(2);
  
    let result = `Your BMI is ${roundedBMI}.`;
  
    if (bmi < 18.5) {
      result += ' You are underweight.';
    } else if (bmi >= 18.5 && bmi < 25) {
      result += ' You have a normal weight.';
    } else if (bmi >= 25 && bmi < 30) {
      result += ' You are overweight.';
    } else {
      result += ' You are obese.';
    }
  
    if (gender === 'female' && workoutsPerWeek >= 3) {
      result += ' You maintain a good workout routine!';
    } else if (gender === 'male' && workoutsPerWeek >= 4) {
      result += ' You maintain a good workout routine!';
    } else {
      result += ' Consider increasing your workout frequency for better fitness.';
    }
  
    document.getElementById('bmiResult').innerText = result;
  }

