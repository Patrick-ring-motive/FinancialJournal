if(!globalThis.fetch.nativeFetch){
  globalThis.fetch.nativeFetch=globalThis.fetch;
  globalThis.fetch=async function(){
    let args = Array.from(arguments)
    if(typeof args[0] == 'string'){
      if(args[0].startsWith('https://api.wsj.com')){
        args[0]=args[0].replace('https://api.wsj.com','https://api-financial.patrickring.net');
      }
    }else{
      if(`${args[0].url}`.startsWith('https://api.wsj.com')){
        args[0]=new Request(`${args[0].url}`.replace('https://api.wsj.com','https://api-financial.patrickring.net'),args[0]);
      }
    }
    return globalThis.nativeFetch(...args);
  };
  
}
