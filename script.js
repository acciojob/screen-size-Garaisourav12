//your JS code here. If required.
 function updateSize() {
      const widthSpan = document.getElementById('width');
      const heightSpan = document.getElementById('height');

      // Get the window width and height
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      // Update the content of the <span> elements
      widthSpan.textContent = width;
      heightSpan.textContent = height;
    }

    // Call the updateSize function initially to set the initial size
    updateSize();

    // Add an event listener to update the size whenever the window is resized
    window.addEventListener('resize', updateSize);