// link : - https://api.unsplash.com/search/photos?query=${value}&per_page&Client-ID YOUR_ACCESS_KEY
//link https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=4WwJ7hEVgs6HWDcnSFBlWxO3mModg19Y_7TYzryQkDE

const API = "4WwJ7hEVgs6HWDcnSFBlWxO3mModg19Y_7TYzryQkDE"

import { navbar } from "../components/navbar.js";

let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar()

///import data from fetch
import {searchImages,append,searchImagesLetest,searchImagesCategory} from "./fetch.js";


///  fetch and event liya  isme keydown event use kiya
let search = (e)=>{
    if(e.key == "Enter"){
        let value = document.getElementById("query").value ;

        searchImages(API,value).then((data)=>{
            console.log(data,"my data")
            let container = document.getElementById("container")
            container.innerHTML = null;
            append(data.results,container)
        });
    }
}

document.getElementById("query").addEventListener("keydown",search);


let latest= (e)=>{
    let sort = document.getElementById("select1").value
    let filter = document.getElementById("filter").value
    let value = document.getElementById("query").value

    searchImagesLetest(API,value,sort,filter).then((data)=>{
        console.log(data,"filter data")
        let container = document.getElementById("container")
        container.innerHTML = null;
        append(data.results,container)

    })
   
}



// using latest filter
document.getElementById("select").addEventListener("click",latest)


let category = document.getElementById("category").children;
console.log(category)



/// arrrow function mt use krna is category section ke liye vo return porperty nhi dega

function cSearch(){
    console.log(this.id)
    
    searchImages(API,this.id).then((data)=>{
        console.log(data,"my data")
        let container = document.getElementById("container")
        container.innerHTML = null;
        append(data.results,container)
    });
}

for(let el of category ){
    el.addEventListener("click",cSearch)
}

// let searchImages= async ()=>{
//     // let value = document.getElementById("query").value ;

//     // try{
//     //     let res = await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`)
//     //     let data = await res.json()
//     //     console.log(data,"this is my data")
         
       
//     //        }catch(err){
//     //            console.log(err)
//     //        }
 
// }