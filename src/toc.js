// TOC plugin added

$(document).ready(function () {
    $("#toc").toc({content: ".article-body", headings: "h1,h2,h3"});
    if ($("ul#toc").has("li").length === 0) {
        $('#toc-box').hide();
    }
});
