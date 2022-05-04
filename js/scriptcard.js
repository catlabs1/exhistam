var questions = ['Когда проводилась политика «военного коммунизма»:', 'События  весны  1921  г.  были  оценены  В.И.  Лениным  как  «самый большой внутренний политический кризис советской власти», так как:', 'Проявлением  политического,  социально-экономического  кризиса  в Советской России по окончании гражданской войны был(о)...', 'Проявлением  политического,  социально-экономического  кризиса  в Советской России в ходе и по окончании гражданской войны был(а, о)...', 'На  каком  съезде  партии  начался  переход  от  политики  «военного коммунизма» к нэпу: ', 'Новой экономической политике (НЭПу) предшествовала (о) ...', 'Хронологическими рамками новой экономической политики являлся период...', 'Переход к новой экономической политике (НЭПу) начался с ...', 'Новую экономическую политику (НЭП) характеризует понятие ...', 'Мероприятием  новой  экономической  политики  (НЭПа) являлось(лась) ...', 'Мероприятием  новой  экономической  политики  (НЭПа)  не являлось(лась) ...', 'Свертывание новой экономической политики (НЭПа) относится к...', 'Продразверстка была заменена в 1921 году...', 'В чем заключалась сущность нэпа:', 'Значительные темпы экономического роста страны в период нэпа объяснялись:', 'Решение о замене продразверстки продналогом означало отказ от..', 'Переход к новой экономической политике (НЭПу) был вызван...', 'Новая экономическая политика (НЭП) позволила успешно...', 'В основу советской модели национально-государственного устройства был(о) положен(о) ...', 'В основу советской модели национально-государственного устройства был(о) положен(о) ... ', 'Главная предпосылка создания СССР:', 'СССР был образован ...', 'Первая конституция СССР была принята в январе ...', 'СССР был создан на основе объединения  ...  республик.', 'В состав СССР к 1941 г. входило ... республик (и)', 'СССР был образован в декабре 1922 г. на основе объединения четырех советских республик – РСФСР, ЗСФСР, БССР и...', 'Вхождение Советских республик в состав РСФСР на правах автономий предусматривал проект...', 'Добровольное объединение Советских республик на равноправной основе в новое государственное образование СССР предусматривал проект...', 'Образование СССР в декабре 1922 г. произошло на основе объединения четырех советских республик – РСФСР, УССР, БССР и...', 'Конституция 1924г. провозгласила СССР ... государством', 'Высшим органом власти в СССР согласно Конституции 1924 г. стал(а, о)...', '30 декабря 1922 г.  I Всесоюзным съездом Советов были утверждены:', 'Форсированная индустриализация началась в СССР в ... году.', 'Переход к сплошной коллективизации в СССР начался в ... году.', 'Советской модели индустриализации был(о) присущ(е)... ', 'Советской модели индустриализации не  был(о) присущ(е)...', 'Процесс  создания  крупного  машинного  производства  в промышленности и других отраслях хозяйства – это...', 'Форсированная индустриализация завершилась ...', 'Сплошная коллективизация сельского хозяйства завершилась...', 'Культурная революция в СССР в 20-30-е гг. способствовала ... ', 'Культурная революция в СССР в 20-30-е гг. способствовала ... ', 'На какой основе функционировала хозяйственная система СССР в 30-е гг.: ', 'Главная причина утверждения в 30-е гг. в СССР сталинского режима:', 'Сталинизм ─ это ..'];
var answers = [['а) с мая-июня 1918 г. до марта 1921 г.  ', 'б) с января 1919 г. по сентябрь 1920 г. ', 'в) с октября 1920 г. по декабрь 1922 г. ', 'г) с октября 1917 г. по март 1921 г. ', 'д) с января 1918 г. по ноябрь 1920 г.'], ['а) против  политики  ЦК  выступило  большинство  низовых  партийных организаций ', 'б) была создана крупная меньшевистско-эсеровская организация ', 'в) против политики большевиков выступили крестьяне, питерские рабочие и моряки Кронштадта ', 'г) началась I Мировая война  ', 'д) началась гражданская война'], ['а) Кронштадтский мятеж ', 'б) восстание на броненосце «Потемкин» ', 'в) «Кровавое воскресенье» ', 'г) Ленский расстрел ', 'д) мятеж чехословацкого корпуса'], ['а) «антоновщина» ', 'б) восстание на броненосце «Потемкин» ', 'в) Ленский расстрел ', 'г) «Кровавое воскресенье» ', 'д) мятеж чехословацкого корпуса '], ['а) на IX съезде РКП(б) 1920 г.; ', 'б) на Х съезде РКП(б) 1921 г.;  ', 'в) на XII съезде РКП(б) 1923 г. ', 'г) на VIII съезде РКП (б) в 1919 г. ', 'д) на ХХ съезде РКП (б) в 1956 г.'], ['а) политика «военного коммунизма» ', 'б) коллективизация ', 'в) индустриализация ', 'г) образование СССР ', 'д) хрущевская оттепель'], ['а) 1918-1921 гг. ', 'б) 1928-1937 гг. ', 'в) 1921-1928 гг. ', 'г) 1945-1953 гг. ', 'д) 1956-1964 гг.'], ['а) введения продналога ', 'б) введения продразверстки ', 'в) национализации большевиками собственности ', 'г) введение золотого рубля ', 'д) всех вышеперечисленных мер'], ['а) продналог ', 'б) милитаризация труда ', 'в) монетизация льгот  ', 'г) жесткая централизация ', 'д) индустриализация'], ['а) разрешение частной торговли произведенной продукцией ', 'б) полная национализация всей промышленности ', 'в) отмена денежного обращения ', 'г) милитаризация труда ', 'д) введение продовольственной диктатуры'], ['а) разрешение частной торговли произведенной продукцией ', 'б) восстановление денежного обращения ', 'в) введение продовольственной диктатуры ', 'г) введение продналога ', 'д) передача в аренду средних и мелких предприятий'], ['а) к концу 1980-х гг. ', 'б) началу 1920-х гг. ', 'в) началу 1930-х гг. ', 'г) концу 1930-х гг. ', 'д) концу  1920 –х гг.'], ['а) карточной системой ', 'б) отработками ', 'в) конфискацией ', 'г) национализацией ', 'д) продналогом '], ['а) в воссоздании многоукладной экономики при сохранении  «командных высот» в руках партийно-государственного аппарата  ', 'б) в запрещении частной торговли ', 'в) в создании тяжелой промышленности ', 'г) в создании рыночной экономики, демократизации политической системы ', 'д) в переходе к либеральной экономической модели развития'], ['а) широким привлечением иностранного капитала ', 'б) успехами частнокапиталистического сектора ', 'в)использованием  дореволюционного  промышленного и сельскохозяйственного потенциала  ', 'г) введением золотого обеспечения рубля ', 'д) подъемом банковского сектора '], ['а) политики «военного коммунизма» ', 'б) новой экономической политики (НЭПа) ', 'в) курса на «перестройку» ', 'г) коллективизации ', 'д) индустриализации'], ['а) политическим и социально-экономическим кризисом в стране ', 'б) началом гражданской войны ', 'в) началом I мировой войны ', 'г) заключением Брестского мирного договора ', 'д) приходом к власти прозападных сил'], ['а) восстановить экономику ', 'б) осуществить национализацию ', 'в) завершить индустриализацию ', 'г) окончательно перейти к рыночной экономике ', 'д) осуществить коллективизацию'], ['а) отсутствие органов власти в союзных республиках ', 'б) полное подчинение всех союзных республик руководству РСФСР ', 'в) сталинский проект «автономизации» ', 'г) принцип конфедеративного устройства ', 'д) право республик на свободный выход из состава СССР '], ['а) право республик на свободный выход из состава СССР ', 'б) разграничение полномочий между властью союзной и союзных республик ', 'в) ленинский план федеративного устройства ', 'г) равноправие союзных республик ', 'д) все вышеперечисленное'], ['а) общность исторических судеб и хозяйственного развития ', 'б) желание центра принудительно объединить республики  ', 'в) желание населения осуществить мировую революцию ', 'г) стремление национальной элиты прийти к власти ', 'д) внешняя угроза ряду бывших регионов Российской империи'], ['а) 12 декабря 1922 г. ', 'б) 30 декабря 1922 г. ', 'в) 3 марта 1918 г. ', 'г) 25 октября 1917 г. ', 'д) 31 января 1924 г.'], ['а) 1924 г. ', 'б) 1922 г. ', 'в) 1921 г. ', 'г) 1925 г. ', 'д) 1917 г.'], ['а) 2 ', 'б) 4 ', 'в) 16 ', 'г) 20 ', 'д) 3'], ['а) 12 ', 'б) 16 ', 'в) 4 ', 'г) 20 ', 'д) 15 '], ['а) Украинской ССР ', 'б) Армянской ССР ', 'в) Казахской ССР', 'г) Эстонской ССР ', 'д) Молдавской ССР '], ['а) В.И. Ленина ', 'б) И.В. Сталина ', 'в) Г.В. Плеханова ', 'г) А.В. Луначарского ', 'д) Г.К. Орджоникидзе'], ['а) В.И. Ленина ', 'б) И.В. Сталина ', 'в) А.В. Луначарского ', 'г) Л.Д. Троцкого ', 'д) Г.К. Орджоникидзе'], ['а) Закавказской Федерации ', 'б) Туркменской ССР ', 'в) Грузинской ССР ', 'г) Литовской ССР ', 'д) Молдавской ССР'], ['а) федеративным ', 'б) унитарным ', 'в) конфедеративным ', 'г) полицейским ', 'д) парламентским'], ['а) Всесоюзный съезд Советов ', 'б) Конституционный суд ', 'в) Администрация президента ', 'г) Учредительное собрание ', 'д) Федеральное Собрание'], ['а) «Декларация об образовании СССР» и «Союзный договор» ', 'б) Декреты о мире и о земле ', 'в)  Конституция СССР ', 'г) декрет «Об объединении советских республик России, Украины, Латвии, Литвы, Белоруссии для борьбы с мировым капитализмом» ', 'д) все вышеперечисленные документы'], ['а) 1921 ', 'б) 1928 ', 'в) 1933 ', 'г) 1924 ', 'д) 1935'], ['а) 1925 ', 'б) 1921 ', 'в)1929 ', 'г) 1935 ', 'д) 1917'], ['а) преимущественное развитие сельского хозяйства,  легкой промышленности, сферы услуг ', 'б) преимущественное развитие легкой промышленности ', 'в) активное использование иностранных инвестиций ', 'г) применение рыночных механизмов ', 'д) форсированный характер'], ['а) форсированный характер ', 'б) использование исключительно внутренних источников ', 'в) преимущественное развитие тяжелой промышленности ', 'г) активное использование иностранных инвестиций ', 'д) все вышеперечисленное'], ['а) индустриализация ', 'б) промышленный переворот ', 'в) интеграция ', 'г) интенсификация ', 'д) ускорение'], ['а) началом научно-технической революции; ', 'б) вступлением СССР в постиндустриальный этап развития ', 'в) переходом к сплошной коллективизации сельского хозяйства ', 'г) обеспечением технико-экономической независимости страны ', 'д) подъемом сельского хозяйства'], ['а) утверждением колхозного строя ', 'б) ликвидацией индивидуального крестьянского хозяйства ', 'в) сокращению производства зерна и поголовья скота ', 'г) ликвидацией кулачества как класса ', 'д) все вышеперечисленное'], ['а) ликвидации неграмотности  ', 'б) перестройке сознания на основе социалистической идеологии ', 'в) утверждению социалистического реализма в литературе и искусстве ', 'г) формированию новой, социалистической интеллигенции ', 'д) все вышеперечисленное '], ['а) утверждению социалистического реализма в литературе и искусстве ', 'б) широкой демократизации советского общества ', 'в) отказу от новой экономической политики (НЭПа) ', 'г) появлению правозащитного движения ', 'д) все вышеперечисленное'], ['а) прямой продуктообмен ', 'б)централизованное планирование и управление экономикой  ', 'в) свободный рынок ', 'г) модель государственного либерализма ', 'д) политика «военного коммунизма»'], ['а) возможность быстрого решения общенациональных задач (подготовка к войне, форсированная индустриализация и т.д.) ', 'б) мировой экономический кризис 1929-1933 гг. ', 'в) следование  примерам  установления  тоталитарных  режимов  в  других странах ', 'г) государственный переворот и вооруженный захват власти Сталиным ', 'д) все вышеперечисленное'], ['а) тоталитарная разновидность социализма ', 'б) название полного собрания сочинений И.Сталина ', 'в) утопический идеал социализма ', 'г) политика индустриализации ', 'д) нет верного ответа']];

var answerz = new Array('0', '2', '0', '0', '1', '0', '2', '3', '0', '0', '2', '4', '4', '0', '2', '0', '0', '0', '4', '4', '0', '1', '0', '1', '1', '0', '1', '0', '0', '0', '0', '0', '1', '2', '4', '3', '0', '3', '4', '4', '0', '1', '0', '0');	
var baza = new Array();
var baza1 = new Array();
var p = 0;
function start() {
	s='<ol>'
	for (y=0; y<1; y++) 
	{
		var i = Math.floor(Math.random() * questions.length);
		if (baza.includes(i)) {
			while (p != 1) {
				var i = Math.floor(Math.random() * questions.length);
				if (baza.includes(i) == false) {
					baza.push(i);
					p = 1;
				}
			}
			p = 0;
		}
		else {
			baza.push(i)
		}
		s+="<li><b><span class='question' id=o"+i+'>' + questions[i] + '</b></span><br><form class="form"' + ' name=q'+i+'>' + "<p class='variant-form'>";
		for (k=0; k<answers[i].length; k++) 
		{
			s+="<input class='variants'" +' type="radio" name="n'+i+'"> ' + '<span name="v'+i+'"> ' + answers[i][k] + '</span><br>';
    	}
		s+='</p></form>';
        baza1.push(i);
        baza1.push(i);
	}
    s+='</ol>';	
	document.write(s);
}
var baza = new Array();
var baza1 = new Array();
function newcard() {
    for (y=0; y<1; y++) 
	{
		var i = Math.floor(Math.random() * questions.length);
		if (baza.includes(i)) {
			while (p != 1) {
				var i = Math.floor(Math.random() * questions.length);
				if (baza.includes(i) == false) {
					baza.push(i);
					p = 1;
				}
			}
			p = 0;
        }
        baza1.pop(i);
    }
    const vopros = document.querySelector('.question');
    vopros.style.color = "#000000";
    vopros.innerHTML = "<b><span class='question' id=o"+i+'>' + questions[i] + '</b></span>';
    const elem = document.querySelector('.form');
    const inputs = document.querySelector('.variant-form');
    inputs.remove();
    elem.insertAdjacentHTML (
        'afterbegin',
        '<p class="variant-form">'
    )
    const elem1 = document.querySelector('.variant-form');
    for (k=0; k<answers[i].length; k++) 
		{   
            elem1.insertAdjacentHTML (
                'beforeend',
                '<input class="variants"' +' type="radio" name="n'+i+'"> ' + '<span name="v'+i+'"> ' + answers[i][k] + '</span><br>'
            )
        }
    baza1.push(i);
    elem1.insertAdjacentHTML (
        'beforeend',
        '</p>'
    )

}
function proof() {
	z=0; x='';
    console.log(baza, ' ', baza1);
	for (b=0; b<baza.length; b++) 
		{
			x='document.q'+baza[b]+'.n'+baza1[1]+'['+answerz[baza1[b]]+'].checked';
            xx='document.q'+baza[b]+'.n'+baza1[1]+'['+answerz[baza1[b]]+']';
            console.log(xx);
			if (eval(x)) {
				z++;
				const zagolovok = document.getElementById("o" + baza[b]);
				zagolovok.style.color = "#00CC00";
			}
			else {
                const zagolovok = document.getElementById("o" + baza[b]);
				zagolovok.style.color = "#FF3333";
				const otvet = document.getElementsByName('v' + baza1[1]).item(answerz[baza1[1]]);
                console.log(otvet);
				otvet.style.color = "#00CC00";
			}
            
		}
		//return (z*2.5) + ' ' + 'баллов' + ' ' + '|' + ' ' + ((z/20)*100).toFixed(2) + '%';
	}