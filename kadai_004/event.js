//HTMLを読み込んだ場合
$(window).on('load', () => {
    console.log('loadイベントが発生しました');
});
//スクロールされた場合
  $(window).on('scroll', function() {
    console.log('scrollイベントが発生しました');
  });