void async function LinkResolver(){
  if(!globalThis.declare){
    await import('https://unpkg.com/javaxscript/framework.js');
  }
  globalThis.hostList = ['www.wsj.com'];
      declare(() => {
        swapText('wall street journal','Financial Journal');
        swapText('wallstreet journal','Financial Journal');
        swapText('wsj','Financial Journal');
        updateProperty(document,'title', document.title.replace(/wall street journal/gi,'Financial Journal');
        updateProperty(document,'title', document.title.replace(/wallstreet journal/gi,'Financial Journal');
        pdateProperty(document,'title', document.title.replace(/wsj/gi,'Financial Journal');
      });
}();
