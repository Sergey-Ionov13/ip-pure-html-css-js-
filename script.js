/* nav-bar toggle */
const navPanel = document.querySelector('#nav-panel'),
    single = document.querySelector('.single'),
    description = document.querySelector('#description'),
    portfolio = document.querySelector('#portfolio'),
    calculator = document.querySelector('#calculator');
navAnimation();

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

/* content */
setContent();

function setContent() {
    const content ={main: {
        description: '<h1 id="header">Обо мне</h1>' +
        '<article><h2>МУ-3 ОАО "Белсантехмонтаж-2"</h2><p>' +
        'Здравствуйте! Я Сергей Ионов. Уже более 14 лет я работаю в сфере строительства. Начинал свою карьеру я в' +
        '2004 году монтажником систем вентиляции и кондиционирования 3 разряда в МУ-3 ОАО "Белсантехмонтаж-2" сразу' +
        'после окончания учёбы в <abbr title="Минский Государственный Архитектурно-Строительный Колледж">МГАСК</abbr>.' +
        'В то же время я поступил в <abbr title="Белорусский Национальный Технический Университет">БНТУ</abbr> на' +
        'заочное отделение по специальности "Теплогазоснабжение, вентиляция и охрана воздушного бассейна". Работая' +
        'на таких объектах, как "Белорусский государственный университет физической кулбтуры", ОАО "Белрыба",' +
        '"ГУ РНПЦ детской хирургии", "4-я городская клиническая больница им. Н.Е. Савченки" и др., я узнал, с какими' +
        'сложностями можно столкнуться при монтаже систем вентиляции, на какие особенности в строительных' +
        'конструкциях необходимо обращать внимание перед выполнением монтажа и т.д.' +
        '</p></article>' +
        '<article><h2>СУ-205 ОАО "МАПИД"</h2><p>' +
        'Через два года я получил 4 разряд, а ещё спустя пару месяцев устрроился в СУ-205 ОАО "МАПИД". Проработав' +
        'монтажником вентсистем ещё чуть менее года, я получил должность инженера 2 категории в группе подготовки' +
        'производства, где разрабатывал эскизы и заявки на материалы для систем отопления и вентиляции. Объём работ' +
        'составлял около 20 жилых домов в год (в среднем 4-х секционных 9-ти этажных). Тогда всё больше и больше' +
        'проектов приходили с горизонтальной системой отопления, которые нуждаются в балансировке.' +
        '</p><p>' +
        'И вот, в организации была создана группа по наладке и испытаниям систем отопления, в состав которой я был' +
        'включён. Таким образом я был переведён на должность инженера по наладке и испытаниям 1-Й категории. Наша' +
        'группа проходила обучение у специалистов из сторонних организаций, которые производили балансировку в т.ч.' +
        'на жилых домах ОАО "МАПИД". Так же мы посещали семинары, проводимые производителями регулирующей арматуры.' +
        'Для производства пуско-наладочных работ мы использовали устройства для балансировки TA SCOPE (Tour &' +
        'Andersson), PFM 4000 (Danfoss), OV-DMC 2 (Oventrop).' +
        '</p><p>По результатам работы составляется технический отчёт, который включает в себя:</p>' +
        '<ol>' +
        '<li>Состав произведённых работ</li>' +
        '<li>Описание системы и метод регулировки</li>' +
        '<li>Таблица с указанием нагрузок, проектных и фактических расходов теплоносителя на регулируемые ответвления</li>' +
        '<li>Акт выполненных работ</li>' +
        '</ol>' +
        '<p>Далее выполненные работы сдвются представителю заказчика (технадзору), который подписывает акт.</p>' +
        '<p>' +
        'За время работы в СУ-205 при огромном объёме строительства, я получил коллосальный опыт, который позволяет' +
        'не только производить балансировку СО, но также выявлять и устранять дефекты, по причине которых система' +
        'работает неправильно, либо не поддаётся наладке.' +
        '</p></article>' +
        '<article><h2>Индивидуальный предприниматель</h2><p>' +
        'В 2011 году я зарегистрировался как индивидуальный предприниматель для дополнительного заработка и вскоре' +
        'начал работать с ЗАО "Инвест-Систем", которые на тот момент имели уже сданные в эксплуатацию жилые дома с' +
        'имеющейся проблемой в работе системы отопления, на которую поступали жалобы от жильцов. В результате' +
        'проведения балансировочных работ, была выявлена ошибка в проекте, после устранения которой проблема была решена.' +
        '</p><p>' +
        'Всего же в качестве ИП, я выполнил балансировку систем отопления на более, чем 10 объектах, в числе которых' +
        'жилые дома, встроенные помещения, административные здания, а также "Учебно-тренировочный центр фристайла" по' +
        'улице Сурганова, 4а.' +
        '</p><p>' +
        'Поскольку балансировку зачастую выполняют специалисты организации, производившей монтаж, основная часть' +
        'объектов, которые я получал, имели дефекты в работе системы отопления, которые монтажные организации не' +
        'могли устранить своими силами. Этот факт подтверждает наличие у меня высокой квалификации в данной области.' +
        '</p></article>' +
        '<article><h2>ОДО "РЭСОТЕХ"</h2><p>' +
        'В октябре 2012 г я сменил место основной работы, перейдя в ОДО "РЭСОТЕХ" на должность ведущего инженера ПТО.' +
        'В мои обязанности входили следующие виды работ:</p>' +
        '<ul>' +
        '<li>Деталировка и разработка монтажных схем систем вентиляции</li>' +
        '<li>Балансировка систем отопления, поиск и устранение неисправностей в работе СО</li>' +
        '<li>Разработка эскизов и заявок на материалы для систем отопления</li>' +
        '<li>И иногда разработка эскизов и заявок на материалы для систем водоснабжения и канализации</li>' +
        '</ul>' +
        '<p>' +
        'В этой организации я имел опыт работы на таких объектах, как "Дворец культуры "Лошицкий"", жилые дома,' +
        '"Лабораторный корпус Белорусского государственного медицинского университета", "РНПЦ онкологии и медицинской' +
        'радиологии им. Н.Н. Александрова" в п. Боровляны:</p>' +
        '<ul>' +
        '<li>"Республиканская молекулярно-генетическая лаборатория канцерогенеза"</li>' +
        '<li>"Республиканский центр позитронно-эмиссионной томографии"</li>' +
        '</ul>' +
        '<p>' +
        'В таком разнообразии назначения объектов, я получил опыт работы, который позволяет мне выполнять деталировку' +
        'и разработку монтажных схем систем вентиляции любой сложности.' +
        '</p></article>' +
        '<article><h2>ООО "САНЕКСТ.ПРО"</h2><p>' +
        'В течение нескольких лет я вынашивал в себе идею переезда в другую страну. И вот, в октябре 2017 мы с семьёй' +
        'переехали в Санкт-Петербург, где я устроился в ООО <a href="https://sanext.ru">ООО "САНЕКСТ.ПРО"</a> на' +
        'должность инженера по работе с проектными организациями. САНЕКСТ является разработчиком и производителем' +
        'инженерных систем для отопления, водоснабжения и теплых полов. В мои обязянности входило:</p>' +
        '<ul>' +
        '<li>Визиты в ключевые строительные и проектные организации города для проведения технических консультаций' +
        'по всей линейке оборудования SANEXT</li>' +
        '<li>Продвижение оборудования и технических решений SANEXT в проектных организациях (закладка оборудования в' +
        'проекты) и у застройщиков</li>' +
        '<li>Развитие отношений и поддержание положительного имиджа компании с техническими специалистами клиентов</li>' +
        '<li>Проведение технических семинаров и презентаций</li>' +
        '<li>Подбор оборудования SANEXT по запросам менеджеров отдела продаж, консультации, техническая поддержка' +
        'проектов</li>' +
        '<li>Обучение специалистов проектных организаций работе в расчетных программах</li>' +
        '</ul>' +
        '</article>' +
        '<article><h2>Возвращение в Минск</h2><p>' +
        'По семейным обстоятельствам я с семьёй был вынужден вернуться на родину, где вернулся на работу в ОДО' +
        '"РЭСОТЕХ" на ту же должность с теми же обязянностями, где я работаю и по сей день.' +
        '</p></article>',
        portfolio: '',
        calculator: ''
    },
        detailing: {
            description: '<h2>Деталировка вентсистем</h2>',
            portfolio: '<div class="label"><p><span class="label-name">Объект: </span>' +
            '<span class="label-value">Лабораторный корпус</span></p>' +
            '<p><span class="label-name">Система: </span><span class="label-value">В20,В63-В65,В67-В70,В106</span></p></div>' +
            '<article class="grid-container">' +
            '<div class="grid-item"><a href="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_1.jpg">' +
            '<img src="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_1.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_2.jpg">' +
            '<img src="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_2.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_3.jpg">' +
            '<img src="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_3.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_4.jpg">' +
            '<img src="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_4.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_5.jpg">' +
            '<img src="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_5.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_6.jpg">' +
            '<img src="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_6.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_7.jpg">' +
            '<img src="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_7.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_8.jpg">' +
            '<img src="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_8.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_9.jpg">' +
            '<img src="images/portfolio/В20,В63-В65,В67-В70,В106_Страница_9.jpg"></a></div>' +
            '</article>' +
            '<div class="label"><p><span class="label-name">Объект: </span><span class="label-value">Лабораторный корпус</span></p>' +
            '<p><span class="label-name">Система: </span><span class="label-value">П7</span></p></div>' +
            '<article class="grid-container">' +
            '<div class="grid-item"><a href="images/portfolio/П7_Страница_1.jpg">' +
            '<img src="images/portfolio/П7_Страница_1.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/П7_Страница_2.jpg">' +
            '<img src="images/portfolio/П7_Страница_2.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/П7_Страница_3.jpg">' +
            '<img src="images/portfolio/П7_Страница_3.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/П7_Страница_4.jpg">' +
            '<img src="images/portfolio/П7_Страница_4.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/П7_Страница_5.jpg">' +
            '<img src="images/portfolio/П7_Страница_5.jpg"></a></div>' +
            '</article>',
            calculator: ''
        },
        balancing: {
            description: '<h2>Примеры отчётов по балансировка системы отопления</h2>',
            portfolio: '<article class="grid-container"><h3 class="caption">Ж/Д №18 по пр. Дзержинского по генплану</h3>' +
            '<div class="grid-item"><a href="images/portfolio/ЖД%2018_Страница_1.jpg">' +
            '<img src="images/portfolio/ЖД%2018_Страница_1.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/ЖД%2018_Страница_2.jpg">' +
            '<img src="images/portfolio/ЖД%2018_Страница_2.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/ЖД%2018_Страница_3.jpg">' +
            '<img src="images/portfolio/ЖД%2018_Страница_3.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/ЖД%2018_Страница_4.jpg">' +
            '<img src="images/portfolio/ЖД%2018_Страница_4.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/ЖД%2018_Страница_5.jpg">' +
            '<img src="images/portfolio/ЖД%2018_Страница_5.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/ЖД%2018_Страница_6.jpg">' +
            '<img src="images/portfolio/ЖД%2018_Страница_6.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/ЖД%2018_Страница_7.jpg">' +
            '<img src="images/portfolio/ЖД%2018_Страница_7.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/ЖД%2018_Страница_8.jpg">' +
            '<img src="images/portfolio/ЖД%2018_Страница_8.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/ЖД%2018_Страница_9.jpg">' +
            '<img src="images/portfolio/ЖД%2018_Страница_9.jpg"></a></div></article>' +
            '<article class="grid-container">' +
            '<h3 class="caption">Учебно-тренировочный центр фристайла со спортивно-оздоровительным комплексом по ул. Сурганова в г. Минске</h3>' +
            '<div class="grid-item"><a href="images/portfolio/Фристайл_Страница_01.jpg">' +
            '<img src="images/portfolio/Фристайл_Страница_01.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/Фристайл_Страница_02.jpg">' +
            '<img src="images/portfolio/Фристайл_Страница_02.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/Фристайл_Страница_03.jpg">' +
            '<img src="images/portfolio/Фристайл_Страница_03.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/Фристайл_Страница_04.jpg">' +
            '<img src="images/portfolio/Фристайл_Страница_04.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/Фристайл_Страница_05.jpg">' +
            '<img src="images/portfolio/Фристайл_Страница_05.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/Фристайл_Страница_06.jpg">' +
            '<img src="images/portfolio/Фристайл_Страница_06.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/Фристайл_Страница_07.jpg">' +
            '<img src="images/portfolio/Фристайл_Страница_07.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/Фристайл_Страница_08.jpg">' +
            '<img src="images/portfolio/Фристайл_Страница_08.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/Фристайл_Страница_09.jpg">' +
            '<img src="images/portfolio/Фристайл_Страница_09.jpg"></a></div>' +
            '<div class="grid-item"><a href="images/portfolio/Фристайл_Страница_10.jpg">' +
            '<img src="images/portfolio/Фристайл_Страница_10.jpg"></a></div></article>',
            calculator: ''
        }};

    setHTML(description, content['main']['description']);

    navPanel.addEventListener('click', tabToggle);

    function setHTML(container, content) {
        container.innerHTML = content;
    }
    function tabToggle(event) {
        navPanel.classList.remove('visible');//hide nav-panel
        const pressedButton = event.target;
        /*
        если кликнули main:
         1. скрыть portfolio и calculator;
         2. отобразить single
        иначе наоборот
        */
        if (pressedButton.getAttribute('id') === 'main') {
            hideElement(portfolio);
            hideElement(calculator);
            showElement(single);
        } else {
            hideElement(single);
            showElement(portfolio);
            showElement(calculator);
        }

        /*вставить соответствующее содержимое*/
        setHTML(description, content[pressedButton.getAttribute('id')]['description']);
        setHTML(portfolio, content[pressedButton.getAttribute('id')]['portfolio']);

        if (!pressedButton.classList.contains('active')) {
            pressedButton.classList.add('active');
        }

        if (pressedButton.getAttribute('id'))
    }
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

/* Modal window */
function toggleModal() {
    const modalContainer = document.querySelector('#modal-container');
    modalContainer.style.display = ( modalContainer.style.display === 'none' ? 'block' : 'none' );
}
