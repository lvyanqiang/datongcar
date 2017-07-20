var obj;
$.ajax({
	type:"get",
	url:"data.json",
	async:true,
	success:function(e){
	
		obj=e.coupon;
		console.log(obj)
		var images=''
		var pcon='';
		for (i in obj) {
			var om= obj[i];
			for (j in om) {
				
			}
		}
		images+='<img src="'+om.coImg+'"/>';
		pcon+='<p><b>'+om.sale+'</b></p><p>'+om.save+'：<span>1000元</span></p><p>'+om.also+'90天'+om.over+'</p><p>'+om.end+'</p>'+'<p><a href="#"><input type="button" name="" id="" value="立即打印" /></a><a href="#"><input type="button" name="" id="" value="免费下载" /></a></p>';
		$('.pp').html(images);
		$('.coupon_li1_li').html(pcon)
		
		
	}
});