$(function(){
	//改变衣服正反面
    var turn_cloth = function(direct){
      var z_img = $('.jumbotron li:visible').find('img.z');
      var f_img = z_img.siblings('img');
      if(direct == 'z'){
        z_img.show();
        f_img.hide();
      }else{
        z_img.hide();
        f_img.show();
      }
    }

    //改变款式/图案
    var turn_type = function(t_type){
    	if(t_type =='ks'){
    		$('.list-wrap.ks').show().siblings('.list-wrap.ta').hide();
    	}else{
    		$('.list-wrap.ta').show().siblings('.list-wrap.ks').hide();
    	}
    }

    //改变衣服颜色
    var show_cloth = function(klass){
      var z_o_f = $('.flink .current');
      var t_type = 'z';
      if( z_o_f.length > 0 && z_o_f.hasClass('f') ){
        t_type = 'f';
      }
      var li = $('.jumbotron li.' + klass);
      li.show().siblings().hide();
      var z_img = li.find('img.z');
      var f_img = li.find('img.f');
      if(t_type == 'z'){
        z_img.show();
        f_img.hide();
      }else{        
        z_img.hide();
        f_img.show();
      }
    }

    //正反面选择事件
    $('.z,.f').on('click',function(){
      $(this).addClass('current').siblings().removeClass('current');
      if($(this).hasClass('z')){
      	$(this).parent().addClass('z').removeClass('f');
        turn_cloth('z');
      }else{
      	$(this).parent().addClass('f').removeClass('z');
        turn_cloth('f');
      }
    })


    //颜色选择事件
    $('.tool i').on('click',function(){
      var klass = $(this).attr('class');
      $('.tool i').not(this).removeClass('current')
      $(this).addClass('current')
      show_cloth(klass);
    })	

    //款式/样式按钮事件
    $('.t_l,.t_r').on('click',function(){
    	$(this).addClass('current').siblings().removeClass('current');
      	if($(this).hasClass('ks')){
      		$(this).parent().addClass('ks').removeClass('ta');
      	    turn_type('ks');
      	}else{
      		$(this).parent().addClass('ta').removeClass('ks');
      	    turn_type('ta');
      	}    	
    })

})
