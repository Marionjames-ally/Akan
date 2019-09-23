var century, year, month, dayOfMonth, dayOfWeek, day;

function getInput() {
  Century = parseInt(document.getElementById("Century").value);
  Year = parseInt(document.getElementById("Year").value);
  Month = parseInt(document.getElementById("Month").value);
  Day = parseInt(document.getElementById("Day").value);

  if (century == "") {
    alert("input century");
  } else if (year == "") {
    alert("Enter your birth year...");
  } else if (month == "") {
    alert("Enter your birth month");
  }
}

var daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];
var dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];

function calculateDay() {
  getInput();
  dayOfWeek =
    ((Century / 4 - 
      2 * Century -
      1 +
      (5 * Year) / 4 +
      (26 * (Month + 1)) / 10 +
      Day) %
      7) -
    1;
  console.log(dayOfWeek);
  //   return Math.floor(dayOfWeek);
  //     if (dayOfWeek < 0) {
  //        return dayOfWeek = dayOfWeek * -1;
  //       }
  //       else if (dayOfWeek > 0) {
  //         return dayOfWeek;
  //       }
  //   }
}
function checkDayOfWeek() {
  day = calculateDay();
  checkGender();
  console.log("The function runs");
}
function checkGender() {
  var gen = document.getElementsByName("rads");
  if (gen[0].checked == true) {
    var gender = "male";
  } else if (gen[1].checked == true) {
    var gender = "female";
  } else {
    console.log("pass");
  }
}

switch(gender){
    case gender = "male":
          switch(day){
            case (0 || -0):
              document.getElementById("result").innerHTML = "You were born on a sunday." + "  " + prompt("Your Akan name is " + maleNames[0]);
              break;
              
              case (1 || -1):
              document.getElementById("result").innerHTML = "You were born on a monday." + "  " + "Your Akan name is " + maleNames[1];
              break;
                
              case (2 || -2):
              document.getElementById("result").innerHTML = "You were born on a tuesday." + "  " + "Your Akan name is " + maleNames[2];
              break;
                
              case (3 || -3):
              document.getElementById("result").innerHTML = "You were born on a wednesday." + "  " + "Your Akan name is " + maleNames[3];
              break;
                
              case (4 || -4):
              document.getElementById("result").innerHTML = "You were born on a thursday." + "  " + "Your Akan name is " + maleNames[4];
              break;
                
              case (5 || -5):
              document.getElementById("result").innerHTML = "You were born on a friday." + "  " + "Your Akan name is " + maleNames[5];
              break;

              case (6 || -6):
              document.getElementById("result").innerHTML = "You were born on a saturday." + "  " + "Your Akan name is " + maleNames[6];
              break;
              default:

 }
 case gender = "female":
          switch(day){
            case (0 || -0):
              document.getElementById("result").innerHTML = "You were born on a sunday." + "  " + "Your Akan name is " + femaleNames[0];
              break;
              
              case (1 || -1):
              document.getElementById("result").innerHTML = "You were born on a monday." + "  " + "Your Akan name is " + femaleNames[1];
              break;

              case (2 || -2):
              document.getElementById("result").innerHTML = "You were born on a monday." + "  " + "Your Akan name is " + femaleNames[2];
              break;
                
              case (3 || -3):
              document.getElementById("result").innerHTML = "You were born on a monday." + "  " + "Your Akan name is " + femaleNames[3];
              break;
                
              case (4 || -4):
              document.getElementById("result").innerHTML = "You were born on a monday." + "  " + "Your Akan name is " + femaleNames[4];
              break;
                
              case (5 || -5):
              document.getElementById("result").innerHTML = "You were born on a monday." + "  " + "Your Akan name is " + femaleNames[5];
              break;
                
              case (6 || -6):
              document.getElementById("result").innerHTML = "You were born on a monday." + "  " + "Your Akan name is " + femaleNames[6];
              break;

              break
              default:
              console.log("pass");
 }
}