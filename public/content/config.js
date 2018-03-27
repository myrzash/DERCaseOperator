const DATAS = {
    ru: {
        title: "Оператор выбора",
        grade: "8 Класс",
        typeder: "Тренажер",
        prologue: {
            author: 'Исаак Ньютон',
            phrase: 'При изучении наук примеры полезнее, чем правила.',
        },
        parts: [{
            title: 'Думай',
            image: 'part1.png',
            info: 'Давай проверим твои знания по программированию. Установи соответствие.',
            interactive: {
                name: 'sort',
                items: {
                    sorts: ['CASE',
                        'Линейный алгоритм',
                        'Разветвляющийся алгоритм',
                        'Begin …end'],
                    values: ['при использовании этого оператора нельзя применять данные типа REAL и STRING',
                        'алгоритм, выполняющий последовательность действий в том порядке, в котором они записаны',
                        'алгоритм, выполняющий некоторую последовательность, в зависимости от наложенного условия',
                        'для выполнения нескольких операторов необходимо наличие программных скобок']
                }
            }
        }, {
            title: 'Создавай',
            image: 'part2.png',
            info: 'Рассмотри блок-схему и дай пояснение к ее компонентам:',
            interactive: {
                name: 'test',
                items: {
                    count: 4,
                    image: 'public/2/switch_ru.png',
                    data: [{
                        question: 'Селектор – это: ',
                        variants: [['проверяемое целое арифметическое, логическое или символьное выражение'], ['проверяемое вещественное, логическое или символьное выражение', 'верный ответ отсутствует']]
                    }, {
                        question: '<Списки> представляют собой ',
                        variants: [['перечисления возможных значений выражения селектор'], ['проверяемое условие, необходимое для выполнения действий', 'верный ответ отсутствует']]
                    }, {
                        question: 'Списки могут быть заданы:',
                        variants: [['перечислением значений через запятую (1, 4,5); интервалом значений (например: 1..5,  20..30)'], ['перечисление значений может быть комбинированным, например: часть через запятую, часть через точку.', 'верный ответ отсутствует']]
                    }, {
                        question: '<Действие> - это:',
                        variants: [['команда, выполняемая при совпадении значения выражения хотя бы с одним из значений <списка>'], ['условие, выполняемое при совпадении значения выражения хотя бы с одним из значений <списка>', 'нет верного ответа']]
                    }]
                }
            }
        }
            //     {
            //     title: 'Проверь себя',
            //     image: 'part3.png',
            //     info: 'Примени свои знания на практике',
            //     interactive: {}
            // }
        ]
    },
    kz: {
        title: "Таңдау операторы",
        grade: "8-сынып",
        typeder: "Жаттығу құралы",
        prologue: {
            author: 'Исаак Ньютон',
            phrase: 'Ғылымды меңгеру үшін ережеге қарағанда мысал пайдалы',
        },
        parts: [{
            title: 'Ойла',
            image: 'part1.png',
            info: 'программалау бойынша біліміңді тексеріп көрейік. Сәйкестендір.',
            interactive: {
                name: 'sort',
                items: {
                    sorts: ['CASE',
                        'Сызықтық алгоритм',
                        'Тармақталған алгоритм',
                        'Begin …end'],
                    values: ['осы операторды пайдаланған кезде, REAL және STRING түріндегі деректерді қолдануға болмайды',
                        'әрекет тізбегі жазылған тәртіпте орындалатын алгоритм',
                        'кейбір реті бойынша қойылған шартқа байланысты орындалатын алгоритм',
                        'бірнеше операторларды орындау үшін, онда программалық жақшалар болу қажет']
                }
            }
        }, {
            title: 'Жаса',
            image: 'part2.png',
            info: 'Блок-сұлбаны қарап, оның құрамдастарына түсініктеме бер,',
            interactive: {
                name: 'test',
                items: {
                    count: 4,
                    image: 'public/2/switch_kz.png',
                    data: [{
                        question: 'Селектор дегеніміз: ',
                        variants: [['тексерілетін толық арифметикалық, логикалық не таңбалық өрнек'], ['тексерілетін заттық, логикалық не таңбалық өрнек', 'дұрыс жауабы жоқ']]
                    }, {
                        question: 'Тізім дегеніміз: ',
                        variants: [['өрнектің ықтимал мәндерін тізіп жазу'], ['әрекеттерді орындауға қажетті тексерілетін шарт', 'дұрыс жауабы жоқ']]
                    }, {
                        question: 'Тізім келесі түрде берілуі мүмкін:',
                        variants: [['мәндерді үтір (1, 4,5) арқылы тізіп жазу; мәндерді аралығы бойынша (мысалы: 1.5, 20..30) жазу'], ['мәндерді тізіп жазу біріктірілген болуы мүмкін, мысалы: бір бөлігі үтірмен, бір бөлігі нүктемен', 'дұрыс жауабы жоқ']]
                    }, {
                        question: 'Әрекет дегеніміз:',
                        variants: [['өрнектің мәні тізімнің кемінде бір мәнімен сәйкес келген кезде орындалатын пәрмен'], ['өрнек мәні тізімнің кемінде бір мәнімен сәйкес келген кезде орындалатын шарт', 'дұрыс жауабы жоқ']]
                    }]
                }
            }
        }
            //     {
            //     title: 'Проверь себя',
            //     image: 'part3.png',
            //     info: 'Примени свои знания на практике',
            //     interactive: {}
            // }
        ]
    },
    en: {
        title: "Selection Operator",
        grade: "Grade 8",
        typeder: "Simulator",
        prologue: {
            author: 'Isaac Newton',
            phrase: 'When studying science, the examples are more useful than the rules',
        },
        parts: [{
            title: 'Think',
            image: 'part1.png',
            info: 'Let\'s check your programming knowledge. Set up a correspondence.',
            interactive: {
                name: 'sort',
                items: {
                    sorts: ['CASE',
                        'Linear algorithm',
                        'Branching algorithm',
                        'Begin …end'],
                    values: ['when using this operator, REAL and STRING data types cannot be used',
                        'an algorithm that performs a sequence of actions in the order in which they are recorded',
                        'an algorithm that performs a certain sequence, depending on the imposed condition',
                        'for execution of several operators it is necessary to use program brackets']
                }
            }
        }, {
            title: 'Create',
            image: 'part2.png',
            info: 'Consider the flowchart and give an explanation of its components',
            interactive: {
                name: 'test',
                items: {
                    count: 4,
                    image: 'public/2/switch_en.png',
                    data: [{
                        question: 'Selector is:',
                        variants: [['a verified integer arithmetic, logical or symbolic expression'], ['checked real, logical or symbolic expression', 'there is no correct answer']]
                    }, {
                        question: 'Lists are ',
                        variants: [['enumeration of possible values of the selector expression'], [' the checked condition required to perform the actions', 'there is no correct answer']]
                    }, {
                        question: 'Lists can be specified:',
                        variants: [['by enumeration of values separated by a comma (1, 4, 5); interval of values (for example: 1.5, 20..30)'], ['enumeration of valuescan be combined, for example: a part separated by a comma, a part separated by a point.', 'there is no correct answer']]
                    }, {
                        question: 'Action is:',
                        variants: [['a command executed when the expression value coincides at least with one of the values from the list'], ['the condition that is fulfilled when the expression value coincides at least with one of the values from the list', 'there is no correct answer']]
                    }]
                }
            }
        }]
    },
}