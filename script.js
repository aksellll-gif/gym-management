window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });

 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show-animate');
        } else {
            entry.target.classList.remove('show-animate');
        }

    });
 });

 const hiddenElements = document.querySelectorAll('.mid, .t-up, .himage, .sec-image, .sec-image2, .himage2, .daily, .packages, .pic, .one, .two2, .three3, .four4, .five5');
hiddenElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset;
        let parallaxElement = document.querySelector('.navbar');
        parallaxElement.style.backgroundPositionY = scrollPosition * 0.7 + 'px'; 
      });
      window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset;
        let parallaxElement = document.querySelector('.ones, .sec');
        parallaxElement.style.backgroundPositionY = (scrollPosition - parallaxElement.offsetTop) - 150 + 'px';
    });

     //Modal
    function openModal() {
        document.getElementById('signupModal').style.display = 'block';
      }
    
      
      function closeModal() {
        document.getElementById('signupModal').style.display = 'none';
      }
    
     
      window.onclick = function(event) {
        var modal = document.getElementById('signupModal');
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

     


    