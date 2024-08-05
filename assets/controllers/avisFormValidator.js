export default function (name) {
    $('#toggleRange1').on('click', function () {
        alert('clicked');
      this.classList.toggle('bi-star-fill');
    })
    $('#btnSubmitLoginform').on('click', function() {
      $.ajax({
        url: '/login',
        method: 'GET',
      })
    })
  };
  