

export default function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-admin').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var targetUrl = this.getAttribute('href');
        fetch(targetUrl)
          .then(response => response.text())
          .then(html => {
            document.querySelector('#content-area').innerHTML = html;
          })
          .catch(error => console.warn('Something went wrong.', error));
      });
    });
  });

}