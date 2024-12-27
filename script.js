let currentImageIndex = 0; // Índice da imagem atual na galeria
let images = []; // Array para armazenar as URLs das imagens da galeria

// Abre o modal e inicializa as imagens da galeria
function openModal(initialImage, galleryImages) {
    const modal = document.getElementById('productModal'); // Obtém o modal pelo ID
    const modalImage = document.getElementById('modalImage'); // Obtém a imagem do modal pelo ID

    images = galleryImages; // Define as imagens da galeria
    currentImageIndex = galleryImages.indexOf(initialImage); // Define o índice da imagem inicial

    modal.style.display = 'block'; // Exibe o modal
    modalImage.src = initialImage; // Define a imagem inicial no modal
}

// Fecha o modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none'; // Oculta o modal
}

// Navega pelas imagens da galeria
function navigateGallery(direction) {
    const modalImage = document.getElementById('modalImage'); // Obtém a imagem do modal pelo ID

    // Calcula o próximo índice da imagem considerando o total e o sentido da navegação
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length; 
    modalImage.src = images[currentImageIndex]; // Atualiza a imagem no modal
}
