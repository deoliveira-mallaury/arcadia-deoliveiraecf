export default function () {
    $(document).ready(function () {
        $('.test').on('click', function (e) {
            e.preventDefault();
            console.log($(this).attr('id'));
            const animalId = $(this).attr('id');

            console.log('test clicked');
            console.log('Fetch request initiated'); // Log the fetch request

            fetch('/repport/logs/new', { // Ensure the URL is correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ animalId: animalId }), // Send animalId as JSON
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text(); // Change to .text() to see the raw response
                })
                .then(data => {
                    console.log('Success:', data);
                    // Update the turbo-frame with the new content
                    document.getElementById('new_repport_log').innerHTML = data;
                })
                .catch((error) => {
                    console.error('Error:', error);
                    // Display an error message to the user
                    alert('An error occurred: ' + error.message);
                });
        });
    });
}
