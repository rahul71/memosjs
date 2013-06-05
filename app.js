$(function(){

  $("body").on("click", "#btnSend1", function(){
    memos.pub("MSGSENT1", $("#txtMsg").val());
  });
  
  $("body").on("click", "#btnSend2", function(){
    memos.pub("MSGSENT2", $("#txtMsg").val());
  });
  
  $("body").on("click", "#btnSend3", function(){
    memos.broadcast("MSGSENT3", $("#txtMsg").val());
  });
  
  memos.sub("MSGSENT1", function(data,key){
    $("#txtReceive1").val($("#txtReceive1").val() + data + "\n");
    
  });
  
  memos.sub("MSGSENT2", function(data,key){
    $("#txtReceive2").val($("#txtReceive2").val() + data + "\n");    
  });
  
});
