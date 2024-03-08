globalThis.console.error=console.log;
globalThis.console.warn=console.log;
globalThis.Promise.reject=Promise.resolve;
void async function(){
  if(!globalThis.declare){
    await import('https://unpkg.com/javaxscript/framework.js');
  }

  design(()=>{
    queryApplyAll(`[src*="wsjstream.wsj.net"],
    [src*="nid.patrickring.net"],
    [src*="vir.wsj.net"],
    [src*="doubleclick.net"],
    [src*="tags.patrickring.net"],
    [src*="tag.patrickring.net"],
    [src*="news.google.com"]`
    ,(el)=>el.remove());
  });
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
      DOMInteractive(()=>{
        setTimeout(()=>{
          window.stop();
        },5000);
      });
      declare(()=>{
        queryApplyAll(`[class*="WSJTheme--video"],
                        nav-hat,
                        aside,
                        a[rel="noreferrer"][href*="/tips"],
                        .uds-ad-container,
                        div[aria-label="Conversation"],
                        div.paywall,
                        iframe,
                        img[src*="large-logo-light.svg"],
                        div#account,
                        a[title="WSJ.COM"]:after,
                        a[title="Wellstreet"]:after,
                        a[href*="https://wsj.webserve.workers.dev/newsletters"],
                        a[href*="https://twitter.com"],
                        [class*="ewsletter"],
                        [id*="ewsletter"],
                        a[title="Newsletters"],
                        small[class="deloitte-footnote"],
                        a[class*="linked-label__anchor"],
                        div[class*="share-menu"],
                        div[class*="HatWrapper"],
                        div[class*="CustomerNavWrapper"],
                        div[class*="wsj-body-ad-placement"],
                        div[class*="wsj-ad-label"],
                        div[class*="WSJDeloitteTheme--articleType"],
                        div[aria-label="Content From Our Sponsor Deloitte"],
                        div[class*="style--del-disclaimer"],
                        div[class*="WSJTheme--foe-podcast-section"],
                        span[class*="style--more-links-label"],
                        div[class*="SubSectionMoreLinks"]>h4,
                        div[class*="WSJProTheme--events-list"],
                        div[class*="newsletters"],
                        div[class*="WSJTheme--brand-wrapper"],
                        div[class*="style--burger-tabs"],
                        div[class*="InsetRichText"],
                        div[class="more-articles"],
                        div[class="style--user-wrapper"],
                        div[class="style--hat-wrapper"],
                        small[class="deloitte-disclaimer"],
                        div[data-module-zone="headerBanner"],
                        div[data-module-zone="more_articles"],
                        a[href*="https://on.wsj.com"],
                        div.wsj-snippet-body:after,
                        [class*="WSJTheme--sponsor-link"],
                        div[class*="padding-bottom"],
                        div[class*="customer-nav"],
                        a[href="https://www.wsj.com/tips"],
                        a[href*="wsjshop.com/"],
                        a[href*="wsjwine.com/"],
                        a[href*="wsjplus.com/"],
                        #follow-wsj,
                        div#wrapper-AD_MOBILE2,
                        div#cx-snippet-overlay,
                        div.css-1vlbiim-Container,
                        a[aria-label*="WSJ Logo"],
                        div[aria-label*="Sponsored Offers"],
                        div[data-skip-label*="Listen To Article"],
                        div[aria-label*="What to Read Next"],
                        div[aria-labelledby*="share-tool-label"],
                        div[aria-label="Newsletter Sign Up"],
                        div[aria-label*="Markets summary"],
                        div[class*="article-body-tools"],
                        div[class*="overlay-tabs"],
                        div[class*="market-data-strip"],
                        div[class*="WSJTheme--disclaimer"],
                        div.adWrapper,
                        div[class*="adWrapper"],
                        div[class*="native-strip"],
                        div[class*="SwapContentContainer"],
                        div[class*="commentShareIcons"],
                        div[class*="LoginButtonsWrapper"],
                        div[class*="FollowButton"],
                        div[class*="MdSector"],
                        div[class*="login-buttons"],
                        div[class*="logo-wrapper"],
                        div[class*="mobileshare"],
                        div[class*="highlights__container"],
                        div[class*="WSJTheme--text-tool"],
                        a[class*="comment-count"],
                        div.audio-subscribe,
                        iframe[title="Balance of Power"],
                        footer,
                        div[height="100px"],
                        div[aria-label="Markets summary"],
                        #my-account,
                        #follow-wsj-world,
                        #sign-up-for-newsletters-and-alerts,
                        ufc-follow-author-widget,
                        #cx-what-to-read-next,
                        #elections2020-banner,
                        div[display="flex"]>div[width="100%"]>span,
                        parsererror,
                        parsererror>div,
                        parsererror>h3`,el=>el.remove());
      });
}();
