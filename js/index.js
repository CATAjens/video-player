const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al botón de play')
}

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al botón de pausa')
}

$backward.addEventListener('click', handleBackward)

function handleBackward(){
    $video.currentTime -= 10
}

$forward.addEventListener('click', handleForward)

function handleForward(){
    $video.currentTime += 10
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max = $video.duration
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
}

$video.addEventListener("ended", () => {
    $play.hidden = false;
    $backward.hidden = false;
    $forward.hidden = false;
    $pause.hidden = true;
    $video.pause();
    $video.currentTime = 0;  
    $progress.value = 0;
})
