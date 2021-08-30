document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
   