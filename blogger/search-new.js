(()=>{
  _req(_blogUrl +'/feeds/posts/default?alt=json&max-results=5', (j)=>{
    _loader(true);
    _category(j.feed.category);
    const p = [];
    const e = j.feed.entry;
    if(j.feed.entry){
      const x = (e.length >= 5)? 5 : e.length;
      for(let i = 0; i < x; i++){
        p.push(e[i]);
      }
    }
    $('#sidebar-post').html(_postList(p));
    _loader(false);
  });
})();
