function reverseWordsInSentence(sentence) {
    const words = sentence.split(" ");
    
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
  }
  
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log(reversedSentence);
  
  function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  const inputArray = [5, 2, 9, 1, 5, 6];
  const sortedArray = sortArrayDescending(inputArray);
  console.log(sortedArray);
  