siteScript();

function siteScript() {
  const content = {
      main: {
        description: '<article class="main-images-container"><p>Оказываю услуги любой сложности по</p>' +
        '<div class="main-image it1"><p>деталировке систем вентиляции</p><img src="images/I3,C3.jpg"></div>' +
        '<div class="main-image it2"><p>и балансировке систем отопления</p><img src="images/balansirovka.jpg"></div>' +
        '</article>',
        portfolio: '<h2>Для расчёта ориентировачной стоимости услуги заполните соответствующую форму ниже</h2>',
        calculator: /*'<article id="detailing-form"><form class="det-calc"><h3>Деталировка систем вентиляции</h3>' +
        '<p>Площадь воздуховодов (м<sup>2</sup>) с поперечным сечением:</p><div class="inputs">' +
        '<div class="input-wrapper"><div class="label"><label for="small">до 0,312 м<sup>2</sup><br>(до &empty;315)</label>' +
        '</div><div class="input"><input id="small" type="text" name="small"></div></div>' +
        '<div class="input-wrapper"><div class="label">' +
        '<label for="middle">от 0,313 м<sup>2</sup> до 1,583 м<sup>2</sup><br>(от &empty;355 до &empty;710)</label></div>' +
        '<div class="input"><input id="middle" type="text" name="middle"></div></div>' +
        '<div class="input-wrapper"><div class="label"><label for="large">от 1,584 м<sup>2</sup><br>(от &empty;800)</label>' +
        '</div><div class="input"><input id="large" type="text" name="large"></div></div></div>' +
        '<div class="buttons"><button type="button" id="det-calculate">Рассчитать</button>' +
        '<button type="reset" id="det-clear">Очистить</button></div>' +
        '<div id="det-result"><p>Стоимость:</p><span></span></div></form></article>' +
        '<article id="balancing-form"><form class="bal-calc"><h3>Балансировка системы отопления</h3>' +
        '<p>Количество клапанов:</p><div class="inputs">' +
        '<div class="input-wrapper"><div class="label"><label for="trv">термостатические клапаны:</label></div>' +
        '<div class="input"><input id="trv" type="text" name="trv"></div></div>' +
        '<div class="input-wrapper"><div class="label"><label for="bv">ручные балансировочные клапаны:</label></div>' +
        '<div class="input"><input id="bv" type="text" name="bv"></div></div>' +
        '<div class="input-wrapper"><div class="label"><label for="dtv">регуляторы перепада давления:</label></div>' +
        '<div class="input"><input id="dtv" type="text" name="dtv"></div></div></div>' +
        '<div class="buttons"><button type="button" id="bal-calculate">Рассчитать</button>' +
        '<button type="reset" id="bal-clear">Очистить</button></div>' +
        '<div id="bal-result"><p>Стоимость:</p><span></span></div></form></article>*/''
      },
      detailing: {
        description: '<h2>Примеры деталировки вентсистем</h2>',
        portfolio: '<div class="label"><p><span class="label-name">Объект: </span>' +
        '<span class="label-value">Лабораторный корпус Белорусского государственного медицинского университета по ' +
        'просп. Дзержинского, 83</span></p>' +
        '<p><span class="label-name">Система: </span><span class="label-value">В20,В63-В65,В67-В70,В106</span></p></div>' +
        '<article class="grid-container">' +
        '<div class="grid-item"><img src="images/portfolio/E20,63-65,67-70,106_P_1.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/E20,63-65,67-70,106_P_2.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/E20,63-65,67-70,106_P_3.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/E20,63-65,67-70,106_P_4.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/E20,63-65,67-70,106_P_5.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/E20,63-65,67-70,106_P_6.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/E20,63-65,67-70,106_P_7.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/E20,63-65,67-70,106_P_8.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/E20,63-65,67-70,106_P_9.jpg"></div>' +
        '</article>' +
        '<div class="label"><p><span class="label-name">Объект: </span><span class="label-value">Лабораторный корпус ' +
        'Белорусского государственного медицинского университета по просп. Дзержинского, 83</span></p>' +
        '<p><span class="label-name">Система: </span><span class="label-value">П7</span></p></div>' +
        '<article class="grid-container">' +
        '<div class="grid-item"><img src="images/portfolio/I7_P_1.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/I7_P_2.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/I7_P_3.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/I7_P_4.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/I7_P_5.jpg"></div>' +
        '</article>' +
        '<div class="label"><p><span class="label-name">Объект: </span><span class="label-value">"Республиканская ' +
        'молекулярно-генетическая лаборатория канцерогенеза" РНПЦ ОМР им. Александрова</span></p>' +
        '<p><span class="label-value">Планы этажей</span></p></div>' +
        '<article class="grid-container">' +
        '<div class="grid-item"><img src="images/portfolio/Carcinogenesis2.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Carcinogenesis3.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Carcinogenesis4.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Carcinogenesis5.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Carcinogenesis6.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Carcinogenesis_23.400.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Carcinogenesis_25.800.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Carcinogenesis_roof.jpg"></div>' +
        '</article>' +
        '<p><span class="label-name">Система: </span><span class="label-value">K6 (деталировка)</span></p>' +
        '<article class="grid-container">' +
        '<div class="grid-item"><img src="images/portfolio/K6_P1.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P2.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P3.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P4.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P5.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P6.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P7.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P8.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P9.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P10.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P11.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P12.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P13.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P14.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P15.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P16.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P17.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/K6_P18.jpg"></div>' +
        '</article>',
        calculator: ''
      },
      balancing: {
        description: '<h2>Примеры отчётов по балансировка системы отопления</h2>',
        portfolio: '<div class="label"><p class="label-value">Ж/Д №18 по пр. Дзержинского по генплану</p></div><article class="grid-container">' +
        '<div class="grid-item"><img src="images/portfolio/C18_P_1.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/C18_P_2.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/C18_P_3.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/C18_P_4.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/C18_P_5.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/C18_P_6.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/C18_P_7.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/C18_P_8.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/C18_P_9.jpg"></div></article>' +
        '<div class="label"><p class="label-value">Учебно-тренировочный центр фристайла со спортивно-оздоровительным комплексом по ул. Сурганова в г. Минске</p></div>' +
        '<article class="grid-container">' +
        '<div class="grid-item"><img src="images/portfolio/Freestyle_P_1.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Freestyle_P_2.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Freestyle_P_3.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Freestyle_P_4.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Freestyle_P_5.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Freestyle_P_6.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Freestyle_P_7.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Freestyle_P_8.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Freestyle_P_9.jpg"></div>' +
        '<div class="grid-item"><img src="images/portfolio/Freestyle_P_10.jpg"></div></article>',
        calculator: ''
      },
      about: {
              description: '<h1 id="header">Обо мне</h1>' +
              '<article><h2>Первый опыт работы монтажником. <span class="links">МУ-3 ОАО "Белсантехмонтаж-2"</span></h2><p>' +
              'Здравствуйте! Я Сергей Ионов. Уже более 14 лет я работаю в сфере строительства. Начинал свою карьеру я в ' +
              '2004 году монтажником систем вентиляции и кондиционирования 3 разряда в <span class="links">' +
              '<abbr title="Третье монтажное управление">МУ-3</abbr> ОАО "Белсантехмонтаж-2"</span> сразу после окончания ' +
              'учёбы в <a href="https://mgask.org/ru/" class="links" target="_blank">' +
              '<abbr title="Минский Государственный Архитектурно-Строительный Колледж">МГАСК</abbr></a>. В то же время я ' +
              'поступил в <a href="http://www.bntu.by/" class="links" target="_blank"><abbr title="Белорусский Национальный ' +
              'Технический Университет">БНТУ</abbr></a> на заочное отделение по специальности <a href="http://www.bntu.by/fes-tiv.html" ' +
              'class="links" target="_blank"><abbr title="Теплогазоснабжение, вентиляция и охрана воздушного бассейна">ТГСВ</abbr></a>. ' +
              'Работая на таких объектах, как "Белорусский государственный университет физической культуры", ОАО "Белрыба", ' +
              '"ГУ РНПЦ детской хирургии", "4-я городская клиническая больница им. Н.Е. Савченки", "Аэропорт Минск-1 " и др., ' +
              'я узнал, с какими сложностями можно столкнуться при монтаже систем вентиляции, на какие особенности в ' +
              'строительных конструкциях необходимо обращать внимание перед выполнением монтажа и т.д.' +
              '</p></article>' +
              '<article><h2>ОТ монтажника вентсистем до инженера по наладке и испытаниям систем отопления. ' +
              '<span class="links">СУ-205 ОАО "МАПИД"</span></h2><p>' +
              'Через два года я получил 4 разряд, а ещё спустя пару месяцев устроился в ' +
              '<a href="http://mapid.by/o-predpriyatii/struktura-predpriyatiya/specializirovannye-upravleniya/specializirovannoe-upravlenie-n-205.html" class="links" target="_blank">' +
              '<abbr title="Специализированное управление № 205">СУ-205</abbr></a> <a href="http://mapid.by/" class="links" target="_blank">' +
              '<abbr title="Минское арендное предприятие индустриального домостроения">ОАО "МАПИД"</abbr></a>. Проработав ' +
              'монтажником вентсистем ещё чуть менее года, я получил должность инженера 2 категории в группе подготовки ' +
              'производства, где разрабатывал эскизы и заявки на материалы для систем отопления и вентиляции. Объём работ ' +
              'составлял около 20 жилых домов в год (в среднем 4-х секционных 9-ти этажных). Тогда активно внедрялись ' +
              'проекты с горизонтальной системой отопления, которые нуждаются в балансировке. ' +
              '</p><p>' +
              'И вот, в организации была создана группа по наладке и испытаниям систем отопления, в состав которой я был ' +
              'включён. Таким образом я был переведён на должность инженера по наладке и испытаниям 1-Й категории. Наша ' +
              'группа проходила обучение у специалистов из сторонних организаций, которые производили балансировку в т.ч. ' +
              'на жилых домах <a href="http://mapid.by/" class="links" target="_blank"><abbr title="Минское арендное предприятие ' +
              'индустриального домостроения">ОАО "МАПИД"</abbr></a>. Так же мы посещали семинары, проводимые производителями ' +
              'регулирующей арматуры. Для производства пуско-наладочных работ мы использовали устройства для балансировки ' +
              '<a href="https://tour-andersson.ru/izmerenie-i-balansirovka-tour-andersson-ta/ta-scope-balansirovochnyj-pribor-ta-scope-distribyutor-v-rf" class="links" target="_blank">TA SCOPE</a> ' +
              '(<a href="https://tour-andersson.ru/" class="links" target="_blank">Tour & Andersson</a>), ' +
              '<a href="http://www.danfoss.spb.ru/novie_produkti_danfoss/pfm-4000.html" class="links" target="_blank">PFM 4000</a> ' +
              '(<a href="http://heating.danfoss.ru/home/#/" class="links" target="_blank">Danfoss</a>), ' +
              '<a href="https://www.oventrop.com/ru-BY/%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D1%8F/%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D1%8B%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D0%B8/%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F%D0%BF%D0%BE%D0%B0%D1%80%D1%82%D0%B8%D0%BA%D1%83%D0%BB%D1%83/1069177/" ' +
              'class="links" target="_blank">OV-DMC 2</a> (<a href="https://www.oventrop.com/" class="links" target="_blank">Oventrop</a>).' +
              '</p><p>По результатам работы составляется технический отчёт, который включает в себя:</p>' +
              '<ol>' +
              '<li>Состав произведённых работ</li>' +
              '<li>Описание системы и метод регулировки</li>' +
              '<li>Таблица с указанием нагрузок, проектных и фактических расходов теплоносителя на регулируемые ответвления</li>' +
              '<li>Акт выполненных работ</li>' +
              '</ol>' +
              '<p>Далее выполненные работы сдаются представителю заказчика (технадзору), который подписывает акт.</p>' +
              '<p>' +
              'За время работы в <a href="http://mapid.by/o-predpriyatii/struktura-predpriyatiya/specializirovannye-upravleniya/specializirovannoe-upravlenie-n-205.html" class="links" target="_blank"> ' +
              '<abbr title="Специализированное управление № 205">СУ-205</abbr></a> при огромном объёме строительства, я ' +
              'получил колоссальный опыт, который позволяет не только производить балансировку СО, но также выявлять и ' +
              'устранять дефекты (в т.ч. ошибки в проекте), по причине которых система работает неправильно, либо не ' +
              'поддаётся наладке.' +
              '</p></article>' +
              '<article><h2>Регистрация ИП и новый уровень ответственности</h2><p>' +
              'В 2011 году я зарегистрировался как индивидуальный предприниматель для дополнительного заработка и вскоре ' +
              'начал работать с <a href="http://i-s.by/" class="links" target="_blank">ЗАО "Инвест-Систем"</a>. На тот момент ' +
              'они уже сдали в эксплуатацию три жилых дома с горизонтальной системой отопления, в двух из которых имелись ' +
              'проблемы. В результате проведения балансировочных работ, была выявлена ошибка в проекте, устранение которой ' +
              'позволило cбалансировать систему отопления и привести её работу в нормальный режим.' +
              '</p><p>' +
              'Всего же в качестве ИП, я выполнил балансировку систем отопления на более, чем 10 объектах, в числе которых ' +
              'жилые дома, встроенные помещения, административные здания, а также "Учебно-тренировочный центр фристайла" по ' +
              'улице Сурганова, 4а.' +
              '</p><p>' +
              'Поскольку балансировку зачастую выполняют специалисты организации, производившей монтаж, основная часть ' +
              'объектов, которые я получал, имели дефекты в работе системы отопления, которые монтажные организации не ' +
              'могли устранить своими силами. Этот факт подтверждает мою компетентность в данной области.' +
              '</p></article>' +
              '<article><h2>Работа на сложных объектах. <span class="links">ОДО "РЭСОТЕХ"</span></h2><p>' +
              'В октябре 2012 г я сменил место основной работы, перейдя в <a href="http://www.resoteh.by/" class="links" target="_blank">' +
              '<abbr title="Ресурсо-Энерго Сберегающее Оборудование и ТЕХнологии">ОДО "РЭСОТЕХ"</abbr></a> на должность ' +
              'ведущего инженера ПТО. В мои обязанности входили следующие виды работ:</p>' +
              '<ul>' +
              '<li>Деталировка и разработка монтажных схем систем вентиляции</li>' +
              '<li>Балансировка систем отопления, поиск и устранение неисправностей в работе СО</li>' +
              '<li>Разработка эскизов и заявок на материалы для систем отопления</li>' +
              '<li>Реже разработка эскизов и заявок на материалы для систем водоснабжения и канализации</li>' +
              '</ul>' +
              '<p>' +
              'В этой организации я имел опыт работы на таких объектах, как "Дворец культуры "Лошицкий"", жилые дома со ' +
              'встроенными помещениями различного назначения, "Лабораторный корпус Белорусского государственного медицинского ' +
              'университета", "РНПЦ онкологии и медицинской радиологии им. Н.Н. Александрова" в п. Боровляны:</p>' +
              '<ul>' +
              '<li>"Республиканская молекулярно-генетическая лаборатория канцерогенеза"</li>' +
              '<li>"Республиканский центр позитронно-эмиссионной томографии"</li>' +
              '</ul>' +
              '<p>' +
              'В таком разнообразии назначения объектов, я получил опыт работы, который позволяет мне выполнять деталировку ' +
              'и разработку монтажных схем систем вентиляции любой сложности.' +
              '</p></article>' +
              '<article><h2>Переезд в Санкт-Петербург и новый опыт в области отопления <span class="links">ООО "САНЕКСТ.ПРО"</span></h2><p>' +
              'В течение нескольких лет я вынашивал в себе идею переезда в другую страну. И вот, в октябре 2017 мы с семьёй ' +
              'переехали в Санкт-Петербург, где я устроился в <a href="https://sanext.ru" class="links" target="_blank">' +
              'ООО "САНЕКСТ.ПРО"</a> на должность инженера по работе с проектными организациями. ' +
              '<a href="https://sanext.ru" class="links" target="_blank">САНЕКСТ</a> является разработчиком и производителем ' +
              'инженерных систем для отопления, водоснабжения и теплых полов. На меня возлагались следующие обязанности:</p>' +
              '<ul>' +
              '<li>Визиты в ключевые строительные и проектные организации города для проведения технических консультаций ' +
              'по всей линейке оборудования <a href="https://sanext.ru/sanext_catalog" class="links" target="_blank">SANEXT</a></li>' +
              '<li>Продвижение оборудования и технических решений SANEXT в проектных организациях (закладка оборудования в ' +
              'проекты) и у застройщиков</li>' +
              '<li>Развитие отношений и поддержание положительного имиджа компании с техническими специалистами клиентов</li>' +
              '<li>Проведение технических семинаров и презентаций</li>' +
              '<li>Подбор оборудования <a href="https://sanext.ru/sanext_catalog" class="links" target="_blank">SANEXT</a> ' +
              'по запросам менеджеров отдела продаж, консультации, техническая поддержка проектов</li>' +
              '<li>Обучение специалистов проектных организаций работе в расчетных программах</li>' +
              '</ul>' +
              '</article>' +
              '<article><h2>Возвращение в Минск</h2><p>' +
              'По семейным обстоятельствам я с семьёй был вынужден вернуться на родину, где вернулся на работу в ' +
              '<a href="http://www.resoteh.by/" class="links" target="_blank">' +
              '<abbr title="Ресурсо-Энерго Сберегающее Оборудование и ТЕХнологии">ОДО "РЭСОТЕХ"</abbr></a> снова на ' +
              'должность ведущего инженера и теми же обязанностями, которые были на меня возложены до ' +
              'переезда в Санкт-Петербург. На данный момент это моё основное место работы, а по совместительству я работаю ' +
              'как предприниматель.' +
              '</p><p>Буду рад новым профессиональным знакомствам и предложениям!</p></article>',
              portfolio: '',
              calculator: ''
          }
    },
    navPanel = document.querySelector('#nav-panel'),
    single = document.querySelector('.single'),
    description = document.querySelector('#description'),
    portfolio = document.querySelector('#portfolio'),
    calculator = document.querySelector('#calculator');



  costCalc();
  navAnimation();
  setHTML(description, content['main']['description']);
  setHTML(portfolio, content['main']['portfolio']);
  modalManage();
  navPanel.addEventListener('click', tabToggle);



  function navAnimation() {
    const navToggleButton = document.querySelector('#nav-toggle');

    navToggleButton.addEventListener('click', () => {
      if (navPanel.classList.contains('visible')) {
        navPanel.classList.remove('visible');
      } else {
        navPanel.classList.add('visible');
      }
    });
  }
  function setHTML(container, content) {
    container.innerHTML = content;
  }
  function modalManage() {
        const imagesContainer = document.querySelector('#portfolio'),
            modal = document.querySelector('#modal'),
            innerWindow = document.querySelector('#inner-window'),
            closeBtn = document.querySelector('#close-btn');

        imagesContainer.addEventListener('click', activateModal);
        closeBtn.addEventListener('click', deactivateModal);

        function activateModal(event) {
            const pressedItem = event.target;
            console.log(pressedItem);
            if (pressedItem.hasAttribute('src'))   {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                innerWindow.appendChild(pressedItem.cloneNode(true));
                verticalAlignImage();
                window.addEventListener('resize', () => { verticalAlignImage() }, false);
            }
        }
        function deactivateModal() {
            modal.style.display = 'none';
            innerWindow.innerHTML = '';
            document.body.style.overflow = '';
        }
        function verticalAlignImage() {
            const image = document.querySelector('#inner-window > img'),
                availableHeight = window.innerHeight,
                innerWindow = document.querySelector('#inner-window');

            if (image) {
                if (image.offsetHeight > availableHeight || image.offsetHeight > image.offsetWidth) {
                    image.classList.add('vertical');
                } else {
                    image.removeAttribute('class');
                }

                if (!image.classList.contains('vertical')) {
                    innerWindow.style.marginTop = (availableHeight - image.offsetHeight)/2 + 'px';
                } else {
                    innerWindow.style.marginTop = 'auto';
                }
            }
        }
    }
  function tabToggle(event) {
    navPanel.classList.remove('visible');//hide nav-panel
    const pressedButton = event.target.parentElement,
        bookmarks = document.querySelectorAll('.bookmarks');

    /*вставить соответствующее содержимое*/
    setHTML(description, content[pressedButton.getAttribute('id')]['description']);
    setHTML(portfolio, content[pressedButton.getAttribute('id')]['portfolio']);

    /*
    если кликнули main:
     1. скрыть portfolio и calculator;
     2. отобразить single
    иначе наоборот
    */
    if (pressedButton.getAttribute('id') === 'about') {
      hideElement(portfolio);
      calculator.style.display = 'none';
      showElement(single);
    } else if (pressedButton.getAttribute('id') === 'main') {
      hideElement(single);
      showElement(portfolio);
      calculator.style.display = 'grid';
    } else {
        hideElement(single);
        showElement(portfolio);
        calculator.style.display = 'none';
    }

    bookmarks.forEach( (el) => {
      el.classList.remove('active')
    });
    pressedButton.classList.add('active');

    function hideElement(elem) {
          if (!elem.classList.contains('invisible')) {
              elem.classList.add('invisible');
          }
      }
    function showElement(elem) {
          if (elem.classList.contains('invisible')) {
              elem.classList.remove('invisible');
          }
      }
  }
  function costCalc() {
      const inputFields = document.querySelectorAll('input');
      inputFields.forEach( (el) => el.addEventListener('input', () => {
          const inputValue = el['value'];
          if (inputValue) el['value'] = validMask(inputValue);
      }));

      function validMask(inputValue) {
          return ~inputValue.search(/\D/) ? restoreNumber(inputValue) : inputValue;
      }
      function restoreNumber(inputValue) {
          return ~inputValue.search(/\d/) ? inputValue.match(/\d+/)[0] : '';
      }



      const detCalcButton = document.querySelector('#det-calculate'),
          detResetButton = document.querySelector('#det-clear'),
          balCalcButton = document.querySelector('#bal-calculate'),
          balResetButton = document.querySelector('#bal-clear'),
          smallAirDucts = document.querySelector('#small'),
          middleAirDucts = document.querySelector('#middle'),
          largeAirDucts = document.querySelector('#large'),
          trv = document.querySelector('#trv'),
          bv = document.querySelector('#bv'),
          dtv = document.querySelector('#dtv'),
          detResult = document.querySelector('#det-result > span'),
          balResult = document.querySelector('#bal-result > span');

      detCalcButton.addEventListener('click', detCostCalculate);
      function detCostCalculate() {
          const result = Math.ceil(
              (Number(smallAirDucts['value'])*14 + Number(middleAirDucts['value'])*10 + Number(largeAirDucts['value'])*8) / 10
          );
          if (result > 0) {
              detResult.innerHTML = currencyMask(result) + ' <span class="currency">бел. руб.</span>';
              detResult.style.boxShadow = '0 0 2px white, 0 0 5px white, 0 0 10px rgb(38, 153, 38)';
              detResult.style.borderColor = 'rgb(38, 153, 38)';
          }
      }
      balCalcButton.addEventListener('click', balCostCalculate);
      function balCostCalculate() {
          const result = Math.ceil((Number(trv['value'])*92 + Number(bv['value'])*74 + Number(dtv['value'])*387) / 10);
          console.log(result);
          if (result > 0) {
              insertCost(result, balResult);
          }
      }

      detResetButton.addEventListener('click', () => {
          detResult.innerHTML = '';
          detResult.style.boxShadow = 'none';
          detResult.style.borderColor = 'rgb(180, 180, 180)';
      });

      balResetButton.addEventListener('click', () => {
          balResult.innerHTML = '';
          balResult.style.boxShadow = 'none';
          balResult.style.borderColor = 'rgb(180, 180, 180)';
      });

      function currencyMask(num) {
          const result = String(num).split('');
          if (result.length > 3) {
              for (let i = result.length - 3; i > 0; i -= 3) {
                  result.splice(i, 0, ' ');
              }
          }
          return result.join('');
      }
      function insertCost(cost, container) {
          container.innerHTML = currencyMask(cost) + ' <span class="currency">бел. руб.</span>';
          container.style.boxShadow = '0 0 2px white, 0 0 5px white, 0 0 10px rgb(38, 153, 38)';
          container.style.borderColor = 'rgb(38, 153, 38)';
      }
  }
}
