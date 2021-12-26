   var capital=false;
   var numlock=false;
   var shiftk=false;
    $(".capl").click(function(){
        // console.log(capital)
            if(capital==true){
                capital=false;
                $(".capl").css("background-color","black");
            }
            else{
                capital=true;
                $(".capl").css("background-color","grey"); 
            }

        }
            
    )

    // $(".buton").hide();
    // $("#disp").click(function(){
       
    //     $("p").hide();
    //     $(".buton").show();
    // })
    function valuek(e){ 
        // console.log(e.value);
        if(capital==true && e.value!="Enter" && e.value!="Tab" && e.value!="space"){
             if(shiftk==true){
                e.value=e.value.toLowerCase();
    
            }
            // console.log(e.value.toUpperCase()
            else{
            e.value=e.value.toUpperCase();
            }
        }
        else if(shiftk==true){
            e.value=e.value.toUpperCase();
        }
       
       
        else if(e.value=="Enter"){
            e.value ="\n";
        }
        
        else if(e.value=="Tab"){
            e.value="    ";
    
        }
        else if(e.value=="space"){
            e.value=" ";
        }
        else if(capital==true  &&  numlock==true){
            e.value=e.value.toLowerCase();
        }
    
        else{
        
        e.value=e.value.toLowerCase();
        }
    
        disp.value+=e.value;
    }
    function back(){
        
        var bs=document.getElementById("disp").value;
        var len=bs.length-1;
        
        document.getElementById("disp").value=bs.slice(0,len);
     
    }

var display = document.getElementById('disp');

function back()
{
var ss = display.selectionStart;
var se = display.selectionEnd;
var ln  = display.value.length;

var textbefore = display.value.substring( 0, ss );    //text in front of selected text
var textselected = display.value.substring( ss, se ); //selected text
var textafter = display.value.substring( se, ln );    //text following selected text

if(ss==se) // if no text is selected
{
    display.value = display.value.substring(0, ss-1 ) + display.value.substring(se, ln );
    display.focus();
    display.selectionStart = ss-1;
    display.selectionEnd = ss-1;
}
// else // if some text is selected
// {
//     display.value = textbefore + textafter ;
//     display.focus();
//     display.selectionStart = ss;
//     display.selectionEnd = ss;
// }

}









      function valuen(n){
          if(numlock===true){
                    if(n.value==1){
                        n.value="!";
                       setTimeout(()=>{
                        n.value=1;
                       },2000)
                        console.log(n.value);
                    }
                    else if(n.value=="`"){
                        n.value="~";
                        setTimeout(()=>{
                            n.value="`";
                           },2000)
                    }
                    else if(n.value==2){
                        n.value="@";
                        setTimeout(()=>{
                            n.value=2;
                           },2000)
                        console.log(n.value);

                    }
                    else if(n.value==3){
                        n.value="#";
                        setTimeout(()=>{
                            n.value=3;
                           },2000)
                    }
                    else if(n.value==4){
                        n.value="$";
                        setTimeout(()=>{
                            n.value=4;
                           },2000)
                    }
                    else if(n.value==5){
                        n.value="%";
                        setTimeout(()=>{
                            n.value=5;
                           },2000)
                    }
                    else if(n.value==6){
                        n.value="^";
                        setTimeout(()=>{
                            n.value=6;
                           },2000)
                    }
                    else if(n.value==7){
                        n.value="&";
                        setTimeout(()=>{
                            n.value=7;
                           },2000)
                    }
                    else if(n.value==8){
                        n.value="*";
                        setTimeout(()=>{
                            n.value=8;
                           },2000)
                    }
                    else if(n.value==9){
                        n.value="(";
                        setTimeout(()=>{
                            n.value=9;
                           },2000)
                    }
                    else if(n.value==0){
                        n.value=")";
                        setTimeout(()=>{
                            n.value=0;
                           },2000)
                    }
                    else if(n.value=="-"){
                        n.value="_";
                        setTimeout(()=>{
                            n.value="-";
                           },2000)
                    }
                    else if(n.value==";"){
                        n.value=":";
                        setTimeout(()=>{
                            n.value=";";
                           },2000)
                    }
                    else if(n.value=="'"){
                        n.value='"';
                        setTimeout(()=>{
                            n.value="'";
                           },2000)
                    }
                    else if(n.value=="<"){
                        n.value=',';
                        setTimeout(()=>{
                            n.value="<";
                           },2000)
                    }
                    else if(n.value==">"){
                        n.value='.';
                        setTimeout(()=>{
                            n.value=">";
                           },2000)
                    }
                    else if(n.value=="/"){
                        n.value='?';
                        setTimeout(()=>{
                            n.value="/";
                           },2000)
                    }
                    else if(n.value=="["){
                        n.value='{';
                        setTimeout(()=>{
                            n.value="[";
                           },2000)
                    }
                    else if(n.value=="]"){
                        n.value='}';
                        setTimeout(()=>{
                            n.value="]";
                           },2000)
                    }
                    else if(n.value=='\\'){
                        n.value='|';
                        
                        setTimeout(()=>{
                            n.value='\\';
                           },2000)
                    }
                    else{
                        n.value="=";
                        setTimeout(()=>{
                            n.value="+";
                           },2000)
                    }
                    console.log("True");
                    
                }
            else(numlock===false)
            {    
                
                console.log(n.value);
                n.value=n.value;
                console.log("false");
            }
            
            disp.value+=n.value;
        }
  
        $(".shift").click(function()
        {
            
            numlock=true;
            shiftk=true;
            // setTimeout(()=>{
            //     shiftk=false;
            // },2000)
            console.log("Caps"+ capital);
            console.log("numlock"+numlock)
            $(".shiftl").css("background-color","grey");
            $(".shiftr").css("background-color","grey");
        
        setTimeout(()=>{
            // capital=false;
            
            console.log("Caps"+ capital);
            numlock=false;
            shiftk=false;
            console.log("numlock"+numlock);

            
            $(".shiftl").css("background-color","black");
            $(".shiftr").css("background-color","black");
            // console.log("Delaying function");
        },2000);

        
        // setTimeout(()=>{
            
            
        // },2000);

        // var second=setTimeout(()=>{
        //     capital=false;
        // },1000)
    })


    function control(){
         
        var cop=document.getElementById("disp");
        let option=prompt("What would you like to do?\n A-SelectAll\n C-Copy\nV-Paste","A ,C or V");
        console.log( option);
        option=option.toUpperCase();

        switch(option){
            case "A":
                console.log("A");
                cop.select();
                break;
            case "C":
                console.log("C");
                cop.select();
                navigator.clipboard.writeText(cop.value);
                 alert("CopiedText "+ cop.value);
                break;
            case "V":
                alert("Try to paste later")
           
        }
        
    } 
        
    // function lfn() {
    //     // document.getElementById("disp").style.filter = "brightness(50%)";
    //     document.getElementById("disp").style.backgroundColor="#9793f0";
    //  }
    //  function rfn(){
    //     document.getElementById("disp").style.backgroundColor="white";
    //  }
        
    $(".lfn").click(function(){
        $("#disp").animate({
            opacity:.6,
        })
    })
    $(".rfn").click(function(){
        $("#disp").animate({
            opacity:1,
        })
    })
        
        
        // if(option=="C"||"c")
        //    {      
        //         cop.select();
        //         navigator.clipboard.writeText(cop.value);
        //         alert("CopiedText "+ cop.value);
        //         console.log(" if");
                
        //     }else if(option=="A"||"a"){
        //         cop.select();
        //         console.log("No");
            
        //     }
        //     else (option=="V"||"v")
        //     {
        //         disp.value+=cop.value;
        //     }
           
            

    




