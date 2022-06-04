var questions = ['Кого принято считать «отцом истории:', 'Как называется основное историческое сочинение Геродота?', 'Кто был автором первого исторического сочинения, посвященного всемирной истории?', 'Установите соответствие между методом исторического исследования и его определением (Километрия)', 'Учение о способах исследования, освещения исторических фактов, научного познания называется', 'Установите соответствие между историческим понятием и его определением (Географический детерменизм)', 'По мнению К. Маркса и Ф. Энгельса, движущей силой истории является:', 'Кто из советских историков был автором теории пассионарности?', 'Какое русское историческое произведение было впервые издано типографским способом в 1674г.?', 'Наиболее ранним представителем отечественной исторической школы является:', 'Главным редактором и одним из авторов какого исторического произведения был Петр 1?', 'Кто из французских просветителей ХVIII в. написал по официальному поручению императрицы Елизаветы Петровны «Историю Российской Империи при Петре Великом»?', 'Особенности исторического пути Росси Н.М. Карамзин объяснял:', 'Представителем отечественной исторической школы позитивизма является:', 'Кто из выдающихся русских историков Х1Хв. выдвигал на первый план историю государства?', 'Кто из русских историков Х1Хв. считал, что « история народа принадлежит царю»?', 'Кто из декабристов выдвинул тезис о том, что «история народа принадлежит народу»?', 'Кто из русских историков Х1Хв. был сторонником теории официальной народности?', 'Кто из выдающихся русских историков стремился показать в своих работах историю народа и отказался от традиции освещать историю России по царствованиям? ', 'Чьим учеником был В.О.Ключевский?', 'Какая книга принесла известность В.О.Ключевскому?', 'Сторонником какого подхода к изучению истории является А. Тойнби:', 'Постмодернистская концепция основное значение в историческом познании отводит:', 'Подход, рассматривавший историю как процесс восхождения человечества на все более высокий уровень развития, получил название', 'В России история как наука возникает в связи с изучением и критическим осмыслением источников в', 'Основоположником «дворянской» исторической науки, предпринявшим попытку создать первый обобщающий труд по истории России считается ', 'Рассмотрение исторического процесса как результата проявления божественной воли, мирового духа характерно для', 'Господствующим в познании исторического прошлого в советский период был ........................ подход: ', 'Родоначальником марксистской концепции отечественной истории считается', 'Подход, в соответствии с которым исторический процесс представляется как последовательная смена в истории человечества общественно-экономических формаций, получил название:', 'Основоположником антинорманизма считается:', 'Подход, в соответствии с которым ход истории определяет географическая среда, получил название: ', 'Подход, рассматривающий историю, как процесс восхождения на все более высокий уровень развития, получил название:'];
// ['', '', ''],
var answers = [['а) Полибия;', 'б) Тацита; ', 'в) Геродота'],
				    ['а) «История» ', 'б) «Повествование о  Пелопоннесской войне»', 'в) «Анналы»'],
					['а) Евсевий Кесарийский (кон. Ш – нач. 1Ув.)', 'б) Фукидид (кон. Ув. до.н.э.) ', 'в) Тацит (ок.55-ок.120) '],
					['- применение количественных методов ', '- метод структурного анализа', '- метод логических приемов'],
					['а) историография ', 'б) методология', 'в) субъективизм '],
					['- влияние географической среды на историю развития конкретного региона', '- результат опытно-практического прогресса', '- теория органического движения культур'],
					['а) абсолютная идея; ', 'б) отдельная личность; ', 'в) классовая борьба. '],
					['а) Б.Д.Греков', 'б) Л.Н.Гумилев', 'в) Д.Л.Андреев'],
					['а) Синопсис ', 'б) Хронограф', 'в) Степенная книга '],
					['а) В.Н. Татищев; ', 'б) Н.М. Карамзин; ', 'в) М.В. Ломоносов.'],
					['а) «Гистория Свейской войны»', 'б) «Ядро Российской истории» ','в) «Рассуждения о причинах Свейской войны»'],
					['а) Дидро','б) Вольтер','в) Руссо'],
					['а) главной целью – созданием мощного государства; ', 'б) спецификой хозяйствования экономики;', 'в) религиозным фактором'],
					['а) В.Н. Татищев; ', 'б) Н.М. Карамзин;', 'в) Т.Н.Грановский '],
					['а) В.О.Ключевский', 'б) С.М.Соловьев','в) Н.М.Карамзин'],
					['а) Б.Н.Чичерин ', 'б) Н.М.Карамзин', 'в) М.П.Погодин '],
					['а) Н.М.Муравьев', 'б) М.С.Лунин ', 'в) Н.И.Тургенев'],
					['а) В.О.Ключевский', 'б) С.М.Соловьев', 'в) М.П.Погодин'],
					['а) Н.М.Карамзин', 'б) В.О.Ключевский', 'в) С.М.Соловьев'],
					['а) С.М.Иловайского', 'б) С.М.Соловьева', 'в) Н.М.Карамзина'],
					['а) «История Государства Российского»', 'б) «История России с древнейших времен»', 'в) «Курс русской истории»'],
					['а) естестеннонаучного;', 'б) религиозного;', 'в) культурно-цивилизованного. '],
					['а) речевой практике;', 'б) факту', 'в) мировоззрению и ценностным установкам исследователя'],
					['а) эволюционизм', 'б) субъективизм', 'в) теологический', 'г) волюнтаризм'],
					['а) ХVII', 'б) XVIII', 'в) XX', 'г) XV'],
					['а) С.М.Соловьев', 'б) Л.Н.Гумилев', 'в) В.Н. Татищев', 'г) М.Н.Покровский'],
					['а) теологического подхода', 'б) рационализма ', 'в) эволюционизма', 'г) марксизма'],
					['а) теологический', 'б) синтетический', 'в) цивилизационный', 'г) марксистский'],
					['а) В.О.Ключевский', 'б) М.Н.Покровский', 'в) В.Н.Татищев ', 'г) Л.Н.Гумилев'],
					['а) цивилизационный ', 'б) географический  детермнизм', 'в) марксизм', 'г) рационализм'],
					['а) М.Н.Покровский', 'б) В.О.Ключевский', 'в) В.Н.Татищев', 'г) М.В.Ломоносов'],
					['а) география', 'б) географический детерминизм', 'в) рационализм ', 'г) геология'],
					['а) эволюционизм', 'б) географический  детерминизм', 'в) субъективизм', 'г) теологический'],
				   ];

var answerz = new Array('2', '0', '0', '1', '1', '0', '2', '1', '0', '0', '0', '1', '0', '2', '1', '1', '0', '2', '1', '1', '2', '2', '0', '0', '1', '2', '0', '3', '1', '2', '3', '1', '0');	
var baza = new Array();
var p = 0;
function start() {
	s='<ol>'
	for (y=0; y<20; y++) 
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
		s+='<li><b><span id=o'+i+'>' + questions[i] + '</b></span><br><form class="form"' + ' name=q'+i+'>'+'<p>';
		for (k=0; k<answers[i].length; k++) 
		{
			s+='<input type="radio" name="n'+i+'"> ' + '<span name="v'+i+'"> ' + answers[i][k] + '</span><br>';
    	}
		s+='</p></form><hr>';
	}
    s+='</ol>';	
	document.write(s);
}
function proof() {
	z=0; x='';
	let div = document.createElement('div');
	div.className = "results";
	div.innerHTML = '<h3>Ошибки:</h3>';
	document.body.append(div);
	for (b=0; b<baza.length; b++) 
		{
			x='document.q'+baza[b]+'.n'+baza[b]+'['+answerz[baza[b]]+'].checked';
			if (eval(x)) {
				z++;
				const zagolovok = document.getElementById("o" + baza[b]);
				zagolovok.style.color = "#00CC00";
			}
			else {

				let li = document.createElement('li');
				li.innerHTML = '<b>Вопрос ' + (b+1) + '</b>' + '. Вариант: ' + (parseInt(answerz[baza[b]]) + 1);
				document.body.append(li);
				const zagolovok = document.getElementById("o" + baza[b]);
				zagolovok.style.color = "#FF3333";
				const elem = document.getElementsByName('v' + baza[b]).item(answerz[baza[b]]);
				elem.style.color = "#00CC00";
			}
		}
		return (z*2.5) + ' ' + 'баллов' + ' ' + '|' + ' ' + ((z/20)*100).toFixed(2) + '%';
	}