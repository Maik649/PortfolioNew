
export function Contact(){
    return `
    <section id="contact" class="contact-section">
    <div class="shape-content"></div>
    <div class="contact-wrapper">    
    <div class="limitet --balck">
     <h2 class="headline-extra">Sag Hallo</h2>
     <h3>Möchtest du ein neues Projekt besprechen?</h3>
     <span>Sag Hallo! Lass uns deine Ideen besprechen und verwirklichen</span>
    <form class="contact-form" novalidate>
    <div class="input-wrapper">
    <input id="vollname" type="text" name="vollname" minlength="7" aria-describedby="name-status" placeholder=" ">
    <label for="vollname">Ihr Name</label>
    <span class="validation-status" id="name-status" aria-live="polite">
      <img alt="">
      <span class="validation-message"></span>
    </span>
    </div>
    <div class="input-wrapper">
    <input id="email" type="email" name="email"  aria-describedby="email-status" placeholder=" ">
    <label for="email">Ihr Email</label>
    <span class="validation-status" id="email-status" aria-live="polite">
    <img alt="">
      <span class="validation-message"></span>
    </span>
    </div>
    <div class="input-wrapper">
    <textarea id="nachricht" name="nachricht" cols="3" rows="4" minlength="10" required placeholder=" "></textarea>
    <label for="nachricht">Ihre Nachricht</label>
    <span class="validation-status" id="message-status" aria-live="polite">
    <img alt="">
    <span class="validation-message"></span>
    </span>
        </div>
    <div class="privacy-consent">
      <input id="privacy-consent" type="checkbox" name="privacyAccepted" required aria-describedby="privacy-status">

          <label for="privacy-consent">Ich habe die <a href="/datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.</label>
          <span class="validation-status" id="privacy-status" aria-live="polite">
          <img alt="">
        <span class="validation-message"></span>
      </span>
    </div>
    <div class="contact-form-footer">
    <p class="form-feedback" id="form-feedback" aria-live="polite"></p>
    </div>
    </form>
    </div>
    </div>
    </section>`   
}