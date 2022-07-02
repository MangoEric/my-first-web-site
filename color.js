
    var links = {
        setColor:function(color){
            var alist = document.querySelectorAll('a');
            var i = 0;
            while(i < alist.length){
                alist[i].style.color = color;
                i = i + 1;
                }
            }
        }
    var body = {
        setColor:function(color){
            document.querySelector('body').style.color = color;
            },
        
        setBackgroundColor:function(color){
            document.querySelector('body').style.backgroundColor = color;
            }
        }
    function nightDayHandler(self){
            var target = document.querySelector('body');
            if(self.value ==='night mode'){
                body.setBackgroundColor('black');
                body.setColor('white');
                self.value = 'day mode';

                links.setColor('powderblue');
            } else {
                body.setBackgroundColor('white');
                body.setColor('black');
                self.value = 'night mode';

                links.setColor('blue');
            }
        }
