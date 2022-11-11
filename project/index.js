const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");



const generatePara = () => {
   let words = input.value
   
   const para = document.createElement("p")
   para.innerText = words;
   para.setAttribute("class", "paras")

   container.appendChild(para)
};


const deletepara = () => {

    const para = document.querySelector("p");
    if(para == null) return false
    para.remove()
    console.log("deleting")
}

