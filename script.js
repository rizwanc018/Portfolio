const lines = document.querySelectorAll('.line');
const brwsrVp = document.querySelector('.brwsr-vp');
const nav = document.querySelector('.nav');
const starContainer = document.querySelector('.star-container ');
const planetContainer = document.querySelector('.planet-container');
const shootingstarContainer = document.querySelector('.shootingStar-container');
const intro = document.querySelector('.intro');
const time = 10
let count = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function show(children) {
    for (child of children) {
        child.classList.add("show")
        await sleep(time)
    }
}

async function removeHideClass(count) {
    switch (count) {
        case 10:
            await sleep(time * time)
            brwsrVp.classList.remove('hide')
            break
        case 30:
            await sleep(time * time)
            starContainer.classList.remove('hide')
            break
        case 40:
            await sleep(time * time)
            planetContainer.classList.remove('hide')
            break
        case 50:
            await sleep(time * time)
            shootingstarContainer.classList.remove('hide')
            break
        case 20:
            await sleep(time * time)
            intro.classList.remove('hide')
            await sleep(time * time)
            nav.classList.remove('hide')
            break
    }
}

async function loop(lines) {
    for (let i = 0; i < lines.length; i++) {
        let children = lines[i].children;
        let l = children.length;
        await sleep(time + (l * time))
        count++
        removeHideClass(count)
        show(children)
    }
}

loop(lines);