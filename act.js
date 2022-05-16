function moveaway()
{   
    let get=document.getElementById('deeemo');
    let getb=document.getElementById('bott');
    /*主页元素*/
    let brow=document.getElementById('brow');
    get.style.opacity='0';
    getb.style.opacity='0';
    brow.style.transform=' translateY(0)';
}

function backfun()
{
    let get=document.getElementById('brow');
    let getw=document.getElementById('deeemo');
    let getb=document.getElementById('bott');
    get.style.transform=' translateY(-3000px)';
    getw.style.opacity='1';
    getb.style.opacity='1';
}
