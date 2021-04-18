const videoElement = document.getElementById('video');
const button = document.getElementById("button");


async function selectMediaScreen() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        console.error("Whoops!,error: ", error);
    }
}
button.addEventListener('click', async() => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})
selectMediaScreen()