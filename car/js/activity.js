var obj;
$.ajax({
	type:"get",
	url:"data.json",
	async:true,
	success:function(e){
		obj=e.activity;
		var images='';
		var litext='';
		for (i in obj) {
			var im=obj[i];
			for (j in im) {
				
			}
		}
		images+='<img src="'+im.actImg+'"/>';
		litext+='<li><b>'+im.actSale+'</b></li>'+'<li>'+im.actSave+':<span><b>12000元</b></span></li><li>'+im.actAlso+'：<b>10份</b>&nbsp;'+im.actOver+'余<b>5</b>份</li><li>'+im.actStart+'：2017-07-13至2017-08-01</li>';
		$('.activity_choujiang_ul').html(litext);
		$('.shou').html(images);
	}
});