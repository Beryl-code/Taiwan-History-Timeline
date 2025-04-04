
const prevImage = document.querySelector("img");

/*prevImage.onclick = function(){
    if (prevImage.getAttribute("src") === "images/test_image.jpeg"){
        prevImage.setAttribute("src", "images/image_2.jpg")
    } else {
        prevImage.setAttribute("src", 'images/test_image.jpeg')
    }
};*/


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (myName === ""){
      setUserName();
    } else{
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hello, ${myName}`;
      alert (localStorage.getItem("name"));

    }
    
  }

alert (localStorage.getItem("name"));

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome back, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };