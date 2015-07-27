var eventUtil={
         	// 添加句柄
          addHandler:function(element,type,handler)
                   {
                      if(element.addEventListener)
                      {
                         element.addEventListener(type,handler,false);

                      }else if(element.attachEvent)
                            {
                              element.attachEvent('on'+type,handler);

                            }else{

                              element['on'+type]=handler;

                            }
                    },
          
         	// 删除句柄
          removeHandler:function(element,type,handler){

                    if(element.removeEventListener) {
                        
                       element.removeEventListener(type,handler,false);

                    }else if(element.detachEvent){
                        
                        element.attachEvent('on'+type,handler);

                    }else{

                      element['on'+type]=null;
                    }


          },
          
          //获取event
          getEvent:function(event){

              return event?event:window.event;

          },
          
          //获取type 事件类型
          getType:function(event){

            return event.type;
          },

         
          //获取点击事件的元素 target srcElement
          getElement:function(event)
          {
            return event.target||event.srcElement;
          },
          
        
          //阻止默认事件  stopPropagation
          preventDefault:function (event) {
            if(event.preventDefault)
            {
              event.preventDefault();
            }else{
              event.returnValue=false;
            }
          },
          
          //阻止冒泡事件
          stopPropagation:function(event){
            if(event.stopPropagation)
            {
              event.stopPropagation();
            }else{

              event.cancleBubble=true;
            }


          }
         
  }