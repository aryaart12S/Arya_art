(() => {
  const products = Array.isArray(window.ARYA_PRODUCTS) ? window.ARYA_PRODUCTS : [];
  const grid = document.getElementById('productGrid');
  const search = document.getElementById('searchInput');
  const category = document.getElementById('categoryFilter');
  const clear = document.getElementById('clearSearch');
  const count = document.getElementById('resultCount');
  const empty = document.getElementById('emptyState');
  const waNumber = '919243498424';
  const safeText = value => String(value ?? '');
  const categoryNames = {bouquet:'Bouquets',crochet:'Crochet',resin:'Resin art',hamper:'Gift hampers',frame:'Frames and keepsakes',rakhi:'Rakhi collection',decor:'Home decor',accessory:'Accessories',other:'Handmade gifts'};
  function render(){
    const q = search.value.trim().toLocaleLowerCase();
    const cat = category.value;
    const filtered = products.filter(p => {
      const haystack = [p.title,p.category,categoryNames[p.category],p.price,p.alt].map(safeText).join(' ').toLocaleLowerCase();
      return (!q || haystack.includes(q)) && (cat === 'all' || p.category === cat || (cat === 'frame' && /frame|keepsake|photo/.test(haystack)));
    });
    grid.replaceChildren();
    filtered.forEach(p => {
      const card = document.createElement('article'); card.className='card';
      const wrap=document.createElement('div');wrap.className='card-image-wrap';
      const img=document.createElement('img');img.src=p.image;img.alt=p.alt||p.title;img.loading='lazy';img.decoding='async';
      img.addEventListener('error',()=>{img.alt='Product image unavailable';img.classList.add('image-missing');wrap.style.background='#f3e8e1';},{once:true});
      const tag=document.createElement('span');tag.className='handmade-tag';tag.textContent='HANDMADE';wrap.append(img,tag);
      const content=document.createElement('div');content.className='card-content';
      const title=document.createElement('h3');title.textContent=p.title;
      const price=document.createElement('p');price.className='price';price.textContent=p.price;
      const actions=document.createElement('div');actions.className='card-actions';
      const order=document.createElement('a');order.className='btn whatsapp-card';order.textContent='Order on WhatsApp';order.target='_blank';order.rel='noopener';order.href='https://wa.me/'+waNumber+'?text='+encodeURIComponent(`Hi Arya Art, I'm interested in ${p.title}. Please share details.`);
      const share=document.createElement('button');share.type='button';share.className='btn share-btn';share.textContent='Share product';share.addEventListener('click',async()=>{
        const url=new URL(window.location.href);url.hash='';url.searchParams.set('product',p.title);
        const data={title:p.title+' | Arya Art',text:`Check out ${p.title} at Arya Art!`,url:url.href};
        try { if(navigator.share) await navigator.share(data); else if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(data.url);alert('Product link copied!');} else {const t=document.createElement('textarea');t.value=data.url;t.style.position='fixed';t.style.opacity='0';document.body.append(t);t.select();const ok=document.execCommand('copy');t.remove();alert(ok?'Product link copied!':'Copy this link: '+data.url);} }
        catch(e){if(e.name!=='AbortError') alert('Could not share right now. Please try again.');}
      });
      actions.append(order,share);content.append(title,price,actions);card.append(wrap,content);grid.append(card);
    });
    count.textContent=`${filtered.length} of ${products.length} products`;
    empty.hidden=filtered.length!==0;
  }
  search.addEventListener('input',render);category.addEventListener('change',render);clear.addEventListener('click',()=>{search.value='';category.value='all';search.focus();render();});
  document.getElementById('year').textContent=new Date().getFullYear();
  // Support direct links like ?product=Resin%20Sita%20Ram%20Photo%20Frame
  const requested=new URLSearchParams(location.search).get('product'); if(requested) search.value=requested;
  render();
})();
