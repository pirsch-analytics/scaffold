window.addEventListener("DOMContentLoaded", () => {
    const script = document.getElementById("article");

    if(script && script.hasAttribute("data-words") && script.hasAttribute("data-title")) {
        const title = script.getAttribute("data-title");

        if(!localStorage.getItem(title)) {
            const minReadingTimeSeconds = Math.floor(parseInt(script.getAttribute("data-words"))/220)*60;
            const start = new Date().getTime();
            let done = false;
            
            window.addEventListener("scroll", () => {
                if(!done && getScrollPercent() > 85) {
                    let readSeconds = Math.floor((new Date().getTime()-start)/1000);

                    if(readSeconds >= minReadingTimeSeconds) {
                        done = true;
                        localStorage.setItem(title, "read");

                        if(readSeconds > minReadingTimeSeconds * 2) {
                            readSeconds = minReadingTimeSeconds * 2;
                        }

                        pirsch("Read article", {
                            duration: readSeconds,
                            meta: {
                                title
                            }
                        });
                    }
                }
            });
        }
    }
});

// https://stackoverflow.com/a/8028584
function getScrollPercent() {
    const h = document.documentElement, 
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';
    return Math.floor((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}
