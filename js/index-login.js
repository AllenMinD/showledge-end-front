/*index-login.js*/
$(document).ready(function() {
	/*点击“心情”按钮事件*/
	$("#input-emotion").click(function(event) {
		$(".input-emotion-form").slideToggle();
	});

	/*点击“学习资料”按钮事件*/
	$("#input-xxzl").click(function(event) {
		$(".input-xxzl-form").slideToggle();
	});
	/*添加学习资料按钮*/
	$("#add-xxzl").click(function(event) {
		var newDiv = $("<div></div>");
		newDiv.addClass("input-xxzl-form");
		newDiv.css({
			"display": "block",
			"margin-left": "95px"
		});
		var newInput1 = $("<input>");
		newInput1.attr({
			"type": "text",
			"class": "form-control-green-border",
			"placeholder": "http://"
		});
		newDiv.append(newInput1);
		var newSpan = $("<span></span>");
		newSpan.addClass("fa fa-external-link");
		newDiv.append(newSpan);
		var newInput2 = $("<input>");
		newInput2.attr({
			"type": "text",
			"class": "form-control-green-border",
			"placeholder": "资料标题"
		});
		newDiv.append(newInput2);
		$(".input-xxbj-form").before(newDiv);
	});

	/*点击“学习笔记”按钮事件*/
	$("#input-xxbj").click(function(event) {
		$(".input-xxbj-form").slideToggle();
	});	

	/*笔记选择窗口模态框 的选择按钮切换*/
	$(".pick-btn").click(function(event) {
		$(this).toggleClass("btn-warning");
		if ($(this).attr("class") == "btn btn-info btn-sm pick-btn")
			$(this).text("已选择");
		else $(this).text("选择");
	});
});