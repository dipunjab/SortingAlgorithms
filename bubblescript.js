const container = document.getElementById("bubbleSortContainer")
const bubblesortbtn = document.getElementById("bubblesortbtn")
const bubbleinitbtn = document.getElementById("bubbleinitbtn")

let n = 30
let arr = []
let currentAnimation;
//
const animate = (swaps) => {
    let i = 0;
    const animationtime = () => {
        if (swaps && i < swaps.length) {
            const [a, b] = swaps[i];
            [arr[a], arr[b]] = [arr[b], arr[a]];
            updatebars(arr,b); 
            i++;
             currentAnimation=setTimeout(animationtime,100)
        } 
};
animationtime()
};
//
const showbars = ()=>{
    for (let i = 0; i < n; i++) {
        arr[i] = Math.random()   
    }
    updatebars(arr)
    clearTimeout(currentAnimation);
};
//
const updatebars = (array, currI)=>{
    container.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        let bars = document.createElement("div")
        bars.style.height =  array[i]*100+"100%"
        bars.classList.add("bars")
        if(i===currI){
            bars.style.backgroundColor = "#447bad"
        }
        container.appendChild(bars)
    }
};
//
const bubble = (array) => {
    let swaps = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swaps.push([j, j + 1]);
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    animate(swaps);
    return array;
};
//
bubblesortbtn.addEventListener("click", ()=>{
    bubble([...arr])
})
bubbleinitbtn.addEventListener("click",()=>{
    showbars();
})
showbars()