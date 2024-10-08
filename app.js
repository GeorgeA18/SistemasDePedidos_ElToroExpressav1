

function enviarFormulario() {
    const form = document.getElementById('productForm');
    const selectedProducts = Array.from(form.elements['productos'])
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
        .join(', ');
    
    console.log(selectedProducts);            

    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfEu-E_IH4seTkRF5sLTl6JpOiqT1VUIKMxHzv5KTo18CMasg/formResponse?entry.643072682=' + encodeURIComponent(selectedProducts);
    window.open(googleFormURL, '_blank');
}