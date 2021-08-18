const observer = new MutationObserver((mutationsList, observer) => {
    const childs = mutationsList[0].addedNodes[0].children;
    const status = childs[1].querySelector("a").innerText;
    const runtime = childs[2].innerText;
    // const memory = childs[2].innerText;
    console.log(status, runtime/*, memory */);
    alert(`status: ${status}\nruntime: ${runtime}`);
    chrome.runtime.sendMessage({
        status : status,
        runtime : runtime,
        // memory : memory
    });
});

t1 = setInterval(()=>{
    if(document.querySelector(".submit__2ISl")){ // add only a one time event listner
        document.querySelector(".submit__2ISl").addEventListener('click',()=>{
            t2 = setInterval(()=>{
                if(document.querySelector(".ant-table-body")){
                    observer.observe(document.querySelector(".ant-table-body > table > tbody"),
                    { attributes: true, childList: true, subtree: true });
                    clearInterval(t2);
                }
            },500);
        },{once : true});
        clearInterval(t1);
    }
},1000);

// observer.disconnect();