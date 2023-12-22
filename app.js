const userInput = document.querySelector("#userInput"); 
const qrWidth = document.querySelector("#width");
const qrHeight = document.querySelector("#height");
const qrCreateBtn = document.querySelector("#qrCreateBtn");

function getQrData(UserData,width,height){
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${UserData}`)
    .then((data) => document.getElementById("qrImage").src = data.url);

    
}


qrCreateBtn.addEventListener("click",function(){
    const UserInputData = userInput.value; 
    const qrWidthData = qrWidth.value;
    const qrHeightData = qrHeight.value;

    document.querySelector("#userInput").value = "";
    document.querySelector("#width").value = "";
    document.querySelector("#height").value = "";
    

    getQrData(UserInputData, qrWidthData, qrHeightData);
    

    
});


// function generateQRCode() {
//     // Get input values
//     var inputText = document.getElementById('inputText').value;
//     var width = document.getElementById('width').value;
//     var height = document.getElementById('height').value;

//     // Construct API URL
//     var apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${inputText}`;

//     // Set the source of the image to the generated QR code URL
//     document.getElementById('qrcode').src = apiUrl;
//   }
