document.addEventListener('DOMContentLoaded', () => {
    const anyaImg = document.querySelector('.img.anyaForger');
    const anyaTooltip = document.querySelector('.anyaTooltip');

    // Mencegah menu konteks default dan menampilkan menu kustom
    anyaImg.addEventListener('mouseover', (event) => {
        event.preventDefault();

        // Menentukan posisi menu kustom
        anyaTooltip.style.top = `${event.pageY}px`;
        anyaTooltip.style.left = `${event.pageX}px`;
        anyaTooltip.style.visibility = 'visible';
    });

    const aboutAnya = document.querySelector('.anyaTooltip .option .aboutAnya');

    // Listener View Anya ada di script.js
    aboutAnya.addEventListener('click', function() {
        window.open('https://spy-x-family.fandom.com/wiki/Anya_Forger', '_blank')
    });

    // Menyembunyikan menu kustom saat mengklik di luar menu
    document.addEventListener('click', () => {
        anyaTooltip.style.visibility = 'hidden';
    });
});