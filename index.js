var el=e=>document.getElementById(e),crc_table=[],computed=0,create_table=()=>{
    var c,n,k;
    for(n=0;n<256;n++){
        c=BigInt(n);
        for(k=0;k<8;k++){
            if(!!(c&1n))c=0xedb88320n^(c>>1n)
            else c=c>>1n
        }
        crc_table.push(c)
    }
    computed=1
},update_crc=(crc,str,length)=>{
    var c=BigInt(crc),n;
    if(!computed)create_table();
    for(n=0;n<length;n++){
        c=BigInt(crc_table[(c^BigInt(str.charCodeAt(n)) )&0xffn])^BigInt(c>>8n)
    }
    return c
},crc=(str,length)=>Number(update_crc(0xffffffffn,str,length)^0xffffffffn).toString(16)

