var inputKeyword = document.getElementById('maitysearch');
var btnSearch = document.getElementById('maitysearchbtn');
var text = document.getElementById('maitycontent');

btnSearch.onclick = function () {
    var keyword = inputKeyword.value;
    if (!keyword) {
        return;
    }
    var textSplit = text.innerHTML.split(keyword);
    text.innerHTML = textSplit.join('<span class="keywordBg">' + keyword + '</span>');
}
