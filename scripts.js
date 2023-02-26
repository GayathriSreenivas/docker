function dele(){
    var rev =document.getElementById('deleteimage');
    var loading =document.getElementById("load");
    loading.style.display="block";
        var n = document.getElementById('dele');
        n.innerHTML ="deleting..!!"
        document.getElementById('dele').style.backgroundColor = "white";
        document.getElementById('dele').style.color = "red";
        var msg =document.getElementById('deleteimage').value;
        var data ={
            "imagename" :msg }
        var gs=fetch('http://127.0.0.1:5000/dele1',{
            method :'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        gs.then(res => res.json()).then(res=>{
            console.log(res)
            var gs1 = document.getElementById("mainOutput");
            gs1.innerHTML = res.message;
            n.innerHTML="delete";
            n.style.backgroundColor = "red";
            n.style.color="white";
            loading.style.display="none";
            rev.value="";
           
        })
        var gs1 =fetch('http://127.0.0.1:5000/showrevert');
        gs1.then(res => res.json()).then(res=>{
         console.log(res);
         var gs1 = document.getElementById("sh");
         gs1.innerHTML = res.message;
         
        })

}

///////launching////////////

function laun(){
    var loading =document.getElementById("load");
    loading.style.display="block";
    var gs1 = document.getElementById("launc");
            gs1.innerHTML = "launching...!!";
    var msg =document.getElementById('runimage').value;
    var msg1 =document.getElementById('containername').value;
    var msg2 =document.getElementById('hostport').value;
    var msg3 =document.getElementById('containerport').value;
    var msg4 =document.getElementById('volumepath').value;
        var data ={
            "imagename" :msg,
            "containername" :msg1,
            "hostport" :msg2,
            "containerport":msg3,
            "volumepath":msg4
             }
             
        var gs=fetch('http://127.0.0.1:5000/laun',{
                method :'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            });
            gs.then(res =>res.json()).then(res=>{
                console.log(res);
                var gs5 = document.getElementById("mainOutput");
                gs5.innerHTML = res.message;
                gs1.innerHTML = "launch";
                loading.style.display="none";
                document.getElementById('runimage').value="";
                document.getElementById("containername").value="";
                document.getElementById("hostport").value="";
                document.getElementById("containerport").value="";
                document.getElementById("volumepath").value="";
                

            })

}

//////////////deleting all/////////////////////

function dea(){
    var loading =document.getElementById("load");
    loading.style.display="block";
       var  n = document.getElementById('dea');
       var  n1 =  document.getElementById('deletes');
        n.style.backgroundColor = "white";
        n.style.color = "red";
        n1.style.backgroundColor = "red";
        n1.style.color = "white";
        n.innerHTML="deleting!!"
        var gs=fetch('http://127.0.0.1:5000/dea1');
        gs.then(res => res.json()).then(res=>{
            var gs1 = document.getElementById("mainOutput");
            gs1.innerHTML = res.message;
            n.style.backgroundColor = "red";
            n.style.color = "white";
            n.innerHTML='delete all';
            loading.style.display="none";
            document.getElementById('deletename').value="";
           
        })
        var gs2=fetch('http://127.0.0.1:5000/stoprevert') ;
        gs2.then(res => res.json()).then(res=>{
            console.log(res)
            var gs2 = document.getElementById("st");
            gs2.innerHTML = res.message;
        })
        var gs3=fetch('http://127.0.0.1:5000/deletesrevert') ;
    gs3.then(res => res.json()).then(res=>{
        console.log(res)
        var gs3 = document.getElementById("deletes");
        gs3.innerHTML = res.message;
        
    })
}

////////deleting an image/////////////////


function deletes(){
    var loading =document.getElementById("load");
    loading.style.display="block";
    var n =document.getElementById('deletes')
    n.style.backgroundColor = "white";
    n.style.color = "red";
    n.innerHTML ="deleting..!!";
    var msg =document.getElementById('deletename').value;
    var data={
        "name":msg
    }
    var gs=fetch('http://127.0.0.1:5000/deletes1',{
                method :'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            });
    gs.then(res => res.json()).then(res=>{
        var gs3 = document.getElementById("mainOutput");
        gs3.innerHTML = res.message;
        n.innerHTML ="delete";
        n.style.backgroundColor = "red";
        n.style.color = "white";
        loading.style.display="none";
        document.getElementById('deletename').value="";
    })

    var gs1=fetch('http://127.0.0.1:5000/stoprevert') ;
    gs1.then(res => res.json()).then(res=>{
        var gs1 = document.getElementById("st");
        gs1.innerHTML = res.message;
    })
    var gs2=fetch('http://127.0.0.1:5000/dearevert') ;
    gs2.then(res => res.json()).then(res=>{
        var gs2 = document.getElementById("dea");
        gs2.innerHTML = res.message;
    })
    document.getElementById('dea').style.backgroundColor = "red";
    document.getElementById('dea').style.color = "white";
}

///////////////////view logs////////////////////

function view(){
    var loading =document.getElementById("load");
    loading.style.display="block";
    var n =document.getElementById('vl');
    n.innerHTML = "viewing logs";
    var msg =document.getElementById('logs').value;
    var data={
        "name":msg
    }
    var gs=fetch('http://127.0.0.1:5000/view',{
                method :'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            });
    gs.then(res => res.json()).then(res=>{
        console.log(res);
        if(res.message==''){
            var mes = "No logs";
        }
        else{
            var mes =res.message;
        }
        var gs2 = document.getElementById("mainOutput");
            gs2.innerHTML = mes;
            n.innerHTML = "view logs";
            loading.style.display="none";
            document.getElementById("logs").value="";
       
    })
   

}


/////////--help command /////////

function helpp(){
    var loading = document.getElementById("load");
    loading.style.display="block";
    var n = document.getElementById('hel');
    n.innerHTML="helping!!";
    var msg =document.getElementById('mgmtcmd').value;
    var data={
        "mgmtcmd":msg
    }
    var gs=fetch('http://127.0.0.1:5000/help1',{
                method :'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            });
    gs.then(res => res.json()).then(res=>{
        console.log(res);
        var slg =res.message;
        var newgs="";
        for(var i=0;i<slg.length;i++){
            if(slg[i]=="\n"){
                    newgs =newgs+"<br>";
            }
            else{
                    newgs = newgs+slg[i];
            }
        }
        var gs2 = document.getElementById("mainOutput");
            gs2.innerHTML =newgs;
            n.innerHTML="help";
            loading.style.display="none";
            document.getElementById('mgmtcmd').value="";
       
    })

}

//////////////////container statuses//////////////////////


function status(){
    var loading =document.getElementById("load");
    loading.style.display="block";
    var gs = fetch('http://127.0.01:5000/status');
    gs.then(res => res.json()).then(res=>{
        console.log(res);
        var gs2= document.getElementById("mainOutput");
            var gws = res.message;
            var newgs="";
            console.log(typeof(gws))
            for(var i=0;i<gws.length;i++){
            if(gws[i]=="\n"){
                        newgs =newgs+"<br>"; 
                    }
                else{
                    newgs = newgs+gws[i];
                }
                }
            console.log(newgs);
            gs2.innerHTML = newgs;
            loading.style.display="none";
    })
}

///////////////////show containers///////////////////


function show(){
    var loading =document.getElementById("load");
    loading.style.display="block";
    var gs1= document.getElementById("sh");
            gs1.innerHTML = "loading...!!";
    var gs=fetch('http://127.0.0.1:5000/show') ;
    gs.then(res => res.json()).then(res=>{
        console.log(res);
        
        var gs2 = document.getElementById("mainOutput");
            var slg =res.msg;
            var newgs="";
            for(var i=0;i<slg.length;i++){
                if(slg[i]=="\n"){
                        newgs =newgs+"<br>";
                }
                else{
                newgs = newgs+slg[i];
                }
            }
            gs2.innerHTML =newgs;
            var gs1 = document.getElementById("sh");
            gs1.innerHTML = "show";
            loading.style.display="none";
            
       
    })
    var gs2 =fetch('http://127.0.0.1:5000/deleterevert');
    gs2.then(res => res.json()).then(res=>{
     console.log(res);
     var gs2 = document.getElementById("dele");
     gs2.innerHTML = res.message;
    })
    document.getElementById('dele').style.backgroundColor = "red";
    document.getElementById('dele').style.color = "white";

}

///////////////////////stoping the container//////////////////////

function stop(){
    var loading =document.getElementById("load");
    loading.style.display="block";
    var gs1 = document.getElementById("st");
    gs1.innerHTML = "stopping...!!";
    var sg =document.getElementById("stopcont").value;
    var data={
        "name":sg
    }
    
    var gs=fetch('http://127.0.0.1:5000/stop',{
        method :'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    
    gs.then(res =>res.json()).then(res=>{
        console.log(res);
        var gs5 = document.getElementById("mainOutput");
        gs5.innerHTML = res.msg;
        gs1.innerHTML = "stop";
        loading.style.display="none";
        document.getElementById("stopcont").value="";
        
    })
    
    var gs9=fetch('http://127.0.0.1:5000/dearevert') ;
    gs9.then(res => res.json()).then(res=>{ 
        var gs9 = document.getElementById("dea");
        gs9.innerHTML = res.message;
    })
    var gs2=fetch('http://127.0.0.1:5000/deletesrevert') ;
    gs2.then(res => res.json()).then(res=>{
        var gs2 = document.getElementById("deletes");
        gs2.innerHTML = res.message;
    })
   
    document.getElementById('dea').style.backgroundColor = "red";
    document.getElementById('dea').style.color = "white";
    document.getElementById('deletes').style.backgroundColor = "red";
    document.getElementById('deletes').style.color = "white";
    


}


////////////////////////executing ////////////////


function exec(){
    var loading=document.getElementById("load");
    loading.style.display="block";
    var gs4 =document.getElementById('exe');
    gs4.innerHTML="executing!!";
    var sg =document.getElementById("execname").value;
    var sg1 =document.getElementById("command").value;
    var data={
        "name":sg,
        "command":sg1
    }
    console.log(data);
    var gs=fetch('http://127.0.0.1:5000/execute',{
        method :'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    gs.then(res => res.json()).then(res=>{
        console.log(res);
        if(res.message==''){
            var content = "container name not found..!!";
        }
        else{
            var content =res.message;
        }
        var gs2 = document.getElementById("mainOutput");
            gs2.innerHTML = content;
            gs4.innerHTML="execute";
            loading.style.display="none";
            document.getElementById("execname").value="";
            document.getElementById("command").value="";

    })

}


///////////////////pulling an image//////////////////////

function pull(){
    var rev=document.getElementById('pullimage');
    var loading =document.getElementById("load");
    loading.style.display="block";
    var n = document.getElementById('pi');
    n.innerHTML="pulling..!!";
    var msg = document.getElementById('pullimage').value;
    var data ={
        "imagename" :msg
}
    var gs = fetch('http://127.0.0.1:5000/pull',{
        method :'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    gs.then(res => res.json()).then(res=>{
        console.log(res)
        var gs1 = document.getElementById("mainOutput");
        gs1.innerHTML = res.message;
        msg =" ";
        n.innerHTML = "pull image";
        loading.style.display="none";
        rev.value="";
       
    })
    var gs2 =fetch('http://127.0.0.1:5000/deleterevert');
    gs2.then(res => res.json()).then(res=>{
     var gs2 = document.getElementById("dele");
     gs2.innerHTML = res.message;
    })
    document.getElementById('dele').style.backgroundColor = "red";
    document.getElementById('dele').style.color = "white";
    var gs1 =fetch('http://127.0.0.1:5000/showrevert');
    gs1.then(res => res.json()).then(res=>{
     var gs1 = document.getElementById("sh");
     gs1.innerHTML = res.message;
    })
   
}

////////////////////////////images//////////////////////////////

function imag(){
    document.getElementById('dele').style.backgroundColor = "red";
    document.getElementById('dele').style.color = "white";
    document.getElementById('i').style.backgroundColor =" rgb(51, 50, 50)";
    document.getElementById('i').style.color ="white";
    document.getElementById('de').style.color ="rgb(19, 92, 92)";
    document.getElementById('lo').style.color ="rgb(19, 92, 92)";
    document.getElementById('h').style.color ="rgb(19, 92, 92)";
    document.getElementById('la').style.color ="rgb(19, 92, 92)";
    document.getElementById('e').style.color ="rgb(19, 92, 92)";
    document.getElementById('de').style.backgroundColor ="white";
    document.getElementById('lo').style.backgroundColor ="white";
    document.getElementById('h').style.backgroundColor ="white";
    document.getElementById('la').style.backgroundColor ="white";
    document.getElementById('e').style.backgroundColor ="white";
        var img = document.getElementById('gs1');
        img.style.display ='block';
        var img = document.getElementById('gs2');
        img.style.display ='none';
        var img = document.getElementById('gs3');
        img.style.display ='none';
        var img = document.getElementById('gs4');
        img.style.display ='none';
        var img = document.getElementById('gs5');
        img.style.display ='none';
        var img = document.getElementById('gs6');
        img.style.display ='none';

        var gs=fetch('http://127.0.0.1:5000/images') ;
            gs.then(res => res.json()).then(res=>{
                console.log(res);
                var gs = document.getElementById("mainOutput");
                gs.innerHTML = res.message;
        
               
            })
        var gs1 =fetch('http://127.0.0.1:5000/showrevert');
           gs1.then(res => res.json()).then(res=>{
            console.log(res);
            var gs1 = document.getElementById("sh");
            gs1.innerHTML = res.message;
           })
           var gs2 =fetch('http://127.0.0.1:5000/deleterevert');
           gs2.then(res => res.json()).then(res=>{
            console.log(res);
            var gs2 = document.getElementById("dele");
            gs2.innerHTML = res.message;
           })
}

///////////////launch///////////////////


function launch(){
    document.getElementById('la').style.backgroundColor =" rgb(51, 50, 50)";
    document.getElementById('la').style.color ="white";
    document.getElementById('de').style.color ="rgb(19,92,92)";
    document.getElementById('lo').style.color ="rgb(19,92,92)";
    document.getElementById('e').style.color ="rgb(19,92,92)";
    document.getElementById('h').style.color ="rgb(19,92,92)";
    document.getElementById('i').style.color ="rgb(19,92,92)";
    document.getElementById('de').style.backgroundColor ="white";
    document.getElementById('lo').style.backgroundColor ="white";
    document.getElementById('e').style.backgroundColor ="white";
    document.getElementById('h').style.backgroundColor ="white";
    document.getElementById('i').style.backgroundColor ="white";
    var img = document.getElementById('gs2');
    img.style.display ='block';
    var img = document.getElementById('gs1');
    img.style.display ='none';
    var img = document.getElementById('gs3');
    img.style.display ='none';
    var img = document.getElementById('gs4');
    img.style.display ='none';
    var img = document.getElementById('gs5');
    img.style.display ='none';
    var img = document.getElementById('gs6');
    img.style.display ='none';
    var gs=fetch('http://127.0.0.1:5000/launch') ;
    gs.then(res => res.json()).then(res=>{
        console.log(res)
        var gs = document.getElementById("mainOutput");
        gs.innerHTML = res.message;
    })
    var gs=fetch('http://127.0.0.1:5000/launchrevert') ;
    gs.then(res => res.json()).then(res=>{
        console.log(res)
        var gs = document.getElementById("launc");
        gs.innerHTML = res.message;
    })

}

/////////////delete//////////////////


function del(){
    document.getElementById('dea').style.backgroundColor = "red";
    document.getElementById('dea').style.color = "white";
    document.getElementById('deletes').style.backgroundColor = "red";
    document.getElementById('deletes').style.color = "white";
    document.getElementById('de').style.backgroundColor =" rgb(51, 50, 50)";
    document.getElementById('de').style.color ="white";
    document.getElementById('la').style.color ="rgb(19,92,92)";
    document.getElementById('i').style.color ="rgb(19,92,92)";
    document.getElementById('lo').style.color ="rgb(19,92,92)";
    document.getElementById('e').style.color ="rgb(19,92,92)";
    document.getElementById('h').style.color ="rgb(19,92,92)";
    document.getElementById('la').style.backgroundColor ="white";
    document.getElementById('i').style.backgroundColor ="white";
    document.getElementById('lo').style.backgroundColor ="white";
    document.getElementById('e').style.backgroundColor ="white";
    document.getElementById('h').style.backgroundColor ="white";
    var img = document.getElementById('gs3');
    img.style.display ='block';
    var img = document.getElementById('gs1');
    img.style.display ='none';
    var img = document.getElementById('gs2');
    img.style.display ='none';
    var img = document.getElementById('gs4');
    img.style.display ='none';
    var img = document.getElementById('gs5');
    img.style.display ='none';
    var img = document.getElementById('gs6');
    img.style.display ='none';

    var gs=fetch('http://127.0.0.1:5000/delete') ;
    gs.then(res => res.json()).then(res=>{
        console.log(res)
        var gs = document.getElementById("mainOutput");
        gs.innerHTML = res.message;
    })
    var gs=fetch('http://127.0.0.1:5000/stoprevert') ;
    gs.then(res => res.json()).then(res=>{
        console.log(res)
        var gs = document.getElementById("st");
        gs.innerHTML = res.message;
    })
    var gs=fetch('http://127.0.0.1:5000/dearevert') ;
    gs.then(res => res.json()).then(res=>{
        
        var gs = document.getElementById("dea");
        gs.innerHTML = res.message;
    })
    var gs=fetch('http://127.0.0.1:5000/deletesrevert') ;
    gs.then(res => res.json()).then(res=>{
        
        var gs = document.getElementById("deletes");
        gs.innerHTML = res.message;
    })
}

////////////////logs///////////////


function logs(){
    document.getElementById('lo').style.backgroundColor =" rgb(51, 50, 50)";
    document.getElementById('lo').style.color ="white";
    document.getElementById('i').style.color ="rgb(19,92,92)";
    document.getElementById('de').style.color ="rgb(19,92,92)";
    document.getElementById('e').style.color ="rgb(19,92,92)";
    document.getElementById('h').style.color ="rgb(19,92,92)";
    document.getElementById('la').style.color ="rgb(19,92,92)";
    document.getElementById('i').style.backgroundColor ="white";
    document.getElementById('de').style.backgroundColor ="white";
    document.getElementById('e').style.backgroundColor ="white";
    document.getElementById('h').style.backgroundColor ="white";
    document.getElementById('la').style.backgroundColor ="white";
    var img = document.getElementById('gs4');
    img.style.display ='block';
    var img = document.getElementById('gs1');
    img.style.display ='none';
    var img = document.getElementById('gs3');
    img.style.display ='none';
    var img = document.getElementById('gs2');
    img.style.display ='none';
    var img = document.getElementById('gs5');
    img.style.display ='none';
    var img = document.getElementById('gs6');
    img.style.display ='none';

    var gs=fetch('http://127.0.0.1:5000/containers') ;
    gs.then(res => res.json()).then(res=>{
        console.log(res)
        var gs = document.getElementById("mainOutput");
        gs.innerHTML = res.message;
    })
    var gs2 =fetch('http://127.0.0.1:5000/viewrevert');
    gs2.then(res => res.json()).then(res=>{
     console.log(res);
     var gs2 = document.getElementById("vl");
     gs2.innerHTML = res.message;
    })
}

////////////execute////////////////

function execute(){
    document.getElementById('e').style.backgroundColor =" rgb(51, 50, 50)";
    document.getElementById('e').style.color ="white";
    document.getElementById('i').style.color ="rgb(19,92,92)";
    document.getElementById('de').style.color ="rgb(19,92,92)";
    document.getElementById('lo').style.color ="rgb(19,92,92)";
    document.getElementById('h').style.color ="rgb(19,92,92)";
    document.getElementById('la').style.color ="rgb(19,92,92)";
    document.getElementById('i').style.backgroundColor ="white";
    document.getElementById('de').style.backgroundColor ="white";
    document.getElementById('lo').style.backgroundColor ="white";
    document.getElementById('h').style.backgroundColor ="white";
    document.getElementById('la').style.backgroundColor ="white";
    var img = document.getElementById('gs5');
    img.style.display ='block';
    var img = document.getElementById('gs1');
    img.style.display ='none';
    var img = document.getElementById('gs3');
    img.style.display ='none';
    var img = document.getElementById('gs4');
    img.style.display ='none';
    var img = document.getElementById('gs2');
    img.style.display ='none';
    var img = document.getElementById('gs6');
    img.style.display ='none';

    var gs=fetch('http://127.0.0.1:5000/expose') ;
    gs.then(res => res.json()).then(res=>{
        console.log(res)
        var gs = document.getElementById("mainOutput");
        gs.innerHTML = res.message;
    })
    var gs=fetch('http://127.0.0.1:5000/executerevert') ;
    gs.then(res => res.json()).then(res=>{
        console.log(res);
        var gs = document.getElementById("exe");
            gs.innerHTML = res.message;
        
       
    })

}

//////////////help////////////



function help(){
    document.getElementById('h').style.backgroundColor =" rgb(51, 50, 50)";
    document.getElementById('h').style.color ="white";
    document.getElementById('i').style.color ="rgb(19,92,92)";
    document.getElementById('de').style.color ="rgb(19,92,92)";
    document.getElementById('lo').style.color ="rgb(19,92,92)";
    document.getElementById('e').style.color ="rgb(19,92,92)";
    document.getElementById('la').style.color ="rgb(19,92,92)";
    document.getElementById('i').style.backgroundColor ="white";
    document.getElementById('de').style.backgroundColor ="white";
    document.getElementById('lo').style.backgroundColor ="white";
    document.getElementById('e').style.backgroundColor ="white";
    document.getElementById('la').style.backgroundColor ="white";
    var img = document.getElementById('gs6');
    img.style.display ='block';
    var img = document.getElementById('gs1');
    img.style.display ='none';
    var img = document.getElementById('gs3');
    img.style.display ='none';
    var img = document.getElementById('gs4');
    img.style.display ='none';
    var img = document.getElementById('gs5');
    img.style.display ='none';
    var img = document.getElementById('gs2');
    img.style.display ='none';

    var gs=fetch('http://127.0.0.1:5000/help') ;
    gs.then(res => res.json()).then(res=>{
        console.log(res)
        var gs = document.getElementById("mainOutput");
        gs.innerHTML = res.msg;
    })
    var gs=fetch('http://127.0.0.1:5000/help1revert') ;
    gs.then(res => res.json()).then(res=>{
        console.log(res);
        var gs = document.getElementById("hel");
            gs.innerHTML = res.message;
        
       
    })
}
