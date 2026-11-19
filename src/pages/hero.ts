let heroImagePath: string = "../img/arrow-bottom.svg";

export function setupHero() {
    return `
    <section id="hero" class="hero-section">
    <div class="limitet">
       <div class="top-content">
          <h1>Frontend Developer</h1>
            <p class="hero-sub-name">Maik Pankow</p>
        </div>
        
        <div class="bottom-content">
        <div class="contact-info">
        <a href="#contact" class="btn-contact">info@maikpankow.de</a>
        </div>
        
          <div class="scroll-down-content">
            <img src="${heroImagePath}" alt="Hero Image" />
            <span>Scroll down</span>
          </div>
        </div>
    </div>
    </section>
    `;
}