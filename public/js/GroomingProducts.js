import { getFirestore, collection, getDocs, doc} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const db = getFirestore();

const blogSection = document.querySelector('.shop-content');



const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
            <div class="product-card">
            <img src="${data.ItemImage}" alt="food1" class="product-img">
            <h2 class="product-title">${data.name}</h2>
            <span class="price">Rs ${data.price}</span>
            <p>${data.description}</p>
            <div class="stars">
                <span class="material-symbols-outlined">grade</span>
                <span class="material-symbols-outlined">grade</span>
                <span class="material-symbols-outlined">grade</span>
                <span class="material-symbols-outlined">grade</span>
                <span class="material-symbols-outlined">grade</span>
            </div>
            <button class="addtocart">Add to cart</button> 
        </div>
    `;
}
const querySnapshot = await getDocs(collection(db,"grooming"));
querySnapshot.forEach((blog) => {
    if(blog.id != decodeURI(location.pathname.split("/").pop())){
        createBlog(blog);
    }
})


$(document).ready(function(){
    $('.shop').click(function(){
          $('.shopdropdown').toggleClass('dropdown_menu_show');
      });  
  });