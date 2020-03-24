//MUSIC

function changeAlbum1() {
  document.getElementById("OriginalSpotify").src = "https://open.spotify.com/embed/album/5nM9xE7PbLZHI20GSeal61";
}

function changeAlbum2() {
  document.getElementById("OriginalSpotify").src = "https://open.spotify.com/embed/album/6WWknNKqLZgqVuZNsSFJvT";
}

function changeAlbum3() {
  document.getElementById("OriginalSpotify").src = "https://open.spotify.com/embed/album/0R0eCcwbLD7HLzMkOhYO2v";
}

function changeAlbum4() {
  document.getElementById("OriginalSpotify").src = "https://open.spotify.com/embed/album/2CRb4liorcEHuTDkLfsaAx";
}

function mostPopular() {
  document.getElementById("OriginalSpotify").src = "https://open.spotify.com/embed/artist/6E9zde1CFsBtKI66OEHkk3";
}

// SIDENAV BUTTON


function openNav() {
  if (screen.width >= 1200) {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("pushbutton").style.marginLeft = "250px";
  document.getElementById("squash-container").style.marginLeft = "22%";
} else if (screen.width < 1199) {
  document.getElementById("mySidebar").style.width = "100%";
  }
};



function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("pushbutton").style.marginLeft = "0";
  document.getElementById("squash-container").style.marginLeft = "5%";
  document.getElementById("squash-contact").style.marginLeft = "5%";
}





//MODAL IMAGES//

// Get the modal
var modal = document.getElementById("myModal");


var img = document.getElementById("jonny-img");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}
