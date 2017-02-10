$(document).ready(function () {  
///////////////////////////////////////////////////变量定义///////////////////////////////////////////////
	var newNotebookName = "";  //新建文集的名称

///////////////////////////////////////////////////默认///////////////////////////////////////////////////
	//新建文集的按钮动画
	$('.new-notebook-btn').click(function(event) {
		$('.new-notebook-panel').slideToggle("slow");
	});

	//按 “×” 关闭新建面板
	$('.cancel-btn').click(function(event) {
		$('.new-notebook-panel').css("display","none");
	});


	//按钮active的切换
	$('.one-notebook').click(function (e) {  
		e.preventDefault();  
		$('.one-notebook').removeClass('active');  
		$(this).addClass('active');    
	});
	//按钮active的切换
	$('.one-article').click(function (e) {  
		e.preventDefault();  
		$('.one-article').removeClass('active');  
		$(this).addClass('active');    
	});
	//删除文集按钮
	$('.edit-notebook-delete').click(function(event) {
		$(this).parents('li')[1].remove();
	});
	//删除文章按钮
	$('.edit-article-delete').click(function(event) {
		$(this).parents('li')[1].remove();
	});


	//修改名称的【保存】按钮
	$("#enter-edit-name").click(function(event) {
		/*未完成。。。*/
		$(".edit-name").val("");  //input清空
	});


//////////////////////////////////////////////////新建文集按钮///////////////////////////////////////////////////////
/*记得把上面默认功能在拷贝一次添加到新建文集这个部分，新建的文集才有这些功能*/
	//按 “勾” 新建新文集 并关闭新建面板
	$('.enter-btn').click(function(event) {
		$('.new-notebook-panel').css("display","none");
		var newLi = $("<li></li>");
		$('.notebook-list').prepend(newLi);  //新建li
		newLi.addClass('one-notebook');  

		var newDiv = $("<div></div>");
		newLi.append(newDiv);  //新建div.notebook-name
		newDiv.addClass('notebook-name');  

		//获取输入的文集名称
		newNotebookName = $(".new-notebook-name").val();
		$(".new-notebook-name").val("");  //input清空

		var newSpan = $("<span></span>").text(newNotebookName);
		newDiv.append(newSpan);
		var newDiv_EditNotebook = $("<div></div>");
		newSpan.after(newDiv_EditNotebook);
		newDiv_EditNotebook.addClass("dropdown edit-notebook");
		var newSpan_dropdownBtn = $("<span></span>");
		newDiv_EditNotebook.append(newSpan_dropdownBtn);
		newSpan_dropdownBtn.addClass('glyphicon glyphicon-cog');
		newSpan_dropdownBtn.attr({
			"id": "dropdownMenu1",
			"data-toggle": "dropdown",
			"aria-haspopup": "true",
			"aria-expanded": "true"
		});
		var newUl_dropdownMenu = $("<ul></ul>");
		newSpan_dropdownBtn.after(newUl_dropdownMenu);
		newUl_dropdownMenu.attr({
			"class": "dropdown-menu dropdown-menu-right",
			"aria-labelledby": "dropdownMenu1",
		});
		var newLi_editNotebookName = $("<li></li>");
		newLi_editNotebookName.attr({
			'data-toggle': 'modal',
			'data-target': '.bs-example-modal-sm'
		});
		newUl_dropdownMenu.append(newLi_editNotebookName);
		var newA_editNotebookName = $("<a></a>").text("修改名称");
		newLi_editNotebookName.append(newA_editNotebookName);
		newA_editNotebookName.addClass('edit-notebook-name');
		var newSpan_icon_pencil = $("<span></span>");
		newA_editNotebookName.prepend(newSpan_icon_pencil);
		newSpan_icon_pencil.attr({
			"class": "glyphicon glyphicon-pencil",
			"style": "margin-right:10px;"
		});
		var newLi_divider = $("<li></li>");
		newUl_dropdownMenu.append(newLi_divider);
		newLi_divider.attr({
			"class": 'divider',
			"role": 'separator'
		});
		var newLi_editNotebookDelete = $("<li></li>");
		newUl_dropdownMenu.append(newLi_editNotebookDelete);
		var newA_editNotebookDelete = $("<a></a>").text("删除文集");
		newLi_editNotebookDelete.append(newA_editNotebookDelete);
		newA_editNotebookDelete.addClass('edit-notebook-delete');
		var newSpan_icon_trash = $("<span></span>");
		newA_editNotebookDelete.prepend(newSpan_icon_trash);
		newSpan_icon_trash.attr({
			"class": 'glyphicon glyphicon-trashglyphicon glyphicon-trash',
			"style": "margin-right:10px;"
		});

		//按钮active的切换
		$('.one-notebook').click(function (e) {  
			e.preventDefault();  
			$('.one-notebook').removeClass('active');  
			$(this).addClass('active');    
		});
		//按钮active的切换
		$('.one-article').click(function (e) {  
			e.preventDefault();  
			$('.one-article').removeClass('active');  
			$(this).addClass('active');    
		});
		//删除文集按钮
		$('.edit-notebook-delete').click(function(event) {
			$(this).parents('li')[1].remove();
		});

		//修改名称的【保存】按钮
		$("#enter-edit-name").click(function(event) {
			/*未完成。。。*/
			$(".edit-name").val("");  //input清空
		});
	});

////////////////////////////////////新建新文章////////////////////////////////////
	$('.new-article-btn').click(function(event) {
		var newLi_oneArticle = $("<li></li>");
		newLi_oneArticle.addClass('one-article');
		$('.article-list').prepend(newLi_oneArticle);
		var newDiv_row = $("<div></div>")
		newDiv_row.addClass('row');
		newLi_oneArticle.append(newDiv_row);

		//left
		var newDiv_left = $("<div></div>");
		newDiv_row.append(newDiv_left);
		newDiv_left.addClass('col-md-3 left');
		var newImg_icon_file = $("<img>");
		newDiv_left.append(newImg_icon_file);
		newImg_icon_file.attr({
			'class': 'icon-file',
			'src': 'icon/file-48px.png',
			'alt': '"icon"'
		});
		var newP_charCount = $('<p></p>').text('字数：0');
		newDiv_left.append(newP_charCount);
		newP_charCount.addClass('char-count');

		//middle
		var newDiv_middle = $("<div></div>").text("无标题文章");
		newDiv_row.append(newDiv_middle);
		newDiv_middle.addClass('col-md-7 article-title');

		//right
		var  newDiv_right = $("<div></div>");
		newDiv_row.append(newDiv_right);
		newDiv_right.attr({
			'class': 'dropdown col-md-2 edit-article right',
			'style': 'height:53px;'
		});
		var newSpan_dropdownBtn2 = $("<span></span>");
		newDiv_right.append(newSpan_dropdownBtn2);
		newSpan_dropdownBtn2.attr({
			'class': 'glyphicon glyphicon-cog',
			'id': 'dropdownMenu2',
			'data-toggle': 'dropdown',
			'aria-haspopup': 'true',
			'aria-expanded': 'true'
		});
		var newUl_dropdownMenu2 = $("<ul></ul>");
		newDiv_right.append(newUl_dropdownMenu2);
		newUl_dropdownMenu2.attr({
			'class': 'dropdown-menu dropdown-menu-right',
			'aria-labelledby': 'dropdownMenu2'
		});
		var newLi_editArticleName = $("<li></li>");
		newUl_dropdownMenu2.append(newLi_editArticleName);
		var newA_editArticleName = $("<a></a>").text("直接发布");
		newLi_editArticleName.append(newA_editArticleName);
		newA_editArticleName.attr({
			'href': '#',
			'class': 'edit-article-name'
		});
		var newSpan_icon_shareAlt = $("<span></span>");
		newA_editArticleName.prepend(newSpan_icon_shareAlt);
		newSpan_icon_shareAlt.attr({
			'class': 'glyphicon glyphicon-share-alt',
			'style': 'margin-right:20px'
		});
		var newLi_divider2 = $("<li></li>");
		newUl_dropdownMenu2.append(newLi_divider2);
		newLi_divider2.attr({
			'role': 'separator',
			'class': 'divider'
		});
		var newLi_moveArticle = $("<li></li>");
		newUl_dropdownMenu2.append(newLi_moveArticle);
		var newA_moveArticle = $("<a></a>").text("移动文章");
		newLi_moveArticle.append(newA_moveArticle);
		newA_moveArticle.attr({
			'href': '#',
			'class': 'move-article'
		});
		var newSpan_icon_folderOpen = $("<span></span>");
		newA_moveArticle.prepend(newSpan_icon_folderOpen);
		newSpan_icon_folderOpen.attr({
			'class': 'glyphicon glyphicon-folder-open',
			'style': 'margin-right:20px'
		});
		var newLi_divider3 = $("<li></li>");
		newUl_dropdownMenu2.append(newLi_divider3);
		newLi_divider3.attr({
			'role': 'separator',
			'class': 'divider'
		});
		var newLi_deleteArticle = $("<li></li>");
		newUl_dropdownMenu2.append(newLi_deleteArticle);
		var newA_deleteArticle = $("<a></a>").text("删除文章");
		newLi_deleteArticle.append(newA_deleteArticle);
		newA_deleteArticle.attr({
			'href': '#',
			'class': 'edit-article-delete'
		});
		var newSpan_icon_Trash2 = $("<span></span>");
		newA_deleteArticle.prepend(newSpan_icon_Trash2);
		newSpan_icon_Trash2.attr({
			'class': 'glyphicon glyphicon-trashglyphicon glyphicon-trash',
			'style': 'margin-right:20px'
		});

		//按钮active的切换
		$('.one-notebook').click(function (e) {  
			e.preventDefault();  
			$('.one-notebook').removeClass('active');  
			$(this).addClass('active');    
		});
		//按钮active的切换
		$('.one-article').click(function (e) {  
			e.preventDefault();  
			$('.one-article').removeClass('active');  
			$(this).addClass('active');    
		});

		//删除文章按钮
		$('.edit-article-delete').click(function(event) {
			$(this).parents('li')[1].remove();
		});
	});

});	
