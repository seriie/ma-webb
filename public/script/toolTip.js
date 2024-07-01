document.addEventListener('DOMContentLoaded', () => {
    const anyaImg = document.querySelector('.img.anyaForger');
    const anyaTooltip = document.querySelector('.anyaTooltip');

    // Menampilkan tooltip dan mengikutinya saat kursor bergerak di atas gambar
    anyaImg.addEventListener('mousemove', (event) => {
        event.preventDefault();

        // Menentukan posisi tooltip mengikuti kursor
        anyaTooltip.style.top = `${event.pageY}px`;
        anyaTooltip.style.left = `${event.pageX}px`;
        anyaTooltip.style.display = 'block';
    });

    // Menjaga tooltip tetap terlihat ketika kursor berada di atas tooltip
    anyaTooltip.addEventListener('mouseenter', () => {
        anyaTooltip.style.display = 'block';
    });

    // Menyembunyikan tooltip saat kursor meninggalkan gambar
    anyaImg.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!anyaTooltip.matches(':hover')) {
                anyaTooltip.style.display = 'none';
            }
        }, 100);
    });

    anyaTooltip.addEventListener('mouseleave', () => {
        anyaTooltip.style.display = 'none';
    });

    const aboutAnya = document.querySelector('.anyaTooltip .option .aboutAnya');

    // Listener untuk membuka tautan Anya Forger
    aboutAnya.addEventListener('click', function() {
        window.open('https://spy-x-family.fandom.com/wiki/Anya_Forger', '_blank');
    });
});
