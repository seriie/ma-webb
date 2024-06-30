// document.addEventListener('DOMContentLoaded', function() {
//     const cursor = document.querySelector(".cursorCustom");
    
//     document.body.style.cursor = 'none';
//     const colors = [
//         'rgba(255, 15, 15)',    // Merah terang
//         'rgba(15, 255, 15)',    // Hijau terang
//         'rgba(15, 15, 255)',    // Biru terang
//         'rgba(255, 255, 15)',   // Kuning terang
//         'rgba(15, 255, 255)',   // Cyan terang
//         'rgba(255, 15, 255)',   // Magenta terang
//         'rgba(255, 165, 0)',    // Jingga
//         'rgba(0, 128, 0)',      // Hijau tua
//         'rgba(0, 0, 128)',      // Biru tua
//         'rgba(128, 0, 128)',    // Ungu
//         'rgba(128, 128, 0)',    // Cokelat
//         'rgba(0, 128, 128)'     // Cyan tua
//     ];

//     const randomColors = Math.floor(Math.random() * colors.length);    

//     const shadows = [
//         'rgba(0, 0, 0, 0.5)',    // Bayangan hitam dengan transparansi
//         'rgba(128, 128, 128)',   // Bayangan abu-abu
//         'rgba(255, 0, 0)',       // Bayangan merah
//         'rgba(0, 255, 0)',       // Bayangan hijau
//         'rgba(0, 0, 255)',       // Bayangan biru
//         'rgba(255, 255, 255)',   // Bayangan putih
//         'rgba(255, 165, 0)',     // Bayangan jingga
//         'rgba(255, 192, 203)',   // Bayangan pink
//         'rgba(255, 255, 0)',     // Bayangan kuning
//         'rgba(0, 128, 128)',     // Bayangan cyan tua
//         'rgba(139, 69, 19)'      // Bayangan coklat
//     ];

//     const randomShadows = Math.floor(Math.random() * shadows.length);
    
//     document.addEventListener('mousemove', function(event) {
//         cursor.style.top = `${event.pageY}px`;
//         cursor.style.left = `${event.pageX}px`;
//         cursor.style.display = "block";
//         cursor.style.backgroundColor =  colors[randomColors];
//         cursor.style.boxShadow = `0 0 8px 3px ${shadows[randomShadows]}`;
//     });
    
//     document.addEventListener('mouseout', function() {
//         cursor.style.display = "none";
//     });
// });