var reviews = [
    {
      id: 1,
      name: "Jones ",
      job: "web developer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "David",
      job: "web designer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Adam",
      job: "intern",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Paul Walker",
      job: "the boss",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  

  var about = [
    {
        id:1,
        name: "Im google"
    },
    {
      id:2,
      about: "Im amazon"
  },
  {
      id:3,
      about: "Im razorpay"
  },
  {
      id:4,
      about: "Im paypal"
  }
]
 /*  var imgElement = document.getElementById("person-img");
  var author = document.getElementById("author");
  var job = document.getElementById("job");
  var info = document.getElementById("info");
  var prevBtn = document.querySelector(".prev-btn");
  var nextBtn = document.querySelector(".next-btn");
  var randomBtn = document.querySelector(".random-btn");
   */
  //reviews = [ {}, {} , {}]
  
  //var currentIndex = 2;
  
 // prevBtn.addEventListener("click", prevClick);
 // nextBtn.addEventListener("click", nextClick);
 // randomBtn.addEventListener("click", randomaize);
  
 /*  updateUserDetails();
  function updateUserDetails() {
    imgElement.src = reviews[currentIndex].img;
    author.innerText = reviews[currentIndex].name;
    job.innerText = reviews[currentIndex].job;
    info.innerText = reviews[currentIndex].text;
  } */
 /*  function update_about(){
    at.innetText = about
  } */
  var counter = 0;
  var para = document.getElementById("sarah");
  para.addEventListener("click", update);
console.log("Hyy")
function update(){
  para.innerText = about[counter].name;
  document.write(para);
}