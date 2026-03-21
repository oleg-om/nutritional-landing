document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Payment Modal Logic for Guide Page
    const buyBtn = document.getElementById('buy-btn');
    const paymentModal = document.getElementById('payment-modal');
    const closeBtn = document.querySelector('.close-btn');
    const paymentForm = document.getElementById('payment-form');
    const purchaseSection = document.getElementById('purchase-section');
    const successSection = document.getElementById('success-section');

    if (buyBtn && paymentModal) {
        // Open modal
        buyBtn.addEventListener('click', () => {
            paymentModal.classList.remove('hidden');
        });

        // Close modal
        closeBtn.addEventListener('click', () => {
            paymentModal.classList.add('hidden');
        });

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === paymentModal) {
                paymentModal.classList.add('hidden');
            }
        });

        // Input formatting for card
        const cardInput = document.getElementById('card');
        if (cardInput) {
            cardInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                value = value.replace(/(.{4})/g, '$1 ').trim();
                e.target.value = value;
            });
        }

        // Input formatting for expiration date
        const expInput = document.getElementById('exp');
        if (expInput) {
            expInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value;
            });
        }

        // Handle Form Submission (Mock Payment)
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Mock processing time
            const submitBtn = document.getElementById('submit-payment-btn');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Обработка...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Hide modal
                paymentModal.classList.add('hidden');
                
                // Hide purchase button, show success section
                purchaseSection.classList.add('hidden');
                successSection.classList.remove('hidden');
                
                // Reset form
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                paymentForm.reset();
                
            }, 1500); // 1.5 second delay to mock payment gateway
        });
        
        // Mock download action
        const downloadBtn = document.getElementById('download-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Началось скачивание PDF-файла (в реальности здесь был бы настоящий файл).');
            });
        }
    }
});