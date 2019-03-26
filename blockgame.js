function setup(){
    createCanvas(300,300);
    x=140;
    y=140;
    xspeed=1;
    yspeed=1;
    x2=120;
    y2=10;
    x2speed=1;
    y2speed=2;
  }
  function draw(){
    background(255);
    fill('red');
    rect(x2,y2,50,50)
    fill('black')
    rect(x,y,10,10);
    
    x2=x2+x2speed;
    y2=y2+y2speed;
    
    
    if(x2+50==width || x2 ==0){
      x2speed=x2speed*-1;
    }
    
    if(y2+50==height || y2==0){
      y2speed=y2speed*-1;
    }
    
    if( (x2==x && y2==y) || 
    (x2+50==x && y2+50) || 
    (x2+50==x && y2==y) || 
    (x2==x && y2+50==y)){
      alert('当たっちゃったぁ');
      return 0;
    }
  }
  
    var app=new Vue({
      el:'#app',
      data:{
        //初期位置xとy
        x:150,
        y:150,
      },
      created:function(){
        rect(x,y,100,100);
      },
      methods:{
        Up:function(event){
          console.log('Up');
          y=y-2;
        },
        Down:function(event){
          console.log('Down');
          y=y+2;
        },
        Right:function(event){
          console.log('Right');
          x=x+2;
        },
        Left:function(event){
          console.log('Left');
          x=x-2;
        },
      }
    })