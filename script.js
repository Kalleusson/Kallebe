function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
      section.classList.add('hidden');
  });

  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.remove('hidden');
}
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
