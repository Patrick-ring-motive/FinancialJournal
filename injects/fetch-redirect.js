globalThis.fetchRedirects=[
  ['https://api.wsj.net','https://api-financial.patrickring.net'],
  ['https://www.wsj.com','https://financial.patrickring.net'],
  ['https://wsjstream.wsj.net','https://stream-financial.patrickring.net']
];
if(!globalThis.nativeFetch){
  globalThis.nativeFetch=globalThis.fetch;
  globalThis.fetch=async function(){
    let args = Array.from(arguments)
    for(let i=0;i<fetchRedirects.length;i++){    
      if(typeof args[0] == 'string'){
        if(args[0].startsWith(fetchRedirects[i][0])){
          args[0]=args[0].replace(fetchRedirects[i][0],fetchRedirects[i][1]);
        }
      }else{
        if(`${args[0].url}`.startsWith(fetchRedirects[i][0])){
          args[0]=new Request(`${args[0].url}`.replace(fetchRedirects[i][0],fetchRedirects[i][1]),args[0]);
        }
      }
    }
    return globalThis.nativeFetch(...args);
  };
  
}

if(!XMLHttpRequest.prototype.nativeOpen){
  XMLHttpRequest.prototype.nativeOpen=XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open=function(){
    let args = Array.from(arguments);
    for(let i=0;i<fetchRedirects.length;i++){    
      if(typeof args[1] == 'string'){
        if(args[1].startsWith(fetchRedirects[i][0])){
          args[1]=args[1].replace(fetchRedirects[i][0],fetchRedirects[i][1]);
        }
      }
    }
    return this.nativeOpen(...args);
  }
}
