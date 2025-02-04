const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const container = document.querySelector('.container');

let yesButtonSize = 1; // Initial scale factor for the "Yes" button

noButton.addEventListener('click', () => {
  yesButtonSize += 1; // Increase the size of the "Yes" button
  yesButton.style.transform = `scale(${yesButtonSize})`;
});

yesButton.addEventListener('click', () => {
  // Clear everything in the container
  container.innerHTML = '<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTM0YjM3bTh5ZjFuOTVsaWRkN2Iybms1czJzejl1bXZyaXF5OXBmdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/enrq327a3sMIJAS5jA/giphy.gif" alt="Celebration GIF" style="max-width: 100%; height: auto;">';
});