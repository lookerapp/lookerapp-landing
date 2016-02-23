var elem_no = 1;
$('#prev_btn').hide();
$('.upload-options li').on('click', function() {
    var option = $(this);
    option.toggleClass('selected');
    if (option.hasClass('selected')) {
        option.find('i').attr('class', '').addClass('fa fa-check');
    } else {
        option.find('i').attr('class', '').addClass('fa fa-plus');
    }

    if ($(".upload-options li.selected").length > 0) {
        $('button').removeClass('disabled');
    } else {
        $('button').addClass('disabled');
    }

});

$('#next_btn').on('click', function() {
	console.log(elem_no)
	
    if ($(this).hasClass('disabled') || $(this).hasClass('end')) {

    } else {
        $('#step_' + elem_no).removeClass('showing');
        elem_no ++;
        $('#step_' + elem_no).addClass('showing');
        $('#upload-drop').html('<img src="/images/1.jpg" />').addClass('image-uploaded');
    }
    
    if (elem_no === $('.upload-section').length) {
    	$('#next_btn').text('confirm').addClass('end');
    }

    $('.dot').removeClass('selected').eq(elem_no - 1).addClass('selected')

	$('#prev_btn').show();

});

$('#prev_btn').on('click', function() {
	
	
    
        $('#step_' + elem_no).removeClass('showing');
        elem_no --;
        $('#step_' + elem_no).addClass('showing');

        $('#upload-drop').html('<img src="/images/1.jpg" />').addClass('image-uploaded');
    	$('#next_btn').html('next <i class="fa fa-long-arrow-right"></i>').removeClass('end');

    if (elem_no === 1) {
    	$('#prev_btn').hide();
    }
	
    $('.dot').removeClass('selected').eq(elem_no - 1).addClass('selected')

});


$(".form-group").on('keydown', '#add_tag', function(e) {
    var keyCode = e.keyCode || e.which;
    var tagger = $('#add_tag');
    if (keyCode == 13) {
        e.preventDefault();
        $('#tags').append('<span class="tag">' + tagger.val() + '<i class="fa fa-times"></i></span>');
        tagger.val('');
    }

    $('.tag i').on('click', function() {
        $(this).parent().remove();
    });
});



