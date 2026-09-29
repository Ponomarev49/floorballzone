import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {Search,ShoppingBag,Heart,Menu,X,ArrowRight,ChevronRight,MapPin,Phone,Send,SlidersHorizontal,Plus,Minus,Check} from "lucide-react";
import "./styles.css";

const img=(q)=>`https://images.unsplash.com/photo-${q}?auto=format&fit=crop&w=900&q=82`;
const products=[
{id:1,cat:"Клюшки",brand:"ZONE",name:"Hyper Airlight 29",price:12990,old:14490,badge:"Хит",image:img("1599058917212-d750089bc07e")},
{id:2,cat:"Клюшки",brand:"OXDOG",name:"Ultralight HES 27",price:13490,badge:"Новинка",image:img("1579952363873-27f3bade9f55")},
{id:3,cat:"Клюшки",brand:"UNIHOC",name:"Unilite Pro 29",price:11990,image:img("1552667466-07770ae110d0")},
{id:4,cat:"Клюшки",brand:"FATPIPE",name:"Raw Concept 27",price:10990,image:img("1517649763962-0c623066013b")},
{id:5,cat:"Клюшки",brand:"SALMING",name:"Q-Series Aero 27",price:12490,image:img("1534158914592-062992fbe2a6")},
{id:6,cat:"Клюшки",brand:"EXEL",name:"Helix 2.9",price:9990,badge:"Sale",image:img("1540740405-7e1c5c7e7e5a")},
{id:7,cat:"Клюшки",brand:"ZONE",name:"Airlight 26 Junior",price:6990,image:img("1461896836934-ffe607ba8211")},
{id:8,cat:"Клюшки",brand:"UNIHOC",name:"Unity Junior 25",price:6490,image:img("1579952363873-27f3bade9f55")},

{id:9,cat:"Лопасти",brand:"ZONE",name:"Hyper Blade",price:2490,badge:"Хит",image:img("1599058917212-d750089bc07e")},
{id:10,cat:"Лопасти",brand:"OXDOG",name:"Avox Blade",price:2290,image:img("1579952363873-27f3bade9f55")},
{id:11,cat:"Лопасти",brand:"UNIHOC",name:"Epic Blade",price:2190,image:img("1552667466-07770ae110d0")},
{id:12,cat:"Лопасти",brand:"FATPIPE",name:"Jab Blade",price:1990,image:img("1517649763962-0c623066013b")},
{id:13,cat:"Лопасти",brand:"SALMING",name:"Quest Blade",price:2390,image:img("1534158914592-062992fbe2a6")},
{id:14,cat:"Лопасти",brand:"EXEL",name:"X-Blade",price:1890,image:img("1540740405-7e1c5c7e7e5a")},

{id:15,cat:"Мячи",brand:"ZONE",name:"Monster Ball White",price:490,badge:"Хит",image:img("1599058917212-d750089bc07e")},
{id:16,cat:"Мячи",brand:"UNIHOC",name:"Crater Ball",price:450,image:img("1579952363873-27f3bade9f55")},
{id:17,cat:"Мячи",brand:"OXDOG",name:"Hyperlight Ball",price:490,image:img("1552667466-07770ae110d0")},
{id:18,cat:"Мячи",brand:"SALMING",name:"Training Ball",price:390,image:img("1517649763962-0c623066013b")},
{id:19,cat:"Мячи",brand:"FATPIPE",name:"Speed Ball",price:420,image:img("1534158914592-062992fbe2a6")},
{id:20,cat:"Мячи",brand:"EXEL",name:"X-Ball 3 Pack",price:990,image:img("1540740405-7e1c5c7e7e5a")},

{id:21,cat:"Вратарская экипировка",brand:"ZONE",name:"Goalie Mask Pro",price:10990,badge:"Новинка",image:img("1599058917212-d750089bc07e")},
{id:22,cat:"Вратарская экипировка",brand:"UNIHOC",name:"Goalie Pants",price:8490,image:img("1579952363873-27f3bade9f55")},
{id:23,cat:"Вратарская экипировка",brand:"OXDOG",name:"Goalie Shirt",price:7990,image:img("1552667466-07770ae110d0")},
{id:24,cat:"Вратарская экипировка",brand:"SALMING",name:"Knee Protection",price:5990,image:img("1517649763962-0c623066013b")},
{id:25,cat:"Вратарская экипировка",brand:"FATPIPE",name:"Goalie Gloves",price:4290,image:img("1534158914592-062992fbe2a6")},
{id:26,cat:"Вратарская экипировка",brand:"ZONE",name:"Goalie Chest",price:11990,image:img("1540740405-7e1c5c7e7e5a")},

{id:27,cat:"Одежда",brand:"ZONE",name:"Team Jersey Black",price:4990,badge:"Новинка",image:img("1599058917212-d750089bc07e")},
{id:28,cat:"Одежда",brand:"OXDOG",name:"Training Tee",price:3290,image:img("1579952363873-27f3bade9f55")},
{id:29,cat:"Одежда",brand:"UNIHOC",name:"Game Shorts",price:3490,image:img("1552667466-07770ae110d0")},
{id:30,cat:"Одежда",brand:"SALMING",name:"Warm-up Jacket",price:6990,image:img("1517649763962-0c623066013b")},
{id:31,cat:"Одежда",brand:"FATPIPE",name:"Team Pants",price:4490,image:img("1534158914592-062992fbe2a6")},
{id:32,cat:"Одежда",brand:"EXEL",name:"Base Layer",price:3990,image:img("1540740405-7e1c5c7e7e5a")},

{id:33,cat:"Обувь",brand:"SALMING",name:"Viper Pro 2",price:9990,badge:"Хит",image:img("1542291026-7eec264c27ff")},
{id:34,cat:"Обувь",brand:"UNIHOC",name:"U3 Shoe",price:8990,image:img("1460353581641-37baddab0fa2")},
{id:35,cat:"Обувь",brand:"ZONE",name:"Hyper Grip",price:9490,image:img("1542291026-7eec264c27ff")},
{id:36,cat:"Обувь",brand:"OXDOG",name:"Floorball Indoor",price:9290,image:img("1460353581641-37baddab0fa2")},
{id:37,cat:"Обувь",brand:"FATPIPE",name:"Speed Court",price:7990,image:img("1542291026-7eec264c27ff")},
{id:38,cat:"Обувь",brand:"EXEL",name:"Aero Indoor",price:7490,image:img("1460353581641-37baddab0fa2")},

{id:39,cat:"Сумки",brand:"ZONE",name:"Stick Bag Pro",price:5990,badge:"Хит",image:img("1553062407-98eeb64c6a62")},
{id:40,cat:"Сумки",brand:"UNIHOC",name:"Equipment Bag 90L",price:6490,image:img("1553062407-98eeb64c6a62")},
{id:41,cat:"Сумки",brand:"OXDOG",name:"Gear Backpack",price:5290,image:img("1553062407-98eeb64c6a62")},
{id:42,cat:"Сумки",brand:"SALMING",name:"Team Backpack",price:4990,image:img("1553062407-98eeb64c6a62")},
{id:43,cat:"Сумки",brand:"FATPIPE",name:"Floorball Bag",price:4490,image:img("1553062407-98eeb64c6a62")},

{id:44,cat:"Аксессуары",brand:"ZONE",name:"Grip Tape",price:790,badge:"Хит",image:img("1599058917212-d750089bc07e")},
{id:45,cat:"Аксессуары",brand:"UNIHOC",name:"Pro Grip",price:890,image:img("1579952363873-27f3bade9f55")},
{id:46,cat:"Аксессуары",brand:"OXDOG",name:"Bottle 0.75L",price:990,image:img("1552667466-07770ae110d0")},
{id:47,cat:"Аксессуары",brand:"SALMING",name:"Sport Glasses",price:2990,image:img("1517649763962-0c623066013b")},
{id:48,cat:"Аксессуары",brand:"FATPIPE",name:"Tape 3 Pack",price:1490,image:img("1534158914592-062992fbe2a6")},
{id:49,cat:"Аксессуары",brand:"EXEL",name:"Floorball Tool Kit",price:2490,image:img("1540740405-7e1c5c7e7e5a")},

{id:50,cat:"Оборудование",brand:"ZONE",name:"Training Goal",price:24990,badge:"Новинка",image:img("1599058917212-d750089bc07e")},
{id:51,cat:"Оборудование",brand:"UNIHOC",name:"Training Cones Set",price:2990,image:img("1579952363873-27f3bade9f55")},
{id:52,cat:"Оборудование",brand:"OXDOG",name:"Coach Board",price:3990,image:img("1552667466-07770ae110d0")},
{id:53,cat:"Оборудование",brand:"SALMING",name:"Training Set",price:6990,image:img("1517649763962-0c623066013b")},
];

const categories=[
["Клюшки","Игровые и тренировочные","🏑"],
["Лопасти","Крюки и комплектующие","◒"],
["Мячи","Тренировочные и игровые","●"],
["Вратарская экипировка","Всё для вратаря","🥅"],
["Одежда","Форма и тренировки","◼"],
["Обувь","Для зала и паркета","◉"],
["Сумки","Сумки и рюкзаки","▣"],
["Аксессуары","Всё необходимое","+"],
["Оборудование","Для тренировок и команд","□"]
];
const brands=["ZONE","UNIHOC","OXDOG","SALMING","FATPIPE","EXEL"];
const money=n=>n.toLocaleString("ru-RU")+" ₽";

function go(path){window.history.pushState({}, "", path);window.dispatchEvent(new PopStateEvent("popstate"))}
function usePath(){const [p,setP]=useState(location.pathname);React.useEffect(()=>{const f=()=>setP(location.pathname);addEventListener("popstate",f);return()=>removeEventListener("popstate",f)},[]);return p}

function Layout({children,cart,setCart}) {
 const [menu,setMenu]=useState(false); const [search,setSearch]=useState(false);
 const add=(p)=>{setCart([...cart,p]);};
 return <div>
  <div className="topline"><div className="container top-inner"><span>Доставка по России</span><span>Помощь с подбором</span><span>Floorball Zone</span></div></div>
  <header><div className="container header-inner">
   <button className="mobile-menu" onClick={()=>setMenu(true)}><Menu/></button>
   <a className="logo" onClick={()=>go("/")}><span className="logo-mark">FZ</span><span><b>FLOORBALL</b><strong>ZONE</strong></span></a>
   <nav className={menu?"open":""}><button className="close" onClick={()=>setMenu(false)}><X/></button>
    <a onClick={()=>{go("/catalog");setMenu(false)}}>Каталог</a><a onClick={()=>{go("/category/клюшки");setMenu(false)}}>Клюшки</a>
    <a onClick={()=>{go("/category/вратарская-экипировка");setMenu(false)}}>Вратарская</a><a onClick={()=>{go("/brands");setMenu(false)}}>Бренды</a>
    <a onClick={()=>{go("/teams");setMenu(false)}}>Для команд</a><a className="sale" onClick={()=>{go("/sale");setMenu(false)}}>Sale</a>
   </nav>
   <div className="actions"><button onClick={()=>setSearch(!search)}><Search/></button><button><Heart/></button><button className="cart" onClick={()=>go("/order")}><ShoppingBag/><span>Заказ</span>{cart.length>0&&<em>{cart.length}</em>}</button></div>
  </div></header>
  {search&&<div className="searchbar"><div className="container"><Search/><input autoFocus placeholder="Поиск по товарам..." onKeyDown={e=>e.key==="Enter"&&go("/search?q="+encodeURIComponent(e.target.value))}/></div></div>}
  {children}
  <footer><div className="container footer-grid"><div><a className="logo" onClick={()=>go("/")}><span className="logo-mark">FZ</span><span><b>FLOORBALL</b><strong>ZONE</strong></span></a><p>Флорбольная экипировка для игроков и команд.</p></div>
   <div><h4>Магазин</h4><a onClick={()=>go("/catalog")}>Каталог</a><a onClick={()=>go("/brands")}>Бренды</a><a onClick={()=>go("/sale")}>Sale</a></div>
   <div><h4>Помощь</h4><a onClick={()=>go("/help")}>Подбор экипировки</a><a onClick={()=>go("/teams")}>Для команд</a><a onClick={()=>go("/blog")}>Статьи</a></div>
   <div><h4>Контакты</h4><p><Phone size={14}/> +7 (000) 000-00-00</p><p><Send size={14}/> VK / Telegram</p><p><MapPin size={14}/> Россия</p></div></div>
   <div className="container footer-bottom"><span>© 2026 Floorball Zone</span><span>Сайт находится в разработке</span></div></footer>
 </div>
}

function ProductCard({p,onAdd}){return <article className="product"><div className="p-img">{p.badge&&<span className="badge">{p.badge}</span>}<button className="heart"><Heart size={17}/></button><img src={p.image} alt={p.name}/><button className="quick" onClick={()=>go("/product/"+p.id)}>Подробнее</button></div><div className="p-info"><small>{p.brand}</small><h3>{p.name}</h3><p>{p.cat}</p><div className="p-bottom"><div><b>{money(p.price)}</b>{p.old&&<del>{money(p.old)}</del>}</div><button onClick={()=>onAdd(p)}><Plus/></button></div></div></article>}

function ProductGrid({items,onAdd}){return <div className="product-grid">{items.map(p=><ProductCard p={p} onAdd={onAdd} key={p.id}/>)}</div>}

function Home({onAdd}){
 return <><section className="hero"><div className="container hero-grid"><div><small>FLOORBALL ZONE / SHOP</small><h1>Всё для игры.<br/><span>Ничего лишнего.</span></h1><p>Клюшки, экипировка, форма и аксессуары для игроков и команд.</p><div className="buttons"><button onClick={()=>go("/catalog")} className="btn dark">Каталог <ArrowRight/></button><button onClick={()=>go("/help")} className="btn outline">Помочь с выбором</button></div></div><div className="hero-graphic"><div className="circle"></div><div className="stick"></div><div className="ball"></div><b>PLAY<br/>HARD</b></div></div></section>
 <section className="section"><div className="container"><SectionTitle label="01 / КАТАЛОГ" title="Выберите категорию" action="Весь каталог" path="/catalog"/><div className="cat-grid">{categories.map(c=><button className="cat-card" onClick={()=>go("/category/"+encodeURIComponent(c[0].toLowerCase()))} key={c[0]}><i>{c[2]}</i><div><h3>{c[0]}</h3><p>{c[1]}</p></div><ArrowRight/></button>)}</div></div></section>
 <section className="section white"><div className="container"><SectionTitle label="02 / ПОПУЛЯРНОЕ" title="Хиты и новинки" action="Все товары" path="/catalog"/><ProductGrid items={products.slice(0,8)} onAdd={onAdd}/></div></section>
 <section className="help"><div className="container help-grid"><div><small>ПОДБОР ЭКИПИРОВКИ</small><h2>Не знаете,<br/><span>что выбрать?</span></h2><p>Ответьте на несколько вопросов — поможем подобрать клюшку и экипировку под ваш уровень, рост и бюджет.</p><button className="btn dark" onClick={()=>go("/help")}>Подобрать экипировку <ArrowRight/></button></div><div className="steps">{["Возраст и рост","Уровень игры","Позиция на поле","Ваш бюджет"].map((x,i)=><div key={x}><b>0{i+1}</b><span>{x}</span></div>)}</div></div></section>
 <section className="brands"><div className="container"><small>БРЕНДЫ</small><div>{brands.map(b=><button key={b} onClick={()=>go("/brand/"+b.toLowerCase())}>{b}</button>)}</div></div></section>
 <section className="team"><div className="container team-grid"><div><small>FLOORBALL ZONE / TEAMS</small><h2>Экипировка<br/><span>для команд</span></h2><p>Форма, клюшки, вратарская экипировка и оборудование. Соберём заказ под задачи вашей команды.</p><button className="btn light" onClick={()=>go("/teams")}>Для команд <ArrowRight/></button></div><strong>TEAM<br/>ZONE</strong></div></section></>
}

function SectionTitle({label,title,action,path}){return <div className="section-title"><div><small>{label}</small><h2>{title}</h2></div>{action&&<button onClick={()=>go(path)}>{action}<ArrowRight/></button>}</div>}

function Catalog({onAdd}){
 return <main className="page"><div className="container"><div className="crumb">Главная <ChevronRight/> Каталог</div><SectionTitle label="FLOORBALL ZONE / SHOP" title="Каталог"/><div className="catalog-layout"><aside><h4>Категории</h4>{categories.map(c=><button onClick={()=>go("/category/"+encodeURIComponent(c[0].toLowerCase()))} key={c[0]}>{c[0]}<span>{products.filter(p=>p.cat===c[0]).length}</span></button>)}</aside><div><div className="toolbar"><span>{products.length} товаров</span><button><SlidersHorizontal/> Фильтры</button></div><ProductGrid items={products} onAdd={onAdd}/></div></div></div></main>
}

function Category({name,onAdd}){
 const decoded=decodeURIComponent(name); const title=categories.find(c=>c[0].toLowerCase()===decoded)?.[0]||decoded; const items=products.filter(p=>p.cat.toLowerCase()===title.toLowerCase());
 return <main className="page"><div className="container"><div className="crumb"><button onClick={()=>go("/")}>Главная</button><ChevronRight/><button onClick={()=>go("/catalog")}>Каталог</button><ChevronRight/>{title}</div><SectionTitle label="КАТЕГОРИЯ" title={title}/><p className="category-lead">{categories.find(c=>c[0]===title)?.[1]}</p><div className="toolbar"><span>{items.length} товаров</span><button><SlidersHorizontal/> Фильтры</button></div><ProductGrid items={items} onAdd={onAdd}/></div></main>
}

function Product({id,onAdd}){
 const p=products.find(x=>x.id===Number(id))||products[0];
 return <main className="page"><div className="container"><div className="crumb"><button onClick={()=>go("/")}>Главная</button><ChevronRight/>{p.cat}<ChevronRight/>{p.name}</div><div className="detail"><div className="detail-img"><img src={p.image}/>{p.badge&&<span className="badge">{p.badge}</span>}</div><div className="detail-info"><small>{p.brand}</small><h1>{p.name}</h1><p className="detail-cat">{p.cat}</p><div className="price">{money(p.price)} {p.old&&<del>{money(p.old)}</del>}</div><p className="desc">Профессиональная экипировка для флорбола. Товар представлен в демонстрационной версии каталога Floorball Zone.</p><div className="specs"><div><span>Бренд</span><b>{p.brand}</b></div><div><span>Категория</span><b>{p.cat}</b></div><div><span>Наличие</span><b><Check size={15}/> В наличии</b></div></div><button className="btn dark full" onClick={()=>onAdd(p)}>Добавить в заказ <ShoppingBag/></button><button className="help-link" onClick={()=>go("/help")}>Нужна помощь с выбором? →</button></div></div></div></main>
}

function Brands(){return <main className="page"><div className="container"><SectionTitle label="FLOORBALL ZONE / BRANDS" title="Бренды"/><div className="brand-list">{brands.map(b=><button onClick={()=>go("/brand/"+b.toLowerCase())} key={b}><span>{b}</span><ArrowRight/></button>)}</div></div></main>}
function Brand({name,onAdd}){const b=name.toUpperCase();const items=products.filter(p=>p.brand===b);return <main className="page"><div className="container"><div className="brand-hero"><small>БРЕНД</small><h1>{b}</h1><p>Экипировка и инвентарь {b} в каталоге Floorball Zone.</p></div><SectionTitle label={`${b} / ТОВАРЫ`} title="Коллекция"/><ProductGrid items={items} onAdd={onAdd}/></div></main>}
function Sale({onAdd}){const items=products.filter(p=>p.old||p.badge==="Sale");return <main className="page"><div className="container"><div className="sale-hero"><small>FLOORBALL ZONE / SALE</small><h1>SALE</h1><p>Специальные цены на выбранные позиции.</p></div><SectionTitle label="РАСПРОДАЖА" title="Специальные предложения"/><ProductGrid items={items} onAdd={onAdd}/></div></main>}
function Help(){return <main className="page"><div className="container narrow"><SectionTitle label="ПОДБОР ЭКИПИРОВКИ" title="Поможем выбрать"/><p className="lead">Ответьте на вопросы, и консультант Floorball Zone поможет подобрать экипировку.</p><div className="form"><label>Ваше имя<input placeholder="Имя"/></label><label>Телефон<input placeholder="+7"/></label><label>Что подбираем<select><option>Клюшку</option><option>Полный комплект</option><option>Вратарскую экипировку</option><option>Экипировку для ребёнка</option></select></label><label>Комментарий<textarea placeholder="Рост, возраст, уровень игры, бюджет..."/></label><button className="btn dark" onClick={()=>alert("Заявка сохранена как демонстрационная заглушка.")}>Отправить заявку <ArrowRight/></button></div></div></main>}
function Teams(){return <main className="page"><div className="container narrow"><div className="team-page"><small>FLOORBALL ZONE / TEAMS</small><h1>Для команд</h1><p>Комплектация команд под ключ: форма, клюшки, вратарская экипировка и оборудование.</p></div><div className="team-points">{["Командная форма","Клюшки и экипировка","Вратарские комплекты","Тренировочное оборудование","Персональный расчёт заказа","Специальные условия"].map((x,i)=><div key={x}><b>0{i+1}</b><span>{x}</span></div>)}</div><div className="form"><label>Команда<input placeholder="Название команды"/></label><label>Контактный телефон<input placeholder="+7"/></label><label>Комментарий<textarea placeholder="Что требуется и примерное количество игроков"/></label><button className="btn dark" onClick={()=>alert("Заявка сохранена как демонстрационная заглушка.")}>Получить расчёт <ArrowRight/></button></div></div></main>}
function Blog(){const articles=[["Как выбрать первую флорбольную клюшку","Гид для начинающих игроков"],["Что такое Flex и как его подобрать","Разбираемся в характеристиках"],["Что нужно начинающему вратарю","Базовый комплект экипировки"],["Как подобрать длину клюшки","Практическая инструкция"],["Как выбрать обувь для флорбола","Сцепление, посадка и комфорт"],["Что взять на первую тренировку","Минимальный комплект игрока"]];return <main className="page"><div className="container"><SectionTitle label="FLOORBALL ZONE / BLOG" title="Статьи"/><div className="article-grid">{articles.map((a,i)=><article key={a[0]}><small>0{i+1} / GUIDE</small><h3>{a[0]}</h3><p>{a[1]}</p><ArrowRight/></article>)}</div></div></main>}
function About(){return <main className="page"><div className="container narrow"><div className="about"><small>FLOORBALL ZONE</small><h1>Всё для игры в флорбол.</h1><p>Floorball Zone — специализированный магазин экипировки для игроков, вратарей, тренеров и команд. Этот раздел пока работает как информационная заглушка и будет дополнен историей магазина, фотографиями и реквизитами.</p></div></div></main>}
function Contacts(){return <main className="page"><div className="container"><SectionTitle label="FLOORBALL ZONE / CONTACTS" title="Контакты"/><div className="contact-grid"><div><h3>Свяжитесь с нами</h3><p><Phone/> +7 (000) 000-00-00</p><p><Send/> VK / Telegram</p><p><MapPin/> Россия</p></div><div className="map-placeholder">КАРТА / ШОУРУМ<br/><small>Блок-заглушка</small></div></div></div></main>}
function Order({cart}){return <main className="page"><div className="container narrow"><SectionTitle label="FLOORBALL ZONE / ORDER" title="Ваш заказ"/>{cart.length===0?<div className="empty"><ShoppingBag/><h3>Заказ пока пуст</h3><button className="btn dark" onClick={()=>go("/catalog")}>Перейти в каталог</button></div>:<><div className="order-list">{cart.map((p,i)=><div key={i}><img src={p.image}/><div><b>{p.brand} {p.name}</b><span>{money(p.price)}</span></div></div>)}</div><div className="form"><label>Имя<input placeholder="Имя"/></label><label>Телефон<input placeholder="+7"/></label><label>Комментарий<textarea placeholder="Размеры, количество и пожелания"/></label><button className="btn dark" onClick={()=>alert("Заказ отправлен как демонстрационная заявка.")}>Отправить заявку <ArrowRight/></button></div></>}</div></main>}

function App(){
 const path=usePath(); const [cart,setCart]=useState([]);
 const add=(p)=>{setCart(c=>[...c,p]);};
 let content;
 if(path==="/") content=<Home onAdd={add}/>;
 else if(path==="/catalog") content=<Catalog onAdd={add}/>;
 else if(path.startsWith("/category/")) content=<Category name={path.split("/")[2]} onAdd={add}/>;
 else if(path.startsWith("/product/")) content=<Product id={path.split("/")[2]} onAdd={add}/>;
 else if(path==="/brands") content=<Brands/>;
 else if(path.startsWith("/brand/")) content=<Brand name={path.split("/")[2]} onAdd={add}/>;
 else if(path==="/sale") content=<Sale onAdd={add}/>;
 else if(path==="/help") content=<Help/>;
 else if(path==="/teams") content=<Teams/>;
 else if(path==="/blog") content=<Blog/>;
 else if(path==="/about") content=<About/>;
 else if(path==="/contacts") content=<Contacts/>;
 else if(path==="/order") content=<Order cart={cart}/>;
 else content=<Catalog onAdd={add}/>;
 return <Layout cart={cart} setCart={setCart}>{content}</Layout>
}
createRoot(document.getElementById("root")).render(<App/>);