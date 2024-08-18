export default function () {
  $(document).ready(function () {
    $('.nav-admin').click(function (event) {
      event.preventDefault();
      var targetUrl = $(this).data('target');
      $('#content-area').load(targetUrl);
    });
    $('#new-user-form').submit(function (event) {
      event.preventDefault();
      var formData = $(this).serialize();

      $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: formData,
        success: function (response) {
          if (response.success) {
            var newRow = `
                      <tr id="user-${response.user.id}">
                          <td>${response.user.email}</td>
                          <td>${response.user.roles}</td>
                          <td>${response.user.name}</td>
                          <td>${response.user.lastname}</td>
                          <td>
                              <i class="bi bi-trash-fill float-end" data-bs-toggle="modal" data-bs-target="#deleteModal-${response.user.id}"></i>
                          </td>
                      </tr>
                  `;
            $('#user-table tbody').append(newRow);
          } else {
            alert('Failed to add user.');
          }
        },
        error: function () {
          alert('An error occurred.');
        }
      });
    });
    // $('#new-animal-form').submit(function (event) {
    //   event.preventDefault();
    //   var formData = $(this).serialize();

    //   $.ajax({
    //     type: 'POST',
    //     url: $(this).attr('action'),
    //     data: formData,
    //     success: function (response) {
    //       if (response.success) {
    //         var newRow = `
    //                   <tr id="user-${response.animal.id}">
    //                       <td>${response.animal.name}</td>
    //                       <td>${response.animal.condition}</td>
    //                       <td>${response.animal.race.label}</td>
    //                       <td>${response.animal.foodType}</td>
    //                       <td>${response.animal.habitat.name}</td>
    //                       <td>
    //                           <i class="bi bi-trash-fill float-end" data-bs-toggle="modal" data-bs-target="#deleteModal-${response.user.id}"></i>
    //                       </td>
    //                   </tr>
    //               `;
    //         $('#show_animal tbody').append(newRow);
    //       } else {
    //         alert('Failed to add user.');
    //       }
    //     },
    //     error: function () {
    //       console.log(response);
          
    //       alert('An error occurred.');
    //     }
    //   });
    // });
  });
}
// function submitFormAndRedirect(userId) {
//   var form = document.getElementById('delete-form-' + userId);
//   var targetUrl = form.querySelector('button[data-target]').getAttribute('data-target');

//   $.ajax({
//     type: 'POST',
//     url: form.action,
//     data: $(form).serialize(),
//     success: function (response) {
//       if (response.success) {
//         $('#user-' + userId).remove();
//         $('#deleteModal-' + userId).modal('hide');
//         window.location.href = targetUrl; // Redirect to the target URL
//       } else {
//         alert('Failed to delete user.');
//       }
//     },
//     error: function () {
//       alert('An error occurred.');
//     }
//   });
// }
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