var div = document.createElement('div');
div.innerHTML=`<input type="text" id="txt">
<button type="button" onclick="cowin()"> search</button>
<div id="active"></div>  
<div id="death"></div>
 <div id="recovered"></div>
 <div id="confirmed"></div>`;
div.style.textAlign="center";
document.body.append(div);

async function cowin(){
    let c19=document.getElementById("txt").value
    console.log(c19);

    let res=await fetch(`https://api.covid19api.com/dayone/country/${c19}`)

    let result=await res.json();
    console.log(result);

    var index=result.length-1;
    var result1=result[index].Active;
    console.log (result1);
    
    document.getElementById("active").innerText=`total active cases:${result1}`
    
    var index=result.length-1;
    var result2=result[index].Deaths;
    console.log (result2);
    document.getElementById("death").innerText=`total cases Deaths:${result2}`

    var index=result.length-1;
    var result3=result[index].Recovered;
    console.log (result3);
    document.getElementById("recovered").innerText=`total cases Recovered:${result3}`

    var index=result.length-1;
    var result4=result[index].Confirmed;
    console.log (result4);
    document.getElementById("confirmed").innerText=`total cases Confirmed:${result4}`

     
}