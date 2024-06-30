// Notifikasi
window.scrollTo(0, 0);

let isTabActive = true;
let interactionDetected = false;
let remainingTime = 20000; // 20 detik
let timer;
let notificationDismissed = false;

// Overlay
function showOverlay() {
    document.getElementById('overlay').style.display = 'block';
    document.body.classList.add('modal-open');
}

function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.body.classList.remove('modal-open');
}

// Custom alert

function myNotif(msg) {
    const notifikasi = document.querySelector('.notification');
    const notif = document.querySelector('.notifBox');
    const notifMsg = document.querySelector('.notifTxt');

    if (notif && notifMsg) {
        notifMsg.textContent = msg;
        notifikasi.classList.add('active');
        notif.classList.add('active');
    }
}

function startTimer() {
    if (notificationDismissed) return;

    // Jika timer sudah berjalan, hentikan dulu
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
        if (isTabActive && interactionDetected) {
            myNotif('Anda terlihat menikmati website ini, apakah ingin menjelajah lainnya?');
        }
    }, remainingTime);
}

function pauseTimer() {
    clearTimeout(timer);
    timer = null;
}

window.onfocus = () => {
    isTabActive = true;
    if (interactionDetected && !notificationDismissed) startTimer();
};

window.onblur = () => {
    isTabActive = false;
    pauseTimer();
};

document.addEventListener('mousemove', () => {
    if (!interactionDetected) {
        interactionDetected = true;
        if (isTabActive && !notificationDismissed) startTimer();
    }
});

document.addEventListener('keydown', () => {
    if (!interactionDetected) {
        interactionDetected = true;
        if (isTabActive && !notificationDismissed) startTimer();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    const yesBtn = document.querySelector('.yesNotifBtn');
    const noBtn = document.querySelector('.noNotifBtn');
    const showProject = document.querySelector('.showMoreProject');

    yesBtn.addEventListener('click', function() {
        showProject.classList.add('active');
        pauseTimer();
        notificationDismissed = true;
        const notif = document.querySelector('.notifBox');    
        const notifikasi = document.querySelector('.notification');
        notifikasi.classList.remove('active');
        notif.classList.remove('active');
        showOverlay();
    });
    noBtn.addEventListener('click', function() {
        pauseTimer();
        notificationDismissed = true;
        const notif = document.querySelector('.notifBox');    
        const notifikasi = document.querySelector('.notification');
        notifikasi.classList.remove('active');
        notif.classList.remove('active');
        hideOverlay();
    });
});

startTimer(); // Mulai timer ketika halaman dimuat

// Show project


document.addEventListener('DOMContentLoaded', function() {
    const downAngle = document.querySelector('.downAngle');
    const showProject = document.querySelector('.showMoreProject');
    const toDoList = document.querySelector('.toDoList');
    const teslaWebClone = document.querySelector('.teslaWebClone');
    
    checkWindowSize();

    downAngle.addEventListener('click', function() {
        showProject.classList.add('down');
        hideOverlay();
    });
    
    toDoList.addEventListener('mouseover', function() {
        teslaWebClone.style.opacity = ".8";
        toDoList.style.transform = "scale(1.1)";
        teslaWebClone.style.transform = "scale(.9)";
    });
    
    toDoList.addEventListener('mouseleave', function() {
        toDoList.style.transform = "scale(1)";
        teslaWebClone.style.transform = "scale(1)";
        teslaWebClone.style.opacity = "1";
    });
    
    toDoList.addEventListener('click', function() {
        window.open('https://seriie.github.io/ToDoList');
    });

    teslaWebClone.addEventListener('mouseover', function() {
        toDoList.style.opacity = ".5";
        teslaWebClone.style.transform = "scale(1.1)";
        toDoList.style.transform = "scale(.9)";
    });
    
    teslaWebClone.addEventListener('mouseleave', function() {
        teslaWebClone.style.transform = "scale(1)";
        toDoList.style.transform = "scale(1)";
        toDoList.style.opacity = "1";
    });
    
    teslaWebClone.addEventListener('click', function() {
        window.open('https://seriie.github.io/TeslaWebClone');
    });

    function checkWindowSize() {
        const showProject = document.querySelector('.showMoreProject');
        downAngle.addEventListener('click', function() {
            if (window.innerWidth <= 520) {
                showProject.style.transform = 'translateX(-200%)';
            }
        });
    }
});



// Open nav

function openNav() {
    document.querySelector(".sidenav").style.width = "250px";
    document.querySelector(".sidenav").style.border = "2px solid #00ff00";
    document.querySelector(".sidenav").style.height = "250px";
    document.querySelector(".main-content").style.marginLeft = "250px";
}

function closeNav() {
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector(".sidenav").style.border = "0";
    document.querySelector(".sidenav").style.height = "0";
    document.querySelector(".main-content").style.marginLeft = "0";
}

function changeBorder() {
    const checkbox = document.getElementById('toggleBorder');
    const  img = document.querySelector('.image.anya img');
    const isBordered = img.classList.toggle('active');
    if (isBordered) {
      localStorage.setItem("border", "bordered");
    } else {
      localStorage.setItem("theme", "notBordered");
    }
    
    checkbox.checked = isBordered;
  }
  
  window.onload = function() {
    const checkbox = document.getElementById('toggleBorder');
    const img = document.querySelector('.image.anya img');
    
    if (localStorage.getItem("border") === 'bordered' || (!('border' in localStorage))) {
      img.classList.add('active');
      checkbox.checked = true;
    } else {
      img.classList.remove('active');
      checkbox.checked = false;
    }
  }
  
//   function changeBorder() {
//     const checkbox = document.getElementById('toggleBorder');
//     const img = document.querySelector('.image img');
//     const isBordered = img.classList.toggle('active');
  
//     if (isBordered) {
//       localStorage.setItem("border", "bordered");
//     } else {
//       localStorage.setItem("border", "notBordered");
//     }
  
//     checkbox.checked = isBordered;
//   }
  
//   window.onload = function() {
//     const checkbox = document.getElementById('toggleBorder');
//     const img = document.querySelector('.image img');
  
//     if (localStorage.getItem("border") === 'bordered') {
//       img.classList.add('active');
//       checkbox.checked = true;
//     } else {
//       img.classList.remove('active');
//       checkbox.checked = false;
//     }
//   }  

function slideImagOff() {
    img = document.querySelector('.image.anya');

    img.style.display = "None";
}

function slideImagOnn() {
    img = document.querySelector('.image.anya');

    img.style.display = "block";
}

function slideTextOff() {
    text = document.querySelector('.text.anya');
    
    text.style.display = "none";
}

function slideTextOnn() {
    text = document.querySelector('.text.anya');

    text.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    showLoading();
    slideTextOff();
    slideImagOff();
});

window.addEventListener('load', function() {
    window.scrollTo(0, 0);
    hideLoading();
    slideTextOnn();
    slideImagOnn();
});

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    var images = [
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcSeXIFrnCQUJnSEUKgew2Mox335dyb2qr3Utg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcQfgygT1zjZzhVCAa2l0vD1NK8H03PDy04D-g&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcT4qox2bLAe7OOUEeZ24ntqUckvBKeGF00ouw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcRI13J7BkX-Ikn1DvdLLx9d0r7DWHxx-lOCWg&usqp=CAU',
        // '/LiaImut/LiaImut.jpg',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcT2XWYlXo-M08FYYHyDgiiIUruno9bOzJN6SA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcRO-ALVQ1amP67jjQbGMhCKER3zdo7dmCTbxw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcRyD3a57mx-yoMaZYvKLU0HqWy1zKfkFZPnbg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcSaqH57r55NRstO_ptxQgrvrUz3OiUxS5R-gA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcRYx4TFnP9v1nHG0tTLJfC4hQ5-jGj3cV2vWA&usqp=CAU',
        // '/LiaImut/F.jpg',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcR6YTpzhFOfyjdfSm49jqAPp8_MbiLNXIW18g&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcSYCdUsmFyCPFw-clu_5k9tYpZOuaKSCIAIsg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcSPSmr-Pfw-HJ9CMsUCg6OvDMmal8hJ-CBadg&usqp=CAU',
        'https://i.pinimg.com/736x/c9/1b/12/c91b12ac7937f2a4292f22f98ea7887b.jpg',
        'https://i.pinimg.com/originals/d0/d1/5c/d0d15ceac80e4a91a9024827972e6607.jpg',
        'https://i.pinimg.com/736x/b1/1a/41/b11a413767e87d19a96bf7126c4ba6ce.jpg',
        'https://encrypted-tbn0.gstatic.com/images.jpg?q=tbn:ANd9GcRalIHYgKO4ikf8yEts9WqNpUPnU0KWzjFZVg&usqp=CAU'
    ];

    var img = document.querySelector('.img');

    // setInterval(function() {
    //     var randomIndex = Math.floor(Math.random() * images.length);
    //     img.src = images[randomIndex];
    // }, 200);
    var randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
    
    img.addEventListener('click', function() {
        var currentIndex = images.indexOf(img.src);
        var imageUrl = images[currentIndex];
        window.open(imageUrl, '_blank');
    });

    // Eventlistener untuk tooltip
    const viewAnya = document.querySelector('.anyaTooltip .option .viewAnya');
    
    viewAnya.addEventListener('click', function() {
        var currentIndex = images.indexOf(img.src);
        var imageUrl = images[currentIndex];
        window.open(imageUrl, '_blank');
    });

    document.addEventListener('contextmenu', function(e) {
        if(e.target.classList.contains('img')) {
            e.preventDefault()
        }
    }, false);

    document.addEventListener('contextmenu', function () {
        imageUrl[currentIndex].preventDefault();
    });

});

function showLoading() {
    document.getElementById("loadingContainer").style.display = "flex";
}

function hideLoading() {
    document.getElementById("loadingContainer").style.display = "none";
}

function simulateTimeConsumingAction() {
    showLoading();
    setTimeout(() => {
        hideLoading();
    }, 3000);
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var scrollToTopContainer = document.getElementById("scrollToTopContainer");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopContainer.style.display = "block";
    } else {
        scrollToTopContainer.style.display = "none";
    }
}

function scrollToTop() {
    var scrollStep = -window.scrollY / (200 / 10);
    
    function animateScroll() {
        window.scrollBy(0, scrollStep);

        if (window.scrollY <= 0) {
            scrollToTopContainer.style.display = "none";
            window.onscroll = function () {
                scrollFunction();
            };
            return;
        }
        
        requestAnimationFrame(animateScroll);
    }

    animateScroll();
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    document.querySelectorAll('a[href^="#About"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'end'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    document.querySelectorAll('a[href^="#Porch"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'end'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    document.querySelectorAll('a[href^="#Portfolio"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    document.querySelectorAll('a[href^="#Support"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    document.querySelectorAll('a[href^="#Contact"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                });
            }
        });
    });
});

function refresh() {
    location.reload();
}

document.addEventListener('keydown', function(event) {
    return event.altKey && event.code === 'KeyR' ? refresh() : null;
})

document.addEventListener('keydown', function(event) {
    if(event.altKey && event.code === 'KeyS') {
        scrollToTop();
    }
});

document.addEventListener("scroll", function() {
    var project = document.querySelector('.project');
    var position = project.getBoundingClientRect();

    if (position.top <= window.innerHeight * 0.95) {
        project.style.opacity = "1";
        project.style.transform = "scale(1)";
        project.style.backgroundColor = "transparent";
        project.style.borderRadius = "10px";
    }
});

document.addEventListener("scroll", function() {
    var client = document.querySelector('.client');
    var position = client.getBoundingClientRect();

    if (position.top <= window.innerHeight * 0.65) {
        client.style.opacity = "1";
    }
});

document.addEventListener("scroll", function() {
    var about = document.querySelector('.about');
    var position = about.getBoundingClientRect();

    if(position.top <= window.innerHeight * 0.35) {
        about.style.transform = "translateX(0)";
        about.style.opacity = "1";
    }
});

document.addEventListener("scroll", function() {
    var connect = document.querySelector('.connect');
    var position =  connect.getBoundingClientRect();

    if(position.top <= window.innerHeight * 0.40) {
        connect.style.transform = "translateX(0)";
        connect.style.opacity = "1";
    }
});