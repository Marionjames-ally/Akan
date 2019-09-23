function getInput() {
  var century = parseInt(document.getElementById("century").value);
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var dayOfMonth = parseInt(document.getElementById("monthday").value);

  if (century == "") {
    alert("Input century");
    return false;
  } else if (year == "") {
    alert("Input the correct year");
    return false;
  } else if (month == "") {
    alert("Input the correct month");
    return false;
  } else if (dayOfMonth == "") {
    alert("input the correct date");
    return false;
  }
  var dayOfWeeks =
    parseInt(
      century / 4 -
        2 * century -
        1 +
        (5 * year) / 4 +
        (26 * (month + 1)) / 10 +
        dayOfMonth
    ) % 7;

 // alert("The day of the week you were born is:" + dayOfWeeks);

  switch(dayOfWeeks){
    case 0:
    alert("The day of the week you were born is Sunday");
    break;

    case 1:
    alert("The day of the week you were born is Sunday");
    break;

    case 2:
    alert("The day of the week you were born is Sunday");
    break;

    case 3:
    alert("The day of the week you were born is Sunday");
    break;

    case 4:
    alert("The day of the week you were born is Sunday");
    break;

    case 5:
    alert("The day of the week you were born is Sunday");
    break;

    case 6:
    alert("The day of the week you were born is Sunday");
    break;

    default:
    alert("Please enter your details");
    break;

  }

  var gender = document.querySelector('input[name ="rads"]:checked').value;

  

  switch (gender) {
    case "1": {
      alert("you are male");

      switch (dayOfWeeks) {
        case 0:{
          alert("Your Akan Name is Kwasi");
          break;
        }
        case 1:
            alert("Your Akan Name is Kwadwo");
          break;

        case 2:
            alert("Your Akan Name is Kwabena");
          break;

        case 3:
            alert("Your Akan Name is Kwaku");
          break;

        case 4:
            alert("Your Akan Name is Yaw");
          break;

        case 5:
            alert("Your Akan Name is Kofi");
          break;

        case 6:{
            alert("Your Akan Name is Kwame");
          break;
        }
        default:
          alert("error");
          break;
      }
          break;
    }

    case "2":{

      alert("you are female");
      switch (dayOfWeeks) {
        case 0:
          alert("Your Akan name is Akosua");
          break;
        case 1:
          alert("Your Akan Name is Adwoa");
          break;
        case 2:
          alert("Your Akan Name is Abenaa");
          break;
        case 3:
          alert("Your Akan Name is Akua");
          break;
        case 4:
          alert("Your Akan Name is Yaa");
          break;
        case 5:
          alert("Your Akan Name is Afua");
          break;
        case 6:
          alert("Your Akan Name is Ama");
          break;

        default:
          alert("error");
          break;
      }
      break;
    }
    default:
    break;
  }
}
getInput();
