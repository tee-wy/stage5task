const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
 if (window.pageYOffset > 100) {
  nav.classList.add('bg-dark', 'shadow');
 } else {
  nav.classList.remove('bg-dark', 'shadow');
 }
});

let dogName = [
  {
    dog_img: "image1",
    name: "MAX",
    price: "$20",
  },
  {
    dog_img: "image2",
    name: "KOBE",
    price: "$25",
  },
  {
    dog_img: "image3",
    name: "OSCAR",
    price: "$30",
  },
  {
    dog_img: "image4",
    name: "COOPER",
    price: "$35",
  },
  {
    dog_img: "image5",
    name: "OAKLEY",
    price: "$40",
  },
  {
    dog_img: "image6",
    name: "RUDY",
    price: "$45",
  },
  {
    dog_img: "image7",
    name: "CHIP",
    price: "$50",
  },
  {
    dog_img: "image8",
    name: "CASH",
    price: "$55",
  },
  {
    dog_img: "image9",
    name: "BLAZE",
    price: "$65",
  },
  {
    dog_img: "image10",
    name: "BO",
    price: "$87",
  },
  {
    dog_img: "image11",
    name: "BOOMER",
    price: "$90",
  },
  {
    dog_img: "image12",
    name: "OLLIE",
    price: "$100",
  },
];

// displaying an array on the DOM
let dogSection = document.getElementById('dog_gallery');
let html = ""; 

dogName.forEach(e => {
  html += `
            <div class="col-12 col-lg-4 col-md-4">
              <div class="card m-2 align-items-center justify-content-center">
                <img src="images/${e.dog_img}.jpg" class="card-img-top" alt="image">
                <class="card-body pt-2>
                  <h5 class="name">${e.name}</h5>
                  <p class="card-text">${e.price}</p>
                  <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
        `;
 dogSection.innerHTML = html;
})




