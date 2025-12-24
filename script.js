const gallery = document.getElementById("gallery");
const galleryContent = document.getElementById("galleryContent");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");

function openGallery(type){
  galleryContent.innerHTML = "";
  let imgs = [];

  if(type==="photo"){
    imgs=["images/photo/p1.jpeg","images/photo/p2.jpeg","images/photo/p3.jpeg"];
  }
  if(type==="video"){
    imgs=["images/video/v1.jpg","images/video/v2.jpg"];
  }
  if(type==="insta"){
    imgs=["images/insta/i1.jpg","images/insta/i2.jpg"];
  }
  if(type==="youtube"){
    imgs=["images/youtube/y1.jpg","images/youtube/y2.jpg"];
  }

imgs.forEach(src=>{
  const wrap = document.createElement("div");
  wrap.className = "img-wrap";

  const img = document.createElement("img");
  img.src = src;

  const overlay = document.createElement("div");
  overlay.className = "img-overlay";
  overlay.innerText = "VIEW";

  wrap.appendChild(img);
  wrap.appendChild(overlay);

  wrap.onclick = ()=>openViewer(src);
  galleryContent.appendChild(wrap);
});


  gallery.classList.remove("hidden");
}

function closeGallery(){
  gallery.classList.add("hidden");
}

function openViewer(src){
  viewerImg.src=src;
  viewer.classList.remove("hidden");
}

function closeViewer(){
  viewer.classList.add("hidden");
}
galleryContent.addEventListener("mousemove", e=>{
  const card = e.target.closest(".img-wrap");
  if(!card) return;

  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = -(y / rect.height - 0.5) * 8;
  const rotateY = (x / rect.width - 0.5) * 8;

  card.style.transform =
    `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

galleryContent.addEventListener("mouseleave", ()=>{
  document.querySelectorAll(".img-wrap").forEach(card=>{
    card.style.transform="";
  });
});


