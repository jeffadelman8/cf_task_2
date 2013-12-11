$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item"><span id="span">' + 'X ' + '</span>' + toAdd + '</div>');
    });
    $(document).on('click', '.item', function(){
        $(this).remove();
    });
});