function show(event) {
  event.preventDefault();
  const sidebar = document.querySelector(".sidebar-responsive");
  sidebar.style.display = "flex";
  console.log("click");
}
function hide(event) {
  event.preventDefault();
  const hideSidebar = document.querySelector(".sidebar-responsive");
  hideSidebar.style.display = "none";
  console.log("click");
}



fetch('top-nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('top-nav').innerHTML = data;

    const articlesLinks = document.querySelectorAll('.articles-link');
    articlesLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'articles.html';
      });
    });

    const coursesLink = document.querySelectorAll('.courses-link');
    coursesLink.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'courses.html';
      });
    });
    const podcastsLink = document.getElementById('podcasts-link');
    if (podcastsLink) {
      podcastsLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'podcasts.html';
      });
    }
  })
  .catch(error => console.error('Error loading header:', error));


fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
    const articlesLinks = document.querySelectorAll('.articles-link');
    articlesLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'articles.html';
      });
    });
    const coursesLink = document.querySelectorAll('.courses-link');
    coursesLink.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'courses.html';
      });
    });
  })
  .catch(error => console.error('Error loading footer:', error));
