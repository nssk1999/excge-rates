var i,u;

fetch("http://data.fixer.io/api/latest?access_key=0b8056168bef9bb332cc5c23a09cae82&symbols=inr,USD", {
  "method": "GET"
} )
.then(function (response) {
  return response.json();
})
.then(function (data) {
  appendData(data);
  // console.log(data)
})
.catch(err => {
  alert("There was a problem fetching the results. Please try again." + err)
});
function appendData(data) {
  i=data.rates.INR;
  u=data.rates.USD;
  document.getElementById("cu-rate").innerHTML="USD-INR: "+String((i/u).toFixed(3))+"  .'   .'.'.'.'.'.'. INR-USD: "+String((u/i).toFixed(3));
}

function transis() {
  var inrv = document.getElementById("inr");
  var usdv = document.getElementById("usd");
  // console.log(i)
  usdv.value=(u/i)*inrv.value;
}
function transui() {
  var inrv = document.getElementById("inr");
  var usdv = document.getElementById("usd");
  // console.log(i)
  inrv.value=(i/u)*usdv.value;
}

