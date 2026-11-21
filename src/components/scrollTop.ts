export const setupScrollTop = () => {
  const scrollTopButton = document.createElement('img');
  scrollTopButton.src = '../img/icons/to-top.svg';
  scrollTopButton.alt = 'Scroll to Top';
  scrollTopButton.id = 'scroll-top';
  scrollTopButton.setAttribute("class", "scroll-Top-Img");
  scrollTopButton.style.position = 'fixed';
  scrollTopButton.style.bottom = '15px';
  scrollTopButton.style.right = '15px';
  scrollTopButton.style.display = 'none';
  scrollTopButton.style.cursor = 'pointer';
  scrollTopButton.style.zIndex = '900';
  scrollTopButton.style.background = 'rgba(0, 0, 0, 0.5)';
  scrollTopButton.style.padding = '10px';
  document.body.appendChild(scrollTopButton);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};