 window.onload = function() {
      // Function to update size information
      function updateSize() {
        // Get the div element by its ID
        const sizeInfo = document.getElementById('sizeInfo');
        
        // Get the window width and height
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Update the content of the <h1> tag inside the div
        sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
      }
      
      // Call the updateSize function initially to set the initial size
      updateSize();
      
      // Add an event listener to update the size whenever the window is resized
      window.addEventListener('resize', updateSize);
    };