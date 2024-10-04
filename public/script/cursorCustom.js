document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector(".cursorCustom");
    const dotCursor = document.querySelector(".dotCursor");
    const bigCursor = document.querySelector('.bigRoundedCursor');

    const shadows = [
        'rgba(0, 0, 0, 0.5)',    // Bayangan hitam dengan transparansi
        'rgba(128, 128, 128)',   // Bayangan abu-abu
        'rgba(255, 0, 0)',       // Bayangan merah
        'rgba(0, 255, 0)',       // Bayangan hijau
        'rgba(0, 0, 255)',       // Bayangan biru
        'rgba(255, 255, 255)',   // Bayangan putih
        'rgba(255, 165, 0)',     // Bayangan jingga
        'rgba(255, 192, 203)',   // Bayangan pink
        'rgba(255, 255, 0)',     // Bayangan kuning
        'rgba(0, 128, 128)',     // Bayangan cyan tua
        'rgba(139, 69, 19)'      // Bayangan coklat
    ];

    const randomShadows = Math.floor(Math.random() * shadows.length);

    document.addEventListener('mousemove', function(event) {
        cursor.style.top = `${event.pageY}px`;
        cursor.style.left = `${event.pageX}px`;
        cursor.style.display = "block";
        cursor.style.backgroundColor = 'transparent';
        cursor.style.border = '2px solid #0EA5E9';
        cursor.style.opacity = '1';
    });

    document.addEventListener('mousemove', function(event) {
        dotCursor.style.top = `${event.pageY}px`;
        dotCursor.style.left = `${event.pageX}px`;
        dotCursor.style.display = "block";
        dotCursor.style.backgroundColor = 'transparent';
        dotCursor.style.border = '2px solid #0EA5E9';
        dotCursor.style.opacity = '1';
    });

    document.addEventListener('mousemove', function(event) {
        bigCursor.style.top = `${event.pageY}px`;
        bigCursor.style.left = `${event.pageX}px`;
    });

    document.addEventListener('mouseout', function() {
        cursor.style.display = "none";
        dotCursor.style.display = "none";
        bigCursor.style.display = "none";
    });

    document.addEventListener('mousedown', function(event) {
        if (event.button == 0) {
            cursor.style.opacity = '0';
            dotCursor.style.opacity = '0';
            bigCursor.style.opacity = '1';
            bigCursor.classList.add('active');
        }
    });

    // Jangan hapus kelas active di mouseup agar animasi tetap berjalan
    document.addEventListener('mouseup', function(event) {
        if (event.button === 0) {
            cursor.style.opacity = '1';
            dotCursor.style.opacity = '1';
        }
    });

    // Hapus kelas active setelah animasi selesai
    bigCursor.addEventListener('animationend', function() {
        bigCursor.classList.remove('active');
        bigCursor.style.opacity = '0';
    });
});
