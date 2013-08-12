//Created by Rahul Agarwal (rahul71@gmail.com) 6-5-2013. 
//Feel free to do what you want with this code. 
//Please keep my name in there if you dont mind.
//Also fell free to rant and moan if you think this is crappy. 
//I am open to criticism and want to learn form you. 

var memos = {
  list: {},
  sub: function (key,callback){
      if(!this.list.hasOwnProperty(key)){
          this.list[key] = [];
      }
      this.list[key].push(callback); 

  },  
  pub: function (key, data){
    if(this.list.hasOwnProperty(key)){
      var listCallback = this.list[key];
      for(var i =0,j =listCallback.length;i<j;i++ ){
             listCallback[i](data);      
      }
    }
    else{
      alert("no callback specified for :"+ key)
    }
  },
  broadcast:function(key,data){
    for (var key in this.list) {
      if (this.list.hasOwnProperty(key)) { 
        var listCallback = this.list[key];
        for(var i =0,j =listCallback.length;i<j;i++ ){
             listCallback[i](data); 
        }
      }
    }
  }
  
}
