;(function() {
  var datepicker = $('#datepicker')
  var submit = $('#submit')
  var error = $('#error')
  var success = $('#success')

  datepicker.datepicker()

  submit.on('click', function() {
    var dateString = datepicker.val()

    if (dateString !== '11/05/2019' && dateString !== '11/04/2019') {
      error.removeClass('hidden')
    } else {
      error.addClass('hidden')

      $('.hide-on-success').addClass('hidden')

      success.removeClass('hidden')
    }
  })
})()
