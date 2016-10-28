!function(window, document, $, undefined) {
//	程序唯一入口
	var init = function() {
		bindEvent();
	};
//	绑定所有事件
	var bindEvent = function() {
		$('#newBtn').on('click', onNewBtnClick);
		$('#saveBtn').on('click', onSaveBtnClick);
	};
	
	var onSaveBtnClick = function() {
		var data = {
			title: $('#title').val(),
			price: $('#price').val(),
			details: $('#detail').val(),
			amount: $('#amount').val(),
			classify: $('#classify').val(),
			status: $('input[name=status]:checked').val()
		},
		
			num = /^[0-9]*$/;
		
		if($.trim(data.title) == '') {
			alert('商品名称不能为空')
			return false;
		};
		
		if($.trim(data.price) == '') {
			alert('价格不能为空')
			return false;
		} else if(!num.test(data.price)) {
			alert('价格必须为数字'); 
			return false;
		};
		
		if($.trim(data.amount) == '') {
			alert('库存不能为空')
			return false;
		} else if(!num.test(data.amount)) {
			alert('库存必须为数字'); 
			return false;
		};
		
		if(data.classify == 0) {
			alert('请选择商品类别')
			return false;
		};	
	};
	
	var onNewBtnClick = function() {
		$('#goodsDlg').modal();
	};
	
	$(document).ready(init);
	
}(window, document, jQuery);