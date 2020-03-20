function removeUrlAnchor(data){
  let urn = data.split('#')[0];
console.log(urn);
return urn}

 removeUrlAnchor('www.codewars.com#about')
