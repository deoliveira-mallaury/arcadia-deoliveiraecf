export default function () {
    $(document).ready(function () {
        $('.card-animal-container').hide(); // Masquer toutes les divs au chargement de la page

        $('.habitat-button').on('click', function (event) {
            event.preventDefault();
            var habitatId = $(this).attr('id').split('-')[1];
            $('.card-animal-container').hide(); // Masquer toutes les divs
            $('#displHabitat-' + habitatId).show(); // Afficher la div correspondante
            console.log($(this).attr('id'));
            var formData = $(this).val();
            console.log(formData);
        });
    });
};
