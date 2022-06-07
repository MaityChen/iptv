
function maitySearch() {
    var content = $('#content').html();
    $('#search-btn').click(function () {
        $('#content').html(content);
        var searchText = $('#search').val();
        if (searchText.length == 0) {
            return false;
        }
        var regExp = new RegExp(searchText, 'g');
        var newHtml = content.replace(regExp, '<span id="result" style="background:yellow;color:red;">' + searchText + '</span>');
        $('#content').html(newHtml);
        var X = $('#result').offset().top;
        var Y = $('#result').offset().left;
        window.scrollTo(X, Y);
    });
}
