const buttonClicked = document.querySelector(".button-clicked button");
const images =  [
    "https://img.freepik.com/premium-photo/woman-doing-back-flip-exercise-near-swimming-pool-backyard_13339-352891.jpg?ga=GA1.1.1588927681.1747235091&semt=ais_hybrid&w=740z",
    "https://img.freepik.com/free-photo/horizontal-image-sporty-stylish-young-afro-american-woman-sports-clothes-practicing-yoga-sitting-mat-with-one-knee-bent-turning-head-healthy-lifestyle-wellbeing-activity-concept_343059-2631.jpg?ga=GA1.1.1588927681.1747235091&semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/black-lady-doing-bhujangasana-pose_53876-139417.jpg?ga=GA1.1.1588927681.1747235091&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/man-face-down-lifting-arms-legs_1163-765.jpg?ga=GA1.1.1588927681.1747235091&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/full-shot-woman-bending-her-leg_23-2148257136.jpg?ga=GA1.1.1588927681.1747235091&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/medium-shot-woman-doing-sport-home_23-2150495124.jpg?ga=GA1.1.1588927681.1747235091&semt=ais_hybrid&w=740"
];
let index = 0;
const changeImage = ()=>{
    document.querySelector("#slideshow").src = images[index]

}

function nextImage(){
 index = (index + 1) % images.length;
 changeImage()
};

function prevImage(){
 index = (index - 1) % images.length;
 changeImage()
};

function changeColour(){
buttonClicked.style.background = "green"
buttonClicked.style.color = "white"
buttonClicked.textContent = "Clicked"
}




function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    
    if (!email.includes("@")) {
      errorMsg.innerText = "Email format is invalid.";
      return false;
    }
    if (password.length < 8) {
      errorMsg.innerText = "Password must be at least 8 characters.";
      return false;
    }

    errorMsg.innerText = ""; // Clear error
    alert("Form submitted successfully!");
    return true;
  }
  