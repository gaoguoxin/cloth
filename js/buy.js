$(function(){
	$(".cloth-info input").numeric();

	//给隐藏表单赋值
	var fill_hidden_input = function(name,val){
		val = val > 0 ? val : 0;
		$('form input[name="' +  name + '"]').attr('value',val);
	}

	//计算总价格和总数量
	var total_cost = function(){
		var price = parseFloat($('.now-price').text());
		var count = 0;
		$('form input[type="hidden"]').each(function (i,e) {
			var cur = parseInt($(e).val());
			if(isNaN(cur)){
				cur = 0;
			} 
			count += cur;
		});

		var total = price * count;

		$('.total-num').text(count);
		$('.cost').text(total);
	}

	//男款女款切换事件
	$('.cloth-img button').click(function(){
		$(this).addClass('active').siblings('button').removeClass('active');
		if($(this).hasClass('female')){
			$('tr.female').addClass('current').siblings('tr.male').removeClass('current');
			$('tr.female input').prop('disabled', false);
			$('tr.male input').prop('disabled', true);
		}else{
			$('tr.male').addClass('current').siblings('tr.female').removeClass('current');
			$('tr.male input').prop('disabled', false);
			$('tr.female input').prop('disabled', true);			
		}
	})

	//衣服数量件数更改事件
	$('.cloth-info input').keyup(function(){
		var name = $(this).attr('name');
		var val  = $(this).val();
		fill_hidden_input(name,val);
		total_cost();	
	})


})