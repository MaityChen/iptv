document.body.innerHTML = '<div id="maitycontent">' + document.body.innerHTML + '</div>';

document.body.innerHTML = '<div class="form-inline my-2 my-lg-0"><input id="maitysearch" class="form-control mr-sm-2" type="text" placeholder="查询"><button id="maitysearchbtn" class="btn btn-secondary my-2 my-sm-0" type="submit">查询</button></div>' + document.body.innerHTML;


var btnSearch = document.getElementById('maitysearchbtn');
btnSearch.onclick = function () {
    var inputKeyword = document.getElementById('maitysearch');
    var text = document.getElementById('maitycontent');
    var keyword = inputKeyword.value;
    if (!keyword) {
        return;
    }
    var textSplit = text.innerHTML.split(keyword);
    text.innerHTML = textSplit.join('<span id="maityresult" style="background:yellow;color:red;">' + keyword + '</span>');

    window.scrollTo({top:document.getElementById("maityresult").offsetTop - 138, behavior: 'smooth'})
}






