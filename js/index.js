window.onload=function(){
	var oInp=document.getElementById("inp");
	var oTop_btn=document.getElementById("top_btn");
	
	oTop_btn.onclick=function(){
		
		if(oInp.value == ''){
      alert('你丫啥啊')
      return false;
    }
		
		ajax({
			type:'get',
			url:'https://api.imjad.cn/cloudmusic/?type=search&s='+oInp.value,
			async:true,
			
			success:function(data){
				var oUl=document.getElementById("content_music");
				oUl.innerHTML='';
				
			  for(var i=0 ;i<data.result.songs.length;i++){
				 	var nLi=document.createElement("li");
				 	
				 	var nImage=document.createElement("img");
				 	nImage.setAttribute('src',data.result.songs[i].al.picUrl);
				 	nImage.setAttribute('title',data.result.songs[i].id);
				 	
				 	nLi.appendChild(nImage);
          oUl.appendChild(nLi);  
			  }		   
			}
		})
		var oUl=document.getElementById("content_music");
		var oImage=document.getElementsByTagName('img');
			
		oUl.onclick=function(){
			alert(1);
			var e=e||window.event;
      var itarget=e.srcElement||e.target;

			if(itarget.nodeName='IMG'){
				ajax({
					type:'get',
					url:'https://api.imjad.cn/cloudmusic/?type=song&id='+itarget.getAttribute('title'),
					async:true,
					success:function(data){
					  var oad=document.getElementsByTagName('audio')[0];
            oad.setAttribute('src',data.data[0].url)
					}
				})
			}
		}
	}
}

