const clientImg = document.querySelector('img');
const clientName = document.querySelector('.client-name');
const clientTitle = document.querySelector('.client-title');
const clientReview = document.querySelector('.client-review');

const rightArrow = document.querySelector('.point-right');
const leftArrow = document.querySelector('.point-left');
const randomizeBtn = document.querySelector('.randomize-btn');

const clientInformationArr = [
    {
        id: 1,
        name: 'Theodore Benny',
        title: 'GAGET TESTER',
        img: 'images/portrait-man-goofy-face.jpg',
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        id: 2,
        name: 'Ginny & Kevin Bluester',
        title: 'SLOTH OWNERS',
        img: 'images/weird-couple-with-slot-portrait.jpg',
        review: `Quis vel eros donec ac odio tempor orci dapibus ultrices. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Eu lobortis elementum nibh tellus molestie. Elementum integer enim neque volutpat ac tincidunt vitae.`,
    },
    {
        id: 3,
        name: 'Avery Maxwell',
        title: 'WEB DEVELOPER',
        img: 'images/avery-headshot.jpg',
        review: `Pulvinar pellentesque habitant morbi tristique. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Id porta nibh venenatis cras sed. Est placerat in egestas erat imperdiet sed euismod nisi porta.`,
    },
]

window.addEventListener('load', () => {
    clientName.innerText = clientInformationArr[0].name;
    clientTitle.innerText = clientInformationArr[0].title;
    clientReview.innerText = clientInformationArr[0].review;
    clientImg.src = clientInformationArr[0].img;
})

const nextReview = () => {
    let currentIndex = clientInformationArr.findIndex((index) => index.name == clientName.innerText.toString());
    console.log(currentIndex);
    if (currentIndex >= clientInformationArr.length - 1) {
        currentIndex = 0;
        clientName.innerText = clientInformationArr[currentIndex].name;
        clientTitle.innerText = clientInformationArr[currentIndex].title;
        clientReview.innerText = clientInformationArr[currentIndex].review;
        clientImg.src = clientInformationArr[currentIndex].img;
    } else {
        ++currentIndex;
        clientName.innerText = clientInformationArr[currentIndex].name;
        clientTitle.innerText = clientInformationArr[currentIndex].title;
        clientReview.innerText = clientInformationArr[currentIndex].review;
        clientImg.src = clientInformationArr[currentIndex].img;
    }
}

rightArrow.addEventListener('click', nextReview);

const prevReview = () => {
    let currentIndex = clientInformationArr.findIndex((index) => index.name == clientName.innerText.toString());
    console.log(currentIndex);
    if (currentIndex < 0) {
        currentIndex = 0;
        clientName.innerText = clientInformationArr[currentIndex].name;
        clientTitle.innerText = clientInformationArr[currentIndex].title;
        clientReview.innerText = clientInformationArr[currentIndex].review;
        clientImg.src = clientInformationArr[currentIndex].img;
    } else if (currentIndex == 0) {
        currentIndex = clientInformationArr.length - 1;
        clientName.innerText = clientInformationArr[currentIndex].name;
        clientTitle.innerText = clientInformationArr[currentIndex].title;
        clientReview.innerText = clientInformationArr[currentIndex].review;
        clientImg.src = clientInformationArr[currentIndex].img;
    } else {
        --currentIndex;
        clientName.innerText = clientInformationArr[currentIndex].name;
        clientTitle.innerText = clientInformationArr[currentIndex].title;
        clientReview.innerText = clientInformationArr[currentIndex].review;
        clientImg.src = clientInformationArr[currentIndex].img;
    }
}

leftArrow.addEventListener('click', prevReview);

const randomReview = () => {
    let ranNum = Math.floor(Math.random() * clientInformationArr.length);
    let currentIndex = clientInformationArr.findIndex((index) => index.name == clientName.innerText.toString());
    if (ranNum == currentIndex) {
        if (ranNum == 0) {
            ++ranNum;
        } else if (ranNum == (clientInformationArr.length - 1) || ranNum > 0) {
            --ranNum;
        }
    }
    clientName.innerText = clientInformationArr[ranNum].name;
    clientTitle.innerText = clientInformationArr[ranNum].title;
    clientReview.innerText = clientInformationArr[ranNum].review;
    clientImg.src = clientInformationArr[ranNum].img;
}

randomizeBtn.addEventListener('click', randomReview);