let noBtnClickedCount = 0;

document.getElementById('noBtn').addEventListener('click', function() {
    let yesBtn = document.getElementById('yesBtn');
    let message = document.getElementById('message');
    let additionalImage = document.getElementById('additionalImage');
    noBtnClickedCount++;
    
    let scaleValue = 1 + noBtnClickedCount * 1;
    yesBtn.style.transform = `scale(${scaleValue})`;
    yesBtn.classList.add('green-button');

    if (noBtnClickedCount === 1) {
        message.textContent = "Are you actually sure?";
        additionalImage.style.display = "block"; // Show the first image if it's the first click
    } else if (noBtnClickedCount === 2) {
        message.textContent = "Oh, playing hard to get? 😏";
        additionalImage.src = "hard.JPG";
        additionalImage.alt = "Hard Image";
    } else if (noBtnClickedCount === 3) {
        message.textContent = "Common Seriously!?";
        additionalImage.src = "1.JPG";
        additionalImage.alt = "Serious Image";
    } else {
        message.textContent = "Just kidding, we know you meant yes!";
        additionalImage.src = "kidding.JPG";
        additionalImage.alt = "Kidding Image";
    }
});

document.getElementById('yesBtn').addEventListener('click', function() {
    let message = document.getElementById('message');
    let additionalImage = document.getElementById('additionalImage');

    message.textContent = "YAY! 🎉 You have officially been booked with Arun for 18th of February.";
    additionalImage.src = "YAY.JPG"; // Display this image when "Yes" is clicked
    additionalImage.alt = "YAY Image"; // Update alt attribute accordingly
    additionalImage.style.display = "block"; // Make sure the image is visible

    removeButtons();
});

function removeButtons() {
    let container = document.querySelector('.container');
    let buttonsContainer = document.querySelector('.buttons-container');
    if (buttonsContainer) {
        container.removeChild(buttonsContainer);
    }
}
