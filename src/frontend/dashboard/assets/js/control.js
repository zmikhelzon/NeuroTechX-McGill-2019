// Add javascript here, sorry for the mess and repitition!
$(document).ready(function() {
  $('#tabs li').on('click', function() {
    var tab = $(this).data('tab');

    $('#tabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tab-content div').removeClass('is-active');
    $('div[data-content="' + tab + '"]').addClass('is-active');
  });

  $('.graph-controls input').mousedown(function() {

    var input = $(this).attr("name");
    console.log(input);
    $('article[id="media-' + input + '"]').toggleClass("hide");
  });

  var data = [
    { label: 'Layer 1', values: [ {x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2} ] },
    { label: 'Layer 2', values: [ {x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 4} ] }
  ];
  var sinLayer = {label: 'sin', values: []},
    cosLayer = {label: 'cos', values: []}

    for (var x = 0; x <= 2*Math.PI; x += Math.PI / 64) {
      sinLayer.values.push({ x: x, y: Math.sin(x) + 1 });
      cosLayer.values.push({ x: x, y: Math.cos(x) + 1 });
    }
  var data = new RealTimeData(4);


  var sensorChart1 = $('#sensor1').epoch({
      type: 'time.area',
      data: data.history(),
      axes: ['left', 'right', 'bottom']
  });
  var sensorChart2 = $('#sensor2').epoch({
      type: 'area',
      data: [sinLayer, cosLayer],
      axes: ['left', 'right', 'bottom']
  });
  var sensorChart3 = $('#sensor3').epoch({
      type: 'area',
      data: [sinLayer, cosLayer],
      axes: ['left', 'right', 'bottom']
  });
  var sensorChart4 = $('#sensor4').epoch({
      type: 'area',
      data: [sinLayer, cosLayer],
      axes: ['left', 'right', 'bottom']
  });
  var sensorChart5 = $('#sensor5').epoch({
      type: 'area',
      data: [sinLayer, cosLayer],
      axes: ['left', 'right', 'bottom']
  });
  var sensorChart6 = $('#sensor6').epoch({
      type: 'area',
      data: [sinLayer, cosLayer],
      axes: ['left', 'right', 'bottom']
  });
  var sensorChart7 = $('#sensor7').epoch({
      type: 'area',
      data: [sinLayer, cosLayer],
      axes: ['left', 'right', 'bottom']
  });
  var sensorChart8 = $('#sensor8').epoch({
      type: 'area',
      data: [sinLayer, cosLayer],
      axes: ['left', 'right', 'bottom']
  });

  setInterval(function() { sensorChart1.push(data.next()); }, 1000);
  sensorChart1.push(data.next());

  var range = $('.input-range').val();

  $(".input-range").on('input', function(){
      range = $(".input-range").val();
      $(".range-value").val(range);
  });

  $(".range-value").on('input', function(){
      range = $(".range-value").val();
      $(".input-range").val(range);
  });


  // Timer and states!



});