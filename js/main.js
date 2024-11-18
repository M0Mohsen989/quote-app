// var nameInput =document.getElementById("productName")
// var priceInput =document.getElementById("productPrice")
// var imageInput =document.getElementById("productImage")
// var categoryInput =document.getElementById("productCategory")
// var saleInput =document.getElementById("productSale")
// var descInput =document.getElementById("productDescription")
// var searchInput =document.getElementById("searchproduct")
// var productlist=[]
// if (localStorage.getItem("data")!=null) {
//     productlist=JSON.parse(localStorage.getItem("data"))
//     display()
// }
// function addProduct(){
// var product ={
// title: nameInput.value,
// price: Number(priceInput.value),
// category : categoryInput.value,
// desc: descInput.value,
// sale:saleInput.checked,
// imagepath: imageInput.files[0]?.name,


// }
// productlist.push(product)
// localStorage.setItem("data",JSON.stringify(productlist))
// display()
// }

// function deleteProduct(x){
//     productlist.splice(x,1)
//     localStorage.setItem("data",JSON.stringify(productlist))
//     display()

// }

// function display(){
//     var temp= ""
//     for (var i = 0; i < productlist.length; i++) {
//       temp+=` <div class="col-md-3 col-sm-6">
//                 <div class="item border text-center">
//                     <img src="images/`+productlist[i].imagepath+`" class="w-100" alt="">
//                     <h5>index : `+i +` </h5>
//                     <h5>Name : `+productlist[i].title+` </h5>
//                     <h5>Price : `+productlist[i].price+`</h5>
//                     <h5>Category : `+productlist[i].category+`</h5>
//                     <h5>Sale : `+productlist[i].sale+`</h5>
//                     <p>`+productlist[i].desc+`</p>
//                     <button class="btn btn-outline-primary">update</button>
//                     <button onclick=" deleteProduct(`+i+`)"  class="btn btn-outline-danger">Delete</button>
//                 </div> 
//             </div>`
        
//     }
//     document.getElementById("myRow").innerHTML=temp
// }

// function search2(){
// var temp=""
// var searchData=searchInput.value.toLowerCase()
// for (var i = 0; i < productlist.length; i++) {
//     if (productlist[i].title.toLowerCase().includes(searchData)==true) {

//         temp+=` <div class="col-md-3 col-sm-6">
//                   <div class="item border text-center">
//                       <img src="images/`+productlist[i].imagepath+`" class="w-100" alt="">
//                       <h5>index : `+i +` </h5>
//                       <h5>Name : `+productlist[i].title+` </h5>
//                       <h5>Price : `+productlist[i].price+`</h5>
//                       <h5>Category : `+productlist[i].category+`</h5>
//                       <h5>Sale : `+productlist[i].sale+`</h5>
//                       <p>`+productlist[i].desc+`</p>
//                       <button class="btn btn-outline-primary">update</button>
//                       <button onclick=" deleteProduct(`+i+`)"  class="btn btn-outline-danger">Delete</button>
//                   </div> 
//               </div>`
          
//   }
    
// }

// document.getElementById("myRow").innerHTML=temp
// }


var arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote() {
  var temp= ""
  var randNumber =  Math.floor(Math.random() *arrayOfQuotes.length);
    temp+=  ` <p id="quoteOutput">`+arrayOfQuotes[randNumber].quote+`</p>
          <p id="authorOutput"> author : `+arrayOfQuotes[randNumber].author+`</p>`
      
  
  document.getElementById("quoteid").innerHTML=temp
    
}




// function display1(){
//     var temp= ""
//     for (var i = 0; i < arrayOfQuotes.length; i++) {
//       temp+=  ` <p id="quoteOutput">`+arrayOfQuotes[i].quote+`</p>
//             <p id="authorOutput">`+arrayOfQuotes[i].author+`</p>`
        
//     }
//     document.getElementById("quoteid").innerHTML=temp
// }