window.onload=function(){

    function showMessage(event){
      //eventUtil.stopPropagation(event);
      var event=eventUtil.getEvent(event);
      alert(event.type);
    };
    function showMessage1(){

      alert('btn');

    }
    var btn=document.getElementById('btn');
    var go=document.getElementById('box');

    eventUtil.addHandler(btn,'click',showMessage);
    eventUtil.addHandler(go,'click',showMessage1);

   // eventUtil.removeHandler(btn,'click',showMessage);


}