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

document.addEventListener("DOMContentLoaded", () => {
  var but = document.getElementById("but");
  var video = document.getElementById("vid");
  var mediaDevices = navigator.mediaDevices;
  vid.muted = true;
  but.addEventListener("click", () => {

    // Accessing the user camera and video.
    mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {

        // Changing the source of video to current stream.
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      })
      .catch(alert);
  });
});