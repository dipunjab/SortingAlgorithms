let mergeSortContainer = document.getElementById("mergeSortContainer");
let mergeSortbtn = document.getElementById("mergeSortbtn");
let mergeinitbtn = document.getElementById("mergeinitbtn");

let mergen1 = 30; 
let mergearr = [];
let mergeAnimation;

const mergeanimate = (swaps) => {
    clearTimeout(mergeAnimation);
    let i = 0;
    const animationtime = () => {
        if (swaps && i < swaps.length) {
            const [a, b] = swaps[i];
            [mergearr[a], mergearr[b]] = [mergearr[b], mergearr[a]];
            mergeupdatebars(mergearr,a);
            i++;
            mergeAnimation = setTimeout(animationtime, 200);
        }
    };
    animationtime();
};

const mergeshowbars = () => {
    for (let i = 0; i < mergen1; i++) {
        mergearr[i] = Math.random();
    }
    mergeupdatebars(mergearr);
    clearTimeout(mergeAnimation);
};

const mergeupdatebars = (array, currI,) => {
    mergeSortContainer.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let bars = document.createElement("div");
        bars.style.height = array[i] * 100 + "%";
        bars.classList.add("bars");
        if (i === currI) {
            bars.style.backgroundColor = "#447bad";
        }
        mergeSortContainer.appendChild(bars);
    }
};
const merge = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        const mid = Math.floor((low + high) / 2);
        merge(array, low, mid);
        merge(array, mid + 1, high);
        mergeMerge(array, low, mid, high);
    }
    return array;
};

const mergeMerge = (array, low, mid, high) => {
    let swaps = []
    let left = array.slice(low, mid + 1);
    let right = array.slice(mid + 1, high + 1);
    let i = 0,
        j = 0,
        k = low;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            array[k++] = left[i++];
        } else {
            array[k++] = right[j++];
        }
    }

    while (i < left.length) {
        array[k++] = left[i++];
    }

    while (j < right.length) {
        array[k++] = right[j++];
    }
    for (let index = low; index <= high; index++) {
        swaps.push([index, array[index]]);
    }

    mergeanimate(swaps);
    return array;
};

mergeSortbtn.addEventListener("click", () => {
   console.log(merge([...mergearr]));
});

mergeinitbtn.addEventListener("click", () => {
    mergeshowbars();
});

mergeshowbars();
