function getGlobals(){
  return [].concat(
    Object.keys(this),
    Object.getOwnPropertyNames(this),
    (function(){
      var results=[];
      for(var key in this){
        results.push(key);
      }return results;
    }).call(this)
  ).reduce(function(tpl,key){
    if(!!tpl[0][key])return tpl;
    tpl[0][key]=true;
    tpl[1].push(key);
    return tpl;
  },[{},[]])[1].sort().join('\n');
}
