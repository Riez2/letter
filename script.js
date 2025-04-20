document.querySelector('.box').addEventListener('click', () => {
    const message = document.querySelector('.box-message');
    message.classList.add('show');

    setTimeout(() => {
      window.location.href = "message.html";
    }, 2000);
  });


    // document.addEventListener("DOMContentLoaded", function () {
    //     const floatContainer = document.getElementById('floating-image');
    //     const imageSources = [
    //       'images/1.jpg',
    //       'images/2.jpg',
    //       'images/3.jpg',
    //       'images/4.jpg',
    //       'images/5.jpg',
    //       'images/6.jpg',
    //       'images/7.jpg',
    //       'images/8.jpg',
    //       'images/9.jpg',
    //       'images/10.jpg',
    //       'images/11.jpg',
    //       'images/12.jpg'
    
    //     ];
        
    //     function createFloatingImage() {
    //         const img = document.createElement('img');
    //         img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
    //         img.classList.add('floating-img');
      
    //         // Random left position and start at bottom
    //         img.style.left = Math.random() * 100 + 'vw';
    //         img.style.top = '100vh';
      
    //         floatContainer.appendChild(img);
      
    //         // Remove after animation ends
    //         setTimeout(() => {
    //           img.remove();
    //         }, 8000);
    //       }
      
    //       setInterval(createFloatingImage, 600);
    // });
      
    // console.log("Floating image script loaded");