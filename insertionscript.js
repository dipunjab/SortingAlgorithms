const insertioncontainer = document.getElementById("insertionSortContainer")
const insertionsortbtn = document.getElementById("insertionSortbtn")
const insertioninitbtn = document.getElementById("insertioninitbtn")

let n3 = 30
let insertionarr = []
let insertionAnimation;
//
const insertionanimate = (swaps) => {
    let i = 0;
    const animationtime = () => {
        if (swaps && i < swaps.length) {
            const [a, b] = swaps[i];
            [insertionarr[a], insertionarr[b]] = [insertionarr[b], insertionarr[a]];
            insertionupdatebars(insertionarr,b); 
            i++;
            insertionAnimation=setTimeout(animationtime,100)
        } 
};
animationtime()
};
//
const insertionshowbars = ()=>{
    for (let i = 0; i < n3; i++) {
        insertionarr[i] = Math.random()   
    }
    insertionupdatebars(insertionarr)
    clearTimeout(insertionAnimation);
};
//
const insertionupdatebars = (array, currI)=>{
    insertioncontainer.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        let bars = document.createElement("div")
        bars.style.height =  array[i]*100+"%"
        bars.classList.add("bars")
        if(i===currI){
            bars.style.backgroundColor = "#447bad"
        }
        insertioncontainer.appendChild(bars)
    }
};
//
const insertion = (array) => {
    let swaps = []
    let key;
    let j;
    for (let i = 1; i < array.length; i++) {
       key = array[i]
       j=i-1
       while(j>=0 && array[j] > key){
        swaps.push([j,j+1])
        array[j+1] = array[j]
        j--;
       }
       array[j+1] = key
    }
    insertionanimate(swaps)
    return array
};
//
insertionsortbtn.addEventListener("click", ()=>{
    console.log(insertion([...insertionarr]))
})
insertioninitbtn.addEventListener("click",()=>{
    insertionshowbars();
})
insertionshowbars()