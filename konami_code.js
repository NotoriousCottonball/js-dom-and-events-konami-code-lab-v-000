function init() {
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let index = 0;
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.which || e.keyCode || e.detail);
    console.log(e.which);  
    console.log(e.keyCode);
    console.log(e.detail);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert('Hurray!');
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}