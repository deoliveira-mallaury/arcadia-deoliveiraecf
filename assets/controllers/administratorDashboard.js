export default function () {
  $(document).ready(function () {
    $('.nav-link').click(function (event) {
      event.preventDefault();
      var targetUrl = $(this).data('target');
      $('#content-area').load(targetUrl);
    });
  });

}

// export default function (name) {
//   $('#toggle_user_param').on('click', function (e) {
//     $('#user-pannel').toggle();
//   })
//   $('.bi-trash-fill').on('click', function (e) {
//     e.preventDefault();
//     const formId = $(this).closest('form').attr('id');
//     $('#' + formId).submit();
//   });
// }