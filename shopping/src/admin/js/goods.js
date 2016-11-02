!function(window, document, $, undefined) {
//	程序唯一入口
	var init = function() {
		bindEvent();
		
	};
//	绑定所有事件
	var bindEvent = function() {
		$('#chbclick').on('click', onChbClick);
		$('#newBtn').on('click', onNewBtnClick);
		$('#saveBtn').on('click', onSaveBtnClick);
	};
	
	var onSaveBtnClick = function() {
		var url = '../../../api/shopping_goods_add.php';
		var data = {
			title: $('#title').val(),
			price: $('#price').val(),
			details: $('#detail').val(),
			amount: $('#amount').val(),
			classify: $('#classify').val(),
			status: $('input[name=status]:checked').val()
		};
		
		var	num = /^[0-9]*$/;
		
		if($.trim(data.title) == '') {
			layer.msg('商品名称不能为空', {
				offset: 35,
				shift: 5,
			});
			return false;
		};
		
		if($.trim(data.price) == '') {
			layer.msg('价格不能为空', {
				offset: 35,
				shift: 5,
			});
			return false;
		} else if(!num.test(data.price)) {
			layer.msg('价格必须为数字', {
				offset: 35,
				shift: 5,
			});
			return false;
		};
		
		if($.trim(data.amount) == '') {
			layer.msg('库存不能为空', {
				offset: 35,
				shift: 5,
			});
			return false;
		} else if(!num.test(data.amount)) {
			layer.msg('库存必须为数字', {
				offset: 35,
				shift: 5,
			}); 
			return false;
		};
		
		if(data.classify == 0) {
			layer.msg('请选择商品类别', {
				offset: 35,
				shift: 5,
			});
			return false;
		};
		
		var index = layer.load(2, {
		  shade: [0.2,'#000']
		});
		
		$.get(url, data, function(response) {
			if(response.success) {
				layer.closeAll();
				$('#goodsDlg').modal('hide');
				$('#form').trigger('reset');
				layer.msg('商品添加成功', {offset: 35, shift: 5,});
			} else {
				layer.msg('商品添加失败', {offset: 35, shift: 5,});
			}
		}, 'json');
	};
	
	var onNewBtnClick = function() {
		$('#goodsDlg').modal();
	};
	
	var onChbClick = function() {
		
	};
	
	$(document).ready(init);
	
}(window, document, jQuery);