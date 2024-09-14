// Skrypt do obsługi menu na urządzeniach mobilnych
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
    // Dodaje lub usuwa klasę 'active' do listy linków nawigacyjnych, aby wyświetlić je na urządzeniach mobilnych
});

// Skrypt do zmiany koloru nagłówka po przewinięciu strony
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        // Dodaje klasę 'scrolled' do nagłówka po przewinięciu strony o więcej niż 50 pikseli
    } else {
        header.classList.remove('scrolled');
        // Usuwa klasę 'scrolled' z nagłówka, gdy strona zostanie przewinięta na mniej niż 50 pikseli
    }
});

// Auto Typing Efekt
    var typed = new Typed(".auto-type", {
      strings: ["ZADBAJ O SWOJĄ FORMĘ I ZDROWIE!"],
      typeSpeed: 65,
      backSpeed: 10,
      loop: true
    });
  

    document.getElementById('consultation-form').addEventListener('submit', function(event) {
        // Usuwamy preventDefault, aby formularz mógł zostać wysłany do Netlify
        // event.preventDefault();

        var formMessage = document.getElementById('form-message');
        formMessage.textContent = "Dziękujemy za wysłanie formularza!";
        formMessage.style.color = "green";
        
        // Opcjonalne: Czyszczenie formularza
        // this.reset();
    });

// Funkcja do przewijania do sekcji konsultacji
function scrollToConsultation() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}



function scrollOpinie(direction) {
    const container = document.querySelector('.opinie-wrapper');
    const scrollAmount = 300; // Możesz dostosować tę wartość w zależności od szerokości kafelków

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

