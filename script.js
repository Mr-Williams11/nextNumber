  // Function to display the next element in the array
  function getNextElement(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null;
    }

    // Use a closure to maintain the state (index)
    let index = 0;

    return function () {
      if (index < arr.length) {
        return arr[index++];
      } else {
        // If we reached the end of the array, reset the index
        index = 0;
        return arr[index++];
      }
    };
  }

  // Example usage
  const arrayToDisplay = [1, 2, 3, 4, 5];
  const getNextElementInArray = getNextElement(arrayToDisplay);

  // Attach click event handler using JavaScript
  document.getElementById('showNextButton').addEventListener('click', function() {
    displayNextElement();
  });

  function displayNextElement() {
    const resultElement = document.getElementById('result');
    const nextElement = getNextElementInArray();
    resultElement.innerHTML = 'Next Element: ' + nextElement;
  }