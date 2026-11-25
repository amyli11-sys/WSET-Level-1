/* ---------- Starter content: ORIGINAL practice questions (not copied from any source) ----------
   Format: {q: question, o: [options], a: index of correct option, e: explanation}          */
const SEED = [
 {section:"What is Wine?", questions:[
  {q:"What is wine made from?",o:["Fermented grape juice","Distilled grape juice","Grape juice with added sugar and water","Dried grapes soaked in spirit"],a:0,e:"Wine is the result of yeast fermenting the sugars in grape juice."},
  {q:"During fermentation, yeast converts sugar into which two products?",o:["Alcohol and carbon dioxide","Acid and tannin","Water and glycerol","Alcohol and oxygen"],a:0,e:"Sugar → alcohol + carbon dioxide (plus heat)."},
  {q:"Which species of vine produces the vast majority of the world's quality wine?",o:["Vitis labrusca","Vitis vinifera","Vitis riparia","Vitis rupestris"],a:1,e:"Vitis vinifera includes Chardonnay, Pinot Noir, Riesling and the other well-known varieties."},
  {q:"Which component gives wine a fresh, mouth-watering sensation?",o:["Tannin","Alcohol","Acidity","Sweetness"],a:2,e:"Acidity makes your mouth water; high acidity tastes sharp and tart."}
 ]},
 {section:"Growing Grapes", questions:[
  {q:"Which climate generally produces riper grapes with higher sugar and lower acidity?",o:["Cool climate","Warm climate","A climate with constant frost","A climate with no sunshine"],a:1,e:"More warmth and sun ripens grapes further: more sugar (so more potential alcohol), less acidity."},
  {q:"Which part of a black grape gives red wine its colour?",o:["The pulp","The skins","The stalks","The leaves"],a:1,e:"The juice of most grapes is clear; colour comes from the skins."},
  {q:"Which of these does a grape vine NOT need in order to ripen grapes?",o:["Sunlight","Warmth","Water","Constant frost"],a:3,e:"Vines need light, warmth, water and nutrients. Frost damages buds and shoots."},
  {q:"In the Northern Hemisphere, grapes are usually harvested in:",o:["January–February","March–April","Late summer to autumn","Midsummer only"],a:2,e:"Roughly August to October or November in the north; February to April in the south."},
  {q:"What is the process by which leaves use sunlight, water and carbon dioxide to make sugar?",o:["Photosynthesis","Fermentation","Transpiration","Oxidation"],a:0,e:"Photosynthesis produces the sugars that accumulate in the grapes."}
 ]},
 {section:"Making Wines", questions:[
  {q:"How does a red wine get its colour?",o:["Colour is added after fermentation","The juice is in contact with black grape skins during fermentation","It is made from white grapes","The wine is fermented in red glass"],a:1,e:"Colour (and tannin) are extracted from the skins during fermentation."},
  {q:"Which of these is commonly used to add flavours such as vanilla and toast to wine?",o:["Stainless steel tanks","Oak barrels","Glass bottles","Plastic vats"],a:1,e:"Oak ageing can add vanilla, toast, smoke and spice notes."},
  {q:"What does malolactic conversion do?",o:["Turns sugar into alcohol","Turns sharp malic acid into softer lactic acid","Removes tannin","Adds carbon dioxide"],a:1,e:"It softens acidity and can add a buttery or creamy character."},
  {q:"How is rosé wine typically made from black grapes?",o:["Brief skin contact before the juice is drawn off","Adding colouring to white wine","Fermenting without yeast","Years of oak ageing"],a:0,e:"A short period on the skins gives a pink colour."},
  {q:"Where do the bubbles in a sparkling wine come from?",o:["Air pumped in at bottling","Carbon dioxide from fermentation that is kept in the wine","Added water","Evaporated alcohol"],a:1,e:"Carbon dioxide is trapped in the wine under pressure, for example in a second fermentation."}
 ]},
 {section:"Types and Styles of Wine", questions:[
  {q:"Which of these is a fortified wine?",o:["Port","Champagne","Chablis","Rioja"],a:0,e:"Port and Sherry are fortified."},
  {q:"What is added to make a wine fortified?",o:["Sugar syrup","Grape spirit","Carbon dioxide","Water"],a:1,e:"A neutral grape spirit raises the alcohol level."},
  {q:"A wine with no noticeable sweetness is described as:",o:["Dry","Medium","Sweet","Luscious"],a:0,e:"Dry = no perceptible sugar."},
  {q:"What is the main difference between a still and a sparkling wine?",o:["Sparkling wine always contains sugar","Sparkling wine has noticeable bubbles of carbon dioxide","Still wine has no alcohol","Sparkling wine is always white"],a:1,e:"Sparkling wines can be white, rosé or red, and dry or sweet."},
  {q:"Which grapes are used to make red wine?",o:["Green grapes","Black grapes","Only Muscat","Only sweet grapes"],a:1,e:"Red wines are made from black (dark-skinned) grapes."}
 ]},
 {section:"Principal Grape Varieties", questions:[
  {q:"Which white grape is known for high acidity and green, grassy and gooseberry aromas?",o:["Chardonnay","Sauvignon Blanc","Pinot Grigio","Viognier"],a:1,e:"Sauvignon Blanc is high in acidity with pronounced green and citrus notes."},
  {q:"Which black grape typically gives pale, light-tannin wines with red fruit such as cherry and strawberry?",o:["Pinot Noir","Cabernet Sauvignon","Syrah","Malbec"],a:0,e:"Pinot Noir is thin-skinned, so lighter in colour and tannin."},
  {q:"Which black grape is known for thick skins, high tannin and blackcurrant flavours?",o:["Gamay","Pinot Noir","Cabernet Sauvignon","Zinfandel"],a:2,e:"Cabernet Sauvignon is the classic high-tannin, blackcurrant grape."},
  {q:"Riesling is best described as:",o:["A full-bodied, low-acid white","An aromatic white with high acidity","A tannic black grape","A grape used only for sparkling wine"],a:1,e:"Riesling is aromatic and high in acidity, and can be made dry to very sweet."},
  {q:"How are Syrah and Shiraz related?",o:["They are unrelated grapes","They are the same grape variety","One is black and one is white","One is used only for fortified wine"],a:1,e:"Same grape; Syrah is the French name and Shiraz is commonly used in Australia."}
 ]},
 {section:"Examples of Wines", questions:[
  {q:"Chablis is made from which grape?",o:["Sauvignon Blanc","Chardonnay","Riesling","Chenin Blanc"],a:1,e:"Chablis is a Chardonnay wine from northern Burgundy, France."},
  {q:"Which is the principal black grape of Rioja?",o:["Sangiovese","Tempranillo","Nebbiolo","Malbec"],a:1,e:"Rioja (Spain) is based on Tempranillo."},
  {q:"Chianti is made mainly from which grape?",o:["Sangiovese","Pinot Noir","Merlot","Tempranillo"],a:0,e:"Sangiovese is the main grape of Chianti in Tuscany, Italy."},
  {q:"In which country is Marlborough, famous for Sauvignon Blanc?",o:["Australia","South Africa","New Zealand","Chile"],a:2,e:"Marlborough is on New Zealand's South Island."},
  {q:"Prosecco comes from which country?",o:["France","Italy","Spain","Germany"],a:1,e:"Prosecco is an Italian sparkling wine."}
 ]},
 {section:"Storage and Service of Wine", questions:[
  {q:"Where is a cork-sealed bottle best stored?",o:["Standing in sunlight","On its side in a cool, dark place","In a warm kitchen","Next to a heat source"],a:1,e:"Lying on its side keeps the cork moist; cool and dark protects the wine."},
  {q:"Which storage condition is best for wine?",o:["Constant, cool temperature","Fluctuating temperature","Bright light","Strong vibration"],a:0,e:"Stable cool temperatures avoid premature ageing and faults."},
  {q:"How should you keep an opened bottle of still wine for a few days?",o:["Re-seal it and keep it cool, ideally in the fridge","Leave it open on the counter","Store it in direct sunlight","Warm it gently"],a:0,e:"Less air and lower temperature slow oxidation."},
  {q:"Which of these is generally served the most chilled?",o:["Full-bodied red","Sparkling wine","Light red","Tawny Port"],a:1,e:"Sparkling wines are served well chilled."}
 ]},
 {section:"An Introduction to Tasting", questions:[
  {q:"What does SAT stand for in the WSET approach?",o:["Simple Alcohol Test","Systematic Approach to Tasting","Sweetness and Tannin","Swirl, Aerate, Taste"],a:1,e:"The SAT gives a consistent structure: appearance, nose, palate and conclusions."},
  {q:"Which characteristic is assessed on the palate?",o:["Colour intensity","Aroma intensity","Acidity","Clarity"],a:2,e:"Palate: sweetness, acidity, tannin, alcohol, body, flavour and finish."},
  {q:"Tannin is perceived as:",o:["A drying, grippy feeling on the gums","A sweet sensation","A burning at the back of the throat","A fizz"],a:0,e:"Tannin dries the mouth and is found mainly in red wines."},
  {q:"Which is assessed by looking at the wine?",o:["Colour","Finish","Body","Sweetness"],a:0,e:"Appearance covers clarity, intensity and colour."}
 ]},
 {section:"Pairing Wine and Food", questions:[
  {q:"Sweet food tends to make a wine taste:",o:["Sweeter and less acidic","Less sweet and more acidic","The same","More alcoholic"],a:1,e:"Sweetness in food makes the wine seem less sweet and fruity, and more acidic."},
  {q:"Which food helps soften the perception of tannin in a red wine?",o:["Rich, fatty protein such as steak","Sugary desserts","Plain crackers","Citrus fruit"],a:0,e:"Fat and protein soften tannins."},
  {q:"A good general principle in pairing is to match the ___ of the food and the wine.",o:["Colour","Weight and intensity","Price","Age"],a:1,e:"A delicate dish suits a light wine; a rich dish suits a fuller wine."},
  {q:"Which wine suits a light, delicate dish such as steamed white fish?",o:["Crisp, light-bodied white","Full-bodied tannic red","Heavily oaked red","Sweet fortified wine"],a:0,e:"Match light with light."},
  {q:"A dish with high acidity, such as a lemon dressing, pairs best with a wine that:",o:["Has high acidity","Is very low in acidity","Is very tannic","Is sweet and flat"],a:0,e:"Wine should have at least as much acidity as the food, or it will seem flat."}
 ]}
];

/* ---------- Storage ---------- */
const store={
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
let custom=store.get('wset1_custom',[]);      // [{section,q,o,a,e}]
let hideSeed=store.get('wset1_hideSeed',false);
let scores=store.get('wset1_scores',{});
let starred=store.get('wset1_starred',{});

/* ---------- Helpers ---------- */
function el(tag,attrs,...kids){
  const n=document.createElement(tag);
  for(const [k,v] of Object.entries(attrs||{})){
    if(k==='class')n.className=v;
    else if(k.startsWith('on'))n.addEventListener(k.slice(2),v);
    else if(v!==false&&v!=null)n.setAttribute(k,v);
  }
  for(const c of kids.flat(Infinity)){if(c==null||c===false)continue;n.append(c.nodeType?c:document.createTextNode(String(c)))}
  return n;
}
const L='abcdef';
const qkey=(s,q)=>s+'|'+q.q;
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function sections(){
  const map=new Map();
  if(!hideSeed)SEED.forEach(s=>map.set(s.section,s.questions.slice()));
  custom.forEach(c=>{if(!map.has(c.section))map.set(c.section,[]);map.get(c.section).push({q:c.q,o:c.o,a:c.a,e:c.e||''})});
  return [...map.entries()].filter(([,q])=>q.length).map(([name,questions])=>({name,questions}));
}

/* ---------- Import parser ---------- */
function parseQuestions(text,defaultSection){
  const lines=text.replace(/\r/g,'').split('\n');
  const out=[],problems=[],keyMap={};
  let section=defaultSection||'Imported',cur=null,lastOpt=null;
  const finish=()=>{if(cur){out.push(cur);cur=null;lastOpt=null}};
  for(const raw of lines){
    const line=raw.trim();if(!line)continue;let m;
    if((m=line.match(/^(?:section\s*:|#{1,3})\s*(.+)$/i))){finish();section=m[1].trim();continue}
    if(cur&&(m=line.match(/^(?:answer|ans)\s*[:\-]?\s*\(?([a-f])\b/i))){cur.a=L.indexOf(m[1].toLowerCase());lastOpt=null;continue}
    if((m=line.match(/^(?:key|answers)\s*:\s*(.+)$/i))){
      const re=/(\d+)\s*[-.:)]?\s*([a-f])\b/gi;let p;
      while((p=re.exec(m[1])))keyMap[p[1]]=L.indexOf(p[2].toLowerCase());
      continue;
    }
    if((m=line.match(/^(\d+)\s*[.)]\s+(.+)$/))){finish();cur={n:m[1],section,q:m[2],o:[],a:null,e:''};continue}
    if(cur&&(m=line.match(/^\(?([a-fA-F])[.)]\s*(.+)$/))){cur.o.push(m[2]);lastOpt=cur.o.length-1;continue}
    if(cur&&(m=line.match(/^(?:explanation|why|note)\s*:\s*(.+)$/i))){cur.e=m[1];lastOpt=null;continue}
    if(cur){
      if(lastOpt!=null&&cur.a===null)cur.o[lastOpt]+=' '+line;
      else if(!cur.o.length)cur.q+=' '+line;
      else if(cur.e)cur.e+=' '+line;
    }
  }
  finish();
  const good=[];
  out.forEach(c=>{
    if(c.a===null&&keyMap[c.n]!=null)c.a=keyMap[c.n];
    if(c.o.length<2)problems.push('Q'+c.n+': fewer than 2 options found');
    else if(c.a===null||c.a>=c.o.length)problems.push('Q'+c.n+': no valid answer found');
    else good.push({section:c.section,q:c.q,o:c.o,a:c.a,e:c.e});
  });
  return {good,problems};
}

/* ---------- State ---------- */
const S={tab:'revise',section:'all',hide:false,revealed:{},starOnly:false,fc:{order:null,i:0,flip:false,sig:''},quiz:null,msg:null};
const TABS=[['revise','Revise'],['cards','Flashcards'],['quiz','Quiz'],['import','Import']];

function pool(){
  const secs=sections();
  const chosen=S.section==='all'?secs:secs.filter(s=>s.name===S.section);
  return chosen.map(s=>({name:s.name,questions:s.questions.filter(q=>!S.starOnly||starred[qkey(s.name,q)])})).filter(s=>s.questions.length);
}

/* ---------- Shared UI ---------- */
function sectionPicker(){
  const sel=el('select',{onchange:e=>{S.section=e.target.value;S.fc.order=null;render()}},
    el('option',{value:'all'},'All sections'),
    sections().map(s=>el('option',{value:s.name,selected:s.name===S.section},s.name+' ('+s.questions.length+')')));
  sel.value=S.section;return sel;
}
function starBtn(sname,q){
  const k=qkey(sname,q);
  return el('button',{class:'star'+(starred[k]?' on':''),title:'Mark for extra revision',onclick:e=>{e.stopPropagation();starred[k]=!starred[k];if(!starred[k])delete starred[k];store.set('wset1_starred',starred);render()}},starred[k]?'★':'☆');
}
function starFilter(){
  return el('label',{class:'chk'},el('input',{type:'checkbox',checked:S.starOnly,onchange:e=>{S.starOnly=e.target.checked;S.fc.order=null;render()}}),'Starred only');
}

/* ---------- Revise ---------- */
function viewRevise(){
  const root=el('div');
  root.append(el('div',{class:'bar'},sectionPicker(),
    el('label',{class:'chk'},el('input',{type:'checkbox',checked:S.hide,onchange:e=>{S.hide=e.target.checked;S.revealed={};render()}}),'Hide answers'),
    starFilter()));
  const p=pool();
  if(!p.length)root.append(el('p',{class:'note'},'Nothing to show. Clear the starred filter or add questions in Import.'));
  p.forEach(sec=>{
    root.append(el('h2',{class:'sec'},sec.name,el('small',{},sec.questions.length+' questions')));
    sec.questions.forEach((q,i)=>{
      const k=qkey(sec.name,q);const show=!S.hide||S.revealed[k];
      root.append(el('div',{class:'card'},
        el('div',{class:'row'},el('span',{class:'qn'},'Q'+(i+1)),starBtn(sec.name,q)),
        el('div',{class:'q'},q.q),
        q.o.map((o,j)=>el('div',{class:'opt'+(show&&j===q.a?' correct':'')},el('b',{},L[j]+')'),el('span',{},o))),
        show&&q.e?el('div',{class:'exp'},q.e):null,
        !show?el('button',{class:'btn ghost',onclick:()=>{S.revealed[k]=true;render()}},'Show answer'):null));
    });
  });
  return root;
}

/* ---------- Flashcards ---------- */
function deck(){const d=[];pool().forEach(s=>s.questions.forEach(q=>d.push({sec:s.name,q})));return d}
function viewCards(){
  const root=el('div');
  root.append(el('div',{class:'bar'},sectionPicker(),starFilter()));
  const d=deck();
  if(!d.length){root.append(el('p',{class:'note'},'No cards. Clear the starred filter or add questions in Import.'));return root}
  const sig=S.section+'|'+S.starOnly+'|'+d.length;
  if(!S.fc.order||S.fc.sig!==sig){S.fc.order=d.map((_,i)=>i);S.fc.i=0;S.fc.flip=false;S.fc.sig=sig}
  const idx=S.fc.order[S.fc.i];const c=d[idx];const q=c.q;
  root.append(el('div',{class:'prog'},el('i',{style:'width:'+((S.fc.i+1)/d.length*100)+'%'})));
  const card=el('div',{class:'card fc',onclick:()=>{S.fc.flip=!S.fc.flip;render()}},
    el('div',{class:'row'},el('span',{class:'tag'},c.sec),starBtn(c.sec,q)),
    S.fc.flip
      ?[el('div',{class:'big'},L[q.a]+') '+q.o[q.a]),q.e?el('div',{class:'exp'},q.e):null,el('div',{class:'note',style:'margin-top:12px'},'Tap to flip back')]
      :[el('div',{class:'big'},q.q),q.o.map((o,j)=>el('div',{class:'opt'},el('b',{},L[j]+')'),el('span',{},o))),el('div',{class:'note',style:'margin-top:12px'},'Tap to reveal the answer')]);
  root.append(card);
  const go=n=>{S.fc.i=(S.fc.i+n+d.length)%d.length;S.fc.flip=false;render()};
  root.append(el('div',{class:'nav3'},
    el('button',{class:'btn ghost',onclick:()=>go(-1)},'‹ Prev'),
    el('span',{class:'qn',style:'align-self:center'},(S.fc.i+1)+' / '+d.length),
    el('button',{class:'btn',onclick:()=>go(1)},'Next ›'),
    el('button',{class:'btn ghost',onclick:()=>{S.fc.order=shuffle(d.map((_,i)=>i));S.fc.i=0;S.fc.flip=false;render()}},'Shuffle')));
  return root;
}

/* ---------- Quiz ---------- */
function startQuiz(name){
  const secs=sections();
  const qs=name==='all'?secs.flatMap(s=>s.questions.map(q=>({sec:s.name,q}))):secs.filter(s=>s.name===name).flatMap(s=>s.questions.map(q=>({sec:s.name,q})));
  S.quiz={name,qs:shuffle(qs),i:0,picked:null,results:[],done:false};render();
}
function viewQuiz(){
  const Q=S.quiz,root=el('div');
  if(!Q){
    root.append(el('p',{class:'note'},'Pick a section to be quizzed on. Your best score for each is saved on this device.'));
    const g=el('div',{class:'sgrid'});
    const all=sections().reduce((n,s)=>n+s.questions.length,0);
    const row=(name,label,n)=>el('button',{class:'sbtn',onclick:()=>startQuiz(name)},el('span',{},label),el('small',{},n+' questions'+(scores[name]!=null?' · best '+scores[name]+'%':'')));
    sections().forEach(s=>g.append(row(s.name,s.name,s.questions.length)));
    if(all)g.append(row('all','All sections mixed',all));
    root.append(g);return root;
  }
  if(Q.done){
    const right=Q.results.filter(r=>r.ok).length,pct=Math.round(right/Q.qs.length*100);
    root.append(el('div',{class:'card'},el('div',{class:'score'},right+' / '+Q.qs.length+' ('+pct+'%)'),el('div',{class:'note',style:'text-align:center'},Q.name==='all'?'All sections':Q.name)));
    const missed=Q.results.filter(r=>!r.ok);
    if(missed.length){
      root.append(el('h2',{class:'sec'},'To review'));
      missed.forEach(r=>root.append(el('div',{class:'card'},el('div',{class:'qn'},r.sec),el('div',{class:'q'},r.q.q),
        el('div',{class:'opt wrong'},el('b',{},'You:'),el('span',{},L[r.pick]+') '+r.q.o[r.pick])),
        el('div',{class:'opt correct'},el('b',{},'✓'),el('span',{},L[r.q.a]+') '+r.q.o[r.q.a])),
        r.q.e?el('div',{class:'exp'},r.q.e):null)));
    }
    root.append(el('div',{class:'nav3'},
      missed.length?el('button',{class:'btn',onclick:()=>{const qs=shuffle(missed.map(r=>({sec:r.sec,q:r.q})));S.quiz={name:Q.name,qs,i:0,picked:null,results:[],done:false,retry:true};render()}},'Retry missed'):null,
      el('button',{class:'btn ghost',onclick:()=>{startQuiz(Q.name)}},'Restart'),
      el('button',{class:'btn ghost',onclick:()=>{S.quiz=null;render()}},'All sections')));
    return root;
  }
  const c=Q.qs[Q.i],q=c.q,answered=Q.picked!=null;
  root.append(el('div',{class:'row'},el('span',{class:'qn'},(Q.name==='all'?'All sections':Q.name)+' · '+(Q.i+1)+' / '+Q.qs.length),el('button',{class:'btn ghost',onclick:()=>{S.quiz=null;render()}},'Quit')));
  root.append(el('div',{class:'prog'},el('i',{style:'width:'+(Q.i/Q.qs.length*100)+'%'})));
  const card=el('div',{class:'card'},el('div',{class:'qn'},c.sec),el('div',{class:'q'},q.q));
  q.o.forEach((o,j)=>{
    let cls='opt';if(answered){if(j===q.a)cls+=' correct';else if(j===Q.picked)cls+=' wrong'}
    card.append(el('button',{class:cls,disabled:answered?'':null,onclick:()=>{Q.picked=j;render()}},el('b',{},L[j]+')'),el('span',{},o)));
  });
  if(answered&&q.e)card.append(el('div',{class:'exp'},q.e));
  root.append(card);
  if(answered){
    const last=Q.i===Q.qs.length-1;
    root.append(el('div',{class:'nav3'},el('button',{class:'btn',onclick:()=>{
      Q.results.push({sec:c.sec,q,pick:Q.picked,ok:Q.picked===q.a});
      if(last){Q.done=true;if(!Q.retry){const pct=Math.round(Q.results.filter(r=>r.ok).length/Q.qs.length*100);if(scores[Q.name]==null||pct>scores[Q.name]){scores[Q.name]=pct;store.set('wset1_scores',scores)}}}
      else{Q.i++;Q.picked=null}
      render();window.scrollTo(0,0);
    }},last?'Finish':'Next ›')));
  }
  return root;
}

/* ---------- Import ---------- */
const EXAMPLE=`Section: Growing Grapes
1. Which part of a black grape gives red wine its colour?
a) Pulp
b) Skins
c) Stalks
d) Leaves
Answer: b
Explanation: Colour comes from the skins.

2. Next question here...
a) ...
b) ...
Answer: a

Section: Making Wines
3. You can also paste an answer key at the end:
a) First
b) Second
Key: 1b 2a 3b`;
function viewImport(){
  const root=el('div');
  root.append(el('p',{class:'note'},'Paste questions from your own study material in the format below. They are saved only in this browser (not in the GitHub repo), so you can keep your own material private. A section name is a line starting with "Section:". Answers are either "Answer: b" under each question or a "Key: 1b 2c ..." line.'));
  const ta=el('textarea',{placeholder:EXAMPLE});
  root.append(ta);
  const out=el('div');
  root.append(el('div',{class:'nav3',style:'justify-content:flex-start;margin:10px 0'},
    el('button',{class:'btn',onclick:()=>{
      const {good,problems}=parseQuestions(ta.value,'Imported');
      if(good.length){custom=custom.concat(good);store.set('wset1_custom',custom)}
      S.msg={err:!good.length||problems.length>0,text:'Added '+good.length+' question'+(good.length===1?'':'s')+(problems.length?'.\nSkipped:\n'+problems.join('\n'):'.')};
      if(good.length)ta.value='';
      render();
    }},'Add questions'),
    el('button',{class:'btn ghost',onclick:()=>{
      const blob=new Blob([JSON.stringify(custom,null,2)],{type:'application/json'});
      const a=el('a',{href:URL.createObjectURL(blob),download:'my-wset-questions.json'});document.body.append(a);a.click();a.remove();
    }},'Export mine'),
    el('button',{class:'btn ghost',onclick:()=>{if(custom.length&&confirm('Remove all '+custom.length+' imported questions?')){custom=[];store.set('wset1_custom',custom);S.msg={text:'Imported questions removed.'};render()}}},'Remove imported')));
  root.append(el('label',{class:'chk'},el('input',{type:'checkbox',checked:hideSeed,onchange:e=>{hideSeed=e.target.checked;store.set('wset1_hideSeed',hideSeed);S.section='all';S.fc.order=null;S.quiz=null;render()}}),'Hide the built-in starter questions (use only my imported ones)'));
  if(S.msg){root.append(el('div',{class:'msg'+(S.msg.err?' err':'')},S.msg.text))}
  root.append(el('h2',{class:'sec'},'Example format'),el('pre',{},EXAMPLE));
  root.append(el('p',{class:'note'},'Currently loaded: '+sections().reduce((n,s)=>n+s.questions.length,0)+' questions ('+custom.length+' imported). The built-in questions are original sample questions to show how the app works. Tick the box above to hide them and use only your own.'));
  return root;
}

/* ---------- Render ---------- */
function render(){
  const nav=document.getElementById('nav');nav.replaceChildren(...TABS.map(([id,label])=>el('button',{class:S.tab===id?'on':'',onclick:()=>{S.tab=id;if(id!=='import')S.msg=null;render();window.scrollTo(0,0)}},label)));
  const app=document.getElementById('app');
  app.replaceChildren(S.tab==='revise'?viewRevise():S.tab==='cards'?viewCards():S.tab==='quiz'?viewQuiz():viewImport());
}
document.addEventListener('keydown',e=>{
  if(S.tab!=='cards'||/TEXTAREA|SELECT|INPUT/.test(document.activeElement.tagName))return;
  const d=deck();if(!d.length)return;
  if(e.key==='ArrowRight'){S.fc.i=(S.fc.i+1)%d.length;S.fc.flip=false;render()}
  else if(e.key==='ArrowLeft'){S.fc.i=(S.fc.i-1+d.length)%d.length;S.fc.flip=false;render()}
  else if(e.key===' '){e.preventDefault();S.fc.flip=!S.fc.flip;render()}
});
render();
