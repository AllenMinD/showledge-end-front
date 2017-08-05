/*note-page.html专用js文件*/
/*主要解决:
   回复弹框事件、
   评论点赞事件、
   点赞（收藏）笔记事件
 */

jQuery(document).ready(function($) {
  /* --------------回复弹框事件-------------- */
  /*点击回复按钮*/
  $(".reply-btn").click(function(event) {
    if ($(this).parents("div.reply-comment").attr("class") == "reply-comment") {
      var atWho = $(this).parent().find("a.at-who").text();
      $(this).parents("li").find("div.reply-block textarea").attr("placeholder", "@ " + atWho);
      $(this).parents("li").find("div.reply-block").slideDown();
    }
    else {
      $(this).parents("li").find("div.reply-block textarea").attr("placeholder", "写下你的见解~");
      $(this).parents("li").find("div.reply-block").slideDown();
    } 
  });
  /*点击取消按钮*/
  $(".cancel-reply-btn").click(function(event) {
    $(this).parents("li").find("div.reply-block").slideUp();
  });
  /*点击提交回复按钮*/
  $(".send-reply-btn").click(function(event) {
    $(this).parents("li").find("div.reply-block").css('display', 'none');
    alert("回复提交成功");
  });

  /* --------------评论点赞事件-------------- */
  $(".good-btn").click(function(event) {
    if ($(this).attr("class") == "good-btn") {
      $(this).addClass("green-good-btn");
      $(this).children("span").attr("class", "fa fa-thumbs-up fa-fw");
    }
    else {
      $(this).removeClass("green-good-btn");
      $(this).children("span").attr("class", "fa fa-thumbs-o-up fa-fw");
    }
  });

  /* --------------点赞（收藏）笔记事件-------------- */
  $(".like-btn").click(function(event) {
    if ($(this).attr("class") == "btn btn-lg btn-green like-btn") {
      $(this).addClass("note-like-and-collect-btn-active");
      $(this).html("<span class='fa fa-heart fa-fw'></span>已点赞");
    }
    else {
      $(this).removeClass("note-like-and-collect-btn-active");
      $(this).html("<span class='fa fa-heart fa-fw'></span>点赞");
    }
  });

  $(".collect-btn").click(function(event) {
    if ($(this).attr("class") == "btn btn-lg btn-green collect-btn") {
      $(this).addClass("note-like-and-collect-btn-active");
      $(this).html("<span class='fa fa-bookmark fa-fw'></span>已收藏");
    }
    else {
      $(this).removeClass("note-like-and-collect-btn-active");
      $(this).html("<span class='fa fa-bookmark fa-fw'></span>收藏");
    }
  });

});