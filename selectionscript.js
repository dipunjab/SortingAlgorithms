let selectionSortContainer = document.getElementById("selectionSortContainer");
let selectionSortbtn = document.getElementById("selectionSortbtn");
let selectioninitbtn = document.getElementById("selectioninitbtn");

let n1 = 30; 
let selectionarr = [];
let selectionAnimation;

const selectionanimate = (swaps) => {
    let i = 0;
    const animationtime = () => {
        if (swaps && i < swaps.length) {
            const [a, b] = swaps[i];
            [selectionarr[a], selectionarr[b]] = [selectionarr[b], selectionarr[a]];
            selectionupdatebars(selectionarr,a, b);
            i++;
            selectionAnimation = setTimeout(animationtime, 200);
        }
    };
    animationtime();
};

const selectionshowbars = () => {
    for (let i = 0; i < n1; i++) {
        selectionarr[i] = Math.random();
    }
    selectionupdatebars(selectionarr);
    clearTimeout(selectionAnimation);
};

const selectionupdatebars = (array, currI,nextI) => {
    selectionSortContainer.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let bars = document.createElement("div");
        bars.style.height = array[i] * 100 + "100%";
        bars.classList.add("bars");
        if (i === currI||i === nextI) {
            bars.style.backgroundColor = "#447bad";
        }
        selectionSortContainer.appendChild(bars);
    }
};

const selection = (array) => {
    let swaps = [];
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swaps.push([i, minIndex]);
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    selectionanimate(swaps);
    return array;
};

selectionSortbtn.addEventListener("click", () => {
    selection([...selectionarr]);
});

selectioninitbtn.addEventListener("click", () => {
    selectionshowbars();
});

selectionshowbars();
