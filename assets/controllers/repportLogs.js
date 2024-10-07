export default function () {
    console.log('Script loaded'); // Debugging statement

    $(document).ready(function () {
        console.log('Script loaded2'); // Debugging statement
        let datas = [];
        $('#habitat-select').on('change', function (event) {
            const habitatId = event.target.value;
            console.log('Selected habitat:', habitatId);

            fetch('/employee/health/' + habitatId)
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched data:', data); // Debugging statement
                    var animalSelect = $('#repport_logs_modifiedAnimal');
                    animalSelect.empty(); // Clear existing options
                    animalSelect.append('<option value="">Sélectionnez un animal</option>');
                    data.animals.forEach(function (animal) {
                        var option = $('<option></option>').attr('value', animal.id).text(animal.name);
                        console.log('Appending option:', option); // Debugging statement
                        animalSelect.append(option);
                        datas.push(animal); // Add animal to the array
                        console.log(data);
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error); // Debugging statement
                });
        });

        $('#add_repport_log').on('click', (e) => {
            e.preventDefault();
            console.log('Add report log button clicked'); // Debugging statement
            console.log(typeof ($('#repport_logs_date').val()));
            const postData = {
                modifiedAnimal: $('#repport_logs_modifiedAnimal').val(),
                date: $('#repport_logs_date').val(),
                modifiedField: $('#repport_logs_modified_field').val(),
                newValue: $('#repport_logs_new_value').val()
            };
 
            console.log('Post data:', postData); // Debugging statement
            async function fetchData() {

                let divAjaxGet = document.querySelector("#test-get");
                try {

                    let response = await fetch('/repportlogs/new', {
                        dataType: 'json',
                        data: { data: postData },
                        method: 'POST',
                        headers: {
                            "X-Requested-with": "XMLHttpRequest",
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ data: postData })

                    });
                    let data = await response.json();
                    console.log('Posted data:', data); // Debugging statement
                    divAjaxGet.innerHTML = JSON.stringify(data);

                    //         })
                } catch (error) {

                    console.error("Erreur lors de la récupération des données:", error);
                }
            }
            fetchData();

        });
    });
}
