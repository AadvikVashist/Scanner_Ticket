function showStudent() {
  var x = document.getElementById("student");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  // console.log("test");
}

function showCam() {
  var x = document.getElementById("cam");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
function createStudent(firstName, lastName, accepted) {
  document.getElementById("lastName").innerHTML = lastName + ",&nbsp";
  document.getElementById("firstName").innerHTML = firstName + "&nbsp";
  if (accepted){
    document.getElementById("acceptance").innerHTML = "Accepted!";
    document.getElementById("bio").style.backgroundColor = "lightgreen";
  } else {
    document.getElementById("acceptance").innerHTML = "REJECTED!";
    document.getElementById("bio").style.backgroundColor = "red";

  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   var but = document.getElementById("but");
//   var video = document.getElementById("vid");
//   var mediaDevices = navigator.mediaDevices;
//   vid.muted = true;
//   but.addEventListener("click", () => {

//     // Accessing the user camera and video.
//     mediaDevices
//       .getUserMedia({
//         video: true,
//         audio: true,
//       })
//       .then((stream) => {

//         // Changing the source of video to current stream.
//         video.srcObject = stream;
//         video.addEventListener("loadedmetadata", () => {
//           video.play();
//         });
//       })
//       .catch(alert);
//   });
// });

let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

click_button.addEventListener('click', function() {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL('image/jpeg');
 // console.log("test");

  // data url of the image
  console.log(image_data_url);
});
camera_button.addEventListener('click', async function() {
  console.log("test");
  let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
video.srcObject = stream;
});

// async function startCamera() {
//   console.log("test");
//    	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
// 	video.srcObject = stream;
  
// }

