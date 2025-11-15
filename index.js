var el=e=>document.getElementById(e),crc_table=[],computed=0,create_table=X=>{
    var c,n,k;
    for(n=0;n<256;n++){
        c=BigInt(n);
        for(k=0;k<8;k++){
            if(!!(c&1n))c=BigInt(X)^(c>>1n)
            else c=c>>1n
        }
        crc_table.push(c)
    }
    computed=1
},update_crc=(crc,str,length,method)=>{
    var c=BigInt(crc),n;
    if(!computed)create_table(Number("0x"+el("a").value));
    for(n=0;n<length;n++){
        var Z;
        if(method==1) {Z=Number(str.at(n))*16 + Number(str.at(n+1));n++;}
        if(method==2) Z=str.charCodeAt(n);
        c=BigInt(crc_table[(c^BigInt(Z))&0xffn])^BigInt(c>>8n)
    }
    return c
},crc=(str,length)=>Number(update_crc(0xffffffffn,str,length)^0xffffffffn,el("a2").value).toString(16)
window.addEventListener("load",()=>{
    el("c").addEventListener("click",()=>{
        el("b").textContent=crc(el("a1").value,el("a1").value.length);
    });
});
