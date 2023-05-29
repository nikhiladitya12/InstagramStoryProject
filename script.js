 var arr =[
    {dp:"https://images.unsplash.com/photo-1671776616691-df293d9918b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80",story:"https://images.unsplash.com/photo-1671776616710-5ce2ba32b447?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80"},
    {dp:"https://images.unsplash.com/photo-1671398320362-eb231e75fd42?ixlib=rb-4.0.3&ixid=Mnwhttps://images.unsplash.com/photo-1671646783492-da85e0aa5105?ixlxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",story:"https://images.unsplash.com/photo-1671533418073-6b39f9163e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80"},
    {dp:"https://images.unsplash.com/photo-1671765106039-5d6c7091c017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",story:"https://images.unsplash.com/photo-1671454264323-ceb82eec84e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {dp:"https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",story:"https://images.unsplash.com/photo-1671797024941-15f8a5e839a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2057&q=80"},
 ]
    var clutter="";
    var timer;
    var prog=0;
    arr.forEach(function(elem,index){
        clutter=clutter +`<div id ="story">
        <div id="inner"><img id="${index}" src="${elem.dp}" alt="">
    </div></div>`
    })

        
    document.querySelector("#stories").innerHTML=clutter;
    document.querySelector("#stories").addEventListener("click",function(dets){
      console.log(dets.target.id);
      document.querySelector("#fs").style.display="flex";
      document.querySelector("#center").style.backgroundImage=`url(${arr[dets.target.id].story})`;

      timer=setTimeout(function(){
         document.querySelector("#fs").style.display="none";
      }, 2900)

      if(prog<100){
         setInterval(function(){
            document.querySelector("#progressmaker").style.width=`${prog++}%`;
         },30)
      }
         else{
           prog =0; 
         }
      
    })