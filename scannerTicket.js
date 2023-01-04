function showStudent() {
    var x = document.getElementById("student");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
function createStudent(firstName, lastName, accepted) {
  document.getElementById("lastName").innerHTML = lastName;
  document.getElementById("firstName").innerHTML = firstName;
  if (accepted){
    document.getElementById("acceptance").innerHTML = "Accepted!";
  } else {
    document.getElementById("acceptance").innerHTML = "REJECTED!";

  }
}