// Code your solution here
function findMatching(source, find) {
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === find.toLowerCase()
    );
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, findValue) {
    return source.filter((record) => record.name === findValue);
  } 