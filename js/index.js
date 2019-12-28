(function() {
  window.onload = function() {
    let copyDom = document.getElementById('copyright');
    if(copyDom) {
      let year = new Date().getFullYear();
      copyDom.innerHTML = 'Copyright &copy; ' + year + ' JOKING. All rights reserved.';
    }
  }
})();