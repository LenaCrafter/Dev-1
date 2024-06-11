document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".float-image");

    images.forEach(image => {
        image.addEventListener("mouseover", () => {
            image.classList.add("float");
        });

        image.addEventListener("mouseout", () => {
            image.classList.remove("float");
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const snowContainer = document.getElementById('snow-container');
    
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        const size = Math.random() * 10 + 5; // Snowflake size between 5px and 15px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        snowflake.style.left = `${Math.random() * 100}%`; // Snowflake position
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Falling speed
        
        snowContainer.appendChild(snowflake);
        
        // Remove snowflake after it falls
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }
    
    // Create more snowflakes at intervals
    setInterval(() => {
        for (let i = 0; i < 5; i++) { // Create 5 snowflakes at a time
            createSnowflake();
        }
    }, 200); // Adjust interval as needed
});