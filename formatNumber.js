//here the function
function formatNumber(number, tf)
{
  number = number.toFixed(tf) + '';
  x = number.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
//call function
formatNUmber(123456789,2);
