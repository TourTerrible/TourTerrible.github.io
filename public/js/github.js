/**
 * We render repos directly into the page
 * using the GitHub API
 * this creating always-updated project pages
 * with my theming
 */
$.ajax({
  cors: true,
  url: GITHUB_README_URL,
  accepts: {
    html: 'application/vnd.github.v3.html'
  },
  dataType: 'html',
  success: function (html) {
    // WontFix: images imported with relative imports. Using Base tag will impact all links, iframe is not a good option
    $("#readme").html(html);
    $('.sourcelink').show();
  }
})
