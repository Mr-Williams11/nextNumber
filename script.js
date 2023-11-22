  function getNextElement(arr) {
    if (arr.length === 0) {
      return null;
    }

    let index = 0;

    return function () {
      if (index < arr.length) {
        return arr[index++];
      } else {
        index = 0;
        return arr[index++];
      }
    };
  }

  const arrayToDisplay = [17, 4, 86, 43, 80];
  const getNextElementInArray = getNextElement(arrayToDisplay);

  document.getElementById('showNextButton').addEventListener('click', function() {
    displayNextElement();
  });

  function displayNextElement() {
    const resultElement = document.getElementById('result');
    const nextElement = getNextElementInArray();
    resultElement.innerHTML = 'Next Element: ' + nextElement;
  }