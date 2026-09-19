const a = {
  tags: [],
  rooms: [],
  disabledBlocks: {
    'info-left': [],
    'info-right': [],
    'subinfo-left': [],
    'subinfo-right': [],
    'notes-left': [],
    'notes-right': [],
    _id: 'c60b600d9cdd980000000000'
  },
  edition: '2024',
  sheetEdition: '2024',
  spells: {
    mode: 'cards',
    prepared: [],
    book: [],
    granted: [],
    slotless: [],
    edition: '2024'
  },
  linkAccess: 'none',
  data: {
    jsonType: 'character',
    template: 'default',
    name: { value: 'Карамбуля' },
    info: {
      charClass: { name: 'charClass', value: 'Варвар' },
      charSubclass: { name: 'charSubclass', value: 'Фанатик' },
      level: { name: 'level', value: 5 },
      background: { name: 'background', value: 'Ремесленник' },
      playerName: { name: 'playerName', value: 'Алексей' },
      race: { name: 'race', value: 'Гоблин' },
      alignment: { name: 'alignment', value: '' },
      experience: { name: 'experience', value: '' },
      size: { value: 'small' }
    },
    subInfo: {
      age: { name: 'age', value: '' },
      height: { name: 'height', value: '' },
      weight: { name: 'weight', value: '' },
      eyes: { name: 'eyes', value: '' },
      skin: { name: 'skin', value: '' },
      hair: { name: 'hair', value: '' }
    },
    spellsInfo: {
      base: { name: 'base', value: '', code: 'int' },
      save: { name: 'save', value: '' },
      mod: { name: 'mod', value: '' },
      available: { classes: [] }
    },
    spells: {},
    spellsPact: {},
    bonuses: [],
    proficiency: 3,
    stats: {
      str: { name: 'str', score: 16 },
      dex: { name: 'dex', score: 14 },
      con: { name: 'con', score: 16 },
      int: { name: 'int', score: 9 },
      wis: { name: 'wis', score: 12 },
      cha: { name: 'cha', score: 10 }
    },
    saves: {
      str: { name: 'str', isProf: true },
      dex: { name: 'dex', isProf: false },
      con: { name: 'con', isProf: true },
      int: { name: 'int', isProf: false },
      wis: { name: 'wis', isProf: false },
      cha: { name: 'cha', isProf: false }
    },
    skills: {
      acrobatics: { baseStat: 'dex', name: 'acrobatics' },
      investigation: { baseStat: 'int', name: 'investigation', isProf: 1 },
      athletics: { baseStat: 'str', name: 'athletics', isProf: 1 },
      perception: { baseStat: 'wis', name: 'perception' },
      survival: { baseStat: 'wis', name: 'survival', isProf: 1 },
      performance: { baseStat: 'cha', name: 'performance' },
      intimidation: { baseStat: 'cha', name: 'intimidation' },
      history: { baseStat: 'int', name: 'history' },
      'sleight of hand': { baseStat: 'dex', name: 'sleight of hand' },
      arcana: { baseStat: 'int', name: 'arcana' },
      medicine: { baseStat: 'wis', name: 'medicine' },
      deception: { baseStat: 'cha', name: 'deception' },
      nature: { baseStat: 'int', name: 'nature' },
      insight: { baseStat: 'wis', name: 'insight' },
      religion: { baseStat: 'int', name: 'religion' },
      stealth: { baseStat: 'dex', name: 'stealth' },
      persuasion: { baseStat: 'cha', name: 'persuasion', isProf: 1 },
      'animal handling': { baseStat: 'wis', name: 'animal handling' }
    },
    vitality: {
      'hp-dice-current': { value: 5 },
      'hp-dice-multi': {},
      'hp-max-con-bonus': { value: 0 },
      darkvision: { value: 60 },
      'hp-current': { value: 55 },
      'hp-temp': { value: 0 },
      isDying: false,
      deathFails: 0,
      deathSuccesses: 0,
      'hp-max': { value: 55 },
      speed: { value: '30' },
      initiative: { value: 2 },
      shield: { value: false },
      ac: { value: 15 },
      'hit-die': { value: 'd12' }
    },
    attunementsList: [
      { id: 'attunement-1789663463157-7e26a7', checked: false, value: '' }
    ],
    weaponsList: [
      {
        id: 'weapon-1789663463157-1f9965',
        name: { value: 'Двуручный меч' },
        mod: { value: '+6' },
        dmg: { value: '2к6+3' },
        ability: 'str',
        isProf: true,
        dmgType: { value: 'рубящ.' }
      },
      {
        id: 'weapon-1789663463157-aa8850',
        name: { value: 'Одноручный топор' },
        mod: { value: '+6' },
        dmg: { value: '1к6+3' },
        ability: 'str',
        isProf: true,
        dmgType: { value: 'рубящ.' }
      }
    ],
    text: {
      prof: {
        value: {
          id: 'hover-toolbar-prof-1789663463157-c2af8a',
          data: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Инструменты:',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: ' Инструменты пивовара, Инструменты повара, Инструменты ремонтника, Инструменты кожевника'
                  }
                ]
              },
              {
                type: 'paragraph',
                content: [
                  { type: 'text', text: 'Языки:', marks: [{ type: 'bold' }] },
                  { type: 'text', text: ' Общий, Гоблинский, Воровской жаргон' }
                ]
              }
            ]
          }
        },
        size: 9
      },
      equipment: {
        value: {
          id: 'hover-toolbar-equipment-1789663463156-c86fd7',
          data: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  { type: 'text', text: '75 зм на покупку снаряжения класса' }
                ]
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Куплено: 2 Одноручных топора, Двуручный меч'
                  }
                ]
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Предыстория: Инструменты выбранного ремесла, торговые принадлежности, дорожная одежда и оставшиеся монеты'
                  }
                ]
              }
            ]
          }
        },
        size: 9
      },
      features: {
        value: {
          id: 'hover-toolbar-features-1789663463155-a686ae',
          data: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Защита без доспехов.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  },
                  { type: 'text', text: ' ' },
                  {
                    type: 'text',
                    text: 'Пока не носишь доспехи, базовый КД = 10 + модификатор Ловкости + модификатор Телосложения. Щит использовать можно.'
                  }
                ]
              },
              { type: 'paragraph' },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Чувство опасности.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  },
                  { type: 'text', text: ' ' },
                  {
                    type: 'text',
                    text: 'Пока не Недееспособен, совершаешь спасброски Ловкости с '
                  },
                  {
                    type: 'text',
                    text: 'Преимуществом',
                    marks: [{ type: 'bold' }]
                  },
                  { type: 'text', text: '.' }
                ]
              },
              { type: 'paragraph' },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Безрассудная атака.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  },
                  { type: 'text', text: ' ' },
                  {
                    type: 'text',
                    text: 'Когда вы совершаете первый бросок атаки в ваш ход, вы можете решить атаковать безрассудно. До начала вашего следующего хода все ваши атаки Силой совершаются с '
                  },
                  {
                    type: 'text',
                    text: 'Преимуществом',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: ', но и все атаки по вам тоже совершаются с '
                  },
                  {
                    type: 'text',
                    text: 'Преимуществом',
                    marks: [{ type: 'bold' }]
                  },
                  { type: 'text', text: '.' }
                ]
              },
              { type: 'paragraph' },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Быстрое передвижение.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  },
                  { type: 'text', text: ' ' },
                  {
                    type: 'text',
                    text: 'Если не носишь Тяжёлый доспех, Скорость увеличивается на 10 футов.'
                  }
                ]
              },
              { type: 'paragraph' },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Божественная ярость.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  },
                  { type: 'text', text: ' ' },
                  {
                    type: 'text',
                    text: 'Первое попадание оружием или Безоружным ударом в каждый твой ход во время Ярости наносит дополнительно 1к6 + половина уровня Варвара некротического или излучающего урона.'
                  }
                ]
              }
            ]
          }
        },
        size: 9,
        customLabel: 'ДОПОЛНИТЕЛЬНЫЕ СПОСОБНОСТИ И УМЕНИЯ'
      },
      attacks: {
        value: {
          id: 'hover-toolbar-attacks-1789663463157-bcec70',
          data: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Мастерство Боевой топор: Опрокидывающее.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  }
                ]
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'После попадания цель совершает спасбросок Телосложения со Сл 8 + модификатор характеристики атаки + '
                  },
                  {
                    type: 'text',
                    text: 'Бонус владения',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: '. При провале цель становится Опрокинутой.'
                  }
                ]
              },
              { type: 'paragraph' },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Мастерство Двуручный меч: Секущее.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  }
                ]
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Если атака этим оружием промахнулась, цель всё равно получает урон, равный модификатору характеристики атаки. Тип урона остаётся таким же, как у оружия.'
                  }
                ]
              }
            ]
          }
        },
        size: 9
      },
      traits: {
        value: {
          id: 'hover-toolbar-traits-1789663463155-aa83fe',
          data: {
            type: 'doc',
            content: [
              {
                type: 'resource',
                attrs: {
                  id: 'resource-1789663463154-0d50d3',
                  textName: 'traits'
                }
              },
              {
                type: 'resource',
                attrs: {
                  id: 'resource-1789663463154-6a1736',
                  textName: 'features'
                }
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Бонусным действием',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: ' входите в Ярость, если не носите Тяжёлые доспехи. Во время Ярости вы получаете сопротивление Дробящему, Колющему и Рубящему урону, бонус к урону атак Силой, '
                  },
                  {
                    type: 'text',
                    text: 'Преимущество',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: ' на проверки и спасброски Силы, но не можете творить заклинания или поддерживать Концентрацию.\\n\\nЯрость длится до конца следующего хода и продлевается, если вы атаковали врага, заставили его делать спасбросок или потратили '
                  },
                  {
                    type: 'text',
                    text: 'Бонусное действие',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: ' на продление. Максимум 10 минут. После '
                  },
                  {
                    type: 'text',
                    text: 'Короткого отдыха',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: ' восстанавливается 1 использование, после Долгого все.'
                  }
                ]
              },
              { type: 'paragraph' },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Дополнительная атака.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  },
                  { type: 'text', text: ' ' },
                  {
                    type: 'text',
                    text: 'Когда совершаешь действие Атака, можешь атаковать два раза вместо одного.'
                  }
                ]
              },
              { type: 'paragraph' },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Воин богов.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  },
                  { type: 'text', text: ' ' },
                  { type: 'text', text: 'У вас есть 4к12 исцеления. ' },
                  {
                    type: 'text',
                    text: 'Бонусным действием',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: ' можете потратить любое количество костей и восстановить хиты на сумму бросков. Все кости восстанавливаются после '
                  },
                  {
                    type: 'text',
                    text: 'Долгого отдыха',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: '. На 6/12/17 уровнях запас увеличивается до 5/6/7к12.'
                  }
                ]
              }
            ]
          }
        },
        size: 9
      },
      personality: {
        value: {
          id: 'hover-toolbar-personality-1789663463157-73ed05',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 10
      },
      ideals: {
        value: {
          id: 'hover-toolbar-ideals-1789663463157-255469',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 9
      },
      flaws: {
        value: {
          id: 'hover-toolbar-flaws-1789663463157-c7422d',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 10
      },
      bonds: {
        value: {
          id: 'hover-toolbar-bonds-1789663463157-978cd4',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 9
      },
      allies: {
        value: {
          id: 'hover-toolbar-allies-1789663463155-57ff33',
          data: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Тёмное зрение 60 футов.',
                    marks: [{ type: 'bold' }]
                  },
                  { type: 'text', text: ' ' },
                  {
                    type: 'text',
                    text: 'В темноте видишь в пределах 60 футов: без света различаешь формы и детали, хотя цвета воспринимаются хуже.'
                  }
                ]
              },
              { type: 'paragraph' },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Ярость маленького.',
                    marks: [{ type: 'bold' }]
                  },
                  { type: 'text', text: ' ' },
                  {
                    type: 'text',
                    text: 'Механика этой способности не должна быть только названием: проверь её конкретные действие, дистанцию, бросок и число использований в описании вида.'
                  }
                ]
              },
              { type: 'paragraph' },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Проворный побег.',
                    marks: [{ type: 'bold' }]
                  },
                  { type: 'text', text: ' ' },
                  { type: 'text', text: 'Можешь ' },
                  {
                    type: 'text',
                    text: 'Бонусным действием',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: ' совершить Отход или Затаивание, что помогает быстро уходить из ближнего боя или прятаться.'
                  }
                ]
              }
            ]
          }
        },
        size: 9,
        customLabel: 'СПОСОБНОСТИ РАСЫ'
      },
      quests: {
        value: {
          id: 'hover-toolbar-quests-1789663463157-29512c',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 9,
        customLabel: 'Цели и квесты'
      },
      items: {
        value: {
          id: 'hover-toolbar-items-1789663463155-f6f22d',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 9,
        customLabel: 'ДОПОЛНИТЕЛЬНЫЕ СПОСОБНОСТИ И УМЕНИЯ'
      },
      feats: {
        value: {
          id: 'hover-toolbar-feats-1789663463156-5d6d29',
          data: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Мастеровой:',
                    marks: [{ type: 'bold' }]
                  }
                ]
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Владение инструментами.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  },
                  { type: 'text', text: ' ' },
                  {
                    type: 'text',
                    text: 'выбери три разных Ремесленных инструмента из таблицы «Быстрое изготовление».'
                  }
                ]
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Скидка.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  },
                  { type: 'text', text: ' ' },
                  {
                    type: 'text',
                    text: 'при покупке любого немагического предмета получаешь скидку 20%.'
                  }
                ]
              },
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'Быстрое изготовление.',
                    marks: [{ type: 'bold' }, { type: 'italic' }]
                  },
                  { type: 'text', text: ' ' },
                  { type: 'text', text: 'после ' },
                  {
                    type: 'text',
                    text: 'Долгого отдыха',
                    marks: [{ type: 'bold' }]
                  },
                  {
                    type: 'text',
                    text: ' можешь изготовить один разрешённый таблицей предмет, если у тебя есть нужные инструменты и владение ими. Предмет существует до конца твоего следующего '
                  },
                  {
                    type: 'text',
                    text: 'Долгого отдыха',
                    marks: [{ type: 'bold' }]
                  },
                  { type: 'text', text: ', затем разваливается.' }
                ]
              }
            ]
          }
        },
        size: 9
      },
      background: {
        value: {
          id: 'hover-toolbar-background-1789663463157-45e773',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 9
      },
      appearance: {
        value: {
          id: 'hover-toolbar-appearance-1789663463157-cac457',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 10
      },
      'notes-1': {
        value: {
          id: 'hover-toolbar-notes-1-1789663463157-3ca323',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 9
      },
      'notes-2': {
        value: {
          id: 'hover-toolbar-notes-2-1789663463157-13c847',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 9
      },
      'notes-3': {
        value: {
          id: 'hover-toolbar-notes-3-1789663463158-892da7',
          data: { type: 'doc', content: [{ type: 'paragraph' }] }
        },
        size: 9
      }
    },
    coins: {
      cp: { value: 0 },
      sp: { value: 0 },
      ep: { value: 0 },
      gp: { value: 75 },
      pp: { value: 0 },
      total: { value: 75 }
    },
    resources: {
      'resource-1789663463154-0d50d3': {
        id: 'resource-1789663463154-0d50d3',
        name: 'Ярость',
        current: 3,
        resolvedMax: 3,
        location: 'traits',
        notes: '',
        notesVisibility: false,
        maxExpr: '3',
        isLongRest: true,
        icon: 'long-rest'
      },
      'resource-1789663463154-6a1736': {
        id: 'resource-1789663463154-6a1736',
        name: 'кости исцеления к12',
        current: 4,
        resolvedMax: 4,
        location: 'features',
        notes: '',
        notesVisibility: false,
        maxExpr: '4',
        isLongRest: true,
        icon: 'long-rest'
      }
    },
    bonusesSkills: {},
    bonusesStats: {},
    conditions: [],
    wizardStep: 'initial',
    isDefault: true,
    inspiration: false,
    prof: {
      'armor-light': { value: true },
      'armor-medium': { value: true },
      'armor-label': { value: true },
      'weapon-simple': { value: true },
      'weapon-martial': { value: true }
    },
    weapons: {},
    createdAt: '2026-09-17T16:44:23.158Z'
  },
  lastWriterSessionId: '1789663463158-zf0dfz3fl0',
  jsonType: 'character',
  version: '2'
}
