console.log("i am running")
// document.querySelector('.cros').Style.display="none";
document.querySelector('.hamp').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo')
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        // document.querySelector('.ham').Style.display="inline";
        // document.querySelector('.cros').Style.display="none";
    }
    else{
        // document.querySelector('.ham').Style.display="none";
        setTimeout(()=>{
            document.querySelector('.cros').Style.display="none";
        },350);
    }
})
