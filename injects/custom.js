void async function(){
  if(!globalThis.declare){
    await import('https://unpkg.com/javaxscript/framework.js');
  }
      design(() => {
        swapText('wall street journal','Financial Journal');
        swapText('wallstreet journal','Financial Journal');
        swapText('wsj','Financial Journal');
        replaceProperty(document,'title', /wall street journal/gi,'Financial Journal');
        replaceProperty(document,'title', /wallstreet journal/gi,'Financial Journal');
        replaceProperty(document,'title', /wsj/gi,'Financial Journal');
      });
      design(()=>{
        queryApplyAll('iframe[src*="doubleclick.net"],[id*="parsely"]',(el)=>{
          el.remove();
        });
      });
}();
