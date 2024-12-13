document.addEventListener('DOMContentLoaded', () => {
    // Select the necessary elements from the DOM
    const imgContainer = document.querySelector('.breeds-container img');

    // Function to fetch a random dog image
    const fetchDogImage = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if (!response.ok) {
                throw new Error('Failed to fetch dog image');
            }
            const data = await response.json();
            if (data.status === 'success') {
                imgContainer.src = data.message; // Set the image source
                imgContainer.alt = 'A random dog'; // Set alt text for accessibility
            } else {
                console.error('API response status not successful');
            }
        } catch (error) {
            console.error('Error fetching dog image:', error);
        }
    };

    // Attach the fetchDogImage function to the global scope for the onclick attribute
    window.fetchDogImage = fetchDogImage;
});
