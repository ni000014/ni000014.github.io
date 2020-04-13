function myFunction() {
    var x = document.getElementById("links");
    let icon = document.querySelector('.icon')
    if (x.style.display === "block") {
      x.style.display = "none";

      icon.style.height = '40px'
      icon.style.width = '40px'
    } else {
      x.style.display = "block";

      icon.style.height = '20px'
      icon.style.width = '20px'
    }
  }