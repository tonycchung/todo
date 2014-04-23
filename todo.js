$(':button').on('click', function() 
{
	var item = $(':text').val();
    if (!item.trim()) return;

    addItem(item);
    $(':text').val('');
});

function addItem(item) {
    $('#list').append('<li>'+item+'</li>');
    $('li').last().on('click', function() {$(this).remove();});
}