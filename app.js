const STORAGE_KEY = "henle-path-state-v1";
const REVIEW_MASTERY_GOAL = 3;
const ENDING_MASTERY_GOAL = 3;

const curriculum = [
  {
    id: "words",
    number: "I",
    eyebrow: "Quest 1 · Vocabulary",
    title: "Words of the Roman World",
    subtitle: "Meet every word introduced in Henle Lesson 1.",
    color: "#5b8fc9",
    reference: "Henle Lesson 1 · p. 7",
    questions: [
      {
        type: "choice",
        prompt: "What does terra mean?",
        choices: ["earth or land", "gate", "forest", "glory"],
        correct: "earth or land",
        explanation: "Terra gives us English words such as terrain and terrestrial."
      },
      {
        type: "choice",
        prompt: "Choose the Latin word for gate.",
        choices: ["silva", "porta", "gloria", "nauta"],
        correct: "porta",
        explanation: "Porta means gate. Think of a portal: a way in."
      },
      {
        type: "choice",
        prompt: "Which pair means sailor and forest?",
        choices: ["nauta · silva", "terra · porta", "gloria · victoria", "Maria · terra"],
        correct: "nauta · silva",
        explanation: "Nauta is sailor; silva is forest. Nautical and sylvan are their English cousins."
      },
      {
        type: "type",
        prompt: "Type the Latin word for victory.",
        note: "A spelling hint: it looks very much like the English word.",
        accepted: ["victoria"],
        answer: "victoria",
        explanation: "Victoria means victory. Nicely done."
      },
      {
        type: "choice",
        prompt: "What does provincia, provinciae mean?",
        choices: ["province", "forest", "gate", "glory"],
        correct: "province",
        explanation: "Provincia means province. It joins the Lesson 1 sentences in the accusative section."
      },
      {
        type: "choice",
        prompt: "Choose the Latin word for not.",
        choices: ["non", "orat", "porta", "laudat"],
        correct: "non",
        explanation: "Non is an adverb meaning not."
      },
      {
        type: "choice",
        prompt: "What does Salve! mean?",
        choices: ["Hello! to one person", "Hello! to two or more", "not", "victory"],
        correct: "Hello! to one person",
        explanation: "Salve! is the Lesson 1 greeting for one person."
      },
      {
        type: "choice",
        prompt: "What does Salvete! mean?",
        choices: ["Hello! to two or more", "Hello! to one person", "the sailors", "they see"],
        correct: "Hello! to two or more",
        explanation: "Salvete! is used when greeting two or more people."
      }
    ]
  },
  {
    id: "terra",
    number: "II",
    eyebrow: "Quest 2 · First declension",
    title: "The Terra Pattern",
    subtitle: "Learn how endings reveal a noun's job.",
    color: "#9a76b4",
    reference: "Henle Lesson 1 · Grammar no. 31",
    questions: [
      {
        type: "choice",
        prompt: "Which genitive ending marks the first declension?",
        choices: ["-ae", "-i", "-is", "-us"],
        correct: "-ae",
        explanation: "Henle's key: a noun whose genitive singular ends in -ae belongs to the first declension."
      },
      {
        type: "choice",
        prompt: "What is the stem of terra, terrae?",
        choices: ["terr-", "terrae-", "ter-", "terra-"],
        correct: "terr-",
        explanation: "Drop the genitive ending -ae from terrae. The stem is terr-."
      },
      {
        type: "choice",
        prompt: "Choose the accusative singular of terra.",
        note: "The accusative often marks the direct object.",
        choices: ["terra", "terrae", "terram", "terrarum"],
        correct: "terram",
        explanation: "First-declension accusative singular nouns end in -am."
      },
      {
        type: "choice",
        prompt: "Which form is genitive plural: “of the lands”?",
        choices: ["terris", "terras", "terrarum", "terrae"],
        correct: "terrarum",
        explanation: "The first-declension genitive plural ending is -arum."
      },
      {
        type: "choice",
        prompt: "Which ending means to or for one first-declension noun?",
        choices: ["-ae", "-a", "-am", "-arum"],
        correct: "-ae",
        explanation: "The dative singular ending is -ae: to or for the land."
      },
      {
        type: "choice",
        prompt: "Which ending means by, with, or from one first-declension noun?",
        choices: ["-\u0101", "-ae", "-am", "-\u0101s"],
        correct: "-\u0101",
        explanation: "The ablative singular ending is -\u0101: by, with, or from the land."
      },
      {
        type: "choice",
        prompt: "Which ending marks the subject plural?",
        choices: ["-ae", "-am", "-\u0101rum", "-\u0101"],
        correct: "-ae",
        explanation: "Terrae can mean lands, the lands, as the subject plural."
      },
      {
        type: "choice",
        prompt: "Which ending marks the direct object plural?",
        choices: ["-\u0101s", "-\u012bs", "-ae", "-a"],
        correct: "-\u0101s",
        explanation: "First-declension direct object plural nouns end in -\u0101s."
      },
      {
        type: "choice",
        prompt: "Which ending can mean to, for, by, with, or from in the plural?",
        choices: ["-\u012bs", "-\u0101rum", "-am", "-a"],
        correct: "-\u012bs",
        explanation: "The dative and ablative plural share the ending -\u012bs."
      }
    ]
  },
  {
    id: "gender",
    number: "III",
    eyebrow: "Quest 3 · Gender",
    title: "A Noun's Family",
    subtitle: "Notice the important exception hiding among the nouns.",
    color: "#de8465",
    reference: "Henle Lesson 1 · Grammar nos. 32–33",
    questions: [
      {
        type: "choice",
        prompt: "Most first-declension nouns are…",
        choices: ["feminine", "masculine", "neuter", "always plural"],
        correct: "feminine",
        explanation: "Most first-declension nouns are feminine. A small group naming male occupations is masculine."
      },
      {
        type: "choice",
        prompt: "Why is nauta masculine?",
        choices: ["It names a male occupation", "It ends in -a", "It means a thing", "It is plural"],
        correct: "It names a male occupation",
        explanation: "Nauta means sailor. Although it follows the first declension, it names a male occupation."
      },
      {
        type: "choice",
        prompt: "What is the gender of silva, silvae?",
        choices: ["feminine", "masculine", "neuter", "none"],
        correct: "feminine",
        explanation: "Silva is a regular first-declension feminine noun."
      },
      {
        type: "choice",
        prompt: "Which word is the exception in this group?",
        choices: ["nauta", "Maria", "gloria", "victoria"],
        correct: "nauta",
        explanation: "Nauta is masculine; the other three are feminine."
      },
      {
        type: "choice",
        prompt: "In Latin, can a word for a thing have masculine or feminine gender?",
        choices: ["yes", "no", "only in poetry", "only if plural"],
        correct: "yes",
        explanation: "Latin nouns for things still have grammatical gender. Terra is feminine even though land is a thing."
      },
      {
        type: "choice",
        prompt: "What gender is terra, terrae?",
        choices: ["feminine", "masculine", "neuter", "common"],
        correct: "feminine",
        explanation: "Terra follows the usual first-declension rule: all others besides individual male persons are feminine."
      }
    ]
  },
  {
    id: "verbs",
    number: "IV",
    eyebrow: "Quest 4 · Verbs",
    title: "Who Is Doing It?",
    subtitle: "Let Latin verb endings carry the pronoun.",
    color: "#3e9b77",
    reference: "Henle Lesson 1 · Use of verbs",
    questions: [
      {
        type: "choice",
        prompt: "What does orat mean by itself?",
        choices: ["he, she, or it prays", "they pray", "he sees", "they praise"],
        correct: "he, she, or it prays",
        explanation: "The -t ending carries the singular subject: he, she, or it."
      },
      {
        type: "choice",
        prompt: "Choose the Latin for “they see.”",
        choices: ["videt", "vident", "orat", "orant"],
        correct: "vident",
        explanation: "The -nt ending signals a plural subject: they."
      },
      {
        type: "choice",
        prompt: "What does orant mean?",
        choices: ["they pray", "he prays", "they see", "not"],
        correct: "they pray",
        explanation: "Orant is plural: they pray."
      },
      {
        type: "choice",
        prompt: "Choose the Latin for he, she, or it sees.",
        choices: ["videt", "vident", "orat", "orant"],
        correct: "videt",
        explanation: "Videt is singular: he, she, or it sees."
      },
      {
        type: "choice",
        prompt: "What does laudat mean?",
        choices: ["he, she, or it praises", "they praise", "he sees", "not"],
        correct: "he, she, or it praises",
        explanation: "Laudat is singular: he, she, or it praises."
      },
      {
        type: "choice",
        prompt: "What does laudant mean?",
        choices: ["they praise", "he praises", "they pray", "they see"],
        correct: "they praise",
        explanation: "Laudant is plural: they praise."
      },
      {
        type: "choice",
        prompt: "What case is the subject of a finite verb in?",
        choices: ["nominative", "accusative", "genitive", "ablative"],
        correct: "nominative",
        explanation: "Lesson 1 rule: the subject of a finite verb is in the nominative case."
      },
      {
        type: "choice",
        prompt: "A finite verb agrees with its subject in...",
        choices: ["number and person", "case only", "gender only", "accent only"],
        correct: "number and person",
        explanation: "Maria orat is singular; Nautae orant is plural."
      },
      {
        type: "build",
        prompt: "Build: The sailor prays.",
        tokens: ["orat", "Nauta"],
        correct: "Nauta orat",
        explanation: "Nauta is singular, so the verb is the singular orat."
      },
      {
        type: "build",
        prompt: "Build: The sailors do not pray.",
        tokens: ["orant", "non", "Nautae"],
        correct: "Nautae non orant",
        explanation: "Nautae is plural, and non stands just before the verb it modifies."
      }
    ]
  },
  {
    id: "accusative",
    number: "V",
    eyebrow: "Quest 5 · Accusative",
    title: "The Action Lands Here",
    subtitle: "Find and form the direct object.",
    color: "#ce6f67",
    reference: "Henle Lesson 1 · The accusative case",
    questions: [
      {
        type: "choice",
        prompt: "Which case marks the direct object?",
        choices: ["accusative", "nominative", "genitive", "ablative"],
        correct: "accusative",
        explanation: "The direct object of a transitive verb is in the accusative case."
      },
      {
        type: "choice",
        prompt: "Translate: Nautae Mariam laudant.",
        choices: ["The sailors praise Mary.", "Mary praises the sailors.", "The sailor sees Mary.", "They do not praise Mary."],
        correct: "The sailors praise Mary.",
        explanation: "Nautae is the subject, Mariam is the direct object, and laudant means they praise."
      },
      {
        type: "build",
        prompt: "Build: The sailor sees the gate.",
        tokens: ["portam", "videt", "Nauta"],
        correct: "Nauta portam videt",
        explanation: "Porta becomes portam because it receives the action of seeing."
      },
      {
        type: "choice",
        prompt: "Which word is the direct object in Maria silvas laudat?",
        choices: ["silvas", "Maria", "laudat", "none"],
        correct: "silvas",
        explanation: "Silvas ends in -as, the first-declension accusative plural ending."
      },
      {
        type: "choice",
        prompt: "In Henle's usual Lesson 1 sentence order, where does the verb stand?",
        choices: ["last", "first", "always second", "before non"],
        correct: "last",
        explanation: "Lesson 1 rule: the verb usually stands last in the sentence."
      },
      {
        type: "choice",
        prompt: "Where does non usually stand?",
        choices: ["immediately before the word it modifies", "at the very end", "only after a noun", "inside the noun"],
        correct: "immediately before the word it modifies",
        explanation: "Non is an adverb. Adverbs usually stand immediately before the word they modify."
      },
      {
        type: "build",
        prompt: "Build: They do not praise the province.",
        tokens: ["non", "Provinciam", "laudant"],
        correct: "Provinciam non laudant",
        explanation: "Provinciam is the direct object, non stands before laudant, and the verb comes last."
      }
    ]
  },
  {
    id: "genitive",
    number: "VI",
    eyebrow: "Quest 6 · Genitive",
    title: "Whose Glory?",
    subtitle: "Show possession with the genitive case.",
    color: "#c8912f",
    reference: "Henle Lesson 1 · The genitive case",
    questions: [
      {
        type: "choice",
        prompt: "The genitive often translates which English ideas?",
        choices: ["possession and “of”", "motion toward", "a direct command", "the subject"],
        correct: "possession and “of”",
        explanation: "The genitive translates English possessives and many phrases using “of.”"
      },
      {
        type: "choice",
        prompt: "Translate: gloria Mariae.",
        choices: ["Mary's glory", "Mary praises", "the glorious Mary", "glory sees Mary"],
        correct: "Mary's glory",
        explanation: "Mariae is genitive singular: of Mary, or Mary's."
      },
      {
        type: "build",
        prompt: "Build: the sailors' victory",
        tokens: ["nautarum", "victoria"],
        correct: "victoria nautarum",
        explanation: "Nautarum is genitive plural: of the sailors."
      },
      {
        type: "build",
        prompt: "Build: the gate of the province",
        tokens: ["provinciae", "porta"],
        correct: "porta provinciae",
        explanation: "Provinciae is genitive singular: of the province. Lesson 1 complete!"
      },
      {
        type: "choice",
        prompt: "Translate: victoria nautae.",
        choices: ["the sailor's victory", "the sailors' victory", "the sailor praises", "the province's victory"],
        correct: "the sailor's victory",
        explanation: "Nautae is genitive singular here: of the sailor."
      },
      {
        type: "choice",
        prompt: "Translate: victoria nautarum.",
        choices: ["the sailors' victory", "the sailor's victory", "the victory praises", "Mary's victory"],
        correct: "the sailors' victory",
        explanation: "Nautarum is genitive plural: of the sailors."
      }
    ]
  },
  {
    id: "lesson2-servus",
    lessonSet: "lesson2",
    number: "I",
    eyebrow: "Lesson 2 · Servus",
    title: "The Servus Pattern",
    subtitle: "Meet second-declension masculine nouns.",
    color: "#5b8fc9",
    reference: "Henle Lesson 2 · The declension of servus",
    questions: [
      {
        type: "choice",
        prompt: "Which genitive singular ending marks the second declension?",
        choices: ["-i", "-ae", "-is", "-um"],
        correct: "-i",
        explanation: "Henle's Lesson 2 key: nouns whose genitive singular ends in -i belong to the second declension."
      },
      {
        type: "choice",
        prompt: "Second-declension nouns ending in -us are generally...",
        choices: ["masculine", "feminine", "neuter", "always plural"],
        correct: "masculine",
        explanation: "Servus, filius, amicus, Christus, and Christianus follow the masculine servus pattern."
      },
      {
        type: "choice",
        prompt: "What is the stem of servus, servi?",
        choices: ["serv-", "servi-", "servus-", "ser-"],
        correct: "serv-",
        explanation: "Drop the genitive ending -i from servi. The stem is serv-."
      },
      {
        type: "choice",
        prompt: "Translate: amicus Dei.",
        choices: ["friend of God", "God praises", "friend of Mary", "the Christians"],
        correct: "friend of God",
        explanation: "Dei is genitive singular: of God."
      },
      {
        type: "build",
        prompt: "Build: Christians praise Christ.",
        tokens: ["Christum", "laudant", "Christiani"],
        correct: "Christiani Christum laudant",
        explanation: "Christiani is the subject, Christum is the direct object, and laudant comes last."
      }
    ]
  },
  {
    id: "lesson2-bellum",
    lessonSet: "lesson2",
    number: "II",
    eyebrow: "Lesson 2 · Bellum",
    title: "The Bellum Pattern",
    subtitle: "Learn the second-declension neuter pattern.",
    color: "#9a76b4",
    reference: "Henle Lesson 2 · The declension of bellum",
    questions: [
      {
        type: "choice",
        prompt: "What does bellum, belli mean?",
        choices: ["war", "kingdom", "danger", "reward"],
        correct: "war",
        explanation: "Bellum means war. Belligerent is a related English word."
      },
      {
        type: "choice",
        prompt: "Second-declension nouns ending in -um are...",
        choices: ["neuter", "masculine", "feminine", "always genitive"],
        correct: "neuter",
        explanation: "Lesson 2 rule: second-declension nouns whose nominative ends in -um are neuter."
      },
      {
        type: "choice",
        prompt: "In neuter nouns, the accusative is always like the...",
        choices: ["nominative", "genitive", "dative", "ablative"],
        correct: "nominative",
        explanation: "Henle's hint: in all neuter nouns and adjectives, the accusative is always like the nominative."
      },
      {
        type: "choice",
        prompt: "Choose the nominative or accusative plural of bellum.",
        choices: ["bella", "bellum", "belli", "bellorum"],
        correct: "bella",
        explanation: "Neuter plural nominative and accusative forms end in -a: bella."
      },
      {
        type: "choice",
        prompt: "Translate: regnum Christi.",
        choices: ["kingdom of Christ", "Christ praises", "danger of war", "reward of Mary"],
        correct: "kingdom of Christ",
        explanation: "Regnum means kingdom, and Christi is genitive singular: of Christ."
      }
    ]
  },
  {
    id: "lesson2-dative",
    lessonSet: "lesson2",
    number: "III",
    eyebrow: "Lesson 2 · Dative",
    title: "Giving To Someone",
    subtitle: "Find the indirect object.",
    color: "#3e9b77",
    reference: "Henle Lesson 2 · The indirect object",
    questions: [
      {
        type: "choice",
        prompt: "Which case is used for the indirect object?",
        choices: ["dative", "accusative", "genitive", "nominative"],
        correct: "dative",
        explanation: "Lesson 2 rule: the indirect object is put in the dative case."
      },
      {
        type: "choice",
        prompt: "What does dedit mean?",
        choices: ["he, she, or it gave", "they gave", "he sees", "they praise"],
        correct: "he, she, or it gave",
        explanation: "Dedit is singular: he, she, or it gave."
      },
      {
        type: "choice",
        prompt: "What does dederunt mean?",
        choices: ["they gave", "he gave", "they inhabit", "you see"],
        correct: "they gave",
        explanation: "Dederunt is plural: they gave."
      },
      {
        type: "build",
        prompt: "Build: Christ gave glory to God.",
        tokens: ["Deo", "gloriam", "dedit", "Christus"],
        correct: "Christus Deo gloriam dedit",
        explanation: "Deo is dative: to God. Gloriam is the direct object."
      },
      {
        type: "choice",
        prompt: "What does sed mean?",
        choices: ["but", "and", "because", "with"],
        correct: "but",
        explanation: "Sed is a conjunction meaning but."
      }
    ]
  },
  {
    id: "lesson2-prepositions",
    lessonSet: "lesson2",
    number: "IV",
    eyebrow: "Lesson 2 · Prepositions",
    title: "Little Words, Strong Cases",
    subtitle: "Learn which case follows each preposition.",
    color: "#de8465",
    reference: "Henle Lesson 2 · Use of prepositions",
    questions: [
      {
        type: "choice",
        prompt: "When studying a Latin preposition, what must you learn with it?",
        choices: ["the case it governs", "its gender", "its plural", "its stem"],
        correct: "the case it governs",
        explanation: "Henle warns: always learn what case a preposition governs."
      },
      {
        type: "choice",
        prompt: "Which case follows cum?",
        choices: ["ablative", "accusative", "genitive", "nominative"],
        correct: "ablative",
        explanation: "Cum means with and is followed by the ablative."
      },
      {
        type: "choice",
        prompt: "Which case follows propter?",
        choices: ["accusative", "ablative", "genitive", "dative"],
        correct: "accusative",
        explanation: "Propter means on account of and takes the accusative."
      },
      {
        type: "choice",
        prompt: "Translate: post bellum.",
        choices: ["after the war", "with the war", "in the war", "because of war"],
        correct: "after the war",
        explanation: "Post means after and takes the accusative."
      },
      {
        type: "choice",
        prompt: "Translate: in oppido.",
        choices: ["in the town", "after the town", "on account of the town", "with the town"],
        correct: "in the town",
        explanation: "In meaning in or on takes the ablative. Oppido is ablative."
      }
    ]
  },
  {
    id: "lesson2-sum",
    lessonSet: "lesson2",
    number: "V",
    eyebrow: "Lesson 2 · Sum",
    title: "Being and Linking",
    subtitle: "Use sum and predicate nouns.",
    color: "#c8912f",
    reference: "Henle Lesson 2 · The predicate noun",
    questions: [
      {
        type: "choice",
        prompt: "After a linking verb, the predicate noun is put in the same case as the...",
        choices: ["subject", "direct object", "preposition", "genitive"],
        correct: "subject",
        explanation: "Lesson 2 rule: after a linking verb, the predicate noun is put in the same case as the subject."
      },
      {
        type: "choice",
        prompt: "What does sumus mean?",
        choices: ["we are", "I am", "you are", "they are"],
        correct: "we are",
        explanation: "Sumus means we are."
      },
      {
        type: "choice",
        prompt: "What does sunt mean?",
        choices: ["they are", "he is", "we are", "you are"],
        correct: "they are",
        explanation: "Sunt means they are."
      },
      {
        type: "choice",
        prompt: "Translate: Christus est Filius Dei.",
        choices: ["Christ is the Son of God.", "Christ praises God.", "God gave Christ glory.", "Christ sees Mary."],
        correct: "Christ is the Son of God.",
        explanation: "Filius is a predicate noun after est."
      },
      {
        type: "choice",
        prompt: "Where may forms of sum stand in a sentence?",
        choices: ["anywhere", "only last", "only first", "only after non"],
        correct: "anywhere",
        explanation: "Lesson 2 notes that forms of sum may stand anywhere in the sentence."
      }
    ]
  },
  {
    id: "lesson2-quod",
    lessonSet: "lesson2",
    number: "VI",
    eyebrow: "Lesson 2 · Quod",
    title: "Because and So",
    subtitle: "Join ideas with quod and itaque.",
    color: "#ce6f67",
    reference: "Henle Lesson 2 · Use of quod",
    questions: [
      {
        type: "choice",
        prompt: "What does quod mean?",
        choices: ["because", "and so", "but", "with"],
        correct: "because",
        explanation: "Quod is a conjunction meaning because."
      },
      {
        type: "choice",
        prompt: "What does itaque mean?",
        choices: ["and so", "because", "after", "with"],
        correct: "and so",
        explanation: "Itaque is used at the beginning of a sentence as an introductory adverb."
      },
      {
        type: "choice",
        prompt: "What does incolunt mean?",
        choices: ["they inhabit", "they conquered", "you see", "they gave"],
        correct: "they inhabit",
        explanation: "Incolunt means they inhabit."
      },
      {
        type: "choice",
        prompt: "What does videtis mean?",
        choices: ["you see", "they see", "he sees", "they conquered"],
        correct: "you see",
        explanation: "Videtis means you see, speaking to more than one person."
      },
      {
        type: "choice",
        prompt: "In the sentence Servus Christi sum quod Christus Deus est, what does quod introduce?",
        choices: ["a because-clause", "a direct object", "a prepositional phrase", "a vocative"],
        correct: "a because-clause",
        explanation: "Quod joins the subordinate because-clause to the main clause."
      }
    ]
  },
  {
    id: "lesson3-intro",
    lessonSet: "lesson3",
    number: "I",
    eyebrow: "Lesson 3 · Third declension",
    title: "The Third Declension",
    subtitle: "Learn the -is clue and the changing nominative.",
    color: "#5b8fc9",
    reference: "Henle Lesson 3 · The third declension",
    questions: [
      {
        type: "choice",
        prompt: "Which genitive singular ending marks the third declension?",
        choices: ["-is", "-ae", "-i", "-orum"],
        correct: "-is",
        explanation: "Third-declension nouns are recognized by the genitive singular ending -is."
      },
      {
        type: "choice",
        prompt: "What is unusual about the nominative singular in the third declension?",
        choices: ["It has no one regular ending", "It always ends in -a", "It is always plural", "It always matches the genitive"],
        correct: "It has no one regular ending",
        explanation: "Unlike the first and second declensions, third-declension nominative singular forms vary."
      },
      {
        type: "choice",
        prompt: "What is the stem of \"legis\"?",
        choices: ["leg-", "legi-", "lex-", "le-"],
        correct: "leg-",
        explanation: "Drop the genitive ending -is from legis. The stem is leg-."
      },
      {
        type: "choice",
        prompt: "What does \"lex, legis\" mean?",
        choices: ["law", "king", "light", "truth"],
        correct: "law",
        explanation: "Lex, legis means law."
      },
      {
        type: "choice",
        prompt: "What does \"homo, hominis\" mean?",
        choices: ["man", "leader", "soldier", "river"],
        correct: "man",
        explanation: "Homo, hominis means man."
      }
    ]
  },
  {
    id: "lesson3-lex",
    lessonSet: "lesson3",
    number: "II",
    eyebrow: "Lesson 3 · Lex",
    title: "The Lex Pattern",
    subtitle: "Practice masculine and feminine third-declension nouns like lex.",
    color: "#9a76b4",
    reference: "Henle Lesson 3 · The declension of lex",
    questions: [
      {
        type: "choice",
        prompt: "Which form means “of the king”?",
        choices: ["regis", "regem", "rege", "regibus"],
        correct: "regis",
        explanation: "Regis is genitive singular: of the king."
      },
      {
        type: "choice",
        prompt: "Which form can mean “to or for the law”?",
        choices: ["legi", "legem", "lege", "leges"],
        correct: "legi",
        explanation: "Legi is dative singular: to or for the law."
      },
      {
        type: "choice",
        prompt: "What does \"ducibus\" show?",
        choices: ["to, for, by, with, or from the leaders", "one leader as direct object", "of the leader", "the leader as subject"],
        correct: "to, for, by, with, or from the leaders",
        explanation: "The ending -ibus can be dative or ablative plural."
      },
      {
        type: "choice",
        prompt: "Translate: \"rex regum\".",
        choices: ["king of kings", "the kings praise", "to the king", "with the kings"],
        correct: "king of kings",
        explanation: "Regum is genitive plural: of kings."
      },
      {
        type: "build",
        prompt: "Build: Christ praises the truth.",
        tokens: ["veritatem", "laudat", "Christus"],
        correct: "Christus veritatem laudat",
        explanation: "Veritatem is accusative singular, the direct object."
      }
    ]
  },
  {
    id: "lesson3-appositives",
    lessonSet: "lesson3",
    number: "III",
    eyebrow: "Lesson 3 · Appositives",
    title: "A Noun That Explains",
    subtitle: "Use an appositive in the same case and number as its noun.",
    color: "#de8465",
    reference: "Henle Lesson 3 · Appositives",
    questions: [
      {
        type: "choice",
        prompt: "An appositive must agree with its noun in...",
        choices: ["case and number", "tense and voice", "gender only", "person only"],
        correct: "case and number",
        explanation: "An appositive explains another noun and agrees with it in case and number."
      },
      {
        type: "choice",
        prompt: "In \"Caesar, dux Romanorum,\" what does \"dux\" do?",
        choices: ["explains Caesar", "acts as the verb", "shows the direct object", "modifies Romanorum"],
        correct: "explains Caesar",
        explanation: "Dux is in apposition to Caesar; it tells which Caesar is meant."
      },
      {
        type: "choice",
        prompt: "If \"Christum\" is accusative singular, which appositive form matches it?",
        choices: ["Filium", "Filius", "Filii", "Filio"],
        correct: "Filium",
        explanation: "Filium is accusative singular, agreeing with Christum."
      },
      {
        type: "choice",
        prompt: "What does \"vox, vocis\" mean?",
        choices: ["voice or cry", "welfare", "king", "mountain"],
        correct: "voice or cry",
        explanation: "Vox, vocis can mean voice or cry."
      },
      {
        type: "choice",
        prompt: "What does \"audivit\" mean?",
        choices: ["he, she, or it heard", "they heard", "he praises", "they killed"],
        correct: "he, she, or it heard",
        explanation: "Audivit is singular: he, she, or it heard."
      }
    ]
  },
  {
    id: "lesson3-there",
    lessonSet: "lesson3",
    number: "IV",
    eyebrow: "Lesson 3 · There",
    title: "There Is, There Are",
    subtitle: "Learn how Latin handles the English word there.",
    color: "#3e9b77",
    reference: "Henle Lesson 3 · The expletive there",
    questions: [
      {
        type: "choice",
        prompt: "In “There are soldiers in Gaul,” what is the real subject?",
        choices: ["soldiers", "there", "Gaul", "are"],
        correct: "soldiers",
        explanation: "There only introduces the sentence. Soldiers is the real subject."
      },
      {
        type: "choice",
        prompt: "How does Latin usually translate the expletive there?",
        choices: ["It does not translate it", "with ibi", "with non", "with propter"],
        correct: "It does not translate it",
        explanation: "Latin uses est or sunt, but does not need a separate word for expletive there."
      },
      {
        type: "choice",
        prompt: "Which Latin sentence means “There are dangers in Gaul”?",
        choices: ["Sunt pericula in Gallia.", "Est periculum in Gallia.", "Periculum laudat Galliam.", "Gallia pericula videt."],
        correct: "Sunt pericula in Gallia.",
        explanation: "Sunt matches the plural subject pericula."
      },
      {
        type: "choice",
        prompt: "What does \"pax, pacis\" mean?",
        choices: ["peace", "part", "wound", "name"],
        correct: "peace",
        explanation: "Pax, pacis means peace."
      },
      {
        type: "choice",
        prompt: "What does \"muniverunt\" usually mean?",
        choices: ["they fortified", "they heard", "they praised", "they were"],
        correct: "they fortified",
        explanation: "Muniverunt usually means they fortified; with viam or vias it can mean they constructed."
      }
    ]
  },
  {
    id: "lesson3-pars",
    lessonSet: "lesson3",
    number: "V",
    eyebrow: "Lesson 3 · Pars",
    title: "The Pars Pattern",
    subtitle: "Notice the third-declension words with genitive plural -ium.",
    color: "#c8912f",
    reference: "Henle Lesson 3 · The declension of pars",
    questions: [
      {
        type: "choice",
        prompt: "How is \"pars\" different from \"lex\" in the plural?",
        choices: ["Its genitive plural ends in -ium", "Its dative plural ends in -orum", "Its accusative singular ends in -a", "It has no plural"],
        correct: "Its genitive plural ends in -ium",
        explanation: "Pars-type words are especially important because their genitive plural ends in -ium."
      },
      {
        type: "choice",
        prompt: "Which form means “of the parts”?",
        choices: ["partium", "partem", "parte", "partibus"],
        correct: "partium",
        explanation: "Partium is genitive plural: of the parts."
      },
      {
        type: "choice",
        prompt: "What does \"hostis, hostis\" mean?",
        choices: ["enemy", "hill", "river", "law"],
        correct: "enemy",
        explanation: "Hostis, hostis means enemy, especially an enemy in war."
      },
      {
        type: "choice",
        prompt: "What does \"gens, gentis\" mean?",
        choices: ["tribe or nation", "wound", "voice", "truth"],
        correct: "tribe or nation",
        explanation: "Gens, gentis means tribe or nation."
      },
      {
        type: "choice",
        prompt: "Translate: \"cum hostibus\".",
        choices: ["with the enemies", "of the enemy", "after the enemy", "the enemy as subject"],
        correct: "with the enemies",
        explanation: "Cum takes the ablative; hostibus is ablative plural."
      }
    ]
  },
  {
    id: "lesson3-lex-pars-review",
    lessonSet: "lesson3",
    number: "VI",
    eyebrow: "Lesson 3 · Review",
    title: "Lex and Pars Together",
    subtitle: "Sort the two masculine/feminine third-declension patterns.",
    color: "#ce6f67",
    reference: "Henle Lesson 3 · Review of nouns like lex and pars",
    questions: [
      {
        type: "choice",
        prompt: "Which word has the exceptional genitive plural \"fratrum\"?",
        choices: ["frater", "hostis", "pars", "collis"],
        correct: "frater",
        explanation: "Frater, pater, and mater use -um in the genitive plural, not -ium."
      },
      {
        type: "choice",
        prompt: "What does \"mater, matris\" mean?",
        choices: ["mother", "father", "brother", "chief"],
        correct: "mother",
        explanation: "Mater, matris means mother."
      },
      {
        type: "choice",
        prompt: "What does \"mons, montis\" mean?",
        choices: ["mountain", "hill", "peace", "column"],
        correct: "mountain",
        explanation: "Mons, montis means mountain."
      },
      {
        type: "choice",
        prompt: "What does \"princeps, principis\" mean?",
        choices: ["chief or leading man", "servant", "sailor", "reward"],
        correct: "chief or leading man",
        explanation: "Princeps, principis means chief or leading man."
      },
      {
        type: "choice",
        prompt: "What does \"occiderunt\" mean?",
        choices: ["they killed", "they heard", "they fortified", "they were"],
        correct: "they killed",
        explanation: "Occiderunt means they killed."
      }
    ]
  },
  {
    id: "lesson3-flumen",
    lessonSet: "lesson3",
    number: "VII",
    eyebrow: "Lesson 3 · Flumen",
    title: "The Flumen Pattern",
    subtitle: "Meet neuter nouns of the third declension.",
    color: "#7b8f3b",
    reference: "Henle Lesson 3 · The declension of flumen",
    questions: [
      {
        type: "choice",
        prompt: "What does \"flumen, fluminis\" mean?",
        choices: ["river", "road", "body", "wound"],
        correct: "river",
        explanation: "Flumen, fluminis means river."
      },
      {
        type: "choice",
        prompt: "In neuter nouns, the accusative is always like the...",
        choices: ["nominative", "genitive", "dative", "ablative"],
        correct: "nominative",
        explanation: "This rule applies to neuter nouns in every declension."
      },
      {
        type: "choice",
        prompt: "Which form is nominative or accusative plural of \"flumen\"?",
        choices: ["flumina", "fluminis", "flumine", "fluminum"],
        correct: "flumina",
        explanation: "Third-declension neuter nominative and accusative plural forms end in -a."
      },
      {
        type: "choice",
        prompt: "What does \"corpus, corporis\" mean?",
        choices: ["body", "name", "journey", "army on the march"],
        correct: "body",
        explanation: "Corpus, corporis means body."
      },
      {
        type: "choice",
        prompt: "What does \"nomen, nominis\" mean?",
        choices: ["name", "wound", "river", "peace"],
        correct: "name",
        explanation: "Nomen, nominis means name."
      }
    ]
  },
  {
    id: "lesson3-wrap",
    lessonSet: "lesson3",
    number: "VIII",
    eyebrow: "Lesson 3 · Mastery",
    title: "Third Declension Wrap-Up",
    subtitle: "Review the new words, patterns, and old supporting grammar.",
    color: "#8d6bb1",
    reference: "Henle Lesson 3 · Review of the third declension",
    questions: [
      {
        type: "choice",
        prompt: "What does \"erat\" mean?",
        choices: ["he, she, or it was", "they were", "they killed", "he heard"],
        correct: "he, she, or it was",
        explanation: "Erat is singular and can also help translate there was."
      },
      {
        type: "choice",
        prompt: "What does \"erant\" mean?",
        choices: ["they were", "he was", "they praise", "he gave"],
        correct: "they were",
        explanation: "Erant is plural and can also help translate there were."
      },
      {
        type: "choice",
        prompt: "What does \"mundus, mundi\" mean?",
        choices: ["world", "river", "law", "enemy"],
        correct: "world",
        explanation: "Mundus, mundi means world."
      },
      {
        type: "choice",
        prompt: "Which group belongs to the third declension?",
        choices: ["lex, pars, flumen", "terra, porta, silva", "servus, amicus, bellum", "orat, videt, laudat"],
        correct: "lex, pars, flumen",
        explanation: "Lex, pars, and flumen are the Lesson 3 third-declension models."
      },
      {
        type: "build",
        prompt: "Build: There were soldiers in the mountains.",
        tokens: ["in", "montibus", "Milites", "erant"],
        correct: "Milites in montibus erant",
        explanation: "Milites is the real subject; Latin does not need a word for expletive there."
      }
    ]
  },
  {
    id: "lesson4-portus",
    lessonSet: "lesson4",
    number: "I",
    eyebrow: "Lesson 4 · Fourth declension",
    title: "The Portus Pattern",
    subtitle: "Meet fourth-declension nouns and the harbor model.",
    color: "#5b8fc9",
    reference: "Henle Lesson 4 · The fourth declension",
    questions: [
      {
        type: "choice",
        prompt: "Which genitive singular ending marks the fourth declension?",
        choices: ["-ūs", "-ae", "-ī", "-is"],
        correct: "-ūs",
        explanation: "Fourth-declension nouns like portus are recognized by the genitive singular ending -ūs."
      },
      {
        type: "choice",
        prompt: "What does \"portus, portūs\" mean?",
        choices: ["harbor", "gate", "province", "hill"],
        correct: "harbor",
        explanation: "Portus means harbor. Keep it separate from porta, which means gate."
      },
      {
        type: "choice",
        prompt: "What is the stem of \"portūs\"?",
        choices: ["port-", "portu-", "por-", "porta-"],
        correct: "port-",
        explanation: "Drop the genitive ending -ūs from portūs. The stem is port-."
      },
      {
        type: "choice",
        prompt: "Why do we pay attention to the long mark in \"portūs\"?",
        choices: ["It helps distinguish forms", "It changes the word into a verb", "It means the word is feminine", "It makes the word plural only"],
        correct: "It helps distinguish forms",
        explanation: "Portus and portūs can look almost the same, so the long mark helps the learner notice the difference."
      },
      {
        type: "choice",
        prompt: "Which form means “of the harbor”?",
        choices: ["portūs", "portum", "portibus", "portuum"],
        correct: "portūs",
        explanation: "Portūs is genitive singular: of the harbor."
      }
    ]
  },
  {
    id: "lesson4-vocabulary",
    lessonSet: "lesson4",
    number: "II",
    eyebrow: "Lesson 4 · Vocabulary",
    title: "Armies, Harbors, and Fear",
    subtitle: "Learn the new fourth-declension vocabulary.",
    color: "#9a76b4",
    reference: "Henle Lesson 4 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"adventus, adventūs\" mean?",
        choices: ["arrival or coming", "fear", "attack", "senate"],
        correct: "arrival or coming",
        explanation: "Adventus means arrival or coming."
      },
      {
        type: "choice",
        prompt: "Choose the Latin word for army.",
        choices: ["exercitus", "metus", "portus", "spiritus"],
        correct: "exercitus",
        explanation: "Exercitus means army."
      },
      {
        type: "choice",
        prompt: "What does \"equitatus, equitatūs\" mean?",
        choices: ["cavalry", "harbor", "breath", "law"],
        correct: "cavalry",
        explanation: "Equitatus means cavalry."
      },
      {
        type: "choice",
        prompt: "Which word means fear?",
        choices: ["metus", "impetus", "senatus", "nunc"],
        correct: "metus",
        explanation: "Metus means fear."
      },
      {
        type: "choice",
        prompt: "What does \"spiritus, spiritūs\" mean?",
        choices: ["breath or spirit", "arrival", "cavalry", "enemy"],
        correct: "breath or spirit",
        explanation: "Spiritus can mean breath or spirit."
      },
      {
        type: "choice",
        prompt: "What does \"senatus, senatūs\" mean?",
        choices: ["senate", "soldier", "province", "king"],
        correct: "senate",
        explanation: "Senatus means senate."
      }
    ]
  },
  {
    id: "lesson4-forms",
    lessonSet: "lesson4",
    number: "III",
    eyebrow: "Lesson 4 · Portus forms",
    title: "Fourth-Declension Jobs",
    subtitle: "Practice the jobs done by each portus ending.",
    color: "#de8465",
    reference: "Henle Lesson 4 · Forms of portus",
    questions: [
      {
        type: "choice",
        prompt: "Which form means “to or for the harbor”?",
        choices: ["portuī", "portū", "portum", "portuum"],
        correct: "portuī",
        explanation: "Portuī is dative singular: to or for the harbor."
      },
      {
        type: "choice",
        prompt: "Which form means “by, with, or from the harbor”?",
        choices: ["portū", "portum", "portibus", "portus"],
        correct: "portū",
        explanation: "Portū is ablative singular: by, with, or from the harbor."
      },
      {
        type: "choice",
        prompt: "What can \"portūs\" show?",
        choices: ["of the harbor, or the harbors as subject/direct object", "to the harbor only", "by the harbors only", "of the gates"],
        correct: "of the harbor, or the harbors as subject/direct object",
        explanation: "Portūs can be genitive singular, nominative plural, or accusative plural."
      },
      {
        type: "choice",
        prompt: "Which form means “of the harbors”?",
        choices: ["portuum", "portibus", "portū", "portum"],
        correct: "portuum",
        explanation: "Portuum is genitive plural: of the harbors."
      },
      {
        type: "choice",
        prompt: "What can \"portibus\" show?",
        choices: ["to, for, by, with, or from the harbors", "one harbor as direct object", "of one harbor", "one harbor as subject"],
        correct: "to, for, by, with, or from the harbors",
        explanation: "Portibus is dative or ablative plural."
      }
    ]
  },
  {
    id: "lesson4-in",
    lessonSet: "lesson4",
    number: "IV",
    eyebrow: "Lesson 4 · In",
    title: "Into or In?",
    subtitle: "Learn how motion changes the case after in.",
    color: "#3e9b77",
    reference: "Henle Lesson 4 · In with the accusative",
    questions: [
      {
        type: "choice",
        prompt: "When \"in\" shows motion into, against, or upon, which case follows it?",
        choices: ["accusative", "ablative", "genitive", "nominative"],
        correct: "accusative",
        explanation: "Motion after in takes the accusative: into, against, upon."
      },
      {
        type: "choice",
        prompt: "When \"in\" shows location with no motion, which case follows it?",
        choices: ["ablative", "accusative", "dative", "genitive"],
        correct: "ablative",
        explanation: "No-motion in or on takes the ablative."
      },
      {
        type: "choice",
        prompt: "Translate: \"in silvam venit\".",
        choices: ["he came into the forest", "he was in the forest", "he praised the forest", "he came from the forest"],
        correct: "he came into the forest",
        explanation: "Silvam is accusative because the sentence has motion into the forest."
      },
      {
        type: "choice",
        prompt: "Translate: \"in silvā erat\".",
        choices: ["he was in the forest", "he came into the forest", "he attacked the forest", "he saw the forest"],
        correct: "he was in the forest",
        explanation: "Silvā is ablative because there is location, not motion into."
      },
      {
        type: "choice",
        prompt: "In \"Caesar in provinciam venit,\" why is \"provinciam\" accusative?",
        choices: ["because Caesar came into the province", "because Caesar stayed in the province", "because provincia is plural", "because venit takes the genitive"],
        correct: "because Caesar came into the province",
        explanation: "The motion idea in came into calls for the accusative."
      }
    ]
  },
  {
    id: "lesson4-autem",
    lessonSet: "lesson4",
    number: "V",
    eyebrow: "Lesson 4 · Sentence glue",
    title: "Now, However, Came, Made",
    subtitle: "Use the new little words and verbs in simple sentences.",
    color: "#c8912f",
    reference: "Henle Lesson 4 · Autem, nunc, venit, venerunt, fecerunt",
    questions: [
      {
        type: "choice",
        prompt: "What does \"nunc\" mean?",
        choices: ["now", "however", "because", "after"],
        correct: "now",
        explanation: "Nunc means now."
      },
      {
        type: "choice",
        prompt: "What does \"autem\" mean?",
        choices: ["however", "now", "with", "into"],
        correct: "however",
        explanation: "Autem means however, but it usually comes after the first word or phrase of its clause."
      },
      {
        type: "choice",
        prompt: "Where does \"autem\" usually stand?",
        choices: ["after the first word or phrase", "always first", "always last", "between every noun and verb"],
        correct: "after the first word or phrase",
        explanation: "Autem is postpositive: it follows the first word or phrase."
      },
      {
        type: "choice",
        prompt: "What does \"vēnit\" mean?",
        choices: ["he, she, or it came", "they came", "they made", "he sees"],
        correct: "he, she, or it came",
        explanation: "Vēnit is singular: he, she, or it came."
      },
      {
        type: "choice",
        prompt: "What does \"fēcērunt\" mean?",
        choices: ["they made or did", "they came", "they feared", "they praised"],
        correct: "they made or did",
        explanation: "Fēcērunt means they made or did."
      },
      {
        type: "build",
        prompt: "Build: Caesar, however, came into the province.",
        tokens: ["in", "provinciam", "vēnit", "Caesar", "autem"],
        correct: "Caesar autem in provinciam vēnit",
        explanation: "Autem follows Caesar, and provinciam is accusative because there is motion into."
      }
    ]
  },
  {
    id: "lesson4-wrap",
    lessonSet: "lesson4",
    number: "VI",
    eyebrow: "Lesson 4 · Mastery",
    title: "Fourth Declension Wrap-Up",
    subtitle: "Mix portus, in, and the earlier Henle words.",
    color: "#ce6f67",
    reference: "Henle Lesson 4 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"post adventum Christi\".",
        choices: ["after the coming of Christ", "with the army of Christ", "because of Christ's fear", "in Christ's harbor"],
        correct: "after the coming of Christ",
        explanation: "Post takes the accusative; adventum means the coming as direct object of the preposition."
      },
      {
        type: "choice",
        prompt: "Translate: \"propter metum\".",
        choices: ["on account of fear", "with fear", "to fear", "of fear"],
        correct: "on account of fear",
        explanation: "Propter means on account of and takes the accusative."
      },
      {
        type: "choice",
        prompt: "Translate: \"cum exercitū\".",
        choices: ["with the army", "into the army", "of the army", "after the army"],
        correct: "with the army",
        explanation: "Cum takes the ablative; exercitū is ablative singular."
      },
      {
        type: "choice",
        prompt: "What does \"impetum in hostes\" mean?",
        choices: ["an attack against the enemies", "fear of the enemies", "with the enemies", "the enemies as subject"],
        correct: "an attack against the enemies",
        explanation: "In with the accusative can mean against or upon."
      },
      {
        type: "build",
        prompt: "Build: The Romans see the harbor.",
        tokens: ["portum", "Romani", "vident"],
        correct: "Romani portum vident",
        explanation: "Portum is accusative singular: the harbor as direct object."
      }
    ]
  },
  {
    id: "lesson5-res",
    lessonSet: "lesson5",
    number: "I",
    eyebrow: "Lesson 5 · Fifth declension",
    title: "The Rēs Pattern",
    subtitle: "Meet fifth-declension nouns and the model word rēs.",
    color: "#5b8fc9",
    reference: "Henle Lesson 5 · The fifth declension",
    questions: [
      {
        type: "choice",
        prompt: "Which genitive singular ending marks the fifth declension?",
        choices: ["-eī", "-ūs", "-is", "-ae"],
        correct: "-eī",
        explanation: "Fifth-declension nouns like rēs are recognized by the genitive singular ending -eī."
      },
      {
        type: "choice",
        prompt: "What does \"rēs, reī\" mean?",
        choices: ["thing, matter, affair", "hope", "faithfulness", "battle line"],
        correct: "thing, matter, affair",
        explanation: "Rēs can mean thing, matter, or affair."
      },
      {
        type: "choice",
        prompt: "What is the stem of \"reī\"?",
        choices: ["r-", "re-", "rei-", "res-"],
        correct: "r-",
        explanation: "Drop the genitive ending -eī from reī. The remaining stem is r-."
      },
      {
        type: "choice",
        prompt: "Most fifth-declension nouns are...",
        choices: ["feminine", "masculine", "neuter", "always plural"],
        correct: "feminine",
        explanation: "Most fifth-declension nouns are feminine."
      },
      {
        type: "choice",
        prompt: "Which pair belongs to the fifth declension?",
        choices: ["rēs and spēs", "portus and exercitus", "lex and flumen", "terra and porta"],
        correct: "rēs and spēs",
        explanation: "Rēs and spēs are Lesson 5 fifth-declension words."
      }
    ]
  },
  {
    id: "lesson5-vocabulary",
    lessonSet: "lesson5",
    number: "II",
    eyebrow: "Lesson 5 · Vocabulary",
    title: "Faith, Hope, and the Battle Line",
    subtitle: "Learn the new fifth-declension words.",
    color: "#9a76b4",
    reference: "Henle Lesson 5 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"fidēs, fideī\" mean?",
        choices: ["faith or faithfulness", "hope", "battle line", "thing"],
        correct: "faith or faithfulness",
        explanation: "Fidēs means faith or faithfulness."
      },
      {
        type: "choice",
        prompt: "What does \"aciēs, aciēī\" mean?",
        choices: ["battle line", "hope", "spirit", "army"],
        correct: "battle line",
        explanation: "Aciēs means battle line."
      },
      {
        type: "choice",
        prompt: "Which word means hope?",
        choices: ["spēs", "rēs", "fidēs", "metus"],
        correct: "spēs",
        explanation: "Spēs means hope."
      },
      {
        type: "choice",
        prompt: "What does \"posuērunt\" mean?",
        choices: ["they put or placed", "they came", "they saw", "they fortified"],
        correct: "they put or placed",
        explanation: "Posuērunt means they put or placed."
      },
      {
        type: "choice",
        prompt: "Which English family word is related to \"fidēs\"?",
        choices: ["fidelity", "forest", "portal", "victory"],
        correct: "fidelity",
        explanation: "Fidelity is related to fidēs and means faithfulness."
      }
    ]
  },
  {
    id: "lesson5-forms",
    lessonSet: "lesson5",
    number: "III",
    eyebrow: "Lesson 5 · Rēs forms",
    title: "Fifth-Declension Jobs",
    subtitle: "Practice the jobs done by each fifth-declension ending.",
    color: "#de8465",
    reference: "Henle Lesson 5 · Forms of rēs",
    questions: [
      {
        type: "choice",
        prompt: "Which form means “of the thing”?",
        choices: ["reī", "rem", "rē", "rēbus"],
        correct: "reī",
        explanation: "Reī is genitive singular: of the thing."
      },
      {
        type: "choice",
        prompt: "Which form means “the thing” as direct object?",
        choices: ["rem", "rēs", "rē", "rērum"],
        correct: "rem",
        explanation: "Rem is accusative singular: the thing as direct object."
      },
      {
        type: "choice",
        prompt: "What can \"rēs\" show?",
        choices: ["subject singular, subject plural, or direct object plural", "only direct object singular", "only of the things", "only by the thing"],
        correct: "subject singular, subject plural, or direct object plural",
        explanation: "Rēs can be nominative singular, nominative plural, or accusative plural."
      },
      {
        type: "choice",
        prompt: "Which form means “of the things”?",
        choices: ["rērum", "rēbus", "rem", "reī"],
        correct: "rērum",
        explanation: "Rērum is genitive plural: of the things."
      },
      {
        type: "choice",
        prompt: "What can \"rēbus\" show?",
        choices: ["to, for, by, with, or from the things", "of the thing", "the thing as direct object", "one thing as subject"],
        correct: "to, for, by, with, or from the things",
        explanation: "Rēbus is dative or ablative plural."
      }
    ]
  },
  {
    id: "lesson5-posuerunt",
    lessonSet: "lesson5",
    number: "IV",
    eyebrow: "Lesson 5 · Posuērunt",
    title: "They Placed Hope",
    subtitle: "Use posuērunt with in and the ablative.",
    color: "#3e9b77",
    reference: "Henle Lesson 5 · Posuērunt note",
    questions: [
      {
        type: "choice",
        prompt: "When \"posuērunt\" is modified by an \"in\" phrase, which case does \"in\" take?",
        choices: ["ablative", "accusative", "genitive", "nominative"],
        correct: "ablative",
        explanation: "In a posuērunt phrase, in takes the ablative: they placed hope in something."
      },
      {
        type: "choice",
        prompt: "Translate: \"spem in Deo posuērunt\".",
        choices: ["they placed hope in God", "they attacked God", "they came into God", "they saw hope"],
        correct: "they placed hope in God",
        explanation: "Spem is the direct object, and in Deo means in God."
      },
      {
        type: "choice",
        prompt: "In \"spem victoriae in virtūte posuērunt,\" what does \"spem\" do?",
        choices: ["direct object", "subject", "of victory", "by courage"],
        correct: "direct object",
        explanation: "Spem is accusative singular: they placed hope."
      },
      {
        type: "choice",
        prompt: "In \"in aciē erant,\" why is \"aciē\" ablative?",
        choices: ["because it means location in the battle line", "because it means motion into the battle line", "because aciēs is plural", "because erant takes a direct object"],
        correct: "because it means location in the battle line",
        explanation: "No-motion in takes the ablative."
      },
      {
        type: "build",
        prompt: "Build: The soldiers placed hope in courage.",
        tokens: ["spem", "virtūte", "posuērunt", "in", "Milites"],
        correct: "Milites spem in virtūte posuērunt",
        explanation: "Spem is the direct object; in virtūte uses the ablative after posuērunt."
      }
    ]
  },
  {
    id: "lesson5-wrap",
    lessonSet: "lesson5",
    number: "V",
    eyebrow: "Lesson 5 · Mastery",
    title: "Fifth Declension Wrap-Up",
    subtitle: "Mix rēs, fidēs, aciēs, spēs, and earlier Henle words.",
    color: "#c8912f",
    reference: "Henle Lesson 5 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"propter fidem\".",
        choices: ["on account of faith", "with faith", "of faith", "into faith"],
        correct: "on account of faith",
        explanation: "Propter takes the accusative; fidem is accusative singular."
      },
      {
        type: "choice",
        prompt: "Translate: \"post aciem\".",
        choices: ["after the battle line", "in the battle line", "of the battle line", "with the battle lines"],
        correct: "after the battle line",
        explanation: "Post takes the accusative; aciem is accusative singular."
      },
      {
        type: "choice",
        prompt: "Translate: \"In Christo est spēs mundi\".",
        choices: ["In Christ is the hope of the world", "Christ came into the world", "The world sees Christ", "Hope attacks the world"],
        correct: "In Christ is the hope of the world",
        explanation: "Spēs is the subject, and mundi means of the world."
      },
      {
        type: "choice",
        prompt: "Which form means “with the battle lines”?",
        choices: ["aciēbus", "aciem", "aciē", "aciēī"],
        correct: "aciēbus",
        explanation: "Aciēbus is ablative plural: with the battle lines."
      },
      {
        type: "build",
        prompt: "Build: The soldiers were in the battle line.",
        tokens: ["in", "erant", "aciē", "Milites"],
        correct: "Milites in aciē erant",
        explanation: "In aciē is location, so aciē is ablative singular."
      }
    ]
  },
  {
    id: "lesson6-special-plurals",
    lessonSet: "lesson6",
    number: "I",
    eyebrow: "Lesson 6 · Special plurals",
    title: "Plural Forms, Singular Meaning",
    subtitle: "Meet castra and impedimenta: plural-looking words with singular English meanings.",
    color: "#5b8fc9",
    reference: "Henle Lesson 6 · Special plural meanings",
    questions: [
      {
        type: "choice",
        prompt: "Which Latin word is plural in form but can mean one camp?",
        choices: ["castra", "porta", "spēs", "portus"],
        correct: "castra",
        explanation: "Castra is plural in form, but it is often translated as the singular English word camp."
      },
      {
        type: "choice",
        prompt: "What does \"impedimenta\" mean in Lesson 6?",
        choices: ["baggage or baggage train", "hope", "a gate", "a battle line"],
        correct: "baggage or baggage train",
        explanation: "Impedimenta is plural in form, but it names baggage or a baggage train."
      },
      {
        type: "choice",
        prompt: "What is unusual about \"castra\" and \"impedimenta\"?",
        choices: ["They are plural in Latin form but can have singular English meaning.", "They are first-declension feminine nouns.", "They never have a genitive form.", "They are verbs."],
        correct: "They are plural in Latin form but can have singular English meaning.",
        explanation: "Lesson 6 teaches that some Latin plurals need a singular-sounding English translation."
      },
      {
        type: "choice",
        prompt: "Which form means “of the camp”?",
        choices: ["castrorum", "castra", "castris", "castram"],
        correct: "castrorum",
        explanation: "Castrorum is genitive plural in form: of the camp."
      },
      {
        type: "build",
        prompt: "Build in Latin: The Romans see the camp.",
        tokens: ["castra", "Romani", "vident"],
        correct: "Romani castra vident",
        explanation: "Castra is the direct object, even though we translate it with the singular English word camp."
      }
    ]
  },
  {
    id: "lesson6-gratia-copia",
    lessonSet: "lesson6",
    number: "II",
    eyebrow: "Lesson 6 · Changed meanings",
    title: "One Word, Two Meanings",
    subtitle: "See how gratia and copia change meaning in the plural.",
    color: "#9a76b4",
    reference: "Henle Lesson 6 · Gratia and copia",
    questions: [
      {
        type: "choice",
        prompt: "What can \"gratia\" mean in the singular?",
        choices: ["favor, influence, or grace", "thanks", "troops", "baggage"],
        correct: "favor, influence, or grace",
        explanation: "In the singular, gratia can mean favor, influence, or grace."
      },
      {
        type: "choice",
        prompt: "What does \"gratiae\" mean when Lesson 6 is using the plural meaning?",
        choices: ["thanks", "one camp", "a supply", "a hill"],
        correct: "thanks",
        explanation: "Gratiae in the plural can mean thanks."
      },
      {
        type: "choice",
        prompt: "What can \"copia\" mean in the singular?",
        choices: ["abundance or supply", "troops or forces", "camp", "enemy"],
        correct: "abundance or supply",
        explanation: "Copia in the singular can mean abundance or supply."
      },
      {
        type: "choice",
        prompt: "What does \"copiae\" often mean in the plural?",
        choices: ["troops or forces", "one supply", "the sky", "peace"],
        correct: "troops or forces",
        explanation: "Copiae in the plural often means troops or forces."
      },
      {
        type: "build",
        prompt: "Build in Latin: The troops were in Gaul.",
        tokens: ["Gallia", "erant", "in", "Copiae"],
        correct: "Copiae in Gallia erant",
        explanation: "Copiae is the subject and means troops or forces."
      }
    ]
  },
  {
    id: "lesson6-verbs",
    lessonSet: "lesson6",
    number: "III",
    eyebrow: "Lesson 6 · Special phrases",
    title: "Pitched Camp, Gave Thanks",
    subtitle: "Practice the two little phrases that change the English translation.",
    color: "#de8465",
    reference: "Henle Lesson 6 · Posuērunt and gratias agunt",
    questions: [
      {
        type: "choice",
        prompt: "What does \"gratias agunt\" mean?",
        choices: ["they give thanks", "they see thanks", "they pitched camp", "they captured baggage"],
        correct: "they give thanks",
        explanation: "Agunt means give only in the phrase gratias agunt."
      },
      {
        type: "choice",
        prompt: "When does \"posuērunt\" mean “pitched”?",
        choices: ["when castra is its object", "whenever it has a genitive word after it", "only with gratias", "only when it is singular"],
        correct: "when castra is its object",
        explanation: "Castra posuērunt is the special phrase: they pitched camp."
      },
      {
        type: "choice",
        prompt: "Translate: \"castra posuērunt\".",
        choices: ["they pitched camp", "they gave thanks", "they saw the camp", "they captured baggage"],
        correct: "they pitched camp",
        explanation: "With castra, posuērunt is translated pitched."
      },
      {
        type: "choice",
        prompt: "In \"spem in Deo posuērunt,\" what does \"posuērunt\" mean?",
        choices: ["they placed", "they pitched", "they gave thanks", "they captured"],
        correct: "they placed",
        explanation: "Posuērunt means pitched only with castra. Here it means they placed hope in God."
      },
      {
        type: "build",
        prompt: "Build in Latin: The Romans pitched camp behind the hill.",
        tokens: ["post", "castra", "Romani", "posuērunt", "collem"],
        correct: "Romani castra post collem posuērunt",
        explanation: "Castra posuērunt means they pitched camp, and post collem means behind the hill."
      }
    ]
  },
  {
    id: "lesson6-reading",
    lessonSet: "lesson6",
    number: "IV",
    eyebrow: "Lesson 6 · Reading",
    title: "Read the Camp Sentences",
    subtitle: "Mix the new Lesson 6 words with earlier Henle forms.",
    color: "#3e9b77",
    reference: "Henle Lesson 6 · Reading practice",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Romani in castris erant\".",
        choices: ["The Romans were in camp.", "The Romans came into camp.", "The Romans gave thanks.", "The Romans saw the gate."],
        correct: "The Romans were in camp.",
        explanation: "In castris shows location: in camp."
      },
      {
        type: "choice",
        prompt: "Translate: \"Copiae Romanorum castra vident\".",
        choices: ["The troops of the Romans see the camp.", "The Romans see the supplies.", "The camp sees the Romans.", "The Romans give thanks."],
        correct: "The troops of the Romans see the camp.",
        explanation: "Copiae can mean troops, Romanorum means of the Romans, and castra is the camp as direct object."
      },
      {
        type: "choice",
        prompt: "What does \"cēpērunt\" mean?",
        choices: ["they captured", "they praised", "they placed", "they heard"],
        correct: "they captured",
        explanation: "Cēpērunt means they captured."
      },
      {
        type: "choice",
        prompt: "English says enemy as singular, but Latin often uses which plural form?",
        choices: ["hostes", "servus", "porta", "spēs"],
        correct: "hostes",
        explanation: "Hostes can be translated enemy or enemies depending on the English sense."
      },
      {
        type: "build",
        prompt: "Build in Latin: The enemies captured the baggage.",
        tokens: ["impedimenta", "Hostes", "cēpērunt"],
        correct: "Hostes impedimenta cēpērunt",
        explanation: "Hostes is the subject, impedimenta is the baggage, and cēpērunt means captured."
      }
    ]
  },
  {
    id: "lesson6-wrap",
    lessonSet: "lesson6",
    number: "V",
    eyebrow: "Lesson 6 · Mastery",
    title: "Special Plurals Wrap-Up",
    subtitle: "Use castra, impedimenta, gratia, copia, and gratias agunt in real Latin work.",
    color: "#c8912f",
    reference: "Henle Lesson 6 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Christiani Deo gratias agunt\".",
        choices: ["The Christians give thanks to God.", "The Christians see God.", "The Christians pitch camp for God.", "God gives rewards to Christians."],
        correct: "The Christians give thanks to God.",
        explanation: "Deo can mean to God, and gratias agunt means they give thanks."
      },
      {
        type: "choice",
        prompt: "Translate: \"gratia Dei\".",
        choices: ["the grace of God", "thanks to God", "the troops of God", "the camp of God"],
        correct: "the grace of God",
        explanation: "Gratia in the singular can mean grace, and Dei means of God."
      },
      {
        type: "choice",
        prompt: "Translate: \"copia rerum\".",
        choices: ["a supply of things", "the troops of the Romans", "thanks for things", "the camp of things"],
        correct: "a supply of things",
        explanation: "Copia in the singular means supply or abundance; rerum means of things."
      },
      {
        type: "choice",
        prompt: "In \"Copiae castra muniverunt,\" what does \"copiae\" mean?",
        choices: ["troops or forces", "one supply", "thanks", "baggage"],
        correct: "troops or forces",
        explanation: "Copiae in the plural often means troops or forces."
      },
      {
        type: "build",
        prompt: "Build in Latin: The Christians placed hope in the grace of God.",
        tokens: ["Christiani", "gratiā", "Dei", "in", "spem", "posuērunt"],
        correct: "Christiani spem in gratiā Dei posuērunt",
        explanation: "Spem is the direct object, and in gratiā Dei means in the grace of God."
      }
    ]
  },
  {
    id: "lesson7-magnus",
    lessonSet: "lesson7",
    number: "I",
    eyebrow: "Lesson 7 · Magnus",
    title: "The Magnus Pattern",
    subtitle: "Learn how -us, -a, -um adjectives use the noun endings you already know.",
    color: "#5b8fc9",
    reference: "Henle Lesson 7 · Adjectives of the first and second declensions",
    questions: [
      {
        type: "choice",
        prompt: "What three nominative forms does \"magnus, a, um\" give you?",
        choices: ["masculine, feminine, and neuter", "singular, plural, and genitive", "subject, verb, and object", "only masculine forms"],
        correct: "masculine, feminine, and neuter",
        explanation: "Adjectives have masculine, feminine, and neuter forms so they can agree with different nouns."
      },
      {
        type: "choice",
        prompt: "The masculine forms of \"magnus\" are declined like which noun?",
        choices: ["servus", "terra", "bellum", "rēs"],
        correct: "servus",
        explanation: "Magnus uses the servus pattern in the masculine."
      },
      {
        type: "choice",
        prompt: "The feminine forms of \"magna\" are declined like which noun?",
        choices: ["terra", "servus", "bellum", "portus"],
        correct: "terra",
        explanation: "Magna uses the terra pattern in the feminine."
      },
      {
        type: "choice",
        prompt: "The neuter forms of \"magnum\" are declined like which noun?",
        choices: ["bellum", "terra", "servus", "lex"],
        correct: "bellum",
        explanation: "Magnum uses the bellum pattern in the neuter."
      },
      {
        type: "build",
        prompt: "Build in Latin: The great war was in Gaul.",
        tokens: ["erat", "bellum", "Gallia", "Magnum", "in"],
        correct: "Magnum bellum in Gallia erat",
        explanation: "Bellum is neuter singular, so the adjective is magnum."
      }
    ]
  },
  {
    id: "lesson7-agreement",
    lessonSet: "lesson7",
    number: "II",
    eyebrow: "Lesson 7 · Agreement",
    title: "Adjectives Agree",
    subtitle: "Make adjectives match their nouns in gender, number, and case.",
    color: "#9a76b4",
    reference: "Henle Lesson 7 · Agreement of adjectives",
    questions: [
      {
        type: "choice",
        prompt: "Adjectives agree with their nouns in what three things?",
        choices: ["gender, number, and case", "person, tense, and voice", "subject, verb, and object", "stem, accent, and syllable"],
        correct: "gender, number, and case",
        explanation: "The adjective must match the noun's gender, number, and case."
      },
      {
        type: "choice",
        prompt: "Why is it \"magnam gentem\"?",
        choices: ["gentem is feminine accusative singular", "gens is masculine plural", "magnam is a verb", "gentem is neuter"],
        correct: "gentem is feminine accusative singular",
        explanation: "Gentem is feminine, accusative, and singular, so the adjective is magnam."
      },
      {
        type: "choice",
        prompt: "Translate: \"in fluminibus altis\".",
        choices: ["in the deep rivers", "into the deep river", "of the high mountain", "with the good men"],
        correct: "in the deep rivers",
        explanation: "Fluminibus is ablative plural, so altis agrees with it."
      },
      {
        type: "choice",
        prompt: "Which form means “good sailors” as the subject?",
        choices: ["nautae boni", "nautas bonos", "nauta bonus", "nautarum bonorum"],
        correct: "nautae boni",
        explanation: "Nauta names a male person, so boni is masculine plural even though nauta is first declension."
      },
      {
        type: "build",
        prompt: "Build in Latin: Good sailors praise God.",
        tokens: ["Deum", "boni", "laudant", "Nautae"],
        correct: "Nautae boni Deum laudant",
        explanation: "Nautae is masculine plural here, so the adjective is boni."
      }
    ]
  },
  {
    id: "lesson7-position",
    lessonSet: "lesson7",
    number: "III",
    eyebrow: "Lesson 7 · Position",
    title: "Where Adjectives Stand",
    subtitle: "Practice quantity adjectives before nouns and quality adjectives after nouns.",
    color: "#de8465",
    reference: "Henle Lesson 7 · Position of adjectives",
    questions: [
      {
        type: "choice",
        prompt: "Adjectives of quantity usually go where?",
        choices: ["before the noun", "after the noun", "always at the end of the sentence", "only before verbs"],
        correct: "before the noun",
        explanation: "Quantity adjectives like magnus, multus, longus, and altus generally come before their nouns."
      },
      {
        type: "choice",
        prompt: "Adjectives of quality usually go where?",
        choices: ["after the noun", "before the noun", "between preposition and noun only", "never beside a noun"],
        correct: "after the noun",
        explanation: "Quality adjectives like bonus and malus generally follow the noun."
      },
      {
        type: "choice",
        prompt: "Which phrase means “with many soldiers”?",
        choices: ["cum multis militibus", "cum militibus malis", "cum multos milites", "cum multa vulnera"],
        correct: "cum multis militibus",
        explanation: "Cum takes the ablative; multis agrees with militibus."
      },
      {
        type: "choice",
        prompt: "Which phrase means “bad laws”?",
        choices: ["leges malae", "malae legem", "legi mali", "legum malarum"],
        correct: "leges malae",
        explanation: "Leges is feminine plural, so malae agrees with it."
      },
      {
        type: "build",
        prompt: "Build in Latin: The long column came into the high mountains.",
        tokens: ["montes", "Longum", "altos", "agmen", "in", "vēnit"],
        correct: "Longum agmen in altos montes vēnit",
        explanation: "Longum agrees with agmen, and in altos montes shows motion into the mountains."
      }
    ]
  },
  {
    id: "lesson7-predicate",
    lessonSet: "lesson7",
    number: "IV",
    eyebrow: "Lesson 7 · Predicate adjectives",
    title: "God Is Good",
    subtitle: "Use adjectives after linking verbs like est, sunt, and erat.",
    color: "#3e9b77",
    reference: "Henle Lesson 7 · Predicate adjectives",
    questions: [
      {
        type: "choice",
        prompt: "In \"Deus est bonus,\" what kind of adjective is \"bonus\"?",
        choices: ["predicate adjective", "direct object", "genitive noun", "preposition"],
        correct: "predicate adjective",
        explanation: "Bonus is linked to Deus by est, so it is a predicate adjective."
      },
      {
        type: "choice",
        prompt: "Which sentence means “The laws were bad”?",
        choices: ["Leges erant malae.", "Leges erant mali.", "Legem erat malum.", "Lex erant mala."],
        correct: "Leges erant malae.",
        explanation: "Leges is feminine plural, so the predicate adjective is malae."
      },
      {
        type: "choice",
        prompt: "Which sentence means “The camp was Roman”?",
        choices: ["Castra erant Romana.", "Castra erat Romanus.", "Castrum erant Romani.", "Castra erant Romanorum."],
        correct: "Castra erant Romana.",
        explanation: "Castra is neuter plural, so Romana is neuter plural."
      },
      {
        type: "choice",
        prompt: "Translate: \"Milites sunt tuti\".",
        choices: ["The soldiers are safe.", "The soldiers are narrow.", "The soldiers are first.", "The soldiers are remaining."],
        correct: "The soldiers are safe.",
        explanation: "Tuti agrees with milites and means safe."
      },
      {
        type: "build",
        prompt: "Build in Latin: The way was narrow.",
        tokens: ["angusta", "Via", "erat"],
        correct: "Via erat angusta",
        explanation: "Via is feminine singular, so the predicate adjective is angusta."
      }
    ]
  },
  {
    id: "lesson7-pro",
    lessonSet: "lesson7",
    number: "V",
    eyebrow: "Lesson 7 · Pro",
    title: "In Front Of, On Behalf Of",
    subtitle: "Learn pro with the ablative and the new words dominus, murus, frumentum, and legio.",
    color: "#c8912f",
    reference: "Henle Lesson 7 · Use of pro",
    questions: [
      {
        type: "choice",
        prompt: "The preposition \"pro\" always takes which case?",
        choices: ["ablative", "accusative", "genitive", "nominative"],
        correct: "ablative",
        explanation: "Pro always takes the ablative."
      },
      {
        type: "choice",
        prompt: "What can \"pro\" mean in a place expression?",
        choices: ["in front of", "into", "because", "after"],
        correct: "in front of",
        explanation: "In a place expression, pro can mean in front of."
      },
      {
        type: "choice",
        prompt: "What can \"pro\" mean with persons?",
        choices: ["on behalf of", "into", "of", "not"],
        correct: "on behalf of",
        explanation: "With persons, pro often means on behalf of or for."
      },
      {
        type: "choice",
        prompt: "Translate: \"pro castris\".",
        choices: ["in front of the camp", "into the camp", "of the camp", "after the camp"],
        correct: "in front of the camp",
        explanation: "Pro takes the ablative, and castris can be ablative plural in form."
      },
      {
        type: "build",
        prompt: "Build in Latin: Mary prays for men.",
        tokens: ["pro", "orat", "Maria", "hominibus"],
        correct: "Maria pro hominibus orat",
        explanation: "Pro hominibus means for or on behalf of men."
      }
    ]
  },
  {
    id: "lesson7-wrap",
    lessonSet: "lesson7",
    number: "VI",
    eyebrow: "Lesson 7 · Mastery",
    title: "First and Second Adjective Wrap-Up",
    subtitle: "Mix adjective agreement, adjective position, predicate adjectives, and pro.",
    color: "#ce6f67",
    reference: "Henle Lesson 7 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Erat magna inopia frumenti in castris Romanis\".",
        choices: ["There was a great scarcity of grain in the Roman camp.", "The Romans praised much grain.", "The camp was full of brave soldiers.", "The great city was in Gaul."],
        correct: "There was a great scarcity of grain in the Roman camp.",
        explanation: "Magna agrees with inopia, frumenti means of grain, and Romanis agrees with castris."
      },
      {
        type: "choice",
        prompt: "Translate: \"Servi dominum bonum laudant\".",
        choices: ["The servants praise the good master.", "The good master praises the servants.", "The servants give grain to the master.", "The bad servants are safe."],
        correct: "The servants praise the good master.",
        explanation: "Dominum bonum is accusative singular: the good master as direct object."
      },
      {
        type: "choice",
        prompt: "In \"Legiones Romanae pro castris erant,\" what does \"Romanae\" do?",
        choices: ["It agrees with legiones.", "It is the direct object.", "It means of Rome.", "It modifies castris."],
        correct: "It agrees with legiones.",
        explanation: "Legiones is feminine plural, so Romanae agrees with it."
      },
      {
        type: "choice",
        prompt: "Which phrase means “the rest of the soldiers”?",
        choices: ["reliqui milites", "milites magni", "militum primorum", "multos milites"],
        correct: "reliqui milites",
        explanation: "Reliquus means remaining or the rest of."
      },
      {
        type: "build",
        prompt: "Build in Latin: The Roman legions were in front of the camp.",
        tokens: ["castris", "Legiones", "Romanae", "pro", "erant"],
        correct: "Legiones Romanae pro castris erant",
        explanation: "Romanae agrees with legiones, and pro castris means in front of the camp."
      }
    ]
  },
  {
    id: "lesson8-gravis",
    lessonSet: "lesson8",
    number: "I",
    eyebrow: "Lesson 8 · Gravis",
    title: "The Gravis Pattern",
    subtitle: "Learn third-declension adjectives like gravis, e.",
    color: "#5b8fc9",
    reference: "Henle Lesson 8 · Adjectives of the third declension",
    questions: [
      {
        type: "choice",
        prompt: "Most third-declension adjectives in Lesson 8 are declined like which word?",
        choices: ["gravis, e", "magnus, a, um", "terra, ae", "servus, i"],
        correct: "gravis, e",
        explanation: "Lesson 8 uses gravis, e as the model for many third-declension adjectives."
      },
      {
        type: "choice",
        prompt: "The ablative singular of gravis-type adjectives ends in what?",
        choices: ["-i", "-e", "-um", "-ae"],
        correct: "-i",
        explanation: "Gravis-type adjectives use -i in the ablative singular."
      },
      {
        type: "choice",
        prompt: "The neuter nominative and accusative plural of gravis-type adjectives ends in what?",
        choices: ["-ia", "-a", "-es", "-ibus"],
        correct: "-ia",
        explanation: "Neuter plural nominative and accusative forms end in -ia."
      },
      {
        type: "choice",
        prompt: "The genitive plural of gravis-type adjectives ends in what?",
        choices: ["-ium", "-um", "-orum", "-arum"],
        correct: "-ium",
        explanation: "The genitive plural ending is -ium."
      },
      {
        type: "build",
        prompt: "Build in Latin: The danger was serious.",
        tokens: ["grave", "Periculum", "erat"],
        correct: "Periculum erat grave",
        explanation: "Periculum is neuter singular, so the predicate adjective is grave."
      }
    ]
  },
  {
    id: "lesson8-vocabulary",
    lessonSet: "lesson8",
    number: "II",
    eyebrow: "Lesson 8 · Vocabulary",
    title: "Brave, Noble, Every",
    subtitle: "Practice the new third-declension adjectives.",
    color: "#9a76b4",
    reference: "Henle Lesson 8 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"fortis, e\" mean?",
        choices: ["brave or strong", "short", "common", "easy"],
        correct: "brave or strong",
        explanation: "Fortis means brave or strong."
      },
      {
        type: "choice",
        prompt: "What does \"omnis, e\" mean?",
        choices: ["all or every", "noble", "difficult", "heavy"],
        correct: "all or every",
        explanation: "Omnis means all or every."
      },
      {
        type: "choice",
        prompt: "Which adjective means difficult?",
        choices: ["difficilis", "facilis", "brevis", "communis"],
        correct: "difficilis",
        explanation: "Difficilis means difficult."
      },
      {
        type: "choice",
        prompt: "Which phrase means “serious wounds”?",
        choices: ["vulnera gravia", "vulnera graves", "vulnerum gravium", "vulnus gravis"],
        correct: "vulnera gravia",
        explanation: "Vulnera is neuter plural, so gravia agrees with it."
      },
      {
        type: "build",
        prompt: "Build in Latin: The brave soldiers were in the first battle line.",
        tokens: ["prima", "fortes", "erant", "Milites", "in", "aciē"],
        correct: "Milites fortes in prima aciē erant",
        explanation: "Fortes agrees with milites, and prima agrees with aciē."
      }
    ]
  },
  {
    id: "lesson8-governing",
    lessonSet: "lesson8",
    number: "III",
    eyebrow: "Lesson 8 · Case after adjectives",
    title: "Adjectives That Govern Cases",
    subtitle: "Learn which adjectives take genitive, dative, or ablative helpers.",
    color: "#de8465",
    reference: "Henle Lesson 8 · Adjectives governing cases",
    questions: [
      {
        type: "choice",
        prompt: "\"Cupidus\" takes which case?",
        choices: ["genitive", "dative", "ablative only", "accusative only"],
        correct: "genitive",
        explanation: "Cupidus takes the genitive: eager for or desirous of something."
      },
      {
        type: "choice",
        prompt: "\"Finitimus\" takes which case?",
        choices: ["dative", "genitive", "accusative", "nominative"],
        correct: "dative",
        explanation: "Finitimus takes the dative: next to or neighboring."
      },
      {
        type: "choice",
        prompt: "\"Plenus\" can take which case?",
        choices: ["genitive or ablative", "accusative only", "nominative only", "dative only"],
        correct: "genitive or ablative",
        explanation: "Plenus can take either the genitive or the ablative."
      },
      {
        type: "choice",
        prompt: "Translate: \"Galli gloriae cupidi erant\".",
        choices: ["The Gauls were eager for glory.", "The Gauls were full of soldiers.", "The Gauls were next to glory.", "The Gauls were like the Romans."],
        correct: "The Gauls were eager for glory.",
        explanation: "Gloriae is genitive because cupidus takes the genitive."
      },
      {
        type: "build",
        prompt: "Build in Latin: The province is next to the Gauls.",
        tokens: ["Gallis", "Provincia", "finitima", "est"],
        correct: "Provincia Gallis finitima est",
        explanation: "Finitima agrees with provincia, and Gallis is dative after finitima."
      }
    ]
  },
  {
    id: "lesson8-jesus",
    lessonSet: "lesson8",
    number: "IV",
    eyebrow: "Lesson 8 · Jēsus",
    title: "The Name of Jesus",
    subtitle: "Practice Jēsus, Jēsū, Jēsū, Jēsum, Jēsū and the new reading words.",
    color: "#3e9b77",
    reference: "Henle Lesson 8 · Declension of Jēsus",
    questions: [
      {
        type: "choice",
        prompt: "Which form means “of Jesus”?",
        choices: ["Jēsū", "Jēsus", "Jēsum", "Jēsī"],
        correct: "Jēsū",
        explanation: "The genitive form is Jēsū."
      },
      {
        type: "choice",
        prompt: "Which form means “Jesus” as a direct object?",
        choices: ["Jēsum", "Jēsū", "Jēsus", "Jēsibus"],
        correct: "Jēsum",
        explanation: "The accusative form is Jēsum."
      },
      {
        type: "choice",
        prompt: "What does \"et...et\" mean?",
        choices: ["both...and", "not...but", "because...therefore", "before...after"],
        correct: "both...and",
        explanation: "Et...et means both...and."
      },
      {
        type: "choice",
        prompt: "What does \"prima luce\" mean?",
        choices: ["at dawn", "with a first legion", "the common light", "before the bridge"],
        correct: "at dawn",
        explanation: "Prima luce literally means at the first light."
      },
      {
        type: "build",
        prompt: "Build in Latin: All things for Jesus.",
        tokens: ["pro", "Jēsū", "Omnia"],
        correct: "Omnia pro Jēsū",
        explanation: "Pro takes the ablative, so the form is Jēsū."
      }
    ]
  },
  {
    id: "lesson8-wrap",
    lessonSet: "lesson8",
    number: "V",
    eyebrow: "Lesson 8 · Mastery",
    title: "Third-Declension Adjective Wrap-Up",
    subtitle: "Mix gravis-type adjectives, governed cases, Jēsus, and the new reading words.",
    color: "#c8912f",
    reference: "Henle Lesson 8 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Nomen Jēsū est Sanctum Nomen\".",
        choices: ["The name of Jesus is the Holy Name.", "Jesus sees the holy name.", "The holy name is in the city.", "The Christians praise Mary."],
        correct: "The name of Jesus is the Holy Name.",
        explanation: "Jēsū means of Jesus, and Sanctum Nomen means Holy Name."
      },
      {
        type: "choice",
        prompt: "Translate: \"Quid vidētis?\"",
        choices: ["What do you see?", "What did they give?", "Who is brave?", "Why are they in the city?"],
        correct: "What do you see?",
        explanation: "Quid asks what, and vidētis means you see."
      },
      {
        type: "choice",
        prompt: "Which Latin word means bridge?",
        choices: ["pons", "urbs", "signum", "eques"],
        correct: "pons",
        explanation: "Pons, pontis means bridge."
      },
      {
        type: "choice",
        prompt: "What does \"urbs\" mean?",
        choices: ["city", "bridge", "horseman", "signal"],
        correct: "city",
        explanation: "Urbs, urbis means city."
      },
      {
        type: "build",
        prompt: "Build in Latin: The general gave the signal at dawn.",
        tokens: ["signum", "dedit", "Imperator", "prima", "luce"],
        correct: "Imperator signum prima luce dedit",
        explanation: "Signum is the direct object, and prima luce means at dawn."
      }
    ]
  },
  {
    id: "lesson9-verb-basics",
    lessonSet: "lesson9",
    number: "I",
    eyebrow: "Lesson 9 · Verbs",
    title: "Time, Person, and Number",
    subtitle: "Learn what verbs change to show: tense, person, and number.",
    color: "#5b8fc9",
    reference: "Henle Lesson 9 · Introduction to verbs",
    questions: [
      {
        type: "choice",
        prompt: "What is the kind of time expressed by a verb called?",
        choices: ["tense", "case", "gender", "declension"],
        correct: "tense",
        explanation: "Tense tells whether the action is present, past, or future."
      },
      {
        type: "choice",
        prompt: "Which verb form is first person singular?",
        choices: ["I praise", "you praise", "he praises", "they praise"],
        correct: "I praise",
        explanation: "First person singular means I."
      },
      {
        type: "choice",
        prompt: "Which verb form is third person plural?",
        choices: ["they praise", "he praises", "we praise", "you praise"],
        correct: "they praise",
        explanation: "Third person plural means they."
      },
      {
        type: "choice",
        prompt: "A finite verb agrees with its subject in what two things?",
        choices: ["person and number", "gender and case", "declension and case", "stem and accent"],
        correct: "person and number",
        explanation: "A finite verb agrees with its subject in person and number."
      },
      {
        type: "build",
        prompt: "Build in Latin: The Romans praise Caesar.",
        tokens: ["Caesarem", "Romani", "laudant"],
        correct: "Romani Caesarem laudant",
        explanation: "Romani is plural, so the verb is laudant."
      }
    ]
  },
  {
    id: "lesson9-principal-parts",
    lessonSet: "lesson9",
    number: "II",
    eyebrow: "Lesson 9 · Principal parts",
    title: "The First Conjugation",
    subtitle: "Meet laudō, laudāre, laudāvī, laudātus.",
    color: "#9a76b4",
    reference: "Henle Lesson 9 · Principal parts",
    questions: [
      {
        type: "choice",
        prompt: "How many principal parts does a regular Latin verb have?",
        choices: ["four", "two", "five", "ten"],
        correct: "four",
        explanation: "The four principal parts give the stems needed for the verb's forms."
      },
      {
        type: "choice",
        prompt: "Which present infinitive ending marks the first conjugation?",
        choices: ["-āre", "-ēre", "-ere", "-īre"],
        correct: "-āre",
        explanation: "First-conjugation verbs have a present infinitive ending in -āre."
      },
      {
        type: "choice",
        prompt: "What is the present stem of \"laudāre\"?",
        choices: ["laud-", "laudāre-", "laudāv-", "laus-"],
        correct: "laud-",
        explanation: "Drop -āre from laudāre to find the present stem: laud-."
      },
      {
        type: "choice",
        prompt: "Which verb belongs to the first conjugation?",
        choices: ["parāre", "monēre", "vidēre", "dicere"],
        correct: "parāre",
        explanation: "Parāre ends in -āre, so it belongs to the first conjugation."
      },
      {
        type: "build",
        prompt: "Build the principal parts: I praise, to praise, I praised, having been praised.",
        tokens: ["laudō", "laudāre", "laudātus", "laudāvī"],
        correct: "laudō laudāre laudāvī laudātus",
        explanation: "Those are the four principal parts of the model first-conjugation verb."
      }
    ]
  },
  {
    id: "lesson9-present",
    lessonSet: "lesson9",
    number: "III",
    eyebrow: "Lesson 9 · Present tense",
    title: "Present of Laudō",
    subtitle: "Practice I praise, you praise, he praises, and the plural forms.",
    color: "#de8465",
    reference: "Henle Lesson 9 · Present indicative active",
    questions: [
      {
        type: "choice",
        prompt: "What does \"laudō\" mean?",
        choices: ["I praise", "you praise", "they praise", "he praises"],
        correct: "I praise",
        explanation: "Laudō is first person singular: I praise."
      },
      {
        type: "choice",
        prompt: "What does \"laudās\" mean?",
        choices: ["you praise", "I praise", "we praise", "they praise"],
        correct: "you praise",
        explanation: "Laudās is second person singular: you praise."
      },
      {
        type: "choice",
        prompt: "What does \"laudāmus\" mean?",
        choices: ["we praise", "you all praise", "he praises", "I praise"],
        correct: "we praise",
        explanation: "Laudāmus is first person plural: we praise."
      },
      {
        type: "choice",
        prompt: "Which Latin form can mean “they are praising”?",
        choices: ["laudant", "laudat", "laudō", "laudās"],
        correct: "laudant",
        explanation: "One Latin present-tense form can mean praise, are praising, or do praise."
      },
      {
        type: "build",
        prompt: "Build in Latin: We praise peace.",
        tokens: ["pacem", "laudāmus"],
        correct: "pacem laudāmus",
        explanation: "Laudāmus means we praise, and pacem is peace as direct object."
      }
    ]
  },
  {
    id: "lesson9-imperfect",
    lessonSet: "lesson9",
    number: "IV",
    eyebrow: "Lesson 9 · Imperfect",
    title: "Was Praising",
    subtitle: "Learn the imperfect tense sign -ba-.",
    color: "#3e9b77",
    reference: "Henle Lesson 9 · Imperfect indicative active",
    questions: [
      {
        type: "choice",
        prompt: "What time does the imperfect tense show?",
        choices: ["action going on in past time", "action happening right now", "action that will happen", "a command"],
        correct: "action going on in past time",
        explanation: "The imperfect tense shows continuing or ongoing action in the past."
      },
      {
        type: "choice",
        prompt: "What is the imperfect tense sign in the first conjugation?",
        choices: ["-ba-", "-bi-", "-vī-", "-nt"],
        correct: "-ba-",
        explanation: "Laudābat contains the tense sign -ba-."
      },
      {
        type: "choice",
        prompt: "What does \"laudābam\" mean?",
        choices: ["I was praising", "we were praising", "they were praising", "I shall praise"],
        correct: "I was praising",
        explanation: "Laudābam is first person singular imperfect."
      },
      {
        type: "choice",
        prompt: "Which form means “they were fighting”?",
        choices: ["pugnābant", "pugnant", "pugnābit", "pugnō"],
        correct: "pugnābant",
        explanation: "Pugnābant has -ba- for imperfect and -nt for they."
      },
      {
        type: "build",
        prompt: "Build in Latin: The centurion was fighting in the first battle line.",
        tokens: ["Centurio", "aciē", "pugnābat", "prima", "in"],
        correct: "Centurio in prima aciē pugnābat",
        explanation: "Pugnābat means he was fighting; in prima aciē means in the first battle line."
      }
    ]
  },
  {
    id: "lesson9-future",
    lessonSet: "lesson9",
    number: "V",
    eyebrow: "Lesson 9 · Future",
    title: "Will Praise",
    subtitle: "Learn the future tense of first-conjugation verbs.",
    color: "#c8912f",
    reference: "Henle Lesson 9 · Future indicative active",
    questions: [
      {
        type: "choice",
        prompt: "What does the future tense express?",
        choices: ["action that will take place", "action going on in the past", "a noun's job", "a question word"],
        correct: "action that will take place",
        explanation: "Future tense points ahead: I shall praise, you will praise, they will praise."
      },
      {
        type: "choice",
        prompt: "What is the future tense sign in first-conjugation verbs?",
        choices: ["-bi-", "-ba-", "-vī-", "-is"],
        correct: "-bi-",
        explanation: "Most first-conjugation future forms use -bi-, as in laudābit."
      },
      {
        type: "choice",
        prompt: "What does \"laudābō\" mean?",
        choices: ["I shall praise", "I was praising", "they will praise", "you praise"],
        correct: "I shall praise",
        explanation: "Laudābō is first person singular future."
      },
      {
        type: "choice",
        prompt: "Which form means “they will carry”?",
        choices: ["portābunt", "portābant", "portant", "portō"],
        correct: "portābunt",
        explanation: "Portābunt is future plural: they will carry."
      },
      {
        type: "build",
        prompt: "Build in Latin: Caesar will call the soldiers into winter quarters.",
        tokens: ["milites", "Caesar", "hiberna", "vocābit", "in"],
        correct: "Caesar milites in hiberna vocābit",
        explanation: "Vocābit means he will call, and in hiberna shows motion into winter quarters."
      }
    ]
  },
  {
    id: "lesson9-questions",
    lessonSet: "lesson9",
    number: "VI",
    eyebrow: "Lesson 9 · Questions",
    title: "Who? What? Why? Where?",
    subtitle: "Use ubi, quis, quid, cur, and the question particle -ne.",
    color: "#ce6f67",
    reference: "Henle Lesson 9 · Questions and -ne",
    questions: [
      {
        type: "choice",
        prompt: "What does \"ubi\" mean?",
        choices: ["where?", "who?", "what?", "why?"],
        correct: "where?",
        explanation: "Ubi asks where."
      },
      {
        type: "choice",
        prompt: "What does \"quis\" mean?",
        choices: ["who?", "where?", "why?", "when?"],
        correct: "who?",
        explanation: "Quis asks who."
      },
      {
        type: "choice",
        prompt: "What does \"cur\" mean?",
        choices: ["why?", "what?", "where?", "who?"],
        correct: "why?",
        explanation: "Cur asks why."
      },
      {
        type: "choice",
        prompt: "What does the particle \"-ne\" do?",
        choices: ["turns a statement into a yes/no question", "makes a verb future", "makes a noun plural", "means because"],
        correct: "turns a statement into a yes/no question",
        explanation: "Add -ne to an emphatic word, often the verb, to ask a yes/no question."
      },
      {
        type: "build",
        prompt: "Build in Latin: Do you praise Caesar?",
        tokens: ["Caesarem", "Laudāsne"],
        correct: "Laudāsne Caesarem",
        explanation: "Laudāsne places -ne on the verb to make a yes/no question."
      }
    ]
  },
  {
    id: "lesson9-wrap",
    lessonSet: "lesson9",
    number: "VII",
    eyebrow: "Lesson 9 · Mastery",
    title: "First Conjugation Wrap-Up",
    subtitle: "Mix present, imperfect, future, verb agreement, and questions.",
    color: "#4e8a9f",
    reference: "Henle Lesson 9 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Omnēs Christiani Deum laudant\".",
        choices: ["All Christians praise God.", "God praises all Christians.", "All Christians were praising God.", "All Christians will praise God."],
        correct: "All Christians praise God.",
        explanation: "Laudant is present tense: they praise."
      },
      {
        type: "choice",
        prompt: "Translate: \"Rex malus bellum parābat\".",
        choices: ["The bad king was preparing war.", "The bad king will prepare war.", "The bad kings prepare war.", "The king praises war."],
        correct: "The bad king was preparing war.",
        explanation: "Parābat is imperfect: he was preparing."
      },
      {
        type: "choice",
        prompt: "Translate: \"Deus hominēs sanctōs in Caelum vocābit\".",
        choices: ["God will call holy men into Heaven.", "God was calling holy men from Heaven.", "Holy men call God into Heaven.", "God terrifies holy men."],
        correct: "God will call holy men into Heaven.",
        explanation: "Vocābit is future, and in Caelum shows motion into Heaven."
      },
      {
        type: "choice",
        prompt: "What does \"Pugnābantne Romani?\" ask?",
        choices: ["Were the Romans fighting?", "Will the Romans fight?", "Where were the Romans?", "Why do the Romans fight?"],
        correct: "Were the Romans fighting?",
        explanation: "Pugnābant is imperfect, and -ne makes it a yes/no question."
      },
      {
        type: "build",
        prompt: "Build in Latin: We praise peace, but we do not praise war.",
        tokens: ["bellum", "pacem", "non", "laudāmus", "laudāmus", "sed"],
        correct: "pacem laudāmus sed bellum non laudāmus",
        explanation: "Laudāmus means we praise. Non stands before the word it modifies."
      }
    ]
  },
  {
    id: "lesson10-second-conjugation",
    lessonSet: "lesson10",
    number: "I",
    eyebrow: "Lesson 10 · Moneō",
    title: "The Second Conjugation",
    subtitle: "Meet moneō, monēre, monuī, monitus.",
    color: "#5b8fc9",
    reference: "Henle Lesson 10 · Present, imperfect, and future of moneō",
    questions: [
      {
        type: "choice",
        prompt: "Which present infinitive ending marks the second conjugation?",
        choices: ["-ēre", "-āre", "-ere", "-īre"],
        correct: "-ēre",
        explanation: "Second-conjugation verbs have a long ē in the infinitive ending: -ēre."
      },
      {
        type: "choice",
        prompt: "What is the present stem of \"monēre\"?",
        choices: ["mon-", "mone-", "monēre-", "monu-"],
        correct: "mon-",
        explanation: "Drop -ēre from monēre to find the present stem: mon-."
      },
      {
        type: "choice",
        prompt: "What does \"moneō\" mean?",
        choices: ["I warn or advise", "I praise", "I carry", "I fight"],
        correct: "I warn or advise",
        explanation: "Moneō means I warn or advise."
      },
      {
        type: "choice",
        prompt: "Which verb means “to fear”?",
        choices: ["timēre", "terrēre", "habēre", "monēre"],
        correct: "timēre",
        explanation: "Timeō, timēre means fear."
      },
      {
        type: "build",
        prompt: "Build the principal parts: I warn, to warn, I warned, having been warned.",
        tokens: ["monēre", "monitus", "moneō", "monuī"],
        correct: "moneō monēre monuī monitus",
        explanation: "Those are the principal parts of the model second-conjugation verb."
      }
    ]
  },
  {
    id: "lesson10-present",
    lessonSet: "lesson10",
    number: "II",
    eyebrow: "Lesson 10 · Present",
    title: "Present of Moneō",
    subtitle: "Practice I warn, you warn, he warns, and the plural forms.",
    color: "#9a76b4",
    reference: "Henle Lesson 10 · Present tense",
    questions: [
      {
        type: "choice",
        prompt: "What does \"monēs\" mean?",
        choices: ["you warn", "I warn", "he warns", "they warn"],
        correct: "you warn",
        explanation: "Monēs is second person singular present."
      },
      {
        type: "choice",
        prompt: "What does \"monet\" mean?",
        choices: ["he, she, or it warns", "they warn", "we warn", "I warn"],
        correct: "he, she, or it warns",
        explanation: "Monet is third person singular present."
      },
      {
        type: "choice",
        prompt: "What does \"monēmus\" mean?",
        choices: ["we warn", "you all warn", "they warn", "he warns"],
        correct: "we warn",
        explanation: "Monēmus is first person plural present."
      },
      {
        type: "choice",
        prompt: "Which form means “they have”?",
        choices: ["habent", "habet", "habēbant", "habēbunt"],
        correct: "habent",
        explanation: "Habent is present plural: they have."
      },
      {
        type: "build",
        prompt: "Build in Latin: The centurion warns the leader.",
        tokens: ["ducem", "monet", "Centurio"],
        correct: "Centurio ducem monet",
        explanation: "Monet means he warns, and ducem is the leader as direct object."
      }
    ]
  },
  {
    id: "lesson10-imperfect-future",
    lessonSet: "lesson10",
    number: "III",
    eyebrow: "Lesson 10 · Imperfect and future",
    title: "Was Warning, Will Warn",
    subtitle: "Change first-conjugation -āba- and -ābi- into second-conjugation -ēba- and -ēbi-.",
    color: "#de8465",
    reference: "Henle Lesson 10 · Imperfect and future",
    questions: [
      {
        type: "choice",
        prompt: "What does \"monēbat\" mean?",
        choices: ["he was warning", "he will warn", "he warns", "they were warning"],
        correct: "he was warning",
        explanation: "Monēbat is imperfect: he was warning."
      },
      {
        type: "choice",
        prompt: "What does \"monēbit\" mean?",
        choices: ["he will warn", "he was warning", "he warns", "I shall warn"],
        correct: "he will warn",
        explanation: "Monēbit is future: he will warn."
      },
      {
        type: "choice",
        prompt: "Which form means “they were fearing”?",
        choices: ["timēbant", "timent", "timēbunt", "timēs"],
        correct: "timēbant",
        explanation: "Timēbant has the imperfect sign -ba- and the plural sign -nt."
      },
      {
        type: "choice",
        prompt: "Which form means “we shall fear”?",
        choices: ["timēbimus", "timēbamus", "timēmus", "timēbitis"],
        correct: "timēbimus",
        explanation: "Timēbimus is first person plural future."
      },
      {
        type: "build",
        prompt: "Build in Latin: The shout of the enemy was terrifying the soldiers.",
        tokens: ["milites", "terrēbat", "Clamor", "hostium"],
        correct: "Clamor hostium milites terrēbat",
        explanation: "Terrēbat means was terrifying, and milites is the direct object."
      }
    ]
  },
  {
    id: "lesson10-vocabulary",
    lessonSet: "lesson10",
    number: "IV",
    eyebrow: "Lesson 10 · Vocabulary",
    title: "Warn, Fear, Terrify, Have",
    subtitle: "Practice the new second-conjugation verbs and arma.",
    color: "#3e9b77",
    reference: "Henle Lesson 10 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"terreō\" mean?",
        choices: ["I terrify", "I fear", "I have", "I call"],
        correct: "I terrify",
        explanation: "Terreō means I terrify."
      },
      {
        type: "choice",
        prompt: "What does \"timeō\" mean?",
        choices: ["I fear", "I terrify", "I warn", "I seize"],
        correct: "I fear",
        explanation: "Timeō means I fear."
      },
      {
        type: "choice",
        prompt: "What does \"habeō\" mean?",
        choices: ["I have", "I warn", "I prepare", "I fight"],
        correct: "I have",
        explanation: "Habeō means I have."
      },
      {
        type: "choice",
        prompt: "What does \"arma\" mean?",
        choices: ["arms or weapons", "winter quarters", "city", "death"],
        correct: "arms or weapons",
        explanation: "Arma is a neuter plural word meaning arms or weapons."
      },
      {
        type: "build",
        prompt: "Build in Latin: Many tribes do not have arms.",
        tokens: ["habent", "arma", "Multae", "non", "gentes"],
        correct: "Multae gentes arma non habent",
        explanation: "Habent means they have, and non stands before it."
      }
    ]
  },
  {
    id: "lesson10-wrap",
    lessonSet: "lesson10",
    number: "V",
    eyebrow: "Lesson 10 · Mastery",
    title: "Second Conjugation Wrap-Up",
    subtitle: "Mix moneō, timeō, terreō, habeō with earlier Henle grammar.",
    color: "#c8912f",
    reference: "Henle Lesson 10 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Omnēs hominēs rēs difficilēs timent\".",
        choices: ["All men fear difficult things.", "All men terrify difficult things.", "Difficult things fear all men.", "All men carry difficult things."],
        correct: "All men fear difficult things.",
        explanation: "Timent means they fear, and rēs difficilēs means difficult things."
      },
      {
        type: "choice",
        prompt: "Translate: \"Propter rem gravem centurionēs imperatorem monēbunt\".",
        choices: ["Because of a serious matter, the centurions will warn the general.", "The general will terrify the centurions.", "The centurions were praising a serious matter.", "The general fears the centurions."],
        correct: "Because of a serious matter, the centurions will warn the general.",
        explanation: "Monēbunt means they will warn; imperatorem is the direct object."
      },
      {
        type: "choice",
        prompt: "Translate: \"Populus Romanus pericula gravia non timēbat\".",
        choices: ["The Roman people were not fearing serious dangers.", "The Romans will not have arms.", "The Roman people warned the general.", "Serious dangers terrified the Romans."],
        correct: "The Roman people were not fearing serious dangers.",
        explanation: "Timēbat is imperfect: he/she/it was fearing."
      },
      {
        type: "choice",
        prompt: "Which form means “you all will warn”?",
        choices: ["monēbitis", "monēbatis", "monētis", "monent"],
        correct: "monēbitis",
        explanation: "Monēbitis is second person plural future."
      },
      {
        type: "build",
        prompt: "Build in Latin: The enemy will terrify the people.",
        tokens: ["populum", "terrēbunt", "Hostes"],
        correct: "Hostes populum terrēbunt",
        explanation: "Terrēbunt means they will terrify, and populum is the direct object."
      }
    ]
  },
  {
    id: "lesson11-first-person",
    lessonSet: "lesson11",
    number: "I",
    eyebrow: "Lesson 11 · First person",
    title: "Ego and Nōs",
    subtitle: "Learn the pronouns for I, me, we, and us.",
    color: "#5b8fc9",
    reference: "Henle Lesson 11 · Pronouns of the first person",
    questions: [
      {
        type: "choice",
        prompt: "Which Latin pronoun means “I”?",
        choices: ["ego", "tū", "is", "sē"],
        correct: "ego",
        explanation: "Ego is the nominative singular first-person pronoun: I."
      },
      {
        type: "choice",
        prompt: "What does \"nōs\" mean as a subject?",
        choices: ["we", "you all", "they", "me"],
        correct: "we",
        explanation: "Nōs can mean we as the subject."
      },
      {
        type: "choice",
        prompt: "Which form means “to me” or “for me”?",
        choices: ["mihi", "meī", "mē", "nōbīs"],
        correct: "mihi",
        explanation: "Mihi is the dative singular: to me or for me."
      },
      {
        type: "choice",
        prompt: "Which form means “to us” or “for us”?",
        choices: ["nōbīs", "nōs", "meī", "mē"],
        correct: "nōbīs",
        explanation: "Nōbīs is the dative plural: to us or for us."
      },
      {
        type: "build",
        prompt: "Build in Latin: Caesar sees us.",
        tokens: ["videt", "Caesar", "nōs"],
        correct: "Caesar nōs videt",
        explanation: "Nōs can also be accusative: us as the direct object."
      }
    ]
  },
  {
    id: "lesson11-second-person",
    lessonSet: "lesson11",
    number: "II",
    eyebrow: "Lesson 11 · Second person",
    title: "Tū and Vōs",
    subtitle: "Keep singular you and plural you separate in Latin.",
    color: "#9a76b4",
    reference: "Henle Lesson 11 · Pronouns of the second person",
    questions: [
      {
        type: "choice",
        prompt: "Which Latin form means “you” when speaking to one person as the subject?",
        choices: ["tū", "vōs", "ego", "nōs"],
        correct: "tū",
        explanation: "Tū is nominative singular: you as the subject."
      },
      {
        type: "choice",
        prompt: "Which Latin form means “you all” as the subject?",
        choices: ["vōs", "tē", "tibi", "mihi"],
        correct: "vōs",
        explanation: "Vōs is nominative plural: you all."
      },
      {
        type: "choice",
        prompt: "Which form means “to you” or “for you” when speaking to one person?",
        choices: ["tibi", "tū", "vōbīs", "vōs"],
        correct: "tibi",
        explanation: "Tibi is dative singular: to you or for you."
      },
      {
        type: "choice",
        prompt: "Which form means “with you all”?",
        choices: ["vōbīs", "tē", "tuī", "vōs"],
        correct: "vōbīs",
        explanation: "Vōbīs can be ablative plural: with you all."
      },
      {
        type: "build",
        prompt: "Build in Latin: The Lord is with you.",
        tokens: ["est", "Dominus", "tēcum"],
        correct: "Dominus tēcum est",
        explanation: "Tēcum means with you when speaking to one person."
      }
    ]
  },
  {
    id: "lesson11-third-person",
    lessonSet: "lesson11",
    number: "III",
    eyebrow: "Lesson 11 · Third person",
    title: "Is, Ea, Id",
    subtitle: "Use he, she, it, they, and those with Latin gender and number.",
    color: "#de8465",
    reference: "Henle Lesson 11 · Pronouns of the third person",
    questions: [
      {
        type: "choice",
        prompt: "When used as a personal pronoun, what can \"is\" mean?",
        choices: ["he or it", "I", "you all", "ourselves"],
        correct: "he or it",
        explanation: "A masculine Latin pronoun may be translated he or it, depending on what it refers to."
      },
      {
        type: "choice",
        prompt: "Which form means “her” as a direct object?",
        choices: ["eam", "ea", "eius", "eī"],
        correct: "eam",
        explanation: "Eam is feminine accusative singular: her as direct object."
      },
      {
        type: "choice",
        prompt: "Which form means “of him,” “of her,” or “of it”?",
        choices: ["eius", "eī", "eum", "eō"],
        correct: "eius",
        explanation: "Eius is the genitive singular for masculine, feminine, and neuter."
      },
      {
        type: "choice",
        prompt: "A Latin pronoun must agree with the word it refers to in what?",
        choices: ["gender and number", "tense and person", "accent and syllable", "conjugation and voice"],
        correct: "gender and number",
        explanation: "Pronouns agree with their antecedents in gender and number."
      },
      {
        type: "build",
        prompt: "Build in Latin: Caesar sees the army and fears it.",
        tokens: ["et", "exercitum", "eum", "timet", "Caesar", "videt"],
        correct: "Caesar exercitum videt et eum timet",
        explanation: "Exercitum is masculine, so the pronoun is eum even when English says it."
      }
    ]
  },
  {
    id: "lesson11-reflexive",
    lessonSet: "lesson11",
    number: "IV",
    eyebrow: "Lesson 11 · Reflexive",
    title: "Back to the Subject",
    subtitle: "Learn direct reflexive pronouns: myself, yourself, himself, and themselves.",
    color: "#3e9b77",
    reference: "Henle Lesson 11 · Direct reflexive pronouns",
    questions: [
      {
        type: "choice",
        prompt: "What is a direct reflexive pronoun?",
        choices: ["a pronoun that refers back to the subject", "a pronoun that always names a place", "a pronoun that makes a verb future", "a pronoun that only means we"],
        correct: "a pronoun that refers back to the subject",
        explanation: "A reflexive pronoun points back to the subject of its own clause."
      },
      {
        type: "choice",
        prompt: "What does \"sē\" mean?",
        choices: ["himself, herself, itself, or themselves", "I", "you all", "of us"],
        correct: "himself, herself, itself, or themselves",
        explanation: "Sē is the accusative or ablative of the third-person reflexive pronoun."
      },
      {
        type: "choice",
        prompt: "Translate: \"Caesar sē laudābat.\"",
        choices: ["Caesar was praising himself.", "Caesar was praising him.", "Caesar praises us.", "Caesar will praise himself."],
        correct: "Caesar was praising himself.",
        explanation: "Sē refers back to Caesar, the subject."
      },
      {
        type: "choice",
        prompt: "Translate: \"Eī sē defendunt.\"",
        choices: ["They defend themselves.", "They defend him.", "He defends them.", "We defend ourselves."],
        correct: "They defend themselves.",
        explanation: "Sē can be singular or plural depending on the subject."
      },
      {
        type: "build",
        prompt: "Build in Latin: We pray for ourselves.",
        tokens: ["nōbīs", "ōrāmus", "pro"],
        correct: "pro nōbīs ōrāmus",
        explanation: "For first and second person reflexives, Latin uses the regular oblique pronoun forms."
      }
    ]
  },
  {
    id: "lesson11-vocabulary",
    lessonSet: "lesson11",
    number: "V",
    eyebrow: "Lesson 11 · Vocabulary",
    title: "See, Hold, Move, Withstand",
    subtitle: "Practice the new pronouns, second-conjugation verbs, and small connector words.",
    color: "#c8912f",
    reference: "Henle Lesson 11 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"videō, vidēre, vīdī, vīsus\" mean?",
        choices: ["see", "hold", "move", "withstand"],
        correct: "see",
        explanation: "Videō means I see; its principal parts should be memorized."
      },
      {
        type: "choice",
        prompt: "What does \"saepe\" mean?",
        choices: ["often", "nevertheless", "also", "there"],
        correct: "often",
        explanation: "Saepe is an adverb meaning often."
      },
      {
        type: "choice",
        prompt: "What does \"teneō\" mean?",
        choices: ["I hold", "I move", "I fear", "I send"],
        correct: "I hold",
        explanation: "Teneō, tenēre means hold."
      },
      {
        type: "choice",
        prompt: "What does \"moveō\" mean?",
        choices: ["I move", "I see", "I warn", "I defend"],
        correct: "I move",
        explanation: "Moveō, movēre means move."
      },
      {
        type: "choice",
        prompt: "What does \"neque\" mean?",
        choices: ["and not, nor", "often", "there", "why"],
        correct: "and not, nor",
        explanation: "Neque joins a negative idea: and not, nor."
      }
    ]
  },
  {
    id: "lesson11-wrap",
    lessonSet: "lesson11",
    number: "VI",
    eyebrow: "Lesson 11 · Mastery",
    title: "Pronoun Wrap-Up",
    subtitle: "Mix personal pronouns, reflexives, and earlier Henle sentences.",
    color: "#4e8a9f",
    reference: "Henle Lesson 11 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Mihi praemium dabit.\"",
        choices: ["He will give a reward to me.", "I will give a reward to him.", "They gave rewards to us.", "You will hold the reward."],
        correct: "He will give a reward to me.",
        explanation: "Mihi means to me, and dabit means he will give."
      },
      {
        type: "choice",
        prompt: "Translate: \"Tē non timēmus.\"",
        choices: ["We do not fear you.", "You do not fear us.", "They do not fear themselves.", "I do not fear him."],
        correct: "We do not fear you.",
        explanation: "Tē is singular you as the direct object."
      },
      {
        type: "choice",
        prompt: "Translate: \"Eōs semper laudāmus.\"",
        choices: ["We always praise them.", "They always praise us.", "We always praise him.", "You all always praise them."],
        correct: "We always praise them.",
        explanation: "Eōs is masculine plural direct object: them."
      },
      {
        type: "choice",
        prompt: "Translate: \"Gladius nōs non terret.\"",
        choices: ["The sword does not terrify us.", "We do not terrify the sword.", "The sword will not move you.", "They do not hold the sword."],
        correct: "The sword does not terrify us.",
        explanation: "Nōs is the direct object, and terret means terrifies."
      },
      {
        type: "build",
        prompt: "Build in Latin: The Christians pray for you all.",
        tokens: ["vōbīs", "Christiani", "pro", "ōrant"],
        correct: "Christiani pro vōbīs ōrant",
        explanation: "Pro vōbīs means for you all."
      }
    ]
  },
  {
    id: "lesson12-third-conjugation",
    lessonSet: "lesson12",
    number: "I",
    eyebrow: "Lesson 12 · Third conjugation",
    title: "The Short-E Conjugation",
    subtitle: "Learn how third-conjugation verbs differ from the first two.",
    color: "#5b8fc9",
    reference: "Henle Lesson 12 · Principal parts of the third conjugation",
    questions: [
      {
        type: "choice",
        prompt: "Which present infinitive ending marks the third conjugation?",
        choices: ["-ere with short e", "-ēre with long ē", "-āre", "-īre"],
        correct: "-ere with short e",
        explanation: "Third-conjugation infinitives end in -ere with a short e."
      },
      {
        type: "choice",
        prompt: "How are the principal parts of third-conjugation verbs usually learned?",
        choices: ["by memorizing them from the vocabulary", "by always adding -āvī and -ātus", "by using first-declension endings", "by changing all a's to e's"],
        correct: "by memorizing them from the vocabulary",
        explanation: "Henle says third-conjugation principal parts must be memorized from the vocabularies."
      },
      {
        type: "choice",
        prompt: "Which verb belongs to the third conjugation?",
        choices: ["mittere", "monēre", "laudāre", "ōrāre"],
        correct: "mittere",
        explanation: "Mittere ends in short -ere, so it is third conjugation."
      },
      {
        type: "choice",
        prompt: "Which verb belongs to the second conjugation?",
        choices: ["monēre", "mittere", "dūcere", "gerere"],
        correct: "monēre",
        explanation: "Monēre has long -ēre, so it is second conjugation."
      },
      {
        type: "build",
        prompt: "Build the principal parts: I send, to send, I sent, having been sent.",
        tokens: ["mīsī", "mittō", "missus", "mittere"],
        correct: "mittō mittere mīsī missus",
        explanation: "Those are the principal parts of the model third-conjugation verb."
      }
    ]
  },
  {
    id: "lesson12-present",
    lessonSet: "lesson12",
    number: "II",
    eyebrow: "Lesson 12 · Present",
    title: "Present of Mittō",
    subtitle: "Practice mittō, mittis, mittit, mittimus, mittitis, mittunt.",
    color: "#9a76b4",
    reference: "Henle Lesson 12 · Present indicative active of mittō",
    questions: [
      {
        type: "choice",
        prompt: "What does \"mittō\" mean?",
        choices: ["I send", "you send", "they send", "he sends"],
        correct: "I send",
        explanation: "Mittō is first person singular present."
      },
      {
        type: "choice",
        prompt: "What does \"mittis\" mean?",
        choices: ["you send", "I send", "we send", "they send"],
        correct: "you send",
        explanation: "Mittis is second person singular present."
      },
      {
        type: "choice",
        prompt: "Which form means “they send”?",
        choices: ["mittunt", "mittit", "mittitis", "mittimus"],
        correct: "mittunt",
        explanation: "The third person plural of third-conjugation present verbs has u: mittunt."
      },
      {
        type: "choice",
        prompt: "What does \"dūcit\" mean?",
        choices: ["he leads", "they lead", "he sends", "we defend"],
        correct: "he leads",
        explanation: "Dūcō, dūcere means lead or guide; dūcit means he leads."
      },
      {
        type: "build",
        prompt: "Build in Latin: The servant sends a letter.",
        tokens: ["mittit", "litterās", "Servus"],
        correct: "Servus litterās mittit",
        explanation: "Mittit means he sends, and litterās is the direct object."
      }
    ]
  },
  {
    id: "lesson12-present-vocabulary",
    lessonSet: "lesson12",
    number: "III",
    eyebrow: "Lesson 12 · Vocabulary",
    title: "Lead, Wage, Defend, Draw Up",
    subtitle: "Practice the first group of third-conjugation vocabulary.",
    color: "#de8465",
    reference: "Henle Lesson 12 · Present vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"dūcō\" mean?",
        choices: ["I lead or guide", "I send", "I defend", "I put"],
        correct: "I lead or guide",
        explanation: "Dūcō means I lead or guide."
      },
      {
        type: "choice",
        prompt: "With \"bellum,\" what does \"gerō\" mean?",
        choices: ["I wage", "I fear", "I hold", "I see"],
        correct: "I wage",
        explanation: "Bellum gerere means to wage or carry on war."
      },
      {
        type: "choice",
        prompt: "What does \"defendō\" mean?",
        choices: ["I defend", "I move", "I praise", "I have"],
        correct: "I defend",
        explanation: "Defendō, defendere means defend."
      },
      {
        type: "choice",
        prompt: "What does \"īnstruō\" mean?",
        choices: ["I draw up or equip", "I conquer", "I ask", "I call"],
        correct: "I draw up or equip",
        explanation: "Īnstruō can mean draw up or equip."
      },
      {
        type: "choice",
        prompt: "What does \"fortiter\" mean?",
        choices: ["bravely or strongly", "often", "there", "nevertheless"],
        correct: "bravely or strongly",
        explanation: "Fortiter is an adverb from fortis."
      }
    ]
  },
  {
    id: "lesson12-imperfect",
    lessonSet: "lesson12",
    number: "IV",
    eyebrow: "Lesson 12 · Imperfect",
    title: "Was Sending",
    subtitle: "Use the same imperfect pattern as the second conjugation.",
    color: "#3e9b77",
    reference: "Henle Lesson 12 · Imperfect indicative active of mittō",
    questions: [
      {
        type: "choice",
        prompt: "What does \"mittēbam\" mean?",
        choices: ["I was sending", "I shall send", "they send", "you send"],
        correct: "I was sending",
        explanation: "Mittēbam is first person singular imperfect."
      },
      {
        type: "choice",
        prompt: "Which form means “they were sending”?",
        choices: ["mittēbant", "mittunt", "mittent", "mittit"],
        correct: "mittēbant",
        explanation: "Mittēbant is imperfect plural: they were sending."
      },
      {
        type: "choice",
        prompt: "What does \"vincō\" mean?",
        choices: ["I conquer", "I send", "I draw up", "I put"],
        correct: "I conquer",
        explanation: "Vincō, vincere means conquer."
      },
      {
        type: "choice",
        prompt: "What can \"petō\" mean?",
        choices: ["I seek, beg, or request", "I hold", "I see", "I terrify"],
        correct: "I seek, beg, or request",
        explanation: "Petō can mean seek, beg, or request."
      },
      {
        type: "build",
        prompt: "Build in Latin: We were seeking grain.",
        tokens: ["frumentum", "petēbāmus"],
        correct: "frumentum petēbāmus",
        explanation: "Petēbāmus means we were seeking."
      }
    ]
  },
  {
    id: "lesson12-future",
    lessonSet: "lesson12",
    number: "V",
    eyebrow: "Lesson 12 · Future",
    title: "Will Send",
    subtitle: "Learn the third-conjugation future: mittam, mittēs, mittet.",
    color: "#c8912f",
    reference: "Henle Lesson 12 · Future indicative active of mittō",
    questions: [
      {
        type: "choice",
        prompt: "What does \"mittam\" mean?",
        choices: ["I shall send", "I was sending", "they send", "you send"],
        correct: "I shall send",
        explanation: "Mittam is first person singular future."
      },
      {
        type: "choice",
        prompt: "Which form means “they will send”?",
        choices: ["mittent", "mittunt", "mittēbant", "mittitis"],
        correct: "mittent",
        explanation: "Mittent is third person plural future."
      },
      {
        type: "choice",
        prompt: "How is the third-conjugation future different from the first and second?",
        choices: ["it has no -bi- tense sign", "it always has -ābi-", "it has no personal signs", "it is always passive"],
        correct: "it has no -bi- tense sign",
        explanation: "Henle notes that the third-conjugation future has no tense sign; the vowel changes."
      },
      {
        type: "choice",
        prompt: "What does \"ibi\" mean?",
        choices: ["there", "often", "also", "for"],
        correct: "there",
        explanation: "Ibi is an adverb meaning there."
      },
      {
        type: "build",
        prompt: "Build in Latin: We shall pitch camp there.",
        tokens: ["castra", "ibi", "pōnēmus"],
        correct: "castra ibi pōnēmus",
        explanation: "Pōnēmus means we shall put or place; with castra it can mean we shall pitch camp."
      }
    ]
  },
  {
    id: "lesson12-wrap",
    lessonSet: "lesson12",
    number: "VI",
    eyebrow: "Lesson 12 · Mastery",
    title: "Third Conjugation Wrap-Up",
    subtitle: "Mix mittō, dūcō, gerō, defendō, vincō, petō, pellō, pōnō, agō, and contendō.",
    color: "#4e8a9f",
    reference: "Henle Lesson 12 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Rōmānī rem fortiter gerunt.\"",
        choices: ["The Romans carry on the matter bravely.", "The Romans fear the matter.", "The Romans will send the matter.", "The Romans were holding the matter."],
        correct: "The Romans carry on the matter bravely.",
        explanation: "Gerunt means they carry on, and fortiter means bravely."
      },
      {
        type: "choice",
        prompt: "Translate: \"Hostēs sē defendunt.\"",
        choices: ["The enemies defend themselves.", "The enemies send him.", "He defends the enemies.", "We defend ourselves."],
        correct: "The enemies defend themselves.",
        explanation: "Defendunt means they defend, and sē points back to the subject."
      },
      {
        type: "choice",
        prompt: "Translate: \"Litterās dē multis rēbus mittēmus.\"",
        choices: ["We shall send letters about many things.", "We were sending many things.", "They send letters to us.", "You all will put letters there."],
        correct: "We shall send letters about many things.",
        explanation: "Mittēmus means we shall send, and dē with the ablative can mean about."
      },
      {
        type: "choice",
        prompt: "Which form means “you all will send”?",
        choices: ["mittētis", "mittitis", "mittēbatis", "mittunt"],
        correct: "mittētis",
        explanation: "Mittētis is second person plural future."
      },
      {
        type: "build",
        prompt: "Build in Latin: Caesar leads the army into the territory of the enemy.",
        tokens: ["exercitum", "hostium", "dūcit", "in", "Caesar", "fīnēs"],
        correct: "Caesar exercitum in fīnēs hostium dūcit",
        explanation: "Dūcit means he leads, and in fīnēs shows motion into the territory."
      }
    ]
  },
  {
    id: "lesson13-fourth-conjugation",
    lessonSet: "lesson13",
    number: "I",
    eyebrow: "Lesson 13 · Fourth conjugation",
    title: "The Ī Conjugation",
    subtitle: "Meet audiō, audīre, audīvī, audītus.",
    color: "#5b8fc9",
    reference: "Henle Lesson 13 · Present system active of the fourth conjugation",
    questions: [
      {
        type: "choice",
        prompt: "Which present infinitive ending marks the fourth conjugation?",
        choices: ["-īre", "-ere", "-ēre", "-āre"],
        correct: "-īre",
        explanation: "Fourth-conjugation infinitives end in long -īre."
      },
      {
        type: "choice",
        prompt: "What does \"audiō\" mean?",
        choices: ["I hear", "I send", "I warn", "I hold"],
        correct: "I hear",
        explanation: "Audiō is the model fourth-conjugation verb: I hear."
      },
      {
        type: "choice",
        prompt: "How do regular fourth-conjugation verbs form their principal parts?",
        choices: ["drop -iō and add -īre, -īvī, -ītus", "drop -ō and add -āvī, -ātus", "use the genitive singular", "add -ba- to the noun stem"],
        correct: "drop -iō and add -īre, -īvī, -ītus",
        explanation: "The regular pattern is audiō, audīre, audīvī, audītus."
      },
      {
        type: "choice",
        prompt: "Which verb belongs to the fourth conjugation?",
        choices: ["audīre", "mittere", "monēre", "laudāre"],
        correct: "audīre",
        explanation: "Audīre has the fourth-conjugation infinitive ending -īre."
      },
      {
        type: "build",
        prompt: "Build the principal parts: I hear, to hear, I heard, having been heard.",
        tokens: ["audīre", "audītus", "audiō", "audīvī"],
        correct: "audiō audīre audīvī audītus",
        explanation: "Those are the regular principal parts of audiō."
      }
    ]
  },
  {
    id: "lesson13-present",
    lessonSet: "lesson13",
    number: "II",
    eyebrow: "Lesson 13 · Present",
    title: "Present of Audiō",
    subtitle: "Practice audiō, audīs, audit, audīmus, audītis, audiunt.",
    color: "#9a76b4",
    reference: "Henle Lesson 13 · Present tense",
    questions: [
      {
        type: "choice",
        prompt: "What does \"audīs\" mean?",
        choices: ["you hear", "I hear", "we hear", "they hear"],
        correct: "you hear",
        explanation: "Audīs is second person singular present."
      },
      {
        type: "choice",
        prompt: "Which form means “they hear”?",
        choices: ["audiunt", "audit", "audītis", "audīmus"],
        correct: "audiunt",
        explanation: "Fourth-conjugation present third plural has -iunt."
      },
      {
        type: "choice",
        prompt: "What does \"mūniunt\" mean?",
        choices: ["they fortify or construct", "they hear", "they come", "they assemble"],
        correct: "they fortify or construct",
        explanation: "Mūniō can mean fortify, or construct when used with roads."
      },
      {
        type: "choice",
        prompt: "What does \"veniunt\" mean?",
        choices: ["they come", "they hear", "they send", "they hold"],
        correct: "they come",
        explanation: "Veniō is intransitive and means come."
      },
      {
        type: "build",
        prompt: "Build in Latin: The servant hears the voice.",
        tokens: ["audit", "vocem", "Servus"],
        correct: "Servus vocem audit",
        explanation: "Audit means he hears, and vocem is the direct object."
      }
    ]
  },
  {
    id: "lesson13-imperfect-future",
    lessonSet: "lesson13",
    number: "III",
    eyebrow: "Lesson 13 · Imperfect and future",
    title: "Was Hearing, Will Hear",
    subtitle: "Put an i before the third-conjugation imperfect and future endings.",
    color: "#de8465",
    reference: "Henle Lesson 13 · Imperfect and future tense",
    questions: [
      {
        type: "choice",
        prompt: "What does \"audiēbam\" mean?",
        choices: ["I was hearing", "I shall hear", "they hear", "you hear"],
        correct: "I was hearing",
        explanation: "Audiēbam is first person singular imperfect."
      },
      {
        type: "choice",
        prompt: "Which form means “they were coming”?",
        choices: ["veniēbant", "veniunt", "venient", "venit"],
        correct: "veniēbant",
        explanation: "Veniēbant is imperfect plural."
      },
      {
        type: "choice",
        prompt: "What does \"audiam\" mean?",
        choices: ["I shall hear", "I was hearing", "I hear", "they heard"],
        correct: "I shall hear",
        explanation: "Audiam is first person singular future."
      },
      {
        type: "choice",
        prompt: "Which form means “they will assemble”?",
        choices: ["convenient", "conveniunt", "conveniēbant", "convenit"],
        correct: "convenient",
        explanation: "Convenient is future plural: they will assemble."
      },
      {
        type: "build",
        prompt: "Build in Latin: We shall hear the speech of the leader.",
        tokens: ["ducis", "ōrātiōnem", "audiēmus"],
        correct: "ōrātiōnem ducis audiēmus",
        explanation: "Audiēmus means we shall hear, and ducis means of the leader."
      }
    ]
  },
  {
    id: "lesson13-vocabulary",
    lessonSet: "lesson13",
    number: "IV",
    eyebrow: "Lesson 13 · Vocabulary",
    title: "Hear, Fortify, Come, Assemble",
    subtitle: "Practice the Lesson 13 fourth-conjugation words and per.",
    color: "#3e9b77",
    reference: "Henle Lesson 13 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"mūniō\" mean?",
        choices: ["I fortify or construct", "I hear", "I come", "I assemble"],
        correct: "I fortify or construct",
        explanation: "Mūniō means fortify; with viam or viās, it can mean construct."
      },
      {
        type: "choice",
        prompt: "What does \"veniō\" mean?",
        choices: ["I come", "I hear", "I send", "I defend"],
        correct: "I come",
        explanation: "Veniō means I come."
      },
      {
        type: "choice",
        prompt: "What does \"conveniō\" mean?",
        choices: ["I come together or assemble", "I conquer", "I put", "I fill"],
        correct: "I come together or assemble",
        explanation: "Convenīre means to come together or assemble."
      },
      {
        type: "choice",
        prompt: "What case does \"per\" take?",
        choices: ["accusative", "ablative", "genitive", "dative"],
        correct: "accusative",
        explanation: "Per means through and takes the accusative."
      },
      {
        type: "build",
        prompt: "Build in Latin: The army was coming through the forest.",
        tokens: ["silvam", "per", "Exercitus", "veniēbat"],
        correct: "Exercitus per silvam veniēbat",
        explanation: "Per silvam means through the forest."
      }
    ]
  },
  {
    id: "lesson13-wrap",
    lessonSet: "lesson13",
    number: "V",
    eyebrow: "Lesson 13 · Mastery",
    title: "Fourth Conjugation Wrap-Up",
    subtitle: "Mix audiō, mūniō, veniō, conveniō, and earlier Henle grammar.",
    color: "#c8912f",
    reference: "Henle Lesson 13 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Ducēs oppida et pontēs saepe mūniunt.\"",
        choices: ["The leaders often fortify towns and bridges.", "The leaders often hear towns and bridges.", "The towns and bridges fortify leaders.", "The leaders will come through towns and bridges."],
        correct: "The leaders often fortify towns and bridges.",
        explanation: "Mūniunt means they fortify."
      },
      {
        type: "choice",
        prompt: "Translate: \"Audīsne vōcēs servōrum?\"",
        choices: ["Do you hear the voices of the servants?", "Do the servants hear you?", "Will you hear the servants?", "Were the voices serving you?"],
        correct: "Do you hear the voices of the servants?",
        explanation: "Audīsne means do you hear, and vōcēs is the direct object."
      },
      {
        type: "choice",
        prompt: "Translate: \"Senātus in locum tūtum conveniet.\"",
        choices: ["The senate will assemble in a safe place.", "The senate was hearing a safe place.", "The safe place will come to the senate.", "The senate fortifies the safe place."],
        correct: "The senate will assemble in a safe place.",
        explanation: "Conveniet means it will assemble."
      },
      {
        type: "choice",
        prompt: "Which form means “you all will come”?",
        choices: ["veniētis", "venītis", "veniēbatis", "veniunt"],
        correct: "veniētis",
        explanation: "Veniētis is second person plural future."
      },
      {
        type: "build",
        prompt: "Build in Latin: Part of the enemies comes through the province.",
        tokens: ["provinciam", "hostium", "per", "venit", "Pars"],
        correct: "Pars hostium per provinciam venit",
        explanation: "Pars is the subject, hostium means of the enemies, and per provinciam means through the province."
      }
    ]
  },
  {
    id: "lesson14-sum-system",
    lessonSet: "lesson14",
    number: "I",
    eyebrow: "Lesson 14 · Sum",
    title: "Present System of Sum",
    subtitle: "Review sum, eram, erō: I am, I was, I shall be.",
    color: "#5b8fc9",
    reference: "Henle Lesson 14 · Present, imperfect, and future of sum",
    questions: [
      {
        type: "choice",
        prompt: "What does \"sum\" mean?",
        choices: ["I am", "you are", "we are", "they are"],
        correct: "I am",
        explanation: "Sum is first person singular present."
      },
      {
        type: "choice",
        prompt: "What does \"eram\" mean?",
        choices: ["I was", "I shall be", "they were", "you are"],
        correct: "I was",
        explanation: "Eram is first person singular imperfect."
      },
      {
        type: "choice",
        prompt: "What does \"erō\" mean?",
        choices: ["I shall be", "I was", "I am", "they will be"],
        correct: "I shall be",
        explanation: "Erō is first person singular future."
      },
      {
        type: "choice",
        prompt: "Which future form of sum means “they will be”?",
        choices: ["erunt", "erant", "sunt", "eritis"],
        correct: "erunt",
        explanation: "Henle notes the third person plural future is erunt."
      },
      {
        type: "build",
        prompt: "Build in Latin: We shall be with God in heaven.",
        tokens: ["Deo", "in", "cum", "erimus", "Caelo"],
        correct: "cum Deo in Caelo erimus",
        explanation: "Erimus means we shall be."
      }
    ]
  },
  {
    id: "lesson14-being-with-adjectives",
    lessonSet: "lesson14",
    number: "II",
    eyebrow: "Lesson 14 · Being",
    title: "Being with Nouns and Adjectives",
    subtitle: "Practice sum with predicate nouns and adjectives.",
    color: "#9a76b4",
    reference: "Henle Lesson 14 · Sum with adjective review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Via angusta et difficilis est.\"",
        choices: ["The road is narrow and difficult.", "The narrow road was difficult.", "The roads are narrow and difficult.", "The difficult road will be narrow."],
        correct: "The road is narrow and difficult.",
        explanation: "Est means is; angusta and difficilis describe via."
      },
      {
        type: "choice",
        prompt: "Translate: \"Erantne montēs altī et difficilēs?\"",
        choices: ["Were the mountains high and difficult?", "Will the mountains be high and difficult?", "Are the mountains high and difficult?", "Were the high mountains easy?"],
        correct: "Were the mountains high and difficult?",
        explanation: "Erantne means were they? The -ne makes the question."
      },
      {
        type: "choice",
        prompt: "Translate: \"Ero fortis.\"",
        choices: ["I shall be brave.", "I was brave.", "They will be brave.", "Be brave!"],
        correct: "I shall be brave.",
        explanation: "Ero is future: I shall be."
      },
      {
        type: "choice",
        prompt: "What does \"undique\" mean?",
        choices: ["from all sides or on all sides", "there", "often", "nevertheless"],
        correct: "from all sides or on all sides",
        explanation: "Undique is an adverb meaning from all sides or on all sides."
      },
      {
        type: "build",
        prompt: "Build in Latin: There were mountains and forests on all sides.",
        tokens: ["silvae", "et", "montēs", "erant", "undique"],
        correct: "undique erant montēs et silvae",
        explanation: "Erant can mean there were."
      }
    ]
  },
  {
    id: "lesson14-absum",
    lessonSet: "lesson14",
    number: "III",
    eyebrow: "Lesson 14 · Absum",
    title: "Away from the Camp",
    subtitle: "Learn absum, abesse, āfuī, āfutūrus.",
    color: "#de8465",
    reference: "Henle Lesson 14 · Compounds of sum",
    questions: [
      {
        type: "choice",
        prompt: "What does \"absum\" mean?",
        choices: ["I am away or distant", "I am present", "I hear", "I send"],
        correct: "I am away or distant",
        explanation: "Absum is a compound of ab and sum."
      },
      {
        type: "choice",
        prompt: "What does \"abest\" mean?",
        choices: ["he, she, or it is away", "he, she, or it was away", "they are away", "we shall be away"],
        correct: "he, she, or it is away",
        explanation: "Abest is present tense: is away."
      },
      {
        type: "choice",
        prompt: "What does \"aberat\" mean?",
        choices: ["he, she, or it was away", "he, she, or it will be away", "they are away", "you are away"],
        correct: "he, she, or it was away",
        explanation: "Aberat is imperfect tense: was away."
      },
      {
        type: "choice",
        prompt: "How is the place away from which something is usually expressed with absum?",
        choices: ["a or ab plus the ablative", "per plus the accusative", "the genitive alone", "ad plus the nominative"],
        correct: "a or ab plus the ablative",
        explanation: "Henle's example uses a castris: away from the camp."
      },
      {
        type: "build",
        prompt: "Build in Latin: Rome is far away from us.",
        tokens: ["abest", "nōbīs", "Roma", "longē", "ā"],
        correct: "Roma longē ā nōbīs abest",
        explanation: "Ā nōbīs means from us, and abest means is away."
      }
    ]
  },
  {
    id: "lesson14-vocabulary",
    lessonSet: "lesson14",
    number: "IV",
    eyebrow: "Lesson 14 · Vocabulary",
    title: "Sum, Undique, Tēlum, Absum",
    subtitle: "Practice the Lesson 14 words and compounds.",
    color: "#3e9b77",
    reference: "Henle Lesson 14 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"tēlum\" mean?",
        choices: ["dart or weapon", "camp", "letter", "territory"],
        correct: "dart or weapon",
        explanation: "Tēlum is a second-declension neuter noun meaning dart or weapon."
      },
      {
        type: "choice",
        prompt: "What does \"longē\" mean?",
        choices: ["far", "often", "there", "also"],
        correct: "far",
        explanation: "Longē is an adverb meaning far."
      },
      {
        type: "choice",
        prompt: "Which Latin form means “they are away”?",
        choices: ["absunt", "aberant", "aberunt", "sumus"],
        correct: "absunt",
        explanation: "Absunt is present plural: they are away."
      },
      {
        type: "choice",
        prompt: "Which Latin form means “they will be away”?",
        choices: ["aberunt", "absunt", "aberant", "erunt"],
        correct: "aberunt",
        explanation: "Aberunt is future plural: they will be away."
      },
      {
        type: "build",
        prompt: "Build in Latin: The winter quarters were not far away from Caesar.",
        tokens: ["Caesare", "non", "Hiberna", "aberant", "ā", "longē"],
        correct: "Hiberna non longē ā Caesare aberant",
        explanation: "Aberant means they were away, and ā Caesare means from Caesar."
      }
    ]
  },
  {
    id: "lesson14-wrap",
    lessonSet: "lesson14",
    number: "V",
    eyebrow: "Lesson 14 · Mastery",
    title: "Sum and Absum Wrap-Up",
    subtitle: "Mix being, being away, adjectives, and earlier Henle grammar.",
    color: "#c8912f",
    reference: "Henle Lesson 14 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Propter metum hostium in castris Caesaris sumus.\"",
        choices: ["Because of fear of the enemies, we are in Caesar's camp.", "Because of Caesar, the enemies are afraid in camp.", "We shall be away from Caesar's camp.", "The enemies were in Caesar's camp."],
        correct: "Because of fear of the enemies, we are in Caesar's camp.",
        explanation: "Sumus means we are."
      },
      {
        type: "choice",
        prompt: "Translate: \"In Caelō cum Christō erimus.\"",
        choices: ["We shall be in heaven with Christ.", "We were in heaven with Christ.", "They will be away from heaven.", "Christ is in heaven with us."],
        correct: "We shall be in heaven with Christ.",
        explanation: "Erimus means we shall be."
      },
      {
        type: "choice",
        prompt: "Translate: \"Hiberna ab oppidō Gallōrum non longē aberant.\"",
        choices: ["The winter quarters were not far away from the town of the Gauls.", "The Gauls were not in the winter quarters.", "The winter quarters will be in the town.", "The town was far from the Gauls."],
        correct: "The winter quarters were not far away from the town of the Gauls.",
        explanation: "Aberant means were away, and ab oppidō means from the town."
      },
      {
        type: "choice",
        prompt: "Which form means “you all were”?",
        choices: ["erātis", "estis", "eritis", "erant"],
        correct: "erātis",
        explanation: "Erātis is second person plural imperfect."
      },
      {
        type: "build",
        prompt: "Build in Latin: Christ is a good and noble leader.",
        tokens: ["bonus", "nobilis", "dux", "est", "Christus", "et"],
        correct: "Christus est dux bonus et nobilis",
        explanation: "Est links Christus with dux bonus et nobilis."
      }
    ]
  },
  {
    id: "lesson15-perfect-stem",
    lessonSet: "lesson15",
    number: "I",
    eyebrow: "Lesson 15 · Perfect stem",
    title: "The Perfect Active Stem",
    subtitle: "Find the stem from the third principal part.",
    color: "#5b8fc9",
    reference: "Henle Lesson 15 · Perfect active stem",
    questions: [
      {
        type: "choice",
        prompt: "Which tenses belong to the perfect system active?",
        choices: ["perfect, pluperfect, future perfect", "present, imperfect, future", "nominative, genitive, dative", "singular, plural, both"],
        correct: "perfect, pluperfect, future perfect",
        explanation: "The perfect system active includes perfect, pluperfect, and future perfect."
      },
      {
        type: "choice",
        prompt: "How do you find the perfect active stem?",
        choices: ["drop -ī from the third principal part", "drop -āre from the infinitive", "drop -ae from the genitive", "add -ba- to the stem"],
        correct: "drop -ī from the third principal part",
        explanation: "Laudāvī gives the perfect stem laudāv-."
      },
      {
        type: "choice",
        prompt: "What is the perfect stem of \"monuī\"?",
        choices: ["monu-", "monē-", "mon-", "moneō-"],
        correct: "monu-",
        explanation: "Drop -ī from monuī: monu-."
      },
      {
        type: "choice",
        prompt: "What is the perfect stem of \"mīsī\"?",
        choices: ["mīs-", "mitt-", "misī-", "mitte-"],
        correct: "mīs-",
        explanation: "Drop -ī from mīsī: mīs-."
      },
      {
        type: "build",
        prompt: "Build the perfect stem from laudāvī.",
        tokens: ["laudāv"],
        correct: "laudāv",
        explanation: "Laudāvī minus -ī leaves laudāv-."
      }
    ]
  },
  {
    id: "lesson15-perfect-tense",
    lessonSet: "lesson15",
    number: "II",
    eyebrow: "Lesson 15 · Perfect tense",
    title: "I Praised, I Did Praise, I Have Praised",
    subtitle: "One Latin perfect form can have three English translations.",
    color: "#9a76b4",
    reference: "Henle Lesson 15 · Perfect indicative active",
    questions: [
      {
        type: "choice",
        prompt: "What does the perfect tense express?",
        choices: ["a past act", "action going on now", "a future action", "a noun's job"],
        correct: "a past act",
        explanation: "The perfect tense expresses a past act."
      },
      {
        type: "choice",
        prompt: "Which is a correct translation of \"laudāvī\"?",
        choices: ["I praised", "I was praising", "I shall praise", "they praise"],
        correct: "I praised",
        explanation: "Laudāvī can mean I praised, I did praise, or I have praised."
      },
      {
        type: "choice",
        prompt: "What does \"laudāvistī\" mean?",
        choices: ["you praised", "I praised", "we praised", "they praised"],
        correct: "you praised",
        explanation: "Laudāvistī is second person singular perfect."
      },
      {
        type: "choice",
        prompt: "Which form means “they praised”?",
        choices: ["laudāvērunt", "laudāverant", "laudābant", "laudant"],
        correct: "laudāvērunt",
        explanation: "Laudāvērunt is third person plural perfect."
      },
      {
        type: "build",
        prompt: "Build in Latin: We praised God.",
        tokens: ["Deum", "laudāvimus"],
        correct: "Deum laudāvimus",
        explanation: "Laudāvimus means we praised, and Deum is the direct object."
      }
    ]
  },
  {
    id: "lesson15-perfect-across-verbs",
    lessonSet: "lesson15",
    number: "III",
    eyebrow: "Lesson 15 · All conjugations",
    title: "Perfect Forms Across Verbs",
    subtitle: "Use the same perfect endings with different perfect stems.",
    color: "#de8465",
    reference: "Henle Lesson 15 · Perfect models",
    questions: [
      {
        type: "choice",
        prompt: "What does \"monuimus\" mean?",
        choices: ["we warned", "we were warning", "they warned", "we shall warn"],
        correct: "we warned",
        explanation: "Monuimus is first person plural perfect."
      },
      {
        type: "choice",
        prompt: "What does \"mīsī\" mean?",
        choices: ["I sent", "I send", "I was sending", "they sent"],
        correct: "I sent",
        explanation: "Mīsī is first person singular perfect of mittō."
      },
      {
        type: "choice",
        prompt: "What does \"audīvistis\" mean?",
        choices: ["you all heard", "you hear", "they heard", "we shall hear"],
        correct: "you all heard",
        explanation: "Audīvistis is second person plural perfect."
      },
      {
        type: "choice",
        prompt: "What does \"fuērunt\" mean?",
        choices: ["they were or have been", "they will be", "they are", "we were"],
        correct: "they were or have been",
        explanation: "Fuērunt is the perfect of sum."
      },
      {
        type: "build",
        prompt: "Build in Latin: They sent the soldiers into Gaul.",
        tokens: ["Galliam", "mīserunt", "in", "militēs"],
        correct: "militēs in Galliam mīserunt",
        explanation: "Mīserunt means they sent."
      }
    ]
  },
  {
    id: "lesson15-vocabulary",
    lessonSet: "lesson15",
    number: "IV",
    eyebrow: "Lesson 15 · Vocabulary",
    title: "Place, Remain, Fill, Yield",
    subtitle: "Practice the new perfect-system vocabulary.",
    color: "#3e9b77",
    reference: "Henle Lesson 15 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"collocō\" mean?",
        choices: ["I place or station", "I remain", "I fill", "I yield"],
        correct: "I place or station",
        explanation: "Collocō means place or station."
      },
      {
        type: "choice",
        prompt: "What does \"maneō\" mean?",
        choices: ["I remain", "I fill", "I yield", "I burn"],
        correct: "I remain",
        explanation: "Maneō means remain."
      },
      {
        type: "choice",
        prompt: "What does \"compleō\" mean?",
        choices: ["I fill", "I place", "I come", "I contend"],
        correct: "I fill",
        explanation: "Compleō means fill; with what something is filled is expressed by the ablative."
      },
      {
        type: "choice",
        prompt: "What does \"cēdō\" mean?",
        choices: ["I yield or go", "I conquer", "I send", "I hear"],
        correct: "I yield or go",
        explanation: "Cēdō is an intransitive third-conjugation verb."
      },
      {
        type: "choice",
        prompt: "What does \"atque\" or \"ac\" mean?",
        choices: ["and", "but", "there", "through"],
        correct: "and",
        explanation: "Atque and ac are conjunctions meaning and."
      }
    ]
  },
  {
    id: "lesson15-pluperfect-future-perfect",
    lessonSet: "lesson15",
    number: "V",
    eyebrow: "Lesson 15 · More perfect system",
    title: "Had Praised, Will Have Praised",
    subtitle: "Practice pluperfect and future perfect forms.",
    color: "#c8912f",
    reference: "Henle Lesson 15 · Pluperfect and future perfect indicative active",
    questions: [
      {
        type: "choice",
        prompt: "What does \"laudāveram\" mean?",
        choices: ["I had praised", "I praised", "I shall praise", "I will have praised"],
        correct: "I had praised",
        explanation: "Laudāveram is pluperfect."
      },
      {
        type: "choice",
        prompt: "What does \"laudāverō\" mean?",
        choices: ["I shall have praised", "I had praised", "I praised", "they praised"],
        correct: "I shall have praised",
        explanation: "Laudāverō is future perfect."
      },
      {
        type: "choice",
        prompt: "What does \"servāverant\" mean?",
        choices: ["they had kept or saved", "they will keep", "they are keeping", "we kept"],
        correct: "they had kept or saved",
        explanation: "Servāverant is pluperfect plural."
      },
      {
        type: "choice",
        prompt: "What does \"incenderat\" mean?",
        choices: ["he had burned", "he will burn", "they burned", "he burns"],
        correct: "he had burned",
        explanation: "Incenderat is pluperfect singular."
      },
      {
        type: "build",
        prompt: "Build in Latin: God had helped them.",
        tokens: ["adiūverat", "Deus", "eōs"],
        correct: "Deus eōs adiūverat",
        explanation: "Adiūverat means had helped, and eōs means them."
      }
    ]
  },
  {
    id: "lesson15-wrap",
    lessonSet: "lesson15",
    number: "VI",
    eyebrow: "Lesson 15 · Mastery",
    title: "Perfect System Wrap-Up",
    subtitle: "Mix perfect, pluperfect, future perfect, and all Unit 3 verbs.",
    color: "#4e8a9f",
    reference: "Henle Lesson 15 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Caesar militēs in ponte collocāvit.\"",
        choices: ["Caesar stationed soldiers on the bridge.", "Caesar will station soldiers on the bridge.", "The soldiers stationed Caesar on the bridge.", "Caesar was sending soldiers to the bridge."],
        correct: "Caesar stationed soldiers on the bridge.",
        explanation: "Collocāvit is perfect: he stationed."
      },
      {
        type: "choice",
        prompt: "Translate: \"Christus in terrā non mānsit.\"",
        choices: ["Christ did not remain on earth.", "Christ will not remain on earth.", "Christ was not remaining in the land.", "The land did not remain in Christ."],
        correct: "Christ did not remain on earth.",
        explanation: "Mānsit is perfect of maneō."
      },
      {
        type: "choice",
        prompt: "Translate: \"Equitēs impetum fortiter sustinuērunt.\"",
        choices: ["The cavalry withstood the attack bravely.", "The cavalry will withstand the attack bravely.", "The attack withstood the cavalry.", "The cavalry had attacked bravely."],
        correct: "The cavalry withstood the attack bravely.",
        explanation: "Sustinuērunt is perfect plural."
      },
      {
        type: "choice",
        prompt: "Which form means “you praised”?",
        choices: ["laudāvistī", "laudāvit", "laudāverās", "laudābis"],
        correct: "laudāvistī",
        explanation: "Laudāvistī is second person singular perfect."
      },
      {
        type: "build",
        prompt: "Build in Latin: They filled the camp with grain.",
        tokens: ["complēvērunt", "frumentō", "castra"],
        correct: "castra frumentō complēvērunt",
        explanation: "Compleō uses the ablative for the thing with which something is filled."
      }
    ]
  },
  {
    id: "lesson16-puer-ager-vir",
    lessonSet: "lesson16",
    number: "I",
    eyebrow: "Lesson 16 · Puer, ager, vir",
    title: "Second-Declension Nouns without -us",
    subtitle: "Meet puer, ager, and vir: masculine nouns with servus endings after the nominative.",
    color: "#5b8fc9",
    reference: "Henle Lesson 16 · Declension of puer, ager, and vir",
    questions: [
      {
        type: "choice",
        prompt: "Why do puer, ager, and vir belong to the second declension?",
        choices: ["their genitive singular ends in -ī", "their nominative singular ends in -a", "they are neuter", "they have no plural"],
        correct: "their genitive singular ends in -ī",
        explanation: "Puerī, agrī, and virī show the second-declension genitive singular ending -ī."
      },
      {
        type: "choice",
        prompt: "What is the stem of ager, agrī?",
        choices: ["agr-", "ager-", "ag-", "agrī-"],
        correct: "agr-",
        explanation: "Drop the genitive ending -ī from agrī. The stem is agr-."
      },
      {
        type: "choice",
        prompt: "Which form means “the boy” as subject?",
        choices: ["puer", "puerum", "puerō", "puerī"],
        correct: "puer",
        explanation: "Puer keeps its special nominative singular form."
      },
      {
        type: "choice",
        prompt: "Which form means “the field” as direct object?",
        choices: ["agrum", "ager", "agrī", "agrōrum"],
        correct: "agrum",
        explanation: "Ager uses the stem agr- plus the accusative singular ending -um."
      },
      {
        type: "build",
        prompt: "Build in Latin: The man sees the boy in the field.",
        tokens: ["vir", "puerum", "in", "agrō", "videt"],
        correct: "vir puerum in agrō videt",
        explanation: "Vir is the subject, puerum is the direct object, and in agrō means in the field."
      }
    ]
  },
  {
    id: "lesson16-vocabulary-trans",
    lessonSet: "lesson16",
    number: "II",
    eyebrow: "Lesson 16 · Vocabulary",
    title: "Italy, Fortune, Thus, Across",
    subtitle: "Practice Italia, fortuna, ita, and trans with the accusative.",
    color: "#9a76b4",
    reference: "Henle Lesson 16 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"trans\" mean?",
        choices: ["across", "because of", "with", "from all sides"],
        correct: "across",
        explanation: "Trans means across and takes the accusative."
      },
      {
        type: "choice",
        prompt: "What case follows \"trans\"?",
        choices: ["accusative", "ablative", "genitive", "dative"],
        correct: "accusative",
        explanation: "Trans is used with the accusative, as in trans montēs."
      },
      {
        type: "choice",
        prompt: "What does \"ita\" mean?",
        choices: ["thus", "far", "there", "nevertheless"],
        correct: "thus",
        explanation: "Ita is an adverb meaning thus or so."
      },
      {
        type: "choice",
        prompt: "What does \"fortuna\" mean?",
        choices: ["fortune", "field", "battle", "state"],
        correct: "fortune",
        explanation: "Fortuna means fortune."
      },
      {
        type: "build",
        prompt: "Build in Latin: The enemies came across the mountains into Italy.",
        tokens: ["hostēs", "trans", "montēs", "in", "Italiam", "vēnērunt"],
        correct: "hostēs trans montēs in Italiam vēnērunt",
        explanation: "Trans montēs means across the mountains; in Italiam shows motion into Italy."
      }
    ]
  },
  {
    id: "lesson16-miser-integer",
    lessonSet: "lesson16",
    number: "III",
    eyebrow: "Lesson 16 · Adjectives",
    title: "Miser and Integer",
    subtitle: "Learn adjectives whose masculine nominative is like puer or ager.",
    color: "#de8465",
    reference: "Henle Lesson 16 · Declension of miser and integer",
    questions: [
      {
        type: "choice",
        prompt: "Miser, misera, miserum means...",
        choices: ["wretched", "free", "fresh or uninjured", "brave"],
        correct: "wretched",
        explanation: "Miser means wretched."
      },
      {
        type: "choice",
        prompt: "Integer, integra, integrum can mean...",
        choices: ["fresh, uninjured, or whole", "wretched", "across", "boy"],
        correct: "fresh, uninjured, or whole",
        explanation: "Integer can mean fresh, uninjured, or whole."
      },
      {
        type: "choice",
        prompt: "How are miser and integer declined after the masculine nominative singular?",
        choices: ["like magnus, magna, magnum", "like flumen only", "like a verb", "without endings"],
        correct: "like magnus, magna, magnum",
        explanation: "Their endings are like magnus except for the masculine nominative singular."
      },
      {
        type: "choice",
        prompt: "Which phrase means “fresh legions”?",
        choices: ["legiōnēs integrae", "legiōnēs miserī", "legionem integrum", "legionum integer"],
        correct: "legiōnēs integrae",
        explanation: "Legiōnēs is feminine plural, so the adjective is integrae."
      },
      {
        type: "build",
        prompt: "Build in Latin: The fresh legions were not yielding.",
        tokens: ["legiōnēs", "integrae", "non", "cēdēbant"],
        correct: "legiōnēs integrae non cēdēbant",
        explanation: "Integrae agrees with legiōnēs, and cēdēbant means they were yielding."
      }
    ]
  },
  {
    id: "lesson16-possessives",
    lessonSet: "lesson16",
    number: "IV",
    eyebrow: "Lesson 16 · Possessives",
    title: "My, Your, Our, Your-All",
    subtitle: "Practice meus, tuus, noster, and vester as adjectives.",
    color: "#3e9b77",
    reference: "Henle Lesson 16 · Possessive adjectives",
    questions: [
      {
        type: "choice",
        prompt: "Which adjective means “my” or “mine”?",
        choices: ["meus, mea, meum", "tuus, tua, tuum", "noster, nostra, nostrum", "vester, vestra, vestrum"],
        correct: "meus, mea, meum",
        explanation: "Meus, mea, meum means my or mine."
      },
      {
        type: "choice",
        prompt: "Which adjective means “our” or “ours”?",
        choices: ["noster, nostra, nostrum", "vester, vestra, vestrum", "tuus, tua, tuum", "miser, misera, miserum"],
        correct: "noster, nostra, nostrum",
        explanation: "Noster, nostra, nostrum means our or ours."
      },
      {
        type: "choice",
        prompt: "Possessive adjectives agree with...",
        choices: ["the noun they modify", "the speaker only", "the verb", "the nearest preposition"],
        correct: "the noun they modify",
        explanation: "Possessive adjectives are adjectives, so they agree with the noun they modify."
      },
      {
        type: "choice",
        prompt: "Which phrase means “your soldiers” when speaking to more than one person?",
        choices: ["militēs vestrī", "miles tuus", "militēs nostrī", "miles meus"],
        correct: "militēs vestrī",
        explanation: "Vester is used when speaking to more than one person."
      },
      {
        type: "build",
        prompt: "Build in Latin: We shall defend our state.",
        tokens: ["civitatem", "nostram", "defendēmus"],
        correct: "civitatem nostram defendēmus",
        explanation: "Nostram agrees with civitatem, which is feminine accusative singular."
      }
    ]
  },
  {
    id: "lesson16-wrap",
    lessonSet: "lesson16",
    number: "V",
    eyebrow: "Lesson 16 · Mastery",
    title: "Unit Four Begins",
    subtitle: "Mix puer, ager, vir, miser, integer, possessives, and trans.",
    color: "#c8912f",
    reference: "Henle Lesson 16 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Viri Rōmānī fortēs erant.\"",
        choices: ["The Roman men were brave.", "The Roman boys were wretched.", "The Roman fields were large.", "The Roman states were free."],
        correct: "The Roman men were brave.",
        explanation: "Viri is plural subject, and fortēs agrees with it."
      },
      {
        type: "choice",
        prompt: "Translate: \"Puer bonus est gloria matris.\"",
        choices: ["A good boy is the glory of his mother.", "A good field is the mother's glory.", "The mother praises a good boy.", "The boy gives glory to his mother."],
        correct: "A good boy is the glory of his mother.",
        explanation: "Puer is the subject, and matris means of the mother."
      },
      {
        type: "choice",
        prompt: "Translate: \"Cum omnibus cōpiīs trans montēs contendit.\"",
        choices: ["He hastens across the mountains with all the troops.", "He remains in the mountains with all the troops.", "He fortifies the mountains from all sides.", "He sends all the troops away from the mountains."],
        correct: "He hastens across the mountains with all the troops.",
        explanation: "Trans montēs means across the mountains, and contendit can mean hastens."
      },
      {
        type: "choice",
        prompt: "Which phrase means “on account of your virtues” when speaking to one person?",
        choices: ["propter virtūtēs tuās", "propter virtūtēs vestrās", "propter virtūtēs nostrās", "propter virtūtēs meās"],
        correct: "propter virtūtēs tuās",
        explanation: "Tuus is used when speaking to one person; tuās agrees with virtūtēs."
      },
      {
        type: "build",
        prompt: "Build in Latin: Our brave men will withstand your attack.",
        tokens: ["viri", "nostrī", "fortēs", "impetum", "tuum", "sustinēbunt"],
        correct: "viri nostrī fortēs impetum tuum sustinēbunt",
        explanation: "Nostrī agrees with viri, tuum agrees with impetum, and sustinēbunt means they will withstand."
      }
    ]
  },
  {
    id: "lesson17-active-passive",
    lessonSet: "lesson17",
    number: "I",
    eyebrow: "Lesson 17 · Voice",
    title: "Active and Passive Voice",
    subtitle: "See whether the subject does the action or receives it.",
    color: "#5b8fc9",
    reference: "Henle Lesson 17 · Active and passive voice",
    questions: [
      {
        type: "choice",
        prompt: "In the active voice, what does the subject do?",
        choices: ["it does the action", "it receives the action", "it must be plural", "it always follows ā or ab"],
        correct: "it does the action",
        explanation: "Active voice means the subject is acting."
      },
      {
        type: "choice",
        prompt: "In the passive voice, what happens to the subject?",
        choices: ["it receives the action", "it does the action", "it becomes dative", "it stops agreeing with the verb"],
        correct: "it receives the action",
        explanation: "Passive voice means the subject is acted upon."
      },
      {
        type: "choice",
        prompt: "Translate: \"Deus laudātur.\"",
        choices: ["God is praised.", "God praises.", "They praise God.", "God will praise."],
        correct: "God is praised.",
        explanation: "Laudātur is passive: he, she, or it is praised."
      },
      {
        type: "choice",
        prompt: "Which form is passive?",
        choices: ["laudātur", "laudat", "laudant", "laudābat"],
        correct: "laudātur",
        explanation: "The -tur ending marks a passive third-person singular verb."
      },
      {
        type: "build",
        prompt: "Build in Latin: God is praised by good men.",
        tokens: ["Deus", "ā", "virīs", "bonīs", "laudātur"],
        correct: "Deus ā virīs bonīs laudātur",
        explanation: "The living agent uses ā plus the ablative: ā virīs bonīs."
      }
    ]
  },
  {
    id: "lesson17-passive-signs",
    lessonSet: "lesson17",
    number: "II",
    eyebrow: "Lesson 17 · Passive signs",
    title: "The Passive Endings",
    subtitle: "Change active personal signs into passive ones.",
    color: "#9a76b4",
    reference: "Henle Lesson 17 · Passive personal signs",
    questions: [
      {
        type: "choice",
        prompt: "In the passive voice, active \"-t\" changes to...",
        choices: ["-tur", "-ntur", "-mur", "-ris"],
        correct: "-tur",
        explanation: "-t becomes -tur: laudat becomes laudātur."
      },
      {
        type: "choice",
        prompt: "In the passive voice, active \"-mus\" changes to...",
        choices: ["-mur", "-minī", "-ris", "-ntur"],
        correct: "-mur",
        explanation: "-mus becomes -mur: laudāmus becomes laudāmur."
      },
      {
        type: "choice",
        prompt: "In the passive voice, active \"-nt\" changes to...",
        choices: ["-ntur", "-tur", "-mur", "-or"],
        correct: "-ntur",
        explanation: "-nt becomes -ntur: laudant becomes laudantur."
      },
      {
        type: "choice",
        prompt: "In the passive voice, active \"-s\" changes to...",
        choices: ["-ris", "-tur", "-minī", "-r"],
        correct: "-ris",
        explanation: "-s becomes -ris in the passive."
      },
      {
        type: "build",
        prompt: "Build in Latin: They are praised.",
        tokens: ["laudantur"],
        correct: "laudantur",
        explanation: "Laudantur means they are being praised."
      }
    ]
  },
  {
    id: "lesson17-first-passive",
    lessonSet: "lesson17",
    number: "III",
    eyebrow: "Lesson 17 · Laudō passive",
    title: "First Conjugation Passive",
    subtitle: "Practice laudō in the present, imperfect, and future passive.",
    color: "#de8465",
    reference: "Henle Lesson 17 · First-conjugation passive",
    questions: [
      {
        type: "choice",
        prompt: "What does \"laudor\" mean?",
        choices: ["I am praised", "I praise", "we are praised", "they praise"],
        correct: "I am praised",
        explanation: "Laudor is first person singular passive."
      },
      {
        type: "choice",
        prompt: "What does \"laudāris\" mean?",
        choices: ["you are praised", "you praise", "he is praised", "you all are praised"],
        correct: "you are praised",
        explanation: "Laudāris is second person singular passive."
      },
      {
        type: "choice",
        prompt: "What does \"laudāminī\" mean?",
        choices: ["you all are praised", "we are praised", "they are praised", "you praised"],
        correct: "you all are praised",
        explanation: "-minī marks the second person plural passive."
      },
      {
        type: "choice",
        prompt: "What does \"laudāberis\" mean?",
        choices: ["you will be praised", "you were praised", "you will praise", "they will be praised"],
        correct: "you will be praised",
        explanation: "The future passive second singular uses -beris."
      },
      {
        type: "build",
        prompt: "Build in Latin: We shall be praised.",
        tokens: ["laudābimur"],
        correct: "laudābimur",
        explanation: "Laudābimur is first person plural future passive."
      }
    ]
  },
  {
    id: "lesson17-agency",
    lessonSet: "lesson17",
    number: "IV",
    eyebrow: "Lesson 17 · Agency",
    title: "By a Living Agent",
    subtitle: "Use ā or ab with the ablative when a person does the action.",
    color: "#3e9b77",
    reference: "Henle Lesson 17 · Ablative of agent",
    questions: [
      {
        type: "choice",
        prompt: "A living agent in a passive sentence is usually shown by...",
        choices: ["ā or ab plus the ablative", "the accusative alone", "the genitive alone", "post plus the accusative"],
        correct: "ā or ab plus the ablative",
        explanation: "The ablative of agent uses ā or ab with a living person."
      },
      {
        type: "choice",
        prompt: "Which Latin phrase means \"by the leader\"?",
        choices: ["ā duce", "ducem", "ducī", "dē duce"],
        correct: "ā duce",
        explanation: "Duce is ablative, and ā marks the living agent."
      },
      {
        type: "choice",
        prompt: "Translate: \"Militēs ab hominibus confirmantur.\"",
        choices: ["The soldiers are encouraged by the men.", "The soldiers encourage the men.", "The men are frightened by soldiers.", "The soldiers are away from the men."],
        correct: "The soldiers are encouraged by the men.",
        explanation: "Confirmantur is passive, and ab hominibus names the living agents."
      },
      {
        type: "choice",
        prompt: "When \"ab\" is used with a form of absum, it usually means...",
        choices: ["from", "by a living agent", "through", "without"],
        correct: "from",
        explanation: "With absum, ab usually tells the place away from which something is distant."
      },
      {
        type: "build",
        prompt: "Build in Latin: The town is saved by the leader.",
        tokens: ["oppidum", "ā", "duce", "servātur"],
        correct: "oppidum ā duce servātur",
        explanation: "The living agent is ā duce, and servātur means is saved or preserved."
      }
    ]
  },
  {
    id: "lesson17-vocabulary-wrap",
    lessonSet: "lesson17",
    number: "V",
    eyebrow: "Lesson 17 · Vocabulary",
    title: "Manage, Call Upon, Preserve",
    subtitle: "Practice Lesson 17 vocabulary in passive sentences.",
    color: "#c8912f",
    reference: "Henle Lesson 17 · Vocabulary and review",
    questions: [
      {
        type: "choice",
        prompt: "What does \"administrō\" mean?",
        choices: ["manage or administer", "warn", "hand over", "kill"],
        correct: "manage or administer",
        explanation: "Administrō means manage, administer, or attend to."
      },
      {
        type: "choice",
        prompt: "What does \"appellō\" mean?",
        choices: ["address or call upon", "hold in", "send away", "come together"],
        correct: "address or call upon",
        explanation: "Appellō means address or call upon."
      },
      {
        type: "choice",
        prompt: "What does \"cōnservō\" mean?",
        choices: ["preserve, keep, save, or spare", "restrain", "dismiss", "almost"],
        correct: "preserve, keep, save, or spare",
        explanation: "Cōnservō can mean preserve, keep, save, or spare."
      },
      {
        type: "choice",
        prompt: "What does \"nam\" usually do?",
        choices: ["introduces a reason", "asks a question", "shows motion into", "marks a living agent"],
        correct: "introduces a reason",
        explanation: "Nam means for or because and introduces a reason."
      },
      {
        type: "build",
        prompt: "Build in Latin: Peace will be preserved by brave men.",
        tokens: ["pax", "ā", "virīs", "fortibus", "cōnservābitur"],
        correct: "pax ā virīs fortibus cōnservābitur",
        explanation: "Cōnservābitur is future passive: will be preserved."
      }
    ]
  },
  {
    id: "lesson18-second-passive",
    lessonSet: "lesson18",
    number: "I",
    eyebrow: "Lesson 18 · Moneō passive",
    title: "Second Conjugation Passive",
    subtitle: "Practice moneō in the present, imperfect, and future passive.",
    color: "#5b8fc9",
    reference: "Henle Lesson 18 · Second-conjugation passive",
    questions: [
      {
        type: "choice",
        prompt: "What does \"moneor\" mean?",
        choices: ["I am warned", "I warn", "we are warned", "they warned"],
        correct: "I am warned",
        explanation: "Moneor is first person singular present passive."
      },
      {
        type: "choice",
        prompt: "What does \"monēris\" mean?",
        choices: ["you are warned", "you warn", "he is warned", "you all are warned"],
        correct: "you are warned",
        explanation: "Monēris is second person singular present passive."
      },
      {
        type: "choice",
        prompt: "What does \"monentur\" mean?",
        choices: ["they are warned", "they warn", "we are warned", "he is warned"],
        correct: "they are warned",
        explanation: "Monentur is third person plural passive."
      },
      {
        type: "choice",
        prompt: "What does \"monēberis\" mean?",
        choices: ["you will be warned", "you were warned", "you will warn", "they will be warned"],
        correct: "you will be warned",
        explanation: "The future passive second singular uses -beris."
      },
      {
        type: "build",
        prompt: "Build in Latin: We were being warned.",
        tokens: ["monēbāmur"],
        correct: "monēbāmur",
        explanation: "Monēbāmur is first person plural imperfect passive."
      }
    ]
  },
  {
    id: "lesson18-contineo-obtineo",
    lessonSet: "lesson18",
    number: "II",
    eyebrow: "Lesson 18 · Vocabulary",
    title: "Contineō and Obtineō",
    subtitle: "Use two new second-conjugation verbs in passive forms.",
    color: "#9a76b4",
    reference: "Henle Lesson 18 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"contineō\" mean?",
        choices: ["hold in, keep, restrain, or contain", "send away", "hand over", "preserve"],
        correct: "hold in, keep, restrain, or contain",
        explanation: "Contineō means hold in, keep, restrain, or contain."
      },
      {
        type: "choice",
        prompt: "What does \"obtineō\" mean?",
        choices: ["hold, occupy, or obtain", "call upon", "kill", "fight"],
        correct: "hold, occupy, or obtain",
        explanation: "Obtineō means hold, occupy, or obtain."
      },
      {
        type: "choice",
        prompt: "Translate: \"Oppidum obtinētur.\"",
        choices: ["The town is held.", "The town holds.", "The town was sent.", "The town will be praised."],
        correct: "The town is held.",
        explanation: "Obtinētur is passive: it is held or occupied."
      },
      {
        type: "choice",
        prompt: "Translate: \"Castra montibus continentur.\"",
        choices: ["The camp is held in by mountains.", "The mountains hold the camp actively.", "The camp is sent to the mountains.", "The mountains are warned by the camp."],
        correct: "The camp is held in by mountains.",
        explanation: "Montibus is ablative of means: by mountains."
      },
      {
        type: "build",
        prompt: "Build in Latin: The state was being held by the Romans.",
        tokens: ["cīvitās", "ā", "Rōmānīs", "obtinēbātur"],
        correct: "cīvitās ā Rōmānīs obtinēbātur",
        explanation: "Ā Rōmānīs names the living agents; obtinēbātur is imperfect passive."
      }
    ]
  },
  {
    id: "lesson18-ablative-means",
    lessonSet: "lesson18",
    number: "III",
    eyebrow: "Lesson 18 · Means",
    title: "The Ablative of Means",
    subtitle: "Use the ablative alone for the thing or tool used.",
    color: "#de8465",
    reference: "Henle Lesson 18 · Ablative of means",
    questions: [
      {
        type: "choice",
        prompt: "The ablative of means usually names...",
        choices: ["the thing or tool used", "a living person doing the action", "the subject of the sentence", "the future tense"],
        correct: "the thing or tool used",
        explanation: "Means tells by what or with what something is done."
      },
      {
        type: "choice",
        prompt: "Does the ablative of means normally use ā or ab?",
        choices: ["No, it is usually ablative alone.", "Yes, always.", "Only with neuter nouns.", "Only in questions."],
        correct: "No, it is usually ablative alone.",
        explanation: "Living agents use ā or ab; means uses the ablative by itself."
      },
      {
        type: "choice",
        prompt: "In \"militēs clāmōre terrentur,\" what is \"clāmōre\"?",
        choices: ["ablative of means", "ablative of agent", "direct object", "subject"],
        correct: "ablative of means",
        explanation: "A shout is not a living agent; it is the means by which the soldiers are terrified."
      },
      {
        type: "choice",
        prompt: "Which phrase uses means correctly?",
        choices: ["gladiō terrētur", "ā gladiō terrētur", "gladium terrētur", "gladiī terrētur"],
        correct: "gladiō terrētur",
        explanation: "Gladiō is ablative singular and does not need ā or ab for means."
      },
      {
        type: "build",
        prompt: "Build in Latin: The soldiers are terrified by the shout.",
        tokens: ["militēs", "clāmōre", "terrentur"],
        correct: "militēs clāmōre terrentur",
        explanation: "Clāmōre is ablative of means; terrentur is passive."
      }
    ]
  },
  {
    id: "lesson18-aut-neque",
    lessonSet: "lesson18",
    number: "IV",
    eyebrow: "Lesson 18 · Small words",
    title: "Aut, Neque, Postea",
    subtitle: "Practice Lesson 18 connectors and reading words.",
    color: "#3e9b77",
    reference: "Henle Lesson 18 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"aut\" mean?",
        choices: ["or", "and", "afterwards", "without"],
        correct: "or",
        explanation: "Aut means or."
      },
      {
        type: "choice",
        prompt: "What does \"aut...aut\" mean?",
        choices: ["either...or", "neither...nor", "both...and", "not only...but also"],
        correct: "either...or",
        explanation: "Aut...aut means either...or."
      },
      {
        type: "choice",
        prompt: "What does \"neque...neque\" mean?",
        choices: ["neither...nor", "either...or", "both...and", "afterwards"],
        correct: "neither...nor",
        explanation: "Neque...neque means neither...nor."
      },
      {
        type: "choice",
        prompt: "What does \"postea\" mean?",
        choices: ["afterwards", "almost", "because", "from all sides"],
        correct: "afterwards",
        explanation: "Postea means afterwards."
      },
      {
        type: "build",
        prompt: "Build in Latin: Afterwards the camp will be held.",
        tokens: ["postea", "castra", "obtinēbuntur"],
        correct: "postea castra obtinēbuntur",
        explanation: "Obtinebuntur is future passive plural because castra is plural in Latin form."
      }
    ]
  },
  {
    id: "lesson18-wrap",
    lessonSet: "lesson18",
    number: "V",
    eyebrow: "Lesson 18 · Mastery",
    title: "Agency or Means?",
    subtitle: "Choose between a living agent and a thing used as means.",
    color: "#c8912f",
    reference: "Henle Lesson 18 · Review",
    questions: [
      {
        type: "choice",
        prompt: "In \"ab equitibus terrentur,\" what is \"ab equitibus\"?",
        choices: ["ablative of agent", "ablative of means", "direct object", "dative of possession"],
        correct: "ablative of agent",
        explanation: "Horsemen are living agents, so ab plus the ablative is used."
      },
      {
        type: "choice",
        prompt: "In \"tēlīs terrentur,\" what is \"tēlīs\"?",
        choices: ["ablative of means", "ablative of agent", "subject", "genitive plural"],
        correct: "ablative of means",
        explanation: "Darts are things used as means, so no ā or ab is needed."
      },
      {
        type: "choice",
        prompt: "Translate: \"Hostēs neque gladiō neque clāmōre terrentur.\"",
        choices: ["The enemies are terrified by neither sword nor shout.", "The enemies terrify neither sword nor shout.", "The sword and shout are terrified by enemies.", "The enemies are warned afterwards."],
        correct: "The enemies are terrified by neither sword nor shout.",
        explanation: "Neque...neque means neither...nor; gladiō and clāmōre are means."
      },
      {
        type: "choice",
        prompt: "Translate: \"Oppidum ab amīcīs tenētur.\"",
        choices: ["The town is held by friends.", "The friends hold the town actively.", "The town holds friends.", "Friends are held by the town."],
        correct: "The town is held by friends.",
        explanation: "Ab amīcīs is ablative of agent."
      },
      {
        type: "build",
        prompt: "Build in Latin: The camp is held in by mountains.",
        tokens: ["castra", "montibus", "continentur"],
        correct: "castra montibus continentur",
        explanation: "Montibus is ablative of means, and continentur is passive."
      }
    ]
  },
  {
    id: "lesson19-third-passive",
    lessonSet: "lesson19",
    number: "I",
    eyebrow: "Lesson 19 · Mittō passive",
    title: "Third Conjugation Passive",
    subtitle: "Practice mittō in the present passive.",
    color: "#5b8fc9",
    reference: "Henle Lesson 19 · Third-conjugation passive",
    questions: [
      {
        type: "choice",
        prompt: "What does \"mittor\" mean?",
        choices: ["I am sent", "I send", "we are sent", "they send"],
        correct: "I am sent",
        explanation: "Mittor is first person singular present passive."
      },
      {
        type: "choice",
        prompt: "What does \"mitteris\" mean?",
        choices: ["you are sent", "you send", "he is sent", "you all are sent"],
        correct: "you are sent",
        explanation: "Mitteris is second person singular present passive."
      },
      {
        type: "choice",
        prompt: "What does \"mittuntur\" mean?",
        choices: ["they are sent", "they send", "we are sent", "he is sent"],
        correct: "they are sent",
        explanation: "Mittuntur is third person plural passive."
      },
      {
        type: "choice",
        prompt: "Which form means \"we are sent\"?",
        choices: ["mittimur", "mittuntur", "mittiminī", "mittitur"],
        correct: "mittimur",
        explanation: "-mur marks first person plural passive."
      },
      {
        type: "build",
        prompt: "Build in Latin: The leaders are sent by Caesar.",
        tokens: ["ducēs", "ā", "Caesare", "mittuntur"],
        correct: "ducēs ā Caesare mittuntur",
        explanation: "Ā Caesare names the living agent; mittuntur means are sent."
      }
    ]
  },
  {
    id: "lesson19-imperfect-future-passive",
    lessonSet: "lesson19",
    number: "II",
    eyebrow: "Lesson 19 · Past and future",
    title: "Mittō Imperfect and Future Passive",
    subtitle: "Learn mittēbar and mittar patterns.",
    color: "#9a76b4",
    reference: "Henle Lesson 19 · Present-system passive",
    questions: [
      {
        type: "choice",
        prompt: "What does \"mittēbar\" mean?",
        choices: ["I was being sent", "I shall be sent", "I sent", "they were sent"],
        correct: "I was being sent",
        explanation: "Mittēbar is first person singular imperfect passive."
      },
      {
        type: "choice",
        prompt: "What does \"mittēbantur\" mean?",
        choices: ["they were being sent", "they will be sent", "they send", "we were being sent"],
        correct: "they were being sent",
        explanation: "Mittēbantur is third person plural imperfect passive."
      },
      {
        type: "choice",
        prompt: "What does \"mittar\" mean?",
        choices: ["I shall be sent", "I was being sent", "I am sent", "they will be sent"],
        correct: "I shall be sent",
        explanation: "Mittar is first person singular future passive."
      },
      {
        type: "choice",
        prompt: "What does \"mittentur\" mean?",
        choices: ["they will be sent", "they are sent", "they were sent", "they will send"],
        correct: "they will be sent",
        explanation: "Mittentur is third person plural future passive."
      },
      {
        type: "build",
        prompt: "Build in Latin: We shall be sent.",
        tokens: ["mittēmur"],
        correct: "mittēmur",
        explanation: "Mittēmur is first person plural future passive."
      }
    ]
  },
  {
    id: "lesson19-vocabulary",
    lessonSet: "lesson19",
    number: "III",
    eyebrow: "Lesson 19 · Vocabulary",
    title: "Hand Over, Send Away, Kill",
    subtitle: "Practice new third-conjugation verbs and small words.",
    color: "#de8465",
    reference: "Henle Lesson 19 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"trādō\" mean?",
        choices: ["hand over", "hold in", "warn", "preserve"],
        correct: "hand over",
        explanation: "Trādō means hand over."
      },
      {
        type: "choice",
        prompt: "What does \"dīmittō\" mean?",
        choices: ["send away or dismiss", "call upon", "contain", "fortify"],
        correct: "send away or dismiss",
        explanation: "Dīmittō means send away or dismiss."
      },
      {
        type: "choice",
        prompt: "What does \"occīdō\" mean?",
        choices: ["kill", "hear", "remain", "be away"],
        correct: "kill",
        explanation: "Occīdō means kill."
      },
      {
        type: "choice",
        prompt: "What does \"sine\" mean, and what case follows it?",
        choices: ["without + ablative", "through + accusative", "by + genitive", "because + nominative"],
        correct: "without + ablative",
        explanation: "Sine means without and takes the ablative."
      },
      {
        type: "choice",
        prompt: "What does \"ferē\" mean?",
        choices: ["almost", "afterwards", "there", "therefore"],
        correct: "almost",
        explanation: "Ferē means almost."
      }
    ]
  },
  {
    id: "lesson19-agency-means",
    lessonSet: "lesson19",
    number: "IV",
    eyebrow: "Lesson 19 · Review",
    title: "Agency and Means Together",
    subtitle: "Compare the two kinds of by-phrases in passive sentences.",
    color: "#3e9b77",
    reference: "Henle Lesson 19 · Agency and means",
    questions: [
      {
        type: "choice",
        prompt: "Which phrase is ablative of agent?",
        choices: ["ā Caesare", "gladiō", "tēlīs", "virtūte"],
        correct: "ā Caesare",
        explanation: "A living agent uses ā or ab plus the ablative."
      },
      {
        type: "choice",
        prompt: "Which phrase is ablative of means?",
        choices: ["gladiō", "ā duce", "ab hominibus", "ā militibus"],
        correct: "gladiō",
        explanation: "A sword is a thing used as means, so it stands in the ablative without ā or ab."
      },
      {
        type: "choice",
        prompt: "Translate: \"Christiani gladiīs occīduntur.\"",
        choices: ["The Christians are killed with swords.", "The Christians kill swords.", "The swords are killed by Christians.", "The Christians are sent away by swords."],
        correct: "The Christians are killed with swords.",
        explanation: "Gladiīs is ablative plural of means."
      },
      {
        type: "choice",
        prompt: "Translate: \"Dux ā militibus defenditur.\"",
        choices: ["The leader is defended by the soldiers.", "The leader defends the soldiers.", "The soldiers are defended by the leader.", "The leader is defended with swords."],
        correct: "The leader is defended by the soldiers.",
        explanation: "Ā militibus is ablative of agent."
      },
      {
        type: "build",
        prompt: "Build in Latin: The Christians are killed with swords.",
        tokens: ["Christiani", "gladiīs", "occīduntur"],
        correct: "Christiani gladiīs occīduntur",
        explanation: "Gladiīs names the means, so no ā or ab is used."
      }
    ]
  },
  {
    id: "lesson19-wrap",
    lessonSet: "lesson19",
    number: "V",
    eyebrow: "Lesson 19 · Mastery",
    title: "Third Passive Wrap-Up",
    subtitle: "Mix third-conjugation passive, agency, means, and new vocabulary.",
    color: "#c8912f",
    reference: "Henle Lesson 19 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Urbs hostibus trādētur.\"",
        choices: ["The city will be handed over to the enemies.", "The enemies will hand over the city.", "The city is being held by enemies.", "The enemies were sent from the city."],
        correct: "The city will be handed over to the enemies.",
        explanation: "Trādētur is future passive, and hostibus tells to whom."
      },
      {
        type: "choice",
        prompt: "Translate: \"Ducēs ā Caesare dīmittuntur.\"",
        choices: ["The leaders are sent away by Caesar.", "The leaders send Caesar away.", "Caesar is sent away by the leaders.", "The leaders will hand over Caesar."],
        correct: "The leaders are sent away by Caesar.",
        explanation: "Dīmittuntur is passive, and ā Caesare names the living agent."
      },
      {
        type: "choice",
        prompt: "Translate: \"Castra ferē sine spē defenduntur.\"",
        choices: ["The camp is defended almost without hope.", "The camp defends hope almost without soldiers.", "Hope is defended without the camp.", "The camp will be handed over by hope."],
        correct: "The camp is defended almost without hope.",
        explanation: "Ferē means almost; sine spē means without hope."
      },
      {
        type: "choice",
        prompt: "Which form means \"you will be sent\"?",
        choices: ["mittēris", "mitteris", "mittēbāris", "mittis"],
        correct: "mittēris",
        explanation: "Mittēris is future passive second person singular."
      },
      {
        type: "build",
        prompt: "Build in Latin: The leaders are sent away by Caesar.",
        tokens: ["ducēs", "ā", "Caesare", "dīmittuntur"],
        correct: "ducēs ā Caesare dīmittuntur",
        explanation: "Dīmittuntur means are sent away; ā Caesare names the agent."
      }
    ]
  },
  {
    id: "lesson20-fourth-passive",
    lessonSet: "lesson20",
    number: "I",
    eyebrow: "Lesson 20 · Audiō passive",
    title: "Fourth Conjugation Passive",
    subtitle: "Practice audiō in the present, imperfect, and future passive.",
    color: "#5b8fc9",
    reference: "Henle Lesson 20 · Fourth-conjugation passive",
    questions: [
      {
        type: "choice",
        prompt: "What does \"audior\" mean?",
        choices: ["I am heard", "I hear", "we are heard", "they hear"],
        correct: "I am heard",
        explanation: "Audior is first person singular present passive."
      },
      {
        type: "choice",
        prompt: "What does \"audītur\" mean?",
        choices: ["he, she, or it is heard", "he hears", "they are heard", "you are heard"],
        correct: "he, she, or it is heard",
        explanation: "Audītur is third person singular passive."
      },
      {
        type: "choice",
        prompt: "What does \"audiuntur\" mean?",
        choices: ["they are heard", "they hear", "we are heard", "you all hear"],
        correct: "they are heard",
        explanation: "Audiuntur is third person plural present passive."
      },
      {
        type: "choice",
        prompt: "What does \"audiētur\" mean?",
        choices: ["he, she, or it will be heard", "he was being heard", "he hears", "they will be heard"],
        correct: "he, she, or it will be heard",
        explanation: "Audiētur is future passive."
      },
      {
        type: "build",
        prompt: "Build in Latin: The shout was being heard.",
        tokens: ["clamor", "audiēbātur"],
        correct: "clamor audiēbātur",
        explanation: "Audiēbātur is imperfect passive: was being heard."
      }
    ]
  },
  {
    id: "lesson20-munio",
    lessonSet: "lesson20",
    number: "II",
    eyebrow: "Lesson 20 · Mūniō passive",
    title: "Fortified and Constructed",
    subtitle: "Use mūniō forms for walls, towns, roads, and camps.",
    color: "#9a76b4",
    reference: "Henle Lesson 20 · Review vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What can \"mūniō\" mean?",
        choices: ["fortify or construct", "hear", "hand over", "hold back"],
        correct: "fortify or construct",
        explanation: "Mūniō can mean fortify, and with viam or viās it can mean construct."
      },
      {
        type: "choice",
        prompt: "Translate: \"Urbs mūrō mūnītur.\"",
        choices: ["The city is fortified with a wall.", "The wall is fortified by the city.", "The city hears the wall.", "The city will be sent to the wall."],
        correct: "The city is fortified with a wall.",
        explanation: "Mūrō is ablative of means; mūnītur is passive."
      },
      {
        type: "choice",
        prompt: "What does \"mūniuntur\" mean?",
        choices: ["they are fortified", "they fortify", "he is fortified", "we were fortified"],
        correct: "they are fortified",
        explanation: "Mūniuntur is third person plural present passive."
      },
      {
        type: "choice",
        prompt: "What does \"mūnientur\" mean?",
        choices: ["they will be fortified", "they are fortified", "they were fortified", "they will fortify"],
        correct: "they will be fortified",
        explanation: "Mūnientur is future passive."
      },
      {
        type: "build",
        prompt: "Build in Latin: The bridges were being fortified by the legions.",
        tokens: ["pontēs", "ā", "legiōnibus", "mūniēbantur"],
        correct: "pontēs ā legiōnibus mūniēbantur",
        explanation: "Ā legiōnibus is ablative of agent, and mūniēbantur means were being fortified."
      }
    ]
  },
  {
    id: "lesson20-accompaniment",
    lessonSet: "lesson20",
    number: "III",
    eyebrow: "Lesson 20 · Accompaniment",
    title: "With as Company",
    subtitle: "Distinguish accompaniment from means.",
    color: "#de8465",
    reference: "Henle Lesson 20 · Ablative of accompaniment",
    questions: [
      {
        type: "choice",
        prompt: "When \"with\" means in company with, Latin uses...",
        choices: ["cum plus the ablative", "the ablative alone", "ā plus the ablative", "the accusative alone"],
        correct: "cum plus the ablative",
        explanation: "The ablative of accompaniment uses cum plus the ablative."
      },
      {
        type: "choice",
        prompt: "Which phrase means \"with Caesar\" as accompaniment?",
        choices: ["cum Caesare", "Caesare", "ā Caesare", "Caesarem"],
        correct: "cum Caesare",
        explanation: "Cum Caesare means with Caesar, in company with Caesar."
      },
      {
        type: "choice",
        prompt: "In \"gladiō occīditur,\" what is \"gladiō\"?",
        choices: ["ablative of means", "ablative of accompaniment", "ablative of agent", "direct object"],
        correct: "ablative of means",
        explanation: "A sword is a tool, not company, so it is means."
      },
      {
        type: "choice",
        prompt: "In \"cum Rōmānīs vēnit,\" what is \"cum Rōmānīs\"?",
        choices: ["ablative of accompaniment", "ablative of means", "direct object", "subject"],
        correct: "ablative of accompaniment",
        explanation: "Cum Rōmānīs means in company with the Romans."
      },
      {
        type: "build",
        prompt: "Build in Latin: Mary is in heaven with God.",
        tokens: ["Maria", "in", "Caelō", "cum", "Deo", "est"],
        correct: "Maria in Caelō cum Deo est",
        explanation: "Cum Deo is accompaniment: with God."
      }
    ]
  },
  {
    id: "lesson20-venio-convenio",
    lessonSet: "lesson20",
    number: "IV",
    eyebrow: "Lesson 20 · Review verbs",
    title: "Veniō and Conveniō",
    subtitle: "Review fourth-conjugation intransitive verbs while practicing accompaniment.",
    color: "#3e9b77",
    reference: "Henle Lesson 20 · Review vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"veniō\" mean?",
        choices: ["come", "hear", "fortify", "hold"],
        correct: "come",
        explanation: "Veniō means come."
      },
      {
        type: "choice",
        prompt: "What does \"conveniō\" mean?",
        choices: ["come together or assemble", "send away", "press hard", "preserve"],
        correct: "come together or assemble",
        explanation: "Conveniō means come together or assemble."
      },
      {
        type: "choice",
        prompt: "Translate: \"Cum Caesare per montēs vēnī.\"",
        choices: ["I came through the mountains with Caesar.", "Caesar came through me with the mountains.", "I heard Caesar through the mountains.", "I was fortified by Caesar."],
        correct: "I came through the mountains with Caesar.",
        explanation: "Cum Caesare is accompaniment, and per montēs means through the mountains."
      },
      {
        type: "choice",
        prompt: "Why do veniō and conveniō not have passive forms in this drill?",
        choices: ["they are intransitive here", "they are first-declension nouns", "they are always plural", "they have no present tense"],
        correct: "they are intransitive here",
        explanation: "Intransitive verbs do not take a direct object, so they are not practiced as ordinary passives here."
      },
      {
        type: "build",
        prompt: "Build in Latin: The cavalry came with the soldiers.",
        tokens: ["equitēs", "cum", "militibus", "vēnērunt"],
        correct: "equitēs cum militibus vēnērunt",
        explanation: "Cum militibus is accompaniment: with the soldiers."
      }
    ]
  },
  {
    id: "lesson20-wrap",
    lessonSet: "lesson20",
    number: "V",
    eyebrow: "Lesson 20 · Mastery",
    title: "Fourth Passive and With-Phrases",
    subtitle: "Mix fourth-conjugation passive, means, agent, and accompaniment.",
    color: "#c8912f",
    reference: "Henle Lesson 20 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Quid ā vōbīs audītur?\"",
        choices: ["What is heard by you all?", "What do you all hear?", "Why are you all heard?", "Who is heard with you all?"],
        correct: "What is heard by you all?",
        explanation: "Audītur is passive, and ā vōbīs names the agent."
      },
      {
        type: "choice",
        prompt: "Translate: \"Silvae periculōrum plēnae sunt.\"",
        choices: ["The forests are full of dangers.", "The dangers are full of forests.", "The forests are being fortified.", "The dangers are heard in the forests."],
        correct: "The forests are full of dangers.",
        explanation: "Plēnus can take the genitive; periculōrum means of dangers."
      },
      {
        type: "choice",
        prompt: "Which sentence uses accompaniment?",
        choices: ["Cum Caesare vēnī.", "Gladiō occīditur.", "Ā Caesare mittitur.", "Tēlīs terrentur."],
        correct: "Cum Caesare vēnī.",
        explanation: "Cum Caesare means with Caesar, in company with Caesar."
      },
      {
        type: "choice",
        prompt: "Which sentence uses means?",
        choices: ["Urbs mūrō mūnītur.", "Cum Rōmānīs vēnit.", "Ā rēge audītur.", "Ab amīcīs laudātur."],
        correct: "Urbs mūrō mūnītur.",
        explanation: "Mūrō is the wall by means of which the city is fortified."
      },
      {
        type: "build",
        prompt: "Build in Latin: The city will be fortified with a wall.",
        tokens: ["urbs", "mūrō", "mūniētur"],
        correct: "urbs mūrō mūniētur",
        explanation: "Mūrō is ablative of means, and mūniētur is future passive."
      }
    ]
  },
  {
    id: "lesson21-perfect-system-passive",
    lessonSet: "lesson21",
    number: "I",
    eyebrow: "Lesson 21 · Perfect passive",
    title: "The Perfect System Passive",
    subtitle: "Use the perfect participle passive with forms of sum.",
    color: "#5b8fc9",
    reference: "Henle Lesson 21 · Perfect-system passive",
    questions: [
      {
        type: "choice",
        prompt: "How is the perfect passive formed?",
        choices: ["perfect participle passive plus a form of sum", "present stem plus -ba-", "perfect stem plus active endings", "cum plus the ablative"],
        correct: "perfect participle passive plus a form of sum",
        explanation: "The perfect-system passive is compound: participle plus sum."
      },
      {
        type: "choice",
        prompt: "What does \"laudātus sum\" mean?",
        choices: ["I was praised", "I praise", "I shall be praised", "they praised"],
        correct: "I was praised",
        explanation: "Laudātus sum is perfect passive."
      },
      {
        type: "choice",
        prompt: "What does \"laudātī sunt\" mean?",
        choices: ["they were praised", "they praise", "he was praised", "we had praised"],
        correct: "they were praised",
        explanation: "Laudātī agrees with a masculine plural subject, and sunt completes the perfect passive."
      },
      {
        type: "choice",
        prompt: "In \"Maria laudāta est,\" why is the participle \"laudāta\"?",
        choices: ["it agrees with feminine singular Maria", "it is always feminine", "it is accusative plural", "it follows cum"],
        correct: "it agrees with feminine singular Maria",
        explanation: "The perfect participle passive agrees with the subject like an adjective."
      },
      {
        type: "build",
        prompt: "Build in Latin: The soldiers were praised.",
        tokens: ["militēs", "laudātī", "sunt"],
        correct: "militēs laudātī sunt",
        explanation: "Militēs is masculine plural, so laudātī agrees with it."
      }
    ]
  },
  {
    id: "lesson21-participle-agreement",
    lessonSet: "lesson21",
    number: "II",
    eyebrow: "Lesson 21 · Agreement",
    title: "The Participle Must Agree",
    subtitle: "Match the participle ending to the subject’s gender and number.",
    color: "#9a76b4",
    reference: "Henle Lesson 21 · Perfect participle passive",
    questions: [
      {
        type: "choice",
        prompt: "Which form agrees with \"oppidum\"?",
        choices: ["trāditum est", "trāditus est", "trādita est", "trāditī sunt"],
        correct: "trāditum est",
        explanation: "Oppidum is neuter singular, so the participle is trāditum."
      },
      {
        type: "choice",
        prompt: "Which form agrees with \"litterae\"?",
        choices: ["missae sunt", "missus est", "missum est", "missī sunt"],
        correct: "missae sunt",
        explanation: "Litterae is feminine plural, so missae sunt agrees."
      },
      {
        type: "choice",
        prompt: "Which form agrees with \"castra\"?",
        choices: ["mūnīta sunt", "mūnītus est", "mūnītī sunt", "mūnīta est"],
        correct: "mūnīta sunt",
        explanation: "Castra is neuter plural in Latin, so mūnīta sunt agrees."
      },
      {
        type: "choice",
        prompt: "Translate: \"Pax confirmāta est.\"",
        choices: ["Peace has been strengthened.", "Peace strengthened.", "Peace will be strengthened.", "They strengthened peace."],
        correct: "Peace has been strengthened.",
        explanation: "Confirmāta est is perfect passive and agrees with feminine singular pax."
      },
      {
        type: "build",
        prompt: "Build in Latin: The letters were sent.",
        tokens: ["litterae", "missae", "sunt"],
        correct: "litterae missae sunt",
        explanation: "Litterae is feminine plural, so missae agrees."
      }
    ]
  },
  {
    id: "lesson21-pluperfect-future-perfect",
    lessonSet: "lesson21",
    number: "III",
    eyebrow: "Lesson 21 · Had been",
    title: "Had Been and Will Have Been",
    subtitle: "Use eram or erō forms with the passive participle.",
    color: "#de8465",
    reference: "Henle Lesson 21 · Pluperfect and future perfect passive",
    questions: [
      {
        type: "choice",
        prompt: "What does \"laudātus eram\" mean?",
        choices: ["I had been praised", "I was praised", "I shall have been praised", "I praised"],
        correct: "I had been praised",
        explanation: "Eram makes the passive compound pluperfect."
      },
      {
        type: "choice",
        prompt: "What does \"laudātus erō\" mean?",
        choices: ["I shall have been praised", "I had been praised", "I am praised", "I shall praise"],
        correct: "I shall have been praised",
        explanation: "Erō makes the passive compound future perfect."
      },
      {
        type: "choice",
        prompt: "Translate: \"Oppidum oppugnātum erat.\"",
        choices: ["The town had been attacked.", "The town was attacking.", "The town will be attacked.", "They attacked the town."],
        correct: "The town had been attacked.",
        explanation: "Oppugnātum erat is pluperfect passive."
      },
      {
        type: "choice",
        prompt: "Translate: \"Victī erimus.\"",
        choices: ["We shall have been conquered.", "We had been conquered.", "They were conquered.", "We shall conquer."],
        correct: "We shall have been conquered.",
        explanation: "Erimus makes this future perfect passive."
      },
      {
        type: "build",
        prompt: "Build in Latin: The camp had been moved.",
        tokens: ["castra", "mōta", "erant"],
        correct: "castra mōta erant",
        explanation: "Castra is neuter plural, so mōta agrees; erant makes it pluperfect passive."
      }
    ]
  },
  {
    id: "lesson21-new-verbs",
    lessonSet: "lesson21",
    number: "IV",
    eyebrow: "Lesson 21 · Vocabulary",
    title: "Explore, Press, Retain, Prepare",
    subtitle: "Practice new vocabulary and their perfect passive participles.",
    color: "#3e9b77",
    reference: "Henle Lesson 21 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does \"explōrō\" mean?",
        choices: ["reconnoiter or find out", "press hard", "hold back", "give thanks"],
        correct: "reconnoiter or find out",
        explanation: "Explōrō means reconnoiter or find out."
      },
      {
        type: "choice",
        prompt: "What does \"premō\" mean?",
        choices: ["press or press hard", "hear", "come", "prepare"],
        correct: "press or press hard",
        explanation: "Premō means press or press hard."
      },
      {
        type: "choice",
        prompt: "What does \"retineō\" mean?",
        choices: ["hold back or keep", "call upon", "burn", "come together"],
        correct: "hold back or keep",
        explanation: "Retineō means hold back or keep."
      },
      {
        type: "choice",
        prompt: "What does \"comparō\" mean?",
        choices: ["prepare or get ready", "dismiss", "contain", "be distant"],
        correct: "prepare or get ready",
        explanation: "Comparō means prepare or get ready."
      },
      {
        type: "choice",
        prompt: "What does \"vehementer\" mean?",
        choices: ["greatly or violently", "afterwards", "almost", "without"],
        correct: "greatly or violently",
        explanation: "Vehementer means greatly or violently."
      }
    ]
  },
  {
    id: "lesson21-wrap",
    lessonSet: "lesson21",
    number: "V",
    eyebrow: "Lesson 21 · Mastery",
    title: "Perfect Passive Wrap-Up",
    subtitle: "Mix perfect passive forms, agreement, agents, means, and new verbs.",
    color: "#c8912f",
    reference: "Henle Lesson 21 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: \"Omnia loca explōrāta erant.\"",
        choices: ["All the places had been reconnoitered.", "All the places were reconnoitering.", "All the places will be held back.", "All the places have come together."],
        correct: "All the places had been reconnoitered.",
        explanation: "Explōrāta erant is pluperfect passive and agrees with neuter plural loca."
      },
      {
        type: "choice",
        prompt: "Translate: \"Ducēs retentī sunt.\"",
        choices: ["The leaders were held back.", "The leaders held back.", "The leaders will be held back.", "The leader was held back."],
        correct: "The leaders were held back.",
        explanation: "Retentī sunt is perfect passive masculine plural."
      },
      {
        type: "choice",
        prompt: "Translate: \"Copia tēlōrum comparāta erat.\"",
        choices: ["A supply of weapons had been prepared.", "Weapons had prepared the supply.", "The supply will be prepared with weapons.", "A supply of weapons is heard."],
        correct: "A supply of weapons had been prepared.",
        explanation: "Comparāta erat is pluperfect passive and agrees with copia."
      },
      {
        type: "choice",
        prompt: "Which form means \"you all had been praised\"?",
        choices: ["laudātī erātis", "laudātī estis", "laudātus erās", "laudāminī"],
        correct: "laudātī erātis",
        explanation: "Erātis makes the compound pluperfect passive for you all."
      },
      {
        type: "build",
        prompt: "Build in Latin: The bridge was burned.",
        tokens: ["pons", "incēnsus", "est"],
        correct: "pons incēnsus est",
        explanation: "Pons is masculine singular, so incēnsus agrees; est completes the perfect passive."
      }
    ]
  },
  {
    id: "lesson22-present-subjunctive",
    lessonSet: "lesson22",
    number: "I",
    eyebrow: "Lesson 22 · Present subjunctive",
    title: "The Present Subjunctive",
    subtitle: "Meet the may/that forms used inside purpose clauses.",
    color: "#5b8fc9",
    reference: "Henle Lesson 22 · Present subjunctive active",
    questions: [
      {
        type: "choice",
        prompt: "Which form means “he may praise” or “that he praise”?",
        choices: ["laudet", "laudat", "laudābat", "laudābit"],
        correct: "laudet",
        explanation: "Laudet is present subjunctive; laudat is present indicative."
      },
      {
        type: "choice",
        prompt: "What happens to first-conjugation ā before the present subjunctive endings?",
        choices: ["it changes to ē", "it becomes bā", "it disappears in every form", "it becomes passive"],
        correct: "it changes to ē",
        explanation: "Laudō uses present subjunctive forms like laudem, laudēs, laudet."
      },
      {
        type: "choice",
        prompt: "What does “mittant” mean in a purpose clause?",
        choices: ["that they may send", "they send", "they were sent", "you all will send"],
        correct: "that they may send",
        explanation: "Mittant is third-conjugation present subjunctive, third person plural."
      },
      {
        type: "choice",
        prompt: "Which is the present subjunctive of sum for “we may be”?",
        choices: ["sīmus", "sumus", "erāmus", "erimus"],
        correct: "sīmus",
        explanation: "The present subjunctive of sum is sim, sīs, sit, sīmus, sītis, sint."
      },
      {
        type: "build",
        prompt: "Build in Latin: Let us praise God.",
        tokens: ["Deum", "laudēmus"],
        correct: "Deum laudēmus",
        explanation: "Laudēmus can mean let us praise or that we may praise."
      }
    ]
  },
  {
    id: "lesson22-purpose-clauses",
    lessonSet: "lesson22",
    number: "II",
    eyebrow: "Lesson 22 · Purpose",
    title: "Ut Means In Order That",
    subtitle: "Use ut plus the subjunctive to explain why the action happens.",
    color: "#3e9b77",
    reference: "Henle Lesson 22 · Purpose clauses",
    questions: [
      {
        type: "choice",
        prompt: "Translate: “Militēs veniunt ut urbem defendant.”",
        choices: ["The soldiers come to defend the city.", "The soldiers come because they defended the city.", "The soldiers defend the city and come.", "The city comes to defend the soldiers."],
        correct: "The soldiers come to defend the city.",
        explanation: "Ut defendant gives the purpose: so that they may defend."
      },
      {
        type: "choice",
        prompt: "What mood is used in a Latin purpose clause?",
        choices: ["subjunctive", "indicative", "imperative", "infinitive"],
        correct: "subjunctive",
        explanation: "A purpose clause uses the subjunctive mood."
      },
      {
        type: "choice",
        prompt: "In “Caesar nuntium mittit ut pacem petat,” what is the purpose?",
        choices: ["to seek peace", "to send Caesar", "to preserve the messenger", "to praise peace"],
        correct: "to seek peace",
        explanation: "Ut pacem petat tells why the messenger is sent."
      },
      {
        type: "choice",
        prompt: "Which word introduces a positive purpose clause?",
        choices: ["ut", "nē", "sine", "aut"],
        correct: "ut",
        explanation: "Ut introduces positive purpose: in order that."
      },
      {
        type: "build",
        prompt: "Build in Latin: We fight to preserve peace.",
        tokens: ["pugnāmus", "ut", "pacem", "cōnservēmus"],
        correct: "pugnāmus ut pacem cōnservēmus",
        explanation: "The purpose clause is ut pacem cōnservēmus."
      }
    ]
  },
  {
    id: "lesson22-primary-tense-purpose",
    lessonSet: "lesson22",
    number: "III",
    eyebrow: "Lesson 22 · Sequence",
    title: "Primary Main Verb, Present Subjunctive",
    subtitle: "Present, future, and future perfect main verbs use the present subjunctive in purpose clauses.",
    color: "#9a76b4",
    reference: "Henle Lesson 22 · Primary tenses",
    questions: [
      {
        type: "choice",
        prompt: "Which main-verb tense is primary?",
        choices: ["future", "imperfect", "perfect", "pluperfect"],
        correct: "future",
        explanation: "The primary indicative tenses are present, future, and future perfect."
      },
      {
        type: "choice",
        prompt: "In “Veniunt ut audiant,” why is audiant present subjunctive?",
        choices: ["veniunt is a primary tense", "audiant is a noun", "all clauses with ut are passive", "audiant is dative"],
        correct: "veniunt is a primary tense",
        explanation: "A primary main verb takes the present subjunctive in the purpose clause."
      },
      {
        type: "choice",
        prompt: "Translate: “Dux mīlitēs mittet ut pontem teneant.”",
        choices: ["The leader will send soldiers to hold the bridge.", "The soldiers sent the leader to the bridge.", "The bridge will hold the soldiers.", "The leader had sent soldiers to hold the bridge."],
        correct: "The leader will send soldiers to hold the bridge.",
        explanation: "Mittet is future, so teneant is present subjunctive in the purpose clause."
      },
      {
        type: "choice",
        prompt: "Which purpose-clause verb fits after “mittet”?",
        choices: ["videant", "vidērent", "vīderunt", "vidēbant"],
        correct: "videant",
        explanation: "Mittet is future, a primary tense, so the purpose clause uses present subjunctive."
      },
      {
        type: "build",
        prompt: "Build in Latin: They will come to hear the speech.",
        tokens: ["venient", "ut", "ōrātiōnem", "audiant"],
        correct: "venient ut ōrātiōnem audiant",
        explanation: "Venient is primary, so audiant is present subjunctive."
      }
    ]
  },
  {
    id: "lesson22-negative-purpose",
    lessonSet: "lesson22",
    number: "IV",
    eyebrow: "Lesson 22 · Negative purpose",
    title: "Nē Means Lest",
    subtitle: "Use nē plus the subjunctive for a negative purpose.",
    color: "#de8465",
    reference: "Henle Lesson 22 · Negative purpose clauses",
    questions: [
      {
        type: "choice",
        prompt: "What does nē mean in a purpose clause?",
        choices: ["lest / in order that not", "and", "without", "because"],
        correct: "lest / in order that not",
        explanation: "Negative purpose uses nē, not ut nōn."
      },
      {
        type: "choice",
        prompt: "Translate: “Castra mūniunt nē hostēs ea expugnent.”",
        choices: ["They fortify the camp lest the enemy storm it.", "The enemy storms the camp because it is fortified.", "They storm the enemy camp.", "The camp fortifies the enemy."],
        correct: "They fortify the camp lest the enemy storm it.",
        explanation: "Nē expugnent means lest they storm or in order that they may not storm."
      },
      {
        type: "choice",
        prompt: "Which is correct Latin for “lest there be fear”?",
        choices: ["nē metus sit", "ut metus est", "sine metū sit", "nē metus erat"],
        correct: "nē metus sit",
        explanation: "Sit is present subjunctive of sum."
      },
      {
        type: "choice",
        prompt: "Which sentence has a negative purpose clause?",
        choices: ["Pugnant nē servi sint.", "Pugnant et servi sunt.", "Servī nōn pugnant.", "Sine servis pugnant."],
        correct: "Pugnant nē servi sint.",
        explanation: "Nē servi sint means lest they be slaves."
      },
      {
        type: "build",
        prompt: "Build in Latin: They wait lest the enemy come.",
        tokens: ["exspectant", "nē", "hostēs", "veniant"],
        correct: "exspectant nē hostēs veniant",
        explanation: "Nē plus present subjunctive gives negative purpose after a primary verb."
      }
    ]
  },
  {
    id: "lesson22-wrap",
    lessonSet: "lesson22",
    number: "V",
    eyebrow: "Lesson 22 · Mastery",
    title: "Present Subjunctive Purpose",
    subtitle: "Mix present subjunctive forms, ut, nē, primary tenses, and new words.",
    color: "#c8912f",
    reference: "Henle Lesson 22 · Review",
    questions: [
      {
        type: "choice",
        prompt: "What does “celeriter” mean?",
        choices: ["swiftly", "a long time", "new", "wall"],
        correct: "swiftly",
        explanation: "Celeriter means swiftly."
      },
      {
        type: "choice",
        prompt: "What does “fossa” mean?",
        choices: ["ditch", "friendship", "life", "winter quarters"],
        correct: "ditch",
        explanation: "Fossa means ditch."
      },
      {
        type: "choice",
        prompt: "Translate: “Vallum parant ut castra defendant.”",
        choices: ["They prepare a rampart to defend the camp.", "They defend a rampart because the camp is prepared.", "The camp prepares the rampart.", "They storm the rampart."],
        correct: "They prepare a rampart to defend the camp.",
        explanation: "Ut defendant explains the purpose of preparing the rampart."
      },
      {
        type: "choice",
        prompt: "Which form means “that you all may be”?",
        choices: ["sītis", "estis", "erātis", "eritis"],
        correct: "sītis",
        explanation: "Sītis is present subjunctive, second person plural."
      },
      {
        type: "build",
        prompt: "Build in Latin: The friends come swiftly to help.",
        tokens: ["amīcī", "celeriter", "veniunt", "ut", "adjuvent"],
        correct: "amīcī celeriter veniunt ut adjuvent",
        explanation: "Ut adjuvent gives the purpose: to help."
      }
    ]
  },
  {
    id: "lesson23-imperfect-subjunctive",
    lessonSet: "lesson23",
    number: "I",
    eyebrow: "Lesson 23 · Imperfect subjunctive",
    title: "The Imperfect Subjunctive",
    subtitle: "Build imperfect subjunctive forms from the present infinitive.",
    color: "#5b8fc9",
    reference: "Henle Lesson 23 · Imperfect subjunctive active",
    questions: [
      {
        type: "choice",
        prompt: "How do you form the imperfect subjunctive active?",
        choices: ["present infinitive plus personal endings", "perfect stem plus ī", "present stem plus passive signs", "genitive singular plus endings"],
        correct: "present infinitive plus personal endings",
        explanation: "Laudāre plus -m gives laudārem; monēre plus -s gives monērēs."
      },
      {
        type: "choice",
        prompt: "What does “laudārent” mean in a purpose clause?",
        choices: ["that they might praise", "they praise", "they will praise", "they were praised"],
        correct: "that they might praise",
        explanation: "Laudārent is imperfect subjunctive, third person plural."
      },
      {
        type: "choice",
        prompt: "Which is the imperfect subjunctive of sum for “he might be”?",
        choices: ["esset", "est", "erat", "sit"],
        correct: "esset",
        explanation: "The imperfect subjunctive of sum is essem, essēs, esset, essēmus, essētis, essent."
      },
      {
        type: "choice",
        prompt: "Which form means “we might hear”?",
        choices: ["audīrēmus", "audīmus", "audiēbāmus", "audīvimus"],
        correct: "audīrēmus",
        explanation: "Audīrēmus is fourth-conjugation imperfect subjunctive."
      },
      {
        type: "build",
        prompt: "Build in Latin: that we might send",
        tokens: ["ut", "mitterēmus"],
        correct: "ut mitterēmus",
        explanation: "Mitterēmus is imperfect subjunctive, first person plural."
      }
    ]
  },
  {
    id: "lesson23-secondary-tenses",
    lessonSet: "lesson23",
    number: "II",
    eyebrow: "Lesson 23 · Sequence",
    title: "Secondary Main Verb, Imperfect Subjunctive",
    subtitle: "Imperfect, perfect, and pluperfect main verbs use the imperfect subjunctive in purpose clauses.",
    color: "#9a76b4",
    reference: "Henle Lesson 23 · Secondary tenses",
    questions: [
      {
        type: "choice",
        prompt: "Which main-verb tense is secondary?",
        choices: ["perfect", "present", "future", "future perfect"],
        correct: "perfect",
        explanation: "The secondary indicative tenses are imperfect, perfect, and pluperfect."
      },
      {
        type: "choice",
        prompt: "In “Mīlitēs mīsērunt ut pacem peterent,” why is peterent imperfect subjunctive?",
        choices: ["mīsērunt is a secondary tense", "peterent is a noun", "pacem is plural", "ut always takes the future"],
        correct: "mīsērunt is a secondary tense",
        explanation: "A secondary main verb takes the imperfect subjunctive in a purpose clause."
      },
      {
        type: "choice",
        prompt: "Translate: “Dux legātōs vocāvit ut cōnsilium audīrent.”",
        choices: ["The leader called the envoys to hear the plan.", "The envoys called the leader because he heard the plan.", "The plan called the envoys.", "The leader will call the envoys to hear the plan."],
        correct: "The leader called the envoys to hear the plan.",
        explanation: "Vocāvit is secondary, so audīrent is imperfect subjunctive."
      },
      {
        type: "choice",
        prompt: "Which purpose-clause verb fits after “vōcāvit”?",
        choices: ["audīrent", "audiant", "audiunt", "audient"],
        correct: "audīrent",
        explanation: "Vōcāvit is perfect indicative, so the purpose clause uses imperfect subjunctive."
      },
      {
        type: "build",
        prompt: "Build in Latin: They came to see the city.",
        tokens: ["vēnērunt", "ut", "urbem", "vidērent"],
        correct: "vēnērunt ut urbem vidērent",
        explanation: "Vēnērunt is secondary, so vidērent is imperfect subjunctive."
      }
    ]
  },
  {
    id: "lesson23-adjectives-as-nouns",
    lessonSet: "lesson23",
    number: "III",
    eyebrow: "Lesson 23 · Adjectives as nouns",
    title: "The Brave, The Good, The Weak",
    subtitle: "Let adjectives stand as nouns when the person or group is understood.",
    color: "#3e9b77",
    reference: "Henle Lesson 23 · Adjectives used as nouns",
    questions: [
      {
        type: "choice",
        prompt: "What can “fortēs” mean by itself?",
        choices: ["the brave", "bravely", "the brave thing", "to brave men"],
        correct: "the brave",
        explanation: "A masculine plural adjective can stand for people: the brave."
      },
      {
        type: "choice",
        prompt: "Translate: “Fortēs labōrēs gravēs sustinent.”",
        choices: ["The brave endure heavy labors.", "Brave labors endure men.", "The heavy brave men work.", "The ranks hold hostages."],
        correct: "The brave endure heavy labors.",
        explanation: "Fortēs can mean the brave, and labōrēs is the direct object."
      },
      {
        type: "choice",
        prompt: "What does “labor” mean?",
        choices: ["toil, labor", "rank", "hostage", "council"],
        correct: "toil, labor",
        explanation: "Labor means toil or labor."
      },
      {
        type: "choice",
        prompt: "What does “obsēs” mean?",
        choices: ["hostage", "rank", "wide", "easily"],
        correct: "hostage",
        explanation: "Obsēs is a common-gender noun meaning hostage."
      },
      {
        type: "build",
        prompt: "Build in Latin: The good help the weak.",
        tokens: ["bonī", "miserōs", "adjuvant"],
        correct: "bonī miserōs adjuvant",
        explanation: "Bonī can mean the good; miserōs can mean the wretched or weak as direct object."
      }
    ]
  },
  {
    id: "lesson23-inter-se",
    lessonSet: "lesson23",
    number: "IV",
    eyebrow: "Lesson 23 · Idiom",
    title: "Inter Sē Means Among Themselves",
    subtitle: "Learn the hostage-exchange idiom with inter and reflexive pronouns.",
    color: "#de8465",
    reference: "Henle Lesson 23 · Inter with reflexives",
    questions: [
      {
        type: "choice",
        prompt: "What does “obsidēs inter sē dant” mean idiomatically?",
        choices: ["they exchange hostages", "they give hostages to Caesar", "they keep hostages away", "they approach the hostages"],
        correct: "they exchange hostages",
        explanation: "Literally they give hostages among themselves; idiomatically they exchange hostages."
      },
      {
        type: "choice",
        prompt: "What case follows inter?",
        choices: ["accusative", "ablative", "genitive", "dative"],
        correct: "accusative",
        explanation: "Inter is a preposition with the accusative."
      },
      {
        type: "choice",
        prompt: "Translate: “Principēs inter sē dē pāce agēbant.”",
        choices: ["The chiefs were discussing peace among themselves.", "The chiefs gave peace to them.", "The chiefs were away from peace.", "Peace discussed the chiefs."],
        correct: "The chiefs were discussing peace among themselves.",
        explanation: "Inter sē means among themselves; dē pāce means concerning peace."
      },
      {
        type: "choice",
        prompt: "What does “statim” mean?",
        choices: ["at once", "easily", "wide", "rank"],
        correct: "at once",
        explanation: "Statim means at once or immediately."
      },
      {
        type: "build",
        prompt: "Build in Latin: The tribes exchange hostages.",
        tokens: ["gentēs", "obsidēs", "inter", "sē", "dant"],
        correct: "gentēs obsidēs inter sē dant",
        explanation: "Inter sē with dant gives the exchange idiom."
      }
    ]
  },
  {
    id: "lesson23-wrap",
    lessonSet: "lesson23",
    number: "V",
    eyebrow: "Lesson 23 · Mastery",
    title: "Past Purpose Clauses",
    subtitle: "Mix imperfect subjunctive, secondary tenses, adjectives as nouns, and new words.",
    color: "#c8912f",
    reference: "Henle Lesson 23 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: “Caesar legiōnēs exspectāvit ut hostēs vinceret.”",
        choices: ["Caesar waited for the legions to conquer the enemy.", "Caesar will wait for the legions to conquer.", "The enemy conquered Caesar’s legions.", "Caesar conquered the enemy because he waited."],
        correct: "Caesar waited for the legions to conquer the enemy.",
        explanation: "Exspectāvit is secondary, so vinceret is imperfect subjunctive."
      },
      {
        type: "choice",
        prompt: "Which form means “they might be”?",
        choices: ["essent", "sint", "erant", "erunt"],
        correct: "essent",
        explanation: "Essent is imperfect subjunctive, third person plural."
      },
      {
        type: "choice",
        prompt: "What does “cōnsilium” mean?",
        choices: ["plan, counsel", "council", "tribune", "rank"],
        correct: "plan, counsel",
        explanation: "Cōnsilium means plan or counsel; concilium means council."
      },
      {
        type: "choice",
        prompt: "Which is a correct secondary-tense purpose clause?",
        choices: ["vēnit ut audīret", "venit ut audiat", "veniet ut audiat", "venit et audit"],
        correct: "vēnit ut audīret",
        explanation: "Vēnit can be perfect here, so audīret is the expected imperfect subjunctive."
      },
      {
        type: "build",
        prompt: "Build in Latin: The leaders gave rewards so that the soldiers might fight.",
        tokens: ["ducēs", "praemia", "dedērunt", "ut", "mīlitēs", "pugnārent"],
        correct: "ducēs praemia dedērunt ut mīlitēs pugnārent",
        explanation: "Dedērunt is secondary, so pugnārent is imperfect subjunctive."
      }
    ]
  },
  {
    id: "lesson24-relative-pronouns",
    lessonSet: "lesson24",
    number: "I",
    eyebrow: "Lesson 24 · Relative pronouns",
    title: "Qui, Quae, Quod",
    subtitle: "Use who, which, and that to join a noun to a describing clause.",
    color: "#5b8fc9",
    reference: "Henle Lesson 24 · Relative clauses",
    questions: [
      {
        type: "choice",
        prompt: "What is a relative pronoun in English?",
        choices: ["who, which, or that", "and or but", "to or from", "not or without"],
        correct: "who, which, or that",
        explanation: "A relative pronoun introduces a clause that describes a noun."
      },
      {
        type: "choice",
        prompt: "In “Vir quī pugnat fortis est,” what does quī refer to?",
        choices: ["vir", "pugnat", "fortis", "est"],
        correct: "vir",
        explanation: "The relative pronoun agrees with its antecedent, vir."
      },
      {
        type: "choice",
        prompt: "Which form is feminine singular direct object?",
        choices: ["quam", "quem", "quod", "quibus"],
        correct: "quam",
        explanation: "Quam is feminine singular accusative."
      },
      {
        type: "choice",
        prompt: "Translate: “Nuntius quem mīsistī vēnit.”",
        choices: ["The messenger whom you sent came.", "The messenger sent you.", "You came to the messenger.", "The message came from you."],
        correct: "The messenger whom you sent came.",
        explanation: "Quem is masculine singular accusative because it is the object of mīsistī."
      },
      {
        type: "build",
        prompt: "Build in Latin: The woman whom we praise is good.",
        tokens: ["fēmina", "quam", "laudāmus", "bona", "est"],
        correct: "fēmina quam laudāmus bona est",
        explanation: "Quam agrees with fēmina but is accusative in its own clause."
      }
    ]
  },
  {
    id: "lesson24-ad-uses",
    lessonSet: "lesson24",
    number: "II",
    eyebrow: "Lesson 24 · Ad",
    title: "The Uses of Ad",
    subtitle: "Ad can mean to, up to, until, at, or for with certain adjectives.",
    color: "#3e9b77",
    reference: "Henle Lesson 24 · The use of ad",
    questions: [
      {
        type: "choice",
        prompt: "What case does ad take?",
        choices: ["accusative", "ablative", "genitive", "dative"],
        correct: "accusative",
        explanation: "Ad is followed by the accusative."
      },
      {
        type: "choice",
        prompt: "Translate: “Ad flūmen vēnērunt.”",
        choices: ["They came to the river.", "They came in the river.", "They came from the river.", "They came with the river."],
        correct: "They came to the river.",
        explanation: "Ad with motion often means to or up to."
      },
      {
        type: "choice",
        prompt: "Translate: “Ad noctem pugnāvērunt.”",
        choices: ["They fought until night.", "They fought at night.", "They fought from night.", "They fought with night."],
        correct: "They fought until night.",
        explanation: "With time, ad can mean until."
      },
      {
        type: "choice",
        prompt: "What does “ad bellum parātī” mean?",
        choices: ["prepared for war", "prepared by war", "prepared from war", "prepared with war"],
        correct: "prepared for war",
        explanation: "Ad can mean for with adjectives such as parātus and ūtilis."
      },
      {
        type: "build",
        prompt: "Build in Latin: The soldiers hastened to Caesar.",
        tokens: ["mīlitēs", "ad", "Caesarem", "contendērunt"],
        correct: "mīlitēs ad Caesarem contendērunt",
        explanation: "Ad Caesarem means to Caesar after a verb of motion."
      }
    ]
  },
  {
    id: "lesson24-impersonal",
    lessonSet: "lesson24",
    number: "III",
    eyebrow: "Lesson 24 · Impersonal",
    title: "There Was Fighting",
    subtitle: "Translate Latin impersonal verbs into good English.",
    color: "#9a76b4",
    reference: "Henle Lesson 24 · Impersonal verbs",
    questions: [
      {
        type: "choice",
        prompt: "Translate: “Acriter pugnātum est.”",
        choices: ["There was bitter fighting.", "The bitter man fought.", "They were fought by bitterness.", "The fight was prepared."],
        correct: "There was bitter fighting.",
        explanation: "A Latin impersonal passive is often best translated with natural English."
      },
      {
        type: "choice",
        prompt: "What person is an impersonal Latin verb?",
        choices: ["third person singular", "first person plural", "second person singular", "third person plural"],
        correct: "third person singular",
        explanation: "Impersonal verbs are used in the third person singular."
      },
      {
        type: "choice",
        prompt: "Translate: “Ad castra perventum est.”",
        choices: ["They arrived at the camp.", "The camp arrived.", "They fought at the camp.", "The camp was useful."],
        correct: "They arrived at the camp.",
        explanation: "Translate the impersonal expression into good English."
      },
      {
        type: "choice",
        prompt: "Which Latin phrase can mean “they arrived at the river”?",
        choices: ["ad flūmen perventum est", "flūmen pervēnit", "in flūmine pugnātum est", "ad bellum parātum est"],
        correct: "ad flūmen perventum est",
        explanation: "Perventum est is an impersonal arrival expression."
      },
      {
        type: "build",
        prompt: "Build in Latin: There was bitter fighting at the gate.",
        tokens: ["ad", "portam", "acriter", "pugnātum", "est"],
        correct: "ad portam acriter pugnātum est",
        explanation: "Acriter pugnātum est means there was bitter fighting."
      }
    ]
  },
  {
    id: "lesson24-relative-purpose",
    lessonSet: "lesson24",
    number: "IV",
    eyebrow: "Lesson 24 · Relative purpose",
    title: "Who Should Seek Peace",
    subtitle: "Use a relative clause of purpose whenever it can naturally attach to a noun.",
    color: "#de8465",
    reference: "Henle Lesson 24 · Relative clauses of purpose",
    questions: [
      {
        type: "choice",
        prompt: "Translate: “Nuntium mittam quī pācem petat.”",
        choices: ["I shall send a messenger to seek peace.", "I shall seek the messenger who has peace.", "Peace will send a messenger.", "The messenger sent peace."],
        correct: "I shall send a messenger to seek peace.",
        explanation: "Quī pācem petat is a relative clause of purpose."
      },
      {
        type: "choice",
        prompt: "Why is quī used in “legātōs mīsit quī auxilium peterent”?",
        choices: ["it agrees with legātōs", "it agrees with auxilium", "it is always neuter", "it replaces every ut-clause"],
        correct: "it agrees with legātōs",
        explanation: "The relative pronoun agrees with its antecedent in gender and number."
      },
      {
        type: "choice",
        prompt: "When a purpose clause contains a comparative like facilius, what can introduce it?",
        choices: ["quō", "sine", "inter", "aut"],
        correct: "quō",
        explanation: "Quō may introduce purpose when a comparative is inside the clause."
      },
      {
        type: "choice",
        prompt: "Translate: “Custōdēs collocāvit quō facilius pontem defenderent.”",
        choices: ["He stationed guards to defend the bridge more easily.", "The guards more easily placed the bridge.", "The bridge defended the guards.", "He stationed the bridge near the guards."],
        correct: "He stationed guards to defend the bridge more easily.",
        explanation: "Quō facilius introduces a purpose clause with a comparative."
      },
      {
        type: "build",
        prompt: "Build in Latin: He sent soldiers who would defend the town.",
        tokens: ["mīlitēs", "mīsit", "quī", "oppidum", "defenderent"],
        correct: "mīlitēs mīsit quī oppidum defenderent",
        explanation: "Quī oppidum defenderent is a relative clause of purpose."
      }
    ]
  },
  {
    id: "lesson24-wrap",
    lessonSet: "lesson24",
    number: "V",
    eyebrow: "Lesson 24 · Mastery",
    title: "Relative Clauses and Ad",
    subtitle: "Mix relative pronouns, ad phrases, impersonal verbs, quō, and new words.",
    color: "#c8912f",
    reference: "Henle Lesson 24 · Review",
    questions: [
      {
        type: "choice",
        prompt: "What does “cognōscō” mean?",
        choices: ["learn, find out", "ravage", "approach", "be useful"],
        correct: "learn, find out",
        explanation: "Cognōscō means learn or find out."
      },
      {
        type: "choice",
        prompt: "What does “nox” mean?",
        choices: ["night", "nature", "message", "wrong"],
        correct: "night",
        explanation: "Nox means night."
      },
      {
        type: "choice",
        prompt: "Translate: “Auxilia mīsit quō diūtius mīlitēs pugnarent.”",
        choices: ["He sent reinforcements so the soldiers might fight longer.", "The soldiers fought longer because they sent aid.", "The reinforcements fought against the soldiers.", "He sent messages until night."],
        correct: "He sent reinforcements so the soldiers might fight longer.",
        explanation: "Quō diūtius introduces a purpose clause with a comparative."
      },
      {
        type: "choice",
        prompt: "What does “-que” do?",
        choices: ["adds and to the word it follows", "makes a word negative", "marks a question", "means without"],
        correct: "adds and to the word it follows",
        explanation: "-que is attached to the second joined word and means and."
      },
      {
        type: "build",
        prompt: "Build in Latin: The guards approach the camp.",
        tokens: ["custōdēs", "ad", "castra", "appropinquant"],
        correct: "custōdēs ad castra appropinquant",
        explanation: "Appropinquō can use ad with the accusative."
      }
    ]
  },
  {
    id: "lesson25-interrogative-adverbs",
    lessonSet: "lesson25",
    number: "I",
    eyebrow: "Lesson 25 · Question words",
    title: "Ubi, Quō, Unde, Cūr",
    subtitle: "Ask where, where to, where from, and why.",
    color: "#5b8fc9",
    reference: "Henle Lesson 25 · Interrogative adverbs",
    questions: [
      {
        type: "choice",
        prompt: "Which question word asks “where?” when there is rest or location?",
        choices: ["ubi", "quō", "unde", "cūr"],
        correct: "ubi",
        explanation: "Ubi asks where something is located."
      },
      {
        type: "choice",
        prompt: "Which question word asks “where to?” or “whither?”",
        choices: ["quō", "ubi", "unde", "num"],
        correct: "quō",
        explanation: "Quō points toward motion or direction."
      },
      {
        type: "choice",
        prompt: "Which question word asks “from where?”",
        choices: ["unde", "ubi", "quō", "nōnne"],
        correct: "unde",
        explanation: "Unde asks whence, or from what place."
      },
      {
        type: "choice",
        prompt: "Translate: “Cūr vēnistī?”",
        choices: ["Why did you come?", "Where are you?", "Where are you going?", "From where did you come?"],
        correct: "Why did you come?",
        explanation: "Cūr means why."
      },
      {
        type: "build",
        prompt: "Build in Latin: Where are the guards?",
        tokens: ["ubi", "sunt", "custōdēs"],
        correct: "ubi sunt custōdēs",
        explanation: "Use ubi when asking where something is located."
      }
    ]
  },
  {
    id: "lesson25-question-particles",
    lessonSet: "lesson25",
    number: "II",
    eyebrow: "Lesson 25 · Particles",
    title: "-ne, Num, and Nōnne",
    subtitle: "Learn the little question signals and the answers they expect.",
    color: "#9a76b4",
    reference: "Henle Lesson 25 · Interrogative particles",
    questions: [
      {
        type: "choice",
        prompt: "What does -ne do when attached to a Latin word?",
        choices: ["it asks a neutral yes/no question", "it means lest", "it expects the answer no", "it means and"],
        correct: "it asks a neutral yes/no question",
        explanation: "-ne turns a statement into a yes/no question without hinting at the expected answer."
      },
      {
        type: "choice",
        prompt: "Which particle usually expects the answer “no”?",
        choices: ["num", "nōnne", "-ne", "ubi"],
        correct: "num",
        explanation: "Num often has the feel of surely not?"
      },
      {
        type: "choice",
        prompt: "Which particle usually expects the answer “yes”?",
        choices: ["nōnne", "num", "unde", "quō"],
        correct: "nōnne",
        explanation: "Nōnne often has the feel of surely? or isn’t it true?"
      },
      {
        type: "choice",
        prompt: "Translate: “Valēsne?”",
        choices: ["Are you well?", "Surely you are not well?", "Why are you well?", "Where are you well?"],
        correct: "Are you well?",
        explanation: "Valēsne is a neutral direct question."
      },
      {
        type: "build",
        prompt: "Build in Latin: Aren’t the soldiers brave?",
        tokens: ["nōnne", "mīlitēs", "fortēs", "sunt"],
        correct: "nōnne mīlitēs fortēs sunt",
        explanation: "Nōnne introduces a question expecting yes."
      }
    ]
  },
  {
    id: "lesson25-interrogative-pronoun",
    lessonSet: "lesson25",
    number: "III",
    eyebrow: "Lesson 25 · Pronoun",
    title: "Quis and Quid",
    subtitle: "Ask who, whom, whose, to whom, and what.",
    color: "#3e9b77",
    reference: "Henle Lesson 25 · Interrogative pronoun",
    questions: [
      {
        type: "choice",
        prompt: "What does “quis” mean?",
        choices: ["who?", "what?", "where?", "why?"],
        correct: "who?",
        explanation: "Quis asks who."
      },
      {
        type: "choice",
        prompt: "What does “quid” mean?",
        choices: ["what?", "who?", "whose?", "from where?"],
        correct: "what?",
        explanation: "Quid asks what and can be nominative or accusative neuter."
      },
      {
        type: "choice",
        prompt: "Translate: “Cui gladium dedistī?”",
        choices: ["To whom did you give the sword?", "Whose sword did you give?", "What sword did you give?", "Why did you give the sword?"],
        correct: "To whom did you give the sword?",
        explanation: "Cui means to whom or for whom."
      },
      {
        type: "choice",
        prompt: "Translate: “Quid ostendit?”",
        choices: ["What did he show?", "Who showed him?", "Where did he show it?", "Why did he show it?"],
        correct: "What did he show?",
        explanation: "Quid is the thing shown."
      },
      {
        type: "build",
        prompt: "Build in Latin: Whom did Caesar see?",
        tokens: ["quem", "Caesar", "vīdit"],
        correct: "quem Caesar vīdit",
        explanation: "Quem asks whom as a masculine direct object."
      }
    ]
  },
  {
    id: "lesson25-interrogative-adjective",
    lessonSet: "lesson25",
    number: "IV",
    eyebrow: "Lesson 25 · Adjective",
    title: "Which Men? What Camp?",
    subtitle: "Use quī, quae, quod when the question word modifies a noun.",
    color: "#de8465",
    reference: "Henle Lesson 25 · Interrogative adjective",
    questions: [
      {
        type: "choice",
        prompt: "In “Quōs virōs vīdistī?” how is quōs being used?",
        choices: ["as an interrogative adjective", "as a verb", "as an adverb", "as a conjunction"],
        correct: "as an interrogative adjective",
        explanation: "Quōs modifies virōs, so it acts like an adjective."
      },
      {
        type: "choice",
        prompt: "Translate: “In quō locō castra posuit?”",
        choices: ["In what place did he pitch camp?", "Who pitched camp?", "Where did the place go?", "Why did he pitch camp?"],
        correct: "In what place did he pitch camp?",
        explanation: "Quō modifies locō: in what place."
      },
      {
        type: "choice",
        prompt: "What does “apud” mean with the accusative?",
        choices: ["among / at the house of", "without", "from", "until"],
        correct: "among / at the house of",
        explanation: "Apud takes the accusative and can mean among."
      },
      {
        type: "choice",
        prompt: "What does “plūrimum valet” mean?",
        choices: ["is very influential", "runs very swiftly", "asks many questions", "shows many names"],
        correct: "is very influential",
        explanation: "Valeō can mean be strong, be well, or be influential."
      },
      {
        type: "build",
        prompt: "Build in Latin: What guards did he station?",
        tokens: ["quōs", "custōdēs", "collocāvit"],
        correct: "quōs custōdēs collocāvit",
        explanation: "Quōs modifies custōdēs, so it is an interrogative adjective."
      }
    ]
  },
  {
    id: "lesson25-wrap",
    lessonSet: "lesson25",
    number: "V",
    eyebrow: "Lesson 25 · Mastery",
    title: "Direct Questions",
    subtitle: "Mix question words, question particles, pronouns, adjectives, and new vocabulary.",
    color: "#c8912f",
    reference: "Henle Lesson 25 · Review",
    questions: [
      {
        type: "choice",
        prompt: "What mood is usually used in direct questions?",
        choices: ["indicative", "subjunctive", "imperative", "infinitive"],
        correct: "indicative",
        explanation: "Direct questions generally use the indicative mood."
      },
      {
        type: "choice",
        prompt: "Translate: “Quis exercitum trādūxit?”",
        choices: ["Who led the army across?", "What army crossed?", "Where did the army go?", "Why did he show the army?"],
        correct: "Who led the army across?",
        explanation: "Quis asks who, and trādūxit means led across."
      },
      {
        type: "choice",
        prompt: "What does “clam” mean?",
        choices: ["secretly", "among", "certain", "very much"],
        correct: "secretly",
        explanation: "Clam means secretly."
      },
      {
        type: "choice",
        prompt: "Translate: “Tē amīcum vocō.”",
        choices: ["I call you friend.", "I call a friend to you.", "You call me friend.", "A friend calls you."],
        correct: "I call you friend.",
        explanation: "Verbs of calling can take two accusatives: tē and amīcum."
      },
      {
        type: "build",
        prompt: "Build in Latin: By what name did they call Caesar?",
        tokens: ["quō", "nōmine", "Caesarem", "appellāvērunt"],
        correct: "quō nōmine Caesarem appellāvērunt",
        explanation: "When nōmen is used, Latin uses the ablative: quō nōmine."
      }
    ]
  },
  {
    id: "lesson26-perfect-subjunctive",
    lessonSet: "lesson26",
    number: "I",
    eyebrow: "Lesson 26 · Perfect subjunctive",
    title: "Perfect Subjunctive Active",
    subtitle: "Use the perfect stem plus -erim endings.",
    color: "#5b8fc9",
    reference: "Henle Lesson 26 · Perfect subjunctive active",
    questions: [
      {
        type: "choice",
        prompt: "How is the perfect subjunctive active formed?",
        choices: ["perfect stem plus -erim endings", "present infinitive plus personal endings", "present stem plus passive signs", "genitive singular plus noun endings"],
        correct: "perfect stem plus -erim endings",
        explanation: "For example, laudāv- plus -erit gives laudāverit."
      },
      {
        type: "choice",
        prompt: "What does “laudāverit” mean in an indirect question?",
        choices: ["he has praised / he praised", "he may praise", "he was praised", "he will praise"],
        correct: "he has praised / he praised",
        explanation: "Perfect subjunctive often shows action before a primary main verb in an indirect question."
      },
      {
        type: "choice",
        prompt: "Which is the perfect subjunctive form of sum for “they have been”?",
        choices: ["fuerint", "sint", "fuissent", "erant"],
        correct: "fuerint",
        explanation: "Fuerint is perfect subjunctive, third person plural."
      },
      {
        type: "choice",
        prompt: "Which form means “we have sent” in the subjunctive?",
        choices: ["mīserīmus", "mittāmus", "mitterēmus", "mittimus"],
        correct: "mīserīmus",
        explanation: "Mīserīmus uses the perfect stem mīs- plus perfect subjunctive ending."
      },
      {
        type: "build",
        prompt: "Build in Latin: whether Caesar conquered",
        tokens: ["num", "Caesar", "vīcerit"],
        correct: "num Caesar vīcerit",
        explanation: "Vīcerit is perfect subjunctive."
      }
    ]
  },
  {
    id: "lesson26-pluperfect-subjunctive",
    lessonSet: "lesson26",
    number: "II",
    eyebrow: "Lesson 26 · Pluperfect subjunctive",
    title: "Pluperfect Subjunctive Active",
    subtitle: "Use the perfect stem plus -issem endings.",
    color: "#9a76b4",
    reference: "Henle Lesson 26 · Pluperfect subjunctive active",
    questions: [
      {
        type: "choice",
        prompt: "How is the pluperfect subjunctive active formed?",
        choices: ["perfect stem plus -issem endings", "present stem plus -ba-", "present infinitive plus passive signs", "nominative plus noun endings"],
        correct: "perfect stem plus -issem endings",
        explanation: "For example, laudāv- plus -isset gives laudāvisset."
      },
      {
        type: "choice",
        prompt: "What does “mīsissent” mean?",
        choices: ["they had sent", "they may send", "they send", "they will be sent"],
        correct: "they had sent",
        explanation: "Mīsissent is pluperfect subjunctive, third person plural."
      },
      {
        type: "choice",
        prompt: "Which form means “he had been” in the subjunctive?",
        choices: ["fuisset", "fuerit", "sit", "erat"],
        correct: "fuisset",
        explanation: "Fuisset is pluperfect subjunctive of sum."
      },
      {
        type: "choice",
        prompt: "Which form means “you all had praised” in the subjunctive?",
        choices: ["laudāvissētis", "laudāverītis", "laudātis", "laudārētis"],
        correct: "laudāvissētis",
        explanation: "The -issētis ending marks pluperfect subjunctive, second person plural."
      },
      {
        type: "build",
        prompt: "Build in Latin: whether the soldiers had fought",
        tokens: ["num", "mīlitēs", "pugnāvissent"],
        correct: "num mīlitēs pugnāvissent",
        explanation: "Pugnāvissent is pluperfect subjunctive."
      }
    ]
  },
  {
    id: "lesson26-indirect-primary",
    lessonSet: "lesson26",
    number: "III",
    eyebrow: "Lesson 26 · Indirect questions",
    title: "Primary Sequence",
    subtitle: "After a primary main verb, use present for same-time and perfect for before-time.",
    color: "#3e9b77",
    reference: "Henle Lesson 26 · Indirect questions, primary sequence",
    questions: [
      {
        type: "choice",
        prompt: "What mood is always used in indirect questions?",
        choices: ["subjunctive", "indicative", "imperative", "vocative"],
        correct: "subjunctive",
        explanation: "Indirect questions always use the subjunctive."
      },
      {
        type: "choice",
        prompt: "Translate: “Rogat ubi hostēs sint.”",
        choices: ["He asks where the enemies are.", "He asked where the enemies were.", "Where are the enemies?", "He asks where the enemies had been."],
        correct: "He asks where the enemies are.",
        explanation: "Rogat is primary; sint is present subjunctive for same-time action."
      },
      {
        type: "choice",
        prompt: "Translate: “Rogat num Caesar Gallōs vīcerit.”",
        choices: ["He asks whether Caesar conquered the Gauls.", "He asks whether Caesar is conquering the Gauls.", "Caesar asks whether the Gauls conquered.", "He asked whether Caesar had conquered."],
        correct: "He asks whether Caesar conquered the Gauls.",
        explanation: "After primary rogat, perfect subjunctive vīcerit shows action before the asking."
      },
      {
        type: "choice",
        prompt: "In an indirect question, what can -ne and num mean?",
        choices: ["whether / if", "and", "lest", "from where"],
        correct: "whether / if",
        explanation: "In indirect questions, -ne and num usually mean whether or if."
      },
      {
        type: "build",
        prompt: "Build in Latin: He asks where the camp is.",
        tokens: ["rogat", "ubi", "castra", "sint"],
        correct: "rogat ubi castra sint",
        explanation: "An indirect question uses the subjunctive: sint."
      }
    ]
  },
  {
    id: "lesson26-indirect-secondary",
    lessonSet: "lesson26",
    number: "IV",
    eyebrow: "Lesson 26 · Secondary sequence",
    title: "Asked Whether They Had Fought",
    subtitle: "After a secondary main verb, use imperfect for same-time and pluperfect for before-time.",
    color: "#de8465",
    reference: "Henle Lesson 26 · Indirect questions, secondary sequence",
    questions: [
      {
        type: "choice",
        prompt: "After a secondary main verb, which subjunctive shows same-time action?",
        choices: ["imperfect subjunctive", "present subjunctive", "perfect subjunctive", "future indicative"],
        correct: "imperfect subjunctive",
        explanation: "Secondary sequence uses imperfect subjunctive for action happening at the same time."
      },
      {
        type: "choice",
        prompt: "After a secondary main verb, which subjunctive shows earlier action?",
        choices: ["pluperfect subjunctive", "present subjunctive", "future perfect indicative", "perfect passive"],
        correct: "pluperfect subjunctive",
        explanation: "Secondary sequence uses pluperfect subjunctive for action before the main verb."
      },
      {
        type: "choice",
        prompt: "Translate: “Rogāvit num mīlitēs pugnārent.”",
        choices: ["He asked whether the soldiers were fighting.", "He asks whether the soldiers are fighting.", "He asked whether the soldiers had fought.", "The soldiers asked whether he was fighting."],
        correct: "He asked whether the soldiers were fighting.",
        explanation: "Rogāvit is secondary; pugnārent is imperfect subjunctive for same-time action."
      },
      {
        type: "choice",
        prompt: "Translate: “Rogāvit num mīlitēs pugnāvissent.”",
        choices: ["He asked whether the soldiers had fought.", "He asked whether the soldiers were fighting.", "He asks whether the soldiers fought.", "The soldiers had asked whether he fought."],
        correct: "He asked whether the soldiers had fought.",
        explanation: "Pugnāvissent is pluperfect subjunctive for action before the asking."
      },
      {
        type: "build",
        prompt: "Build in Latin: He asked where the enemies had taken position.",
        tokens: ["rogāvit", "ubi", "hostēs", "cōnstitissent"],
        correct: "rogāvit ubi hostēs cōnstitissent",
        explanation: "Cōnstitissent is pluperfect subjunctive after secondary rogāvit."
      }
    ]
  },
  {
    id: "lesson26-wrap",
    lessonSet: "lesson26",
    number: "V",
    eyebrow: "Lesson 26 · Mastery",
    title: "Indirect Questions",
    subtitle: "Mix perfect-system subjunctive, indirect questions, sequence, and new vocabulary.",
    color: "#c8912f",
    reference: "Henle Lesson 26 · Review",
    questions: [
      {
        type: "choice",
        prompt: "What does “rogō” mean?",
        choices: ["ask", "force", "dwell in", "take a position"],
        correct: "ask",
        explanation: "Rogō means ask."
      },
      {
        type: "choice",
        prompt: "What does “quaerō” mean?",
        choices: ["ask, seek", "be true", "say", "ravage"],
        correct: "ask, seek",
        explanation: "Quaerō can mean ask or seek."
      },
      {
        type: "choice",
        prompt: "Translate: “Quaerit quanta mūnītiō sit.”",
        choices: ["He asks how great the fortification is.", "He asks where the water is.", "He asked how great the fortification had been.", "The fortification asks how great he is."],
        correct: "He asks how great the fortification is.",
        explanation: "Quaerit is primary; sit is present subjunctive in an indirect question."
      },
      {
        type: "choice",
        prompt: "What does “inquit” do?",
        choices: ["it marks a direct quotation: he says / he said", "it introduces an indirect question", "it means whether", "it means by what name"],
        correct: "it marks a direct quotation: he says / he said",
        explanation: "Inquit is used with direct quotations and is placed after one or more quoted words."
      },
      {
        type: "build",
        prompt: "Build in Latin: I ask what races inhabit Gaul.",
        tokens: ["rogō", "quae", "genera", "Galliam", "incolant"],
        correct: "rogō quae genera Galliam incolant",
        explanation: "Incolant is present subjunctive in an indirect question after primary rogō."
      }
    ]
  },
  {
    id: "lesson27-vocative",
    lessonSet: "lesson27",
    number: "I",
    eyebrow: "Lesson 27 · Vocative",
    title: "Calling Someone by Name",
    subtitle: "Use the vocative case for the person being addressed.",
    color: "#5b8fc9",
    reference: "Henle Lesson 27 · Vocative",
    questions: [
      {
        type: "choice",
        prompt: "What is the vocative case used for?",
        choices: ["the person addressed", "the direct object", "the owner", "the place from which"],
        correct: "the person addressed",
        explanation: "The vocative is the case of direct address."
      },
      {
        type: "choice",
        prompt: "Which is the vocative of servus?",
        choices: ["serve", "servum", "servī", "servō"],
        correct: "serve",
        explanation: "Second-declension -us nouns usually change -us to -e in the vocative singular."
      },
      {
        type: "choice",
        prompt: "Translate: “Tē, Domine, laudō.”",
        choices: ["You, O Lord, I praise.", "The Lord praises you.", "I praise the Lord by you.", "Lord, praise me."],
        correct: "You, O Lord, I praise.",
        explanation: "Domine is vocative: O Lord."
      },
      {
        type: "choice",
        prompt: "Where does the vocative usually stand in a Latin sentence?",
        choices: ["not first", "always first", "always last", "only after a preposition"],
        correct: "not first",
        explanation: "Henle notes that the vocative generally does not stand first in the sentence."
      },
      {
        type: "build",
        prompt: "Build in Latin: Hail, Mary!",
        tokens: ["avē", "Maria"],
        correct: "avē Maria",
        explanation: "Maria is a first-declension vocative, so it looks like the nominative."
      }
    ]
  },
  {
    id: "lesson27-imperative",
    lessonSet: "lesson27",
    number: "II",
    eyebrow: "Lesson 27 · Imperative",
    title: "Give a Command",
    subtitle: "Use singular commands for one person and plural commands for more than one.",
    color: "#9a76b4",
    reference: "Henle Lesson 27 · Present imperative active",
    questions: [
      {
        type: "choice",
        prompt: "What is the imperative mood used for?",
        choices: ["commands", "indirect questions", "ownership", "place where"],
        correct: "commands",
        explanation: "The imperative mood gives commands."
      },
      {
        type: "choice",
        prompt: "Which command is addressed to more than one person?",
        choices: ["laudāte", "laudā", "monē", "rege"],
        correct: "laudāte",
        explanation: "The plural imperative usually ends in -te."
      },
      {
        type: "choice",
        prompt: "Translate: “Rege, Domine, mentēs nostrās.”",
        choices: ["Rule our minds, O Lord.", "Our minds rule the Lord.", "The Lord ruled our minds.", "May our minds rule."],
        correct: "Rule our minds, O Lord.",
        explanation: "Rege is an imperative command; Domine is vocative."
      },
      {
        type: "choice",
        prompt: "What does “miserēre nōbīs” mean?",
        choices: ["have mercy on us", "teach us", "take us away", "rule us"],
        correct: "have mercy on us",
        explanation: "Miserēre nōbīs is the Lesson 27 phrase have mercy on us."
      },
      {
        type: "build",
        prompt: "Build in Latin: Praise God, Christians!",
        tokens: ["laudāte", "Deum", "Christiānī"],
        correct: "laudāte Deum Christiānī",
        explanation: "Laudāte is the plural command: praise!"
      }
    ]
  },
  {
    id: "lesson27-new-words",
    lessonSet: "lesson27",
    number: "III",
    eyebrow: "Lesson 27 · New words",
    title: "Teach, Take Away, Rule",
    subtitle: "Practice the new verbs and nouns that appear with commands.",
    color: "#3e9b77",
    reference: "Henle Lesson 27 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does “doceō” mean?",
        choices: ["teach / inform", "rule", "take away", "adore"],
        correct: "teach / inform",
        explanation: "Doceō can mean teach or inform."
      },
      {
        type: "choice",
        prompt: "What does “tollō” mean?",
        choices: ["lift up / take away", "delay", "sorrow", "mind"],
        correct: "lift up / take away",
        explanation: "Tollō can mean lift up or take away."
      },
      {
        type: "choice",
        prompt: "What does “peccātum” mean in Christian Latin?",
        choices: ["sin", "delay", "mind", "mercy"],
        correct: "sin",
        explanation: "Peccātum can mean mistake or sin."
      },
      {
        type: "choice",
        prompt: "Translate: “Christus nōs viam salūtis docet.”",
        choices: ["Christ teaches us the way of salvation.", "Christ takes away the way of salvation.", "Christ asks where salvation is.", "Christ praises our way."],
        correct: "Christ teaches us the way of salvation.",
        explanation: "Doceō can take two accusatives: the person taught and the thing taught."
      },
      {
        type: "build",
        prompt: "Build in Latin: Take away our sins, O Lord.",
        tokens: ["tolle", "peccāta", "nostra", "Domine"],
        correct: "tolle peccāta nostra Domine",
        explanation: "Tolle is the singular command: take away."
      }
    ]
  },
  {
    id: "lesson27-wishes",
    lessonSet: "lesson27",
    number: "IV",
    eyebrow: "Lesson 27 · Wishes",
    title: "May He Come",
    subtitle: "Use the present subjunctive for wishes.",
    color: "#de8465",
    reference: "Henle Lesson 27 · Wishes",
    questions: [
      {
        type: "choice",
        prompt: "How is the present subjunctive often translated in wishes?",
        choices: ["may", "must", "had", "was being"],
        correct: "may",
        explanation: "In wishes, present subjunctive is translated with may."
      },
      {
        type: "choice",
        prompt: "What word is often used as a sign of wishes in Latin?",
        choices: ["utinam", "apud", "autem", "unde"],
        correct: "utinam",
        explanation: "Utinam can introduce a wish."
      },
      {
        type: "choice",
        prompt: "What is the negative word for a wish?",
        choices: ["nē", "nōn", "num", "neque"],
        correct: "nē",
        explanation: "Negative wishes use nē."
      },
      {
        type: "choice",
        prompt: "Translate: “Deus det nōbīs pācem.”",
        choices: ["May God give us peace.", "God gives us peace.", "Give God peace.", "God had given peace to us."],
        correct: "May God give us peace.",
        explanation: "Det is present subjunctive in a wish."
      },
      {
        type: "build",
        prompt: "Build in Latin: May God help us.",
        tokens: ["adjuvet", "nōs", "Deus"],
        correct: "adjuvet nōs Deus",
        explanation: "Adjuvet is present subjunctive: may he help."
      }
    ]
  },
  {
    id: "lesson27-hortatory",
    lessonSet: "lesson27",
    number: "V",
    eyebrow: "Lesson 27 · Let us",
    title: "Let Us Pray",
    subtitle: "Use first-person plural subjunctive for exhortations.",
    color: "#c8912f",
    reference: "Henle Lesson 27 · Hortatory subjunctive",
    questions: [
      {
        type: "choice",
        prompt: "What English phrase usually translates the hortatory subjunctive?",
        choices: ["let us", "whether", "having been", "about to"],
        correct: "let us",
        explanation: "The hortatory subjunctive urges others to act with us: let us."
      },
      {
        type: "choice",
        prompt: "Translate: “Grātiās agāmus.”",
        choices: ["Let us give thanks.", "May they give thanks.", "Give thanks, all of you.", "We had given thanks."],
        correct: "Let us give thanks.",
        explanation: "Agāmus is first person plural present subjunctive."
      },
      {
        type: "choice",
        prompt: "Translate: “Nē cēdāmus.”",
        choices: ["Let us not yield.", "May he not yield.", "Do not yield, all of you.", "We are not yielding."],
        correct: "Let us not yield.",
        explanation: "Nē plus first-person plural subjunctive gives a negative exhortation."
      },
      {
        type: "choice",
        prompt: "What does “ōrēmus” mean?",
        choices: ["let us pray", "pray, all of you", "may he pray", "we prayed"],
        correct: "let us pray",
        explanation: "Ōrēmus is a common hortatory form: let us pray."
      },
      {
        type: "build",
        prompt: "Build in Latin: Let us fight bravely.",
        tokens: ["fortiter", "pugnēmus"],
        correct: "fortiter pugnēmus",
        explanation: "Pugnēmus means let us fight."
      }
    ]
  },
  {
    id: "lesson27-wrap",
    lessonSet: "lesson27",
    number: "VI",
    eyebrow: "Lesson 27 · Mastery",
    title: "Address, Command, and Wish",
    subtitle: "Mix vocatives, imperatives, wishes, exhortations, and new vocabulary.",
    color: "#2f7d70",
    reference: "Henle Lesson 27 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: “Avē, Caesar!”",
        choices: ["Hail, Caesar!", "Caesar, go!", "May Caesar hail us.", "Caesar was hailed."],
        correct: "Hail, Caesar!",
        explanation: "Avē is the interjection hail!"
      },
      {
        type: "choice",
        prompt: "Which Latin form means “hear!” to more than one person?",
        choices: ["audīte", "audī", "audiant", "audīmus"],
        correct: "audīte",
        explanation: "Audīte is the plural imperative."
      },
      {
        type: "choice",
        prompt: "Translate: “Tē, Fīlī Deī, laudāmus.”",
        choices: ["You, O Son of God, we praise.", "The Son of God praises you.", "May the Son of God praise us.", "Praise the Son of God."],
        correct: "You, O Son of God, we praise.",
        explanation: "Fīlī Deī is vocative: O Son of God."
      },
      {
        type: "choice",
        prompt: "Translate: “Adōrēmus Deum.”",
        choices: ["Let us adore God.", "Adore God, all of you.", "God adores us.", "May God adore."],
        correct: "Let us adore God.",
        explanation: "Adōrēmus is hortatory subjunctive."
      },
      {
        type: "build",
        prompt: "Build in Latin: O Lord, have mercy on us.",
        tokens: ["Domine", "miserēre", "nōbīs"],
        correct: "Domine miserēre nōbīs",
        explanation: "Domine is vocative; miserēre nōbīs means have mercy on us."
      }
    ]
  },
  {
    id: "lesson28-direct-reflexives",
    lessonSet: "lesson28",
    number: "I",
    eyebrow: "Lesson 28 · Sui",
    title: "He Praises Himself",
    subtitle: "Use suī when the third-person pronoun refers to the subject of its own clause.",
    color: "#5b8fc9",
    reference: "Henle Lesson 28 · Direct reflexives",
    questions: [
      {
        type: "choice",
        prompt: "In “Sē laudat,” what does sē mean?",
        choices: ["himself", "him", "his", "their"],
        correct: "himself",
        explanation: "Sē is a direct reflexive because it refers back to the subject."
      },
      {
        type: "choice",
        prompt: "What does suī/sibi/sē/sē refer to?",
        choices: ["the subject of its own clause", "only the nearest noun", "only Caesar", "a noun after a preposition"],
        correct: "the subject of its own clause",
        explanation: "As a direct reflexive, suī refers to the subject of its own clause."
      },
      {
        type: "choice",
        prompt: "Translate: “Fortiter sē defendunt.”",
        choices: ["They defend themselves bravely.", "They defend him bravely.", "He defends them bravely.", "They defend their leader bravely."],
        correct: "They defend themselves bravely.",
        explanation: "Sē refers back to they."
      },
      {
        type: "choice",
        prompt: "Which form means “to/for himself, herself, itself, themselves”?",
        choices: ["sibi", "suī", "sē", "suus"],
        correct: "sibi",
        explanation: "Sibi is the dative reflexive form."
      },
      {
        type: "build",
        prompt: "Build in Latin: The Gauls defend themselves.",
        tokens: ["Gallī", "sē", "defendunt"],
        correct: "Gallī sē defendunt",
        explanation: "Sē is the accusative reflexive direct object."
      }
    ]
  },
  {
    id: "lesson28-suus",
    lessonSet: "lesson28",
    number: "II",
    eyebrow: "Lesson 28 · Suus",
    title: "His Own, Her Own, Their Own",
    subtitle: "Use suus as the possessive adjective that refers back to the subject.",
    color: "#9a76b4",
    reference: "Henle Lesson 28 · Suus",
    questions: [
      {
        type: "choice",
        prompt: "What kind of word is suus, sua, suum?",
        choices: ["possessive adjective", "interrogative adverb", "imperative verb", "preposition"],
        correct: "possessive adjective",
        explanation: "Suus is an adjective, so it agrees with the noun it modifies."
      },
      {
        type: "choice",
        prompt: "Translate: “Caesar suōs mīlitēs laudāvit.”",
        choices: ["Caesar praised his own soldiers.", "Caesar praised their soldiers.", "The soldiers praised Caesar.", "Caesar praised himself."],
        correct: "Caesar praised his own soldiers.",
        explanation: "Suōs modifies mīlitēs and refers back to Caesar."
      },
      {
        type: "choice",
        prompt: "When “his” does not refer to the subject, what form may be needed instead of suus?",
        choices: ["eius", "sibi", "nē", "utinam"],
        correct: "eius",
        explanation: "Eius means his/her/its when it does not refer back to the subject of its own clause."
      },
      {
        type: "choice",
        prompt: "Suus, sua, suum is used for which person?",
        choices: ["third person only", "first person only", "second person only", "every person equally"],
        correct: "third person only",
        explanation: "For first and second person, Latin uses meus, noster, tuus, and vester."
      },
      {
        type: "build",
        prompt: "Build in Latin: The soldiers praise their own general.",
        tokens: ["mīlitēs", "imperātōrem", "suum", "laudant"],
        correct: "mīlitēs imperātōrem suum laudant",
        explanation: "Suum agrees with imperātōrem and refers back to mīlitēs."
      }
    ]
  },
  {
    id: "lesson28-surrender",
    lessonSet: "lesson28",
    number: "III",
    eyebrow: "Lesson 28 · Idioms",
    title: "Surrender and Put to Flight",
    subtitle: "Practice dēdō with reflexives and the idiom in fugam dare.",
    color: "#3e9b77",
    reference: "Henle Lesson 28 · Dēdō and in fugam dare",
    questions: [
      {
        type: "choice",
        prompt: "How does Latin say “The Gauls surrendered to the Romans”?",
        choices: ["Gallī Rōmānīs sē dēdidērunt.", "Gallī Rōmānōs dēdidērunt.", "Gallī Rōmānīs dedērunt.", "Gallī Rōmānōs sē laudāvērunt."],
        correct: "Gallī Rōmānīs sē dēdidērunt.",
        explanation: "Dēdō always takes an object in Latin; with surrender, use a reflexive."
      },
      {
        type: "choice",
        prompt: "What does “in fugam dare” mean?",
        choices: ["put to flight", "give into flight", "stand in flight", "seek flight"],
        correct: "put to flight",
        explanation: "In fugam dare is the idiom put to flight or rout."
      },
      {
        type: "choice",
        prompt: "What does “fuga” mean?",
        choices: ["flight", "mind", "delay", "standard"],
        correct: "flight",
        explanation: "Fuga means flight."
      },
      {
        type: "choice",
        prompt: "What does “rēs publica” mean?",
        choices: ["republic / state", "public road", "flight", "own thing"],
        correct: "republic / state",
        explanation: "Rēs publica means the state or republic."
      },
      {
        type: "build",
        prompt: "Build in Latin: Caesar put the enemy to flight.",
        tokens: ["Caesar", "hostēs", "in", "fugam", "dedit"],
        correct: "Caesar hostēs in fugam dedit",
        explanation: "Hostēs in fugam dedit means he put the enemy to flight."
      }
    ]
  },
  {
    id: "lesson28-indirect-reflexives",
    lessonSet: "lesson28",
    number: "IV",
    eyebrow: "Lesson 28 · Indirect reflexives",
    title: "To Defend Him",
    subtitle: "Use suī and suus in dependent clauses when they refer to the main subject.",
    color: "#de8465",
    reference: "Henle Lesson 28 · Indirect reflexives",
    questions: [
      {
        type: "choice",
        prompt: "Translate: “Caesar mīlitēs vocāvit quī sē defenderent.”",
        choices: ["Caesar called the soldiers to defend him.", "Caesar called the soldiers who defended themselves.", "The soldiers called Caesar to defend them.", "Caesar called himself a soldier."],
        correct: "Caesar called the soldiers to defend him.",
        explanation: "In the purpose clause, sē refers back to Caesar, the subject of the main verb."
      },
      {
        type: "choice",
        prompt: "What does “ante” mean with the accusative?",
        choices: ["before", "among", "for the sake of", "suddenly"],
        correct: "before",
        explanation: "Ante with the accusative means before."
      },
      {
        type: "choice",
        prompt: "What does “praesidium” mean?",
        choices: ["garrison / protection", "flight", "mind", "sin"],
        correct: "garrison / protection",
        explanation: "Praesidium can mean garrison or protection."
      },
      {
        type: "choice",
        prompt: "What is special about “vērō”?",
        choices: ["it is postpositive", "it is always first", "it is always accusative", "it is a vocative"],
        correct: "it is postpositive",
        explanation: "Vērō is postpositive, so it does not stand first in its clause."
      },
      {
        type: "build",
        prompt: "Build in Latin: Caesar sent cavalry to defend his envoys.",
        tokens: ["Caesar", "equitēs", "mīsit", "quī", "legātōs", "suōs", "defenderent"],
        correct: "Caesar equitēs mīsit quī legātōs suōs defenderent",
        explanation: "Suōs refers back to Caesar even though it is inside the purpose clause."
      }
    ]
  },
  {
    id: "lesson28-wrap",
    lessonSet: "lesson28",
    number: "V",
    eyebrow: "Lesson 28 · Mastery",
    title: "Suus and Suī",
    subtitle: "Mix direct reflexives, indirect reflexives, surrender, and new vocabulary.",
    color: "#c8912f",
    reference: "Henle Lesson 28 · Review",
    questions: [
      {
        type: "choice",
        prompt: "In “Mater fīlium suum laudat,” what does suum mean?",
        choices: ["her own", "his", "their", "himself"],
        correct: "her own",
        explanation: "Suum modifies fīlium and refers back to mater."
      },
      {
        type: "choice",
        prompt: "What does “dīligō” mean?",
        choices: ["love", "surrender", "put to flight", "delay"],
        correct: "love",
        explanation: "Dīligō means love."
      },
      {
        type: "choice",
        prompt: "Translate: “Barbarī fuga salūtem petīvērunt.”",
        choices: ["The barbarians sought safety by flight.", "The barbarians put safety to flight.", "Safety sought the barbarians.", "The barbarians loved safety."],
        correct: "The barbarians sought safety by flight.",
        explanation: "Fuga here shows by flight."
      },
      {
        type: "choice",
        prompt: "Which Latin phrase means “a slave named Titus”?",
        choices: ["servus nōmine Titus", "servus suus Titus", "servus in fugam Titus", "servus vērō Titus"],
        correct: "servus nōmine Titus",
        explanation: "Nōmine with a proper name can be translated named."
      },
      {
        type: "build",
        prompt: "Build in Latin: We defend our own lives.",
        tokens: ["vītās", "nostrās", "defendimus"],
        correct: "vītās nostrās defendimus",
        explanation: "First-person reflexive possession uses noster/nostra/nostrum, not suus."
      }
    ]
  },
  {
    id: "lesson29-present-passive-subjunctive",
    lessonSet: "lesson29",
    number: "I",
    eyebrow: "Lesson 29 · Passive subjunctive",
    title: "That We May Not Be Conquered",
    subtitle: "Change the final personal signs to make passive subjunctive forms.",
    color: "#5b8fc9",
    reference: "Henle Lesson 29 · Present and imperfect passive subjunctive",
    questions: [
      {
        type: "choice",
        prompt: "How is the passive subjunctive formed from the active subjunctive?",
        choices: ["by changing the final personal signs", "by adding -erim", "by adding a genitive noun", "by using only the infinitive"],
        correct: "by changing the final personal signs",
        explanation: "Henle notes that the passive subjunctive changes final personal signs just as in the indicative."
      },
      {
        type: "choice",
        prompt: "What does “vincāmur” mean?",
        choices: ["we may be conquered", "we may conquer", "we had conquered", "conquer us"],
        correct: "we may be conquered",
        explanation: "Vincāmur is first person plural present passive subjunctive."
      },
      {
        type: "choice",
        prompt: "Translate: “Nē ab hostibus videantur.”",
        choices: ["lest they be seen by the enemy", "lest they see the enemy", "so that the enemy may see", "because they had been seen"],
        correct: "lest they be seen by the enemy",
        explanation: "Videantur is present passive subjunctive in a negative purpose clause."
      },
      {
        type: "choice",
        prompt: "Which form means “he may be sent”?",
        choices: ["mittātur", "mittat", "mīserit", "mittitur"],
        correct: "mittātur",
        explanation: "Mittātur is present passive subjunctive."
      },
      {
        type: "build",
        prompt: "Build in Latin: lest we be conquered",
        tokens: ["nē", "vincāmur"],
        correct: "nē vincāmur",
        explanation: "Nē plus passive subjunctive gives negative purpose."
      }
    ]
  },
  {
    id: "lesson29-perfect-passive-subjunctive",
    lessonSet: "lesson29",
    number: "II",
    eyebrow: "Lesson 29 · Perfect passive system",
    title: "That It Has Been Sent",
    subtitle: "Use a perfect passive participle plus a subjunctive form of sum.",
    color: "#9a76b4",
    reference: "Henle Lesson 29 · Perfect system passive subjunctive",
    questions: [
      {
        type: "choice",
        prompt: "How is the perfect-system passive subjunctive formed?",
        choices: ["perfect passive participle plus subjunctive sum", "perfect stem plus -erim only", "present stem plus -ba-", "vocative plus imperative"],
        correct: "perfect passive participle plus subjunctive sum",
        explanation: "The perfect passive subjunctive is a compound form."
      },
      {
        type: "choice",
        prompt: "What does “missus sit” mean?",
        choices: ["he may have been sent / that he was sent", "he may send", "he had sent", "send him"],
        correct: "he may have been sent / that he was sent",
        explanation: "Missus sit is perfect passive subjunctive."
      },
      {
        type: "choice",
        prompt: "What does “pacāta esset” mean?",
        choices: ["it had been pacified", "it may be pacified", "it pacifies", "pacify it"],
        correct: "it had been pacified",
        explanation: "Pacāta esset is pluperfect passive subjunctive feminine singular."
      },
      {
        type: "choice",
        prompt: "Translate: “Scit quis missus sit.”",
        choices: ["He knows who was sent.", "He knows who sends.", "Who was sent?", "He knew who had sent."],
        correct: "He knows who was sent.",
        explanation: "An indirect question uses the subjunctive: missus sit."
      },
      {
        type: "build",
        prompt: "Build in Latin: he knows where the guards were stationed",
        tokens: ["scit", "ubi", "custōdēs", "collocātī", "sint"],
        correct: "scit ubi custōdēs collocātī sint",
        explanation: "Collocātī sint is perfect passive subjunctive plural."
      }
    ]
  },
  {
    id: "lesson29-cum-clauses",
    lessonSet: "lesson29",
    number: "III",
    eyebrow: "Lesson 29 · Cum clauses",
    title: "When Caesar Had Seen",
    subtitle: "In secondary sequence, cum meaning when usually takes the subjunctive.",
    color: "#3e9b77",
    reference: "Henle Lesson 29 · Cum, when",
    questions: [
      {
        type: "choice",
        prompt: "In secondary sequence, what mood does cum meaning “when” usually take?",
        choices: ["subjunctive", "indicative", "imperative", "vocative"],
        correct: "subjunctive",
        explanation: "Henle notes that cum, when, in secondary sequence usually takes the subjunctive."
      },
      {
        type: "choice",
        prompt: "Translate: “Cum equitēs pugnarent, Caesar vēnit.”",
        choices: ["When the cavalry were fighting, Caesar came.", "Because the cavalry had fought, Caesar comes.", "The cavalry fought with Caesar.", "Caesar ordered the cavalry to fight."],
        correct: "When the cavalry were fighting, Caesar came.",
        explanation: "Pugnarent is imperfect subjunctive for same-time action in past narration."
      },
      {
        type: "choice",
        prompt: "Translate: “Cum hostēs vīdisset, legiōnēs instrūxit.”",
        choices: ["When he had seen the enemy, he drew up the legions.", "When the enemy saw him, they drew up legions.", "Because he sees the enemy, he draws up legions.", "He sees where the enemy had drawn up."],
        correct: "When he had seen the enemy, he drew up the legions.",
        explanation: "Vīdisset is pluperfect subjunctive for action before the main verb."
      },
      {
        type: "choice",
        prompt: "Which subjunctive tense is used for same-time action after a secondary main verb?",
        choices: ["imperfect", "pluperfect", "perfect", "future perfect"],
        correct: "imperfect",
        explanation: "Secondary same-time action uses the imperfect subjunctive."
      },
      {
        type: "build",
        prompt: "Build in Latin: When Gaul had been pacified, Caesar left garrisons.",
        tokens: ["cum", "Gallia", "pacāta", "esset", "Caesar", "praesidia", "reliquit"],
        correct: "cum Gallia pacāta esset Caesar praesidia reliquit",
        explanation: "Pacāta esset is pluperfect passive subjunctive in a cum clause."
      }
    ]
  },
  {
    id: "lesson29-causa",
    lessonSet: "lesson29",
    number: "IV",
    eyebrow: "Lesson 29 · Cause",
    title: "For the Sake of Peace",
    subtitle: "Use causa after a genitive, and use the ablative to show cause.",
    color: "#de8465",
    reference: "Henle Lesson 29 · Causa and ablative of cause",
    questions: [
      {
        type: "choice",
        prompt: "How does causa work when it means “for the sake of”?",
        choices: ["it follows a genitive", "it stands before an accusative", "it is always first", "it changes into an imperative"],
        correct: "it follows a genitive",
        explanation: "Causa follows the genitive it governs: pacis causa."
      },
      {
        type: "choice",
        prompt: "Translate: “aquae causa.”",
        choices: ["for the sake of water", "with water", "from the water", "water as subject"],
        correct: "for the sake of water",
        explanation: "Aquae is genitive; causa follows it."
      },
      {
        type: "choice",
        prompt: "What does “mōre suō” mean?",
        choices: ["according to their custom", "for the sake of custom", "by a small band", "suddenly"],
        correct: "according to their custom",
        explanation: "The ablative mōre may be translated according to custom."
      },
      {
        type: "choice",
        prompt: "Translate: “Adventū Caesaris territī sunt.”",
        choices: ["They were terrified at the arrival of Caesar.", "They terrified Caesar at his arrival.", "They arrived because Caesar was terrified.", "Caesar terrified them with arrival."],
        correct: "They were terrified at the arrival of Caesar.",
        explanation: "Adventū Caesaris is an ablative of cause."
      },
      {
        type: "build",
        prompt: "Build in Latin: for the sake of peace",
        tokens: ["pācis", "causa"],
        correct: "pācis causa",
        explanation: "Causa follows its genitive."
      }
    ]
  },
  {
    id: "lesson29-wrap",
    lessonSet: "lesson29",
    number: "V",
    eyebrow: "Lesson 29 · Mastery",
    title: "Passive Subjunctive",
    subtitle: "Mix passive subjunctive forms, cum clauses, cause, causa, and new vocabulary.",
    color: "#c8912f",
    reference: "Henle Lesson 29 · Review",
    questions: [
      {
        type: "choice",
        prompt: "What does “sciō” mean?",
        choices: ["know", "pacify", "leave behind", "approve"],
        correct: "know",
        explanation: "Sciō means know."
      },
      {
        type: "choice",
        prompt: "What does “relinquō” mean?",
        choices: ["leave / leave behind", "know", "pacify", "for the sake of"],
        correct: "leave / leave behind",
        explanation: "Relinquō means leave or leave behind."
      },
      {
        type: "choice",
        prompt: "Translate: “Subitō aciēs barbarōrum vīsa est.”",
        choices: ["Suddenly the battle line of the barbarians was seen.", "Suddenly the barbarians saw the battle line.", "The barbarians suddenly left the battle line.", "The battle line knew the barbarians."],
        correct: "Suddenly the battle line of the barbarians was seen.",
        explanation: "Subitō means suddenly; vīsa est is perfect passive."
      },
      {
        type: "choice",
        prompt: "Translate: “Scitisne num legiō relicta sit?”",
        choices: ["Do you know whether the legion was left?", "Do you know where the legion is leaving?", "Did the legion know whether you were left?", "Leave the legion, do you not know?"],
        correct: "Do you know whether the legion was left?",
        explanation: "Relicta sit is perfect passive subjunctive in an indirect question."
      },
      {
        type: "build",
        prompt: "Build in Latin: The town was seized for the sake of peace.",
        tokens: ["oppidum", "pācis", "causa", "occupātum", "est"],
        correct: "oppidum pācis causa occupātum est",
        explanation: "Pācis causa means for the sake of peace."
      }
    ]
  }
  ,
  {
    id: "lesson30-participle",
    lessonSet: "lesson30",
    number: "I",
    eyebrow: "Lesson 30 · Perfect participle",
    title: "A Verbal Adjective",
    subtitle: "Learn how a participle acts like both a verb and an adjective.",
    color: "#5b8fc9",
    reference: "Henle Lesson 30 · The perfect participle passive",
    questions: [
      {
        type: "choice",
        prompt: "What is a participle?",
        choices: ["a verbal adjective", "a noun ending only", "a direct question", "a vocative command"],
        correct: "a verbal adjective",
        explanation: "A participle is verbal because it expresses action, and adjectival because it modifies a noun or pronoun."
      },
      {
        type: "choice",
        prompt: "Which principal part is the perfect participle passive for regular Latin verbs?",
        choices: ["the fourth principal part", "the first principal part", "the present infinitive", "the genitive singular"],
        correct: "the fourth principal part",
        explanation: "In a regular verb, the fourth principal part gives the perfect participle passive."
      },
      {
        type: "choice",
        prompt: "How may “laudātus” be translated?",
        choices: ["praised / having been praised", "praising", "about to praise", "he praised"],
        correct: "praised / having been praised",
        explanation: "The perfect participle passive may use the short English form praised or the longer form having been praised."
      },
      {
        type: "choice",
        prompt: "Perfect participles passive are declined like which adjective pattern?",
        choices: ["magnus, magna, magnum", "gravis, grave", "hic, haec, hoc", "ego, tū"],
        correct: "magnus, magna, magnum",
        explanation: "Laudātus, laudāta, laudātum uses the familiar first-and-second-declension adjective endings."
      },
      {
        type: "build",
        prompt: "Build in Latin: the praised sailor",
        tokens: ["nauta", "laudātus"],
        correct: "nauta laudātus",
        explanation: "Nauta is masculine singular, so the participle is laudātus."
      }
    ]
  },
  {
    id: "lesson30-agreement",
    lessonSet: "lesson30",
    number: "II",
    eyebrow: "Lesson 30 · Agreement",
    title: "Praised, Sent, Heard",
    subtitle: "Make the perfect participle passive agree with the noun it describes.",
    color: "#9a76b4",
    reference: "Henle Lesson 30 · Participle agreement",
    questions: [
      {
        type: "choice",
        prompt: "Which form best describes “legiō” in “the sent legion”?",
        choices: ["missa", "missus", "missum", "missī"],
        correct: "missa",
        explanation: "Legiō is feminine singular, so the participle is missa."
      },
      {
        type: "choice",
        prompt: "Translate: “oppidum occupātum.”",
        choices: ["the captured town", "the town captures", "the captured towns", "the town will capture"],
        correct: "the captured town",
        explanation: "Oppidum is neuter singular, so occupātum agrees with it."
      },
      {
        type: "choice",
        prompt: "What does “mīlitēs missī” mean?",
        choices: ["the sent soldiers", "the soldier sent", "the soldiers send", "to the sent soldier"],
        correct: "the sent soldiers",
        explanation: "Missī is masculine plural and describes mīlitēs."
      },
      {
        type: "choice",
        prompt: "In “Gallī victī discessērunt,” what does “victī” describe?",
        choices: ["Gallī", "discessērunt", "a hidden town", "the speaker"],
        correct: "Gallī",
        explanation: "Victī agrees with Gallī and means conquered or having been conquered."
      },
      {
        type: "build",
        prompt: "Build in Latin: the conquered Gauls withdrew.",
        tokens: ["Gallī", "victī", "discessērunt"],
        correct: "Gallī victī discessērunt",
        explanation: "Victī agrees with Gallī; discessērunt means they withdrew."
      }
    ]
  },
  {
    id: "lesson30-special-notes",
    lessonSet: "lesson30",
    number: "III",
    eyebrow: "Lesson 30 · Special notes",
    title: "When the Verb Cannot Take an Object",
    subtitle: "Notice intransitive and defective verbs in the fourth principal part.",
    color: "#3e9b77",
    reference: "Henle Lesson 30 · Intransitive and defective verbs",
    questions: [
      {
        type: "choice",
        prompt: "If a verb is intransitive, what kind of passive participle form can it have?",
        choices: ["neuter only", "masculine only", "feminine only", "none of any kind"],
        correct: "neuter only",
        explanation: "An intransitive verb cannot have a normal personal passive object, so Henle gives only a neuter passive participle form when there is one."
      },
      {
        type: "choice",
        prompt: "What does “pugnātum est” mean most naturally?",
        choices: ["there was fighting / they fought", "he was fought", "the battle line was sent", "fight, all of you"],
        correct: "there was fighting / they fought",
        explanation: "Pugnō is intransitive, so the neuter form is used impersonally."
      },
      {
        type: "choice",
        prompt: "A future active participle usually ends in what?",
        choices: ["-ūrus", "-tus", "-ntur", "-erim"],
        correct: "-ūrus",
        explanation: "When Henle lists a future active participle as a principal part, the form ends in -ūrus."
      },
      {
        type: "choice",
        prompt: "What does “cessūrus” mean?",
        choices: ["about to yield", "having been yielded", "he yielded", "yield!"],
        correct: "about to yield",
        explanation: "Cessūrus is future active: about to yield."
      }
    ]
  },
  {
    id: "lesson30-vocabulary",
    lessonSet: "lesson30",
    number: "IV",
    eyebrow: "Lesson 30 · Vocabulary",
    title: "Moved, Led, and Hindered",
    subtitle: "Practice the new Lesson 30 words and their participles.",
    color: "#de8465",
    reference: "Henle Lesson 30 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What does “addūcō” mean?",
        choices: ["lead to / lead on", "hinder", "arouse", "fall"],
        correct: "lead to / lead on",
        explanation: "Addūcō means lead to, and in context it can mean lead on or induce."
      },
      {
        type: "choice",
        prompt: "What does “commoveō” mean?",
        choices: ["alarm / arouse", "lead across", "fall", "withdraw"],
        correct: "alarm / arouse",
        explanation: "Commōtus often means moved, alarmed, or aroused."
      },
      {
        type: "choice",
        prompt: "What can “impedītus” mean in context?",
        choices: ["hindered / encumbered / difficult", "highest", "opposite", "from the rear"],
        correct: "hindered / encumbered / difficult",
        explanation: "Impeditus can describe soldiers encumbered by baggage or terrain that is difficult."
      },
      {
        type: "choice",
        prompt: "What does “auctōritās” mean?",
        choices: ["authority / influence", "a ship", "a summit", "a reason"],
        correct: "authority / influence",
        explanation: "Auctōritās means authority or influence."
      },
      {
        type: "build",
        prompt: "Build in Latin: led on by hope of victory",
        tokens: ["spē", "victōriae", "adductī"],
        correct: "spē victōriae adductī",
        explanation: "Adductī is a perfect participle passive; spē victōriae means by hope of victory."
      }
    ]
  },
  {
    id: "lesson30-wrap",
    lessonSet: "lesson30",
    number: "V",
    eyebrow: "Lesson 30 · Mastery",
    title: "Perfect Participle Passive",
    subtitle: "Mix participles, agreement, new vocabulary, and earlier sentences.",
    color: "#c8912f",
    reference: "Henle Lesson 30 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: “Caesar nuntiīs commōtus legiōnēs mīsit.”",
        choices: ["Caesar, alarmed by the messages, sent legions.", "Caesar alarmed the messengers and praised legions.", "The legions sent Caesar to the messengers.", "Caesar will be alarmed by the legions."],
        correct: "Caesar, alarmed by the messages, sent legions.",
        explanation: "Commōtus describes Caesar; nuntiīs can show the means or cause of his alarm."
      },
      {
        type: "choice",
        prompt: "Translate: “castra vallō mūnīta.”",
        choices: ["the camp fortified by a rampart", "the rampart fortified by a camp", "they will fortify the camp", "fortify the rampart"],
        correct: "the camp fortified by a rampart",
        explanation: "Castra is neuter plural in form, so mūnīta agrees with it."
      },
      {
        type: "choice",
        prompt: "Which Latin phrase means “the hindered army”?",
        choices: ["exercitus impeditus", "auctōritās impedīta", "hostēs impeditum", "flūmen impeditī"],
        correct: "exercitus impeditus",
        explanation: "Exercitus is masculine singular, so impeditus agrees with it."
      },
      {
        type: "choice",
        prompt: "Translate: “litterīs commōtī.”",
        choices: ["moved by the letters", "moving the letters", "letters about to move", "from these letters"],
        correct: "moved by the letters",
        explanation: "Commōtī is a perfect participle passive; litterīs can show the means or cause."
      },
      {
        type: "build",
        prompt: "Build in Latin: The enemy, having been conquered, fled.",
        tokens: ["hostēs", "victī", "fūgērunt"],
        correct: "hostēs victī fūgērunt",
        explanation: "Victī agrees with hostēs and means conquered or having been conquered."
      }
    ]
  },
  {
    id: "lesson31-forms",
    lessonSet: "lesson31",
    number: "I",
    eyebrow: "Lesson 31 · Hic forms",
    title: "This and These",
    subtitle: "Learn the forms of hic, haec, hoc.",
    color: "#5b8fc9",
    reference: "Henle Lesson 31 · Hic, haec, hoc",
    questions: [
      {
        type: "choice",
        prompt: "What kind of word is “hic, haec, hoc”?",
        choices: ["a demonstrative pronoun or adjective", "a future active participle only", "a passive personal sign", "an indirect question word"],
        correct: "a demonstrative pronoun or adjective",
        explanation: "Hic, haec, hoc points out this or these."
      },
      {
        type: "choice",
        prompt: "Which form means “this” with a masculine singular subject?",
        choices: ["hic", "haec", "hoc", "hīs"],
        correct: "hic",
        explanation: "Hic is masculine nominative singular."
      },
      {
        type: "choice",
        prompt: "Which form means “this” with a feminine singular subject?",
        choices: ["haec", "hic", "hōc", "hī"],
        correct: "haec",
        explanation: "Haec is feminine nominative singular."
      },
      {
        type: "choice",
        prompt: "Which form can mean “of this” for any gender?",
        choices: ["huius", "huic", "hunc", "hās"],
        correct: "huius",
        explanation: "Huius is the genitive singular form for masculine, feminine, and neuter."
      },
      {
        type: "choice",
        prompt: "Which form can mean “to or for this” for any gender?",
        choices: ["huic", "huius", "hōrum", "hōs"],
        correct: "huic",
        explanation: "Huic is the dative singular form for masculine, feminine, and neuter."
      }
    ]
  },
  {
    id: "lesson31-adjective",
    lessonSet: "lesson31",
    number: "II",
    eyebrow: "Lesson 31 · As adjective",
    title: "This Soldier, These Cities",
    subtitle: "Use hic as an adjective before the noun it modifies.",
    color: "#9a76b4",
    reference: "Henle Lesson 31 · Hic as an adjective",
    questions: [
      {
        type: "choice",
        prompt: "Where does hic, haec, hoc generally stand when it modifies a noun?",
        choices: ["before the noun", "after every verb", "always last", "inside the noun"],
        correct: "before the noun",
        explanation: "As an adjective, hic usually comes before the noun it modifies."
      },
      {
        type: "choice",
        prompt: "Which phrase means “this soldier”?",
        choices: ["hic mīles", "haec mīles", "hoc mīles", "hīs mīles"],
        correct: "hic mīles",
        explanation: "Mīles is masculine singular, so use hic."
      },
      {
        type: "choice",
        prompt: "Which phrase means “these cities” as direct object?",
        choices: ["hās urbēs", "hae urbēs", "hōs urbēs", "hīs urbibus"],
        correct: "hās urbēs",
        explanation: "Urbēs is feminine accusative plural here, so hās agrees with it."
      },
      {
        type: "choice",
        prompt: "Translate: “hōc proeliō.”",
        choices: ["in/by this battle", "this battle as direct object", "of this battle", "these battles as subject"],
        correct: "in/by this battle",
        explanation: "Hōc is neuter ablative singular agreeing with proeliō."
      },
      {
        type: "build",
        prompt: "Build in Latin: Caesar heard this message.",
        tokens: ["Caesar", "hunc", "nuntium", "audīvit"],
        correct: "Caesar hunc nuntium audīvit",
        explanation: "Nuntium is masculine accusative singular, so use hunc."
      }
    ]
  },
  {
    id: "lesson31-pronoun",
    lessonSet: "lesson31",
    number: "III",
    eyebrow: "Lesson 31 · As pronoun",
    title: "These Did This",
    subtitle: "Let hic stand alone as a pronoun when the noun is understood.",
    color: "#3e9b77",
    reference: "Henle Lesson 31 · Hic as a pronoun",
    questions: [
      {
        type: "choice",
        prompt: "When hic is used as a pronoun, what does it agree with?",
        choices: ["the word it refers to", "the nearest verb only", "the final word of the sentence", "nothing at all"],
        correct: "the word it refers to",
        explanation: "As a pronoun, hic agrees in gender and number with the person or thing it points back to."
      },
      {
        type: "choice",
        prompt: "Translate: “Hī impetum sustinuērunt.”",
        choices: ["These men withstood the attack.", "This attack withstood men.", "These things were sent.", "This man was conquered."],
        correct: "These men withstood the attack.",
        explanation: "Hī is masculine nominative plural and can stand alone for these men."
      },
      {
        type: "choice",
        prompt: "Translate: “Caesar haec audīvit.”",
        choices: ["Caesar heard these things.", "These men heard Caesar.", "Caesar heard this man.", "This woman heard Caesar."],
        correct: "Caesar heard these things.",
        explanation: "Haec is neuter plural here and means these things."
      },
      {
        type: "choice",
        prompt: "What can “hīs” mean?",
        choices: ["to/for/by/with/from these", "of this", "this man as subject", "that one"],
        correct: "to/for/by/with/from these",
        explanation: "Hīs is the dative or ablative plural for all three genders."
      },
      {
        type: "build",
        prompt: "Build in Latin: These men praised Caesar.",
        tokens: ["hī", "Caesarem", "laudāvērunt"],
        correct: "hī Caesarem laudāvērunt",
        explanation: "Hī can stand alone as masculine plural: these men."
      }
    ]
  },
  {
    id: "lesson31-vocabulary",
    lessonSet: "lesson31",
    number: "IV",
    eyebrow: "Lesson 31 · Vocabulary",
    title: "Against, Rear, Front, Highest",
    subtitle: "Practice Lesson 31 vocabulary and short phrases.",
    color: "#de8465",
    reference: "Henle Lesson 31 · Vocabulary",
    questions: [
      {
        type: "choice",
        prompt: "What case does “contra” take?",
        choices: ["accusative", "ablative", "genitive", "dative"],
        correct: "accusative",
        explanation: "Contra is a preposition with the accusative."
      },
      {
        type: "choice",
        prompt: "What does “contra hostēs” mean?",
        choices: ["against the enemy", "from the enemy", "with the enemy", "of the enemy"],
        correct: "against the enemy",
        explanation: "Contra with the accusative means against or opposite."
      },
      {
        type: "choice",
        prompt: "What does “ā tergō” mean?",
        choices: ["from the rear", "from the front", "against the front", "for the sake of the rear"],
        correct: "from the rear",
        explanation: "Ā tergō means from the rear or in the rear."
      },
      {
        type: "choice",
        prompt: "What does “ā fronte” mean?",
        choices: ["from the front", "from the rear", "against the rear", "with these men"],
        correct: "from the front",
        explanation: "Ā fronte means from the front or in the front."
      },
      {
        type: "choice",
        prompt: "What can “summus” mean?",
        choices: ["highest / top of / very great", "from the rear", "this man", "encumbered"],
        correct: "highest / top of / very great",
        explanation: "Summus can mean highest, top of, or very great according to context."
      }
    ]
  },
  {
    id: "lesson31-wrap",
    lessonSet: "lesson31",
    number: "V",
    eyebrow: "Lesson 31 · Mastery",
    title: "Hic, Haec, Hoc",
    subtitle: "Mix demonstratives, participles, and Lesson 31 vocabulary.",
    color: "#c8912f",
    reference: "Henle Lesson 31 · Review",
    questions: [
      {
        type: "choice",
        prompt: "Translate: “Hae legiōnēs hunc collem occupāvērunt.”",
        choices: ["These legions seized this hill.", "This hill seized these legions.", "Those legions left this hill.", "These hills seized the legion."],
        correct: "These legions seized this hill.",
        explanation: "Hae agrees with legiōnēs, and hunc agrees with collem."
      },
      {
        type: "choice",
        prompt: "Translate: “Hīs litterīs commōtus, Caesar vēnit.”",
        choices: ["Moved by these letters, Caesar came.", "Caesar moved these letters.", "These men came to Caesar.", "Caesar wrote these letters."],
        correct: "Moved by these letters, Caesar came.",
        explanation: "Hīs litterīs is ablative plural, and commōtus describes Caesar."
      },
      {
        type: "choice",
        prompt: "Which phrase means “from the rear”?",
        choices: ["ā tergō", "ā fronte", "contra tergum", "summā auctōritāte"],
        correct: "ā tergō",
        explanation: "Ā tergō means from the rear."
      },
      {
        type: "choice",
        prompt: "Which form of hic fits “with these soldiers”?",
        choices: ["hīs mīlitibus", "hic mīlitibus", "hunc mīlitibus", "huius mīlitibus"],
        correct: "hīs mīlitibus",
        explanation: "With these soldiers needs the ablative plural: hīs."
      },
      {
        type: "build",
        prompt: "Build in Latin: These soldiers fight against the enemy.",
        tokens: ["hī", "mīlitēs", "contra", "hostēs", "pugnant"],
        correct: "hī mīlitēs contra hostēs pugnant",
        explanation: "Hī agrees with mīlitēs, and contra takes the accusative hostēs."
      }
    ]
  }
];

const vocabulary = [
  ["terra, terrae", "earth, land"],
  ["porta, portae", "gate"],
  ["Maria, Mariae", "Mary"],
  ["nauta, nautae", "sailor"],
  ["victoria, victoriae", "victory"],
  ["silva, silvae", "forest"],
  ["gloria, gloriae", "glory"],
  ["orat", "he, she, it prays"],
  ["orant", "they pray"],
  ["videt", "he, she, it sees"],
  ["vident", "they see"],
  ["non", "not"],
  ["laudat", "he, she, it praises"],
  ["laudant", "they praise"],
  ["provincia, provinciae", "province"],
  ["Salve!", "Hello! to one person"],
  ["Salvete!", "Hello! to two or more"]
];

const firstDeclensionEndings = [
  ["a", "Subject (sing.)"],
  ["ae", "of"],
  ["ae", "to, for"],
  ["am", "direct object"],
  ["\u0101", "by, with, from"],
  ["ae", "Subject (pl.)"],
  ["\u0101rum", "of (pl.)"],
  ["\u012bs", "to, for (pl.)"],
  ["\u0101s", "direct object (pl.)"],
  ["\u012bs", "by, with, from (pl.)"]
];

const firstDeclensionEndingPractice = {
  singular: {
    title: "Feminine Singular Endings",
    subtitle: "Fill the case endings in order from Nominative to Ablative.",
    items: [
      { group: "Singular", caseName: "Nominative", ending: "a" },
      { group: "Singular", caseName: "Genitive", ending: "ae" },
      { group: "Singular", caseName: "Dative", ending: "ae" },
      { group: "Singular", caseName: "Accusative", ending: "am" },
      { group: "Singular", caseName: "Ablative", ending: "\u0101" }
    ]
  },
  plural: {
    title: "Feminine Plural Endings",
    subtitle: "Use the same case order, now with plural endings.",
    items: [
      { group: "Plural", caseName: "Nominative", ending: "ae" },
      { group: "Plural", caseName: "Genitive", ending: "\u0101rum" },
      { group: "Plural", caseName: "Dative", ending: "\u012bs" },
      { group: "Plural", caseName: "Accusative", ending: "\u0101s" },
      { group: "Plural", caseName: "Ablative", ending: "\u012bs" }
    ]
  }
};
firstDeclensionEndingPractice.both = {
  title: "Feminine Singular and Plural Endings",
  subtitle: "First fill singular, then plural, in the same case order.",
  items: [
    ...firstDeclensionEndingPractice.singular.items,
    ...firstDeclensionEndingPractice.plural.items
  ]
};

const secondDeclensionMasculineSingularItems = [
  { group: "Masculine Singular", caseName: "Nominative", ending: "us" },
  { group: "Masculine Singular", caseName: "Genitive", ending: "i" },
  { group: "Masculine Singular", caseName: "Dative", ending: "o" },
  { group: "Masculine Singular", caseName: "Accusative", ending: "um" },
  { group: "Masculine Singular", caseName: "Ablative", ending: "o" }
];

const secondDeclensionMasculinePluralItems = [
  { group: "Masculine Plural", caseName: "Nominative", ending: "i" },
  { group: "Masculine Plural", caseName: "Genitive", ending: "orum" },
  { group: "Masculine Plural", caseName: "Dative", ending: "is" },
  { group: "Masculine Plural", caseName: "Accusative", ending: "os" },
  { group: "Masculine Plural", caseName: "Ablative", ending: "is" }
];

const secondDeclensionNeuterSingularItems = [
  { group: "Neuter Singular", caseName: "Nominative", ending: "um" },
  { group: "Neuter Singular", caseName: "Genitive", ending: "i" },
  { group: "Neuter Singular", caseName: "Dative", ending: "o" },
  { group: "Neuter Singular", caseName: "Accusative", ending: "um" },
  { group: "Neuter Singular", caseName: "Ablative", ending: "o" }
];

const secondDeclensionNeuterPluralItems = [
  { group: "Neuter Plural", caseName: "Nominative", ending: "a" },
  { group: "Neuter Plural", caseName: "Genitive", ending: "orum" },
  { group: "Neuter Plural", caseName: "Dative", ending: "is" },
  { group: "Neuter Plural", caseName: "Accusative", ending: "a" },
  { group: "Neuter Plural", caseName: "Ablative", ending: "is" }
];

const secondDeclensionEndingPractice = {
  masculineSingular: {
    title: "Servus Pattern Singular Endings",
    subtitle: "Fill the masculine singular endings in order from Nominative to Ablative.",
    items: secondDeclensionMasculineSingularItems
  },
  masculinePlural: {
    title: "Servus Pattern Plural Endings",
    subtitle: "Fill the masculine plural endings in order from Nominative to Ablative.",
    items: secondDeclensionMasculinePluralItems
  },
  masculineBoth: {
    title: "Servus Pattern Singular and Plural Endings",
    subtitle: "First fill masculine singular, then masculine plural, in the same case order.",
    items: [
      ...secondDeclensionMasculineSingularItems,
      ...secondDeclensionMasculinePluralItems
    ]
  },
  neuterSingular: {
    title: "Bellum Pattern Singular Endings",
    subtitle: "Fill the neuter singular endings in order from Nominative to Ablative.",
    items: secondDeclensionNeuterSingularItems
  },
  neuterPlural: {
    title: "Bellum Pattern Plural Endings",
    subtitle: "Fill the neuter plural endings in order from Nominative to Ablative.",
    items: secondDeclensionNeuterPluralItems
  },
  neuterBoth: {
    title: "Bellum Pattern Singular and Plural Endings",
    subtitle: "First fill neuter singular, then neuter plural, in the same case order.",
    items: [
      ...secondDeclensionNeuterSingularItems,
      ...secondDeclensionNeuterPluralItems
    ]
  },
  mixed: {
    title: "Second-Declension Mixed Endings",
    subtitle: "Practice servus first, then bellum, with singular and plural endings in order.",
    items: [
      ...secondDeclensionMasculineSingularItems,
      ...secondDeclensionMasculinePluralItems,
      ...secondDeclensionNeuterSingularItems,
      ...secondDeclensionNeuterPluralItems
    ]
  }
};
secondDeclensionEndingPractice.singular = secondDeclensionEndingPractice.masculineSingular;
secondDeclensionEndingPractice.plural = secondDeclensionEndingPractice.masculinePlural;
secondDeclensionEndingPractice.both = secondDeclensionEndingPractice.mixed;

const thirdDeclensionLexSingularItems = [
  { group: "Lex Singular", caseName: "Nominative", ending: "—" },
  { group: "Lex Singular", caseName: "Genitive", ending: "is" },
  { group: "Lex Singular", caseName: "Dative", ending: "i" },
  { group: "Lex Singular", caseName: "Accusative", ending: "em" },
  { group: "Lex Singular", caseName: "Ablative", ending: "e" }
];

const thirdDeclensionLexPluralItems = [
  { group: "Lex Plural", caseName: "Nominative", ending: "es" },
  { group: "Lex Plural", caseName: "Genitive", ending: "um" },
  { group: "Lex Plural", caseName: "Dative", ending: "ibus" },
  { group: "Lex Plural", caseName: "Accusative", ending: "es" },
  { group: "Lex Plural", caseName: "Ablative", ending: "ibus" }
];

const thirdDeclensionParsSingularItems = [
  { group: "Pars Singular", caseName: "Nominative", ending: "—" },
  { group: "Pars Singular", caseName: "Genitive", ending: "is" },
  { group: "Pars Singular", caseName: "Dative", ending: "i" },
  { group: "Pars Singular", caseName: "Accusative", ending: "em" },
  { group: "Pars Singular", caseName: "Ablative", ending: "e" }
];

const thirdDeclensionParsPluralItems = [
  { group: "Pars Plural", caseName: "Nominative", ending: "es" },
  { group: "Pars Plural", caseName: "Genitive", ending: "ium" },
  { group: "Pars Plural", caseName: "Dative", ending: "ibus" },
  { group: "Pars Plural", caseName: "Accusative", ending: "es" },
  { group: "Pars Plural", caseName: "Ablative", ending: "ibus" }
];

const thirdDeclensionFlumenSingularItems = [
  { group: "Flumen Singular", caseName: "Nominative", ending: "—" },
  { group: "Flumen Singular", caseName: "Genitive", ending: "is" },
  { group: "Flumen Singular", caseName: "Dative", ending: "i" },
  { group: "Flumen Singular", caseName: "Accusative", ending: "—" },
  { group: "Flumen Singular", caseName: "Ablative", ending: "e" }
];

const thirdDeclensionFlumenPluralItems = [
  { group: "Flumen Plural", caseName: "Nominative", ending: "a" },
  { group: "Flumen Plural", caseName: "Genitive", ending: "um" },
  { group: "Flumen Plural", caseName: "Dative", ending: "ibus" },
  { group: "Flumen Plural", caseName: "Accusative", ending: "a" },
  { group: "Flumen Plural", caseName: "Ablative", ending: "ibus" }
];

const thirdDeclensionEndingPractice = {
  lexSingular: {
    title: "Lex Pattern Singular Endings",
    subtitle: "Fill the masculine/feminine third-declension singular endings in order.",
    items: thirdDeclensionLexSingularItems
  },
  lexPlural: {
    title: "Lex Pattern Plural Endings",
    subtitle: "Fill the lex-type plural endings in order.",
    items: thirdDeclensionLexPluralItems
  },
  lexBoth: {
    title: "Lex Pattern Singular and Plural Endings",
    subtitle: "First fill lex-type singular, then lex-type plural.",
    items: [...thirdDeclensionLexSingularItems, ...thirdDeclensionLexPluralItems]
  },
  parsSingular: {
    title: "Pars Pattern Singular Endings",
    subtitle: "Fill the pars-type singular endings in order.",
    items: thirdDeclensionParsSingularItems
  },
  parsPlural: {
    title: "Pars Pattern Plural Endings",
    subtitle: "Fill the pars-type plural endings, noticing genitive plural -ium.",
    items: thirdDeclensionParsPluralItems
  },
  parsBoth: {
    title: "Pars Pattern Singular and Plural Endings",
    subtitle: "First fill pars-type singular, then pars-type plural.",
    items: [...thirdDeclensionParsSingularItems, ...thirdDeclensionParsPluralItems]
  },
  flumenSingular: {
    title: "Flumen Pattern Singular Endings",
    subtitle: "Fill the neuter third-declension singular endings in order.",
    items: thirdDeclensionFlumenSingularItems
  },
  flumenPlural: {
    title: "Flumen Pattern Plural Endings",
    subtitle: "Fill the neuter third-declension plural endings in order.",
    items: thirdDeclensionFlumenPluralItems
  },
  flumenBoth: {
    title: "Flumen Pattern Singular and Plural Endings",
    subtitle: "First fill flumen-type singular, then flumen-type plural.",
    items: [...thirdDeclensionFlumenSingularItems, ...thirdDeclensionFlumenPluralItems]
  },
  mixed: {
    title: "Third-Declension Mixed Endings",
    subtitle: "Practice lex, pars, and flumen in order.",
    items: [
      ...thirdDeclensionLexSingularItems,
      ...thirdDeclensionLexPluralItems,
      ...thirdDeclensionParsSingularItems,
      ...thirdDeclensionParsPluralItems,
      ...thirdDeclensionFlumenSingularItems,
      ...thirdDeclensionFlumenPluralItems
    ]
  }
};
thirdDeclensionEndingPractice.singular = thirdDeclensionEndingPractice.lexSingular;
thirdDeclensionEndingPractice.plural = thirdDeclensionEndingPractice.lexPlural;
thirdDeclensionEndingPractice.both = thirdDeclensionEndingPractice.mixed;

const fourthDeclensionSingularItems = [
  { group: "Portus Singular", caseName: "Nominative", ending: "us" },
  { group: "Portus Singular", caseName: "Genitive", ending: "ūs" },
  { group: "Portus Singular", caseName: "Dative", ending: "uī" },
  { group: "Portus Singular", caseName: "Accusative", ending: "um" },
  { group: "Portus Singular", caseName: "Ablative", ending: "ū" }
];

const fourthDeclensionPluralItems = [
  { group: "Portus Plural", caseName: "Nominative", ending: "ūs" },
  { group: "Portus Plural", caseName: "Genitive", ending: "uum" },
  { group: "Portus Plural", caseName: "Dative", ending: "ibus" },
  { group: "Portus Plural", caseName: "Accusative", ending: "ūs" },
  { group: "Portus Plural", caseName: "Ablative", ending: "ibus" }
];

const fourthDeclensionEndingPractice = {
  singular: {
    title: "Portus Pattern Singular Endings",
    subtitle: "Fill the fourth-declension singular endings in order.",
    items: fourthDeclensionSingularItems
  },
  plural: {
    title: "Portus Pattern Plural Endings",
    subtitle: "Fill the fourth-declension plural endings in order.",
    items: fourthDeclensionPluralItems
  },
  both: {
    title: "Portus Pattern Singular and Plural Endings",
    subtitle: "First fill portus singular, then portus plural.",
    items: [...fourthDeclensionSingularItems, ...fourthDeclensionPluralItems]
  }
};

const fifthDeclensionSingularItems = [
  { group: "Rēs Singular", caseName: "Nominative", ending: "ēs" },
  { group: "Rēs Singular", caseName: "Genitive", ending: "eī" },
  { group: "Rēs Singular", caseName: "Dative", ending: "eī" },
  { group: "Rēs Singular", caseName: "Accusative", ending: "em" },
  { group: "Rēs Singular", caseName: "Ablative", ending: "ē" }
];

const fifthDeclensionPluralItems = [
  { group: "Rēs Plural", caseName: "Nominative", ending: "ēs" },
  { group: "Rēs Plural", caseName: "Genitive", ending: "ērum" },
  { group: "Rēs Plural", caseName: "Dative", ending: "ēbus" },
  { group: "Rēs Plural", caseName: "Accusative", ending: "ēs" },
  { group: "Rēs Plural", caseName: "Ablative", ending: "ēbus" }
];

const fifthDeclensionEndingPractice = {
  singular: {
    title: "Rēs Pattern Singular Endings",
    subtitle: "Fill the fifth-declension singular endings in order.",
    items: fifthDeclensionSingularItems
  },
  plural: {
    title: "Rēs Pattern Plural Endings",
    subtitle: "Fill the fifth-declension plural endings in order.",
    items: fifthDeclensionPluralItems
  },
  both: {
    title: "Rēs Pattern Singular and Plural Endings",
    subtitle: "First fill rēs singular, then rēs plural.",
    items: [...fifthDeclensionSingularItems, ...fifthDeclensionPluralItems]
  }
};

const lessonSixNeuterPluralItems = [
  { group: "Castra / Impedimenta", caseName: "Nominative", ending: "a" },
  { group: "Castra / Impedimenta", caseName: "Genitive", ending: "orum" },
  { group: "Castra / Impedimenta", caseName: "Dative", ending: "is" },
  { group: "Castra / Impedimenta", caseName: "Accusative", ending: "a" },
  { group: "Castra / Impedimenta", caseName: "Ablative", ending: "is" }
];

const lessonSixFirstPluralItems = [
  { group: "Gratiae / Copiae", caseName: "Nominative", ending: "ae" },
  { group: "Gratiae / Copiae", caseName: "Genitive", ending: "arum" },
  { group: "Gratiae / Copiae", caseName: "Dative", ending: "is" },
  { group: "Gratiae / Copiae", caseName: "Accusative", ending: "as" },
  { group: "Gratiae / Copiae", caseName: "Ablative", ending: "is" }
];

const lessonSixEndingPractice = {
  neuterPlural: {
    title: "Castra and Impedimenta Plural Endings",
    subtitle: "Fill the second-declension neuter plural endings used by castra and impedimenta.",
    items: lessonSixNeuterPluralItems
  },
  firstPlural: {
    title: "Gratiae and Copiae Plural Endings",
    subtitle: "Fill the first-declension plural endings used by gratiae and copiae.",
    items: lessonSixFirstPluralItems
  },
  both: {
    title: "Lesson 6 Special Plural Endings",
    subtitle: "First fill castra/impedimenta, then gratiae/copiae.",
    items: [
      ...lessonSixNeuterPluralItems,
      ...lessonSixFirstPluralItems
    ]
  }
};
lessonSixEndingPractice.singular = lessonSixEndingPractice.neuterPlural;
lessonSixEndingPractice.plural = lessonSixEndingPractice.firstPlural;

const lessonSevenMasculineItems = [
  ...secondDeclensionMasculineSingularItems.map((item) => ({ ...item, group: "Magnus Masculine Singular" })),
  ...secondDeclensionMasculinePluralItems.map((item) => ({ ...item, group: "Magnus Masculine Plural" }))
];

const lessonSevenFeminineItems = [
  ...firstDeclensionEndingPractice.singular.items.map((item) => ({ ...item, group: "Magna Feminine Singular" })),
  ...firstDeclensionEndingPractice.plural.items.map((item) => ({ ...item, group: "Magna Feminine Plural" }))
];

const lessonSevenNeuterItems = [
  ...secondDeclensionNeuterSingularItems.map((item) => ({ ...item, group: "Magnum Neuter Singular" })),
  ...secondDeclensionNeuterPluralItems.map((item) => ({ ...item, group: "Magnum Neuter Plural" }))
];

const lessonSevenEndingPractice = {
  masculine: {
    title: "Magnus Masculine Endings",
    subtitle: "Fill the masculine adjective endings in order from Nominative to Ablative.",
    items: lessonSevenMasculineItems
  },
  feminine: {
    title: "Magna Feminine Endings",
    subtitle: "Fill the feminine adjective endings in order from Nominative to Ablative.",
    items: lessonSevenFeminineItems
  },
  neuter: {
    title: "Magnum Neuter Endings",
    subtitle: "Fill the neuter adjective endings in order from Nominative to Ablative.",
    items: lessonSevenNeuterItems
  },
  mixed: {
    title: "Magnus, Magna, Magnum Endings",
    subtitle: "Fill masculine, feminine, and neuter adjective endings in order.",
    items: [
      ...lessonSevenMasculineItems,
      ...lessonSevenFeminineItems,
      ...lessonSevenNeuterItems
    ]
  }
};
lessonSevenEndingPractice.singular = lessonSevenEndingPractice.masculine;
lessonSevenEndingPractice.plural = lessonSevenEndingPractice.feminine;
lessonSevenEndingPractice.both = lessonSevenEndingPractice.mixed;

const lessonEightMasculineFeminineSingularItems = [
  { group: "Gravis M./F. Singular", caseName: "Nominative", ending: "is" },
  { group: "Gravis M./F. Singular", caseName: "Genitive", ending: "is" },
  { group: "Gravis M./F. Singular", caseName: "Dative", ending: "i" },
  { group: "Gravis M./F. Singular", caseName: "Accusative", ending: "em" },
  { group: "Gravis M./F. Singular", caseName: "Ablative", ending: "i" }
];

const lessonEightMasculineFemininePluralItems = [
  { group: "Gravis M./F. Plural", caseName: "Nominative", ending: "es" },
  { group: "Gravis M./F. Plural", caseName: "Genitive", ending: "ium" },
  { group: "Gravis M./F. Plural", caseName: "Dative", ending: "ibus" },
  { group: "Gravis M./F. Plural", caseName: "Accusative", ending: "es" },
  { group: "Gravis M./F. Plural", caseName: "Ablative", ending: "ibus" }
];

const lessonEightNeuterSingularItems = [
  { group: "Grave Neuter Singular", caseName: "Nominative", ending: "e" },
  { group: "Grave Neuter Singular", caseName: "Genitive", ending: "is" },
  { group: "Grave Neuter Singular", caseName: "Dative", ending: "i" },
  { group: "Grave Neuter Singular", caseName: "Accusative", ending: "e" },
  { group: "Grave Neuter Singular", caseName: "Ablative", ending: "i" }
];

const lessonEightNeuterPluralItems = [
  { group: "Grave Neuter Plural", caseName: "Nominative", ending: "ia" },
  { group: "Grave Neuter Plural", caseName: "Genitive", ending: "ium" },
  { group: "Grave Neuter Plural", caseName: "Dative", ending: "ibus" },
  { group: "Grave Neuter Plural", caseName: "Accusative", ending: "ia" },
  { group: "Grave Neuter Plural", caseName: "Ablative", ending: "ibus" }
];

const lessonEightMasculineFeminineItems = [
  ...lessonEightMasculineFeminineSingularItems,
  ...lessonEightMasculineFemininePluralItems
];

const lessonEightNeuterItems = [
  ...lessonEightNeuterSingularItems,
  ...lessonEightNeuterPluralItems
];

const lessonEightEndingPractice = {
  masculineFeminine: {
    title: "Gravis Masculine/Feminine Endings",
    subtitle: "Fill the masculine/feminine third-declension adjective endings in order.",
    items: lessonEightMasculineFeminineItems
  },
  neuter: {
    title: "Grave Neuter Endings",
    subtitle: "Fill the neuter third-declension adjective endings in order.",
    items: lessonEightNeuterItems
  },
  mixed: {
    title: "Gravis, Grave Endings",
    subtitle: "Fill masculine/feminine and neuter adjective endings in order.",
    items: [
      ...lessonEightMasculineFeminineItems,
      ...lessonEightNeuterItems
    ]
  }
};
lessonEightEndingPractice.singular = lessonEightEndingPractice.masculineFeminine;
lessonEightEndingPractice.plural = lessonEightEndingPractice.neuter;
lessonEightEndingPractice.both = lessonEightEndingPractice.mixed;

const lessonNinePresentVerbItems = [
  { group: "Laudō Present", caseName: "I", ending: "laudō", meaning: "I praise / am praising / do praise" },
  { group: "Laudō Present", caseName: "you (sg.)", ending: "laudās", meaning: "you praise / are praising / do praise" },
  { group: "Laudō Present", caseName: "he/she/it", ending: "laudat", meaning: "he, she, or it praises" },
  { group: "Laudō Present", caseName: "we", ending: "laudāmus", meaning: "we praise / are praising / do praise" },
  { group: "Laudō Present", caseName: "you (pl.)", ending: "laudātis", meaning: "you all praise / are praising / do praise" },
  { group: "Laudō Present", caseName: "they", ending: "laudant", meaning: "they praise / are praising / do praise" }
];

const lessonNineImperfectVerbItems = [
  { group: "Laudō Imperfect", caseName: "I", ending: "laudābam", meaning: "I was praising" },
  { group: "Laudō Imperfect", caseName: "you (sg.)", ending: "laudābās", meaning: "you were praising" },
  { group: "Laudō Imperfect", caseName: "he/she/it", ending: "laudābat", meaning: "he, she, or it was praising" },
  { group: "Laudō Imperfect", caseName: "we", ending: "laudābāmus", meaning: "we were praising" },
  { group: "Laudō Imperfect", caseName: "you (pl.)", ending: "laudābātis", meaning: "you all were praising" },
  { group: "Laudō Imperfect", caseName: "they", ending: "laudābant", meaning: "they were praising" }
];

const lessonNineFutureVerbItems = [
  { group: "Laudō Future", caseName: "I", ending: "laudābō", meaning: "I shall praise" },
  { group: "Laudō Future", caseName: "you (sg.)", ending: "laudābis", meaning: "you will praise" },
  { group: "Laudō Future", caseName: "he/she/it", ending: "laudābit", meaning: "he, she, or it will praise" },
  { group: "Laudō Future", caseName: "we", ending: "laudābimus", meaning: "we shall praise" },
  { group: "Laudō Future", caseName: "you (pl.)", ending: "laudābitis", meaning: "you all will praise" },
  { group: "Laudō Future", caseName: "they", ending: "laudābunt", meaning: "they will praise" }
];

const lessonNineVerbItems = [
  ...lessonNinePresentVerbItems,
  ...lessonNineImperfectVerbItems,
  ...lessonNineFutureVerbItems
];

const lessonNineVerbGrammarForms = {
  singular: lessonNineVerbItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonNineVerbItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: lessonNineVerbItems.map((item) => [item.ending, item.meaning])
};

const lessonTenPresentVerbItems = [
  { group: "Moneō Present", caseName: "I", ending: "moneō", meaning: "I warn / am warning / do warn" },
  { group: "Moneō Present", caseName: "you (sg.)", ending: "monēs", meaning: "you warn / are warning / do warn" },
  { group: "Moneō Present", caseName: "he/she/it", ending: "monet", meaning: "he, she, or it warns" },
  { group: "Moneō Present", caseName: "we", ending: "monēmus", meaning: "we warn / are warning / do warn" },
  { group: "Moneō Present", caseName: "you (pl.)", ending: "monētis", meaning: "you all warn / are warning / do warn" },
  { group: "Moneō Present", caseName: "they", ending: "monent", meaning: "they warn / are warning / do warn" }
];

const lessonTenImperfectVerbItems = [
  { group: "Moneō Imperfect", caseName: "I", ending: "monēbam", meaning: "I was warning" },
  { group: "Moneō Imperfect", caseName: "you (sg.)", ending: "monēbās", meaning: "you were warning" },
  { group: "Moneō Imperfect", caseName: "he/she/it", ending: "monēbat", meaning: "he, she, or it was warning" },
  { group: "Moneō Imperfect", caseName: "we", ending: "monēbāmus", meaning: "we were warning" },
  { group: "Moneō Imperfect", caseName: "you (pl.)", ending: "monēbātis", meaning: "you all were warning" },
  { group: "Moneō Imperfect", caseName: "they", ending: "monēbant", meaning: "they were warning" }
];

const lessonTenFutureVerbItems = [
  { group: "Moneō Future", caseName: "I", ending: "monēbō", meaning: "I shall warn" },
  { group: "Moneō Future", caseName: "you (sg.)", ending: "monēbis", meaning: "you will warn" },
  { group: "Moneō Future", caseName: "he/she/it", ending: "monēbit", meaning: "he, she, or it will warn" },
  { group: "Moneō Future", caseName: "we", ending: "monēbimus", meaning: "we shall warn" },
  { group: "Moneō Future", caseName: "you (pl.)", ending: "monēbitis", meaning: "you all will warn" },
  { group: "Moneō Future", caseName: "they", ending: "monēbunt", meaning: "they will warn" }
];

const lessonTenVerbItems = [
  ...lessonTenPresentVerbItems,
  ...lessonTenImperfectVerbItems,
  ...lessonTenFutureVerbItems
];

const lessonTenVerbGrammarForms = {
  singular: lessonTenVerbItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonTenVerbItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: lessonTenVerbItems.map((item) => [item.ending, item.meaning])
};

const lessonElevenFirstPersonPronounItems = [
  { group: "Ego Singular", caseName: "Nominative", ending: "ego", meaning: "I (subject)" },
  { group: "Ego Singular", caseName: "Genitive", ending: "meī", meaning: "of me" },
  { group: "Ego Singular", caseName: "Dative", ending: "mihi", meaning: "to/for me" },
  { group: "Ego Singular", caseName: "Accusative", ending: "mē", meaning: "me (direct object)" },
  { group: "Ego Singular", caseName: "Ablative", ending: "mē", meaning: "by/with/from me" },
  { group: "Nōs Plural", caseName: "Nominative", ending: "nōs", meaning: "we (subject)" },
  { group: "Nōs Plural", caseName: "Genitive", ending: "nostrī", meaning: "of us" },
  { group: "Nōs Plural", caseName: "Dative", ending: "nōbīs", meaning: "to/for us" },
  { group: "Nōs Plural", caseName: "Accusative", ending: "nōs", meaning: "us (direct object)" },
  { group: "Nōs Plural", caseName: "Ablative", ending: "nōbīs", meaning: "by/with/from us" }
];

const lessonElevenSecondPersonPronounItems = [
  { group: "Tū Singular", caseName: "Nominative", ending: "tū", meaning: "you (subject, one person)" },
  { group: "Tū Singular", caseName: "Genitive", ending: "tuī", meaning: "of you" },
  { group: "Tū Singular", caseName: "Dative", ending: "tibi", meaning: "to/for you" },
  { group: "Tū Singular", caseName: "Accusative", ending: "tē", meaning: "you (direct object)" },
  { group: "Tū Singular", caseName: "Ablative", ending: "tē", meaning: "by/with/from you" },
  { group: "Vōs Plural", caseName: "Nominative", ending: "vōs", meaning: "you all (subject)" },
  { group: "Vōs Plural", caseName: "Genitive", ending: "vestrī", meaning: "of you all" },
  { group: "Vōs Plural", caseName: "Dative", ending: "vōbīs", meaning: "to/for you all" },
  { group: "Vōs Plural", caseName: "Accusative", ending: "vōs", meaning: "you all (direct object)" },
  { group: "Vōs Plural", caseName: "Ablative", ending: "vōbīs", meaning: "by/with/from you all" }
];

const lessonElevenThirdPersonPronounItems = [
  { group: "Is Masculine Singular", caseName: "Nominative", ending: "is", meaning: "he/it (subject)" },
  { group: "Is Masculine Singular", caseName: "Genitive", ending: "eius", meaning: "of him/of it" },
  { group: "Is Masculine Singular", caseName: "Dative", ending: "eī", meaning: "to/for him or it" },
  { group: "Is Masculine Singular", caseName: "Accusative", ending: "eum", meaning: "him/it (direct object)" },
  { group: "Is Masculine Singular", caseName: "Ablative", ending: "eō", meaning: "by/with/from him or it" },
  { group: "Ea Feminine Singular", caseName: "Nominative", ending: "ea", meaning: "she/it (subject)" },
  { group: "Ea Feminine Singular", caseName: "Genitive", ending: "eius", meaning: "of her/of it" },
  { group: "Ea Feminine Singular", caseName: "Dative", ending: "eī", meaning: "to/for her or it" },
  { group: "Ea Feminine Singular", caseName: "Accusative", ending: "eam", meaning: "her/it (direct object)" },
  { group: "Ea Feminine Singular", caseName: "Ablative", ending: "eā", meaning: "by/with/from her or it" },
  { group: "Id Neuter Singular", caseName: "Nominative", ending: "id", meaning: "it (subject)" },
  { group: "Id Neuter Singular", caseName: "Genitive", ending: "eius", meaning: "of it" },
  { group: "Id Neuter Singular", caseName: "Dative", ending: "eī", meaning: "to/for it" },
  { group: "Id Neuter Singular", caseName: "Accusative", ending: "id", meaning: "it (direct object)" },
  { group: "Id Neuter Singular", caseName: "Ablative", ending: "eō", meaning: "by/with/from it" },
  { group: "Eī Masculine Plural", caseName: "Nominative", ending: "eī", meaning: "they/those (masc. subject)" },
  { group: "Eī Masculine Plural", caseName: "Genitive", ending: "eōrum", meaning: "of them/of those" },
  { group: "Eī Masculine Plural", caseName: "Dative", ending: "eīs", meaning: "to/for them" },
  { group: "Eī Masculine Plural", caseName: "Accusative", ending: "eōs", meaning: "them/those (masc. direct object)" },
  { group: "Eī Masculine Plural", caseName: "Ablative", ending: "eīs", meaning: "by/with/from them" },
  { group: "Eae Feminine Plural", caseName: "Nominative", ending: "eae", meaning: "they/those (fem. subject)" },
  { group: "Eae Feminine Plural", caseName: "Genitive", ending: "eārum", meaning: "of them/of those" },
  { group: "Eae Feminine Plural", caseName: "Dative", ending: "eīs", meaning: "to/for them" },
  { group: "Eae Feminine Plural", caseName: "Accusative", ending: "eās", meaning: "them/those (fem. direct object)" },
  { group: "Eae Feminine Plural", caseName: "Ablative", ending: "eīs", meaning: "by/with/from them" },
  { group: "Ea Neuter Plural", caseName: "Nominative", ending: "ea", meaning: "they/those things (subject)" },
  { group: "Ea Neuter Plural", caseName: "Genitive", ending: "eōrum", meaning: "of them/of those things" },
  { group: "Ea Neuter Plural", caseName: "Dative", ending: "eīs", meaning: "to/for them" },
  { group: "Ea Neuter Plural", caseName: "Accusative", ending: "ea", meaning: "them/those things (direct object)" },
  { group: "Ea Neuter Plural", caseName: "Ablative", ending: "eīs", meaning: "by/with/from them" }
];

const lessonElevenReflexivePronounItems = [
  { group: "Suī Reflexive", caseName: "Genitive", ending: "suī", meaning: "of himself/herself/itself/themselves" },
  { group: "Suī Reflexive", caseName: "Dative", ending: "sibi", meaning: "to/for himself/herself/itself/themselves" },
  { group: "Suī Reflexive", caseName: "Accusative", ending: "sē", meaning: "himself/herself/itself/themselves" },
  { group: "Suī Reflexive", caseName: "Ablative", ending: "sē", meaning: "by/with/from himself/herself/itself/themselves" }
];

const lessonElevenPronounItems = [
  ...lessonElevenFirstPersonPronounItems,
  ...lessonElevenSecondPersonPronounItems,
  ...lessonElevenThirdPersonPronounItems,
  ...lessonElevenReflexivePronounItems
];

const lessonElevenPronounGrammarForms = {
  singular: [
    ...lessonElevenFirstPersonPronounItems.slice(0, 5),
    ...lessonElevenSecondPersonPronounItems.slice(0, 5),
    ...lessonElevenThirdPersonPronounItems.slice(0, 15),
    ...lessonElevenReflexivePronounItems
  ].map((item) => [item.ending, item.meaning]),
  plural: [
    ...lessonElevenFirstPersonPronounItems.slice(5),
    ...lessonElevenSecondPersonPronounItems.slice(5),
    ...lessonElevenThirdPersonPronounItems.slice(15),
    ...lessonElevenReflexivePronounItems
  ].map((item) => [item.ending, item.meaning]),
  both: lessonElevenPronounItems.map((item) => [item.ending, item.meaning])
};

const lessonTwelvePresentVerbItems = [
  { group: "Mittō Present", caseName: "I", ending: "mittō", meaning: "I send / am sending / do send" },
  { group: "Mittō Present", caseName: "you (sg.)", ending: "mittis", meaning: "you send / are sending / do send" },
  { group: "Mittō Present", caseName: "he/she/it", ending: "mittit", meaning: "he, she, or it sends" },
  { group: "Mittō Present", caseName: "we", ending: "mittimus", meaning: "we send / are sending / do send" },
  { group: "Mittō Present", caseName: "you (pl.)", ending: "mittitis", meaning: "you all send / are sending / do send" },
  { group: "Mittō Present", caseName: "they", ending: "mittunt", meaning: "they send / are sending / do send" }
];

const lessonTwelveImperfectVerbItems = [
  { group: "Mittō Imperfect", caseName: "I", ending: "mittēbam", meaning: "I was sending" },
  { group: "Mittō Imperfect", caseName: "you (sg.)", ending: "mittēbās", meaning: "you were sending" },
  { group: "Mittō Imperfect", caseName: "he/she/it", ending: "mittēbat", meaning: "he, she, or it was sending" },
  { group: "Mittō Imperfect", caseName: "we", ending: "mittēbāmus", meaning: "we were sending" },
  { group: "Mittō Imperfect", caseName: "you (pl.)", ending: "mittēbātis", meaning: "you all were sending" },
  { group: "Mittō Imperfect", caseName: "they", ending: "mittēbant", meaning: "they were sending" }
];

const lessonTwelveFutureVerbItems = [
  { group: "Mittō Future", caseName: "I", ending: "mittam", meaning: "I shall send" },
  { group: "Mittō Future", caseName: "you (sg.)", ending: "mittēs", meaning: "you will send" },
  { group: "Mittō Future", caseName: "he/she/it", ending: "mittet", meaning: "he, she, or it will send" },
  { group: "Mittō Future", caseName: "we", ending: "mittēmus", meaning: "we shall send" },
  { group: "Mittō Future", caseName: "you (pl.)", ending: "mittētis", meaning: "you all will send" },
  { group: "Mittō Future", caseName: "they", ending: "mittent", meaning: "they will send" }
];

const lessonTwelveVerbItems = [
  ...lessonTwelvePresentVerbItems,
  ...lessonTwelveImperfectVerbItems,
  ...lessonTwelveFutureVerbItems
];

const lessonTwelveVerbGrammarForms = {
  singular: lessonTwelveVerbItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonTwelveVerbItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: lessonTwelveVerbItems.map((item) => [item.ending, item.meaning])
};

const lessonThirteenPresentVerbItems = [
  { group: "Audiō Present", caseName: "I", ending: "audiō", meaning: "I hear / am hearing / do hear" },
  { group: "Audiō Present", caseName: "you (sg.)", ending: "audīs", meaning: "you hear / are hearing / do hear" },
  { group: "Audiō Present", caseName: "he/she/it", ending: "audit", meaning: "he, she, or it hears" },
  { group: "Audiō Present", caseName: "we", ending: "audīmus", meaning: "we hear / are hearing / do hear" },
  { group: "Audiō Present", caseName: "you (pl.)", ending: "audītis", meaning: "you all hear / are hearing / do hear" },
  { group: "Audiō Present", caseName: "they", ending: "audiunt", meaning: "they hear / are hearing / do hear" }
];

const lessonThirteenImperfectVerbItems = [
  { group: "Audiō Imperfect", caseName: "I", ending: "audiēbam", meaning: "I was hearing" },
  { group: "Audiō Imperfect", caseName: "you (sg.)", ending: "audiēbās", meaning: "you were hearing" },
  { group: "Audiō Imperfect", caseName: "he/she/it", ending: "audiēbat", meaning: "he, she, or it was hearing" },
  { group: "Audiō Imperfect", caseName: "we", ending: "audiēbāmus", meaning: "we were hearing" },
  { group: "Audiō Imperfect", caseName: "you (pl.)", ending: "audiēbātis", meaning: "you all were hearing" },
  { group: "Audiō Imperfect", caseName: "they", ending: "audiēbant", meaning: "they were hearing" }
];

const lessonThirteenFutureVerbItems = [
  { group: "Audiō Future", caseName: "I", ending: "audiam", meaning: "I shall hear / will hear" },
  { group: "Audiō Future", caseName: "you (sg.)", ending: "audiēs", meaning: "you will hear" },
  { group: "Audiō Future", caseName: "he/she/it", ending: "audiet", meaning: "he, she, or it will hear" },
  { group: "Audiō Future", caseName: "we", ending: "audiēmus", meaning: "we shall hear / will hear" },
  { group: "Audiō Future", caseName: "you (pl.)", ending: "audiētis", meaning: "you all will hear" },
  { group: "Audiō Future", caseName: "they", ending: "audient", meaning: "they will hear" }
];

const lessonThirteenVerbItems = [
  ...lessonThirteenPresentVerbItems,
  ...lessonThirteenImperfectVerbItems,
  ...lessonThirteenFutureVerbItems
];

const lessonThirteenVerbGrammarForms = {
  singular: lessonThirteenVerbItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonThirteenVerbItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: lessonThirteenVerbItems.map((item) => [item.ending, item.meaning])
};

const lessonFourteenSumPresentItems = [
  { group: "Sum Present", caseName: "I", ending: "sum", meaning: "I am" },
  { group: "Sum Present", caseName: "you (sg.)", ending: "es", meaning: "you are" },
  { group: "Sum Present", caseName: "he/she/it", ending: "est", meaning: "he, she, or it is" },
  { group: "Sum Present", caseName: "we", ending: "sumus", meaning: "we are" },
  { group: "Sum Present", caseName: "you (pl.)", ending: "estis", meaning: "you all are" },
  { group: "Sum Present", caseName: "they", ending: "sunt", meaning: "they are" }
];

const lessonFourteenSumImperfectItems = [
  { group: "Sum Imperfect", caseName: "I", ending: "eram", meaning: "I was" },
  { group: "Sum Imperfect", caseName: "you (sg.)", ending: "erās", meaning: "you were" },
  { group: "Sum Imperfect", caseName: "he/she/it", ending: "erat", meaning: "he, she, or it was" },
  { group: "Sum Imperfect", caseName: "we", ending: "erāmus", meaning: "we were" },
  { group: "Sum Imperfect", caseName: "you (pl.)", ending: "erātis", meaning: "you all were" },
  { group: "Sum Imperfect", caseName: "they", ending: "erant", meaning: "they were" }
];

const lessonFourteenSumFutureItems = [
  { group: "Sum Future", caseName: "I", ending: "erō", meaning: "I shall be / will be" },
  { group: "Sum Future", caseName: "you (sg.)", ending: "eris", meaning: "you will be" },
  { group: "Sum Future", caseName: "he/she/it", ending: "erit", meaning: "he, she, or it will be" },
  { group: "Sum Future", caseName: "we", ending: "erimus", meaning: "we shall be / will be" },
  { group: "Sum Future", caseName: "you (pl.)", ending: "eritis", meaning: "you all will be" },
  { group: "Sum Future", caseName: "they", ending: "erunt", meaning: "they will be" }
];

const lessonFourteenAbsumItems = [
  { group: "Absum Present", caseName: "I", ending: "absum", meaning: "I am away / distant" },
  { group: "Absum Present", caseName: "you (sg.)", ending: "abes", meaning: "you are away / distant" },
  { group: "Absum Present", caseName: "he/she/it", ending: "abest", meaning: "he, she, or it is away / distant" },
  { group: "Absum Present", caseName: "we", ending: "absumus", meaning: "we are away / distant" },
  { group: "Absum Present", caseName: "you (pl.)", ending: "abestis", meaning: "you all are away / distant" },
  { group: "Absum Present", caseName: "they", ending: "absunt", meaning: "they are away / distant" },
  { group: "Absum Imperfect", caseName: "I", ending: "aberam", meaning: "I was away / distant" },
  { group: "Absum Imperfect", caseName: "you (sg.)", ending: "aberās", meaning: "you were away / distant" },
  { group: "Absum Imperfect", caseName: "he/she/it", ending: "aberat", meaning: "he, she, or it was away / distant" },
  { group: "Absum Imperfect", caseName: "we", ending: "aberāmus", meaning: "we were away / distant" },
  { group: "Absum Imperfect", caseName: "you (pl.)", ending: "aberātis", meaning: "you all were away / distant" },
  { group: "Absum Imperfect", caseName: "they", ending: "aberant", meaning: "they were away / distant" },
  { group: "Absum Future", caseName: "I", ending: "aberō", meaning: "I shall be away / distant" },
  { group: "Absum Future", caseName: "you (sg.)", ending: "aberis", meaning: "you will be away / distant" },
  { group: "Absum Future", caseName: "he/she/it", ending: "aberit", meaning: "he, she, or it will be away / distant" },
  { group: "Absum Future", caseName: "we", ending: "aberimus", meaning: "we shall be away / distant" },
  { group: "Absum Future", caseName: "you (pl.)", ending: "aberitis", meaning: "you all will be away / distant" },
  { group: "Absum Future", caseName: "they", ending: "aberunt", meaning: "they will be away / distant" }
];

const lessonFourteenVerbItems = [
  ...lessonFourteenSumPresentItems,
  ...lessonFourteenSumImperfectItems,
  ...lessonFourteenSumFutureItems,
  ...lessonFourteenAbsumItems
];

const lessonFourteenVerbGrammarForms = {
  singular: lessonFourteenVerbItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonFourteenVerbItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: lessonFourteenVerbItems.map((item) => [item.ending, item.meaning])
};

const lessonFifteenPerfectVerbItems = [
  { group: "Laudō Perfect", caseName: "I", ending: "laudāvī", meaning: "I praised / did praise / have praised" },
  { group: "Laudō Perfect", caseName: "you (sg.)", ending: "laudāvistī", meaning: "you praised / have praised" },
  { group: "Laudō Perfect", caseName: "he/she/it", ending: "laudāvit", meaning: "he, she, or it praised" },
  { group: "Laudō Perfect", caseName: "we", ending: "laudāvimus", meaning: "we praised / have praised" },
  { group: "Laudō Perfect", caseName: "you (pl.)", ending: "laudāvistis", meaning: "you all praised / have praised" },
  { group: "Laudō Perfect", caseName: "they", ending: "laudāvērunt", meaning: "they praised / have praised" }
];

const lessonFifteenPluperfectVerbItems = [
  { group: "Laudō Pluperfect", caseName: "I", ending: "laudāveram", meaning: "I had praised" },
  { group: "Laudō Pluperfect", caseName: "you (sg.)", ending: "laudāverās", meaning: "you had praised" },
  { group: "Laudō Pluperfect", caseName: "he/she/it", ending: "laudāverat", meaning: "he, she, or it had praised" },
  { group: "Laudō Pluperfect", caseName: "we", ending: "laudāverāmus", meaning: "we had praised" },
  { group: "Laudō Pluperfect", caseName: "you (pl.)", ending: "laudāverātis", meaning: "you all had praised" },
  { group: "Laudō Pluperfect", caseName: "they", ending: "laudāverant", meaning: "they had praised" }
];

const lessonFifteenFuturePerfectVerbItems = [
  { group: "Laudō Future Perfect", caseName: "I", ending: "laudāverō", meaning: "I shall have praised / will have praised" },
  { group: "Laudō Future Perfect", caseName: "you (sg.)", ending: "laudāveris", meaning: "you will have praised" },
  { group: "Laudō Future Perfect", caseName: "he/she/it", ending: "laudāverit", meaning: "he, she, or it will have praised" },
  { group: "Laudō Future Perfect", caseName: "we", ending: "laudāverimus", meaning: "we shall have praised / will have praised" },
  { group: "Laudō Future Perfect", caseName: "you (pl.)", ending: "laudāveritis", meaning: "you all will have praised" },
  { group: "Laudō Future Perfect", caseName: "they", ending: "laudāverint", meaning: "they will have praised" }
];

const lessonFifteenVerbItems = [
  ...lessonFifteenPerfectVerbItems,
  ...lessonFifteenPluperfectVerbItems,
  ...lessonFifteenFuturePerfectVerbItems
];

const lessonFifteenVerbGrammarForms = {
  singular: lessonFifteenVerbItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonFifteenVerbItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: lessonFifteenVerbItems.map((item) => [item.ending, item.meaning])
};

function makeSecondDeclensionMasculineNounItems(label, singularForms, pluralForms, singularMeaning, pluralMeaning) {
  const cases = ["Nominative", "Genitive", "Dative", "Accusative", "Ablative"];
  const singularMeanings = [
    `${singularMeaning} (subject)`,
    `of ${singularMeaning}`,
    `to/for ${singularMeaning}`,
    `${singularMeaning} (direct object)`,
    `by/with/from ${singularMeaning}`
  ];
  const pluralMeanings = [
    `${pluralMeaning} (subject)`,
    `of ${pluralMeaning}`,
    `to/for ${pluralMeaning}`,
    `${pluralMeaning} (direct object)`,
    `by/with/from ${pluralMeaning}`
  ];
  return [
    ...cases.map((caseName, index) => ({
      group: `${label} Singular`,
      caseName,
      ending: singularForms[index],
      meaning: singularMeanings[index]
    })),
    ...cases.map((caseName, index) => ({
      group: `${label} Plural`,
      caseName,
      ending: pluralForms[index],
      meaning: pluralMeanings[index]
    }))
  ];
}

function makeLessonSixteenAdjectiveItems(label, forms, meaning) {
  const cases = ["Nominative", "Genitive", "Dative", "Accusative", "Ablative"];
  const groupLabels = [
    ["Masculine Singular", "masc. singular"],
    ["Feminine Singular", "fem. singular"],
    ["Neuter Singular", "neut. singular"],
    ["Masculine Plural", "masc. plural"],
    ["Feminine Plural", "fem. plural"],
    ["Neuter Plural", "neut. plural"]
  ];
  return groupLabels.flatMap(([groupLabel, meaningLabel], groupIndex) =>
    cases.map((caseName, caseIndex) => ({
      group: `${label} ${groupLabel}`,
      caseName,
      ending: forms[groupIndex][caseIndex],
      meaning: `${meaning} ${meaningLabel} ${caseName.toLowerCase()}`
    }))
  );
}

const lessonSixteenPuerItems = makeSecondDeclensionMasculineNounItems(
  "Puer",
  ["puer", "puerī", "puerō", "puerum", "puerō"],
  ["puerī", "puerōrum", "puerīs", "puerōs", "puerīs"],
  "the boy",
  "the boys"
);

const lessonSixteenAgerItems = makeSecondDeclensionMasculineNounItems(
  "Ager",
  ["ager", "agrī", "agrō", "agrum", "agrō"],
  ["agrī", "agrōrum", "agrīs", "agrōs", "agrīs"],
  "the field",
  "the fields"
);

const lessonSixteenVirItems = makeSecondDeclensionMasculineNounItems(
  "Vir",
  ["vir", "virī", "virō", "virum", "virō"],
  ["virī", "virōrum", "virīs", "virōs", "virīs"],
  "the man",
  "the men"
);

const lessonSixteenNounItems = [
  ...lessonSixteenPuerItems,
  ...lessonSixteenAgerItems,
  ...lessonSixteenVirItems
];

const lessonSixteenMiserItems = makeLessonSixteenAdjectiveItems("Miser", [
  ["miser", "miserī", "miserō", "miserum", "miserō"],
  ["misera", "miserae", "miserae", "miseram", "miserā"],
  ["miserum", "miserī", "miserō", "miserum", "miserō"],
  ["miserī", "miserōrum", "miserīs", "miserōs", "miserīs"],
  ["miserae", "miserārum", "miserīs", "miserās", "miserīs"],
  ["misera", "miserōrum", "miserīs", "misera", "miserīs"]
], "wretched");

const lessonSixteenIntegerItems = makeLessonSixteenAdjectiveItems("Integer", [
  ["integer", "integrī", "integrō", "integrum", "integrō"],
  ["integra", "integrae", "integrae", "integram", "integrā"],
  ["integrum", "integrī", "integrō", "integrum", "integrō"],
  ["integrī", "integrōrum", "integrīs", "integrōs", "integrīs"],
  ["integrae", "integrārum", "integrīs", "integrās", "integrīs"],
  ["integra", "integrōrum", "integrīs", "integra", "integrīs"]
], "fresh / uninjured / whole");

const lessonSixteenAdjectiveItems = [
  ...lessonSixteenMiserItems,
  ...lessonSixteenIntegerItems
];

const lessonSixteenPossessiveItems = [
  { group: "Meus Possessive", caseName: "Masculine", ending: "meus", meaning: "my / mine (masc.)" },
  { group: "Meus Possessive", caseName: "Feminine", ending: "mea", meaning: "my / mine (fem.)" },
  { group: "Meus Possessive", caseName: "Neuter", ending: "meum", meaning: "my / mine (neut.)" },
  { group: "Tuus Possessive", caseName: "Masculine", ending: "tuus", meaning: "your / yours, one person (masc.)" },
  { group: "Tuus Possessive", caseName: "Feminine", ending: "tua", meaning: "your / yours, one person (fem.)" },
  { group: "Tuus Possessive", caseName: "Neuter", ending: "tuum", meaning: "your / yours, one person (neut.)" },
  { group: "Noster Possessive", caseName: "Masculine", ending: "noster", meaning: "our / ours (masc.)" },
  { group: "Noster Possessive", caseName: "Feminine", ending: "nostra", meaning: "our / ours (fem.)" },
  { group: "Noster Possessive", caseName: "Neuter", ending: "nostrum", meaning: "our / ours (neut.)" },
  { group: "Vester Possessive", caseName: "Masculine", ending: "vester", meaning: "your / yours, more than one person (masc.)" },
  { group: "Vester Possessive", caseName: "Feminine", ending: "vestra", meaning: "your / yours, more than one person (fem.)" },
  { group: "Vester Possessive", caseName: "Neuter", ending: "vestrum", meaning: "your / yours, more than one person (neut.)" }
];

const lessonSixteenFormItems = [
  ...lessonSixteenNounItems,
  ...lessonSixteenAdjectiveItems,
  ...lessonSixteenPossessiveItems
];

const lessonSixteenGrammarForms = {
  singular: [
    ...lessonSixteenNounItems.filter((item) => item.group.includes("Singular")),
    ...lessonSixteenAdjectiveItems.filter((item) => item.group.includes("Singular")),
    ...lessonSixteenPossessiveItems
  ].map((item) => [item.ending, item.meaning]),
  plural: [
    ...lessonSixteenNounItems.filter((item) => item.group.includes("Plural")),
    ...lessonSixteenAdjectiveItems.filter((item) => item.group.includes("Plural"))
  ].map((item) => [item.ending, item.meaning]),
  both: lessonSixteenFormItems.map((item) => [item.ending, item.meaning])
};

const lessonSeventeenPassiveSignItems = [
  { group: "Passive Personal Signs", caseName: "1st singular from -ō", ending: "-or", meaning: "I am being..." },
  { group: "Passive Personal Signs", caseName: "1st singular from -m", ending: "-r", meaning: "I was or will be..." },
  { group: "Passive Personal Signs", caseName: "2nd singular", ending: "-ris", meaning: "you are/were/will be..." },
  { group: "Passive Personal Signs", caseName: "3rd singular", ending: "-tur", meaning: "he/she/it is/was/will be..." },
  { group: "Passive Personal Signs", caseName: "1st plural", ending: "-mur", meaning: "we are/were/will be..." },
  { group: "Passive Personal Signs", caseName: "2nd plural", ending: "-minī", meaning: "you all are/were/will be..." },
  { group: "Passive Personal Signs", caseName: "3rd plural", ending: "-ntur", meaning: "they are/were/will be..." }
];

const lessonSeventeenPresentPassiveItems = [
  { group: "Laudō Present Passive", caseName: "I", ending: "laudor", meaning: "I am praised / being praised" },
  { group: "Laudō Present Passive", caseName: "you (sg.)", ending: "laudāris", meaning: "you are praised / being praised" },
  { group: "Laudō Present Passive", caseName: "he/she/it", ending: "laudātur", meaning: "he, she, or it is praised" },
  { group: "Laudō Present Passive", caseName: "we", ending: "laudāmur", meaning: "we are praised / being praised" },
  { group: "Laudō Present Passive", caseName: "you (pl.)", ending: "laudāminī", meaning: "you all are praised / being praised" },
  { group: "Laudō Present Passive", caseName: "they", ending: "laudantur", meaning: "they are praised / being praised" }
];

const lessonSeventeenImperfectPassiveItems = [
  { group: "Laudō Imperfect Passive", caseName: "I", ending: "laudābar", meaning: "I was being praised" },
  { group: "Laudō Imperfect Passive", caseName: "you (sg.)", ending: "laudābāris", meaning: "you were being praised" },
  { group: "Laudō Imperfect Passive", caseName: "he/she/it", ending: "laudābātur", meaning: "he, she, or it was being praised" },
  { group: "Laudō Imperfect Passive", caseName: "we", ending: "laudābāmur", meaning: "we were being praised" },
  { group: "Laudō Imperfect Passive", caseName: "you (pl.)", ending: "laudābāminī", meaning: "you all were being praised" },
  { group: "Laudō Imperfect Passive", caseName: "they", ending: "laudābantur", meaning: "they were being praised" }
];

const lessonSeventeenFuturePassiveItems = [
  { group: "Laudō Future Passive", caseName: "I", ending: "laudābor", meaning: "I shall be praised / will be praised" },
  { group: "Laudō Future Passive", caseName: "you (sg.)", ending: "laudāberis", meaning: "you will be praised" },
  { group: "Laudō Future Passive", caseName: "he/she/it", ending: "laudābitur", meaning: "he, she, or it will be praised" },
  { group: "Laudō Future Passive", caseName: "we", ending: "laudābimur", meaning: "we shall be praised / will be praised" },
  { group: "Laudō Future Passive", caseName: "you (pl.)", ending: "laudābiminī", meaning: "you all will be praised" },
  { group: "Laudō Future Passive", caseName: "they", ending: "laudābuntur", meaning: "they will be praised" }
];

const lessonSeventeenFormItems = [
  ...lessonSeventeenPassiveSignItems,
  ...lessonSeventeenPresentPassiveItems,
  ...lessonSeventeenImperfectPassiveItems,
  ...lessonSeventeenFuturePassiveItems
];

const lessonSeventeenGrammarForms = {
  singular: [
    ...lessonSeventeenPassiveSignItems.slice(0, 4),
    ...lessonSeventeenFormItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName))
  ].map((item) => [item.ending, item.meaning]),
  plural: [
    ...lessonSeventeenPassiveSignItems.slice(4),
    ...lessonSeventeenFormItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName))
  ].map((item) => [item.ending, item.meaning]),
  both: lessonSeventeenFormItems.map((item) => [item.ending, item.meaning])
};

const lessonEighteenPresentPassiveItems = [
  { group: "Moneō Present Passive", caseName: "I", ending: "moneor", meaning: "I am warned / being warned" },
  { group: "Moneō Present Passive", caseName: "you (sg.)", ending: "monēris", meaning: "you are warned / being warned" },
  { group: "Moneō Present Passive", caseName: "he/she/it", ending: "monētur", meaning: "he, she, or it is warned" },
  { group: "Moneō Present Passive", caseName: "we", ending: "monēmur", meaning: "we are warned / being warned" },
  { group: "Moneō Present Passive", caseName: "you (pl.)", ending: "monēminī", meaning: "you all are warned / being warned" },
  { group: "Moneō Present Passive", caseName: "they", ending: "monentur", meaning: "they are warned / being warned" }
];

const lessonEighteenImperfectPassiveItems = [
  { group: "Moneō Imperfect Passive", caseName: "I", ending: "monēbar", meaning: "I was being warned" },
  { group: "Moneō Imperfect Passive", caseName: "you (sg.)", ending: "monēbāris", meaning: "you were being warned" },
  { group: "Moneō Imperfect Passive", caseName: "he/she/it", ending: "monēbātur", meaning: "he, she, or it was being warned" },
  { group: "Moneō Imperfect Passive", caseName: "we", ending: "monēbāmur", meaning: "we were being warned" },
  { group: "Moneō Imperfect Passive", caseName: "you (pl.)", ending: "monēbāminī", meaning: "you all were being warned" },
  { group: "Moneō Imperfect Passive", caseName: "they", ending: "monēbantur", meaning: "they were being warned" }
];

const lessonEighteenFuturePassiveItems = [
  { group: "Moneō Future Passive", caseName: "I", ending: "monēbor", meaning: "I shall be warned / will be warned" },
  { group: "Moneō Future Passive", caseName: "you (sg.)", ending: "monēberis", meaning: "you will be warned" },
  { group: "Moneō Future Passive", caseName: "he/she/it", ending: "monēbitur", meaning: "he, she, or it will be warned" },
  { group: "Moneō Future Passive", caseName: "we", ending: "monēbimur", meaning: "we shall be warned / will be warned" },
  { group: "Moneō Future Passive", caseName: "you (pl.)", ending: "monēbiminī", meaning: "you all will be warned" },
  { group: "Moneō Future Passive", caseName: "they", ending: "monēbuntur", meaning: "they will be warned" }
];

const lessonEighteenFormItems = [
  ...lessonEighteenPresentPassiveItems,
  ...lessonEighteenImperfectPassiveItems,
  ...lessonEighteenFuturePassiveItems
];

const lessonEighteenGrammarForms = {
  singular: lessonEighteenFormItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonEighteenFormItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: lessonEighteenFormItems.map((item) => [item.ending, item.meaning])
};

const lessonNineteenPresentPassiveItems = [
  { group: "Mittō Present Passive", caseName: "I", ending: "mittor", meaning: "I am sent / being sent" },
  { group: "Mittō Present Passive", caseName: "you (sg.)", ending: "mitteris", meaning: "you are sent / being sent" },
  { group: "Mittō Present Passive", caseName: "he/she/it", ending: "mittitur", meaning: "he, she, or it is sent" },
  { group: "Mittō Present Passive", caseName: "we", ending: "mittimur", meaning: "we are sent / being sent" },
  { group: "Mittō Present Passive", caseName: "you (pl.)", ending: "mittiminī", meaning: "you all are sent / being sent" },
  { group: "Mittō Present Passive", caseName: "they", ending: "mittuntur", meaning: "they are sent / being sent" }
];

const lessonNineteenImperfectPassiveItems = [
  { group: "Mittō Imperfect Passive", caseName: "I", ending: "mittēbar", meaning: "I was being sent" },
  { group: "Mittō Imperfect Passive", caseName: "you (sg.)", ending: "mittēbāris", meaning: "you were being sent" },
  { group: "Mittō Imperfect Passive", caseName: "he/she/it", ending: "mittēbātur", meaning: "he, she, or it was being sent" },
  { group: "Mittō Imperfect Passive", caseName: "we", ending: "mittēbāmur", meaning: "we were being sent" },
  { group: "Mittō Imperfect Passive", caseName: "you (pl.)", ending: "mittēbāminī", meaning: "you all were being sent" },
  { group: "Mittō Imperfect Passive", caseName: "they", ending: "mittēbantur", meaning: "they were being sent" }
];

const lessonNineteenFuturePassiveItems = [
  { group: "Mittō Future Passive", caseName: "I", ending: "mittar", meaning: "I shall be sent / will be sent" },
  { group: "Mittō Future Passive", caseName: "you (sg.)", ending: "mittēris", meaning: "you will be sent" },
  { group: "Mittō Future Passive", caseName: "he/she/it", ending: "mittētur", meaning: "he, she, or it will be sent" },
  { group: "Mittō Future Passive", caseName: "we", ending: "mittēmur", meaning: "we shall be sent / will be sent" },
  { group: "Mittō Future Passive", caseName: "you (pl.)", ending: "mittēminī", meaning: "you all will be sent" },
  { group: "Mittō Future Passive", caseName: "they", ending: "mittentur", meaning: "they will be sent" }
];

const lessonNineteenFormItems = [
  ...lessonNineteenPresentPassiveItems,
  ...lessonNineteenImperfectPassiveItems,
  ...lessonNineteenFuturePassiveItems
];

const lessonNineteenGrammarForms = {
  singular: lessonNineteenFormItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonNineteenFormItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: lessonNineteenFormItems.map((item) => [item.ending, item.meaning])
};

const lessonTwentyPresentPassiveItems = [
  { group: "Audiō Present Passive", caseName: "I", ending: "audior", meaning: "I am heard / being heard" },
  { group: "Audiō Present Passive", caseName: "you (sg.)", ending: "audīris", meaning: "you are heard / being heard" },
  { group: "Audiō Present Passive", caseName: "he/she/it", ending: "audītur", meaning: "he, she, or it is heard" },
  { group: "Audiō Present Passive", caseName: "we", ending: "audīmur", meaning: "we are heard / being heard" },
  { group: "Audiō Present Passive", caseName: "you (pl.)", ending: "audīminī", meaning: "you all are heard / being heard" },
  { group: "Audiō Present Passive", caseName: "they", ending: "audiuntur", meaning: "they are heard / being heard" }
];

const lessonTwentyImperfectPassiveItems = [
  { group: "Audiō Imperfect Passive", caseName: "I", ending: "audiēbar", meaning: "I was being heard" },
  { group: "Audiō Imperfect Passive", caseName: "you (sg.)", ending: "audiēbāris", meaning: "you were being heard" },
  { group: "Audiō Imperfect Passive", caseName: "he/she/it", ending: "audiēbātur", meaning: "he, she, or it was being heard" },
  { group: "Audiō Imperfect Passive", caseName: "we", ending: "audiēbāmur", meaning: "we were being heard" },
  { group: "Audiō Imperfect Passive", caseName: "you (pl.)", ending: "audiēbāminī", meaning: "you all were being heard" },
  { group: "Audiō Imperfect Passive", caseName: "they", ending: "audiēbantur", meaning: "they were being heard" }
];

const lessonTwentyFuturePassiveItems = [
  { group: "Audiō Future Passive", caseName: "I", ending: "audiar", meaning: "I shall be heard / will be heard" },
  { group: "Audiō Future Passive", caseName: "you (sg.)", ending: "audiēris", meaning: "you will be heard" },
  { group: "Audiō Future Passive", caseName: "he/she/it", ending: "audiētur", meaning: "he, she, or it will be heard" },
  { group: "Audiō Future Passive", caseName: "we", ending: "audiēmur", meaning: "we shall be heard / will be heard" },
  { group: "Audiō Future Passive", caseName: "you (pl.)", ending: "audiēminī", meaning: "you all will be heard" },
  { group: "Audiō Future Passive", caseName: "they", ending: "audientur", meaning: "they will be heard" }
];

const lessonTwentyFormItems = [
  ...lessonTwentyPresentPassiveItems,
  ...lessonTwentyImperfectPassiveItems,
  ...lessonTwentyFuturePassiveItems
];

const lessonTwentyGrammarForms = {
  singular: lessonTwentyFormItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonTwentyFormItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: lessonTwentyFormItems.map((item) => [item.ending, item.meaning])
};

const lessonTwentyOnePerfectPassiveItems = [
  { group: "Laudō Perfect Passive", caseName: "I", ending: "laudātus sum", meaning: "I was praised / have been praised" },
  { group: "Laudō Perfect Passive", caseName: "you (sg.)", ending: "laudātus es", meaning: "you were praised / have been praised" },
  { group: "Laudō Perfect Passive", caseName: "he", ending: "laudātus est", meaning: "he was praised / has been praised" },
  { group: "Laudō Perfect Passive", caseName: "we", ending: "laudātī sumus", meaning: "we were praised / have been praised" },
  { group: "Laudō Perfect Passive", caseName: "you (pl.)", ending: "laudātī estis", meaning: "you all were praised / have been praised" },
  { group: "Laudō Perfect Passive", caseName: "they", ending: "laudātī sunt", meaning: "they were praised / have been praised" }
];

const lessonTwentyOneAgreementItems = [
  { group: "Perfect Passive Agreement", caseName: "fem. singular", ending: "laudāta est", meaning: "she was praised / has been praised" },
  { group: "Perfect Passive Agreement", caseName: "neut. singular", ending: "laudātum est", meaning: "it was praised / has been praised" },
  { group: "Perfect Passive Agreement", caseName: "masc. plural", ending: "laudātī sunt", meaning: "they masculine were praised" },
  { group: "Perfect Passive Agreement", caseName: "fem. plural", ending: "laudātae sunt", meaning: "they feminine were praised" },
  { group: "Perfect Passive Agreement", caseName: "neut. plural", ending: "laudāta sunt", meaning: "they neuter were praised" }
];

const lessonTwentyOnePluperfectPassiveItems = [
  { group: "Laudō Pluperfect Passive", caseName: "I", ending: "laudātus eram", meaning: "I had been praised" },
  { group: "Laudō Pluperfect Passive", caseName: "you (sg.)", ending: "laudātus erās", meaning: "you had been praised" },
  { group: "Laudō Pluperfect Passive", caseName: "he", ending: "laudātus erat", meaning: "he had been praised" },
  { group: "Laudō Pluperfect Passive", caseName: "we", ending: "laudātī erāmus", meaning: "we had been praised" },
  { group: "Laudō Pluperfect Passive", caseName: "you (pl.)", ending: "laudātī erātis", meaning: "you all had been praised" },
  { group: "Laudō Pluperfect Passive", caseName: "they", ending: "laudātī erant", meaning: "they had been praised" }
];

const lessonTwentyOneFuturePerfectPassiveItems = [
  { group: "Laudō Future Perfect Passive", caseName: "I", ending: "laudātus erō", meaning: "I shall have been praised / will have been praised" },
  { group: "Laudō Future Perfect Passive", caseName: "you (sg.)", ending: "laudātus eris", meaning: "you will have been praised" },
  { group: "Laudō Future Perfect Passive", caseName: "he", ending: "laudātus erit", meaning: "he will have been praised" },
  { group: "Laudō Future Perfect Passive", caseName: "we", ending: "laudātī erimus", meaning: "we shall have been praised / will have been praised" },
  { group: "Laudō Future Perfect Passive", caseName: "you (pl.)", ending: "laudātī eritis", meaning: "you all will have been praised" },
  { group: "Laudō Future Perfect Passive", caseName: "they", ending: "laudātī erunt", meaning: "they will have been praised" }
];

const lessonTwentyOneFormItems = [
  ...lessonTwentyOnePerfectPassiveItems,
  ...lessonTwentyOneAgreementItems,
  ...lessonTwentyOnePluperfectPassiveItems,
  ...lessonTwentyOneFuturePerfectPassiveItems
];

const lessonTwentyOneGrammarForms = {
  singular: [
    ...lessonTwentyOnePerfectPassiveItems.filter((item) => ["I", "you (sg.)", "he"].includes(item.caseName)),
    ...lessonTwentyOneAgreementItems.filter((item) => item.caseName.includes("singular")),
    ...lessonTwentyOnePluperfectPassiveItems.filter((item) => ["I", "you (sg.)", "he"].includes(item.caseName)),
    ...lessonTwentyOneFuturePerfectPassiveItems.filter((item) => ["I", "you (sg.)", "he"].includes(item.caseName))
  ].map((item) => [item.ending, item.meaning]),
  plural: [
    ...lessonTwentyOnePerfectPassiveItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)),
    ...lessonTwentyOneAgreementItems.filter((item) => item.caseName.includes("plural")),
    ...lessonTwentyOnePluperfectPassiveItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)),
    ...lessonTwentyOneFuturePerfectPassiveItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName))
  ].map((item) => [item.ending, item.meaning]),
  both: lessonTwentyOneFormItems.map((item) => [item.ending, item.meaning])
};

const lessonTwentyTwoLaudoSubjunctiveItems = [
  { group: "Laudō Present Subjunctive", caseName: "I", ending: "laudem", meaning: "I may praise / that I praise" },
  { group: "Laudō Present Subjunctive", caseName: "you (sg.)", ending: "laudēs", meaning: "you may praise / that you praise" },
  { group: "Laudō Present Subjunctive", caseName: "he/she/it", ending: "laudet", meaning: "he, she, or it may praise" },
  { group: "Laudō Present Subjunctive", caseName: "we", ending: "laudēmus", meaning: "we may praise / let us praise" },
  { group: "Laudō Present Subjunctive", caseName: "you (pl.)", ending: "laudētis", meaning: "you all may praise" },
  { group: "Laudō Present Subjunctive", caseName: "they", ending: "laudent", meaning: "they may praise / that they praise" }
];

const lessonTwentyTwoMoneoSubjunctiveItems = [
  { group: "Moneō Present Subjunctive", caseName: "I", ending: "moneam", meaning: "I may warn / that I warn" },
  { group: "Moneō Present Subjunctive", caseName: "you (sg.)", ending: "moneās", meaning: "you may warn / that you warn" },
  { group: "Moneō Present Subjunctive", caseName: "he/she/it", ending: "moneat", meaning: "he, she, or it may warn" },
  { group: "Moneō Present Subjunctive", caseName: "we", ending: "moneāmus", meaning: "we may warn / that we warn" },
  { group: "Moneō Present Subjunctive", caseName: "you (pl.)", ending: "moneātis", meaning: "you all may warn" },
  { group: "Moneō Present Subjunctive", caseName: "they", ending: "moneant", meaning: "they may warn / that they warn" }
];

const lessonTwentyTwoMittoSubjunctiveItems = [
  { group: "Mittō Present Subjunctive", caseName: "I", ending: "mittam", meaning: "I may send / that I send" },
  { group: "Mittō Present Subjunctive", caseName: "you (sg.)", ending: "mittās", meaning: "you may send / that you send" },
  { group: "Mittō Present Subjunctive", caseName: "he/she/it", ending: "mittat", meaning: "he, she, or it may send" },
  { group: "Mittō Present Subjunctive", caseName: "we", ending: "mittāmus", meaning: "we may send / that we send" },
  { group: "Mittō Present Subjunctive", caseName: "you (pl.)", ending: "mittātis", meaning: "you all may send" },
  { group: "Mittō Present Subjunctive", caseName: "they", ending: "mittant", meaning: "they may send / that they send" }
];

const lessonTwentyTwoAudioSubjunctiveItems = [
  { group: "Audiō Present Subjunctive", caseName: "I", ending: "audiam", meaning: "I may hear / that I hear" },
  { group: "Audiō Present Subjunctive", caseName: "you (sg.)", ending: "audiās", meaning: "you may hear / that you hear" },
  { group: "Audiō Present Subjunctive", caseName: "he/she/it", ending: "audiat", meaning: "he, she, or it may hear" },
  { group: "Audiō Present Subjunctive", caseName: "we", ending: "audiāmus", meaning: "we may hear / that we hear" },
  { group: "Audiō Present Subjunctive", caseName: "you (pl.)", ending: "audiātis", meaning: "you all may hear" },
  { group: "Audiō Present Subjunctive", caseName: "they", ending: "audiant", meaning: "they may hear / that they hear" }
];

const lessonTwentyTwoSumSubjunctiveItems = [
  { group: "Sum Present Subjunctive", caseName: "I", ending: "sim", meaning: "I may be / that I be" },
  { group: "Sum Present Subjunctive", caseName: "you (sg.)", ending: "sīs", meaning: "you may be / that you be" },
  { group: "Sum Present Subjunctive", caseName: "he/she/it", ending: "sit", meaning: "he, she, or it may be" },
  { group: "Sum Present Subjunctive", caseName: "we", ending: "sīmus", meaning: "we may be / that we be" },
  { group: "Sum Present Subjunctive", caseName: "you (pl.)", ending: "sītis", meaning: "you all may be" },
  { group: "Sum Present Subjunctive", caseName: "they", ending: "sint", meaning: "they may be / that they be" }
];

const lessonTwentyTwoPurposeClauseItems = [
  { group: "Purpose Clauses", caseName: "positive purpose", ending: "ut + present subjunctive", meaning: "so that / in order that, after a primary main verb" },
  { group: "Purpose Clauses", caseName: "negative purpose", ending: "nē + present subjunctive", meaning: "lest / in order that not, after a primary main verb" },
  { group: "Purpose Clauses", caseName: "primary main verb", ending: "present, future, or future perfect", meaning: "primary tense in the main clause" }
];

const lessonTwentyTwoFormItems = [
  ...lessonTwentyTwoLaudoSubjunctiveItems,
  ...lessonTwentyTwoMoneoSubjunctiveItems,
  ...lessonTwentyTwoMittoSubjunctiveItems,
  ...lessonTwentyTwoAudioSubjunctiveItems,
  ...lessonTwentyTwoSumSubjunctiveItems
];

const lessonTwentyTwoGrammarForms = {
  singular: lessonTwentyTwoFormItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonTwentyTwoFormItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: [...lessonTwentyTwoFormItems, ...lessonTwentyTwoPurposeClauseItems].map((item) => [item.ending, item.meaning])
};

const lessonTwentyThreeLaudoImperfectSubjunctiveItems = [
  { group: "Laudō Imperfect Subjunctive", caseName: "I", ending: "laudārem", meaning: "I might praise / that I might praise" },
  { group: "Laudō Imperfect Subjunctive", caseName: "you (sg.)", ending: "laudārēs", meaning: "you might praise / that you might praise" },
  { group: "Laudō Imperfect Subjunctive", caseName: "he/she/it", ending: "laudāret", meaning: "he, she, or it might praise" },
  { group: "Laudō Imperfect Subjunctive", caseName: "we", ending: "laudārēmus", meaning: "we might praise / that we might praise" },
  { group: "Laudō Imperfect Subjunctive", caseName: "you (pl.)", ending: "laudārētis", meaning: "you all might praise" },
  { group: "Laudō Imperfect Subjunctive", caseName: "they", ending: "laudārent", meaning: "they might praise / that they might praise" }
];

const lessonTwentyThreeMoneoImperfectSubjunctiveItems = [
  { group: "Moneō Imperfect Subjunctive", caseName: "I", ending: "monērem", meaning: "I might warn / that I might warn" },
  { group: "Moneō Imperfect Subjunctive", caseName: "you (sg.)", ending: "monērēs", meaning: "you might warn / that you might warn" },
  { group: "Moneō Imperfect Subjunctive", caseName: "he/she/it", ending: "monēret", meaning: "he, she, or it might warn" },
  { group: "Moneō Imperfect Subjunctive", caseName: "we", ending: "monērēmus", meaning: "we might warn / that we might warn" },
  { group: "Moneō Imperfect Subjunctive", caseName: "you (pl.)", ending: "monērētis", meaning: "you all might warn" },
  { group: "Moneō Imperfect Subjunctive", caseName: "they", ending: "monērent", meaning: "they might warn / that they might warn" }
];

const lessonTwentyThreeMittoImperfectSubjunctiveItems = [
  { group: "Mittō Imperfect Subjunctive", caseName: "I", ending: "mitterem", meaning: "I might send / that I might send" },
  { group: "Mittō Imperfect Subjunctive", caseName: "you (sg.)", ending: "mitterēs", meaning: "you might send / that you might send" },
  { group: "Mittō Imperfect Subjunctive", caseName: "he/she/it", ending: "mitteret", meaning: "he, she, or it might send" },
  { group: "Mittō Imperfect Subjunctive", caseName: "we", ending: "mitterēmus", meaning: "we might send / that we might send" },
  { group: "Mittō Imperfect Subjunctive", caseName: "you (pl.)", ending: "mitterētis", meaning: "you all might send" },
  { group: "Mittō Imperfect Subjunctive", caseName: "they", ending: "mitterent", meaning: "they might send / that they might send" }
];

const lessonTwentyThreeAudioImperfectSubjunctiveItems = [
  { group: "Audiō Imperfect Subjunctive", caseName: "I", ending: "audīrem", meaning: "I might hear / that I might hear" },
  { group: "Audiō Imperfect Subjunctive", caseName: "you (sg.)", ending: "audīrēs", meaning: "you might hear / that you might hear" },
  { group: "Audiō Imperfect Subjunctive", caseName: "he/she/it", ending: "audīret", meaning: "he, she, or it might hear" },
  { group: "Audiō Imperfect Subjunctive", caseName: "we", ending: "audīrēmus", meaning: "we might hear / that we might hear" },
  { group: "Audiō Imperfect Subjunctive", caseName: "you (pl.)", ending: "audīrētis", meaning: "you all might hear" },
  { group: "Audiō Imperfect Subjunctive", caseName: "they", ending: "audīrent", meaning: "they might hear / that they might hear" }
];

const lessonTwentyThreeSumImperfectSubjunctiveItems = [
  { group: "Sum Imperfect Subjunctive", caseName: "I", ending: "essem", meaning: "I might be / that I might be" },
  { group: "Sum Imperfect Subjunctive", caseName: "you (sg.)", ending: "essēs", meaning: "you might be / that you might be" },
  { group: "Sum Imperfect Subjunctive", caseName: "he/she/it", ending: "esset", meaning: "he, she, or it might be" },
  { group: "Sum Imperfect Subjunctive", caseName: "we", ending: "essēmus", meaning: "we might be / that we might be" },
  { group: "Sum Imperfect Subjunctive", caseName: "you (pl.)", ending: "essētis", meaning: "you all might be" },
  { group: "Sum Imperfect Subjunctive", caseName: "they", ending: "essent", meaning: "they might be / that they might be" }
];

const lessonTwentyThreePurposeTenseItems = [
  { group: "Purpose Tense Choice", caseName: "primary main verb", ending: "present subjunctive", meaning: "use after present, future, or future perfect main verbs" },
  { group: "Purpose Tense Choice", caseName: "secondary main verb", ending: "imperfect subjunctive", meaning: "use after imperfect, perfect, or pluperfect main verbs" },
  { group: "Inter Idiom", caseName: "exchange", ending: "obsidēs inter sē dant", meaning: "they exchange hostages" }
];

const lessonTwentyThreeFormItems = [
  ...lessonTwentyThreeLaudoImperfectSubjunctiveItems,
  ...lessonTwentyThreeMoneoImperfectSubjunctiveItems,
  ...lessonTwentyThreeMittoImperfectSubjunctiveItems,
  ...lessonTwentyThreeAudioImperfectSubjunctiveItems,
  ...lessonTwentyThreeSumImperfectSubjunctiveItems
];

const lessonTwentyThreeGrammarForms = {
  singular: lessonTwentyThreeFormItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonTwentyThreeFormItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: [...lessonTwentyThreeFormItems, ...lessonTwentyThreePurposeTenseItems].map((item) => [item.ending, item.meaning])
};

const lessonTwentyFourRelativePronounMasculineItems = [
  { group: "Quī Masculine Singular", caseName: "Nominative", ending: "quī", meaning: "who/which/that, masculine singular subject" },
  { group: "Quī Masculine Singular", caseName: "Genitive", ending: "cuius", meaning: "whose/of whom, masculine singular" },
  { group: "Quī Masculine Singular", caseName: "Dative", ending: "cui", meaning: "to whom/for whom, masculine singular" },
  { group: "Quī Masculine Singular", caseName: "Accusative", ending: "quem", meaning: "whom/which/that, masculine singular direct object" },
  { group: "Quī Masculine Singular", caseName: "Ablative", ending: "quō", meaning: "by/with/from whom, masculine singular" },
  { group: "Quī Masculine Plural", caseName: "Nominative", ending: "quī", meaning: "who/which/that, masculine plural subject" },
  { group: "Quī Masculine Plural", caseName: "Genitive", ending: "quōrum", meaning: "whose/of whom, masculine plural" },
  { group: "Quī Masculine Plural", caseName: "Dative", ending: "quibus", meaning: "to whom/for whom, masculine plural" },
  { group: "Quī Masculine Plural", caseName: "Accusative", ending: "quōs", meaning: "whom/which/that, masculine plural direct object" },
  { group: "Quī Masculine Plural", caseName: "Ablative", ending: "quibus", meaning: "by/with/from whom, masculine plural" }
];

const lessonTwentyFourRelativePronounFeminineItems = [
  { group: "Quae Feminine Singular", caseName: "Nominative", ending: "quae", meaning: "who/which/that, feminine singular subject" },
  { group: "Quae Feminine Singular", caseName: "Genitive", ending: "cuius", meaning: "whose/of whom, feminine singular" },
  { group: "Quae Feminine Singular", caseName: "Dative", ending: "cui", meaning: "to whom/for whom, feminine singular" },
  { group: "Quae Feminine Singular", caseName: "Accusative", ending: "quam", meaning: "whom/which/that, feminine singular direct object" },
  { group: "Quae Feminine Singular", caseName: "Ablative", ending: "quā", meaning: "by/with/from whom, feminine singular" },
  { group: "Quae Feminine Plural", caseName: "Nominative", ending: "quae", meaning: "who/which/that, feminine plural subject" },
  { group: "Quae Feminine Plural", caseName: "Genitive", ending: "quārum", meaning: "whose/of whom, feminine plural" },
  { group: "Quae Feminine Plural", caseName: "Dative", ending: "quibus", meaning: "to whom/for whom, feminine plural" },
  { group: "Quae Feminine Plural", caseName: "Accusative", ending: "quās", meaning: "whom/which/that, feminine plural direct object" },
  { group: "Quae Feminine Plural", caseName: "Ablative", ending: "quibus", meaning: "by/with/from whom, feminine plural" }
];

const lessonTwentyFourRelativePronounNeuterItems = [
  { group: "Quod Neuter Singular", caseName: "Nominative", ending: "quod", meaning: "which/that, neuter singular subject" },
  { group: "Quod Neuter Singular", caseName: "Genitive", ending: "cuius", meaning: "whose/of which, neuter singular" },
  { group: "Quod Neuter Singular", caseName: "Dative", ending: "cui", meaning: "to which/for which, neuter singular" },
  { group: "Quod Neuter Singular", caseName: "Accusative", ending: "quod", meaning: "which/that, neuter singular direct object" },
  { group: "Quod Neuter Singular", caseName: "Ablative", ending: "quō", meaning: "by/with/from which, neuter singular" },
  { group: "Quod Neuter Plural", caseName: "Nominative", ending: "quae", meaning: "which/that, neuter plural subject" },
  { group: "Quod Neuter Plural", caseName: "Genitive", ending: "quōrum", meaning: "whose/of which, neuter plural" },
  { group: "Quod Neuter Plural", caseName: "Dative", ending: "quibus", meaning: "to which/for which, neuter plural" },
  { group: "Quod Neuter Plural", caseName: "Accusative", ending: "quae", meaning: "which/that, neuter plural direct object" },
  { group: "Quod Neuter Plural", caseName: "Ablative", ending: "quibus", meaning: "by/with/from which, neuter plural" }
];

const lessonTwentyFourAdUseItems = [
  { group: "Ad Uses", caseName: "motion", ending: "ad + accusative", meaning: "to / up to after motion" },
  { group: "Ad Uses", caseName: "time", ending: "ad noctem", meaning: "until night" },
  { group: "Ad Uses", caseName: "adjective phrase", ending: "ad bellum parātus", meaning: "prepared for war" },
  { group: "Impersonal Verbs", caseName: "fighting", ending: "acriter pugnātum est", meaning: "there was bitter fighting / they fought bitterly" },
  { group: "Impersonal Verbs", caseName: "arrival", ending: "ad flūmen perventum est", meaning: "they arrived at the river" },
  { group: "Relative Purpose", caseName: "relative purpose", ending: "quī + subjunctive", meaning: "who/which/that should; in order to" },
  { group: "Relative Purpose", caseName: "comparative purpose", ending: "quō + comparative + subjunctive", meaning: "so that ... more / -er" }
];

const lessonTwentyFourFormItems = [
  ...lessonTwentyFourRelativePronounMasculineItems,
  ...lessonTwentyFourRelativePronounFeminineItems,
  ...lessonTwentyFourRelativePronounNeuterItems
];

const lessonTwentyFourGrammarForms = {
  singular: lessonTwentyFourFormItems.filter((item) => item.group.includes("Singular")).map((item) => [item.ending, item.meaning]),
  plural: lessonTwentyFourFormItems.filter((item) => item.group.includes("Plural")).map((item) => [item.ending, item.meaning]),
  both: [...lessonTwentyFourFormItems, ...lessonTwentyFourAdUseItems].map((item) => [item.ending, item.meaning])
};

const lessonTwentyFiveQuestionAdverbItems = [
  { group: "Question Adverbs", caseName: "Where? rest/location", ending: "ubi", meaning: "where? place in which" },
  { group: "Question Adverbs", caseName: "Where to? motion", ending: "quō", meaning: "where to? whither? motion toward" },
  { group: "Question Adverbs", caseName: "From where?", ending: "unde", meaning: "from where? whence?" },
  { group: "Question Adverbs", caseName: "Why?", ending: "cūr", meaning: "why?" }
];

const lessonTwentyFiveQuestionParticleItems = [
  { group: "Question Particles", caseName: "Neutral yes/no", ending: "-ne", meaning: "asks a neutral yes/no question" },
  { group: "Question Particles", caseName: "Expects no", ending: "num", meaning: "surely not? expects no" },
  { group: "Question Particles", caseName: "Expects yes", ending: "nōnne", meaning: "surely? expects yes" }
];

const lessonTwentyFiveInterrogativePronounSingularItems = [
  { group: "Quis/Quid Singular", caseName: "Nominative m./f.", ending: "quis", meaning: "who? as subject" },
  { group: "Quis/Quid Singular", caseName: "Nominative/Accusative n.", ending: "quid", meaning: "what? as subject or direct object" },
  { group: "Quis/Quid Singular", caseName: "Genitive", ending: "cuius", meaning: "whose? of whom? of what?" },
  { group: "Quis/Quid Singular", caseName: "Dative", ending: "cui", meaning: "to whom? for whom?" },
  { group: "Quis/Quid Singular", caseName: "Accusative m./f.", ending: "quem", meaning: "whom? as direct object" },
  { group: "Quis/Quid Singular", caseName: "Ablative m./n.", ending: "quō", meaning: "by/with/from whom or what?" },
  { group: "Quis/Quid Singular", caseName: "Ablative f.", ending: "quā", meaning: "by/with/from whom or what? feminine" }
];

const lessonTwentyFiveInterrogativePronounPluralItems = [
  { group: "Quis/Quid Plural", caseName: "Nominative m.", ending: "quī", meaning: "who? masculine plural subject" },
  { group: "Quis/Quid Plural", caseName: "Nominative f./n.", ending: "quae", meaning: "who/what? feminine or neuter plural subject" },
  { group: "Quis/Quid Plural", caseName: "Genitive m./n.", ending: "quōrum", meaning: "whose? of whom/what? masculine or neuter plural" },
  { group: "Quis/Quid Plural", caseName: "Genitive f.", ending: "quārum", meaning: "whose? of whom/what? feminine plural" },
  { group: "Quis/Quid Plural", caseName: "Dative/Ablative", ending: "quibus", meaning: "to/for/by/with/from whom or what? plural" },
  { group: "Quis/Quid Plural", caseName: "Accusative m.", ending: "quōs", meaning: "whom? masculine plural direct object" },
  { group: "Quis/Quid Plural", caseName: "Accusative f.", ending: "quās", meaning: "whom? feminine plural direct object" },
  { group: "Quis/Quid Plural", caseName: "Accusative n.", ending: "quae", meaning: "what things? neuter plural direct object" }
];

const lessonTwentyFiveInterrogativeAdjectiveItems = [
  { group: "Interrogative Adjective Singular", caseName: "Nom. masc.", ending: "quis vir", meaning: "which/what man?" },
  { group: "Interrogative Adjective Singular", caseName: "Nom. fem.", ending: "quae fēmina", meaning: "which/what woman?" },
  { group: "Interrogative Adjective Singular", caseName: "Nom./Acc. neut.", ending: "quod oppidum", meaning: "which/what town?" },
  { group: "Interrogative Adjective Singular", caseName: "Acc. masc.", ending: "quem virum", meaning: "which/what man as direct object?" },
  { group: "Interrogative Adjective Singular", caseName: "Ablative with nomen", ending: "quō nōmine", meaning: "by what name?" },
  { group: "Interrogative Adjective Plural", caseName: "Nom. masc.", ending: "quī virī", meaning: "which/what men?" },
  { group: "Interrogative Adjective Plural", caseName: "Acc. masc.", ending: "quōs virōs", meaning: "which/what men as direct object?" },
  { group: "Interrogative Adjective Plural", caseName: "Ablative plural", ending: "quibus sociīs", meaning: "with/by which allies?" }
];

const lessonTwentyFiveDirectQuestionPatternItems = [
  { group: "Direct Question Patterns", caseName: "direct question mood", ending: "indicative", meaning: "usual mood for direct questions" },
  { group: "Direct Question Patterns", caseName: "verb of calling", ending: "two accusatives", meaning: "direct object plus predicate accusative" },
  { group: "Direct Question Patterns", caseName: "with nomen", ending: "ablative of name", meaning: "quō nōmine means by what name" },
  { group: "Direct Question Patterns", caseName: "lead across", ending: "trādūcō + two accusatives", meaning: "lead someone/something across something" }
];

const lessonTwentyFiveFormItems = [
  ...lessonTwentyFiveQuestionAdverbItems,
  ...lessonTwentyFiveQuestionParticleItems,
  ...lessonTwentyFiveInterrogativePronounSingularItems,
  ...lessonTwentyFiveInterrogativePronounPluralItems,
  ...lessonTwentyFiveInterrogativeAdjectiveItems
];

const lessonTwentyFiveGrammarForms = {
  singular: [
    ...lessonTwentyFiveQuestionAdverbItems,
    ...lessonTwentyFiveQuestionParticleItems,
    ...lessonTwentyFiveInterrogativePronounSingularItems,
    ...lessonTwentyFiveInterrogativeAdjectiveItems.filter((item) => item.group.includes("Singular"))
  ].map((item) => [item.ending, item.meaning]),
  plural: [
    ...lessonTwentyFiveInterrogativePronounPluralItems,
    ...lessonTwentyFiveInterrogativeAdjectiveItems.filter((item) => item.group.includes("Plural"))
  ].map((item) => [item.ending, item.meaning]),
  both: [...lessonTwentyFiveFormItems, ...lessonTwentyFiveDirectQuestionPatternItems].map((item) => [item.ending, item.meaning])
};

const lessonTwentySixLaudoPerfectSubjunctiveItems = [
  { group: "Laudō Perfect Subjunctive", caseName: "I", ending: "laudāverim", meaning: "I may have praised / that I praised" },
  { group: "Laudō Perfect Subjunctive", caseName: "you (sg.)", ending: "laudāverīs", meaning: "you may have praised / that you praised" },
  { group: "Laudō Perfect Subjunctive", caseName: "he/she/it", ending: "laudāverit", meaning: "he, she, or it may have praised" },
  { group: "Laudō Perfect Subjunctive", caseName: "we", ending: "laudāverīmus", meaning: "we may have praised / that we praised" },
  { group: "Laudō Perfect Subjunctive", caseName: "you (pl.)", ending: "laudāverītis", meaning: "you all may have praised" },
  { group: "Laudō Perfect Subjunctive", caseName: "they", ending: "laudāverint", meaning: "they may have praised / that they praised" }
];

const lessonTwentySixLaudoPluperfectSubjunctiveItems = [
  { group: "Laudō Pluperfect Subjunctive", caseName: "I", ending: "laudāvissem", meaning: "I might have praised / that I had praised" },
  { group: "Laudō Pluperfect Subjunctive", caseName: "you (sg.)", ending: "laudāvissēs", meaning: "you might have praised / that you had praised" },
  { group: "Laudō Pluperfect Subjunctive", caseName: "he/she/it", ending: "laudāvisset", meaning: "he, she, or it might have praised" },
  { group: "Laudō Pluperfect Subjunctive", caseName: "we", ending: "laudāvissēmus", meaning: "we might have praised / that we had praised" },
  { group: "Laudō Pluperfect Subjunctive", caseName: "you (pl.)", ending: "laudāvissētis", meaning: "you all might have praised" },
  { group: "Laudō Pluperfect Subjunctive", caseName: "they", ending: "laudāvissent", meaning: "they might have praised / that they had praised" }
];

const lessonTwentySixMittoPerfectSubjunctiveItems = [
  { group: "Mittō Perfect Subjunctive", caseName: "I", ending: "mīserim", meaning: "I may have sent / that I sent" },
  { group: "Mittō Perfect Subjunctive", caseName: "you (sg.)", ending: "mīserīs", meaning: "you may have sent / that you sent" },
  { group: "Mittō Perfect Subjunctive", caseName: "he/she/it", ending: "mīserit", meaning: "he, she, or it may have sent" },
  { group: "Mittō Perfect Subjunctive", caseName: "we", ending: "mīserīmus", meaning: "we may have sent / that we sent" },
  { group: "Mittō Perfect Subjunctive", caseName: "you (pl.)", ending: "mīserītis", meaning: "you all may have sent" },
  { group: "Mittō Perfect Subjunctive", caseName: "they", ending: "mīserint", meaning: "they may have sent / that they sent" }
];

const lessonTwentySixMittoPluperfectSubjunctiveItems = [
  { group: "Mittō Pluperfect Subjunctive", caseName: "I", ending: "mīsissem", meaning: "I might have sent / that I had sent" },
  { group: "Mittō Pluperfect Subjunctive", caseName: "you (sg.)", ending: "mīsissēs", meaning: "you might have sent / that you had sent" },
  { group: "Mittō Pluperfect Subjunctive", caseName: "he/she/it", ending: "mīsisset", meaning: "he, she, or it might have sent" },
  { group: "Mittō Pluperfect Subjunctive", caseName: "we", ending: "mīsissēmus", meaning: "we might have sent / that we had sent" },
  { group: "Mittō Pluperfect Subjunctive", caseName: "you (pl.)", ending: "mīsissētis", meaning: "you all might have sent" },
  { group: "Mittō Pluperfect Subjunctive", caseName: "they", ending: "mīsissent", meaning: "they might have sent / that they had sent" }
];

const lessonTwentySixSumPerfectSubjunctiveItems = [
  { group: "Sum Perfect Subjunctive", caseName: "I", ending: "fuerim", meaning: "I may have been / that I was" },
  { group: "Sum Perfect Subjunctive", caseName: "you (sg.)", ending: "fuerīs", meaning: "you may have been / that you were" },
  { group: "Sum Perfect Subjunctive", caseName: "he/she/it", ending: "fuerit", meaning: "he, she, or it may have been" },
  { group: "Sum Perfect Subjunctive", caseName: "we", ending: "fuerīmus", meaning: "we may have been / that we were" },
  { group: "Sum Perfect Subjunctive", caseName: "you (pl.)", ending: "fuerītis", meaning: "you all may have been" },
  { group: "Sum Perfect Subjunctive", caseName: "they", ending: "fuerint", meaning: "they may have been / that they were" }
];

const lessonTwentySixSumPluperfectSubjunctiveItems = [
  { group: "Sum Pluperfect Subjunctive", caseName: "I", ending: "fuissem", meaning: "I might have been / that I had been" },
  { group: "Sum Pluperfect Subjunctive", caseName: "you (sg.)", ending: "fuissēs", meaning: "you might have been / that you had been" },
  { group: "Sum Pluperfect Subjunctive", caseName: "he/she/it", ending: "fuisset", meaning: "he, she, or it might have been" },
  { group: "Sum Pluperfect Subjunctive", caseName: "we", ending: "fuissēmus", meaning: "we might have been / that we had been" },
  { group: "Sum Pluperfect Subjunctive", caseName: "you (pl.)", ending: "fuissētis", meaning: "you all might have been" },
  { group: "Sum Pluperfect Subjunctive", caseName: "they", ending: "fuissent", meaning: "they might have been / that they had been" }
];

const lessonTwentySixSequenceItems = [
  { group: "Indirect Question Sequence", caseName: "Indirect question", ending: "subjunctive", meaning: "mood always used in indirect questions" },
  { group: "Indirect Question Sequence", caseName: "Primary same-time", ending: "present subjunctive", meaning: "same time after a primary main verb" },
  { group: "Indirect Question Sequence", caseName: "Primary before-time", ending: "perfect subjunctive", meaning: "before the action of a primary main verb" },
  { group: "Indirect Question Sequence", caseName: "Secondary same-time", ending: "imperfect subjunctive", meaning: "same time after a secondary main verb" },
  { group: "Indirect Question Sequence", caseName: "Secondary before-time", ending: "pluperfect subjunctive", meaning: "before the action of a secondary main verb" },
  { group: "Indirect Question Sequence", caseName: "Indirect -ne / num", ending: "whether / if", meaning: "meaning of -ne and num in indirect questions" },
  { group: "Direct Quotation", caseName: "He says / he said", ending: "inquit", meaning: "used inside direct quotations" }
];

const lessonTwentySixFormItems = [
  ...lessonTwentySixLaudoPerfectSubjunctiveItems,
  ...lessonTwentySixLaudoPluperfectSubjunctiveItems,
  ...lessonTwentySixMittoPerfectSubjunctiveItems,
  ...lessonTwentySixMittoPluperfectSubjunctiveItems,
  ...lessonTwentySixSumPerfectSubjunctiveItems,
  ...lessonTwentySixSumPluperfectSubjunctiveItems
];

const lessonTwentySixGrammarForms = {
  singular: lessonTwentySixFormItems.filter((item) => ["I", "you (sg.)", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonTwentySixFormItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: [...lessonTwentySixFormItems, ...lessonTwentySixSequenceItems].map((item) => [item.ending, item.meaning])
};

const lessonTwentySevenVocativeItems = [
  { group: "Vocative Singular", caseName: "1st declension", ending: "Maria", meaning: "Mary! / O Mary" },
  { group: "Vocative Singular", caseName: "2nd -us", ending: "serve", meaning: "slave! / O slave" },
  { group: "Vocative Singular", caseName: "dominus", ending: "Domine", meaning: "Lord! / O Lord" },
  { group: "Vocative Singular", caseName: "-ius", ending: "fīlī", meaning: "son! / O son" },
  { group: "Vocative Singular", caseName: "meus", ending: "mī", meaning: "my! in direct address" },
  { group: "Vocative Singular", caseName: "puer", ending: "puer", meaning: "boy! / O boy" },
  { group: "Vocative Singular", caseName: "vir", ending: "vir", meaning: "man! / O man" },
  { group: "Vocative Plural", caseName: "plural", ending: "frātrēs", meaning: "brothers! / O brothers" },
  { group: "Vocative Plural", caseName: "plural", ending: "mīlitēs", meaning: "soldiers! / O soldiers" }
];

const lessonTwentySevenImperativeItems = [
  { group: "Laudō Imperative", caseName: "you (sg.)", ending: "laudā", meaning: "praise! to one person" },
  { group: "Laudō Imperative", caseName: "you (pl.)", ending: "laudāte", meaning: "praise! to more than one" },
  { group: "Moneō Imperative", caseName: "you (sg.)", ending: "monē", meaning: "warn! to one person" },
  { group: "Moneō Imperative", caseName: "you (pl.)", ending: "monēte", meaning: "warn! to more than one" },
  { group: "Mittō Imperative", caseName: "you (sg.)", ending: "mitte", meaning: "send! to one person" },
  { group: "Mittō Imperative", caseName: "you (pl.)", ending: "mittite", meaning: "send! to more than one" },
  { group: "Audiō Imperative", caseName: "you (sg.)", ending: "audī", meaning: "hear! to one person" },
  { group: "Audiō Imperative", caseName: "you (pl.)", ending: "audīte", meaning: "hear! to more than one" },
  { group: "Regō Imperative", caseName: "you (sg.)", ending: "rege", meaning: "rule or direct! to one person" },
  { group: "Regō Imperative", caseName: "you (pl.)", ending: "regite", meaning: "rule or direct! to more than one" },
  { group: "Tollō Imperative", caseName: "you (sg.)", ending: "tolle", meaning: "take away! to one person" },
  { group: "Tollō Imperative", caseName: "you (pl.)", ending: "tollite", meaning: "take away! to more than one" },
  { group: "Agō Imperative", caseName: "you (sg.)", ending: "age", meaning: "do or drive! to one person" },
  { group: "Agō Imperative", caseName: "you (pl.)", ending: "agite", meaning: "do or give thanks! to more than one" }
];

const lessonTwentySevenWishHortatoryItems = [
  { group: "Wish", caseName: "he/she/it", ending: "det", meaning: "may he, she, or it give" },
  { group: "Wish", caseName: "he/she/it", ending: "veniat", meaning: "may he, she, or it come" },
  { group: "Wish", caseName: "negative", ending: "nē veniat", meaning: "may he, she, or it not come" },
  { group: "Wish", caseName: "he/she/it", ending: "adjuvet", meaning: "may he, she, or it help" },
  { group: "Wish", caseName: "you (sg.)", ending: "valeās", meaning: "may you be well" },
  { group: "Hortatory", caseName: "we", ending: "veniāmus", meaning: "let us come" },
  { group: "Hortatory", caseName: "we", ending: "grātiās agāmus", meaning: "let us give thanks" },
  { group: "Hortatory", caseName: "we", ending: "pugnēmus", meaning: "let us fight" },
  { group: "Hortatory", caseName: "we", ending: "ōrēmus", meaning: "let us pray" },
  { group: "Hortatory", caseName: "we", ending: "nē cēdāmus", meaning: "let us not yield" }
];

const lessonTwentySevenRuleItems = [
  { group: "Lesson 27 Rules", caseName: "Vocative", ending: "case of address", meaning: "case used for the person spoken to" },
  { group: "Lesson 27 Rules", caseName: "Imperative", ending: "command", meaning: "mood used for commands" },
  { group: "Lesson 27 Rules", caseName: "Utinam", ending: "wish", meaning: "often introduces a wish" },
  { group: "Lesson 27 Rules", caseName: "Negative wish", ending: "nē", meaning: "negative used with wishes and negative purpose" },
  { group: "Lesson 27 Rules", caseName: "Hortatory", ending: "let us", meaning: "first-person plural present subjunctive" }
];

const lessonTwentySevenFormItems = [
  ...lessonTwentySevenVocativeItems,
  ...lessonTwentySevenImperativeItems,
  ...lessonTwentySevenWishHortatoryItems
];

const lessonTwentySevenGrammarForms = {
  singular: [
    ...lessonTwentySevenVocativeItems.filter((item) => item.group.includes("Singular")),
    ...lessonTwentySevenImperativeItems.filter((item) => item.caseName === "you (sg.)"),
    ...lessonTwentySevenWishHortatoryItems.filter((item) => item.group === "Wish")
  ].map((item) => [item.ending, item.meaning]),
  plural: [
    ...lessonTwentySevenVocativeItems.filter((item) => item.group.includes("Plural")),
    ...lessonTwentySevenImperativeItems.filter((item) => item.caseName === "you (pl.)"),
    ...lessonTwentySevenWishHortatoryItems.filter((item) => item.group === "Hortatory")
  ].map((item) => [item.ending, item.meaning]),
  both: [...lessonTwentySevenFormItems, ...lessonTwentySevenRuleItems].map((item) => [item.ending, item.meaning])
};

const lessonTwentyEightSuiItems = [
  { group: "Suī Reflexive Pronoun", caseName: "Genitive", ending: "suī", meaning: "of himself, herself, itself, or themselves" },
  { group: "Suī Reflexive Pronoun", caseName: "Dative", ending: "sibi", meaning: "to or for himself, herself, itself, or themselves" },
  { group: "Suī Reflexive Pronoun", caseName: "Accusative", ending: "sē", meaning: "himself, herself, itself, or themselves as direct object" },
  { group: "Suī Reflexive Pronoun", caseName: "Ablative", ending: "sē", meaning: "by, with, or from himself, herself, itself, or themselves" }
];

const lessonTwentyEightSuusItems = [
  { group: "Suus Possessive", caseName: "Masculine", ending: "suus", meaning: "his, her, its, or their own (masc.)" },
  { group: "Suus Possessive", caseName: "Feminine", ending: "sua", meaning: "his, her, its, or their own (fem.)" },
  { group: "Suus Possessive", caseName: "Neuter", ending: "suum", meaning: "his, her, its, or their own (neut.)" },
  { group: "Suus Possessive", caseName: "Masculine direct object", ending: "suum", meaning: "his own masculine direct object" },
  { group: "Suus Possessive", caseName: "Feminine direct object", ending: "suam", meaning: "her own feminine direct object" },
  { group: "Suus Possessive", caseName: "Plural masculine", ending: "suī", meaning: "his/their own men or things as masculine subject plural" },
  { group: "Suus Possessive", caseName: "Plural feminine", ending: "suae", meaning: "his/their own feminine subject plural" },
  { group: "Suus Possessive", caseName: "Plural neuter", ending: "sua", meaning: "his/their own neuter subject or direct object plural" },
  { group: "Suus Possessive", caseName: "Plural dative/ablative", ending: "suīs", meaning: "to/by/with/from his or their own" }
];

const lessonTwentyEightIdiomItems = [
  { group: "Reflexive Idioms", caseName: "Surrender", ending: "sē dēdere", meaning: "to surrender oneself" },
  { group: "Reflexive Idioms", caseName: "They surrendered", ending: "sē dēdidērunt", meaning: "they surrendered themselves" },
  { group: "Reflexive Idioms", caseName: "Put to flight", ending: "in fugam dare", meaning: "put to flight" },
  { group: "Reflexive Idioms", caseName: "By name", ending: "nōmine", meaning: "by name / named" },
  { group: "Reflexive Rules", caseName: "Direct reflexive", ending: "own clause", meaning: "refers to the subject of its own clause" },
  { group: "Reflexive Rules", caseName: "Indirect reflexive", ending: "main subject", meaning: "in a subordinate clause, refers to the subject of the main verb" }
];

const lessonTwentyEightFormItems = [
  ...lessonTwentyEightSuiItems,
  ...lessonTwentyEightSuusItems,
  ...lessonTwentyEightIdiomItems
];

const lessonTwentyEightGrammarForms = {
  singular: [...lessonTwentyEightSuiItems, ...lessonTwentyEightSuusItems.filter((item) => !item.caseName.includes("Plural"))].map((item) => [item.ending, item.meaning]),
  plural: [...lessonTwentyEightSuusItems.filter((item) => item.caseName.includes("Plural")), ...lessonTwentyEightIdiomItems].map((item) => [item.ending, item.meaning]),
  both: lessonTwentyEightFormItems.map((item) => [item.ending, item.meaning])
};

const lessonTwentyNineLaudoPresentPassiveSubjunctiveItems = [
  { group: "Laudō Present Passive Subjunctive", caseName: "I", ending: "lauder", meaning: "I may be praised" },
  { group: "Laudō Present Passive Subjunctive", caseName: "you (sg.)", ending: "laudēris", meaning: "you may be praised" },
  { group: "Laudō Present Passive Subjunctive", caseName: "he/she/it", ending: "laudētur", meaning: "he, she, or it may be praised" },
  { group: "Laudō Present Passive Subjunctive", caseName: "we", ending: "laudēmur", meaning: "we may be praised" },
  { group: "Laudō Present Passive Subjunctive", caseName: "you (pl.)", ending: "laudēminī", meaning: "you all may be praised" },
  { group: "Laudō Present Passive Subjunctive", caseName: "they", ending: "laudentur", meaning: "they may be praised" }
];

const lessonTwentyNineLaudoImperfectPassiveSubjunctiveItems = [
  { group: "Laudō Imperfect Passive Subjunctive", caseName: "I", ending: "laudārer", meaning: "I might be praised / that I was being praised" },
  { group: "Laudō Imperfect Passive Subjunctive", caseName: "you (sg.)", ending: "laudārēris", meaning: "you might be praised / that you were being praised" },
  { group: "Laudō Imperfect Passive Subjunctive", caseName: "he/she/it", ending: "laudārētur", meaning: "he, she, or it might be praised" },
  { group: "Laudō Imperfect Passive Subjunctive", caseName: "we", ending: "laudārēmur", meaning: "we might be praised / that we were being praised" },
  { group: "Laudō Imperfect Passive Subjunctive", caseName: "you (pl.)", ending: "laudārēminī", meaning: "you all might be praised" },
  { group: "Laudō Imperfect Passive Subjunctive", caseName: "they", ending: "laudārentur", meaning: "they might be praised / that they were being praised" }
];

const lessonTwentyNineMittoPresentPassiveSubjunctiveItems = [
  { group: "Mittō Present Passive Subjunctive", caseName: "I", ending: "mittar", meaning: "I may be sent" },
  { group: "Mittō Present Passive Subjunctive", caseName: "you (sg.)", ending: "mittāris", meaning: "you may be sent" },
  { group: "Mittō Present Passive Subjunctive", caseName: "he/she/it", ending: "mittātur", meaning: "he, she, or it may be sent" },
  { group: "Mittō Present Passive Subjunctive", caseName: "we", ending: "mittāmur", meaning: "we may be sent" },
  { group: "Mittō Present Passive Subjunctive", caseName: "you (pl.)", ending: "mittāminī", meaning: "you all may be sent" },
  { group: "Mittō Present Passive Subjunctive", caseName: "they", ending: "mittantur", meaning: "they may be sent" }
];

const lessonTwentyNineLaudoPerfectPassiveSubjunctiveItems = [
  { group: "Laudō Perfect Passive Subjunctive", caseName: "I", ending: "laudātus sim", meaning: "I may have been praised / that I was praised" },
  { group: "Laudō Perfect Passive Subjunctive", caseName: "you (sg.)", ending: "laudātus sīs", meaning: "you may have been praised / that you were praised" },
  { group: "Laudō Perfect Passive Subjunctive", caseName: "he", ending: "laudātus sit", meaning: "he may have been praised / that he was praised" },
  { group: "Laudō Perfect Passive Subjunctive", caseName: "we", ending: "laudātī sīmus", meaning: "we may have been praised / that we were praised" },
  { group: "Laudō Perfect Passive Subjunctive", caseName: "you (pl.)", ending: "laudātī sītis", meaning: "you all may have been praised" },
  { group: "Laudō Perfect Passive Subjunctive", caseName: "they", ending: "laudātī sint", meaning: "they may have been praised / that they were praised" }
];

const lessonTwentyNineLaudoPluperfectPassiveSubjunctiveItems = [
  { group: "Laudō Pluperfect Passive Subjunctive", caseName: "I", ending: "laudātus essem", meaning: "I might have been praised / that I had been praised" },
  { group: "Laudō Pluperfect Passive Subjunctive", caseName: "you (sg.)", ending: "laudātus essēs", meaning: "you might have been praised / that you had been praised" },
  { group: "Laudō Pluperfect Passive Subjunctive", caseName: "he", ending: "laudātus esset", meaning: "he might have been praised / that he had been praised" },
  { group: "Laudō Pluperfect Passive Subjunctive", caseName: "we", ending: "laudātī essēmus", meaning: "we might have been praised / that we had been praised" },
  { group: "Laudō Pluperfect Passive Subjunctive", caseName: "you (pl.)", ending: "laudātī essētis", meaning: "you all might have been praised" },
  { group: "Laudō Pluperfect Passive Subjunctive", caseName: "they", ending: "laudātī essent", meaning: "they might have been praised / that they had been praised" }
];

const lessonTwentyNinePatternItems = [
  { group: "Causa", caseName: "For the sake of peace", ending: "pācis causa", meaning: "for the sake of peace" },
  { group: "Causa", caseName: "For the sake of water", ending: "aquae causa", meaning: "for the sake of water" },
  { group: "Ablative of Cause", caseName: "At Caesar's arrival", ending: "adventū Caesaris", meaning: "because of Caesar's arrival" },
  { group: "Custom", caseName: "According to custom", ending: "mōre suō", meaning: "according to their custom" },
  { group: "Cum Clause", caseName: "When he had seen", ending: "cum vīdisset", meaning: "when he had seen" },
  { group: "Cum Clause", caseName: "When they were fighting", ending: "cum pugnārent", meaning: "when they were fighting" }
];

const lessonTwentyNineFormItems = [
  ...lessonTwentyNineLaudoPresentPassiveSubjunctiveItems,
  ...lessonTwentyNineLaudoImperfectPassiveSubjunctiveItems,
  ...lessonTwentyNineMittoPresentPassiveSubjunctiveItems,
  ...lessonTwentyNineLaudoPerfectPassiveSubjunctiveItems,
  ...lessonTwentyNineLaudoPluperfectPassiveSubjunctiveItems
];

const lessonTwentyNineGrammarForms = {
  singular: lessonTwentyNineFormItems.filter((item) => ["I", "you (sg.)", "he", "he/she/it"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  plural: lessonTwentyNineFormItems.filter((item) => ["we", "you (pl.)", "they"].includes(item.caseName)).map((item) => [item.ending, item.meaning]),
  both: [...lessonTwentyNineFormItems, ...lessonTwentyNinePatternItems].map((item) => [item.ending, item.meaning])
};

const lessonThirtyParticipleAgreementItems = [
  { group: "Laudātus Singular", caseName: "masculine subject", ending: "laudātus", meaning: "praised / having been praised, masculine singular" },
  { group: "Laudātus Singular", caseName: "feminine subject", ending: "laudāta", meaning: "praised / having been praised, feminine singular" },
  { group: "Laudātus Singular", caseName: "neuter subject/object", ending: "laudātum", meaning: "praised / having been praised, neuter singular" },
  { group: "Laudātus Plural", caseName: "masculine subject", ending: "laudātī", meaning: "praised / having been praised, masculine plural" },
  { group: "Laudātus Plural", caseName: "feminine subject", ending: "laudātae", meaning: "praised / having been praised, feminine plural" },
  { group: "Laudātus Plural", caseName: "neuter subject/object", ending: "laudāta", meaning: "praised / having been praised, neuter plural" },
  { group: "Laudātus Singular", caseName: "masculine direct object", ending: "laudātum", meaning: "praised masculine singular direct object" },
  { group: "Laudātus Singular", caseName: "feminine direct object", ending: "laudātam", meaning: "praised feminine singular direct object" },
  { group: "Laudātus Plural", caseName: "masculine direct object", ending: "laudātōs", meaning: "praised masculine plural direct object" },
  { group: "Laudātus Plural", caseName: "feminine direct object", ending: "laudātās", meaning: "praised feminine plural direct object" }
];

const lessonThirtyPrincipalPartItems = [
  { group: "Perfect Participle Passive", caseName: "laudō", ending: "laudātus, a, um", meaning: "praised / having been praised" },
  { group: "Perfect Participle Passive", caseName: "moneō", ending: "monitus, a, um", meaning: "warned / having been warned" },
  { group: "Perfect Participle Passive", caseName: "mittō", ending: "missus, a, um", meaning: "sent / having been sent" },
  { group: "Perfect Participle Passive", caseName: "audiō", ending: "audītus, a, um", meaning: "heard / having been heard" }
];

const lessonThirtyVocabularyParticipleItems = [
  { group: "Lesson 30 Participles", caseName: "addūcō", ending: "adductus, a, um", meaning: "led to / led on" },
  { group: "Lesson 30 Participles", caseName: "commoveō", ending: "commōtus, a, um", meaning: "moved, alarmed, or aroused" },
  { group: "Lesson 30 Participles", caseName: "impediō", ending: "impedītus, a, um", meaning: "hindered, encumbered, or difficult" },
  { group: "Lesson 30 Participles", caseName: "pugnō", ending: "pugnātum", meaning: "neuter passive participle used impersonally: fighting was done" },
  { group: "Lesson 30 Participles", caseName: "cēdō", ending: "cessūrus", meaning: "about to yield" }
];

const lessonThirtyParticipleRuleItems = [
  { group: "Lesson 30 Rules", caseName: "participle", ending: "verbal adjective", meaning: "acts like a verb and an adjective" },
  { group: "Lesson 30 Rules", caseName: "regular fourth part", ending: "perfect participle passive", meaning: "fourth principal part of regular verbs" },
  { group: "Lesson 30 Rules", caseName: "agreement", ending: "gender number case", meaning: "a participle agrees with the noun it modifies" },
  { group: "Lesson 30 Rules", caseName: "intransitive", ending: "neuter passive only", meaning: "an intransitive verb can have only a neuter passive participle" },
  { group: "Lesson 30 Rules", caseName: "future active", ending: "-ūrus", meaning: "about to do the action" }
];

const lessonThirtyFormItems = [
  ...lessonThirtyParticipleAgreementItems,
  ...lessonThirtyPrincipalPartItems,
  ...lessonThirtyVocabularyParticipleItems,
  ...lessonThirtyParticipleRuleItems
];

const lessonThirtyGrammarForms = {
  singular: lessonThirtyParticipleAgreementItems.filter((item) => item.group.includes("Singular")).map((item) => [item.ending, item.meaning]),
  plural: lessonThirtyParticipleAgreementItems.filter((item) => item.group.includes("Plural")).map((item) => [item.ending, item.meaning]),
  both: lessonThirtyFormItems.map((item) => [item.ending, item.meaning])
};

const lessonThirtyOneHicMasculineItems = [
  { group: "Hic Masculine Singular", caseName: "Nominative", ending: "hic", meaning: "this man/thing as subject" },
  { group: "Hic Masculine Singular", caseName: "Genitive", ending: "huius", meaning: "of this man/thing" },
  { group: "Hic Masculine Singular", caseName: "Dative", ending: "huic", meaning: "to or for this man/thing" },
  { group: "Hic Masculine Singular", caseName: "Accusative", ending: "hunc", meaning: "this man/thing as direct object" },
  { group: "Hic Masculine Singular", caseName: "Ablative", ending: "hōc", meaning: "by, with, or from this man/thing" },
  { group: "Hic Masculine Plural", caseName: "Nominative", ending: "hī", meaning: "these men/things as subject" },
  { group: "Hic Masculine Plural", caseName: "Genitive", ending: "hōrum", meaning: "of these men/things" },
  { group: "Hic Masculine Plural", caseName: "Dative", ending: "hīs", meaning: "to or for these men/things" },
  { group: "Hic Masculine Plural", caseName: "Accusative", ending: "hōs", meaning: "these men/things as direct object" },
  { group: "Hic Masculine Plural", caseName: "Ablative", ending: "hīs", meaning: "by, with, or from these men/things" }
];

const lessonThirtyOneHicFeminineItems = [
  { group: "Haec Feminine Singular", caseName: "Nominative", ending: "haec", meaning: "this woman/thing as subject" },
  { group: "Haec Feminine Singular", caseName: "Genitive", ending: "huius", meaning: "of this woman/thing" },
  { group: "Haec Feminine Singular", caseName: "Dative", ending: "huic", meaning: "to or for this woman/thing" },
  { group: "Haec Feminine Singular", caseName: "Accusative", ending: "hanc", meaning: "this woman/thing as direct object" },
  { group: "Haec Feminine Singular", caseName: "Ablative", ending: "hāc", meaning: "by, with, or from this woman/thing" },
  { group: "Haec Feminine Plural", caseName: "Nominative", ending: "hae", meaning: "these women/things as subject" },
  { group: "Haec Feminine Plural", caseName: "Genitive", ending: "hārum", meaning: "of these women/things" },
  { group: "Haec Feminine Plural", caseName: "Dative", ending: "hīs", meaning: "to or for these women/things" },
  { group: "Haec Feminine Plural", caseName: "Accusative", ending: "hās", meaning: "these women/things as direct object" },
  { group: "Haec Feminine Plural", caseName: "Ablative", ending: "hīs", meaning: "by, with, or from these women/things" }
];

const lessonThirtyOneHicNeuterItems = [
  { group: "Hoc Neuter Singular", caseName: "Nominative", ending: "hoc", meaning: "this thing as subject" },
  { group: "Hoc Neuter Singular", caseName: "Genitive", ending: "huius", meaning: "of this thing" },
  { group: "Hoc Neuter Singular", caseName: "Dative", ending: "huic", meaning: "to or for this thing" },
  { group: "Hoc Neuter Singular", caseName: "Accusative", ending: "hoc", meaning: "this thing as direct object" },
  { group: "Hoc Neuter Singular", caseName: "Ablative", ending: "hōc", meaning: "by, with, or from this thing" },
  { group: "Hoc Neuter Plural", caseName: "Nominative", ending: "haec", meaning: "these things as subject" },
  { group: "Hoc Neuter Plural", caseName: "Genitive", ending: "hōrum", meaning: "of these things" },
  { group: "Hoc Neuter Plural", caseName: "Dative", ending: "hīs", meaning: "to or for these things" },
  { group: "Hoc Neuter Plural", caseName: "Accusative", ending: "haec", meaning: "these things as direct object" },
  { group: "Hoc Neuter Plural", caseName: "Ablative", ending: "hīs", meaning: "by, with, or from these things" }
];

const lessonThirtyOneHicFormItems = [
  ...lessonThirtyOneHicMasculineItems,
  ...lessonThirtyOneHicFeminineItems,
  ...lessonThirtyOneHicNeuterItems
];

const lessonThirtyOneHicRuleItems = [
  { group: "Hic Rules", caseName: "meaning", ending: "this / these", meaning: "points out a nearby person or thing" },
  { group: "Hic Rules", caseName: "as adjective", ending: "usually before noun", meaning: "generally precedes the noun it modifies" },
  { group: "Hic Rules", caseName: "as adjective agreement", ending: "gender number case", meaning: "agrees with the noun it modifies" },
  { group: "Hic Rules", caseName: "as pronoun agreement", ending: "gender and number", meaning: "agrees with the word it refers to" },
  { group: "Hic Vocabulary", caseName: "against", ending: "contra + accusative", meaning: "against / opposite" },
  { group: "Hic Vocabulary", caseName: "rear", ending: "ā tergō", meaning: "from the rear / in the rear" },
  { group: "Hic Vocabulary", caseName: "front", ending: "ā fronte", meaning: "from the front / in the front" },
  { group: "Hic Vocabulary", caseName: "highest", ending: "summus, a, um", meaning: "highest / top of / very great" }
];

const lessonThirtyOneGrammarForms = {
  singular: lessonThirtyOneHicFormItems.filter((item) => item.group.includes("Singular")).map((item) => [item.ending, item.meaning]),
  plural: lessonThirtyOneHicFormItems.filter((item) => item.group.includes("Plural")).map((item) => [item.ending, item.meaning]),
  both: [...lessonThirtyOneHicFormItems, ...lessonThirtyOneHicRuleItems].map((item) => [item.ending, item.meaning])
};

const lessonNineEndingPractice = {
  present: {
    title: "Laudō Present Forms",
    subtitle: "Fill the present-tense first-conjugation forms in order.",
    items: lessonNinePresentVerbItems
  },
  imperfect: {
    title: "Laudō Imperfect Forms",
    subtitle: "Fill the imperfect-tense first-conjugation forms in order.",
    items: lessonNineImperfectVerbItems
  },
  future: {
    title: "Laudō Future Forms",
    subtitle: "Fill the future-tense first-conjugation forms in order.",
    items: lessonNineFutureVerbItems
  },
  mixed: {
    title: "Laudō Present, Imperfect, and Future Forms",
    subtitle: "Fill the first-conjugation verb forms by tense and person.",
    items: lessonNineVerbItems
  }
};
lessonNineEndingPractice.singular = lessonNineEndingPractice.present;
lessonNineEndingPractice.plural = lessonNineEndingPractice.imperfect;
lessonNineEndingPractice.both = lessonNineEndingPractice.mixed;

const lessonTenEndingPractice = {
  present: {
    title: "Moneō Present Forms",
    subtitle: "Fill the present-tense second-conjugation forms in order.",
    items: lessonTenPresentVerbItems
  },
  imperfect: {
    title: "Moneō Imperfect Forms",
    subtitle: "Fill the imperfect-tense second-conjugation forms in order.",
    items: lessonTenImperfectVerbItems
  },
  future: {
    title: "Moneō Future Forms",
    subtitle: "Fill the future-tense second-conjugation forms in order.",
    items: lessonTenFutureVerbItems
  },
  mixed: {
    title: "Moneō Present, Imperfect, and Future Forms",
    subtitle: "Fill the second-conjugation verb forms by tense and person.",
    items: lessonTenVerbItems
  }
};
lessonTenEndingPractice.singular = lessonTenEndingPractice.present;
lessonTenEndingPractice.plural = lessonTenEndingPractice.imperfect;
lessonTenEndingPractice.both = lessonTenEndingPractice.mixed;

const lessonElevenEndingPractice = {
  firstPerson: {
    title: "First-Person Pronouns",
    subtitle: "Fill ego and nōs forms in case order.",
    items: lessonElevenFirstPersonPronounItems
  },
  secondPerson: {
    title: "Second-Person Pronouns",
    subtitle: "Fill tū and vōs forms in case order.",
    items: lessonElevenSecondPersonPronounItems
  },
  thirdPerson: {
    title: "Third-Person Pronouns",
    subtitle: "Fill is, ea, id forms by gender, number, and case.",
    items: lessonElevenThirdPersonPronounItems
  },
  reflexive: {
    title: "Reflexive Pronouns",
    subtitle: "Fill suī, sibi, sē, sē in order.",
    items: lessonElevenReflexivePronounItems
  },
  mixed: {
    title: "Personal and Reflexive Pronouns",
    subtitle: "Fill all Lesson 11 pronoun forms in order.",
    items: lessonElevenPronounItems
  }
};
lessonElevenEndingPractice.singular = lessonElevenEndingPractice.firstPerson;
lessonElevenEndingPractice.plural = lessonElevenEndingPractice.thirdPerson;
lessonElevenEndingPractice.both = lessonElevenEndingPractice.mixed;

const lessonTwelveEndingPractice = {
  present: {
    title: "Mittō Present Forms",
    subtitle: "Fill the present-tense third-conjugation forms in order.",
    items: lessonTwelvePresentVerbItems
  },
  imperfect: {
    title: "Mittō Imperfect Forms",
    subtitle: "Fill the imperfect-tense third-conjugation forms in order.",
    items: lessonTwelveImperfectVerbItems
  },
  future: {
    title: "Mittō Future Forms",
    subtitle: "Fill the future-tense third-conjugation forms in order.",
    items: lessonTwelveFutureVerbItems
  },
  mixed: {
    title: "Mittō Present, Imperfect, and Future Forms",
    subtitle: "Fill the third-conjugation verb forms by tense and person.",
    items: lessonTwelveVerbItems
  }
};
lessonTwelveEndingPractice.singular = lessonTwelveEndingPractice.present;
lessonTwelveEndingPractice.plural = lessonTwelveEndingPractice.imperfect;
lessonTwelveEndingPractice.both = lessonTwelveEndingPractice.mixed;

const lessonThirteenEndingPractice = {
  present: {
    title: "Audiō Present Forms",
    subtitle: "Fill the present-tense fourth-conjugation forms in order.",
    items: lessonThirteenPresentVerbItems
  },
  imperfect: {
    title: "Audiō Imperfect Forms",
    subtitle: "Fill the imperfect-tense fourth-conjugation forms in order.",
    items: lessonThirteenImperfectVerbItems
  },
  future: {
    title: "Audiō Future Forms",
    subtitle: "Fill the future-tense fourth-conjugation forms in order.",
    items: lessonThirteenFutureVerbItems
  },
  mixed: {
    title: "Audiō Present, Imperfect, and Future Forms",
    subtitle: "Fill the fourth-conjugation verb forms by tense and person.",
    items: lessonThirteenVerbItems
  }
};
lessonThirteenEndingPractice.singular = lessonThirteenEndingPractice.present;
lessonThirteenEndingPractice.plural = lessonThirteenEndingPractice.imperfect;
lessonThirteenEndingPractice.both = lessonThirteenEndingPractice.mixed;

const lessonFourteenEndingPractice = {
  present: {
    title: "Sum Present Forms",
    subtitle: "Fill the present-tense forms of sum in order.",
    items: lessonFourteenSumPresentItems
  },
  imperfect: {
    title: "Sum Imperfect Forms",
    subtitle: "Fill the imperfect-tense forms of sum in order.",
    items: lessonFourteenSumImperfectItems
  },
  future: {
    title: "Sum Future Forms",
    subtitle: "Fill the future-tense forms of sum in order.",
    items: lessonFourteenSumFutureItems
  },
  absum: {
    title: "Absum Forms",
    subtitle: "Fill the present, imperfect, and future forms of absum in order.",
    items: lessonFourteenAbsumItems
  },
  mixed: {
    title: "Sum and Absum Forms",
    subtitle: "Fill all Lesson 14 being and being-away forms in order.",
    items: lessonFourteenVerbItems
  }
};
lessonFourteenEndingPractice.singular = lessonFourteenEndingPractice.present;
lessonFourteenEndingPractice.plural = lessonFourteenEndingPractice.imperfect;
lessonFourteenEndingPractice.both = lessonFourteenEndingPractice.mixed;

const lessonFifteenEndingPractice = {
  perfect: {
    title: "Laudō Perfect Forms",
    subtitle: "Fill the perfect-tense active forms in order.",
    items: lessonFifteenPerfectVerbItems
  },
  pluperfect: {
    title: "Laudō Pluperfect Forms",
    subtitle: "Fill the pluperfect-tense active forms in order.",
    items: lessonFifteenPluperfectVerbItems
  },
  futurePerfect: {
    title: "Laudō Future Perfect Forms",
    subtitle: "Fill the future-perfect-tense active forms in order.",
    items: lessonFifteenFuturePerfectVerbItems
  },
  mixed: {
    title: "Laudō Perfect-System Forms",
    subtitle: "Fill the perfect, pluperfect, and future perfect active forms by person.",
    items: lessonFifteenVerbItems
  }
};
lessonFifteenEndingPractice.singular = lessonFifteenEndingPractice.perfect;
lessonFifteenEndingPractice.plural = lessonFifteenEndingPractice.pluperfect;
lessonFifteenEndingPractice.both = lessonFifteenEndingPractice.mixed;

const lessonSixteenEndingPractice = {
  nouns: {
    title: "Puer, Ager, and Vir Forms",
    subtitle: "Fill the Lesson 16 noun forms in order.",
    items: lessonSixteenNounItems
  },
  adjectives: {
    title: "Miser and Integer Forms",
    subtitle: "Fill the Lesson 16 adjective forms in order.",
    items: lessonSixteenAdjectiveItems
  },
  possessives: {
    title: "Possessive Adjective Forms",
    subtitle: "Fill the first- and second-person possessive adjective forms.",
    items: lessonSixteenPossessiveItems
  },
  mixed: {
    title: "Lesson 16 Nouns, Adjectives, and Possessives",
    subtitle: "Fill all Lesson 16 forms in order.",
    items: lessonSixteenFormItems
  }
};
lessonSixteenEndingPractice.singular = lessonSixteenEndingPractice.nouns;
lessonSixteenEndingPractice.plural = lessonSixteenEndingPractice.adjectives;
lessonSixteenEndingPractice.both = lessonSixteenEndingPractice.mixed;

const lessonSeventeenEndingPractice = {
  passiveSigns: {
    title: "Passive Personal Signs",
    subtitle: "Fill the passive personal signs in person order.",
    items: lessonSeventeenPassiveSignItems
  },
  present: {
    title: "Laudō Present Passive Forms",
    subtitle: "Fill the present passive forms of laudō in person order.",
    items: lessonSeventeenPresentPassiveItems
  },
  imperfect: {
    title: "Laudō Imperfect Passive Forms",
    subtitle: "Fill the imperfect passive forms of laudō in person order.",
    items: lessonSeventeenImperfectPassiveItems
  },
  future: {
    title: "Laudō Future Passive Forms",
    subtitle: "Fill the future passive forms of laudō in person order.",
    items: lessonSeventeenFuturePassiveItems
  },
  mixed: {
    title: "Laudō Present-System Passive Forms",
    subtitle: "Fill the passive signs and first-conjugation passive forms in order.",
    items: lessonSeventeenFormItems
  }
};
lessonSeventeenEndingPractice.singular = lessonSeventeenEndingPractice.present;
lessonSeventeenEndingPractice.plural = lessonSeventeenEndingPractice.imperfect;
lessonSeventeenEndingPractice.both = lessonSeventeenEndingPractice.mixed;

const lessonEighteenEndingPractice = {
  present: {
    title: "Moneō Present Passive Forms",
    subtitle: "Fill the present passive forms of moneō in person order.",
    items: lessonEighteenPresentPassiveItems
  },
  imperfect: {
    title: "Moneō Imperfect Passive Forms",
    subtitle: "Fill the imperfect passive forms of moneō in person order.",
    items: lessonEighteenImperfectPassiveItems
  },
  future: {
    title: "Moneō Future Passive Forms",
    subtitle: "Fill the future passive forms of moneō in person order.",
    items: lessonEighteenFuturePassiveItems
  },
  mixed: {
    title: "Moneō Present-System Passive Forms",
    subtitle: "Fill the second-conjugation passive forms in order.",
    items: lessonEighteenFormItems
  }
};
lessonEighteenEndingPractice.singular = lessonEighteenEndingPractice.present;
lessonEighteenEndingPractice.plural = lessonEighteenEndingPractice.imperfect;
lessonEighteenEndingPractice.both = lessonEighteenEndingPractice.mixed;

const lessonNineteenEndingPractice = {
  present: {
    title: "Mittō Present Passive Forms",
    subtitle: "Fill the present passive forms of mittō in person order.",
    items: lessonNineteenPresentPassiveItems
  },
  imperfect: {
    title: "Mittō Imperfect Passive Forms",
    subtitle: "Fill the imperfect passive forms of mittō in person order.",
    items: lessonNineteenImperfectPassiveItems
  },
  future: {
    title: "Mittō Future Passive Forms",
    subtitle: "Fill the future passive forms of mittō in person order.",
    items: lessonNineteenFuturePassiveItems
  },
  mixed: {
    title: "Mittō Present-System Passive Forms",
    subtitle: "Fill the third-conjugation passive forms in order.",
    items: lessonNineteenFormItems
  }
};
lessonNineteenEndingPractice.singular = lessonNineteenEndingPractice.present;
lessonNineteenEndingPractice.plural = lessonNineteenEndingPractice.imperfect;
lessonNineteenEndingPractice.both = lessonNineteenEndingPractice.mixed;

const lessonTwentyEndingPractice = {
  present: {
    title: "Audiō Present Passive Forms",
    subtitle: "Fill the present passive forms of audiō in person order.",
    items: lessonTwentyPresentPassiveItems
  },
  imperfect: {
    title: "Audiō Imperfect Passive Forms",
    subtitle: "Fill the imperfect passive forms of audiō in person order.",
    items: lessonTwentyImperfectPassiveItems
  },
  future: {
    title: "Audiō Future Passive Forms",
    subtitle: "Fill the future passive forms of audiō in person order.",
    items: lessonTwentyFuturePassiveItems
  },
  mixed: {
    title: "Audiō Present-System Passive Forms",
    subtitle: "Fill the fourth-conjugation passive forms in order.",
    items: lessonTwentyFormItems
  }
};
lessonTwentyEndingPractice.singular = lessonTwentyEndingPractice.present;
lessonTwentyEndingPractice.plural = lessonTwentyEndingPractice.imperfect;
lessonTwentyEndingPractice.both = lessonTwentyEndingPractice.mixed;

const lessonTwentyOneEndingPractice = {
  perfect: {
    title: "Laudō Perfect Passive Forms",
    subtitle: "Fill the perfect passive forms in person order.",
    items: lessonTwentyOnePerfectPassiveItems
  },
  agreement: {
    title: "Perfect Passive Agreement Forms",
    subtitle: "Fill the participle agreement forms in gender and number order.",
    items: lessonTwentyOneAgreementItems
  },
  pluperfect: {
    title: "Laudō Pluperfect Passive Forms",
    subtitle: "Fill the pluperfect passive forms in person order.",
    items: lessonTwentyOnePluperfectPassiveItems
  },
  futurePerfect: {
    title: "Laudō Future Perfect Passive Forms",
    subtitle: "Fill the future perfect passive forms in person order.",
    items: lessonTwentyOneFuturePerfectPassiveItems
  },
  mixed: {
    title: "Laudō Perfect-System Passive Forms",
    subtitle: "Fill the perfect, pluperfect, and future perfect passive forms in order.",
    items: lessonTwentyOneFormItems
  }
};
lessonTwentyOneEndingPractice.singular = lessonTwentyOneEndingPractice.perfect;
lessonTwentyOneEndingPractice.plural = lessonTwentyOneEndingPractice.pluperfect;
lessonTwentyOneEndingPractice.both = lessonTwentyOneEndingPractice.mixed;

const lessonTwentyTwoEndingPractice = {
  firstConjugation: {
    title: "Laudō Present Subjunctive Forms",
    subtitle: "Fill the first-conjugation present subjunctive forms in person order.",
    items: lessonTwentyTwoLaudoSubjunctiveItems
  },
  secondConjugation: {
    title: "Moneō Present Subjunctive Forms",
    subtitle: "Fill the second-conjugation present subjunctive forms in person order.",
    items: lessonTwentyTwoMoneoSubjunctiveItems
  },
  thirdConjugation: {
    title: "Mittō Present Subjunctive Forms",
    subtitle: "Fill the third-conjugation present subjunctive forms in person order.",
    items: lessonTwentyTwoMittoSubjunctiveItems
  },
  fourthConjugation: {
    title: "Audiō Present Subjunctive Forms",
    subtitle: "Fill the fourth-conjugation present subjunctive forms in person order.",
    items: lessonTwentyTwoAudioSubjunctiveItems
  },
  sum: {
    title: "Sum Present Subjunctive Forms",
    subtitle: "Fill the present subjunctive forms of sum in person order.",
    items: lessonTwentyTwoSumSubjunctiveItems
  },
  mixed: {
    title: "Present Subjunctive Active Forms",
    subtitle: "Fill present subjunctive forms from all four conjugations plus sum.",
    items: lessonTwentyTwoFormItems
  }
};
lessonTwentyTwoEndingPractice.singular = lessonTwentyTwoEndingPractice.firstConjugation;
lessonTwentyTwoEndingPractice.plural = lessonTwentyTwoEndingPractice.sum;
lessonTwentyTwoEndingPractice.both = lessonTwentyTwoEndingPractice.mixed;

const lessonTwentyThreeEndingPractice = {
  firstConjugation: {
    title: "Laudō Imperfect Subjunctive Forms",
    subtitle: "Fill the first-conjugation imperfect subjunctive forms in person order.",
    items: lessonTwentyThreeLaudoImperfectSubjunctiveItems
  },
  secondConjugation: {
    title: "Moneō Imperfect Subjunctive Forms",
    subtitle: "Fill the second-conjugation imperfect subjunctive forms in person order.",
    items: lessonTwentyThreeMoneoImperfectSubjunctiveItems
  },
  thirdConjugation: {
    title: "Mittō Imperfect Subjunctive Forms",
    subtitle: "Fill the third-conjugation imperfect subjunctive forms in person order.",
    items: lessonTwentyThreeMittoImperfectSubjunctiveItems
  },
  fourthConjugation: {
    title: "Audiō Imperfect Subjunctive Forms",
    subtitle: "Fill the fourth-conjugation imperfect subjunctive forms in person order.",
    items: lessonTwentyThreeAudioImperfectSubjunctiveItems
  },
  sum: {
    title: "Sum Imperfect Subjunctive Forms",
    subtitle: "Fill the imperfect subjunctive forms of sum in person order.",
    items: lessonTwentyThreeSumImperfectSubjunctiveItems
  },
  mixed: {
    title: "Imperfect Subjunctive Active Forms",
    subtitle: "Fill imperfect subjunctive forms from all four conjugations plus sum.",
    items: lessonTwentyThreeFormItems
  }
};
lessonTwentyThreeEndingPractice.singular = lessonTwentyThreeEndingPractice.firstConjugation;
lessonTwentyThreeEndingPractice.plural = lessonTwentyThreeEndingPractice.sum;
lessonTwentyThreeEndingPractice.both = lessonTwentyThreeEndingPractice.mixed;

const lessonTwentyFourEndingPractice = {
  masculine: {
    title: "Quī Masculine Relative Pronoun Forms",
    subtitle: "Fill the masculine relative pronoun forms in case order, singular then plural.",
    items: lessonTwentyFourRelativePronounMasculineItems
  },
  feminine: {
    title: "Quae Feminine Relative Pronoun Forms",
    subtitle: "Fill the feminine relative pronoun forms in case order, singular then plural.",
    items: lessonTwentyFourRelativePronounFeminineItems
  },
  neuter: {
    title: "Quod Neuter Relative Pronoun Forms",
    subtitle: "Fill the neuter relative pronoun forms in case order, singular then plural.",
    items: lessonTwentyFourRelativePronounNeuterItems
  },
  mixed: {
    title: "Qui, Quae, Quod Relative Pronoun Forms",
    subtitle: "Fill all relative pronoun forms in gender, number, and case order.",
    items: lessonTwentyFourFormItems
  }
};
lessonTwentyFourEndingPractice.singular = {
  title: "Singular Relative Pronoun Forms",
  subtitle: "Fill masculine, feminine, and neuter singular relative pronoun forms.",
  items: lessonTwentyFourFormItems.filter((item) => item.group.includes("Singular"))
};
lessonTwentyFourEndingPractice.plural = {
  title: "Plural Relative Pronoun Forms",
  subtitle: "Fill masculine, feminine, and neuter plural relative pronoun forms.",
  items: lessonTwentyFourFormItems.filter((item) => item.group.includes("Plural"))
};
lessonTwentyFourEndingPractice.both = lessonTwentyFourEndingPractice.mixed;

const lessonTwentyFiveEndingPractice = {
  adverbs: {
    title: "Direct Question Adverbs",
    subtitle: "Fill ubi, quō, unde, and cūr in question order.",
    items: lessonTwentyFiveQuestionAdverbItems
  },
  particles: {
    title: "Direct Question Particles",
    subtitle: "Fill -ne, num, and nōnne with the answers they expect.",
    items: lessonTwentyFiveQuestionParticleItems
  },
  pronounSingular: {
    title: "Quis/Quid Singular Forms",
    subtitle: "Fill singular interrogative pronoun forms in case order.",
    items: lessonTwentyFiveInterrogativePronounSingularItems
  },
  pronounPlural: {
    title: "Quis/Quid Plural Forms",
    subtitle: "Fill plural interrogative pronoun forms in case order.",
    items: lessonTwentyFiveInterrogativePronounPluralItems
  },
  adjective: {
    title: "Interrogative Adjective Phrases",
    subtitle: "Fill which/what adjective phrases in form order.",
    items: lessonTwentyFiveInterrogativeAdjectiveItems
  },
  mixed: {
    title: "Direct Question Words and Forms",
    subtitle: "Fill Lesson 25 direct-question words, pronouns, and adjective phrases.",
    items: lessonTwentyFiveFormItems
  }
};
lessonTwentyFiveEndingPractice.singular = lessonTwentyFiveEndingPractice.pronounSingular;
lessonTwentyFiveEndingPractice.plural = lessonTwentyFiveEndingPractice.pronounPlural;
lessonTwentyFiveEndingPractice.both = lessonTwentyFiveEndingPractice.mixed;

const lessonTwentySixEndingPractice = {
  laudoPerfect: {
    title: "Laudō Perfect Subjunctive Forms",
    subtitle: "Fill the perfect subjunctive forms of laudō in person order.",
    items: lessonTwentySixLaudoPerfectSubjunctiveItems
  },
  laudoPluperfect: {
    title: "Laudō Pluperfect Subjunctive Forms",
    subtitle: "Fill the pluperfect subjunctive forms of laudō in person order.",
    items: lessonTwentySixLaudoPluperfectSubjunctiveItems
  },
  mittoPerfect: {
    title: "Mittō Perfect Subjunctive Forms",
    subtitle: "Fill the perfect subjunctive forms of mittō in person order.",
    items: lessonTwentySixMittoPerfectSubjunctiveItems
  },
  mittoPluperfect: {
    title: "Mittō Pluperfect Subjunctive Forms",
    subtitle: "Fill the pluperfect subjunctive forms of mittō in person order.",
    items: lessonTwentySixMittoPluperfectSubjunctiveItems
  },
  sum: {
    title: "Sum Perfect-System Subjunctive Forms",
    subtitle: "Fill the perfect and pluperfect subjunctive forms of sum.",
    items: [
      ...lessonTwentySixSumPerfectSubjunctiveItems,
      ...lessonTwentySixSumPluperfectSubjunctiveItems
    ]
  },
  mixed: {
    title: "Perfect-System Subjunctive Active Forms",
    subtitle: "Fill Lesson 26 perfect and pluperfect subjunctive forms.",
    items: lessonTwentySixFormItems
  }
};
lessonTwentySixEndingPractice.singular = lessonTwentySixEndingPractice.laudoPerfect;
lessonTwentySixEndingPractice.plural = lessonTwentySixEndingPractice.laudoPluperfect;
lessonTwentySixEndingPractice.both = lessonTwentySixEndingPractice.mixed;

const lessonTwentySevenEndingPractice = {
  vocatives: {
    title: "Vocative Forms",
    subtitle: "Fill the forms used for direct address.",
    items: lessonTwentySevenVocativeItems
  },
  imperatives: {
    title: "Present Imperative Active",
    subtitle: "Fill singular and plural commands in verb order.",
    items: lessonTwentySevenImperativeItems
  },
  wishes: {
    title: "Wishes and Exhortations",
    subtitle: "Fill wish and let-us forms in order.",
    items: lessonTwentySevenWishHortatoryItems
  },
  mixed: {
    title: "Vocatives, Commands, and Wishes",
    subtitle: "Fill all Lesson 27 forms in order.",
    items: lessonTwentySevenFormItems
  }
};
lessonTwentySevenEndingPractice.singular = lessonTwentySevenEndingPractice.vocatives;
lessonTwentySevenEndingPractice.plural = lessonTwentySevenEndingPractice.imperatives;
lessonTwentySevenEndingPractice.both = lessonTwentySevenEndingPractice.mixed;

const lessonTwentyEightEndingPractice = {
  sui: {
    title: "Suī Reflexive Pronoun Forms",
    subtitle: "Fill the reflexive pronoun forms in case order.",
    items: lessonTwentyEightSuiItems
  },
  suus: {
    title: "Suus Possessive Forms",
    subtitle: "Fill suus, sua, suum forms and common case forms.",
    items: lessonTwentyEightSuusItems
  },
  idioms: {
    title: "Reflexive Idioms and Rules",
    subtitle: "Fill the Lesson 28 reflexive idioms and rule cues.",
    items: lessonTwentyEightIdiomItems
  },
  mixed: {
    title: "Suus and Suī Forms",
    subtitle: "Fill all Lesson 28 reflexive forms and patterns.",
    items: lessonTwentyEightFormItems
  }
};
lessonTwentyEightEndingPractice.singular = lessonTwentyEightEndingPractice.sui;
lessonTwentyEightEndingPractice.plural = lessonTwentyEightEndingPractice.suus;
lessonTwentyEightEndingPractice.both = lessonTwentyEightEndingPractice.mixed;

const lessonTwentyNineEndingPractice = {
  presentPassive: {
    title: "Present Passive Subjunctive",
    subtitle: "Fill present passive subjunctive forms in person order.",
    items: [
      ...lessonTwentyNineLaudoPresentPassiveSubjunctiveItems,
      ...lessonTwentyNineMittoPresentPassiveSubjunctiveItems
    ]
  },
  imperfectPassive: {
    title: "Imperfect Passive Subjunctive",
    subtitle: "Fill imperfect passive subjunctive forms in person order.",
    items: lessonTwentyNineLaudoImperfectPassiveSubjunctiveItems
  },
  perfectPassive: {
    title: "Perfect Passive Subjunctive",
    subtitle: "Fill perfect passive subjunctive forms in person order.",
    items: lessonTwentyNineLaudoPerfectPassiveSubjunctiveItems
  },
  pluperfectPassive: {
    title: "Pluperfect Passive Subjunctive",
    subtitle: "Fill pluperfect passive subjunctive forms in person order.",
    items: lessonTwentyNineLaudoPluperfectPassiveSubjunctiveItems
  },
  patterns: {
    title: "Cum, Causa, and Cause Patterns",
    subtitle: "Fill the Lesson 29 phrase patterns in order.",
    items: lessonTwentyNinePatternItems
  },
  mixed: {
    title: "Passive Subjunctive and Lesson 29 Patterns",
    subtitle: "Fill all Lesson 29 passive subjunctive forms and phrase patterns.",
    items: [
      ...lessonTwentyNineFormItems,
      ...lessonTwentyNinePatternItems
    ]
  }
};
lessonTwentyNineEndingPractice.singular = lessonTwentyNineEndingPractice.presentPassive;
lessonTwentyNineEndingPractice.plural = lessonTwentyNineEndingPractice.perfectPassive;
lessonTwentyNineEndingPractice.both = lessonTwentyNineEndingPractice.mixed;

const lessonThirtyEndingPractice = {
  agreement: {
    title: "Perfect Participle Agreement",
    subtitle: "Fill the laudātus, laudāta, laudātum agreement forms in order.",
    items: lessonThirtyParticipleAgreementItems
  },
  principalParts: {
    title: "Perfect Participle Principal Parts",
    subtitle: "Fill the model perfect participles passive from the fourth principal part.",
    items: lessonThirtyPrincipalPartItems
  },
  vocabularyParticiples: {
    title: "Lesson 30 Participles",
    subtitle: "Fill the new Lesson 30 participle forms and meanings.",
    items: lessonThirtyVocabularyParticipleItems
  },
  rules: {
    title: "Lesson 30 Participle Rules",
    subtitle: "Fill the Lesson 30 participle rule cues in order.",
    items: lessonThirtyParticipleRuleItems
  },
  mixed: {
    title: "Perfect Participle Passive Forms",
    subtitle: "Fill all Lesson 30 perfect participle forms and rule cues.",
    items: lessonThirtyFormItems
  }
};
lessonThirtyEndingPractice.singular = {
  title: "Perfect Participle Singular Agreement",
  subtitle: "Fill the singular laudātus, laudāta, laudātum forms in order.",
  items: lessonThirtyParticipleAgreementItems.filter((item) => item.group.includes("Singular"))
};
lessonThirtyEndingPractice.plural = {
  title: "Perfect Participle Plural Agreement",
  subtitle: "Fill the plural laudātī, laudātae, laudāta forms in order.",
  items: lessonThirtyParticipleAgreementItems.filter((item) => item.group.includes("Plural"))
};
lessonThirtyEndingPractice.both = lessonThirtyEndingPractice.mixed;

const lessonThirtyOneEndingPractice = {
  masculine: {
    title: "Hic Masculine Forms",
    subtitle: "Fill masculine hic forms in case order, singular then plural.",
    items: lessonThirtyOneHicMasculineItems
  },
  feminine: {
    title: "Haec Feminine Forms",
    subtitle: "Fill feminine haec forms in case order, singular then plural.",
    items: lessonThirtyOneHicFeminineItems
  },
  neuter: {
    title: "Hoc Neuter Forms",
    subtitle: "Fill neuter hoc forms in case order, singular then plural.",
    items: lessonThirtyOneHicNeuterItems
  },
  singular: {
    title: "Hic Singular Forms",
    subtitle: "Fill masculine, feminine, and neuter singular forms in case order.",
    items: lessonThirtyOneHicFormItems.filter((item) => item.group.includes("Singular"))
  },
  plural: {
    title: "Hic Plural Forms",
    subtitle: "Fill masculine, feminine, and neuter plural forms in case order.",
    items: lessonThirtyOneHicFormItems.filter((item) => item.group.includes("Plural"))
  },
  mixed: {
    title: "Hic, Haec, Hoc Forms",
    subtitle: "Fill all hic, haec, hoc forms and Lesson 31 phrase cues.",
    items: [
      ...lessonThirtyOneHicFormItems,
      ...lessonThirtyOneHicRuleItems
    ]
  }
};
lessonThirtyOneEndingPractice.both = lessonThirtyOneEndingPractice.mixed;

const cumulativeFirstDeclensionEndingItems = [
  ...firstDeclensionEndingPractice.singular.items.map((item) => ({ ...item, group: "1st Feminine Singular" })),
  ...firstDeclensionEndingPractice.plural.items.map((item) => ({ ...item, group: "1st Feminine Plural" }))
];

const cumulativeSecondDeclensionEndingItems = [
  ...secondDeclensionMasculineSingularItems.map((item) => ({ ...item, group: "2nd Masculine Singular" })),
  ...secondDeclensionMasculinePluralItems.map((item) => ({ ...item, group: "2nd Masculine Plural" })),
  ...secondDeclensionNeuterSingularItems.map((item) => ({ ...item, group: "2nd Neuter Singular" })),
  ...secondDeclensionNeuterPluralItems.map((item) => ({ ...item, group: "2nd Neuter Plural" }))
];

const cumulativeThirdDeclensionEndingItems = [
  ...thirdDeclensionLexSingularItems.map((item) => ({ ...item, group: "3rd Lex Singular" })),
  ...thirdDeclensionLexPluralItems.map((item) => ({ ...item, group: "3rd Lex Plural" })),
  ...thirdDeclensionParsSingularItems.map((item) => ({ ...item, group: "3rd Pars Singular" })),
  ...thirdDeclensionParsPluralItems.map((item) => ({ ...item, group: "3rd Pars Plural" })),
  ...thirdDeclensionFlumenSingularItems.map((item) => ({ ...item, group: "3rd Flumen Singular" })),
  ...thirdDeclensionFlumenPluralItems.map((item) => ({ ...item, group: "3rd Flumen Plural" }))
];

const cumulativeFourthDeclensionEndingItems = [
  ...fourthDeclensionSingularItems.map((item) => ({ ...item, group: "4th Portus Singular" })),
  ...fourthDeclensionPluralItems.map((item) => ({ ...item, group: "4th Portus Plural" }))
];

const cumulativeFifthDeclensionEndingItems = [
  ...fifthDeclensionSingularItems.map((item) => ({ ...item, group: "5th Rēs Singular" })),
  ...fifthDeclensionPluralItems.map((item) => ({ ...item, group: "5th Rēs Plural" }))
];

const cumulativeLessonSixSpecialPluralItems = [
  ...lessonSixNeuterPluralItems.map((item) => ({ ...item, group: "6th Castra / Impedimenta" })),
  ...lessonSixFirstPluralItems.map((item) => ({ ...item, group: "6th Gratiae / Copiae" }))
];

const cumulativeLessonSevenAdjectiveItems = [
  ...lessonSevenMasculineItems.map((item) => ({ ...item, group: item.group.replace("Magnus", "7th Magnus") })),
  ...lessonSevenFeminineItems.map((item) => ({ ...item, group: item.group.replace("Magna", "7th Magna") })),
  ...lessonSevenNeuterItems.map((item) => ({ ...item, group: item.group.replace("Magnum", "7th Magnum") }))
];

const cumulativeLessonEightAdjectiveItems = [
  ...lessonEightMasculineFeminineItems.map((item) => ({ ...item, group: item.group.replace("Gravis", "8th Gravis") })),
  ...lessonEightNeuterItems.map((item) => ({ ...item, group: item.group.replace("Grave", "8th Grave") }))
];

const cumulativeLessonNineVerbItems = lessonNineVerbItems.map((item) => ({
  ...item,
  group: item.group.replace("Laudō", "9th Laudō")
}));

const cumulativeLessonTenVerbItems = lessonTenVerbItems.map((item) => ({
  ...item,
  group: item.group.replace("Moneō", "10th Moneō")
}));

const cumulativeLessonElevenPronounItems = lessonElevenPronounItems.map((item) => ({
  ...item,
  group: `11th ${item.group}`
}));

const cumulativeLessonTwelveVerbItems = lessonTwelveVerbItems.map((item) => ({
  ...item,
  group: item.group.replace("Mittō", "12th Mittō")
}));

const cumulativeLessonThirteenVerbItems = lessonThirteenVerbItems.map((item) => ({
  ...item,
  group: item.group.replace("Audiō", "13th Audiō")
}));

const cumulativeLessonFourteenVerbItems = lessonFourteenVerbItems.map((item) => ({
  ...item,
  group: item.group.replace("Sum", "14th Sum").replace("Absum", "14th Absum")
}));

const cumulativeLessonFifteenVerbItems = lessonFifteenVerbItems.map((item) => ({
  ...item,
  group: item.group.replace("Laudō", "15th Laudō")
}));

const cumulativeLessonSixteenFormItems = lessonSixteenFormItems.map((item) => ({
  ...item,
  group: `16th ${item.group}`
}));

const cumulativeLessonSeventeenFormItems = lessonSeventeenFormItems.map((item) => ({
  ...item,
  group: `17th ${item.group}`
}));

const cumulativeLessonEighteenFormItems = lessonEighteenFormItems.map((item) => ({
  ...item,
  group: `18th ${item.group}`
}));

const cumulativeLessonNineteenFormItems = lessonNineteenFormItems.map((item) => ({
  ...item,
  group: `19th ${item.group}`
}));

const cumulativeLessonTwentyFormItems = lessonTwentyFormItems.map((item) => ({
  ...item,
  group: `20th ${item.group}`
}));

const cumulativeLessonTwentyOneFormItems = lessonTwentyOneFormItems.map((item) => ({
  ...item,
  group: `21st ${item.group}`
}));

const cumulativeLessonTwentyTwoFormItems = lessonTwentyTwoFormItems.map((item) => ({
  ...item,
  group: `22nd ${item.group}`
}));

const cumulativeLessonTwentyThreeFormItems = lessonTwentyThreeFormItems.map((item) => ({
  ...item,
  group: `23rd ${item.group}`
}));

const cumulativeLessonTwentyFourFormItems = lessonTwentyFourFormItems.map((item) => ({
  ...item,
  group: `24th ${item.group}`
}));

const cumulativeLessonTwentyFiveFormItems = lessonTwentyFiveFormItems.map((item) => ({
  ...item,
  group: `25th ${item.group}`
}));

const cumulativeLessonTwentySixFormItems = lessonTwentySixFormItems.map((item) => ({
  ...item,
  group: `26th ${item.group}`
}));

const cumulativeLessonTwentySevenFormItems = lessonTwentySevenFormItems.map((item) => ({
  ...item,
  group: `27th ${item.group}`
}));

const cumulativeLessonTwentyEightFormItems = lessonTwentyEightFormItems.map((item) => ({
  ...item,
  group: `28th ${item.group}`
}));

const cumulativeLessonTwentyNineFormItems = [
  ...lessonTwentyNineFormItems,
  ...lessonTwentyNinePatternItems
].map((item) => ({
  ...item,
  group: `29th ${item.group}`
}));

const cumulativeLessonThirtyFormItems = lessonThirtyFormItems.map((item) => ({
  ...item,
  group: `30th ${item.group}`
}));

const cumulativeLessonThirtyOneFormItems = [
  ...lessonThirtyOneHicFormItems,
  ...lessonThirtyOneHicRuleItems
].map((item) => ({
  ...item,
  group: `31st ${item.group}`
}));

const cumulativeEndingFinalPractice = {
  lesson1: {
    title: "First Feminine No-Hint Endings",
    subtitle: "Type the first feminine singular and plural endings with no hints.",
    finalNote: "Type the first feminine endings with no visible ending hint. When one is correct, the cursor moves forward.",
    items: cumulativeFirstDeclensionEndingItems,
    completionTitle: "The first feminine endings are yours.",
    completionNote: "You typed the first feminine endings without the visible ending hints."
  },
  lesson2: {
    title: "Cumulative No-Hint Endings",
    subtitle: "Type the first feminine, second masculine, and second neuter endings with no hints.",
    finalNote: "Type the first feminine, second masculine, and second neuter endings with no visible ending hints. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems
    ],
    completionTitle: "The cumulative endings are yours.",
    completionNote: "You typed the first feminine, second masculine, and second neuter endings without the visible ending hints."
  },
  lesson3: {
    title: "Lessons 1-3 Cumulative No-Hint Endings",
    subtitle: "Type the first, second, and third declension endings with no hints.",
    finalNote: "Type the first feminine, second masculine, second neuter, lex, pars, and flumen endings with no visible ending hints. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems
    ],
    completionTitle: "The Lessons 1-3 endings are yours.",
    completionNote: "You typed the first, second, and third declension endings without the visible ending hints."
  },
  lesson4: {
    title: "Lessons 1-4 Cumulative No-Hint Endings",
    subtitle: "Type the first, second, third, and fourth declension endings with no hints.",
    finalNote: "Type the first feminine, second masculine, second neuter, third-declension, and portus endings with no visible ending hints. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems
    ],
    completionTitle: "The Lessons 1-4 endings are yours.",
    completionNote: "You typed the first, second, third, and fourth declension endings without the visible ending hints."
  },
  lesson5: {
    title: "Lessons 1-5 Cumulative No-Hint Endings",
    subtitle: "Type the first through fifth declension endings with no hints.",
    finalNote: "Type the first feminine, second masculine, second neuter, third-declension, fourth-declension, and fifth-declension endings with no visible ending hints. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems
    ],
    completionTitle: "The Lessons 1-5 endings are yours.",
    completionNote: "You typed the first through fifth declension endings without the visible ending hints."
  },
  lesson6: {
    title: "Lessons 1-6 Cumulative No-Hint Endings",
    subtitle: "Type the first through fifth declension endings plus the Lesson 6 special plural patterns with no hints.",
    finalNote: "Type the first feminine, second masculine, second neuter, third-declension, fourth-declension, fifth-declension, and Lesson 6 special plural endings with no visible ending hints. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems
    ],
    completionTitle: "The Lessons 1-6 endings are yours.",
    completionNote: "You typed the first through fifth declension endings and the Lesson 6 special plural patterns without the visible ending hints."
  },
  lesson7: {
    title: "Lessons 1-7 Cumulative No-Hint Endings",
    subtitle: "Type all noun endings so far plus the magnus, magna, magnum adjective endings with no hints.",
    finalNote: "Type the noun endings from Lessons 1-6 and the first/second-declension adjective endings from Lesson 7 with no visible ending hints. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems
    ],
    completionTitle: "The Lessons 1-7 endings are yours.",
    completionNote: "You typed all earlier noun endings and the Lesson 7 adjective endings without the visible ending hints."
  },
  lesson8: {
    title: "Lessons 1-8 Cumulative No-Hint Endings",
    subtitle: "Type all noun and adjective endings through Lesson 8 with no hints.",
    finalNote: "Type the noun endings from Lessons 1-6, the first/second-declension adjective endings, and the gravis-type third-declension adjective endings with no visible ending hints. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems
    ],
    completionTitle: "The Lessons 1-8 endings are yours.",
    completionNote: "You typed all noun and adjective endings through Lesson 8 without the visible ending hints."
  },
  lesson9: {
    title: "Lessons 1-9 Cumulative No-Hint Forms",
    subtitle: "Type all noun and adjective endings plus the first-conjugation laudō forms with no hints.",
    finalNote: "Type the noun and adjective endings through Lesson 8, then the Lesson 9 laudō present, imperfect, and future forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems
    ],
    completionTitle: "The Lessons 1-9 forms are yours.",
    completionNote: "You typed all noun/adjective endings and the Lesson 9 first-conjugation forms without visible hints."
  },
  lesson10: {
    title: "Lessons 1-10 Cumulative No-Hint Forms",
    subtitle: "Type all noun and adjective endings plus first- and second-conjugation verb forms with no hints.",
    finalNote: "Type all noun/adjective endings through Lesson 8, then the laudō and moneō present, imperfect, and future forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems
    ],
    completionTitle: "The Lessons 1-10 forms are yours.",
    completionNote: "You typed all noun/adjective endings and the first two conjugation verb forms without visible hints."
  },
  lesson11: {
    title: "Lessons 1-11 Cumulative No-Hint Forms",
    subtitle: "Type noun/adjective endings, first and second conjugation forms, and Lesson 11 pronouns with no hints.",
    finalNote: "Type all forms through Lesson 10, then the Lesson 11 personal and reflexive pronoun forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems
    ],
    completionTitle: "The Lessons 1-11 forms are yours.",
    completionNote: "You typed all earlier forms and the Lesson 11 pronouns without visible hints."
  },
  lesson12: {
    title: "Lessons 1-12 Cumulative No-Hint Forms",
    subtitle: "Type all earlier forms plus the third-conjugation mittō forms with no hints.",
    finalNote: "Type all forms through Lesson 11, then the Lesson 12 mittō present, imperfect, and future forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems
    ],
    completionTitle: "The Lessons 1-12 forms are yours.",
    completionNote: "You typed all earlier forms and the third-conjugation mittō forms without visible hints."
  },
  lesson13: {
    title: "Lessons 1-13 Cumulative No-Hint Forms",
    subtitle: "Type all earlier forms plus the fourth-conjugation audiō forms with no hints.",
    finalNote: "Type all forms through Lesson 12, then the Lesson 13 audiō present, imperfect, and future forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems,
      ...cumulativeLessonThirteenVerbItems
    ],
    completionTitle: "The Lessons 1-13 forms are yours.",
    completionNote: "You typed all earlier forms and the fourth-conjugation audiō forms without visible hints."
  },
  lesson14: {
    title: "Lessons 1-14 Cumulative No-Hint Forms",
    subtitle: "Type all earlier forms plus sum and absum with no hints.",
    finalNote: "Type all forms through Lesson 13, then the Lesson 14 sum and absum forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems,
      ...cumulativeLessonThirteenVerbItems,
      ...cumulativeLessonFourteenVerbItems
    ],
    completionTitle: "The Lessons 1-14 forms are yours.",
    completionNote: "You typed all earlier forms plus sum and absum without visible hints."
  },
  lesson15: {
    title: "Lessons 1-15 Cumulative No-Hint Forms",
    subtitle: "Type all earlier forms plus the perfect-system active forms with no hints.",
    finalNote: "Type all forms through Lesson 14, then the Lesson 15 perfect, pluperfect, and future perfect forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems,
      ...cumulativeLessonThirteenVerbItems,
      ...cumulativeLessonFourteenVerbItems,
      ...cumulativeLessonFifteenVerbItems
    ],
    completionTitle: "The Lessons 1-15 forms are yours.",
    completionNote: "You typed all earlier forms and the perfect-system active forms without visible hints."
  },
  lesson16: {
    title: "Lessons 1-16 Cumulative No-Hint Forms",
    subtitle: "Type all earlier forms plus the Lesson 16 noun, adjective, and possessive forms with no hints.",
    finalNote: "Type all forms through Lesson 15, then the Lesson 16 puer, ager, vir, miser, integer, and possessive adjective forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems,
      ...cumulativeLessonThirteenVerbItems,
      ...cumulativeLessonFourteenVerbItems,
      ...cumulativeLessonFifteenVerbItems,
      ...cumulativeLessonSixteenFormItems
    ],
    completionTitle: "The Lessons 1-16 forms are yours.",
    completionNote: "You typed all earlier forms and the Lesson 16 forms without visible hints."
  },
  lesson17: {
    title: "Lessons 1-17 Cumulative No-Hint Forms",
    subtitle: "Type all earlier forms plus first-conjugation passive forms with no hints.",
    finalNote: "Type all forms through Lesson 16, then the Lesson 17 passive signs and laudō passive forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems,
      ...cumulativeLessonThirteenVerbItems,
      ...cumulativeLessonFourteenVerbItems,
      ...cumulativeLessonFifteenVerbItems,
      ...cumulativeLessonSixteenFormItems,
      ...cumulativeLessonSeventeenFormItems
    ],
    completionTitle: "The Lessons 1-17 forms are yours.",
    completionNote: "You typed all earlier forms and the first-conjugation passive forms without visible hints."
  },
  lesson18: {
    title: "Lessons 1-18 Cumulative No-Hint Forms",
    subtitle: "Type all earlier forms plus first- and second-conjugation passive forms with no hints.",
    finalNote: "Type all forms through Lesson 17, then the Lesson 18 moneō passive forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems,
      ...cumulativeLessonThirteenVerbItems,
      ...cumulativeLessonFourteenVerbItems,
      ...cumulativeLessonFifteenVerbItems,
      ...cumulativeLessonSixteenFormItems,
      ...cumulativeLessonSeventeenFormItems,
      ...cumulativeLessonEighteenFormItems
    ],
    completionTitle: "The Lessons 1-18 forms are yours.",
    completionNote: "You typed all earlier forms and the second-conjugation passive forms without visible hints."
  },
  lesson19: {
    title: "Lessons 1-19 Cumulative No-Hint Forms",
    subtitle: "Type all earlier forms plus first-, second-, and third-conjugation passive forms with no hints.",
    finalNote: "Type all forms through Lesson 18, then the Lesson 19 mittō passive forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems,
      ...cumulativeLessonThirteenVerbItems,
      ...cumulativeLessonFourteenVerbItems,
      ...cumulativeLessonFifteenVerbItems,
      ...cumulativeLessonSixteenFormItems,
      ...cumulativeLessonSeventeenFormItems,
      ...cumulativeLessonEighteenFormItems,
      ...cumulativeLessonNineteenFormItems
    ],
    completionTitle: "The Lessons 1-19 forms are yours.",
    completionNote: "You typed all earlier forms and the third-conjugation passive forms without visible hints."
  },
  lesson20: {
    title: "Lessons 1-20 Cumulative No-Hint Forms",
    subtitle: "Type all earlier forms plus fourth-conjugation passive forms with no hints.",
    finalNote: "Type all forms through Lesson 19, then the Lesson 20 audiō passive forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems,
      ...cumulativeLessonThirteenVerbItems,
      ...cumulativeLessonFourteenVerbItems,
      ...cumulativeLessonFifteenVerbItems,
      ...cumulativeLessonSixteenFormItems,
      ...cumulativeLessonSeventeenFormItems,
      ...cumulativeLessonEighteenFormItems,
      ...cumulativeLessonNineteenFormItems,
      ...cumulativeLessonTwentyFormItems
    ],
    completionTitle: "The Lessons 1-20 forms are yours.",
    completionNote: "You typed all earlier forms and the fourth-conjugation passive forms without visible hints."
  },
  lesson21: {
    title: "Lessons 1-21 Cumulative No-Hint Forms",
    subtitle: "Type all earlier forms plus the perfect-system passive forms with no hints.",
    finalNote: "Type all forms through Lesson 20, then the Lesson 21 perfect-system passive forms. When one is correct, the cursor moves forward.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems,
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems,
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems,
      ...cumulativeLessonThirteenVerbItems,
      ...cumulativeLessonFourteenVerbItems,
      ...cumulativeLessonFifteenVerbItems,
      ...cumulativeLessonSixteenFormItems,
      ...cumulativeLessonSeventeenFormItems,
      ...cumulativeLessonEighteenFormItems,
      ...cumulativeLessonNineteenFormItems,
      ...cumulativeLessonTwentyFormItems,
      ...cumulativeLessonTwentyOneFormItems
    ],
    completionTitle: "The Lessons 1-21 forms are yours.",
    completionNote: "You typed all earlier forms and the perfect-system passive forms without visible hints."
  }
};

cumulativeEndingFinalPractice.lesson22 = {
  title: "Lessons 1-22 Cumulative No-Hint Forms",
  subtitle: "Type all earlier forms plus the present subjunctive active forms with no hints.",
  finalNote: "Type all forms through Lesson 21, then the Lesson 22 present subjunctive forms. When one is correct, the cursor moves forward.",
  items: [
    ...cumulativeEndingFinalPractice.lesson21.items,
    ...cumulativeLessonTwentyTwoFormItems
  ],
  completionTitle: "The Lessons 1-22 forms are yours.",
  completionNote: "You typed all earlier forms and the present subjunctive active forms without visible hints."
};

cumulativeEndingFinalPractice.lesson23 = {
  title: "Lessons 1-23 Cumulative No-Hint Forms",
  subtitle: "Type all earlier forms plus the imperfect subjunctive active forms with no hints.",
  finalNote: "Type all forms through Lesson 22, then the Lesson 23 imperfect subjunctive forms. When one is correct, the cursor moves forward.",
  items: [
    ...cumulativeEndingFinalPractice.lesson22.items,
    ...cumulativeLessonTwentyThreeFormItems
  ],
  completionTitle: "The Lessons 1-23 forms are yours.",
  completionNote: "You typed all earlier forms and the imperfect subjunctive active forms without visible hints."
};

cumulativeEndingFinalPractice.lesson24 = {
  title: "Lessons 1-24 Cumulative No-Hint Forms",
  subtitle: "Type all earlier forms plus the Lesson 24 relative pronoun forms with no hints.",
  finalNote: "Type all forms through Lesson 23, then the Lesson 24 qui, quae, quod forms. When one is correct, the cursor moves forward.",
  items: [
    ...cumulativeEndingFinalPractice.lesson23.items,
    ...cumulativeLessonTwentyFourFormItems
  ],
  completionTitle: "The Lessons 1-24 forms are yours.",
  completionNote: "You typed all earlier forms and the relative pronoun forms without visible hints."
};

cumulativeEndingFinalPractice.lesson25 = {
  title: "Lessons 1-25 Cumulative No-Hint Forms",
  subtitle: "Type all earlier forms plus the Lesson 25 direct-question forms with no hints.",
  finalNote: "Type all forms through Lesson 24, then the Lesson 25 direct-question words and interrogative forms. When one is correct, the cursor moves forward.",
  items: [
    ...cumulativeEndingFinalPractice.lesson24.items,
    ...cumulativeLessonTwentyFiveFormItems
  ],
  completionTitle: "The Lessons 1-25 forms are yours.",
  completionNote: "You typed all earlier forms and the direct-question forms without visible hints."
};

cumulativeEndingFinalPractice.lesson26 = {
  title: "Lessons 1-26 Cumulative No-Hint Forms",
  subtitle: "Type all earlier forms plus the Lesson 26 perfect-system subjunctive forms with no hints.",
  finalNote: "Type all forms through Lesson 25, then the Lesson 26 perfect and pluperfect subjunctive forms. When one is correct, the cursor moves forward.",
  items: [
    ...cumulativeEndingFinalPractice.lesson25.items,
    ...cumulativeLessonTwentySixFormItems
  ],
  completionTitle: "The Lessons 1-26 forms are yours.",
  completionNote: "You typed all earlier forms and the perfect-system subjunctive forms without visible hints."
};

cumulativeEndingFinalPractice.lesson27 = {
  title: "Lessons 1-27 Cumulative No-Hint Forms",
  subtitle: "Type all earlier forms plus the Lesson 27 vocative, imperative, wish, and exhortation forms with no hints.",
  finalNote: "Type all forms through Lesson 26, then the Lesson 27 vocative, imperative, wish, and hortatory forms. When one is correct, the cursor moves forward.",
  items: [
    ...cumulativeEndingFinalPractice.lesson26.items,
    ...cumulativeLessonTwentySevenFormItems
  ],
  completionTitle: "The Lessons 1-27 forms are yours.",
  completionNote: "You typed all earlier forms and the Lesson 27 address, command, and wish forms without visible hints."
};

cumulativeEndingFinalPractice.lesson28 = {
  title: "Lessons 1-28 Cumulative No-Hint Forms",
  subtitle: "Type all earlier forms plus the Lesson 28 suus and sui reflexive forms with no hints.",
  finalNote: "Type all forms through Lesson 27, then the Lesson 28 reflexive pronoun, possessive adjective, and idiom forms. When one is correct, the cursor moves forward.",
  items: [
    ...cumulativeEndingFinalPractice.lesson27.items,
    ...cumulativeLessonTwentyEightFormItems
  ],
  completionTitle: "The Lessons 1-28 forms are yours.",
  completionNote: "You typed all earlier forms and the Lesson 28 suus/sui forms without visible hints."
};

cumulativeEndingFinalPractice.lesson29 = {
  title: "Lessons 1-29 Cumulative No-Hint Forms",
  subtitle: "Type all earlier forms plus the Lesson 29 passive subjunctive and phrase patterns with no hints.",
  finalNote: "Type all forms through Lesson 28, then the Lesson 29 passive subjunctive, cum, causa, and cause patterns. When one is correct, the cursor moves forward.",
  items: [
    ...cumulativeEndingFinalPractice.lesson28.items,
    ...cumulativeLessonTwentyNineFormItems
  ],
  completionTitle: "The Lessons 1-29 forms are yours.",
  completionNote: "You typed all earlier forms and the Lesson 29 passive subjunctive forms and phrase patterns without visible hints."
};

cumulativeEndingFinalPractice.lesson30 = {
  title: "Lessons 1-30 Cumulative No-Hint Forms",
  subtitle: "Type all earlier forms plus the Lesson 30 perfect participle passive forms with no hints.",
  finalNote: "Type all forms through Lesson 29, then the Lesson 30 perfect participle passive forms and rule cues. When one is correct, the cursor moves forward.",
  items: [
    ...cumulativeEndingFinalPractice.lesson29.items,
    ...cumulativeLessonThirtyFormItems
  ],
  completionTitle: "The Lessons 1-30 forms are yours.",
  completionNote: "You typed all earlier forms and the Lesson 30 perfect participle passive forms without visible hints."
};

cumulativeEndingFinalPractice.lesson31 = {
  title: "Lessons 1-31 Cumulative No-Hint Forms",
  subtitle: "Type all earlier forms plus the Lesson 31 hic, haec, hoc forms with no hints.",
  finalNote: "Type all forms through Lesson 30, then the Lesson 31 hic, haec, hoc forms and phrase cues. When one is correct, the cursor moves forward.",
  items: [
    ...cumulativeEndingFinalPractice.lesson30.items,
    ...cumulativeLessonThirtyOneFormItems
  ],
  completionTitle: "The Lessons 1-31 forms are yours.",
  completionNote: "You typed all earlier forms and the Lesson 31 hic, haec, hoc forms without visible hints."
};

const unitEndingFinalPractice = {
  unit1: {
    title: "Unit 1 No-Hint Forms",
    subtitle: "Type the Unit 1 noun endings and special plural patterns with no hints.",
    finalStepTitle: "Unit 1 Review · No-Hint Typing",
    finalNote: "Type the Unit 1 noun endings and special plural patterns. This review stays inside Unit 1.",
    items: [
      ...cumulativeFirstDeclensionEndingItems,
      ...cumulativeSecondDeclensionEndingItems,
      ...cumulativeThirdDeclensionEndingItems,
      ...cumulativeFourthDeclensionEndingItems,
      ...cumulativeFifthDeclensionEndingItems,
      ...cumulativeLessonSixSpecialPluralItems
    ],
    completionTitle: "Unit 1 Review complete.",
    completionNote: "You typed the Unit 1 noun endings and special plural patterns without visible hints."
  },
  unit2: {
    title: "Unit 2 No-Hint Forms",
    subtitle: "Type the Unit 2 adjective endings with no hints.",
    finalStepTitle: "Unit 2 Review · No-Hint Typing",
    finalNote: "Type the Unit 2 adjective endings. This review stays inside Unit 2.",
    items: [
      ...cumulativeLessonSevenAdjectiveItems,
      ...cumulativeLessonEightAdjectiveItems
    ],
    completionTitle: "Unit 2 Review complete.",
    completionNote: "You typed the Unit 2 adjective endings without visible hints."
  },
  unit3: {
    title: "Unit 3 No-Hint Forms",
    subtitle: "Type the Unit 3 verb and pronoun forms with no hints.",
    finalStepTitle: "Unit 3 Review · No-Hint Typing",
    finalNote: "Type the Unit 3 verb and pronoun forms. This review stays inside Unit 3.",
    items: [
      ...cumulativeLessonNineVerbItems,
      ...cumulativeLessonTenVerbItems,
      ...cumulativeLessonElevenPronounItems,
      ...cumulativeLessonTwelveVerbItems,
      ...cumulativeLessonThirteenVerbItems,
      ...cumulativeLessonFourteenVerbItems,
      ...cumulativeLessonFifteenVerbItems
    ],
    completionTitle: "Unit 3 Review complete.",
    completionNote: "You typed the Unit 3 verb and pronoun forms without visible hints."
  },
  unit4: {
    title: "Unit 4 No-Hint Forms",
    subtitle: "Type the Unit 4 noun, adjective, and possessive forms with no hints.",
    finalStepTitle: "Unit 4 Review · No-Hint Typing",
    finalNote: "Type the Unit 4 puer, ager, vir, miser, integer, and possessive adjective forms. This review stays inside Unit 4.",
    items: [
      ...cumulativeLessonSixteenFormItems
    ],
    completionTitle: "Unit 4 Review complete.",
    completionNote: "You typed the Unit 4 noun, adjective, and possessive forms without visible hints."
  },
  unit5: {
    title: "Unit 5 No-Hint Forms",
    subtitle: "Type the Unit 5 passive personal signs and passive verb forms with no hints.",
    finalStepTitle: "Unit 5 Review · No-Hint Typing",
    finalNote: "Type the Unit 5 passive signs plus the present-system and perfect-system passive forms. This review stays inside Unit 5.",
    items: [
      ...cumulativeLessonSeventeenFormItems,
      ...cumulativeLessonEighteenFormItems,
      ...cumulativeLessonNineteenFormItems,
      ...cumulativeLessonTwentyFormItems,
      ...cumulativeLessonTwentyOneFormItems
    ],
    completionTitle: "Unit 5 Review complete.",
    completionNote: "You typed the Unit 5 present-system and perfect-system passive forms without visible hints."
  },
  unit6: {
    title: "Unit 6 No-Hint Forms",
    subtitle: "Type the Unit 6 subjunctive and relative pronoun forms with no hints.",
    finalStepTitle: "Unit 6 Review · No-Hint Typing",
    finalNote: "Type the Unit 6 present subjunctive, imperfect subjunctive, and relative pronoun forms. This review stays inside Unit 6.",
    items: [
      ...cumulativeLessonTwentyTwoFormItems,
      ...cumulativeLessonTwentyThreeFormItems,
      ...cumulativeLessonTwentyFourFormItems
    ],
    completionTitle: "Unit 6 Review complete.",
    completionNote: "You typed the Unit 6 subjunctive and relative pronoun forms without visible hints."
  },
  unit7: {
    title: "Unit 7 No-Hint Forms",
    subtitle: "Type the Unit 7 direct-question and indirect-question forms with no hints.",
    finalStepTitle: "Unit 7 Review · No-Hint Typing",
    finalNote: "Type the Unit 7 question words, interrogative forms, and perfect-system subjunctive forms. This review stays inside Unit 7.",
    items: [
      ...cumulativeLessonTwentyFiveFormItems,
      ...cumulativeLessonTwentySixFormItems
    ],
    completionTitle: "Unit 7 Review complete.",
    completionNote: "You typed the Unit 7 question and perfect-system subjunctive forms without visible hints."
  },
  unit8: {
    title: "Unit 8 No-Hint Forms",
    subtitle: "Type the Unit 8 address, command, reflexive, and passive subjunctive forms with no hints.",
    finalStepTitle: "Unit 8 Review · No-Hint Typing",
    finalNote: "Type the Unit 8 vocative, imperative, suus/sui, passive subjunctive, cum, causa, and cause patterns. This review stays inside Unit 8.",
    items: [
      ...cumulativeLessonTwentySevenFormItems,
      ...cumulativeLessonTwentyEightFormItems,
      ...cumulativeLessonTwentyNineFormItems
    ],
    completionTitle: "Unit 8 Review complete.",
    completionNote: "You typed the Unit 8 address, command, reflexive, and passive subjunctive forms without visible hints."
  },
  unit9: {
    title: "Unit 9 No-Hint Forms",
    subtitle: "Type the Unit 9 perfect participle passive and hic, haec, hoc forms with no hints.",
    finalStepTitle: "Unit 9 Review · No-Hint Typing",
    finalNote: "Type the Unit 9 perfect participle passive forms plus hic, haec, hoc. This review stays inside Unit 9.",
    items: [
      ...cumulativeLessonThirtyFormItems,
      ...cumulativeLessonThirtyOneFormItems
    ],
    completionTitle: "Unit 9 Review complete.",
    completionNote: "You typed the Unit 9 participle and demonstrative forms without visible hints."
  }
};

const firstDeclensionNouns = [
  { stem: "terr", singular: "the land", plural: "the lands" },
  { stem: "port", singular: "the gate", plural: "the gates" },
  { stem: "Mari", singular: "Mary", plural: "" },
  { stem: "naut", singular: "the sailor", plural: "the sailors" },
  { stem: "victori", singular: "the victory", plural: "the victories" },
  { stem: "silv", singular: "the forest", plural: "the forests" },
  { stem: "glori", singular: "the glory", plural: "the glories" },
  { stem: "provinci", singular: "the province", plural: "the provinces" }
];

const wordFormPairs = firstDeclensionNouns.flatMap((noun) => {
  const singularForms = [
    [`${noun.stem}a`, `${noun.singular} (subject)`, "singular"],
    [`${noun.stem}ae`, `of ${noun.singular}`, "singular"],
    [`${noun.stem}ae`, `to/for ${noun.singular}`, "singular"],
    [`${noun.stem}am`, `${noun.singular} (direct object)`, "singular"],
    [`${noun.stem}a`, `by/with/from ${noun.singular}`, "singular"]
  ];

  if (!noun.plural) return singularForms;

  return [
    ...singularForms,
    [`${noun.stem}ae`, `${noun.plural} (subject)`, "plural"],
    [`${noun.stem}arum`, `of ${noun.plural}`, "plural"],
    [`${noun.stem}is`, `to/for ${noun.plural}`, "plural"],
    [`${noun.stem}as`, `${noun.plural} (direct object)`, "plural"],
    [`${noun.stem}is`, `by/with/from ${noun.plural}`, "plural"]
  ];
});

function getWordFormPairs(scope = "mixed", limit = 20) {
  const pool = scope === "mixed"
    ? wordFormPairs
    : wordFormPairs.filter(([, , formScope]) => formScope === scope);
  return shuffled(pool).slice(0, Math.min(limit, pool.length));
}

const lessonTwoVocabulary = [
  ["servus, servi", "servant, slave"],
  ["filius, filii", "son"],
  ["Deus, Dei", "God"],
  ["amicus, amici", "friend"],
  ["Christus, Christi", "Christ"],
  ["Christianus, Christiani", "Christian"],
  ["et", "and"],
  ["bellum, belli", "war"],
  ["caelum, caeli", "sky, heaven"],
  ["regnum, regni", "kingdom, royal power"],
  ["praemium, praemii", "reward"],
  ["periculum, periculi", "danger"],
  ["imperium, imperii", "command, power, empire"],
  ["dedit", "he, she, it gave"],
  ["dederunt", "they gave"],
  ["gladius, gladii", "sword"],
  ["sed", "but"],
  ["oppidum, oppidi", "town"],
  ["Gallia, Galliae", "Gaul"],
  ["Gallus, Galli", "a Gaul"],
  ["Romanus, Romani", "a Roman"],
  ["Roma, Romae", "Rome"],
  ["propter", "on account of"],
  ["cum", "with"],
  ["post", "after, behind"],
  ["in", "in, on"],
  ["sum", "I am"],
  ["sumus", "we are"],
  ["es", "you are"],
  ["estis", "you are (plural)"],
  ["est", "he, she, it is"],
  ["sunt", "they are"],
  ["quod", "because"],
  ["itaque", "and so"],
  ["incolunt", "they inhabit"],
  ["videtis", "you see"],
  ["vicerunt", "they conquered"],
  ["Optime!", "Excellent!"],
  ["Pessime!", "Very badly!"]
];

const lessonThreeVocabulary = [
  ["lex, legis", "law"],
  ["rex, regis", "king"],
  ["dux, ducis", "leader"],
  ["lux, lucis", "light"],
  ["homo, hominis", "man"],
  ["imperator, imperatoris", "commander in chief, general"],
  ["veritas, veritatis", "truth"],
  ["Caesar, Caesaris", "Caesar"],
  ["salus, salutis", "safety, welfare, salvation"],
  ["vox, vocis", "voice, cry"],
  ["audivit", "he, she, it heard"],
  ["virtus, virtutis", "strength, courage, virtue"],
  ["miles, militis", "soldier"],
  ["pax, pacis", "peace"],
  ["via, viae", "way, road"],
  ["populus, populi", "people"],
  ["muniverunt", "they fortified, they constructed"],
  ["pars, partis", "part"],
  ["collis, collis", "hill"],
  ["hostis, hostis", "enemy"],
  ["gens, gentis", "tribe, nation"],
  ["caedes, caedis", "slaughter"],
  ["frater, fratris", "brother"],
  ["pater, patris", "father"],
  ["mater, matris", "mother"],
  ["mons, montis", "mountain"],
  ["clamor, clamoris", "shouting, shout"],
  ["princeps, principis", "chief, leading man"],
  ["occiderunt", "they killed"],
  ["flumen, fluminis", "river"],
  ["iter, itineris", "journey, march"],
  ["corpus, corporis", "body"],
  ["vulnus, vulneris", "wound"],
  ["agmen, agminis", "column, army on the march"],
  ["nomen, nominis", "name"],
  ["mundus, mundi", "world"],
  ["erat", "he, she, it was; there was"],
  ["erant", "they were; there were"]
];

const lessonFourVocabulary = [
  ["adventus, adventūs", "arrival, coming"],
  ["equitatus, equitatūs", "cavalry"],
  ["exercitus, exercitūs", "army"],
  ["impetus, impetūs", "attack"],
  ["metus, metūs", "fear"],
  ["spiritus, spiritūs", "breath, spirit"],
  ["portus, portūs", "harbor"],
  ["senatus, senatūs", "senate"],
  ["in + accusative", "into, against, upon"],
  ["nunc", "now"],
  ["autem", "however"],
  ["fēcērunt", "they made, they did"],
  ["vēnit", "he, she, it came"],
  ["vēnērunt", "they came"]
];

const lessonFiveVocabulary = [
  ["rēs, reī", "thing, matter, affair"],
  ["fidēs, fideī", "faith, faithfulness"],
  ["aciēs, aciēī", "battle line"],
  ["spēs, speī", "hope"],
  ["posuērunt", "they put, they placed"]
];

const lessonSixVocabulary = [
  ["castra, castrorum", "camp"],
  ["impedimenta, impedimentorum", "baggage, baggage train"],
  ["gratia, gratiae", "favor, influence, grace"],
  ["gratiae, gratiarum", "thanks"],
  ["copia, copiae", "abundance, supply"],
  ["copiae, copiarum", "troops, forces"],
  ["gratias agunt", "they give thanks"],
  ["castra posuērunt", "they pitched camp"],
  ["cēpērunt", "they captured"],
  ["omnium", "of all"]
];

const lessonSevenVocabulary = [
  ["magnus, a, um", "great, large"],
  ["altus, a, um", "high, deep"],
  ["bonus, a, um", "good"],
  ["longus, a, um", "long"],
  ["malus, a, um", "bad"],
  ["multus, a, um", "much; plural, many"],
  ["sanctus, a, um", "holy, saint"],
  ["primus, a, um", "first"],
  ["angustus, a, um", "narrow"],
  ["reliquus, a, um", "remaining, the rest of"],
  ["tutus, a, um", "safe"],
  ["Romanus, a, um", "Roman"],
  ["Christianus, a, um", "Christian"],
  ["pro + ablative", "in front of, on behalf of"],
  ["inopia, inopiae", "scarcity, want"],
  ["dominus, domini", "master, Lord"],
  ["murus, muri", "wall"],
  ["frumentum, frumenti", "grain; plural, crops"],
  ["legio, legionis", "legion"]
];

const lessonEightVocabulary = [
  ["gravis, e", "heavy, severe, serious"],
  ["brevis, e", "short"],
  ["communis, e", "common"],
  ["difficilis, e", "difficult"],
  ["facilis, e", "easy"],
  ["fortis, e", "brave, strong"],
  ["nobilis, e", "noble, renowned"],
  ["omnis, e", "all, every"],
  ["cupidus, a, um + genitive", "eager, desirous"],
  ["plenus, a, um + genitive or ablative", "full"],
  ["finitimus, a, um + dative", "neighboring, next to"],
  ["similis, e + genitive or dative", "like, similar"],
  ["Jēsus, Jēsū", "Jesus"],
  ["et...et", "both...and"],
  ["quid", "what?"],
  ["prima luce", "at dawn"],
  ["urbs, urbis", "city"],
  ["pons, pontis", "bridge"],
  ["signum, signi", "standard, signal, sign"],
  ["eques, equitis", "horseman; plural, cavalry"]
];

const lessonNineVocabulary = [
  ["laudō, laudāre, laudāvī, laudātus", "praise"],
  ["occupō, occupāre, occupāvī, occupātus", "seize"],
  ["oppugnō, oppugnāre, oppugnāvī, oppugnātus", "attack, assault"],
  ["ōrō, ōrāre, ōrāvī, ōrātus", "beg, pray"],
  ["parō, parāre, parāvī, parātus", "prepare, get ready"],
  ["pugnō, pugnāre, pugnāvī", "fight"],
  ["superō, superāre, superāvī, superātus", "overcome, conquer, surpass"],
  ["portō, portāre, portāvī, portātus", "carry"],
  ["centuriō, centuriōnis", "centurion"],
  ["numerus, numeri", "number"],
  ["dō, dare, dedī, datus", "give"],
  ["vocō, vocāre, vocāvī, vocātus", "call"],
  ["interim", "meanwhile"],
  ["mors, mortis", "death"],
  ["hiberna, hibernōrum", "winter quarters"],
  ["ubi", "where?"],
  ["quis", "who?"],
  ["quid", "what?"],
  ["cur", "why?"],
  ["locus, loci", "place"],
  ["aliēnus, a, um", "another's, foreign, unfavorable"],
  ["ōrātiō, ōrātiōnis", "prayer, speech"],
  ["semper", "always"],
  ["sicut", "as"],
  ["in principiō", "in the beginning"],
  ["in saecula saeculōrum", "forever, world without end"],
  ["-ne", "question particle"]
];

const lessonTenVocabulary = [
  ["moneō, monēre, monuī, monitus", "warn, advise"],
  ["timeō, timēre, timuī", "fear"],
  ["terreō, terrēre, terruī, territus", "terrify"],
  ["habeō, habēre, habuī, habitus", "have"],
  ["arma, armōrum", "arms, weapons"]
];

const lessonElevenVocabulary = [
  ["ego, meī", "I"],
  ["nōs, nostrī", "we"],
  ["videō, vidēre, vīdī, vīsus", "see"],
  ["saepe", "often"],
  ["tū, tuī", "you (singular)"],
  ["vōs, vestrī", "you (plural)"],
  ["teneō, tenēre, tenuī, tentus", "hold"],
  ["moveō, movēre, mōvī, mōtus", "move"],
  ["tamen", "nevertheless"],
  ["neque", "and not, nor"],
  ["is, ea, id", "he, she, it"],
  ["sustineō, sustinēre, sustinuī, sustentus", "sustain, withstand"],
  ["fīnēs, fīnium", "territory"],
  ["suī", "himself, herself, itself, themselves"],
  ["etiam", "also"],
  ["enim", "for"]
];

const lessonTwelveVocabulary = [
  ["dūcō, dūcere, dūxī, ductus", "lead, guide"],
  ["gerō, gerere, gessī, gestus", "carry on, wage"],
  ["defendō, defendere, defendī, dēfēnsus", "defend"],
  ["īnstruō, īnstruere, īnstrūxī, īnstructus", "draw up, equip"],
  ["mittō, mittere, mīsī, missus", "send"],
  ["fortiter", "bravely, strongly"],
  ["vincō, vincere, vīcī, victus", "conquer"],
  ["petō, petere, petīvī, petītus", "seek, beg, request"],
  ["pellō, pellere, pepulī, pulsus", "drive, rout"],
  ["litterae, litterārum", "letter, dispatch"],
  ["pōnō, pōnere, posuī, positus", "put, place; pitch camp"],
  ["agō, agere, ēgī, actus", "drive, do, act"],
  ["ibi", "there"],
  ["contendō, contendere, contendī", "hasten, strive, contend"],
  ["dē + ablative", "concerning, about, from"]
];

const lessonThirteenVocabulary = [
  ["audiō, audīre, audīvī, audītus", "hear"],
  ["mūniō, mūnīre, mūnīvī, mūnītus", "fortify, construct"],
  ["veniō, venīre, vēnī, ventum", "come"],
  ["conveniō, convenīre, convēnī, conventum", "come together, assemble"],
  ["per + accusative", "through"]
];

const lessonFourteenVocabulary = [
  ["sum, esse, fuī, futūrus", "be, am"],
  ["undique", "from all sides, on all sides"],
  ["tēlum, tēlī", "dart, weapon"],
  ["absum, abesse, āfuī, āfutūrus", "be away, be distant"],
  ["longē", "far"]
];

const lessonFifteenVocabulary = [
  ["collocō, collocāre, collocāvī, collocātus", "place, station"],
  ["maneō, manēre, mānsī, mānsūrus", "remain"],
  ["compleō, complēre, complēvī, complētus", "fill"],
  ["cēdō, cēdere, cessī, cessūrus", "go, yield"],
  ["atque", "and"],
  ["ac", "and"],
  ["incitō, incitāre, incitāvī, incitātus", "incite, arouse"],
  ["adjuvō, adjuvāre, adjūvī, adjūtus", "help"],
  ["perturbō, perturbāre, perturbāvī, perturbātus", "confuse, disturb"],
  ["incendō, incendere, incendī, incēnsus", "burn, set fire to"],
  ["tum", "then, at that time"],
  ["servō, servāre, servāvī, servātus", "keep, save, preserve"]
];

const lessonSixteenVocabulary = [
  ["puer, puerī", "boy"],
  ["ager, agrī", "field"],
  ["vir, virī", "man"],
  ["Italia, Italiae", "Italy"],
  ["fortuna, fortunae", "fortune"],
  ["ita", "thus, so"],
  ["trans + accusative", "across"],
  ["miser, misera, miserum", "wretched"],
  ["liber, libera, liberum", "free"],
  ["integer, integra, integrum", "fresh, uninjured, whole"],
  ["proelium, proeliī", "battle"],
  ["cīvitās, cīvitātis", "state"],
  ["meus, mea, meum", "my, mine"],
  ["tuus, tua, tuum", "your, yours (one person)"],
  ["noster, nostra, nostrum", "our, ours"],
  ["vester, vestra, vestrum", "your, yours (more than one person)"]
];

const lessonSeventeenVocabulary = [
  ["administrō, administrāre, administrāvī, administrātus", "manage, administer, attend to"],
  ["appellō, appellāre, appellāvī, appellātus", "address, call upon"],
  ["confirmō, confirmāre, confirmāvī, confirmātus", "strengthen, encourage, confirm"],
  ["cōnservō, cōnservāre, cōnservāvī, cōnservātus", "preserve, keep, save, spare"],
  ["nam", "for, because"],
  ["ā or ab + ablative", "by a living agent; from with absum"],
  ["aut...aut", "either...or"],
  ["laudor", "I am praised"],
  ["laudātur", "he, she, or it is praised"],
  ["laudantur", "they are praised"]
];

const lessonEighteenVocabulary = [
  ["contineō, continēre, continuī, contentus", "hold in, keep, restrain, contain"],
  ["obtineō, obtinēre, obtinuī, obtentus", "hold, occupy, obtain"],
  ["aut", "or"],
  ["aut...aut", "either...or"],
  ["neque...neque", "neither...nor"],
  ["postea", "afterwards"],
  ["ablative of means", "the thing or tool by which something is done"],
  ["moneor", "I am warned"],
  ["monētur", "he, she, or it is warned"],
  ["monentur", "they are warned"]
];

const lessonNineteenVocabulary = [
  ["trādō, trādere, trādidī, trāditus", "hand over"],
  ["dīmittō, dīmittere, dīmīsī, dīmissus", "send away, dismiss"],
  ["occīdō, occīdere, occīdī, occīsus", "kill"],
  ["sine + ablative", "without"],
  ["ferē", "almost"],
  ["grātiās agō", "I give thanks, I thank"],
  ["mittor", "I am sent"],
  ["mittitur", "he, she, or it is sent"],
  ["mittuntur", "they are sent"],
  ["mittentur", "they will be sent"]
];

const lessonTwentyVocabulary = [
  ["audiō, audīre, audīvī, audītus", "hear"],
  ["mūniō, mūnīre, mūnīvī, mūnītus", "fortify; construct with road"],
  ["veniō, venīre, vēnī, ventum", "come"],
  ["conveniō, convenīre, convēnī, conventum", "come together, assemble"],
  ["cum + ablative", "with, in company with"],
  ["ablative of accompaniment", "with someone or something as company"],
  ["ablative of means", "by or with the thing used"],
  ["audior", "I am heard"],
  ["audītur", "he, she, or it is heard"],
  ["audiuntur", "they are heard"]
];

const lessonTwentyOneVocabulary = [
  ["perfect participle passive", "the fourth principal part used like an adjective"],
  ["perfect passive", "was or has been done"],
  ["pluperfect passive", "had been done"],
  ["future perfect passive", "will have been done"],
  ["vehementer", "greatly, violently"],
  ["explōrō, explōrāre, explōrāvī, explōrātus", "reconnoiter, find out"],
  ["premō, premere, pressī, pressus", "press, press hard"],
  ["retineō, retinēre, retinuī, retentus", "hold back, keep"],
  ["comparō, comparāre, comparāvī, comparātus", "prepare, get ready"],
  ["laudātus sum", "I was praised, I have been praised"]
];

const lessonTwentyTwoVocabulary = [
  ["subjunctive mood", "the mood used in purpose clauses and other special constructions"],
  ["ut + subjunctive", "so that, in order that"],
  ["nē + subjunctive", "lest, in order that not"],
  ["present subjunctive", "the subjunctive used in purpose clauses after primary main verbs"],
  ["primary tenses", "present, future, and future perfect"],
  ["vita, vitae", "life"],
  ["vallum, vallī", "wall, rampart"],
  ["amicitia, amicitiae", "friendship"],
  ["fossa, fossae", "ditch"],
  ["celeriter", "swiftly"],
  ["exspectō, exspectāre, exspectāvī, exspectātus", "wait for, await"],
  ["novus, nova, novum", "new"],
  ["diū", "a long time, long"],
  ["ācriter", "eagerly, fiercely, bitterly"],
  ["expugnō, expugnāre, expugnāvī, expugnātus", "take by storm, storm"]
];

const lessonTwentyThreeVocabulary = [
  ["imperfect subjunctive", "the subjunctive used in purpose clauses after secondary main verbs"],
  ["secondary tenses", "imperfect, perfect, and pluperfect"],
  ["tribūnus, tribūnī", "tribune"],
  ["cōnsilium, cōnsiliī", "plan, counsel"],
  ["concilium, conciliī", "council, assembly"],
  ["legātus, legātī", "envoy, lieutenant"],
  ["lātus, lāta, lātum", "wide"],
  ["facile", "easily"],
  ["labor, labōris", "toil, labor"],
  ["ōrdō, ōrdinis", "rank, order"],
  ["obsēs, obsidis", "hostage"],
  ["inter + accusative", "between, among"],
  ["statim", "at once, immediately"],
  ["obsidēs inter sē dant", "they exchange hostages"]
];

const lessonTwentyFourVocabulary = [
  ["quī, quae, quod", "who, which, that"],
  ["relative pronoun", "a pronoun that introduces a describing clause"],
  ["antecedent", "the noun or pronoun to which a relative pronoun refers"],
  ["auxilium, auxiliī", "help, aid"],
  ["auxilia, auxiliōrum", "reinforcements"],
  ["memoria, memoriae", "memory"],
  ["memoriā teneō", "keep in memory, remember"],
  ["ad + accusative", "to, up to, until, at, or for with certain adjectives"],
  ["usque", "all the way"],
  ["perveniō, pervenīre, pervēnī, perventum", "arrive, come through to"],
  ["pertineō, pertinēre, pertinui", "pertain to, stretch to"],
  ["parātus, parāta, parātum", "prepared, ready"],
  ["ūtilis, ūtile", "useful"],
  ["nox, noctis", "night"],
  ["dēdūcō, dēdūcere, dēdūxī, dēductus", "lead down, lead away"],
  ["cognōscō, cognōscere, cognōvī, cognitus", "learn, find out"],
  ["nuntius, nuntiī", "messenger, message"],
  ["nātūra, nātūrae", "nature"],
  ["-que", "and, attached to the word it follows"],
  ["iniūria, iniūriae", "wrong, injury"],
  ["diūtius", "longer"],
  ["facilius", "more easily"],
  ["appropinquō, appropinquāre, appropinquāvī", "draw near to, approach"],
  ["vastō, vastāre, vastāvī, vastātus", "lay waste, ravage"],
  ["custōs, custōdis", "guard"]
];

const lessonTwentyFiveVocabulary = [
  ["direct question", "a question addressed directly to someone"],
  ["interrogative adverb", "a question word such as ubi, unde, quō, or cūr"],
  ["ubi", "where? place in which"],
  ["quō", "where to? whither?"],
  ["unde", "from where? whence?"],
  ["cūr", "why?"],
  ["-ne", "asks a neutral yes/no question"],
  ["num", "surely not? expects no"],
  ["nōnne", "surely? expects yes"],
  ["certus, certa, certum", "certain, sure"],
  ["barbarus, barbara, barbarum", "barbarian, foreign"],
  ["apud + accusative", "among, at the house of"],
  ["plūrimum", "very much, most"],
  ["valeō, valēre, valuī, valitūrus", "be strong, be well, be influential"],
  ["cernō, cernere", "distinguish, perceive"],
  ["quis, quid", "who? what?"],
  ["ostendō, ostendere, ostendī, ostentus", "show"],
  ["trādūcō, trādūcere, trādūxī, trāductus", "lead across"],
  ["clam", "secretly"],
  ["socius, sociī", "ally"],
  ["quī, quae, quod", "which? what? as an interrogative adjective"],
  ["nōmen, nōminis", "name"]
];

const lessonTwentySixVocabulary = [
  ["perfect subjunctive active", "perfect stem plus -erim endings"],
  ["pluperfect subjunctive active", "perfect stem plus -issem endings"],
  ["indirect question", "a question depending on a verb of asking, saying, or thinking"],
  ["primary sequence", "present for same-time, perfect for before-time"],
  ["secondary sequence", "imperfect for same-time, pluperfect for before-time"],
  ["incolō, incolere, incoluī", "inhabit, dwell in"],
  ["cōnsistō, cōnsistere, cōnstitī", "halt, take a position"],
  ["rogō, rogāre, rogāvī, rogātus", "ask"],
  ["quaerō, quaerere, quaesīvī, quaesītus", "ask, seek"],
  ["quantus, quanta, quantum", "how great? how much?"],
  ["mūnītiō, mūnītiōnis", "fortification"],
  ["genus, generis", "kind, race"],
  ["aqua, aquae", "water"],
  ["cōgō, cōgere, coēgī, coāctus", "collect, force"],
  ["vērus, vēra, vērum", "true"],
  ["inquit", "he says, he said"],
  ["num / -ne in indirect questions", "whether, if"]
];

const lessonTwentySevenVocabulary = [
  ["vocative", "case of the person addressed"],
  ["avē!", "hail!"],
  ["mora, morae", "delay"],
  ["doceō, docēre, docuī, doctus", "teach, inform"],
  ["tollō, tollere, sustulī, sublātus", "lift up, take away"],
  ["peccātum, peccātī", "mistake, sin"],
  ["present imperative active", "command form built on the present stem"],
  ["regō, regere, rēxī, rēctus", "rule, direct"],
  ["at", "but"],
  ["mēns, mentis", "mind"],
  ["dolor, dolōris", "pain, sorrow"],
  ["miserēre nōbīs", "have mercy on us"],
  ["adōrō, adōrāre, adōrāvī, adōrātus", "adore"],
  ["wish", "present subjunctive translated with may"],
  ["utinam", "if only, may it be that"],
  ["hortatory subjunctive", "first-person plural subjunctive translated let us"]
];

const lessonTwentyEightVocabulary = [
  ["suī, sibi, sē, sē", "himself, herself, itself, themselves"],
  ["suus, sua, suum", "his own, her own, its own, their own"],
  ["direct reflexive", "refers to the subject of its own clause"],
  ["indirect reflexive", "in a subordinate clause, refers to the subject of the main verb"],
  ["eius", "his, her, or its when not reflexive"],
  ["eōrum", "their when not reflexive"],
  ["fuga, fugae", "flight"],
  ["dēdō, dēdere, dēdidī, deditus", "give up, surrender"],
  ["rēs pūblica, reī pūblicae", "republic, state"],
  ["dīligō, dīligere, dīlēxī, dīlēctus", "love"],
  ["ante + accusative", "before"],
  ["praesidium, praesidiī", "garrison, protection"],
  ["vērō", "in truth, but"],
  ["in fugam dare", "put to flight"],
  ["nōmine", "by name, named"]
];

const lessonTwentyNineVocabulary = [
  ["passive subjunctive", "subjunctive form with passive personal signs"],
  ["parvus, parva, parvum", "small, little"],
  ["mōs, mōris", "custom, habit"],
  ["manus, manūs", "hand, band of men"],
  ["causa, causae", "cause"],
  ["genitive + causa", "for the sake of"],
  ["mōre", "according to custom"],
  ["perfect passive subjunctive", "perfect passive participle plus subjunctive sum"],
  ["sciō, scīre, scīvī, scītus", "know"],
  ["pācō, pācāre, pācāvī, pācātus", "pacify"],
  ["subitō", "suddenly"],
  ["probō, probāre, probāvī, probātus", "approve"],
  ["relinquō, relinquere, relīquī, relictus", "leave, leave behind"],
  ["cum + subjunctive", "when, in secondary sequence"],
  ["ablative of cause", "ablative showing cause or reason"]
];

const lessonThirtyVocabulary = [
  ["participle", "verbal adjective"],
  ["perfect participle passive", "fourth principal part of regular verbs"],
  ["laudātus, laudāta, laudātum", "praised, having been praised"],
  ["monitus, monita, monitum", "warned, having been warned"],
  ["missus, missa, missum", "sent, having been sent"],
  ["audītus, audīta, audītum", "heard, having been heard"],
  ["addūcō, addūcere, addūxī, adductus", "lead to, lead on"],
  ["commoveō, commovēre, commōvī, commōtus", "alarm, arouse, move"],
  ["impediō, impedīre, impedīvī, impedītus", "hinder, impede"],
  ["auctōritās, auctōritātis", "authority, influence"],
  ["impedītus, a, um", "hindered, encumbered, difficult"],
  ["pugnātum est", "there was fighting, they fought"],
  ["cessūrus, a, um", "about to yield"],
  ["gender number case", "what a participle must match"]
];

const lessonThirtyOneVocabulary = [
  ["hic, haec, hoc", "this; plural these"],
  ["demonstrative pronoun", "pointing-out word"],
  ["huius", "of this"],
  ["huic", "to or for this"],
  ["hunc", "this masculine direct object"],
  ["hanc", "this feminine direct object"],
  ["hī", "these masculine as subject"],
  ["hae", "these feminine as subject"],
  ["haec", "this feminine or these neuter"],
  ["hīs", "to, for, by, with, or from these"],
  ["contra + accusative", "against, opposite"],
  ["ā tergō", "from the rear, in the rear"],
  ["ā fronte", "from the front, in the front"],
  ["summus, summa, summum", "highest, top of, very great"]
];

const secondDeclensionEndings = [
  ["us", "masc. Subject (sing.)"],
  ["i", "of"],
  ["o", "to, for"],
  ["um", "masc. direct object"],
  ["o", "by, with, from"],
  ["i", "masc. Subject (pl.)"],
  ["orum", "of (pl.)"],
  ["is", "to, for (pl.)"],
  ["os", "masc. direct object (pl.)"],
  ["is", "by, with, from (pl.)"],
  ["um", "neuter Subject/direct object (sing.)"],
  ["a", "neuter Subject/direct object (pl.)"]
];

const thirdDeclensionEndings = [
  ["—", "Subject (sing.)"],
  ["is", "of"],
  ["i", "to, for"],
  ["em", "m./f. direct object"],
  ["e", "by, with, from"],
  ["es", "m./f. Subject (pl.)"],
  ["um", "of (pl.) for lex-type words"],
  ["ium", "of (pl.) for pars-type words"],
  ["ibus", "to, for (pl.)"],
  ["es", "m./f. direct object (pl.)"],
  ["ibus", "by, with, from (pl.)"],
  ["—", "neuter Subject/direct object (sing.)"],
  ["a", "neuter Subject/direct object (pl.)"]
];

const fourthDeclensionEndings = [
  ["us", "masc. Subject (sing.)"],
  ["ūs", "of"],
  ["uī", "to, for"],
  ["um", "direct object"],
  ["ū", "by, with, from"],
  ["ūs", "masc. Subject (pl.)"],
  ["uum", "of (pl.)"],
  ["ibus", "to, for (pl.)"],
  ["ūs", "direct object (pl.)"],
  ["ibus", "by, with, from (pl.)"]
];

const fifthDeclensionEndings = [
  ["ēs", "Subject (sing.)"],
  ["eī", "of"],
  ["eī", "to, for"],
  ["em", "direct object"],
  ["ē", "by, with, from"],
  ["ēs", "Subject (pl.)"],
  ["ērum", "of (pl.)"],
  ["ēbus", "to, for (pl.)"],
  ["ēs", "direct object (pl.)"],
  ["ēbus", "by, with, from (pl.)"]
];

const firstDeclensionGrammarEndings = {
  singular: firstDeclensionEndings.slice(0, 5),
  plural: firstDeclensionEndings.slice(5),
  both: firstDeclensionEndings
};

const secondDeclensionGrammarEndings = {
  singular: [...secondDeclensionEndings.slice(0, 5), secondDeclensionEndings[10]],
  plural: [...secondDeclensionEndings.slice(5, 10), secondDeclensionEndings[11]],
  both: secondDeclensionEndings
};

const thirdDeclensionGrammarEndings = {
  singular: [...thirdDeclensionEndings.slice(0, 5), thirdDeclensionEndings[11]],
  plural: thirdDeclensionEndings.slice(5, 11).concat(thirdDeclensionEndings[12]),
  both: thirdDeclensionEndings
};

const fourthDeclensionGrammarEndings = {
  singular: fourthDeclensionEndings.slice(0, 5),
  plural: fourthDeclensionEndings.slice(5),
  both: fourthDeclensionEndings
};

const fifthDeclensionGrammarEndings = {
  singular: fifthDeclensionEndings.slice(0, 5),
  plural: fifthDeclensionEndings.slice(5),
  both: fifthDeclensionEndings
};

const lessonSixSpecialForms = [
  ["gratia", "favor, influence, or grace"],
  ["copia", "abundance or supply"],
  ["castra", "camp (plural form, singular meaning)"],
  ["impedimenta", "baggage or baggage train (plural form)"],
  ["gratiae", "thanks (when plural)"],
  ["copiae", "troops or forces (when plural)"],
  ["gratias agunt", "they give thanks"],
  ["castra posuērunt", "they pitched camp"]
];

const lessonSixGrammarEndings = {
  singular: lessonSixSpecialForms.slice(0, 2),
  plural: lessonSixSpecialForms.slice(2),
  both: lessonSixSpecialForms
};

const firstSecondAdjectiveEndings = [
  ["us", "masc. Subject (sing.)"],
  ["a", "fem. Subject (sing.)"],
  ["um", "neuter Subject/direct object (sing.)"],
  ["i", "of (sing.) for masculine/neuter"],
  ["ae", "of or to/for (sing.) for feminine"],
  ["o", "to/for or by/with/from (sing.) for masculine/neuter"],
  ["am", "fem. direct object (sing.)"],
  ["ā", "fem. by/with/from (sing.)"],
  ["i", "masc. Subject (pl.)"],
  ["ae", "fem. Subject (pl.)"],
  ["a", "neuter Subject/direct object (pl.)"],
  ["orum", "of (pl.) for masculine/neuter"],
  ["arum", "of (pl.) for feminine"],
  ["is", "to/for or by/with/from (pl.)"],
  ["os", "masc. direct object (pl.)"],
  ["as", "fem. direct object (pl.)"]
];

const firstSecondAdjectiveGrammarEndings = {
  singular: firstSecondAdjectiveEndings.slice(0, 8),
  plural: firstSecondAdjectiveEndings.slice(8),
  both: firstSecondAdjectiveEndings
};

const thirdAdjectiveEndings = [
  ["is", "m./f. Subject (sing.)"],
  ["e", "neuter Subject/direct object (sing.)"],
  ["is", "of (sing.)"],
  ["i", "to/for (sing.)"],
  ["em", "m./f. direct object (sing.)"],
  ["i", "by/with/from (sing.)"],
  ["es", "m./f. Subject (pl.)"],
  ["ia", "neuter Subject/direct object (pl.)"],
  ["ium", "of (pl.)"],
  ["ibus", "to/for (pl.)"],
  ["es", "m./f. direct object (pl.)"],
  ["ibus", "by/with/from (pl.)"]
];

const thirdAdjectiveGrammarEndings = {
  singular: thirdAdjectiveEndings.slice(0, 6),
  plural: thirdAdjectiveEndings.slice(6),
  both: thirdAdjectiveEndings
};

const secondDeclensionNouns = [
  { stem: "serv", singular: "the servant", plural: "the servants", gender: "masculine" },
  { stem: "fili", singular: "the son", plural: "the sons", gender: "masculine", nominative: "filius" },
  { stem: "amic", singular: "the friend", plural: "the friends", gender: "masculine" },
  { stem: "Christ", singular: "Christ", plural: "", gender: "masculine" },
  { stem: "Christian", singular: "the Christian", plural: "the Christians", gender: "masculine" },
  { stem: "gladi", singular: "the sword", plural: "the swords", gender: "masculine", nominative: "gladius" },
  { stem: "Gall", singular: "the Gaul", plural: "the Gauls", gender: "masculine" },
  { stem: "Roman", singular: "the Roman", plural: "the Romans", gender: "masculine" },
  { stem: "bell", singular: "the war", plural: "the wars", gender: "neuter" },
  { stem: "cael", singular: "heaven", plural: "the heavens", gender: "neuter" },
  { stem: "regn", singular: "the kingdom", plural: "the kingdoms", gender: "neuter" },
  { stem: "praemi", singular: "the reward", plural: "the rewards", gender: "neuter" },
  { stem: "pericul", singular: "the danger", plural: "the dangers", gender: "neuter" },
  { stem: "imperi", singular: "the empire", plural: "the empires", gender: "neuter" },
  { stem: "oppid", singular: "the town", plural: "the towns", gender: "neuter" }
];

const secondWordFormPairs = secondDeclensionNouns.flatMap((noun) => {
  if (noun.gender === "neuter") {
    const singular = [
      [`${noun.stem}um`, `${noun.singular} (subject or direct object)`, "singular"],
      [`${noun.stem}i`, `of ${noun.singular}`, "singular"],
      [`${noun.stem}o`, `to/for ${noun.singular}`, "singular"],
      [`${noun.stem}o`, `by/with/from ${noun.singular}`, "singular"]
    ];
    return [
      ...singular,
      [`${noun.stem}a`, `${noun.plural} (subject or direct object)`, "plural"],
      [`${noun.stem}orum`, `of ${noun.plural}`, "plural"],
      [`${noun.stem}is`, `to/for ${noun.plural}`, "plural"],
      [`${noun.stem}is`, `by/with/from ${noun.plural}`, "plural"]
    ];
  }

  const nominative = noun.nominative || `${noun.stem}us`;
  const singular = [
    [nominative, `${noun.singular} (subject)`, "singular"],
    [`${noun.stem}i`, `of ${noun.singular}`, "singular"],
    [`${noun.stem}o`, `to/for ${noun.singular}`, "singular"],
    [`${noun.stem}um`, `${noun.singular} (direct object)`, "singular"],
    [`${noun.stem}o`, `by/with/from ${noun.singular}`, "singular"]
  ];

  if (!noun.plural) return singular;

  return [
    ...singular,
    [`${noun.stem}i`, `${noun.plural} (subject)`, "plural"],
    [`${noun.stem}orum`, `of ${noun.plural}`, "plural"],
    [`${noun.stem}is`, `to/for ${noun.plural}`, "plural"],
    [`${noun.stem}os`, `${noun.plural} (direct object)`, "plural"],
    [`${noun.stem}is`, `by/with/from ${noun.plural}`, "plural"]
  ];
});

const thirdDeclensionNouns = [
  {
    singular: "the law",
    plural: "the laws",
    pattern: "lex",
    forms: {
      singular: { nominative: "lex", genitive: "legis", dative: "legi", accusative: "legem", ablative: "lege" },
      plural: { nominative: "leges", genitive: "legum", dative: "legibus", accusative: "leges", ablative: "legibus" }
    }
  },
  {
    singular: "the king",
    plural: "the kings",
    pattern: "lex",
    forms: {
      singular: { nominative: "rex", genitive: "regis", dative: "regi", accusative: "regem", ablative: "rege" },
      plural: { nominative: "reges", genitive: "regum", dative: "regibus", accusative: "reges", ablative: "regibus" }
    }
  },
  {
    singular: "the leader",
    plural: "the leaders",
    pattern: "lex",
    forms: {
      singular: { nominative: "dux", genitive: "ducis", dative: "duci", accusative: "ducem", ablative: "duce" },
      plural: { nominative: "duces", genitive: "ducum", dative: "ducibus", accusative: "duces", ablative: "ducibus" }
    }
  },
  {
    singular: "the man",
    plural: "the men",
    pattern: "lex",
    forms: {
      singular: { nominative: "homo", genitive: "hominis", dative: "homini", accusative: "hominem", ablative: "homine" },
      plural: { nominative: "homines", genitive: "hominum", dative: "hominibus", accusative: "homines", ablative: "hominibus" }
    }
  },
  {
    singular: "the general",
    plural: "the generals",
    pattern: "lex",
    forms: {
      singular: { nominative: "imperator", genitive: "imperatoris", dative: "imperatori", accusative: "imperatorem", ablative: "imperatore" },
      plural: { nominative: "imperatores", genitive: "imperatorum", dative: "imperatoribus", accusative: "imperatores", ablative: "imperatoribus" }
    }
  },
  {
    singular: "the truth",
    plural: "",
    pattern: "lex",
    forms: {
      singular: { nominative: "veritas", genitive: "veritatis", dative: "veritati", accusative: "veritatem", ablative: "veritate" }
    }
  },
  {
    singular: "the part",
    plural: "the parts",
    pattern: "pars",
    forms: {
      singular: { nominative: "pars", genitive: "partis", dative: "parti", accusative: "partem", ablative: "parte" },
      plural: { nominative: "partes", genitive: "partium", dative: "partibus", accusative: "partes", ablative: "partibus" }
    }
  },
  {
    singular: "the hill",
    plural: "the hills",
    pattern: "pars",
    forms: {
      singular: { nominative: "collis", genitive: "collis", dative: "colli", accusative: "collem", ablative: "colle" },
      plural: { nominative: "colles", genitive: "collium", dative: "collibus", accusative: "colles", ablative: "collibus" }
    }
  },
  {
    singular: "the enemy",
    plural: "the enemies",
    pattern: "pars",
    forms: {
      singular: { nominative: "hostis", genitive: "hostis", dative: "hosti", accusative: "hostem", ablative: "hoste" },
      plural: { nominative: "hostes", genitive: "hostium", dative: "hostibus", accusative: "hostes", ablative: "hostibus" }
    }
  },
  {
    singular: "the tribe",
    plural: "the tribes",
    pattern: "pars",
    forms: {
      singular: { nominative: "gens", genitive: "gentis", dative: "genti", accusative: "gentem", ablative: "gente" },
      plural: { nominative: "gentes", genitive: "gentium", dative: "gentibus", accusative: "gentes", ablative: "gentibus" }
    }
  },
  {
    singular: "the brother",
    plural: "the brothers",
    pattern: "lex",
    forms: {
      singular: { nominative: "frater", genitive: "fratris", dative: "fratri", accusative: "fratrem", ablative: "fratre" },
      plural: { nominative: "fratres", genitive: "fratrum", dative: "fratribus", accusative: "fratres", ablative: "fratribus" }
    }
  },
  {
    singular: "the mother",
    plural: "the mothers",
    pattern: "lex",
    forms: {
      singular: { nominative: "mater", genitive: "matris", dative: "matri", accusative: "matrem", ablative: "matre" },
      plural: { nominative: "matres", genitive: "matrum", dative: "matribus", accusative: "matres", ablative: "matribus" }
    }
  },
  {
    singular: "the mountain",
    plural: "the mountains",
    pattern: "pars",
    forms: {
      singular: { nominative: "mons", genitive: "montis", dative: "monti", accusative: "montem", ablative: "monte" },
      plural: { nominative: "montes", genitive: "montium", dative: "montibus", accusative: "montes", ablative: "montibus" }
    }
  },
  {
    singular: "the chief",
    plural: "the chiefs",
    pattern: "lex",
    forms: {
      singular: { nominative: "princeps", genitive: "principis", dative: "principi", accusative: "principem", ablative: "principe" },
      plural: { nominative: "principes", genitive: "principum", dative: "principibus", accusative: "principes", ablative: "principibus" }
    }
  },
  {
    singular: "the river",
    plural: "the rivers",
    pattern: "flumen",
    neuter: true,
    forms: {
      singular: { nominative: "flumen", genitive: "fluminis", dative: "flumini", accusative: "flumen", ablative: "flumine" },
      plural: { nominative: "flumina", genitive: "fluminum", dative: "fluminibus", accusative: "flumina", ablative: "fluminibus" }
    }
  },
  {
    singular: "the journey",
    plural: "the journeys",
    pattern: "flumen",
    neuter: true,
    forms: {
      singular: { nominative: "iter", genitive: "itineris", dative: "itineri", accusative: "iter", ablative: "itinere" },
      plural: { nominative: "itinera", genitive: "itinerum", dative: "itineribus", accusative: "itinera", ablative: "itineribus" }
    }
  },
  {
    singular: "the body",
    plural: "the bodies",
    pattern: "flumen",
    neuter: true,
    forms: {
      singular: { nominative: "corpus", genitive: "corporis", dative: "corpori", accusative: "corpus", ablative: "corpore" },
      plural: { nominative: "corpora", genitive: "corporum", dative: "corporibus", accusative: "corpora", ablative: "corporibus" }
    }
  },
  {
    singular: "the wound",
    plural: "the wounds",
    pattern: "flumen",
    neuter: true,
    forms: {
      singular: { nominative: "vulnus", genitive: "vulneris", dative: "vulneri", accusative: "vulnus", ablative: "vulnere" },
      plural: { nominative: "vulnera", genitive: "vulnerum", dative: "vulneribus", accusative: "vulnera", ablative: "vulneribus" }
    }
  },
  {
    singular: "the column",
    plural: "the columns",
    pattern: "flumen",
    neuter: true,
    forms: {
      singular: { nominative: "agmen", genitive: "agminis", dative: "agmini", accusative: "agmen", ablative: "agmine" },
      plural: { nominative: "agmina", genitive: "agminum", dative: "agminibus", accusative: "agmina", ablative: "agminibus" }
    }
  },
  {
    singular: "the name",
    plural: "the names",
    pattern: "flumen",
    neuter: true,
    forms: {
      singular: { nominative: "nomen", genitive: "nominis", dative: "nomini", accusative: "nomen", ablative: "nomine" },
      plural: { nominative: "nomina", genitive: "nominum", dative: "nominibus", accusative: "nomina", ablative: "nominibus" }
    }
  }
];

const thirdWordFormPairs = thirdDeclensionNouns.flatMap((noun) => {
  const { singular, plural, forms } = noun;
  const singularPairs = noun.neuter
    ? [
      [forms.singular.nominative, `${singular} (subject or direct object)`, "singular"],
      [forms.singular.genitive, `of ${singular}`, "singular"],
      [forms.singular.dative, `to/for ${singular}`, "singular"],
      [forms.singular.ablative, `by/with/from ${singular}`, "singular"]
    ]
    : [
      [forms.singular.nominative, `${singular} (subject)`, "singular"],
      [forms.singular.genitive, `of ${singular}`, "singular"],
      [forms.singular.dative, `to/for ${singular}`, "singular"],
      [forms.singular.accusative, `${singular} (direct object)`, "singular"],
      [forms.singular.ablative, `by/with/from ${singular}`, "singular"]
    ];

  if (!plural || !forms.plural) return singularPairs;

  const pluralPairs = noun.neuter
    ? [
      [forms.plural.nominative, `${plural} (subject or direct object)`, "plural"],
      [forms.plural.genitive, `of ${plural}`, "plural"],
      [forms.plural.dative, `to/for ${plural}`, "plural"],
      [forms.plural.ablative, `by/with/from ${plural}`, "plural"]
    ]
    : [
      [forms.plural.nominative, `${plural} (subject)`, "plural"],
      [forms.plural.genitive, `of ${plural}`, "plural"],
      [forms.plural.dative, `to/for ${plural}`, "plural"],
      [forms.plural.accusative, `${plural} (direct object)`, "plural"],
      [forms.plural.ablative, `by/with/from ${plural}`, "plural"]
    ];

  return [...singularPairs, ...pluralPairs];
});

const fourthDeclensionNouns = [
  { stem: "advent", singular: "the arrival/coming", plural: "" },
  { stem: "equitat", singular: "the cavalry", plural: "" },
  { stem: "exercit", singular: "the army", plural: "the armies" },
  { stem: "impet", singular: "the attack", plural: "the attacks" },
  { stem: "met", singular: "the fear", plural: "" },
  { stem: "spirit", singular: "the breath/spirit", plural: "the breaths/spirits" },
  { stem: "port", singular: "the harbor", plural: "the harbors" },
  { stem: "senat", singular: "the senate", plural: "the senates" }
];

const fourthWordFormPairs = fourthDeclensionNouns.flatMap((noun) => {
  const singularPairs = [
    [`${noun.stem}us`, `${noun.singular} (subject)`, "singular"],
    [`${noun.stem}ūs`, `of ${noun.singular}`, "singular"],
    [`${noun.stem}uī`, `to/for ${noun.singular}`, "singular"],
    [`${noun.stem}um`, `${noun.singular} (direct object)`, "singular"],
    [`${noun.stem}ū`, `by/with/from ${noun.singular}`, "singular"]
  ];

  if (!noun.plural) return singularPairs;

  return [
    ...singularPairs,
    [`${noun.stem}ūs`, `${noun.plural} (subject)`, "plural"],
    [`${noun.stem}uum`, `of ${noun.plural}`, "plural"],
    [`${noun.stem}ibus`, `to/for ${noun.plural}`, "plural"],
    [`${noun.stem}ūs`, `${noun.plural} (direct object)`, "plural"],
    [`${noun.stem}ibus`, `by/with/from ${noun.plural}`, "plural"]
  ];
});

const fifthDeclensionNouns = [
  {
    singular: "the thing/matter/affair",
    plural: "the things/matters/affairs",
    forms: {
      singular: { nominative: "rēs", genitive: "reī", dative: "reī", accusative: "rem", ablative: "rē" },
      plural: { nominative: "rēs", genitive: "rērum", dative: "rēbus", accusative: "rēs", ablative: "rēbus" }
    }
  },
  {
    singular: "faith/faithfulness",
    plural: "",
    forms: {
      singular: { nominative: "fidēs", genitive: "fideī", dative: "fideī", accusative: "fidem", ablative: "fidē" }
    }
  },
  {
    singular: "hope",
    plural: "",
    forms: {
      singular: { nominative: "spēs", genitive: "speī", dative: "speī", accusative: "spem", ablative: "spē" }
    }
  },
  {
    singular: "the battle line",
    plural: "the battle lines",
    forms: {
      singular: { nominative: "aciēs", genitive: "acieī", dative: "acieī", accusative: "aciem", ablative: "aciē" },
      plural: { nominative: "aciēs", genitive: "aciērum", dative: "aciēbus", accusative: "aciēs", ablative: "aciēbus" }
    }
  }
];

const fifthWordFormPairs = fifthDeclensionNouns.flatMap((noun) => {
  const { singular, plural, forms } = noun;
  const singularPairs = [
    [forms.singular.nominative, `${singular} (subject)`, "singular"],
    [forms.singular.genitive, `of ${singular}`, "singular"],
    [forms.singular.dative, `to/for ${singular}`, "singular"],
    [forms.singular.accusative, `${singular} (direct object)`, "singular"],
    [forms.singular.ablative, `by/with/from ${singular}`, "singular"]
  ];

  if (!plural || !forms.plural) return singularPairs;

  return [
    ...singularPairs,
    [forms.plural.nominative, `${plural} (subject)`, "plural"],
    [forms.plural.genitive, `of ${plural}`, "plural"],
    [forms.plural.dative, `to/for ${plural}`, "plural"],
    [forms.plural.accusative, `${plural} (direct object)`, "plural"],
    [forms.plural.ablative, `by/with/from ${plural}`, "plural"]
  ];
});

const lessonSixWordFormPairs = [
  ["castra", "the camp (subject; plural form, singular meaning)", "plural"],
  ["castrorum", "of the camp", "plural"],
  ["castris", "to/for the camp", "plural"],
  ["castra", "the camp (direct object; plural form, singular meaning)", "plural"],
  ["castris", "by/with/from the camp", "plural"],
  ["impedimenta", "the baggage or baggage train (subject)", "plural"],
  ["impedimentorum", "of the baggage or baggage train", "plural"],
  ["impedimentis", "to/for the baggage or baggage train", "plural"],
  ["impedimenta", "the baggage or baggage train (direct object)", "plural"],
  ["impedimentis", "by/with/from the baggage or baggage train", "plural"],
  ["gratia", "favor, influence, or grace (subject)", "singular"],
  ["gratiae", "of favor, influence, or grace", "singular"],
  ["gratiae", "to/for favor, influence, or grace", "singular"],
  ["gratiam", "favor, influence, or grace (direct object)", "singular"],
  ["gratiā", "by/with/from favor, influence, or grace", "singular"],
  ["gratiae", "thanks (subject)", "plural"],
  ["gratiarum", "of thanks", "plural"],
  ["gratiis", "to/for thanks", "plural"],
  ["gratias", "thanks (direct object)", "plural"],
  ["gratiis", "by/with/from thanks", "plural"],
  ["copia", "abundance or supply (subject)", "singular"],
  ["copiae", "of abundance or supply", "singular"],
  ["copiae", "to/for abundance or supply", "singular"],
  ["copiam", "abundance or supply (direct object)", "singular"],
  ["copiā", "by/with/from abundance or supply", "singular"],
  ["copiae", "troops or forces (subject)", "plural"],
  ["copiarum", "of the troops or forces", "plural"],
  ["copiis", "to/for the troops or forces", "plural"],
  ["copias", "troops or forces (direct object)", "plural"],
  ["copiis", "by/with/from the troops or forces", "plural"],
  ["silvae", "woods (subject; plural form with familiar meaning)", "plural"],
  ["hostes", "enemy or enemies (subject or direct object)", "plural"]
];

const lessonSevenWordFormPairs = [
  ["magnus exercitus", "the large army (subject)", "singular"],
  ["magnum bellum", "the great war (subject or direct object)", "singular"],
  ["magnam gentem", "the large tribe (direct object)", "singular"],
  ["in alto flumine", "in the deep river", "singular"],
  ["cum homine bono", "with a good man", "singular"],
  ["nauta malus", "the bad sailor (subject)", "singular"],
  ["via angusta", "the narrow way (subject)", "singular"],
  ["Deus bonus est", "God is good", "singular"],
  ["Sancta Maria", "Holy Mary", "singular"],
  ["pro rege bono", "on behalf of the good king", "singular"],
  ["multi milites", "many soldiers (subject)", "plural"],
  ["multos Gallos", "many Gauls (direct object)", "plural"],
  ["magnis copiis", "with great troops", "plural"],
  ["in altis montibus", "in the high mountains", "plural"],
  ["servos malos", "bad slaves (direct object)", "plural"],
  ["multa vulnera", "many wounds (subject or direct object)", "plural"],
  ["Legiones Romanae", "Roman legions (subject)", "plural"],
  ["reliqui Galli", "the remaining Gauls (subject)", "plural"],
  ["milites Christiani", "Christian soldiers (subject)", "plural"],
  ["pro amicis bonis", "on behalf of good friends", "plural"]
];

const lessonEightWordFormPairs = [
  ["grave periculum", "serious danger (subject or direct object)", "singular"],
  ["breve iter", "the short journey (subject or direct object)", "singular"],
  ["dux nobilis", "the noble leader (subject)", "singular"],
  ["ducem nobilem", "the noble leader (direct object)", "singular"],
  ["via difficilis", "the difficult way (subject)", "singular"],
  ["in via facili", "on the easy way", "singular"],
  ["omnis Gallia", "all Gaul (subject)", "singular"],
  ["metus gravis", "serious fear (subject)", "singular"],
  ["Jēsus", "Jesus (subject)", "singular"],
  ["Jēsum", "Jesus (direct object)", "singular"],
  ["Jēsū", "of/to/for/by/with/from Jesus", "singular"],
  ["milites fortes", "brave soldiers (subject)", "plural"],
  ["militibus fortibus", "with brave soldiers", "plural"],
  ["omnia vulnera", "all wounds (subject or direct object)", "plural"],
  ["vulnera gravia", "serious wounds (subject or direct object)", "plural"],
  ["legiones nobiles", "renowned legions (subject)", "plural"],
  ["urbes nobiles", "renowned cities (subject or direct object)", "plural"],
  ["omnium rerum bonarum", "of all good things", "plural"],
  ["castra plena gladiorum", "the camp full of swords", "plural"],
  ["equitēs fortēs", "brave horsemen or cavalry (subject)", "plural"]
];

const lessonNineWordFormPairs = [
  ["laudō", "I praise", "singular"],
  ["laudās", "you praise", "singular"],
  ["laudat", "he, she, or it praises", "singular"],
  ["ōrat", "he, she, or it prays", "singular"],
  ["occupat", "he, she, or it seizes", "singular"],
  ["oppugnābat", "he, she, or it was attacking", "singular"],
  ["pugnābat", "he, she, or it was fighting", "singular"],
  ["superābit", "he, she, or it will overcome", "singular"],
  ["vocābit", "he, she, or it will call", "singular"],
  ["dabit", "he, she, or it will give", "singular"],
  ["laudāmus", "we praise", "plural"],
  ["laudātis", "you all praise", "plural"],
  ["laudant", "they praise", "plural"],
  ["parāmus", "we prepare", "plural"],
  ["pugnābamus", "we were fighting", "plural"],
  ["pugnābant", "they were fighting", "plural"],
  ["portābant", "they were carrying", "plural"],
  ["laudābimus", "we shall praise", "plural"],
  ["portābunt", "they will carry", "plural"],
  ["vocābitis", "you all will call", "plural"]
];

const lessonTenWordFormPairs = [
  ["moneō", "I warn or advise", "singular"],
  ["monēs", "you warn or advise", "singular"],
  ["monet", "he, she, or it warns or advises", "singular"],
  ["timeō", "I fear", "singular"],
  ["timet", "he, she, or it fears", "singular"],
  ["terret", "he, she, or it terrifies", "singular"],
  ["habet", "he, she, or it has", "singular"],
  ["monēbam", "I was warning", "singular"],
  ["monēbat", "he, she, or it was warning", "singular"],
  ["monēbit", "he, she, or it will warn", "singular"],
  ["monēmus", "we warn or advise", "plural"],
  ["monētis", "you all warn or advise", "plural"],
  ["monent", "they warn or advise", "plural"],
  ["timent", "they fear", "plural"],
  ["habent", "they have", "plural"],
  ["monēbamus", "we were warning", "plural"],
  ["timēbant", "they were fearing", "plural"],
  ["terrēbant", "they were terrifying", "plural"],
  ["monēbimus", "we shall warn", "plural"],
  ["terrēbunt", "they will terrify", "plural"]
];

const lessonElevenWordFormPairs = [
  ["ego", "I (subject)", "singular"],
  ["meī", "of me", "singular"],
  ["mihi", "to or for me", "singular"],
  ["mē", "me, with me, or from me", "singular"],
  ["tū", "you (subject, one person)", "singular"],
  ["tuī", "of you", "singular"],
  ["tibi", "to or for you", "singular"],
  ["tē", "you, with you, or from you", "singular"],
  ["is", "he or it (subject)", "singular"],
  ["ea", "she or it (subject)", "singular"],
  ["id", "it (subject or direct object)", "singular"],
  ["eius", "of him, her, or it", "singular"],
  ["eī", "to or for him, her, or it", "singular"],
  ["eum", "him or it (direct object)", "singular"],
  ["eam", "her or it (direct object)", "singular"],
  ["sibi", "to or for himself/herself/itself", "singular"],
  ["sē", "himself, herself, or itself", "singular"],
  ["videō", "I see", "singular"],
  ["tenet", "he, she, or it holds", "singular"],
  ["movet", "he, she, or it moves", "singular"],
  ["nōs", "we or us", "plural"],
  ["nostrī", "of us", "plural"],
  ["nōbīs", "to, for, with, or from us", "plural"],
  ["vōs", "you all (subject or direct object)", "plural"],
  ["vestrī", "of you all", "plural"],
  ["vōbīs", "to, for, with, or from you all", "plural"],
  ["eī", "they or those (masculine subject)", "plural"],
  ["eae", "they or those (feminine subject)", "plural"],
  ["ea", "they or those things (neuter)", "plural"],
  ["eōrum", "of them or those", "plural"],
  ["eārum", "of them or those", "plural"],
  ["eīs", "to, for, with, or from them", "plural"],
  ["eōs", "them or those (masculine direct object)", "plural"],
  ["eās", "them or those (feminine direct object)", "plural"],
  ["sē", "themselves", "plural"],
  ["vident", "they see", "plural"],
  ["tenent", "they hold", "plural"],
  ["movent", "they move", "plural"],
  ["sustinent", "they withstand", "plural"],
  ["nōbīscum", "with us", "plural"]
];

const lessonTwelveWordFormPairs = [
  ["mittō", "I send", "singular"],
  ["mittis", "you send", "singular"],
  ["mittit", "he, she, or it sends", "singular"],
  ["dūcit", "he, she, or it leads", "singular"],
  ["gerit", "he, she, or it carries on", "singular"],
  ["defendit", "he, she, or it defends", "singular"],
  ["īnstruit", "he, she, or it draws up or equips", "singular"],
  ["vincit", "he, she, or it conquers", "singular"],
  ["petit", "he, she, or it seeks or requests", "singular"],
  ["pellit", "he, she, or it drives or routs", "singular"],
  ["pōnit", "he, she, or it puts or places", "singular"],
  ["agit", "he, she, or it drives, does, or acts", "singular"],
  ["contendit", "he, she, or it hastens, strives, or contends", "singular"],
  ["mittēbam", "I was sending", "singular"],
  ["mittēbat", "he, she, or it was sending", "singular"],
  ["mittam", "I shall send", "singular"],
  ["mittet", "he, she, or it will send", "singular"],
  ["mittimus", "we send", "plural"],
  ["mittitis", "you all send", "plural"],
  ["mittunt", "they send", "plural"],
  ["dūcunt", "they lead", "plural"],
  ["gerunt", "they carry on", "plural"],
  ["defendunt", "they defend", "plural"],
  ["īnstruunt", "they draw up or equip", "plural"],
  ["vincunt", "they conquer", "plural"],
  ["petunt", "they seek or request", "plural"],
  ["pellunt", "they drive or rout", "plural"],
  ["pōnunt", "they put or place", "plural"],
  ["agunt", "they drive, do, or act", "plural"],
  ["contendunt", "they hasten, strive, or contend", "plural"],
  ["mittēbāmus", "we were sending", "plural"],
  ["mittēbant", "they were sending", "plural"],
  ["mittēmus", "we shall send", "plural"],
  ["mittent", "they will send", "plural"]
];

const lessonThirteenWordFormPairs = [
  ["audiō", "I hear", "singular"],
  ["audīs", "you hear", "singular"],
  ["audit", "he, she, or it hears", "singular"],
  ["mūniō", "I fortify or construct", "singular"],
  ["mūnit", "he, she, or it fortifies or constructs", "singular"],
  ["veniō", "I come", "singular"],
  ["venit", "he, she, or it comes", "singular"],
  ["conveniō", "I come together or assemble", "singular"],
  ["convenit", "he, she, or it assembles", "singular"],
  ["audiēbam", "I was hearing", "singular"],
  ["audiēbās", "you were hearing", "singular"],
  ["audiēbat", "he, she, or it was hearing", "singular"],
  ["veniēbat", "he, she, or it was coming", "singular"],
  ["audiam", "I shall hear", "singular"],
  ["audiēs", "you will hear", "singular"],
  ["audiet", "he, she, or it will hear", "singular"],
  ["veniet", "he, she, or it will come", "singular"],
  ["conveniet", "he, she, or it will assemble", "singular"],
  ["audīmus", "we hear", "plural"],
  ["audītis", "you all hear", "plural"],
  ["audiunt", "they hear", "plural"],
  ["mūniunt", "they fortify or construct", "plural"],
  ["venīmus", "we come", "plural"],
  ["venītis", "you all come", "plural"],
  ["veniunt", "they come", "plural"],
  ["conveniunt", "they assemble", "plural"],
  ["audiēbāmus", "we were hearing", "plural"],
  ["audiēbātis", "you all were hearing", "plural"],
  ["audiēbant", "they were hearing", "plural"],
  ["veniēbant", "they were coming", "plural"],
  ["audiēmus", "we shall hear", "plural"],
  ["audiētis", "you all will hear", "plural"],
  ["audient", "they will hear", "plural"],
  ["venient", "they will come", "plural"],
  ["convenient", "they will assemble", "plural"]
];

const lessonFourteenWordFormPairs = [
  ["sum", "I am", "singular"],
  ["es", "you are", "singular"],
  ["est", "he, she, or it is", "singular"],
  ["eram", "I was", "singular"],
  ["erās", "you were", "singular"],
  ["erat", "he, she, or it was", "singular"],
  ["erō", "I shall be", "singular"],
  ["eris", "you will be", "singular"],
  ["erit", "he, she, or it will be", "singular"],
  ["absum", "I am away", "singular"],
  ["abes", "you are away", "singular"],
  ["abest", "he, she, or it is away", "singular"],
  ["aberam", "I was away", "singular"],
  ["aberās", "you were away", "singular"],
  ["aberat", "he, she, or it was away", "singular"],
  ["aberō", "I shall be away", "singular"],
  ["aberis", "you will be away", "singular"],
  ["aberit", "he, she, or it will be away", "singular"],
  ["sumus", "we are", "plural"],
  ["estis", "you all are", "plural"],
  ["sunt", "they are", "plural"],
  ["erāmus", "we were", "plural"],
  ["erātis", "you all were", "plural"],
  ["erant", "they were", "plural"],
  ["erimus", "we shall be", "plural"],
  ["eritis", "you all will be", "plural"],
  ["erunt", "they will be", "plural"],
  ["absumus", "we are away", "plural"],
  ["abestis", "you all are away", "plural"],
  ["absunt", "they are away", "plural"],
  ["aberāmus", "we were away", "plural"],
  ["aberātis", "you all were away", "plural"],
  ["aberant", "they were away", "plural"],
  ["aberimus", "we shall be away", "plural"],
  ["aberitis", "you all will be away", "plural"],
  ["aberunt", "they will be away", "plural"]
];

const lessonFifteenWordFormPairs = [
  ["laudāvī", "I praised / have praised", "singular"],
  ["laudāvistī", "you praised / have praised", "singular"],
  ["laudāvit", "he, she, or it praised", "singular"],
  ["monuī", "I warned", "singular"],
  ["mīsī", "I sent", "singular"],
  ["mīsit", "he, she, or it sent", "singular"],
  ["audīvī", "I heard", "singular"],
  ["fuī", "I was / have been", "singular"],
  ["fuit", "he, she, or it was / has been", "singular"],
  ["collocāvit", "he, she, or it placed or stationed", "singular"],
  ["mānsit", "he, she, or it remained", "singular"],
  ["complēvit", "he, she, or it filled", "singular"],
  ["cessit", "he, she, or it yielded or went", "singular"],
  ["servāvit", "he, she, or it saved or kept", "singular"],
  ["incitāvit", "he, she, or it incited", "singular"],
  ["perturbāvit", "he, she, or it disturbed", "singular"],
  ["incendī", "I burned or set fire to", "singular"],
  ["adjūvī", "I helped", "singular"],
  ["laudāveram", "I had praised", "singular"],
  ["laudāverās", "you had praised", "singular"],
  ["laudāverat", "he, she, or it had praised", "singular"],
  ["laudāverō", "I shall have praised", "singular"],
  ["laudāveris", "you will have praised", "singular"],
  ["laudāverit", "he, she, or it will have praised", "singular"],
  ["laudāvimus", "we praised / have praised", "plural"],
  ["laudāvistis", "you all praised / have praised", "plural"],
  ["laudāvērunt", "they praised / have praised", "plural"],
  ["monuimus", "we warned", "plural"],
  ["monuērunt", "they warned", "plural"],
  ["mīsimus", "we sent", "plural"],
  ["mīsērunt", "they sent", "plural"],
  ["audīvimus", "we heard", "plural"],
  ["audīvistis", "you all heard", "plural"],
  ["audīvērunt", "they heard", "plural"],
  ["fuimus", "we were / have been", "plural"],
  ["fuistis", "you all were / have been", "plural"],
  ["fuērunt", "they were / have been", "plural"],
  ["collocāvērunt", "they placed or stationed", "plural"],
  ["mānsērunt", "they remained", "plural"],
  ["complēvērunt", "they filled", "plural"],
  ["cessērunt", "they yielded or went", "plural"],
  ["servāvērunt", "they saved or kept", "plural"],
  ["incitāvērunt", "they incited", "plural"],
  ["perturbāvērunt", "they disturbed", "plural"],
  ["adjūvērunt", "they helped", "plural"],
  ["laudāverāmus", "we had praised", "plural"],
  ["laudāverant", "they had praised", "plural"],
  ["laudāverimus", "we shall have praised", "plural"],
  ["laudāverint", "they will have praised", "plural"]
];

const lessonSixteenWordFormPairs = [
  ["puer", "the boy (subject)", "singular"],
  ["puerī", "of the boy", "singular"],
  ["puerō", "to, for, with, or from the boy", "singular"],
  ["puerum", "the boy (direct object)", "singular"],
  ["ager", "the field (subject)", "singular"],
  ["agrī", "of the field", "singular"],
  ["agrō", "in, with, or from the field", "singular"],
  ["agrum", "the field (direct object)", "singular"],
  ["vir", "the man (subject)", "singular"],
  ["virī", "of the man", "singular"],
  ["virō", "to, for, with, or from the man", "singular"],
  ["virum", "the man (direct object)", "singular"],
  ["Italiam", "Italy (direct object or motion toward)", "singular"],
  ["fortūna", "fortune (subject)", "singular"],
  ["fortūnam", "fortune (direct object)", "singular"],
  ["proelium", "battle (subject or direct object)", "singular"],
  ["proeliī", "of the battle", "singular"],
  ["cīvitās", "the state (subject)", "singular"],
  ["cīvitātis", "of the state", "singular"],
  ["cīvitātem", "the state (direct object)", "singular"],
  ["miser puer", "wretched boy", "singular"],
  ["miserum puerum", "wretched boy (direct object)", "singular"],
  ["integer ager", "fresh or uninjured field", "singular"],
  ["integram legiōnem", "fresh or uninjured legion (direct object)", "singular"],
  ["meus amīcus", "my friend", "singular"],
  ["matrem tuam", "your mother (direct object, one person)", "singular"],
  ["rēx noster", "our king", "singular"],
  ["oppidum vestrum", "your town (more than one person)", "singular"],
  ["puerī", "the boys (subject)", "plural"],
  ["puerōrum", "of the boys", "plural"],
  ["puerīs", "to, for, with, or from the boys", "plural"],
  ["puerōs", "the boys (direct object)", "plural"],
  ["agrī", "the fields (subject)", "plural"],
  ["agrōrum", "of the fields", "plural"],
  ["agrīs", "in, with, or from the fields", "plural"],
  ["agrōs", "the fields (direct object)", "plural"],
  ["virī", "the men (subject)", "plural"],
  ["virōrum", "of the men", "plural"],
  ["virīs", "to, for, with, or from the men", "plural"],
  ["virōs", "the men (direct object)", "plural"],
  ["proelia", "battles (subject or direct object)", "plural"],
  ["proeliīs", "in, with, or from battles", "plural"],
  ["cīvitātēs", "states (subject or direct object)", "plural"],
  ["cīvitātum", "of the states", "plural"],
  ["miserī puerī", "wretched boys", "plural"],
  ["miserōs puerōs", "wretched boys (direct object)", "plural"],
  ["legiōnēs integrae", "fresh or uninjured legions", "plural"],
  ["militēs meī", "my soldiers", "plural"],
  ["virtūtēs tuās", "your virtues (direct object, one person)", "plural"],
  ["patrēs nostrī", "our fathers", "plural"],
  ["urbēs vestrae", "your cities (more than one person)", "plural"]
];

const lessonSeventeenWordFormPairs = [
  ...lessonSeventeenPresentPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonSeventeenImperfectPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonSeventeenFuturePassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ["administrātur", "it is managed or administered", "singular"],
  ["appellor", "I am addressed or called upon", "singular"],
  ["appellātur", "he, she, or it is addressed or called upon", "singular"],
  ["confirmāmur", "we are encouraged or strengthened", "plural"],
  ["cōnservābitur", "it will be preserved or saved", "singular"],
  ["cōnservābuntur", "they will be preserved or saved", "plural"],
  ["ā duce", "by the leader", "singular"],
  ["ab hominibus", "by men", "plural"],
  ["ā virīs bonīs", "by good men", "plural"],
  ["ab oppidō aberant", "they were away from the town", "plural"]
];

const lessonEighteenWordFormPairs = [
  ...lessonEighteenPresentPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonEighteenImperfectPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonEighteenFuturePassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ["continentur", "they are held in, kept, restrained, or contained", "plural"],
  ["continēbantur", "they were being held in, kept, restrained, or contained", "plural"],
  ["obtinetur", "it is held, occupied, or obtained", "singular"],
  ["obtinēbātur", "it was being held or occupied", "singular"],
  ["terrētur", "he, she, or it is terrified", "singular"],
  ["tenēbuntur", "they will be held", "plural"],
  ["gladiō", "by means of a sword", "singular"],
  ["tēlīs", "by means of darts or weapons", "plural"],
  ["clāmōre", "by means of a shout", "singular"],
  ["montibus", "by means of mountains", "plural"]
];

const lessonNineteenWordFormPairs = [
  ...lessonNineteenPresentPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonNineteenImperfectPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonNineteenFuturePassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ["trāditur", "he, she, or it is handed over", "singular"],
  ["trādētur", "he, she, or it will be handed over", "singular"],
  ["dīmittitur", "he, she, or it is sent away or dismissed", "singular"],
  ["dīmittuntur", "they are sent away or dismissed", "plural"],
  ["occīditur", "he, she, or it is killed", "singular"],
  ["occīduntur", "they are killed", "plural"],
  ["occīdēbantur", "they were being killed", "plural"],
  ["sine spē", "without hope", "singular"],
  ["ferē", "almost", "singular"],
  ["grātiās agimus", "we give thanks", "plural"],
  ["ā Caesare", "by Caesar", "singular"],
  ["gladiīs", "by means of swords", "plural"]
];

const lessonTwentyWordFormPairs = [
  ...lessonTwentyPresentPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonTwentyImperfectPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonTwentyFuturePassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ["mūnītur", "he, she, or it is fortified", "singular"],
  ["mūniuntur", "they are fortified", "plural"],
  ["mūniēbātur", "he, she, or it was being fortified", "singular"],
  ["mūniēbantur", "they were being fortified", "plural"],
  ["mūniētur", "he, she, or it will be fortified", "singular"],
  ["mūnientur", "they will be fortified", "plural"],
  ["cum Caesare", "with Caesar, in company with Caesar", "singular"],
  ["cum Rōmānīs", "with the Romans, in company with the Romans", "plural"],
  ["cum tēlīs", "with the darts, together with the darts", "plural"],
  ["gladiō", "with a sword, by means of a sword", "singular"],
  ["mūrō", "with a wall, by means of a wall", "singular"]
];

const lessonTwentyOneWordFormPairs = [
  ...lessonTwentyOnePerfectPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonTwentyOneAgreementItems.map((item) => [item.ending, item.meaning, item.caseName.includes("plural") ? "plural" : "singular"]),
  ...lessonTwentyOnePluperfectPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonTwentyOneFuturePerfectPassiveItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ["explōrātus est", "he was reconnoitered or found out", "singular"],
  ["explōrāta erant", "they neuter had been reconnoitered", "plural"],
  ["pressī sunt", "they were pressed hard", "plural"],
  ["retentus est", "he was held back or kept", "singular"],
  ["retentī sunt", "they were held back or kept", "plural"],
  ["comparāta est", "she or it feminine was prepared", "singular"],
  ["comparāta erant", "they neuter had been prepared", "plural"],
  ["mūnītum est", "it was fortified", "singular"],
  ["mūnīta sunt", "they neuter were fortified", "plural"],
  ["missae sunt", "they feminine were sent", "plural"],
  ["incēnsus est", "he or it masculine was burned", "singular"],
  ["vehementer territī erāmus", "we had been greatly terrified", "plural"]
];

const lessonTwentyTwoWordFormPairs = [
  ...lessonTwentyTwoFormItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ["ut defendant", "so that they may defend", "mixed"],
  ["ut cōnservēmus", "so that we may preserve", "mixed"],
  ["nē expugnent", "lest they storm / take by storm", "mixed"],
  ["nē hostēs veniant", "lest the enemies come", "mixed"],
  ["ut amīcitia sit", "so that there may be friendship", "mixed"],
  ["celeriter veniant", "they may come swiftly", "plural"],
  ["vallum", "rampart or wall (subject/direct object singular)", "singular"],
  ["fossā", "by means of a ditch / with a ditch", "singular"],
  ["vitam", "life as direct object", "singular"],
  ["amīcitiam", "friendship as direct object", "singular"]
];

const lessonTwentyThreeWordFormPairs = [
  ...lessonTwentyThreeFormItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ["ut vincerent", "so that they might conquer", "mixed"],
  ["nē esset", "lest there might be / lest it might be", "mixed"],
  ["ut audīrēmus", "so that we might hear", "mixed"],
  ["obsidēs inter sē dant", "they exchange hostages", "plural"],
  ["in conciliō", "in the council", "singular"],
  ["cōnsilium", "plan or counsel (subject/direct object singular)", "singular"],
  ["cōnsilia", "plans (subject/direct object plural)", "plural"],
  ["tribūnō", "to/for/by/with/from the tribune", "singular"],
  ["legātīs", "to/for/by/with/from the envoys or lieutenants", "plural"],
  ["lātā fossā", "with a wide ditch", "singular"],
  ["facile", "easily", "mixed"],
  ["statim", "at once / immediately", "mixed"]
];

const lessonTwentyFourWordFormPairs = [
  ...lessonTwentyFourFormItems.map((item) => [item.ending, item.meaning, item.group.includes("Plural") ? "plural" : "singular"]),
  ["ad flūmen", "to the river / at the river", "singular"],
  ["ad castra", "to the camp", "plural"],
  ["ad noctem", "until night", "singular"],
  ["ad bellum parātus", "prepared for war", "singular"],
  ["omnia ad bellum ūtilia", "all things useful for war", "plural"],
  ["acriter pugnātum est", "there was bitter fighting / they fought bitterly", "mixed"],
  ["ad portam perventum est", "they arrived at the gate", "singular"],
  ["quī pācem petat", "who should seek peace / to seek peace", "singular"],
  ["quī auxilium peterent", "who should seek help / to seek help", "plural"],
  ["quō facilius defendant", "so that they may defend more easily", "mixed"],
  ["quō diūtius pugnent", "so that they may fight longer", "mixed"],
  ["nuntium", "messenger or message as direct object", "singular"],
  ["auxilia", "reinforcements (subject/direct object plural)", "plural"],
  ["custōdēs", "guards (subject/direct object plural)", "plural"],
  ["iniūriās", "wrongs or injuries as direct object plural", "plural"]
];

const lessonTwentyFiveWordFormPairs = [
  ...lessonTwentyFiveQuestionAdverbItems.map((item) => [item.ending, item.meaning, "mixed"]),
  ...lessonTwentyFiveQuestionParticleItems.map((item) => [item.ending, item.meaning, "mixed"]),
  ...lessonTwentyFiveInterrogativePronounSingularItems.map((item) => [item.ending, item.meaning, "singular"]),
  ...lessonTwentyFiveInterrogativePronounPluralItems.map((item) => [item.ending, item.meaning, "plural"]),
  ...lessonTwentyFiveInterrogativeAdjectiveItems.map((item) => [item.ending, item.meaning, item.group.includes("Plural") ? "plural" : "singular"]),
  ["valēsne", "are you well?", "singular"],
  ["nōnne fortēs sunt", "aren’t they brave? / surely they are brave?", "plural"],
  ["num timēs", "surely you do not fear?", "singular"],
  ["quibuscum", "with whom?", "plural"],
  ["cui gladium dedistī", "to whom did you give the sword?", "singular"],
  ["quō exercitum trādūxit", "where did he lead the army?", "singular"],
  ["unde vēnistī", "from where did you come?", "singular"],
  ["quōs custōdēs", "which guards as direct object?", "plural"],
  ["quō nōmine", "by what name?", "singular"],
  ["tē amīcum vocō", "I call you friend", "singular"],
  ["clam in castra", "secretly into the camp", "plural"],
  ["apud barbarōs", "among the barbarians", "plural"]
];

const lessonTwentySixWordFormPairs = [
  ...lessonTwentySixFormItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ["rogat ubi sint", "he asks where they are", "plural"],
  ["rogat num pugnent", "he asks whether they are fighting", "plural"],
  ["rogat num vīcerint", "he asks whether they conquered", "plural"],
  ["rogāvit ubi essent", "he asked where they were", "plural"],
  ["rogāvit num pugnāvissent", "he asked whether they had fought", "plural"],
  ["quaerit quanta mūnītiō sit", "he asks how great the fortification is", "singular"],
  ["quaesīvit ubi cōnstitissent", "he asked where they had taken position", "plural"],
  ["quae genera Galliam incolant", "what races inhabit Gaul", "plural"],
  ["copiam aquae", "supply of water", "singular"],
  ["mūnītiōnēs parāverint", "they have prepared fortifications", "plural"],
  ["vērus amīcus", "true friend", "singular"],
  ["coēgit obsidēs", "he collected or forced hostages", "plural"],
  ["“Vōs,” inquit", "“You,” he said", "plural"]
];

const lessonTwentySevenWordFormPairs = [
  ...lessonTwentySevenVocativeItems.map((item) => [item.ending, item.meaning, item.group.includes("Plural") ? "plural" : "singular"]),
  ...lessonTwentySevenImperativeItems.map((item) => [item.ending, item.meaning, item.caseName === "you (pl.)" ? "plural" : "singular"]),
  ...lessonTwentySevenWishHortatoryItems.map((item) => [item.ending, item.meaning, item.group === "Hortatory" ? "plural" : "singular"]),
  ["avē Maria", "hail, Mary", "singular"],
  ["tolle peccāta nostra", "take away our sins", "plural"],
  ["miserēre nōbīs", "have mercy on us", "plural"],
  ["doce mē viās tuās", "teach me your ways", "singular"],
  ["adorāte Deum", "adore God, all of you", "plural"],
  ["rege mentem meam", "rule my mind", "singular"],
  ["grātiās agite", "give thanks, all of you", "plural"],
  ["nē cēdāmus", "let us not yield", "plural"]
];

const lessonTwentyEightWordFormPairs = [
  ...lessonTwentyEightFormItems.map((item) => [item.ending, item.meaning, item.caseName.includes("Plural") || item.caseName === "They surrendered" ? "plural" : "singular"]),
  ["sē laudat", "he praises himself", "singular"],
  ["sē defendunt", "they defend themselves", "plural"],
  ["mīlitēs suōs", "his own soldiers", "plural"],
  ["fīlium suum", "her own son", "singular"],
  ["vītās nostrās", "our own lives", "plural"],
  ["Gallī sē dēdidērunt", "the Gauls surrendered", "plural"],
  ["Caesar hostēs in fugam dedit", "Caesar put the enemy to flight", "plural"],
  ["servus nōmine Titus", "a slave named Titus", "singular"],
  ["ante adventum Caesaris", "before Caesar's arrival", "singular"],
  ["praesidia in hībernīs", "garrisons in winter quarters", "plural"]
];

const lessonTwentyNineWordFormPairs = [
  ...lessonTwentyNineFormItems.map((item) => [item.ending, item.meaning, ["we", "you (pl.)", "they"].includes(item.caseName) ? "plural" : "singular"]),
  ...lessonTwentyNinePatternItems.map((item) => [item.ending, item.meaning, "mixed"]),
  ["nē vincāmur", "lest we be conquered", "plural"],
  ["nē videantur", "lest they be seen", "plural"],
  ["ut oppidum occupētur", "so that the town may be seized", "singular"],
  ["scit quis missus sit", "he knows who was sent", "singular"],
  ["ubi custōdēs collocātī sint", "where the guards were stationed", "plural"],
  ["cum Gallia pācāta esset", "when Gaul had been pacified", "singular"],
  ["subitō vīsa est aciēs", "suddenly the battle line was seen", "singular"],
  ["caedē principum perturbātī sunt", "they were disturbed by the slaughter of the chiefs", "plural"],
  ["salūtis causa", "for the sake of safety", "singular"]
];

const lessonThirtyWordFormPairs = [
  ...lessonThirtyParticipleAgreementItems.map((item) => [item.ending, item.meaning, item.group.includes("Plural") ? "plural" : "singular"]),
  ...lessonThirtyPrincipalPartItems.map((item) => [item.ending, item.meaning, "mixed"]),
  ...lessonThirtyVocabularyParticipleItems.map((item) => [item.ending, item.meaning, item.ending.endsWith("um") ? "singular" : "mixed"]),
  ["nauta laudātus", "the praised sailor", "singular"],
  ["legiō missa", "the sent legion", "singular"],
  ["oppidum occupātum", "the captured town", "singular"],
  ["Caesar commōtus", "Caesar, having been alarmed", "singular"],
  ["exercitus impeditus", "the hindered army", "singular"],
  ["mīlitēs missī", "the sent soldiers", "plural"],
  ["Gallī victī", "the conquered Gauls", "plural"],
  ["castra mūnīta", "the fortified camp", "plural"],
  ["litterīs commōtī", "moved by the letters", "plural"],
  ["spē victōriae adductī", "led on by hope of victory", "plural"],
  ["pugnātum est", "there was fighting / they fought", "mixed"]
];

const lessonThirtyOneWordFormPairs = [
  ...lessonThirtyOneHicFormItems.map((item) => [item.ending, item.meaning, item.group.includes("Plural") ? "plural" : "singular"]),
  ...lessonThirtyOneHicRuleItems.map((item) => [item.ending, item.meaning, "mixed"]),
  ["hic mīles", "this soldier", "singular"],
  ["haec via", "this road", "singular"],
  ["hoc regnum", "this kingdom", "singular"],
  ["hunc nuntium", "this message as direct object", "singular"],
  ["hāc rē", "by/with/from this matter", "singular"],
  ["hōc proeliō", "in/by this battle", "singular"],
  ["hī mīlitēs", "these soldiers", "plural"],
  ["hae urbēs", "these cities as subject", "plural"],
  ["hās urbēs", "these cities as direct object", "plural"],
  ["haec castra", "this camp / these camp-things", "plural"],
  ["hīs litterīs", "by/with/from these letters", "plural"],
  ["hōrum mīlitum", "of these soldiers", "plural"],
  ["ā tergō", "from the rear", "mixed"],
  ["ā fronte", "from the front", "mixed"],
  ["contra hostēs", "against the enemy", "plural"],
  ["summus collis", "the highest hill / top of the hill", "singular"]
];

const wordFormsByLesson = {
  lesson1: wordFormPairs,
  lesson2: secondWordFormPairs,
  lesson3: thirdWordFormPairs,
  lesson4: fourthWordFormPairs,
  lesson5: fifthWordFormPairs,
  lesson6: lessonSixWordFormPairs,
  lesson7: lessonSevenWordFormPairs,
  lesson8: lessonEightWordFormPairs,
  lesson9: lessonNineWordFormPairs,
  lesson10: lessonTenWordFormPairs,
  lesson11: lessonElevenWordFormPairs,
  lesson12: lessonTwelveWordFormPairs,
  lesson13: lessonThirteenWordFormPairs,
  lesson14: lessonFourteenWordFormPairs,
  lesson15: lessonFifteenWordFormPairs,
  lesson16: lessonSixteenWordFormPairs,
  lesson17: lessonSeventeenWordFormPairs,
  lesson18: lessonEighteenWordFormPairs,
  lesson19: lessonNineteenWordFormPairs,
  lesson20: lessonTwentyWordFormPairs,
  lesson21: lessonTwentyOneWordFormPairs,
  lesson22: lessonTwentyTwoWordFormPairs,
  lesson23: lessonTwentyThreeWordFormPairs,
  lesson24: lessonTwentyFourWordFormPairs,
  lesson25: lessonTwentyFiveWordFormPairs,
  lesson26: lessonTwentySixWordFormPairs,
  lesson27: lessonTwentySevenWordFormPairs,
  lesson28: lessonTwentyEightWordFormPairs,
  lesson29: lessonTwentyNineWordFormPairs,
  lesson30: lessonThirtyWordFormPairs,
  lesson31: lessonThirtyOneWordFormPairs
};

function getLessonWordFormPairs(lessonSet, scope = "mixed", limit = 20) {
  const allForms = wordFormsByLesson[lessonSet] || wordFormPairs;
  const pool = scope === "mixed"
    ? allForms
    : allForms.filter(([, , formScope]) => formScope === scope);
  return shuffled(pool).slice(0, Math.min(limit, pool.length));
}

function getLessonWordFormCount(lessonSet, scope = "mixed", limit = 20) {
  const allForms = wordFormsByLesson[lessonSet] || wordFormPairs;
  const pool = scope === "mixed"
    ? allForms
    : allForms.filter(([, , formScope]) => formScope === scope);
  return Math.min(limit, pool.length);
}

const lessonOneGrammar = [
  {
    title: "Accent and syllables",
    points: [
      "Two-syllable words are accented on the first syllable.",
      "Longer words are accented on the second-last syllable if it is long; otherwise, on the third-last.",
      "x and z count as two consonants; h and the u in qu do not count as consonants."
    ]
  },
  {
    title: "First declension",
    points: [
      "A noun whose genitive singular ends in -ae belongs to the first declension.",
      "Find the stem by dropping -ae from the genitive singular.",
      "The first five forms are singular; the next five are plural."
    ]
  },
  {
    title: "Gender",
    points: [
      "First-declension nouns naming individual male persons are masculine.",
      "All other first-declension nouns are feminine."
    ]
  },
  {
    title: "Verbs",
    points: [
      "Latin often keeps the subject pronoun inside the verb ending.",
      "-t can mean he, she, or it; -nt means they.",
      "The subject of a finite verb is nominative.",
      "A finite verb agrees with its subject in number and person."
    ]
  },
  {
    title: "Accusative and word order",
    points: [
      "The direct object of a transitive verb is accusative.",
      "The verb usually stands last in the sentence.",
      "Adverbs, including non, usually stand immediately before the word they modify."
    ]
  },
  {
    title: "Diagramming",
    points: [
      "In a simple sentence diagram, the subject and verb are separated by a line that drops below the base line.",
      "The verb and direct object are separated by a line that does not drop below the base line."
    ]
  },
  {
    title: "Genitive",
    points: [
      "The genitive translates possession.",
      "The genitive also translates many English of-phrases."
    ]
  }
];

const lessonTwoGrammar = [
  {
    title: "Second declension",
    points: [
      "A noun whose genitive singular ends in -i belongs to the second declension.",
      "Find the stem by dropping -i from the genitive singular.",
      "Second-declension nouns ending in -us are generally masculine."
    ]
  },
  {
    title: "Servus pattern",
    points: [
      "Servus is the model for masculine second-declension nouns.",
      "Common Lesson 2 nouns like servus, amicus, Christus, and Christianus follow this pattern.",
      "Deus is practiced mainly in the singular in Lesson 2."
    ]
  },
  {
    title: "Bellum pattern",
    points: [
      "Second-declension nouns ending in -um are neuter.",
      "Bellum is the model for neuter second-declension nouns.",
      "In all neuter nouns, the accusative is always like the nominative."
    ]
  },
  {
    title: "Dative",
    points: [
      "The indirect object is put in the dative case.",
      "The indirect object tells to or for whom something is given, said, or entrusted.",
      "Dedit means he, she, or it gave; dederunt means they gave."
    ]
  },
  {
    title: "Prepositions",
    points: [
      "Always learn what case a preposition governs.",
      "Cum takes the ablative.",
      "Propter and post take the accusative.",
      "In meaning in or on takes the ablative."
    ]
  },
  {
    title: "Predicate noun and sum",
    points: [
      "After a linking verb, the predicate noun is put in the same case as the subject.",
      "Forms of sum may stand anywhere in the sentence.",
      "Sum, es, est, sumus, estis, and sunt are forms of I am."
    ]
  },
  {
    title: "Quod and itaque",
    points: [
      "Quod means because and introduces a subordinate clause.",
      "Itaque means and so and is used at the beginning of a sentence.",
      "Quod and itaque do not change spelling."
    ]
  }
];

const lessonThreeGrammar = [
  {
    title: "Third declension clue",
    points: [
      "A noun whose genitive singular ends in -is belongs to the third declension.",
      "Find the stem by dropping -is from the genitive singular.",
      "The nominative singular has no one regular ending."
    ]
  },
  {
    title: "Gender",
    points: [
      "Third-declension nouns may be masculine, feminine, or neuter.",
      "Henle gives gender rules for masculine and feminine third-declension nouns.",
      "Many exceptions are marked in the vocabulary and should be memorized."
    ]
  },
  {
    title: "Lex pattern",
    points: [
      "Lex is the main model for masculine and feminine third-declension nouns.",
      "Lex-type words use -um in the genitive plural.",
      "Examples include lex, rex, dux, homo, imperator, and veritas."
    ]
  },
  {
    title: "Appositives",
    points: [
      "An appositive is a noun that explains another noun.",
      "An appositive agrees with its noun in case and number.",
      "Appositives are often set off by commas in English and Latin."
    ]
  },
  {
    title: "Expletive there",
    points: [
      "The English there in there is or there are merely introduces the sentence.",
      "Latin does not translate expletive there with a separate word.",
      "Est can mean there is; sunt can mean there are."
    ]
  },
  {
    title: "Pars pattern",
    points: [
      "Pars-type nouns mostly share the lex endings.",
      "The key difference is the genitive plural ending -ium.",
      "Examples include pars, collis, hostis, gens, and mons."
    ]
  },
  {
    title: "Flumen pattern",
    points: [
      "Flumen is the model for neuter third-declension nouns.",
      "In neuter nouns, the accusative is always like the nominative.",
      "Third-declension neuter nominative and accusative plural forms end in -a."
    ]
  }
];

const lessonFourGrammar = [
  {
    title: "Fourth declension clue",
    points: [
      "A fourth-declension noun is recognized by the genitive singular ending -ūs.",
      "Portus, portūs is the model word in Lesson 4.",
      "Most fourth-declension nouns ending in -us are masculine."
    ]
  },
  {
    title: "Portus pattern",
    points: [
      "The singular endings are -us, -ūs, -uī, -um, -ū.",
      "The plural endings are -ūs, -uum, -ibus, -ūs, -ibus.",
      "Several portus forms look alike, so the case meaning comes from the ending and sentence job."
    ]
  },
  {
    title: "Portus is not porta",
    points: [
      "Portus means harbor and follows the fourth declension.",
      "Porta means gate and follows the first declension.",
      "The two words look similar, but their declensions are different."
    ]
  },
  {
    title: "In with motion",
    points: [
      "In with the accusative means into, against, upon, or onto.",
      "Use the accusative when the sentence shows motion.",
      "Example pattern: in provinciam means into the province."
    ]
  },
  {
    title: "In without motion",
    points: [
      "In with the ablative means in or on.",
      "Use the ablative when the sentence shows location, not motion.",
      "Example pattern: in provinciā means in the province."
    ]
  },
  {
    title: "Autem",
    points: [
      "Autem means however.",
      "It is postpositive, so it follows the first word or phrase of its clause.",
      "Nunc means now and can stand normally as an adverb."
    ]
  }
];

const lessonFiveGrammar = [
  {
    title: "Fifth declension clue",
    points: [
      "A fifth-declension noun is recognized by the genitive singular ending -eī.",
      "Rēs, reī is the model word in Lesson 5.",
      "Most fifth-declension nouns are feminine."
    ]
  },
  {
    title: "Rēs pattern",
    points: [
      "The singular endings are -ēs, -eī, -eī, -em, -ē.",
      "The plural endings are -ēs, -ērum, -ēbus, -ēs, -ēbus.",
      "Some forms repeat, so the sentence job helps decide the meaning."
    ]
  },
  {
    title: "Lesson 5 vocabulary",
    points: [
      "Rēs means thing, matter, or affair.",
      "Fidēs means faith or faithfulness.",
      "Aciēs means battle line, and spēs means hope."
    ]
  },
  {
    title: "Posuērunt",
    points: [
      "Posuērunt means they put or they placed.",
      "When posuērunt has an in phrase, in takes the ablative.",
      "The pattern spem in Deo posuērunt means they placed hope in God."
    ]
  },
  {
    title: "Review of in",
    points: [
      "In with the accusative shows motion into, against, or upon.",
      "In with the ablative shows location in or on.",
      "Lesson 5 keeps practicing both uses."
    ]
  }
];

const lessonSixGrammar = [
  {
    title: "Plural form, singular meaning",
    points: [
      "Castra is plural in Latin form but is often translated camp.",
      "Impedimenta is plural in Latin form but means baggage or baggage train.",
      "These words still use plural Latin endings even when English sounds singular."
    ]
  },
  {
    title: "Singular and plural meanings can differ",
    points: [
      "Gratia in the singular means favor, influence, or grace.",
      "Gratiae in the plural means thanks.",
      "Copia in the singular means abundance or supply, while copiae in the plural means troops or forces."
    ]
  },
  {
    title: "Castra posuērunt",
    points: [
      "Posuērunt usually means they put or they placed.",
      "With castra as its object, posuērunt means they pitched camp.",
      "If an in phrase tells where something is placed, in takes the ablative."
    ]
  },
  {
    title: "Gratias agunt",
    points: [
      "Agunt means they give only in the phrase gratias agunt.",
      "Gratias agunt means they give thanks.",
      "Deo gratias agunt means they give thanks to God."
    ]
  },
  {
    title: "Silvae and hostes",
    points: [
      "Silvae may be used as a plural Latin word with a familiar English sense like woods.",
      "Hostes is plural in Latin but can sometimes be translated by the English singular enemy.",
      "Lesson 6 asks students to notice meaning, not just form."
    ]
  }
];

const lessonSevenGrammar = [
  {
    title: "First and second declension adjectives",
    points: [
      "Magnus, magna, magnum is the model adjective for Lesson 7.",
      "The masculine forms use the servus endings.",
      "The feminine forms use the terra endings, and the neuter forms use the bellum endings."
    ]
  },
  {
    title: "Agreement",
    points: [
      "Adjectives agree with their nouns in gender, number, and case.",
      "A noun's declension does not always decide the adjective's gender; nauta is masculine because it names a male person.",
      "In magnam gentem, magnam is feminine accusative singular because gentem is feminine accusative singular."
    ]
  },
  {
    title: "Position of adjectives",
    points: [
      "Adjectives of quantity generally come before their nouns.",
      "Adjectives of quality generally follow their nouns.",
      "In Christian Latin, sanctus generally comes before its noun."
    ]
  },
  {
    title: "Predicate adjectives",
    points: [
      "A predicate adjective is linked to its noun by a verb like est, sunt, or erat.",
      "Predicate adjectives still agree with their nouns in gender, number, and case.",
      "Deus est bonus means God is good."
    ]
  },
  {
    title: "Pro with the ablative",
    points: [
      "Pro always takes the ablative case.",
      "In place expressions, pro means in front of.",
      "With people, pro often means on behalf of or for."
    ]
  }
];

const lessonEightGrammar = [
  {
    title: "Third-declension adjectives",
    points: [
      "Gravis, e is the model adjective for Lesson 8.",
      "Adjectives with -is, -e in the nominative singular are declined like gravis, e.",
      "These adjectives still agree with their nouns in gender, number, and case."
    ]
  },
  {
    title: "Three endings to notice",
    points: [
      "The ablative singular ends in -i.",
      "The neuter nominative and accusative plural end in -ia.",
      "The genitive plural ends in -ium."
    ]
  },
  {
    title: "Adjectives governing cases",
    points: [
      "Cupidus takes the genitive.",
      "Finitimus takes the dative.",
      "Plenus takes the genitive or ablative, and similis takes the genitive or dative."
    ]
  },
  {
    title: "The declension of Jēsus",
    points: [
      "The forms are Jēsus, Jēsū, Jēsū, Jēsum, Jēsū.",
      "Jēsū can be genitive, dative, or ablative.",
      "Pro Jēsū uses the ablative after pro."
    ]
  },
  {
    title: "New reading words",
    points: [
      "Quid means what? in questions.",
      "Et...et means both...and.",
      "Prima luce means at dawn."
    ]
  }
];

const lessonNineGrammar = [
  {
    title: "Verbs change form",
    points: [
      "Verbs change form to show tense, person, and number.",
      "Tense tells the time of the action: present, past, or future.",
      "A finite verb agrees with its subject in person and number."
    ]
  },
  {
    title: "Principal parts",
    points: [
      "A regular Latin verb has four principal parts.",
      "The second principal part, the present infinitive, shows the conjugation.",
      "First-conjugation infinitives end in -āre."
    ]
  },
  {
    title: "Present of laudō",
    points: [
      "The present stem comes from dropping -āre from the infinitive.",
      "The present tense can mean I praise, I am praising, or I do praise.",
      "The personal signs show I, you, he/she/it, we, you all, and they."
    ]
  },
  {
    title: "Imperfect of laudō",
    points: [
      "The imperfect tense shows action going on in past time.",
      "The imperfect tense sign is -ba-.",
      "Laudābat means he, she, or it was praising."
    ]
  },
  {
    title: "Future of laudō",
    points: [
      "The future tense shows action that will happen.",
      "First-conjugation future forms use the tense sign -bi- in most forms.",
      "Laudābunt means they will praise."
    ]
  },
  {
    title: "Questions",
    points: [
      "Ubi means where, quis means who, quid means what, and cur means why.",
      "The particle -ne turns a statement into a yes/no question.",
      "Laudāsne Caesarem? means Do you praise Caesar?"
    ]
  }
];

const lessonTenGrammar = [
  {
    title: "Second conjugation",
    points: [
      "Second-conjugation infinitives end in -ēre with a long ē.",
      "Moneō, monēre, monuī, monitus is the model verb.",
      "Many second-conjugation verbs must have their principal parts memorized."
    ]
  },
  {
    title: "Present of moneō",
    points: [
      "The present stem comes from dropping -ēre from the infinitive.",
      "Moneō, monēs, monet, monēmus, monētis, monent are the present forms.",
      "Like the first conjugation, the present can translate as warn, am warning, or do warn."
    ]
  },
  {
    title: "Imperfect of moneō",
    points: [
      "The imperfect tense still uses the -ba- tense sign.",
      "Second-conjugation imperfect forms use -ēba-.",
      "Monēbant means they were warning."
    ]
  },
  {
    title: "Future of moneō",
    points: [
      "The future tense still points to action that will happen.",
      "Second-conjugation future forms use -ēbi- in most forms.",
      "Monēbunt means they will warn."
    ]
  },
  {
    title: "Lesson 10 vocabulary",
    points: [
      "Moneō means warn or advise.",
      "Timeō means fear; terreō means terrify; habeō means have.",
      "Arma is a neuter plural word meaning arms or weapons."
    ]
  }
];

const lessonElevenGrammar = [
  {
    title: "First person pronouns",
    points: [
      "First person pronouns refer to the speaker or writer.",
      "Ego means I; nōs means we.",
      "Mihi means to me or for me; nōbīs means to us, for us, with us, or from us."
    ]
  },
  {
    title: "Second person pronouns",
    points: [
      "Second person pronouns refer to the person spoken to.",
      "Tū is singular you; vōs is plural you.",
      "Tibi means to you or for you; vōbīs means to you all, for you all, with you all, or from you all."
    ]
  },
  {
    title: "Third person pronouns",
    points: [
      "Is, ea, id can mean he, she, or it.",
      "A Latin pronoun agrees with the word it refers to in gender and number.",
      "A masculine or feminine Latin pronoun may sometimes be translated by English it."
    ]
  },
  {
    title: "Direct reflexive pronouns",
    points: [
      "A direct reflexive pronoun refers back to the subject of its own clause.",
      "Sē can mean himself, herself, itself, or themselves.",
      "For first and second person reflexives, Latin uses regular forms like mē, nōbīs, tē, and vōbīs."
    ]
  },
  {
    title: "Lesson 11 vocabulary",
    points: [
      "Videō means see; teneō means hold; moveō means move; sustineō means sustain or withstand.",
      "Saepe means often, tamen means nevertheless, neque means and not or nor.",
      "Fīnēs is a plural noun meaning territory."
    ]
  }
];

const lessonTwelveGrammar = [
  {
    title: "Third conjugation",
    points: [
      "Third-conjugation infinitives end in -ere with a short e.",
      "The principal parts of third-conjugation verbs must be memorized from the vocabulary.",
      "Mittō, mittere, mīsī, missus is the Lesson 12 model."
    ]
  },
  {
    title: "Present of mittō",
    points: [
      "The final personal signs are the same as in the other conjugations.",
      "The third person plural has u in the ending: mittunt.",
      "Mittit means he, she, or it sends."
    ]
  },
  {
    title: "Imperfect of mittō",
    points: [
      "Third-conjugation imperfect endings are exactly like second-conjugation imperfect endings.",
      "Mittēbam means I was sending.",
      "Mittēbant means they were sending."
    ]
  },
  {
    title: "Future of mittō",
    points: [
      "The third-conjugation future has no -bi- tense sign.",
      "Its vowel changes: mittam, mittēs, mittet, mittēmus, mittētis, mittent.",
      "Mittent means they will send."
    ]
  },
  {
    title: "Lesson 12 vocabulary",
    points: [
      "Dūcō means lead or guide; gerō can mean carry on or wage.",
      "Defendō means defend; īnstruō means draw up or equip.",
      "Pōnō means put or place, and with castra it can mean pitch camp."
    ]
  }
];

const lessonThirteenGrammar = [
  {
    title: "Fourth conjugation",
    points: [
      "Fourth-conjugation infinitives end in long -īre.",
      "Audiō, audīre, audīvī, audītus is the model verb.",
      "Regular fourth-conjugation verbs form their principal parts by adding -īre, -īvī, and -ītus to the stem."
    ]
  },
  {
    title: "Present of audiō",
    points: [
      "The present forms are audiō, audīs, audit, audīmus, audītis, audiunt.",
      "The third person plural uses -iunt: audiunt.",
      "Mūniō can mean fortify, and with viam or viās it can mean construct a road."
    ]
  },
  {
    title: "Imperfect and future",
    points: [
      "Fourth-conjugation imperfect forms put i before the third-conjugation imperfect endings: audiēbam, audiēbās, audiēbat.",
      "Fourth-conjugation future forms include audiam, audiēs, audiet, audiēmus, audiētis, audient.",
      "Veniō means come; conveniō means come together or assemble."
    ]
  },
  {
    title: "Per with the accusative",
    points: [
      "Per means through.",
      "Per takes the accusative case.",
      "Per silvam means through the forest; per provinciam means through the province."
    ]
  }
];

const lessonFourteenGrammar = [
  {
    title: "The present system of sum",
    points: [
      "Sum means I am; esse means to be.",
      "The present forms are sum, es, est, sumus, estis, sunt.",
      "The imperfect forms are eram, erās, erat, erāmus, erātis, erant."
    ]
  },
  {
    title: "Future of sum",
    points: [
      "The future forms are erō, eris, erit, erimus, eritis, erunt.",
      "The third person plural future is erunt.",
      "A form of sum can link a subject to a noun or adjective: Christus est dux bonus."
    ]
  },
  {
    title: "Absum",
    points: [
      "Absum means I am away or distant.",
      "Absum is made from ab plus sum.",
      "The place away from which something is distant is usually expressed by a or ab plus the ablative."
    ]
  },
  {
    title: "Lesson 14 vocabulary",
    points: [
      "Undique means from all sides or on all sides.",
      "Tēlum means dart or weapon.",
      "Longē means far."
    ]
  }
];

const lessonFifteenGrammar = [
  {
    title: "The perfect system active",
    points: [
      "The perfect system active includes the perfect, pluperfect, and future perfect tenses.",
      "The perfect active stem comes from the third principal part.",
      "To find the perfect stem, drop final -ī from the third principal part: laudāvī gives laudāv-."
    ]
  },
  {
    title: "Perfect tense",
    points: [
      "The perfect tense expresses a past act.",
      "Laudāvī can mean I praised, I did praise, or I have praised.",
      "The perfect endings are the same across all conjugations."
    ]
  },
  {
    title: "Pluperfect and future perfect",
    points: [
      "The pluperfect means had done something: laudāveram means I had praised.",
      "The future perfect means will have done something: laudāverō means I shall have praised.",
      "These tenses are built from the perfect stem."
    ]
  },
  {
    title: "Lesson 15 vocabulary",
    points: [
      "Collocō means place or station; maneō means remain.",
      "Compleō means fill, and the thing filled with is often ablative.",
      "Servō means keep, save, or preserve; adjuvō means help."
    ]
  }
];

const lessonSixteenGrammar = [
  {
    title: "Puer, ager, and vir",
    points: [
      "A few second-declension masculine nouns do not end in -us in the nominative singular.",
      "Puer, puerī means boy; ager, agrī means field; vir, virī means man.",
      "Except for the nominative singular, these nouns use the same endings as servus."
    ]
  },
  {
    title: "Stems matter",
    points: [
      "The stem of puer is puer-.",
      "The stem of ager is agr-, so the forms are ager, agrī, agrō, agrum, agrō.",
      "The stem of vir is vir-."
    ]
  },
  {
    title: "Miser and integer",
    points: [
      "Some first/second-declension adjectives have a masculine nominative singular like puer or ager.",
      "Miser, misera, miserum means wretched.",
      "Integer, integra, integrum can mean fresh, uninjured, or whole."
    ]
  },
  {
    title: "Possessive adjectives",
    points: [
      "Meus, mea, meum means my or mine; tuus, tua, tuum means your or yours when speaking to one person.",
      "Noster, nostra, nostrum means our or ours; vester, vestra, vestrum means your or yours when speaking to more than one person.",
      "Possessive adjectives agree with the nouns they modify."
    ]
  },
  {
    title: "Trans",
    points: [
      "Trans means across.",
      "Trans takes the accusative case.",
      "Trans montēs means across the mountains."
    ]
  }
];

const lessonSeventeenGrammar = [
  {
    title: "Active and passive voice",
    points: [
      "In active voice, the subject does the action.",
      "In passive voice, the subject receives the action.",
      "Laudat means he praises; laudātur means he is praised."
    ]
  },
  {
    title: "Passive personal signs",
    points: [
      "Present-system passive forms change the active personal signs into passive signs.",
      "-ō becomes -or, and final -m becomes -r.",
      "-s becomes -ris, -t becomes -tur, -mus becomes -mur, -tis becomes -minī, and -nt becomes -ntur."
    ]
  },
  {
    title: "First-conjugation passive",
    points: [
      "Laudō is the model for first-conjugation passive forms.",
      "The present passive forms include laudor, laudāris, laudātur, laudāmur, laudāminī, and laudantur.",
      "The future passive second singular is laudāberis."
    ]
  },
  {
    title: "Ablative of agent",
    points: [
      "A living agent in a passive sentence is shown by ā or ab plus the ablative.",
      "Ā duce means by the leader; ab hominibus means by men.",
      "With forms of absum, ā or ab usually means from, not by."
    ]
  },
  {
    title: "Lesson 17 vocabulary",
    points: [
      "Administrō means manage or administer.",
      "Appellō means address or call upon.",
      "Confirmō means strengthen or encourage, and cōnservō means preserve, keep, save, or spare."
    ]
  }
];

const lessonEighteenGrammar = [
  {
    title: "Second-conjugation passive",
    points: [
      "Moneō is the model for Lesson 18 second-conjugation passive forms.",
      "The present passive forms include moneor, monēris, monētur, monēmur, monēminī, and monentur.",
      "The future passive second singular is monēberis."
    ]
  },
  {
    title: "Ablative of means",
    points: [
      "The ablative of means names the thing or tool by which something is done.",
      "Means uses the ablative alone, without ā or ab.",
      "Gladiō can mean by means of a sword; tēlīs can mean by means of darts or weapons."
    ]
  },
  {
    title: "Agency versus means",
    points: [
      "A living agent uses ā or ab plus the ablative.",
      "A thing used as means is ablative without a preposition.",
      "Ab equitibus is agency; tēlīs is means."
    ]
  },
  {
    title: "Lesson 18 vocabulary",
    points: [
      "Contineō means hold in, keep, restrain, or contain.",
      "Obtineō means hold, occupy, or obtain.",
      "Aut means or; aut...aut means either...or; neque...neque means neither...nor; postea means afterwards."
    ]
  }
];

const lessonNineteenGrammar = [
  {
    title: "Third-conjugation passive",
    points: [
      "Mittō is the model for third-conjugation passive forms.",
      "The present passive forms include mittor, mitteris, mittitur, mittimur, mittiminī, and mittuntur.",
      "The passive signs are the same signs learned in Lesson 17."
    ]
  },
  {
    title: "Imperfect and future passive",
    points: [
      "The imperfect passive uses forms like mittēbar, mittēbāris, and mittēbantur.",
      "The future passive uses forms like mittar, mittēris, mittētur, and mittentur.",
      "Mittēris means you will be sent; mitteris means you are sent."
    ]
  },
  {
    title: "Agency and means reviewed",
    points: [
      "Ā Caesare means by Caesar and shows agency.",
      "Gladiīs means by means of swords and shows means.",
      "In English both may sound like by, so Latin form gives the clue."
    ]
  },
  {
    title: "Lesson 19 vocabulary",
    points: [
      "Trādō means hand over.",
      "Dīmittō means send away or dismiss, and occīdō means kill.",
      "Sine means without and takes the ablative; ferē means almost."
    ]
  }
];

const lessonTwentyGrammar = [
  {
    title: "Fourth-conjugation passive",
    points: [
      "Audiō is the model for fourth-conjugation passive forms.",
      "The present passive forms include audior, audīris, audītur, audīmur, audīminī, and audiuntur.",
      "The future passive forms include audiar, audiēris, audiētur, audiēmur, audiēminī, and audientur."
    ]
  },
  {
    title: "Mūniō review",
    points: [
      "Mūniō can mean fortify.",
      "With viam or viās, mūniō can mean construct a road.",
      "Urbs mūrō mūnītur means the city is fortified with a wall."
    ]
  },
  {
    title: "Ablative of accompaniment",
    points: [
      "When with means in company with, Latin uses cum plus the ablative.",
      "Cum Caesare means with Caesar.",
      "The swords are in the camp with the darts uses cum tēlīs, because the swords are together with the darts."
    ]
  },
  {
    title: "Means versus accompaniment",
    points: [
      "Means names the thing used and usually has no preposition: gladiō means by means of a sword.",
      "Accompaniment names company and uses cum: cum Rōmānīs means with the Romans.",
      "A living agent uses ā or ab: ā Caesare means by Caesar."
    ]
  }
];

const lessonTwentyOneGrammar = [
  {
    title: "Perfect-system passive",
    points: [
      "The perfect, pluperfect, and future perfect passive tenses are compound tenses.",
      "They use the perfect participle passive plus a form of sum.",
      "Laudātus sum means I was praised or I have been praised."
    ]
  },
  {
    title: "Perfect participle passive",
    points: [
      "The perfect participle passive is the fourth principal part of a transitive verb.",
      "It is declined like magnus, magna, magnum.",
      "It agrees with the subject in gender, number, and case."
    ]
  },
  {
    title: "Three passive tenses",
    points: [
      "Perfect passive uses the present of sum: laudātus sum.",
      "Pluperfect passive uses the imperfect of sum: laudātus eram.",
      "Future perfect passive uses the future of sum: laudātus erō."
    ]
  },
  {
    title: "Agreement examples",
    points: [
      "Maria laudāta est uses laudāta because Maria is feminine singular.",
      "Militēs laudātī sunt uses laudātī because militēs is masculine plural.",
      "Castra mūnīta sunt uses mūnīta because castra is neuter plural."
    ]
  },
  {
    title: "Lesson 21 vocabulary",
    points: [
      "Explōrō means reconnoiter or find out.",
      "Premō means press or press hard; retineō means hold back or keep.",
      "Comparō means prepare or get ready, and vehementer means greatly or violently."
    ]
  }
];

const lessonTwentyTwoGrammar = [
  {
    title: "Subjunctive mood",
    points: [
      "The indicative mood states facts or asks direct questions.",
      "The subjunctive mood is used in special constructions, including purpose clauses.",
      "In purpose clauses, English often uses helping words like may, might, or in order to."
    ]
  },
  {
    title: "Present subjunctive active",
    points: [
      "First conjugation changes its stem vowel to ē: laudem, laudēs, laudet.",
      "Second, third, and fourth conjugations use a as the key vowel in many present subjunctive forms.",
      "The final personal signs are familiar: -m, -s, -t, -mus, -tis, -nt."
    ]
  },
  {
    title: "Purpose clauses",
    points: [
      "A purpose clause answers why the main action happens.",
      "A positive purpose clause is introduced by ut.",
      "The verb in a purpose clause is subjunctive."
    ]
  },
  {
    title: "Primary sequence and nē",
    points: [
      "Present, future, and future perfect indicative are primary tenses.",
      "After a primary main verb, use the present subjunctive in a purpose clause.",
      "Negative purpose uses nē: lest, or in order that not."
    ]
  },
  {
    title: "Lesson 22 vocabulary",
    points: [
      "Vita means life; vallum means rampart or wall; fossa means ditch; amicitia means friendship.",
      "Celeriter means swiftly; diū means a long time.",
      "Exspectō means wait for, and expugnō means take by storm."
    ]
  }
];

const lessonTwentyThreeGrammar = [
  {
    title: "Imperfect subjunctive active",
    points: [
      "The imperfect subjunctive is formed from the present infinitive plus personal endings.",
      "Laudāre gives laudārem, laudārēs, laudāret, and so on.",
      "Sum uses essem, essēs, esset, essēmus, essētis, essent."
    ]
  },
  {
    title: "Secondary sequence",
    points: [
      "Imperfect, perfect, and pluperfect indicative are secondary tenses.",
      "After a secondary main verb, use the imperfect subjunctive in a purpose clause.",
      "Vēnērunt ut audīrent means they came to hear."
    ]
  },
  {
    title: "Purpose clause review",
    points: [
      "Purpose clauses use ut for positive purpose and nē for negative purpose.",
      "Primary main verb points to present subjunctive.",
      "Secondary main verb points to imperfect subjunctive."
    ]
  },
  {
    title: "Adjectives as nouns",
    points: [
      "An adjective can stand as a noun when the person or group is understood.",
      "Fortēs can mean the brave.",
      "Bonī can mean the good."
    ]
  },
  {
    title: "Lesson 23 vocabulary and idiom",
    points: [
      "Cōnsilium means plan or counsel; concilium means council.",
      "Tribūnus means tribune; legātus means envoy or lieutenant.",
      "Obsidēs inter sē dant means they exchange hostages."
    ]
  }
];

const lessonTwentyFourGrammar = [
  {
    title: "Relative pronouns",
    points: [
      "Quī, quae, quod means who, which, or that.",
      "A relative pronoun agrees with its antecedent in gender and number.",
      "Its case comes from the job it does in its own clause."
    ]
  },
  {
    title: "Relative clauses",
    points: [
      "A relative clause describes a noun or pronoun.",
      "In Latin, the relative pronoun is expressed even when English leaves whom or that understood.",
      "Quem is masculine singular accusative; quam is feminine singular accusative; quod can be neuter nominative or accusative."
    ]
  },
  {
    title: "The uses of ad",
    points: [
      "Ad takes the accusative.",
      "After motion, ad often means to or up to.",
      "With time it can mean until; with adjectives like parātus or ūtilis it can mean for."
    ]
  },
  {
    title: "Impersonal verbs",
    points: [
      "An impersonal Latin verb has no definite subject and is third person singular.",
      "Acriter pugnātum est can be translated there was bitter fighting.",
      "Ad flūmen perventum est can be translated they arrived at the river."
    ]
  },
  {
    title: "Relative clauses of purpose",
    points: [
      "Latin can use a relative clause of purpose instead of an ut-clause.",
      "Legātōs mīsit quī pācem peterent means he sent envoys to seek peace.",
      "When a comparative appears in a purpose clause, quō can be used: quō facilius, so that more easily."
    ]
  }
];

const lessonTwentyFiveGrammar = [
  {
    title: "Direct questions",
    points: [
      "A direct question is addressed directly to someone.",
      "Direct questions generally use the indicative mood.",
      "They may be introduced by question adverbs, particles, pronouns, or adjectives."
    ]
  },
  {
    title: "Ubi, quō, unde, and cūr",
    points: [
      "Ubi asks where when there is rest or location.",
      "Quō asks where to when there is motion toward a place.",
      "Unde asks from where, and cūr asks why."
    ]
  },
  {
    title: "-ne, num, and nōnne",
    points: [
      "-ne asks a neutral yes/no question.",
      "Num usually expects the answer no.",
      "Nōnne usually expects the answer yes."
    ]
  },
  {
    title: "Quis, quid, and quī",
    points: [
      "Quis and quid are interrogative pronouns: who? what?",
      "Quī, quae, quod can be interrogative adjectives when they modify a noun.",
      "In quōs virōs, quōs modifies virōs and means which men as direct object."
    ]
  },
  {
    title: "Calling, naming, and leading across",
    points: [
      "Verbs of calling can take two accusatives: tē amīcum vocō means I call you friend.",
      "With nōmen, Latin uses the ablative: quō nōmine means by what name.",
      "Trādūcō can take two accusatives: lead the army across the river."
    ]
  }
];

const lessonTwentySixGrammar = [
  {
    title: "Perfect-system subjunctive",
    points: [
      "Perfect and pluperfect subjunctive active forms use the perfect stem.",
      "The perfect subjunctive uses endings like -erim, -erīs, -erit.",
      "The pluperfect subjunctive uses endings like -issem, -issēs, -isset."
    ]
  },
  {
    title: "Indirect questions",
    points: [
      "An indirect question depends on a verb of asking, saying, thinking, or similar meaning.",
      "Indirect questions are noun clauses and act as the object of the main verb.",
      "The mood in an indirect question is always subjunctive."
    ]
  },
  {
    title: "Primary sequence",
    points: [
      "After a primary main verb, use present subjunctive for same-time action.",
      "After a primary main verb, use perfect subjunctive for action before the main verb.",
      "Rogat ubi sint means he asks where they are; rogat num vīcerint means he asks whether they conquered."
    ]
  },
  {
    title: "Secondary sequence",
    points: [
      "After a secondary main verb, use imperfect subjunctive for same-time action.",
      "After a secondary main verb, use pluperfect subjunctive for action before the main verb.",
      "Rogāvit ubi essent means he asked where they were; rogāvit num vīcissent means he asked whether they had conquered."
    ]
  },
  {
    title: "Lesson 26 vocabulary",
    points: [
      "Rogō means ask; quaerō means ask or seek.",
      "Incolō means inhabit; cōnsistō means halt or take a position.",
      "Quantus asks how great or how much; genus means kind or race; aqua means water."
    ]
  }
];

const lessonTwentySevenGrammar = [
  {
    title: "The vocative",
    points: [
      "The vocative is the case of direct address.",
      "A second-declension -us noun usually changes -us to -e in the vocative singular.",
      "The vocative generally does not stand first in a Latin sentence."
    ]
  },
  {
    title: "The imperative",
    points: [
      "The imperative mood is used for commands.",
      "The present imperative active is formed on the present stem.",
      "Singular commands address one person; plural commands usually end in -te."
    ]
  },
  {
    title: "Wishes",
    points: [
      "A present subjunctive in a wish is translated with may.",
      "Utinam often introduces a wish.",
      "The negative for wishes is nē."
    ]
  },
  {
    title: "Hortatory subjunctive",
    points: [
      "The hortatory subjunctive is first person plural.",
      "Translate it with let us.",
      "Grātiās agāmus means let us give thanks."
    ]
  },
  {
    title: "Lesson 27 vocabulary",
    points: [
      "Doceō means teach or inform and can take two accusatives.",
      "Tollō means lift up or take away.",
      "Miserēre nōbīs means have mercy on us."
    ]
  }
];

const lessonTwentyEightGrammar = [
  {
    title: "Suī as a direct reflexive",
    points: [
      "Suī, sibi, sē, sē is used for himself, herself, itself, or themselves.",
      "A direct reflexive refers to the subject of its own clause.",
      "Sē laudat means he praises himself."
    ]
  },
  {
    title: "Suus as a possessive adjective",
    points: [
      "Suus, sua, suum means his own, her own, its own, or their own.",
      "Because suus is an adjective, it agrees with the noun it modifies.",
      "Suus and suī are used for third-person reflexives only."
    ]
  },
  {
    title: "Eius and eōrum",
    points: [
      "When his, her, its, or their does not refer back to the subject, use eius or eōrum.",
      "Caesar praised the centurion; then Caesar praised his courage uses eius.",
      "This keeps his own distinct from someone else's."
    ]
  },
  {
    title: "Dēdō and in fugam dare",
    points: [
      "Dēdō always takes an object in Latin.",
      "For surrender, Latin uses a reflexive: sē dēdidērunt.",
      "In fugam dare means put to flight."
    ]
  },
  {
    title: "Indirect reflexives",
    points: [
      "In a subordinate purpose clause or indirect question, suī and suus can refer back to the subject of the main verb.",
      "Caesar mīlitēs vocāvit quī sē defenderent means Caesar called soldiers to defend him.",
      "Ante means before, praesidium means garrison or protection, and vērō is postpositive."
    ]
  }
];

const lessonTwentyNineGrammar = [
  {
    title: "Passive subjunctive",
    points: [
      "The passive subjunctive changes the final personal signs just as passive indicative forms do.",
      "Vincāmur means we may be conquered.",
      "Passive subjunctives often appear in purpose clauses."
    ]
  },
  {
    title: "Perfect-system passive subjunctive",
    points: [
      "The perfect-system passive subjunctive is compound.",
      "Use the perfect passive participle plus the proper subjunctive form of sum.",
      "Missus sit means he may have been sent or that he was sent."
    ]
  },
  {
    title: "Cum, when",
    points: [
      "Cum meaning when usually takes the subjunctive in secondary sequence.",
      "Use imperfect subjunctive for same-time action.",
      "Use pluperfect subjunctive for action that happened before the main verb."
    ]
  },
  {
    title: "Causa and cause",
    points: [
      "Causa follows a genitive and means for the sake of.",
      "Pācis causa means for the sake of peace.",
      "The ablative without a preposition can express cause or reason."
    ]
  },
  {
    title: "Lesson 29 vocabulary",
    points: [
      "Sciō means know, pācō means pacify, and relinquō means leave behind.",
      "Subitō means suddenly, and probō means approve.",
      "Mōre suō means according to their custom."
    ]
  }
];

const lessonThirtyGrammar = [
  {
    title: "Perfect participle passive",
    points: [
      "A participle is a verbal adjective: it expresses action and modifies a noun or pronoun.",
      "For regular verbs, the perfect participle passive is the fourth principal part.",
      "Laudātus can mean praised or having been praised."
    ]
  },
  {
    title: "Agreement",
    points: [
      "The perfect participle passive is declined like magnus, magna, magnum.",
      "It agrees with the noun it modifies in gender, number, and case.",
      "Castra mūnīta uses neuter plural agreement because castra is neuter plural in form."
    ]
  },
  {
    title: "Intransitive verbs",
    points: [
      "An intransitive verb cannot take a direct object.",
      "When an intransitive verb has a passive participle, it is given as neuter.",
      "Pugnātum est is impersonal and can mean there was fighting or they fought."
    ]
  },
  {
    title: "Defective principal parts",
    points: [
      "Some verbs do not have a perfect participle passive.",
      "If a future active participle is listed, it ends in -ūrus.",
      "Cessūrus means about to yield."
    ]
  },
  {
    title: "Lesson 30 vocabulary",
    points: [
      "Addūcō means lead to or lead on.",
      "Commoveō means alarm, arouse, or move.",
      "Impediō means hinder; impeditus can mean encumbered or difficult."
    ]
  }
];

const lessonThirtyOneGrammar = [
  {
    title: "Hic, haec, hoc",
    points: [
      "Hic, haec, hoc means this in the singular and these in the plural.",
      "It is a demonstrative: a pointing-out word.",
      "Its genitive singular is huius, and its dative singular is huic."
    ]
  },
  {
    title: "As an adjective",
    points: [
      "Hic, haec, hoc can modify a noun like an adjective.",
      "It generally stands before the noun it modifies.",
      "It agrees with the noun in gender, number, and case."
    ]
  },
  {
    title: "As a pronoun",
    points: [
      "Hic, haec, hoc can also stand alone as a pronoun.",
      "As a pronoun, it agrees in gender and number with the word it refers to.",
      "Hī can mean these men; haec can mean these things."
    ]
  },
  {
    title: "Lesson 31 vocabulary",
    points: [
      "Contra takes the accusative and means against or opposite.",
      "Ā tergō means from the rear; ā fronte means from the front.",
      "Summus can mean highest, top of, or very great."
    ]
  },
  {
    title: "Form watch",
    points: [
      "Hic forms repeat: haec can be feminine singular or neuter plural.",
      "Hīs is both dative and ablative plural for all genders.",
      "The noun's job in the sentence helps decide which meaning fits."
    ]
  }
];

const unitCatalog = {
  unit1: {
    label: "Unit 1",
    title: "Noun foundations"
  },
  unit2: {
    label: "Unit 2",
    title: "Adjectives"
  },
  unit3: {
    label: "Unit 3",
    title: "Verb foundations"
  },
  unit4: {
    label: "Unit 4",
    title: "More nouns & adjectives"
  },
  unit5: {
    label: "Unit 5",
    title: "Passive voice"
  },
  unit6: {
    label: "Unit 6",
    title: "Subjunctive purpose"
  },
  unit7: {
    label: "Unit 7",
    title: "Direct questions"
  },
  unit8: {
    label: "Unit 8",
    title: "Commands, reflexives, and passive subjunctive"
  },
  unit9: {
    label: "Unit 9",
    title: "Participles and demonstratives"
  }
};

function getUnitLessonSets(unitKey = "unit1") {
  return Object.entries(lessonCatalog)
    .filter(([, info]) => (info.unit || "unit1") === unitKey)
    .map(([lessonSet]) => lessonSet);
}

function getUnitReviewInfo(unitKey = lessonCatalog[activeLessonSet]?.unit || "unit1") {
  const unit = unitCatalog[unitKey] || unitCatalog.unit1;
  const lessonSets = getUnitLessonSets(unitKey);
  const lessonNumbers = lessonSets.map((lessonSet) => Number(lessonSet.replace("lesson", ""))).filter(Boolean);
  const firstLesson = Math.min(...lessonNumbers);
  const lastLesson = Math.max(...lessonNumbers);
  const lessonRange = lessonNumbers.length === 1
    ? `Lesson ${firstLesson}`
    : `Lessons ${firstLesson}-${lastLesson}`;
  return {
    unitKey,
    unit,
    lessonSets,
    lessonRange,
    vocabularyMode: `vocabulary-unit-${unitKey}`,
    vocabularyBestKey: `unitVocabulary${unitKey.charAt(0).toUpperCase()}${unitKey.slice(1)}`,
    title: `${unit.label} Review`,
    subtitle: `A focused review using only ${unit.label} material from ${lessonRange}.`
  };
}

function unitReviewEndingDescription(unitKey) {
  if (unitKey === "unit9") return "Type the Unit 9 perfect participle passive and hic, haec, hoc forms with no hints.";
  if (unitKey === "unit8") return "Type the Unit 8 vocative, imperative, reflexive, passive subjunctive, cum, causa, and cause patterns with no hints.";
  if (unitKey === "unit7") return "Type the Unit 7 direct-question, interrogative, and perfect-system subjunctive forms with no hints.";
  if (unitKey === "unit6") return "Type the Unit 6 present subjunctive, imperfect subjunctive, and relative pronoun forms with no hints.";
  if (unitKey === "unit5") return "Type the Unit 5 passive personal signs and passive verb forms with no hints.";
  if (unitKey === "unit4") return "Type the Unit 4 noun, adjective, and possessive forms with no hints.";
  if (unitKey === "unit3") return "Type the Unit 3 verb and pronoun forms with no hints.";
  if (unitKey === "unit2") return "Type the Unit 2 adjective endings with no hints.";
  return "Type the Unit 1 noun endings and special plural patterns with no hints.";
}

const lessonCatalog = {
  lesson1: {
    label: "Lesson 1",
    tabTitle: "1st Decl.",
    unit: "unit1",
    eyebrow: "Unit one",
    title: "Lesson 1 · The First Declension",
    description: "Six complete Lesson 1 quests · about 35 minutes total",
    badge: "Henle Lesson 1"
  },
  lesson2: {
    label: "Lesson 2",
    tabTitle: "2nd Decl.",
    unit: "unit1",
    eyebrow: "Unit one",
    title: "Lesson 2 · The Second Declension",
    description: "Six Lesson 2 quests · servus, bellum, dative, prepositions, sum, and quod",
    badge: "Henle Lesson 2"
  },
  lesson3: {
    label: "Lesson 3",
    tabTitle: "3rd Decl.",
    unit: "unit1",
    eyebrow: "Unit one",
    title: "Lesson 3 · The Third Declension",
    description: "Eight Lesson 3 quests · lex, pars, appositives, there, and flumen",
    badge: "Henle Lesson 3"
  },
  lesson4: {
    label: "Lesson 4",
    tabTitle: "4th Decl.",
    unit: "unit1",
    eyebrow: "Unit one",
    title: "Lesson 4 · The Fourth Declension",
    description: "Six Lesson 4 quests · portus, fourth-declension endings, in, and autem",
    badge: "Henle Lesson 4"
  },
  lesson5: {
    label: "Lesson 5",
    tabTitle: "5th Decl.",
    unit: "unit1",
    eyebrow: "Unit one",
    title: "Lesson 5 · The Fifth Declension",
    description: "Five Lesson 5 quests · rēs, fidēs, aciēs, spēs, and posuērunt",
    badge: "Henle Lesson 5"
  },
  lesson6: {
    label: "Lesson 6",
    tabTitle: "Special Plurals",
    unit: "unit1",
    eyebrow: "Unit one",
    title: "Lesson 6 · Special Plural Meanings",
    description: "Five Lesson 6 quests · castra, impedimenta, gratia, copia, and gratias agunt",
    badge: "Henle Lesson 6"
  },
  lesson7: {
    label: "Lesson 7",
    tabTitle: "1st/2nd Adj.",
    unit: "unit2",
    eyebrow: "Unit two",
    title: "Lesson 7 · First and Second Declension Adjectives",
    description: "Six Lesson 7 quests · magnus, adjective agreement, predicate adjectives, and pro",
    badge: "Henle Lesson 7"
  },
  lesson8: {
    label: "Lesson 8",
    tabTitle: "3rd Decl. Adj.",
    unit: "unit2",
    eyebrow: "Unit two",
    title: "Lesson 8 · Third Declension Adjectives",
    description: "Five Lesson 8 quests · gravis, governed cases, Jēsus, quid, and prima luce",
    badge: "Henle Lesson 8"
  },
  lesson9: {
    label: "Lesson 9",
    tabTitle: "1st Conj.",
    unit: "unit3",
    eyebrow: "Unit three",
    title: "Lesson 9 · The First Conjugation",
    description: "Seven Lesson 9 quests · principal parts, laudō, present, imperfect, future, and questions",
    badge: "Henle Lesson 9"
  },
  lesson10: {
    label: "Lesson 10",
    tabTitle: "2nd Conj.",
    unit: "unit3",
    eyebrow: "Unit three",
    title: "Lesson 10 · The Second Conjugation",
    description: "Five Lesson 10 quests · moneō, timeō, terreō, habeō, and arma",
    badge: "Henle Lesson 10"
  },
  lesson11: {
    label: "Lesson 11",
    tabTitle: "Pronouns",
    unit: "unit3",
    eyebrow: "Unit three",
    title: "Lesson 11 · Personal Pronouns",
    description: "Six Lesson 11 quests · ego, tū, is/ea/id, reflexives, and pronoun agreement",
    badge: "Henle Lesson 11"
  },
  lesson12: {
    label: "Lesson 12",
    tabTitle: "3rd Conj.",
    unit: "unit3",
    eyebrow: "Unit three",
    title: "Lesson 12 · Third Conjugation Active",
    description: "Six Lesson 12 quests · mittō, present, imperfect, future, and third-conjugation vocabulary",
    badge: "Henle Lesson 12"
  },
  lesson13: {
    label: "Lesson 13",
    tabTitle: "4th Conj.",
    unit: "unit3",
    eyebrow: "Unit three",
    title: "Lesson 13 · Fourth Conjugation Active",
    description: "Five Lesson 13 quests · audiō, present, imperfect, future, and per",
    badge: "Henle Lesson 13"
  },
  lesson14: {
    label: "Lesson 14",
    tabTitle: "Sum",
    unit: "unit3",
    eyebrow: "Unit three",
    title: "Lesson 14 · Sum and Absum",
    description: "Five Lesson 14 quests · sum, being, undique, tēlum, absum, and longē",
    badge: "Henle Lesson 14"
  },
  lesson15: {
    label: "Lesson 15",
    tabTitle: "Perfect",
    unit: "unit3",
    eyebrow: "Unit three",
    title: "Lesson 15 · Perfect System Active",
    description: "Six Lesson 15 quests · perfect stems, perfect, pluperfect, future perfect, and new verbs",
    badge: "Henle Lesson 15"
  },
  lesson16: {
    label: "Lesson 16",
    tabTitle: "Puer/Ager",
    unit: "unit4",
    eyebrow: "Unit four",
    title: "Lesson 16 · More First and Second Declension Forms",
    description: "Five Lesson 16 quests · puer, ager, vir, miser, integer, possessives, and trans",
    badge: "Henle Lesson 16"
  },
  lesson17: {
    label: "Lesson 17",
    tabTitle: "1st Passive",
    unit: "unit5",
    eyebrow: "Unit five",
    title: "Lesson 17 · First Conjugation Passive",
    description: "Five Lesson 17 quests · active/passive voice, laudō passive, agency, and new first-conjugation verbs",
    badge: "Henle Lesson 17"
  },
  lesson18: {
    label: "Lesson 18",
    tabTitle: "2nd Passive",
    unit: "unit5",
    eyebrow: "Unit five",
    title: "Lesson 18 · Second Conjugation Passive",
    description: "Five Lesson 18 quests · moneō passive, ablative of means, aut, neque, and postea",
    badge: "Henle Lesson 18"
  },
  lesson19: {
    label: "Lesson 19",
    tabTitle: "3rd Passive",
    unit: "unit5",
    eyebrow: "Unit five",
    title: "Lesson 19 · Third Conjugation Passive",
    description: "Five Lesson 19 quests · mittō passive, agency versus means, trādō, dīmittō, occīdō, sine, and ferē",
    badge: "Henle Lesson 19"
  },
  lesson20: {
    label: "Lesson 20",
    tabTitle: "4th Passive",
    unit: "unit5",
    eyebrow: "Unit five",
    title: "Lesson 20 · Fourth Conjugation Passive",
    description: "Five Lesson 20 quests · audiō passive, mūniō forms, accompaniment, means, and cum",
    badge: "Henle Lesson 20"
  },
  lesson21: {
    label: "Lesson 21",
    tabTitle: "Perf. Passive",
    unit: "unit5",
    eyebrow: "Unit five",
    title: "Lesson 21 · Perfect System Passive",
    description: "Five Lesson 21 quests · perfect passive, participle agreement, pluperfect passive, future perfect passive, and new verbs",
    badge: "Henle Lesson 21"
  },
  lesson22: {
    label: "Lesson 22",
    tabTitle: "Present Subj.",
    unit: "unit6",
    eyebrow: "Unit six",
    title: "Lesson 22 · Present Subjunctive and Purpose Clauses",
    description: "Five Lesson 22 quests · present subjunctive active, ut, nē, primary tenses, and purpose clauses",
    badge: "Henle Lesson 22"
  },
  lesson23: {
    label: "Lesson 23",
    tabTitle: "Imperf. Subj.",
    unit: "unit6",
    eyebrow: "Unit six",
    title: "Lesson 23 · Imperfect Subjunctive Active",
    description: "Five Lesson 23 quests · imperfect subjunctive, secondary tenses, adjectives as nouns, and inter sē",
    badge: "Henle Lesson 23"
  },
  lesson24: {
    label: "Lesson 24",
    tabTitle: "Relative Clauses",
    unit: "unit6",
    eyebrow: "Unit six",
    title: "Lesson 24 · Relative Clauses and the Use of Ad",
    description: "Five Lesson 24 quests · quī quae quod, ad, impersonal verbs, relative purpose, and quō",
    badge: "Henle Lesson 24"
  },
  lesson25: {
    label: "Lesson 25",
    tabTitle: "Direct Questions",
    unit: "unit7",
    eyebrow: "Unit seven",
    title: "Lesson 25 · Direct Questions",
    description: "Five Lesson 25 quests · ubi, quō, unde, cūr, -ne, num, nōnne, quis, quid, and interrogative adjectives",
    badge: "Henle Lesson 25"
  },
  lesson26: {
    label: "Lesson 26",
    tabTitle: "Indirect Questions",
    unit: "unit7",
    eyebrow: "Unit seven",
    title: "Lesson 26 · Perfect-System Subjunctive and Indirect Questions",
    description: "Five Lesson 26 quests · perfect subjunctive, pluperfect subjunctive, and indirect-question sequence",
    badge: "Henle Lesson 26"
  },
  lesson27: {
    label: "Lesson 27",
    tabTitle: "Vocative & Imperative",
    unit: "unit8",
    eyebrow: "Unit eight",
    title: "Lesson 27 · The Vocative and Imperative Mood",
    description: "Six Lesson 27 quests · vocative, imperative commands, wishes, exhortations, and new command vocabulary",
    badge: "Henle Lesson 27"
  },
  lesson28: {
    label: "Lesson 28",
    tabTitle: "Suus & Suī",
    unit: "unit8",
    eyebrow: "Unit eight",
    title: "Lesson 28 · Suus and Suī",
    description: "Five Lesson 28 quests · direct reflexives, possessive reflexives, surrender, in fugam dare, and indirect reflexives",
    badge: "Henle Lesson 28"
  },
  lesson29: {
    label: "Lesson 29",
    tabTitle: "Passive Subj.",
    unit: "unit8",
    eyebrow: "Unit eight",
    title: "Lesson 29 · The Passive Subjunctive",
    description: "Five Lesson 29 quests · passive subjunctive, perfect-system passive subjunctive, cum clauses, causa, and cause",
    badge: "Henle Lesson 29"
  },
  lesson30: {
    label: "Lesson 30",
    tabTitle: "Perfect Part.",
    unit: "unit9",
    eyebrow: "Unit nine",
    title: "Lesson 30 · The Perfect Participle Passive",
    description: "Five Lesson 30 quests · participles, agreement, intransitive notes, and new participle vocabulary",
    badge: "Henle Lesson 30"
  },
  lesson31: {
    label: "Lesson 31",
    tabTitle: "Hic",
    unit: "unit9",
    eyebrow: "Unit nine",
    title: "Lesson 31 · Hic, Haec, Hoc",
    description: "Five Lesson 31 quests · demonstrative forms, adjective use, pronoun use, contra, ā tergō, ā fronte, and summus",
    badge: "Henle Lesson 31"
  }
};

function getReviewResources(lessonSet = activeLessonSet) {
  if (lessonSet === "lesson31") {
    return {
      vocabulary: lessonThirtyOneVocabulary,
      endings: lessonThirtyOneGrammarForms.both,
      grammarEndings: lessonThirtyOneGrammarForms,
      grammar: lessonThirtyOneGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson31",
      grammarModes: {
        singular: "grammar-lesson31-singular",
        plural: "grammar-lesson31-plural",
        both: "grammar-lesson31-both"
      },
      formModes: {
        singular: "forms-lesson31-singular",
        plural: "forms-lesson31-plural",
        mixed: "forms-lesson31-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson31",
        grammar: "grammarLesson31",
        grammarSingular: "grammarLesson31Singular",
        grammarPlural: "grammarLesson31Plural",
        singular: "formsLesson31Singular",
        plural: "formsLesson31Plural",
        mixed: "formsLesson31Mixed"
      },
      wordGardenTitle: "Lesson 31 word garden",
      grammarTitle: "Lesson 31 grammar map",
      grammarMatchStepTitle: "Step 4 · Match hic forms and meanings",
      grammarMatchDescription: "Match hic, haec, hoc forms, rules, and Lesson 31 phrases with their meanings.",
      grammarPairTitle: "Lesson 31 Hic, Haec, Hoc Forms",
      grammarPairDescription: "Match demonstrative forms, adjective/pronoun patterns, contra phrases, and front/rear phrases with their meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 31 hic, haec, hoc forms and phrase patterns with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 31 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson30") {
    return {
      vocabulary: lessonThirtyVocabulary,
      endings: lessonThirtyGrammarForms.both,
      grammarEndings: lessonThirtyGrammarForms,
      grammar: lessonThirtyGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson30",
      grammarModes: {
        singular: "grammar-lesson30-singular",
        plural: "grammar-lesson30-plural",
        both: "grammar-lesson30-both"
      },
      formModes: {
        singular: "forms-lesson30-singular",
        plural: "forms-lesson30-plural",
        mixed: "forms-lesson30-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson30",
        grammar: "grammarLesson30",
        grammarSingular: "grammarLesson30Singular",
        grammarPlural: "grammarLesson30Plural",
        singular: "formsLesson30Singular",
        plural: "formsLesson30Plural",
        mixed: "formsLesson30Mixed"
      },
      wordGardenTitle: "Lesson 30 word garden",
      grammarTitle: "Lesson 30 grammar map",
      grammarMatchStepTitle: "Step 4 · Match participle forms and meanings",
      grammarMatchDescription: "Match perfect participle passive forms, principal-part cues, and Lesson 30 rules with their meanings.",
      grammarPairTitle: "Lesson 30 Perfect Participle Passive Forms",
      grammarPairDescription: "Match participle agreement forms, fourth-principal-part forms, and Lesson 30 rule cues with their meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 30 perfect participle passive forms and phrases with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 30 participle form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson29") {
    return {
      vocabulary: lessonTwentyNineVocabulary,
      endings: lessonTwentyNineGrammarForms.both,
      grammarEndings: lessonTwentyNineGrammarForms,
      grammar: lessonTwentyNineGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson29",
      grammarModes: {
        singular: "grammar-lesson29-singular",
        plural: "grammar-lesson29-plural",
        both: "grammar-lesson29-both"
      },
      formModes: {
        singular: "forms-lesson29-singular",
        plural: "forms-lesson29-plural",
        mixed: "forms-lesson29-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson29",
        grammar: "grammarLesson29",
        grammarSingular: "grammarLesson29Singular",
        grammarPlural: "grammarLesson29Plural",
        singular: "formsLesson29Singular",
        plural: "formsLesson29Plural",
        mixed: "formsLesson29Mixed"
      },
      wordGardenTitle: "Lesson 29 word garden",
      grammarTitle: "Lesson 29 grammar map",
      grammarMatchStepTitle: "Step 4 · Match passive subjunctive and cause patterns",
      grammarMatchDescription: "Match passive subjunctive forms, cum clauses, causa phrases, and cause patterns with their meanings.",
      grammarPairTitle: "Lesson 29 Passive Subjunctive Forms and Patterns",
      grammarPairDescription: "Match present, imperfect, perfect, and pluperfect passive subjunctives plus Lesson 29 phrase patterns with their meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 29 passive subjunctive forms, cum clauses, causa phrases, and cause expressions with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 29 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson28") {
    return {
      vocabulary: lessonTwentyEightVocabulary,
      endings: lessonTwentyEightGrammarForms.both,
      grammarEndings: lessonTwentyEightGrammarForms,
      grammar: lessonTwentyEightGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson28",
      grammarModes: {
        singular: "grammar-lesson28-singular",
        plural: "grammar-lesson28-plural",
        both: "grammar-lesson28-both"
      },
      formModes: {
        singular: "forms-lesson28-singular",
        plural: "forms-lesson28-plural",
        mixed: "forms-lesson28-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson28",
        grammar: "grammarLesson28",
        grammarSingular: "grammarLesson28Singular",
        grammarPlural: "grammarLesson28Plural",
        singular: "formsLesson28Singular",
        plural: "formsLesson28Plural",
        mixed: "formsLesson28Mixed"
      },
      wordGardenTitle: "Lesson 28 word garden",
      grammarTitle: "Lesson 28 grammar map",
      grammarMatchStepTitle: "Step 4 · Match suus and sui meanings",
      grammarMatchDescription: "Match reflexive pronouns, possessive-reflexive forms, and Lesson 28 idioms with their meanings.",
      grammarPairTitle: "Lesson 28 Suus and Suī Forms",
      grammarPairDescription: "Match suī, suus, reflexive idioms, and direct/indirect reflexive patterns with their meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 28 reflexive forms, possessive phrases, and idioms with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 28 reflexive form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson27") {
    return {
      vocabulary: lessonTwentySevenVocabulary,
      endings: lessonTwentySevenGrammarForms.both,
      grammarEndings: lessonTwentySevenGrammarForms,
      grammar: lessonTwentySevenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson27",
      grammarModes: {
        singular: "grammar-lesson27-singular",
        plural: "grammar-lesson27-plural",
        both: "grammar-lesson27-both"
      },
      formModes: {
        singular: "forms-lesson27-singular",
        plural: "forms-lesson27-plural",
        mixed: "forms-lesson27-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson27",
        grammar: "grammarLesson27",
        grammarSingular: "grammarLesson27Singular",
        grammarPlural: "grammarLesson27Plural",
        singular: "formsLesson27Singular",
        plural: "formsLesson27Plural",
        mixed: "formsLesson27Mixed"
      },
      wordGardenTitle: "Lesson 27 word garden",
      grammarTitle: "Lesson 27 grammar map",
      grammarMatchStepTitle: "Step 4 · Match address, command, and wish forms",
      grammarMatchDescription: "Match vocatives, imperatives, wishes, exhortations, and Lesson 27 rules with their meanings.",
      grammarPairTitle: "Lesson 27 Address, Command, and Wish Forms",
      grammarPairDescription: "Match vocative forms, imperative commands, wish forms, and hortatory forms with their meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 27 vocatives, commands, wish forms, and exhortations with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 27 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson26") {
    return {
      vocabulary: lessonTwentySixVocabulary,
      endings: lessonTwentySixGrammarForms.both,
      grammarEndings: lessonTwentySixGrammarForms,
      grammar: lessonTwentySixGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson26",
      grammarModes: {
        singular: "grammar-lesson26-singular",
        plural: "grammar-lesson26-plural",
        both: "grammar-lesson26-both"
      },
      formModes: {
        singular: "forms-lesson26-singular",
        plural: "forms-lesson26-plural",
        mixed: "forms-lesson26-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson26",
        grammar: "grammarLesson26",
        grammarSingular: "grammarLesson26Singular",
        grammarPlural: "grammarLesson26Plural",
        singular: "formsLesson26Singular",
        plural: "formsLesson26Plural",
        mixed: "formsLesson26Mixed"
      },
      wordGardenTitle: "Lesson 26 word garden",
      grammarTitle: "Lesson 26 grammar map",
      grammarMatchStepTitle: "Step 4 · Match subjunctive and indirect-question meanings",
      grammarMatchDescription: "Match perfect-system subjunctive forms and indirect-question patterns with their meanings.",
      grammarPairTitle: "Lesson 26 Subjunctive and Indirect Question Forms",
      grammarPairDescription: "Match perfect and pluperfect subjunctive forms, sequence rules, and indirect-question signals with their meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 26 perfect-system subjunctive forms and indirect-question phrases with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 26 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson25") {
    return {
      vocabulary: lessonTwentyFiveVocabulary,
      endings: lessonTwentyFiveGrammarForms.both,
      grammarEndings: lessonTwentyFiveGrammarForms,
      grammar: lessonTwentyFiveGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson25",
      grammarModes: {
        singular: "grammar-lesson25-singular",
        plural: "grammar-lesson25-plural",
        both: "grammar-lesson25-both"
      },
      formModes: {
        singular: "forms-lesson25-singular",
        plural: "forms-lesson25-plural",
        mixed: "forms-lesson25-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson25",
        grammar: "grammarLesson25",
        grammarSingular: "grammarLesson25Singular",
        grammarPlural: "grammarLesson25Plural",
        singular: "formsLesson25Singular",
        plural: "formsLesson25Plural",
        mixed: "formsLesson25Mixed"
      },
      wordGardenTitle: "Lesson 25 word garden",
      grammarTitle: "Lesson 25 grammar map",
      grammarMatchStepTitle: "Step 4 · Match direct-question words and forms",
      grammarMatchDescription: "Match direct-question adverbs, particles, pronouns, and adjective forms with their meanings.",
      grammarPairTitle: "Lesson 25 Direct Question Words and Forms",
      grammarPairDescription: "Match question adverbs, particles, interrogative pronoun forms, and interrogative adjective phrases with their meanings.",
      grammarPromptNoun: "question word",
      wordFormsStepDescription: "Match Lesson 25 question words, interrogative forms, and direct-question phrases with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 25 question word or form with its English meaning."
    };
  }

  if (lessonSet === "lesson24") {
    return {
      vocabulary: lessonTwentyFourVocabulary,
      endings: lessonTwentyFourGrammarForms.both,
      grammarEndings: lessonTwentyFourGrammarForms,
      grammar: lessonTwentyFourGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson24",
      grammarModes: {
        singular: "grammar-lesson24-singular",
        plural: "grammar-lesson24-plural",
        both: "grammar-lesson24-both"
      },
      formModes: {
        singular: "forms-lesson24-singular",
        plural: "forms-lesson24-plural",
        mixed: "forms-lesson24-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson24",
        grammar: "grammarLesson24",
        grammarSingular: "grammarLesson24Singular",
        grammarPlural: "grammarLesson24Plural",
        singular: "formsLesson24Singular",
        plural: "formsLesson24Plural",
        mixed: "formsLesson24Mixed"
      },
      wordGardenTitle: "Lesson 24 word garden",
      grammarTitle: "Lesson 24 grammar map",
      grammarMatchStepTitle: "Step 4 · Match relative forms and purpose patterns",
      grammarMatchDescription: "Match relative pronoun forms, ad phrases, and purpose patterns with their meanings.",
      grammarPairTitle: "Lesson 24 Relative Forms and Ad Uses",
      grammarPairDescription: "Match relative pronouns, ad phrases, impersonal expressions, and relative-purpose patterns with their meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 24 relative pronoun forms, ad phrases, and purpose patterns with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 24 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson23") {
    return {
      vocabulary: lessonTwentyThreeVocabulary,
      endings: lessonTwentyThreeGrammarForms.both,
      grammarEndings: lessonTwentyThreeGrammarForms,
      grammar: lessonTwentyThreeGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson23",
      grammarModes: {
        singular: "grammar-lesson23-singular",
        plural: "grammar-lesson23-plural",
        both: "grammar-lesson23-both"
      },
      formModes: {
        singular: "forms-lesson23-singular",
        plural: "forms-lesson23-plural",
        mixed: "forms-lesson23-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson23",
        grammar: "grammarLesson23",
        grammarSingular: "grammarLesson23Singular",
        grammarPlural: "grammarLesson23Plural",
        singular: "formsLesson23Singular",
        plural: "formsLesson23Plural",
        mixed: "formsLesson23Mixed"
      },
      wordGardenTitle: "Lesson 23 word garden",
      grammarTitle: "Lesson 23 grammar map",
      grammarMatchStepTitle: "Step 4 · Match imperfect subjunctive forms",
      grammarMatchDescription: "Match imperfect subjunctive forms and purpose-tense patterns with their meanings.",
      grammarPairTitle: "Lesson 23 Imperfect Subjunctive Forms",
      grammarPairDescription: "Match imperfect subjunctive forms, purpose-tense choices, and the inter sē idiom with their meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 23 imperfect subjunctive forms, purpose phrases, and new words with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 23 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson22") {
    return {
      vocabulary: lessonTwentyTwoVocabulary,
      endings: lessonTwentyTwoGrammarForms.both,
      grammarEndings: lessonTwentyTwoGrammarForms,
      grammar: lessonTwentyTwoGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson22",
      grammarModes: {
        singular: "grammar-lesson22-singular",
        plural: "grammar-lesson22-plural",
        both: "grammar-lesson22-both"
      },
      formModes: {
        singular: "forms-lesson22-singular",
        plural: "forms-lesson22-plural",
        mixed: "forms-lesson22-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson22",
        grammar: "grammarLesson22",
        grammarSingular: "grammarLesson22Singular",
        grammarPlural: "grammarLesson22Plural",
        singular: "formsLesson22Singular",
        plural: "formsLesson22Plural",
        mixed: "formsLesson22Mixed"
      },
      wordGardenTitle: "Lesson 22 word garden",
      grammarTitle: "Lesson 22 grammar map",
      grammarMatchStepTitle: "Step 4 · Match present subjunctive forms",
      grammarMatchDescription: "Match present subjunctive forms and purpose-clause patterns with their meanings.",
      grammarPairTitle: "Lesson 22 Present Subjunctive Forms",
      grammarPairDescription: "Match present subjunctive forms, ut/nē patterns, and primary-tense clues with their meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 22 present subjunctive forms, purpose phrases, and new words with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 22 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson21") {
    return {
      vocabulary: lessonTwentyOneVocabulary,
      endings: lessonTwentyOneGrammarForms.both,
      grammarEndings: lessonTwentyOneGrammarForms,
      grammar: lessonTwentyOneGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson21",
      grammarModes: {
        singular: "grammar-lesson21-singular",
        plural: "grammar-lesson21-plural",
        both: "grammar-lesson21-both"
      },
      formModes: {
        singular: "forms-lesson21-singular",
        plural: "forms-lesson21-plural",
        mixed: "forms-lesson21-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson21",
        grammar: "grammarLesson21",
        grammarSingular: "grammarLesson21Singular",
        grammarPlural: "grammarLesson21Plural",
        singular: "formsLesson21Singular",
        plural: "formsLesson21Plural",
        mixed: "formsLesson21Mixed"
      },
      wordGardenTitle: "Lesson 21 word garden",
      grammarTitle: "Lesson 21 grammar map",
      grammarMatchStepTitle: "Step 4 · Match perfect passive forms to meanings",
      grammarMatchDescription: "Match perfect-system passive forms with the meaning they carry.",
      grammarPairTitle: "Lesson 21 Perfect Passive Forms",
      grammarPairDescription: "Match perfect, pluperfect, and future perfect passive forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 21 perfect-system passive forms, participles, and new vocabulary forms with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 21 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson20") {
    return {
      vocabulary: lessonTwentyVocabulary,
      endings: lessonTwentyGrammarForms.both,
      grammarEndings: lessonTwentyGrammarForms,
      grammar: lessonTwentyGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson20",
      grammarModes: {
        singular: "grammar-lesson20-singular",
        plural: "grammar-lesson20-plural",
        both: "grammar-lesson20-both"
      },
      formModes: {
        singular: "forms-lesson20-singular",
        plural: "forms-lesson20-plural",
        mixed: "forms-lesson20-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson20",
        grammar: "grammarLesson20",
        grammarSingular: "grammarLesson20Singular",
        grammarPlural: "grammarLesson20Plural",
        singular: "formsLesson20Singular",
        plural: "formsLesson20Plural",
        mixed: "formsLesson20Mixed"
      },
      wordGardenTitle: "Lesson 20 word garden",
      grammarTitle: "Lesson 20 grammar map",
      grammarMatchStepTitle: "Step 4 · Match fourth passive forms to meanings",
      grammarMatchDescription: "Match audiō passive forms with the meaning they carry.",
      grammarPairTitle: "Lesson 20 Audiō Passive Forms",
      grammarPairDescription: "Match fourth-conjugation passive forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 20 passive forms, means phrases, and accompaniment phrases with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 20 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson19") {
    return {
      vocabulary: lessonNineteenVocabulary,
      endings: lessonNineteenGrammarForms.both,
      grammarEndings: lessonNineteenGrammarForms,
      grammar: lessonNineteenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson19",
      grammarModes: {
        singular: "grammar-lesson19-singular",
        plural: "grammar-lesson19-plural",
        both: "grammar-lesson19-both"
      },
      formModes: {
        singular: "forms-lesson19-singular",
        plural: "forms-lesson19-plural",
        mixed: "forms-lesson19-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson19",
        grammar: "grammarLesson19",
        grammarSingular: "grammarLesson19Singular",
        grammarPlural: "grammarLesson19Plural",
        singular: "formsLesson19Singular",
        plural: "formsLesson19Plural",
        mixed: "formsLesson19Mixed"
      },
      wordGardenTitle: "Lesson 19 word garden",
      grammarTitle: "Lesson 19 grammar map",
      grammarMatchStepTitle: "Step 4 · Match third passive forms to meanings",
      grammarMatchDescription: "Match mittō passive forms with the meaning they carry.",
      grammarPairTitle: "Lesson 19 Mittō Passive Forms",
      grammarPairDescription: "Match third-conjugation passive forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 19 passive forms, agency phrases, means phrases, and new words with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 19 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson18") {
    return {
      vocabulary: lessonEighteenVocabulary,
      endings: lessonEighteenGrammarForms.both,
      grammarEndings: lessonEighteenGrammarForms,
      grammar: lessonEighteenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson18",
      grammarModes: {
        singular: "grammar-lesson18-singular",
        plural: "grammar-lesson18-plural",
        both: "grammar-lesson18-both"
      },
      formModes: {
        singular: "forms-lesson18-singular",
        plural: "forms-lesson18-plural",
        mixed: "forms-lesson18-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson18",
        grammar: "grammarLesson18",
        grammarSingular: "grammarLesson18Singular",
        grammarPlural: "grammarLesson18Plural",
        singular: "formsLesson18Singular",
        plural: "formsLesson18Plural",
        mixed: "formsLesson18Mixed"
      },
      wordGardenTitle: "Lesson 18 word garden",
      grammarTitle: "Lesson 18 grammar map",
      grammarMatchStepTitle: "Step 4 · Match second passive forms to meanings",
      grammarMatchDescription: "Match moneō passive forms with the meaning they carry.",
      grammarPairTitle: "Lesson 18 Moneō Passive Forms",
      grammarPairDescription: "Match second-conjugation passive forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 18 passive forms, means phrases, and new words with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 18 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson17") {
    return {
      vocabulary: lessonSeventeenVocabulary,
      endings: lessonSeventeenGrammarForms.both,
      grammarEndings: lessonSeventeenGrammarForms,
      grammar: lessonSeventeenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson17",
      grammarModes: {
        singular: "grammar-lesson17-singular",
        plural: "grammar-lesson17-plural",
        both: "grammar-lesson17-both"
      },
      formModes: {
        singular: "forms-lesson17-singular",
        plural: "forms-lesson17-plural",
        mixed: "forms-lesson17-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson17",
        grammar: "grammarLesson17",
        grammarSingular: "grammarLesson17Singular",
        grammarPlural: "grammarLesson17Plural",
        singular: "formsLesson17Singular",
        plural: "formsLesson17Plural",
        mixed: "formsLesson17Mixed"
      },
      wordGardenTitle: "Lesson 17 word garden",
      grammarTitle: "Lesson 17 grammar map",
      grammarMatchStepTitle: "Step 4 · Match passive signs and forms to meanings",
      grammarMatchDescription: "Match passive signs and first-conjugation passive forms with the meaning they carry.",
      grammarPairTitle: "Lesson 17 Laudō Passive Forms",
      grammarPairDescription: "Match passive signs and first-conjugation passive forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 17 passive forms, agency phrases, and new words with their meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 17 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson16") {
    return {
      vocabulary: lessonSixteenVocabulary,
      endings: lessonSixteenGrammarForms.both,
      grammarEndings: lessonSixteenGrammarForms,
      grammar: lessonSixteenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson16",
      grammarModes: {
        singular: "grammar-lesson16-singular",
        plural: "grammar-lesson16-plural",
        both: "grammar-lesson16-both"
      },
      formModes: {
        singular: "forms-lesson16-singular",
        plural: "forms-lesson16-plural",
        mixed: "forms-lesson16-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson16",
        grammar: "grammarLesson16",
        grammarSingular: "grammarLesson16Singular",
        grammarPlural: "grammarLesson16Plural",
        singular: "formsLesson16Singular",
        plural: "formsLesson16Plural",
        mixed: "formsLesson16Mixed"
      },
      wordGardenTitle: "Lesson 16 word garden",
      grammarTitle: "Lesson 16 grammar map",
      grammarMatchStepTitle: "Step 4 · Match Lesson 16 forms to meanings",
      grammarMatchDescription: "Match puer, ager, vir, adjective, and possessive forms with their meanings.",
      grammarPairTitle: "Lesson 16 Forms",
      grammarPairDescription: "Match Lesson 16 noun, adjective, and possessive forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 16 word forms and possessive phrases with their English meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 16 form or phrase with its English meaning."
    };
  }

  if (lessonSet === "lesson15") {
    return {
      vocabulary: lessonFifteenVocabulary,
      endings: lessonFifteenVerbGrammarForms.both,
      grammarEndings: lessonFifteenVerbGrammarForms,
      grammar: lessonFifteenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson15",
      grammarModes: {
        singular: "grammar-lesson15-singular",
        plural: "grammar-lesson15-plural",
        both: "grammar-lesson15-both"
      },
      formModes: {
        singular: "forms-lesson15-singular",
        plural: "forms-lesson15-plural",
        mixed: "forms-lesson15-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson15",
        grammar: "grammarLesson15",
        grammarSingular: "grammarLesson15Singular",
        grammarPlural: "grammarLesson15Plural",
        singular: "formsLesson15Singular",
        plural: "formsLesson15Plural",
        mixed: "formsLesson15Mixed"
      },
      wordGardenTitle: "Lesson 15 word garden",
      grammarTitle: "Lesson 15 grammar map",
      grammarMatchStepTitle: "Step 4 · Match perfect-system forms to meanings",
      grammarMatchDescription: "Match perfect-system forms with the meaning they carry.",
      grammarPairTitle: "Lesson 15 Perfect-System Forms",
      grammarPairDescription: "Match perfect, pluperfect, and future perfect forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 15 perfect-system forms with their English meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 15 form with its English meaning."
    };
  }

  if (lessonSet === "lesson14") {
    return {
      vocabulary: lessonFourteenVocabulary,
      endings: lessonFourteenVerbGrammarForms.both,
      grammarEndings: lessonFourteenVerbGrammarForms,
      grammar: lessonFourteenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson14",
      grammarModes: {
        singular: "grammar-lesson14-singular",
        plural: "grammar-lesson14-plural",
        both: "grammar-lesson14-both"
      },
      formModes: {
        singular: "forms-lesson14-singular",
        plural: "forms-lesson14-plural",
        mixed: "forms-lesson14-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson14",
        grammar: "grammarLesson14",
        grammarSingular: "grammarLesson14Singular",
        grammarPlural: "grammarLesson14Plural",
        singular: "formsLesson14Singular",
        plural: "formsLesson14Plural",
        mixed: "formsLesson14Mixed"
      },
      wordGardenTitle: "Lesson 14 word garden",
      grammarTitle: "Lesson 14 grammar map",
      grammarMatchStepTitle: "Step 4 · Match sum and absum forms to meanings",
      grammarMatchDescription: "Match sum and absum forms with the meaning they carry.",
      grammarPairTitle: "Lesson 14 Sum and Absum Forms",
      grammarPairDescription: "Match being and being-away forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 14 sum and absum forms with their English meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 14 form with its English meaning."
    };
  }

  if (lessonSet === "lesson13") {
    return {
      vocabulary: lessonThirteenVocabulary,
      endings: lessonThirteenVerbGrammarForms.both,
      grammarEndings: lessonThirteenVerbGrammarForms,
      grammar: lessonThirteenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson13",
      grammarModes: {
        singular: "grammar-lesson13-singular",
        plural: "grammar-lesson13-plural",
        both: "grammar-lesson13-both"
      },
      formModes: {
        singular: "forms-lesson13-singular",
        plural: "forms-lesson13-plural",
        mixed: "forms-lesson13-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson13",
        grammar: "grammarLesson13",
        grammarSingular: "grammarLesson13Singular",
        grammarPlural: "grammarLesson13Plural",
        singular: "formsLesson13Singular",
        plural: "formsLesson13Plural",
        mixed: "formsLesson13Mixed"
      },
      wordGardenTitle: "Lesson 13 word garden",
      grammarTitle: "Lesson 13 grammar map",
      grammarMatchStepTitle: "Step 4 · Match fourth-conjugation forms to meanings",
      grammarMatchDescription: "Match audiō forms with the meaning they carry.",
      grammarPairTitle: "Lesson 13 Audiō Forms",
      grammarPairDescription: "Match fourth-conjugation verb forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 13 fourth-conjugation verb forms with their English meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 13 verb form with its English meaning."
    };
  }

  if (lessonSet === "lesson12") {
    return {
      vocabulary: lessonTwelveVocabulary,
      endings: lessonTwelveVerbGrammarForms.both,
      grammarEndings: lessonTwelveVerbGrammarForms,
      grammar: lessonTwelveGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson12",
      grammarModes: {
        singular: "grammar-lesson12-singular",
        plural: "grammar-lesson12-plural",
        both: "grammar-lesson12-both"
      },
      formModes: {
        singular: "forms-lesson12-singular",
        plural: "forms-lesson12-plural",
        mixed: "forms-lesson12-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson12",
        grammar: "grammarLesson12",
        grammarSingular: "grammarLesson12Singular",
        grammarPlural: "grammarLesson12Plural",
        singular: "formsLesson12Singular",
        plural: "formsLesson12Plural",
        mixed: "formsLesson12Mixed"
      },
      wordGardenTitle: "Lesson 12 word garden",
      grammarTitle: "Lesson 12 grammar map",
      grammarMatchStepTitle: "Step 4 · Match verb forms to meanings",
      grammarMatchDescription: "Match mittō forms with the meaning they carry.",
      grammarPairTitle: "Lesson 12 Mittō Forms",
      grammarPairDescription: "Match third-conjugation verb forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 12 third-conjugation verb forms with their English meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 12 verb form with its English meaning."
    };
  }

  if (lessonSet === "lesson11") {
    return {
      vocabulary: lessonElevenVocabulary,
      endings: lessonElevenPronounGrammarForms.both,
      grammarEndings: lessonElevenPronounGrammarForms,
      grammar: lessonElevenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson11",
      grammarModes: {
        singular: "grammar-lesson11-singular",
        plural: "grammar-lesson11-plural",
        both: "grammar-lesson11-both"
      },
      formModes: {
        singular: "forms-lesson11-singular",
        plural: "forms-lesson11-plural",
        mixed: "forms-lesson11-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson11",
        grammar: "grammarLesson11",
        grammarSingular: "grammarLesson11Singular",
        grammarPlural: "grammarLesson11Plural",
        singular: "formsLesson11Singular",
        plural: "formsLesson11Plural",
        mixed: "formsLesson11Mixed"
      },
      wordGardenTitle: "Lesson 11 word garden",
      grammarTitle: "Lesson 11 grammar map",
      grammarMatchStepTitle: "Step 4 · Match pronoun forms to meanings",
      grammarMatchDescription: "Match Lesson 11 pronoun forms with the meaning they carry.",
      grammarPairTitle: "Lesson 11 Pronoun Forms",
      grammarPairDescription: "Match personal and reflexive pronoun forms with their English meanings.",
      grammarPromptNoun: "pronoun",
      wordFormsStepDescription: "Match Lesson 11 pronoun and verb forms with their English meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 11 pronoun or verb form with its English meaning."
    };
  }

  if (lessonSet === "lesson10") {
    return {
      vocabulary: lessonTenVocabulary,
      endings: lessonTenVerbGrammarForms.both,
      grammarEndings: lessonTenVerbGrammarForms,
      grammar: lessonTenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson10",
      grammarModes: {
        singular: "grammar-lesson10-singular",
        plural: "grammar-lesson10-plural",
        both: "grammar-lesson10-both"
      },
      formModes: {
        singular: "forms-lesson10-singular",
        plural: "forms-lesson10-plural",
        mixed: "forms-lesson10-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson10",
        grammar: "grammarLesson10",
        grammarSingular: "grammarLesson10Singular",
        grammarPlural: "grammarLesson10Plural",
        singular: "formsLesson10Singular",
        plural: "formsLesson10Plural",
        mixed: "formsLesson10Mixed"
      },
      wordGardenTitle: "Lesson 10 word garden",
      grammarTitle: "Lesson 10 grammar map",
      grammarMatchStepTitle: "Step 4 · Match verb forms to meanings",
      grammarMatchDescription: "Match moneō forms with the meaning they carry.",
      grammarPairTitle: "Lesson 10 Moneō Forms",
      grammarPairDescription: "Match second-conjugation verb forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 10 moneō, timeō, terreō, and habeō forms with their English meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 10 verb form with its English meaning."
    };
  }

  if (lessonSet === "lesson9") {
    return {
      vocabulary: lessonNineVocabulary,
      endings: lessonNineVerbGrammarForms.both,
      grammarEndings: lessonNineVerbGrammarForms,
      grammar: lessonNineGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson9",
      grammarModes: {
        singular: "grammar-lesson9-singular",
        plural: "grammar-lesson9-plural",
        both: "grammar-lesson9-both"
      },
      formModes: {
        singular: "forms-lesson9-singular",
        plural: "forms-lesson9-plural",
        mixed: "forms-lesson9-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson9",
        grammar: "grammarLesson9",
        grammarSingular: "grammarLesson9Singular",
        grammarPlural: "grammarLesson9Plural",
        singular: "formsLesson9Singular",
        plural: "formsLesson9Plural",
        mixed: "formsLesson9Mixed"
      },
      wordGardenTitle: "Lesson 9 word garden",
      grammarTitle: "Lesson 9 grammar map",
      grammarMatchStepTitle: "Step 4 · Match verb forms to meanings",
      grammarMatchDescription: "Match laudō forms with the meaning they carry.",
      grammarPairTitle: "Lesson 9 Laudō Forms",
      grammarPairDescription: "Match first-conjugation verb forms with their English meanings.",
      grammarPromptNoun: "form",
      wordFormsStepDescription: "Match Lesson 9 first-conjugation verb forms with their English meanings. Each round has up to 20 forms.",
      wordFormsPairSubtitle: "Match each Lesson 9 verb form with its English meaning."
    };
  }

  if (lessonSet === "lesson8") {
    return {
      vocabulary: lessonEightVocabulary,
      endings: thirdAdjectiveEndings,
      grammarEndings: thirdAdjectiveGrammarEndings,
      grammar: lessonEightGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson8",
      grammarModes: {
        singular: "grammar-lesson8-singular",
        plural: "grammar-lesson8-plural",
        both: "grammar-lesson8-both"
      },
      formModes: {
        singular: "forms-lesson8-singular",
        plural: "forms-lesson8-plural",
        mixed: "forms-lesson8-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson8",
        grammar: "grammarLesson8",
        grammarSingular: "grammarLesson8Singular",
        grammarPlural: "grammarLesson8Plural",
        singular: "formsLesson8Singular",
        plural: "formsLesson8Plural",
        mixed: "formsLesson8Mixed"
      },
      wordGardenTitle: "Lesson 8 word garden",
      grammarTitle: "Lesson 8 grammar map",
      grammarMatchStepTitle: "Step 4 · Match adjective endings to meanings",
      grammarMatchDescription: "Match gravis-type adjective endings with the job they do."
    };
  }

  if (lessonSet === "lesson7") {
    return {
      vocabulary: lessonSevenVocabulary,
      endings: firstSecondAdjectiveEndings,
      grammarEndings: firstSecondAdjectiveGrammarEndings,
      grammar: lessonSevenGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson7",
      grammarModes: {
        singular: "grammar-lesson7-singular",
        plural: "grammar-lesson7-plural",
        both: "grammar-lesson7-both"
      },
      formModes: {
        singular: "forms-lesson7-singular",
        plural: "forms-lesson7-plural",
        mixed: "forms-lesson7-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson7",
        grammar: "grammarLesson7",
        grammarSingular: "grammarLesson7Singular",
        grammarPlural: "grammarLesson7Plural",
        singular: "formsLesson7Singular",
        plural: "formsLesson7Plural",
        mixed: "formsLesson7Mixed"
      },
      wordGardenTitle: "Lesson 7 word garden",
      grammarTitle: "Lesson 7 grammar map",
      grammarMatchStepTitle: "Step 4 · Match adjective endings to meanings",
      grammarMatchDescription: "Match magnus-type adjective endings with the job they do."
    };
  }

  if (lessonSet === "lesson6") {
    return {
      vocabulary: lessonSixVocabulary,
      endings: lessonSixSpecialForms,
      grammarEndings: lessonSixGrammarEndings,
      grammar: lessonSixGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson6",
      grammarModes: {
        singular: "grammar-lesson6-singular",
        plural: "grammar-lesson6-plural",
        both: "grammar-lesson6-both"
      },
      formModes: {
        singular: "forms-lesson6-singular",
        plural: "forms-lesson6-plural",
        mixed: "forms-lesson6-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson6",
        grammar: "grammarLesson6",
        grammarSingular: "grammarLesson6Singular",
        grammarPlural: "grammarLesson6Plural",
        singular: "formsLesson6Singular",
        plural: "formsLesson6Plural",
        mixed: "formsLesson6Mixed"
      },
      wordGardenTitle: "Lesson 6 word garden",
      grammarTitle: "Lesson 6 grammar map",
      grammarMatchStepTitle: "Step 4 · Match special forms to meanings",
      grammarMatchDescription: "Match the special Lesson 6 forms with the meaning they carry.",
      grammarPairTitle: "Lesson 6 Special Forms",
      grammarPairDescription: "Match plural-looking forms and special phrases with their meanings.",
      grammarPromptNoun: "form"
    };
  }

  if (lessonSet === "lesson5") {
    return {
      vocabulary: lessonFiveVocabulary,
      endings: fifthDeclensionEndings,
      grammarEndings: fifthDeclensionGrammarEndings,
      grammar: lessonFiveGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson5",
      grammarModes: {
        singular: "grammar-lesson5-singular",
        plural: "grammar-lesson5-plural",
        both: "grammar-lesson5-both"
      },
      formModes: {
        singular: "forms-lesson5-singular",
        plural: "forms-lesson5-plural",
        mixed: "forms-lesson5-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson5",
        grammar: "grammarLesson5",
        grammarSingular: "grammarLesson5Singular",
        grammarPlural: "grammarLesson5Plural",
        singular: "formsLesson5Singular",
        plural: "formsLesson5Plural",
        mixed: "formsLesson5Mixed"
      },
      wordGardenTitle: "Lesson 5 word garden",
      grammarTitle: "Lesson 5 grammar map"
    };
  }

  if (lessonSet === "lesson4") {
    return {
      vocabulary: lessonFourVocabulary,
      endings: fourthDeclensionEndings,
      grammarEndings: fourthDeclensionGrammarEndings,
      grammar: lessonFourGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson4",
      grammarModes: {
        singular: "grammar-lesson4-singular",
        plural: "grammar-lesson4-plural",
        both: "grammar-lesson4-both"
      },
      formModes: {
        singular: "forms-lesson4-singular",
        plural: "forms-lesson4-plural",
        mixed: "forms-lesson4-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson4",
        grammar: "grammarLesson4",
        grammarSingular: "grammarLesson4Singular",
        grammarPlural: "grammarLesson4Plural",
        singular: "formsLesson4Singular",
        plural: "formsLesson4Plural",
        mixed: "formsLesson4Mixed"
      },
      wordGardenTitle: "Lesson 4 word garden",
      grammarTitle: "Lesson 4 grammar map"
    };
  }

  if (lessonSet === "lesson3") {
    return {
      vocabulary: lessonThreeVocabulary,
      endings: thirdDeclensionEndings,
      grammarEndings: thirdDeclensionGrammarEndings,
      grammar: lessonThreeGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson3",
      grammarModes: {
        singular: "grammar-lesson3-singular",
        plural: "grammar-lesson3-plural",
        both: "grammar-lesson3-both"
      },
      formModes: {
        singular: "forms-lesson3-singular",
        plural: "forms-lesson3-plural",
        mixed: "forms-lesson3-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson3",
        grammar: "grammarLesson3",
        grammarSingular: "grammarLesson3Singular",
        grammarPlural: "grammarLesson3Plural",
        singular: "formsLesson3Singular",
        plural: "formsLesson3Plural",
        mixed: "formsLesson3Mixed"
      },
      wordGardenTitle: "Lesson 3 word garden",
      grammarTitle: "Lesson 3 grammar map"
    };
  }

  if (lessonSet === "lesson2") {
    return {
      vocabulary: lessonTwoVocabulary,
      endings: secondDeclensionEndings,
      grammarEndings: secondDeclensionGrammarEndings,
      grammar: lessonTwoGrammar,
      wordFormTotal: 20,
      vocabularyMode: "vocabulary-lesson2",
      grammarModes: {
        singular: "grammar-lesson2-singular",
        plural: "grammar-lesson2-plural",
        both: "grammar-lesson2-both"
      },
      formModes: {
        singular: "forms-lesson2-singular",
        plural: "forms-lesson2-plural",
        mixed: "forms-lesson2-mixed"
      },
      bestKeys: {
        vocabulary: "vocabularyLesson2",
        grammar: "grammarLesson2",
        grammarSingular: "grammarLesson2Singular",
        grammarPlural: "grammarLesson2Plural",
        singular: "formsLesson2Singular",
        plural: "formsLesson2Plural",
        mixed: "formsLesson2Mixed"
      },
      wordGardenTitle: "Lesson 2 word garden",
      grammarTitle: "Lesson 2 grammar map"
    };
  }

  return {
    vocabulary,
    endings: firstDeclensionEndings,
    grammarEndings: firstDeclensionGrammarEndings,
    grammar: lessonOneGrammar,
    wordFormTotal: 20,
    vocabularyMode: "vocabulary-lesson1",
    grammarModes: {
      singular: "grammar-lesson1-singular",
      plural: "grammar-lesson1-plural",
      both: "grammar-lesson1-both"
    },
    formModes: {
      singular: "forms-lesson1-singular",
      plural: "forms-lesson1-plural",
      mixed: "forms-lesson1-mixed"
    },
    bestKeys: {
      vocabulary: "vocabulary",
      grammar: "grammar",
      grammarSingular: "grammarSingular",
      grammarPlural: "grammarPlural",
      singular: "formsSingular",
      plural: "formsPlural",
      mixed: "formsMixed"
    },
    wordGardenTitle: "Lesson 1 word garden",
    grammarTitle: "Lesson 1 grammar map"
  };
}

const endingPracticeByLesson = {
  lesson1: firstDeclensionEndingPractice,
  lesson2: secondDeclensionEndingPractice,
  lesson3: thirdDeclensionEndingPractice,
  lesson4: fourthDeclensionEndingPractice,
  lesson5: fifthDeclensionEndingPractice,
  lesson6: lessonSixEndingPractice,
  lesson7: lessonSevenEndingPractice,
  lesson8: lessonEightEndingPractice,
  lesson9: lessonNineEndingPractice,
  lesson10: lessonTenEndingPractice,
  lesson11: lessonElevenEndingPractice,
  lesson12: lessonTwelveEndingPractice,
  lesson13: lessonThirteenEndingPractice,
  lesson14: lessonFourteenEndingPractice,
  lesson15: lessonFifteenEndingPractice,
  lesson16: lessonSixteenEndingPractice,
  lesson17: lessonSeventeenEndingPractice,
  lesson18: lessonEighteenEndingPractice,
  lesson19: lessonNineteenEndingPractice,
  lesson20: lessonTwentyEndingPractice,
  lesson21: lessonTwentyOneEndingPractice,
  lesson22: lessonTwentyTwoEndingPractice,
  lesson23: lessonTwentyThreeEndingPractice,
  lesson24: lessonTwentyFourEndingPractice,
  lesson25: lessonTwentyFiveEndingPractice,
  lesson26: lessonTwentySixEndingPractice,
  lesson27: lessonTwentySevenEndingPractice,
  lesson28: lessonTwentyEightEndingPractice,
  lesson29: lessonTwentyNineEndingPractice,
  lesson30: lessonThirtyEndingPractice,
  lesson31: lessonThirtyOneEndingPractice
};

const endingPracticeCopy = {
  lesson1: {
    shortName: "1st Feminine",
    step1Description: "Match the first-declension endings from Nominative to Ablative.",
    step2Description: "Copy the first-declension endings from Nominative to Ablative.",
    finalStepTitle: "Step 3 · 1st Feminine Test - in Order",
    finalCardDescription: "The 1st Feminine Final Test: type the endings with no visible hint.",
    finalHeading: "The 1st Feminine Final Test",
    finalNote: "Type each first-declension feminine ending with no visible ending hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the first-declension feminine endings in order. Plain keyboard forms count, so <strong>a</strong> is accepted for <strong>ā</strong>.",
    completionTitle: "The 1st Feminine Endings are yours.",
    completionNote: "You typed the full first-declension feminine set without the visible ending hints."
  },
  lesson2: {
    shortName: "2nd Declension",
    step1Description: "Match the servus and bellum endings from Nominative to Ablative.",
    step2Description: "Copy the servus and bellum endings from Nominative to Ablative.",
    finalStepTitle: "Step 3 · 2nd Declension Test - in Order",
    finalCardDescription: "Choose servus, bellum, or the mixed second-declension final test. Type the endings with no visible hint.",
    finalHeading: "The 2nd Declension Final Test",
    finalNote: "Type each second-declension ending with no visible ending hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the second-declension endings in order. Use the plain keyboard forms shown in the model.",
    completionTitle: "The 2nd Declension Endings are yours.",
    completionNote: "You typed the full second-declension set without the visible ending hints."
  },
  lesson3: {
    shortName: "3rd Declension",
    step1Description: "Match the lex, pars, and flumen endings from Nominative to Ablative.",
    step2Description: "Copy the lex, pars, and flumen endings from Nominative to Ablative.",
    finalStepTitle: "Step 3 · 3rd Declension Test - in Order",
    finalCardDescription: "Choose lex, pars, flumen, or the mixed third-declension final test. Type the endings with no visible hint.",
    finalHeading: "The 3rd Declension Final Test",
    finalNote: "Type each third-declension ending with no visible ending hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the third-declension endings in order. Use a dash (-) where there is no one fixed ending.",
    completionTitle: "The 3rd Declension Endings are yours.",
    completionNote: "You typed the full third-declension set without the visible ending hints."
  },
  lesson4: {
    shortName: "4th Declension",
    step1Description: "Match the fourth-declension portus endings from Nominative to Ablative.",
    step2Description: "Copy the fourth-declension portus endings from Nominative to Ablative.",
    finalStepTitle: "Step 3 · 4th Declension Test - in Order",
    finalCardDescription: "Choose singular, plural, or both. Type the endings with no visible hint.",
    finalHeading: "The 4th Declension Final Test",
    finalNote: "Type each fourth-declension ending with no visible ending hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the fourth-declension endings in order. Plain keyboard forms count, so <strong>us</strong> is accepted for <strong>ūs</strong>.",
    completionTitle: "The 4th Declension Endings are yours.",
    completionNote: "You typed the full fourth-declension portus set without the visible ending hints."
  },
  lesson5: {
    shortName: "5th Declension",
    step1Description: "Match the fifth-declension rēs endings from Nominative to Ablative.",
    step2Description: "Copy the fifth-declension rēs endings from Nominative to Ablative.",
    finalStepTitle: "Step 3 · 5th Declension Test - in Order",
    finalCardDescription: "Choose singular, plural, or both. Type the endings with no visible hint.",
    finalHeading: "The 5th Declension Final Test",
    finalNote: "Type each fifth-declension ending with no visible ending hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the fifth-declension endings in order. Plain keyboard forms count, so <strong>es</strong> is accepted for <strong>ēs</strong>.",
    completionTitle: "The 5th Declension Endings are yours.",
    completionNote: "You typed the full fifth-declension rēs set without the visible ending hints."
  },
  lesson6: {
    shortName: "Lesson 6 Special Plurals",
    step1Description: "Match the Lesson 6 special plural endings from Nominative to Ablative.",
    step2Description: "Copy the Lesson 6 special plural endings from Nominative to Ablative.",
    finalStepTitle: "Step 3 · Special Plurals Test - in Order",
    finalCardDescription: "Choose castra/impedimenta, gratiae/copiae, or both. Type the endings with no visible hint.",
    finalHeading: "The Lesson 6 Special Plurals Final Test",
    finalNote: "Type each special-plural ending with no visible ending hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the Lesson 6 special plural endings in order. These are familiar endings attached to words with special meanings.",
    completionTitle: "The Lesson 6 Special Plural Endings are yours.",
    completionNote: "You typed the special plural patterns without the visible ending hints."
  },
  lesson7: {
    shortName: "Magnus Adjective",
    step1Description: "Match the magnus, magna, magnum adjective endings from Nominative to Ablative.",
    step2Description: "Copy the magnus, magna, magnum adjective endings from Nominative to Ablative.",
    finalStepTitle: "Step 3 · Magnus Adjective Test - in Order",
    finalCardDescription: "Choose masculine, feminine, neuter, or all. Type the adjective endings with no visible hint.",
    finalHeading: "The Magnus Adjective Final Test",
    finalNote: "Type each magnus-type adjective ending with no visible ending hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the magnus, magna, magnum adjective endings in order. These reuse the noun endings you already know.",
    completionTitle: "The Magnus Adjective Endings are yours.",
    completionNote: "You typed the first/second-declension adjective endings without the visible ending hints."
  },
  lesson8: {
    shortName: "Gravis Adjective",
    step1Description: "Match the gravis, grave adjective endings from Nominative to Ablative.",
    step2Description: "Copy the gravis, grave adjective endings from Nominative to Ablative.",
    finalStepTitle: "Step 3 · Gravis Adjective Test - in Order",
    finalCardDescription: "Choose masculine/feminine, neuter, or all. Type the adjective endings with no visible hint.",
    finalHeading: "The Gravis Adjective Final Test",
    finalNote: "Type each gravis-type adjective ending with no visible ending hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the gravis, grave adjective endings in order. Remember -i, -ia, and -ium.",
    completionTitle: "The Gravis Adjective Endings are yours.",
    completionNote: "You typed the third-declension adjective endings without the visible ending hints."
  },
  lesson9: {
    shortName: "Laudō Verb Forms",
    step1Description: "Match the laudō verb forms in person order.",
    step2Description: "Copy the laudō verb forms in person order.",
    finalStepTitle: "Step 3 · Laudō Verb Forms Test - in Order",
    finalCardDescription: "Choose present, imperfect, future, or all. Type the laudō forms with no visible hint.",
    finalHeading: "The Laudō Verb Forms Final Test",
    finalNote: "Type each laudō verb form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the laudō forms in order. Plain keyboard forms count, so <strong>laudo</strong> is accepted for <strong>laudō</strong>.",
    completionTitle: "The Laudō Verb Forms are yours.",
    completionNote: "You typed the first-conjugation laudō forms without the visible hints."
  },
  lesson10: {
    shortName: "Moneō Verb Forms",
    step1Description: "Match the moneō verb forms in person order.",
    step2Description: "Copy the moneō verb forms in person order.",
    finalStepTitle: "Step 3 · Moneō Verb Forms Test - in Order",
    finalCardDescription: "Choose present, imperfect, future, or all. Type the moneō forms with no visible hint.",
    finalHeading: "The Moneō Verb Forms Final Test",
    finalNote: "Type each moneō verb form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the moneō forms in order. Plain keyboard forms count, so <strong>moneo</strong> is accepted for <strong>moneō</strong>.",
    completionTitle: "The Moneō Verb Forms are yours.",
    completionNote: "You typed the second-conjugation moneō forms without the visible hints."
  },
  lesson11: {
    shortName: "Pronoun Forms",
    step1Description: "Match the Lesson 11 pronoun forms in case order.",
    step2Description: "Copy the Lesson 11 pronoun forms in case order.",
    finalStepTitle: "Step 3 · Pronoun Forms Test - in Order",
    finalCardDescription: "Choose first person, second person, third person, reflexive, or all. Type the pronoun forms with no visible hint.",
    finalHeading: "The Lesson 11 Pronoun Forms Final Test",
    finalNote: "Type each pronoun form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the Lesson 11 pronoun forms in order. Plain keyboard forms count, so <strong>nos</strong> is accepted for <strong>nōs</strong>.",
    completionTitle: "The Lesson 11 Pronoun Forms are yours.",
    completionNote: "You typed the personal and reflexive pronouns without the visible hints."
  },
  lesson12: {
    shortName: "Mittō Verb Forms",
    step1Description: "Match the mittō verb forms in person order.",
    step2Description: "Copy the mittō verb forms in person order.",
    finalStepTitle: "Step 3 · Mittō Verb Forms Test - in Order",
    finalCardDescription: "Choose present, imperfect, future, or all. Type the mittō forms with no visible hint.",
    finalHeading: "The Mittō Verb Forms Final Test",
    finalNote: "Type each mittō verb form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the mittō forms in order. Plain keyboard forms count, so <strong>mitto</strong> is accepted for <strong>mittō</strong>.",
    completionTitle: "The Mittō Verb Forms are yours.",
    completionNote: "You typed the third-conjugation mittō forms without the visible hints."
  },
  lesson13: {
    shortName: "Audiō Verb Forms",
    step1Description: "Match the audiō verb forms in person order.",
    step2Description: "Copy the audiō verb forms in person order.",
    finalStepTitle: "Step 3 · Audiō Verb Forms Test - in Order",
    finalCardDescription: "Choose present, imperfect, future, or all. Type the audiō forms with no visible hint.",
    finalHeading: "The Audiō Verb Forms Final Test",
    finalNote: "Type each audiō verb form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the audiō forms in order. Plain keyboard forms count, so <strong>audio</strong> is accepted for <strong>audiō</strong>.",
    completionTitle: "The Audiō Verb Forms are yours.",
    completionNote: "You typed the fourth-conjugation audiō forms without the visible hints."
  },
  lesson14: {
    shortName: "Sum and Absum Forms",
    step1Description: "Match the sum and absum forms in person order.",
    step2Description: "Copy the sum and absum forms in person order.",
    finalStepTitle: "Step 3 · Sum and Absum Test - in Order",
    finalCardDescription: "Choose present, imperfect, future, absum, or all. Type the forms with no visible hint.",
    finalHeading: "The Sum and Absum Forms Final Test",
    finalNote: "Type each sum or absum form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the sum and absum forms in order. Plain keyboard forms count, so <strong>ero</strong> is accepted for <strong>erō</strong>.",
    completionTitle: "The Sum and Absum Forms are yours.",
    completionNote: "You typed sum and absum without the visible hints."
  },
  lesson15: {
    shortName: "Perfect-System Forms",
    step1Description: "Match the perfect-system active forms in person order.",
    step2Description: "Copy the perfect-system active forms in person order.",
    finalStepTitle: "Step 3 · Perfect-System Test - in Order",
    finalCardDescription: "Choose perfect, pluperfect, future perfect, or all. Type the forms with no visible hint.",
    finalHeading: "The Perfect-System Active Final Test",
    finalNote: "Type each perfect-system form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the perfect-system forms in order. Plain keyboard forms count, so <strong>laudavi</strong> is accepted for <strong>laudāvī</strong>.",
    completionTitle: "The Perfect-System Forms are yours.",
    completionNote: "You typed the perfect, pluperfect, and future perfect active forms without the visible hints."
  },
  lesson16: {
    shortName: "Puer, Ager, Vir, and Adjectives",
    step1Description: "Match the Lesson 16 noun, adjective, and possessive forms in order.",
    step2Description: "Copy the Lesson 16 noun, adjective, and possessive forms in order.",
    finalStepTitle: "Step 3 · Lesson 16 Forms Test - in Order",
    finalCardDescription: "Choose nouns, adjectives, possessives, or all. Type the forms with no visible hint.",
    finalHeading: "The Lesson 16 Forms Final Test",
    finalNote: "Type each Lesson 16 form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the Lesson 16 forms in order. Plain keyboard forms count, so <strong>pueri</strong> is accepted for <strong>puerī</strong>.",
    completionTitle: "The Lesson 16 Forms are yours.",
    completionNote: "You typed the Lesson 16 noun, adjective, and possessive forms without the visible hints."
  },
  lesson17: {
    shortName: "Laudō Passive Forms",
    step1Description: "Match the passive signs and first-conjugation passive forms in person order.",
    step2Description: "Copy the passive signs and first-conjugation passive forms in person order.",
    finalStepTitle: "Step 3 · Laudō Passive Test - in Order",
    finalCardDescription: "Choose passive signs, present, imperfect, future, or all. Type the forms with no visible hint.",
    finalHeading: "The Laudō Passive Final Test",
    finalNote: "Type each passive sign or laudō passive form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the passive forms in person order. Plain keyboard forms count, so <strong>laudaris</strong> is accepted for <strong>laudāris</strong>.",
    completionTitle: "The Laudō Passive Forms are yours.",
    completionNote: "You typed the first-conjugation passive forms without the visible hints."
  },
  lesson18: {
    shortName: "Moneō Passive Forms",
    step1Description: "Match the second-conjugation passive forms in person order.",
    step2Description: "Copy the second-conjugation passive forms in person order.",
    finalStepTitle: "Step 3 · Moneō Passive Test - in Order",
    finalCardDescription: "Choose present, imperfect, future, or all. Type the forms with no visible hint.",
    finalHeading: "The Moneō Passive Final Test",
    finalNote: "Type each moneō passive form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the moneō passive forms in person order. Plain keyboard forms count, so <strong>moneris</strong> is accepted for <strong>monēris</strong>.",
    completionTitle: "The Moneō Passive Forms are yours.",
    completionNote: "You typed the second-conjugation passive forms without the visible hints."
  },
  lesson19: {
    shortName: "Mittō Passive Forms",
    step1Description: "Match the third-conjugation passive forms in person order.",
    step2Description: "Copy the third-conjugation passive forms in person order.",
    finalStepTitle: "Step 3 · Mittō Passive Test - in Order",
    finalCardDescription: "Choose present, imperfect, future, or all. Type the forms with no visible hint.",
    finalHeading: "The Mittō Passive Final Test",
    finalNote: "Type each mittō passive form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the mittō passive forms in person order. Plain keyboard forms count, so <strong>mitteris</strong> is accepted for <strong>mitteris</strong>.",
    completionTitle: "The Mittō Passive Forms are yours.",
    completionNote: "You typed the third-conjugation passive forms without the visible hints."
  },
  lesson20: {
    shortName: "Audiō Passive Forms",
    step1Description: "Match the fourth-conjugation passive forms in person order.",
    step2Description: "Copy the fourth-conjugation passive forms in person order.",
    finalStepTitle: "Step 3 · Audiō Passive Test - in Order",
    finalCardDescription: "Choose present, imperfect, future, or all. Type the forms with no visible hint.",
    finalHeading: "The Audiō Passive Final Test",
    finalNote: "Type each audiō passive form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the audiō passive forms in person order. Plain keyboard forms count, so <strong>audiris</strong> is accepted for <strong>audīris</strong>.",
    completionTitle: "The Audiō Passive Forms are yours.",
    completionNote: "You typed the fourth-conjugation passive forms without the visible hints."
  },
  lesson21: {
    shortName: "Perfect Passive Forms",
    step1Description: "Match the perfect-system passive forms in person and agreement order.",
    step2Description: "Copy the perfect-system passive forms in person and agreement order.",
    finalStepTitle: "Step 3 · Perfect Passive Test - in Order",
    finalCardDescription: "Choose perfect, agreement, pluperfect, future perfect, or all. Type the forms with no visible hint.",
    finalHeading: "The Perfect-System Passive Final Test",
    finalNote: "Type each perfect-system passive form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the perfect-system passive forms in order. Plain keyboard forms count, so <strong>laudatus sum</strong> is accepted for <strong>laudātus sum</strong>.",
    completionTitle: "The Perfect-System Passive Forms are yours.",
    completionNote: "You typed the perfect-system passive forms without the visible hints."
  },
  lesson22: {
    shortName: "Present Subjunctive Forms",
    step1Description: "Match the present subjunctive active forms in person order.",
    step2Description: "Copy the present subjunctive active forms in person order.",
    finalStepTitle: "Step 3 · Present Subjunctive Test - in Order",
    finalCardDescription: "Choose laudō, moneō, mittō, audiō, sum, or all. Type the forms with no visible hint.",
    finalHeading: "The Present Subjunctive Final Test",
    finalNote: "Type each present subjunctive form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the present subjunctive forms in person order. Plain keyboard forms count, so <strong>laudes</strong> is accepted for <strong>laudēs</strong>.",
    completionTitle: "The Present Subjunctive Forms are yours.",
    completionNote: "You typed the present subjunctive active forms without the visible hints."
  },
  lesson23: {
    shortName: "Imperfect Subjunctive Forms",
    step1Description: "Match the imperfect subjunctive active forms in person order.",
    step2Description: "Copy the imperfect subjunctive active forms in person order.",
    finalStepTitle: "Step 3 · Imperfect Subjunctive Test - in Order",
    finalCardDescription: "Choose laudō, moneō, mittō, audiō, sum, or all. Type the forms with no visible hint.",
    finalHeading: "The Imperfect Subjunctive Final Test",
    finalNote: "Type each imperfect subjunctive form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the imperfect subjunctive forms in person order. Plain keyboard forms count, so <strong>laudarem</strong> is accepted for <strong>laudārem</strong>.",
    completionTitle: "The Imperfect Subjunctive Forms are yours.",
    completionNote: "You typed the imperfect subjunctive active forms without the visible hints."
  },
  lesson24: {
    shortName: "Relative Pronoun Forms",
    step1Description: "Match the qui, quae, quod relative pronoun forms in case order.",
    step2Description: "Copy the qui, quae, quod relative pronoun forms in case order.",
    finalStepTitle: "Step 3 · Relative Pronoun Test - in Order",
    finalCardDescription: "Choose masculine, feminine, neuter, or all. Type the forms with no visible hint.",
    finalHeading: "The Relative Pronoun Final Test",
    finalNote: "Type each relative pronoun form with no visible form hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the relative pronoun forms in order. Plain keyboard forms count, so <strong>qui</strong> is accepted for <strong>quī</strong>.",
    completionTitle: "The Relative Pronoun Forms are yours.",
    completionNote: "You typed the qui, quae, quod forms without the visible hints."
  },
  lesson25: {
    shortName: "Direct Question Forms",
    step1Description: "Match the Lesson 25 direct-question words and interrogative forms in order.",
    step2Description: "Copy the Lesson 25 direct-question words and interrogative forms in order.",
    finalStepTitle: "Step 3 · Direct Question Forms Test - in Order",
    finalCardDescription: "Choose adverbs, particles, pronouns, adjective phrases, or all. Type the forms with no visible hint.",
    finalHeading: "The Direct Question Forms Final Test",
    finalNote: "Type each direct-question word or interrogative form with no visible hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the direct-question words and interrogative forms in order. Plain keyboard forms count, so <strong>quo</strong> is accepted for <strong>quō</strong>.",
    completionTitle: "The Direct Question Forms are yours.",
    completionNote: "You typed the Lesson 25 direct-question forms without visible hints."
  },
  lesson26: {
    shortName: "Perfect-System Subjunctive Forms",
    step1Description: "Match the Lesson 26 perfect and pluperfect subjunctive forms in person order.",
    step2Description: "Copy the Lesson 26 perfect and pluperfect subjunctive forms in person order.",
    finalStepTitle: "Step 3 · Perfect-System Subjunctive Test - in Order",
    finalCardDescription: "Choose laudō, mittō, sum, or all perfect-system subjunctive forms. Type the forms with no visible hint.",
    finalHeading: "The Perfect-System Subjunctive Final Test",
    finalNote: "Type each perfect-system subjunctive form with no visible hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the perfect and pluperfect subjunctive forms in person order. Plain keyboard forms count, so <strong>laudaverim</strong> is accepted for <strong>laudāverim</strong>.",
    completionTitle: "The Perfect-System Subjunctive Forms are yours.",
    completionNote: "You typed the Lesson 26 perfect-system subjunctive forms without visible hints."
  },
  lesson27: {
    shortName: "Vocative, Command, and Wish Forms",
    step1Description: "Match the Lesson 27 vocative, imperative, wish, and let-us forms in order.",
    step2Description: "Copy the Lesson 27 vocative, imperative, wish, and let-us forms in order.",
    finalStepTitle: "Step 3 · Vocative and Imperative Test - in Order",
    finalCardDescription: "Choose vocatives, imperatives, wishes, or all. Type the forms with no visible hint.",
    finalHeading: "The Lesson 27 Forms Final Test",
    finalNote: "Type each Lesson 27 vocative, command, wish, or let-us form with no visible hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the Lesson 27 forms in order. Plain keyboard forms count, so <strong>fili</strong> is accepted for <strong>fīlī</strong>.",
    completionTitle: "The Lesson 27 Forms are yours.",
    completionNote: "You typed the vocative, imperative, wish, and let-us forms without visible hints."
  },
  lesson28: {
    shortName: "Suus and Suī Forms",
    step1Description: "Match the Lesson 28 suus and sui reflexive forms and idioms in order.",
    step2Description: "Copy the Lesson 28 suus and sui reflexive forms and idioms in order.",
    finalStepTitle: "Step 3 · Suus and Suī Test - in Order",
    finalCardDescription: "Choose sui, suus, idioms, or all. Type the forms with no visible hint.",
    finalHeading: "The Lesson 28 Reflexive Forms Final Test",
    finalNote: "Type each Lesson 28 reflexive form or idiom with no visible hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the Lesson 28 reflexive forms and idioms in order. Plain keyboard forms count, so <strong>sui</strong> is accepted for <strong>suī</strong>.",
    completionTitle: "The Lesson 28 Reflexive Forms are yours.",
    completionNote: "You typed the suus/sui forms and idioms without visible hints."
  },
  lesson29: {
    shortName: "Passive Subjunctive Forms",
    step1Description: "Match the Lesson 29 passive subjunctive, cum, causa, and cause patterns in order.",
    step2Description: "Copy the Lesson 29 passive subjunctive, cum, causa, and cause patterns in order.",
    finalStepTitle: "Step 3 · Passive Subjunctive Test - in Order",
    finalCardDescription: "Choose present passive, imperfect passive, perfect passive, pluperfect passive, patterns, or all. Type the forms with no visible hint.",
    finalHeading: "The Lesson 29 Passive Subjunctive Final Test",
    finalNote: "Type each Lesson 29 passive subjunctive form or phrase pattern with no visible hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the Lesson 29 forms in order. Plain keyboard forms count, so <strong>lauder</strong> is accepted for <strong>lauder</strong> and <strong>lauderis</strong> for <strong>laudēris</strong>.",
    completionTitle: "The Lesson 29 Passive Subjunctive Forms are yours.",
    completionNote: "You typed the passive subjunctive forms and Lesson 29 phrase patterns without visible hints."
  },
  lesson30: {
    shortName: "Perfect Participle Passive Forms",
    step1Description: "Match the Lesson 30 perfect participle passive forms and rule cues in order.",
    step2Description: "Copy the Lesson 30 perfect participle passive forms and rule cues in order.",
    finalStepTitle: "Step 3 · Perfect Participle Test - in Order",
    finalCardDescription: "Choose agreement, principal parts, Lesson 30 participles, rules, or all. Type the forms with no visible hint.",
    finalHeading: "The Lesson 30 Perfect Participle Final Test",
    finalNote: "Type each Lesson 30 perfect participle passive form or rule cue with no visible hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the Lesson 30 participle forms in order. Plain keyboard forms count, so <strong>laudatus</strong> is accepted for <strong>laudātus</strong>.",
    completionTitle: "The Lesson 30 Perfect Participle Forms are yours.",
    completionNote: "You typed the perfect participle passive forms and Lesson 30 rule cues without visible hints."
  },
  lesson31: {
    shortName: "Hic, Haec, Hoc Forms",
    step1Description: "Match the Lesson 31 hic, haec, hoc forms from Nominative to Ablative.",
    step2Description: "Copy the Lesson 31 hic, haec, hoc forms from Nominative to Ablative.",
    finalStepTitle: "Step 3 · Hic, Haec, Hoc Test - in Order",
    finalCardDescription: "Choose masculine, feminine, neuter, singular, plural, or all. Type the forms with no visible hint.",
    finalHeading: "The Lesson 31 Hic, Haec, Hoc Final Test",
    finalNote: "Type each hic, haec, hoc form with no visible hint. When one is correct, the cursor moves forward.",
    typeNote: "Type the hic, haec, hoc forms in order. Plain keyboard forms count, so <strong>his</strong> is accepted for <strong>hīs</strong>.",
    completionTitle: "The Lesson 31 Hic, Haec, Hoc Forms are yours.",
    completionNote: "You typed the demonstrative forms without visible hints."
  }
};

const endingModeOptionsByLesson = {
  lesson1: [
    { mode: "singular", label: "Singular", titleLabel: "Singular" },
    { mode: "plural", label: "Plural", titleLabel: "Plural" },
    { mode: "both", label: "Both", titleLabel: "Both" }
  ],
  lesson2: [
    { mode: "masculineSingular", label: "Masc. Sing.", titleLabel: "Masculine Singular", typeTitle: "Type out the Servus Singular Endings" },
    { mode: "masculinePlural", label: "Masc. Pl.", titleLabel: "Masculine Plural", typeTitle: "Type out the Servus Plural Endings" },
    { mode: "masculineBoth", label: "Masc. Both", titleLabel: "Masculine Both", typeTitle: "Type out the Servus Singular and Plural Endings" },
    { mode: "neuterSingular", label: "Neuter Sing.", titleLabel: "Neuter Singular", typeTitle: "Type out the Bellum Singular Endings" },
    { mode: "neuterPlural", label: "Neuter Pl.", titleLabel: "Neuter Plural", typeTitle: "Type out the Bellum Plural Endings" },
    { mode: "neuterBoth", label: "Neuter Both", titleLabel: "Neuter Both", typeTitle: "Type out the Bellum Singular and Plural Endings" },
    { mode: "mixed", label: "Mixed", titleLabel: "Full Mixed Review", typeTitle: "Type out the Servus and Bellum Endings" }
  ],
  lesson3: [
    { mode: "lexSingular", label: "Lex Sing.", titleLabel: "Lex Singular", typeTitle: "Type out the Lex Singular Endings" },
    { mode: "lexPlural", label: "Lex Pl.", titleLabel: "Lex Plural", typeTitle: "Type out the Lex Plural Endings" },
    { mode: "lexBoth", label: "Lex Both", titleLabel: "Lex Both", typeTitle: "Type out the Lex Singular and Plural Endings" },
    { mode: "parsSingular", label: "Pars Sing.", titleLabel: "Pars Singular", typeTitle: "Type out the Pars Singular Endings" },
    { mode: "parsPlural", label: "Pars Pl.", titleLabel: "Pars Plural", typeTitle: "Type out the Pars Plural Endings" },
    { mode: "parsBoth", label: "Pars Both", titleLabel: "Pars Both", typeTitle: "Type out the Pars Singular and Plural Endings" },
    { mode: "flumenSingular", label: "Flumen Sing.", titleLabel: "Flumen Singular", typeTitle: "Type out the Flumen Singular Endings" },
    { mode: "flumenPlural", label: "Flumen Pl.", titleLabel: "Flumen Plural", typeTitle: "Type out the Flumen Plural Endings" },
    { mode: "flumenBoth", label: "Flumen Both", titleLabel: "Flumen Both", typeTitle: "Type out the Flumen Singular and Plural Endings" },
    { mode: "mixed", label: "Mixed", titleLabel: "Full Mixed Review", typeTitle: "Type out the Lex, Pars, and Flumen Endings" }
  ],
  lesson4: [
    { mode: "singular", label: "Singular", titleLabel: "Portus Singular", typeTitle: "Type out the Portus Singular Endings" },
    { mode: "plural", label: "Plural", titleLabel: "Portus Plural", typeTitle: "Type out the Portus Plural Endings" },
    { mode: "both", label: "Both", titleLabel: "Portus Both", typeTitle: "Type out the Portus Singular and Plural Endings" }
  ],
  lesson5: [
    { mode: "singular", label: "Singular", titleLabel: "Rēs Singular", typeTitle: "Type out the Rēs Singular Endings" },
    { mode: "plural", label: "Plural", titleLabel: "Rēs Plural", typeTitle: "Type out the Rēs Plural Endings" },
    { mode: "both", label: "Both", titleLabel: "Rēs Both", typeTitle: "Type out the Rēs Singular and Plural Endings" }
  ],
  lesson6: [
    { mode: "neuterPlural", label: "Castra", titleLabel: "Castra / Impedimenta", typeTitle: "Type out the Castra and Impedimenta Plural Endings" },
    { mode: "firstPlural", label: "Gratiae", titleLabel: "Gratiae / Copiae", typeTitle: "Type out the Gratiae and Copiae Plural Endings" },
    { mode: "both", label: "Both", titleLabel: "Lesson 6 Special Plurals", typeTitle: "Type out the Lesson 6 Special Plural Endings" }
  ],
  lesson7: [
    { mode: "masculine", label: "Masc.", titleLabel: "Magnus Masculine", typeTitle: "Type out the Magnus Masculine Endings" },
    { mode: "feminine", label: "Fem.", titleLabel: "Magna Feminine", typeTitle: "Type out the Magna Feminine Endings" },
    { mode: "neuter", label: "Neut.", titleLabel: "Magnum Neuter", typeTitle: "Type out the Magnum Neuter Endings" },
    { mode: "mixed", label: "All", titleLabel: "Magnus, Magna, Magnum", typeTitle: "Type out the Magnus, Magna, Magnum Endings" }
  ],
  lesson8: [
    { mode: "masculineFeminine", label: "M/F", titleLabel: "Gravis Masculine/Feminine", typeTitle: "Type out the Gravis Masculine/Feminine Endings" },
    { mode: "neuter", label: "Neut.", titleLabel: "Grave Neuter", typeTitle: "Type out the Grave Neuter Endings" },
    { mode: "mixed", label: "All", titleLabel: "Gravis, Grave", typeTitle: "Type out the Gravis, Grave Endings" }
  ],
  lesson9: [
    { mode: "present", label: "Present", titleLabel: "Laudō Present", typeTitle: "Type out the Laudō Present Forms" },
    { mode: "imperfect", label: "Imperfect", titleLabel: "Laudō Imperfect", typeTitle: "Type out the Laudō Imperfect Forms" },
    { mode: "future", label: "Future", titleLabel: "Laudō Future", typeTitle: "Type out the Laudō Future Forms" },
    { mode: "mixed", label: "All", titleLabel: "Laudō Present, Imperfect, and Future", typeTitle: "Type out the Laudō Verb Forms" }
  ],
  lesson10: [
    { mode: "present", label: "Present", titleLabel: "Moneō Present", typeTitle: "Type out the Moneō Present Forms" },
    { mode: "imperfect", label: "Imperfect", titleLabel: "Moneō Imperfect", typeTitle: "Type out the Moneō Imperfect Forms" },
    { mode: "future", label: "Future", titleLabel: "Moneō Future", typeTitle: "Type out the Moneō Future Forms" },
    { mode: "mixed", label: "All", titleLabel: "Moneō Present, Imperfect, and Future", typeTitle: "Type out the Moneō Verb Forms" }
  ],
  lesson11: [
    { mode: "firstPerson", label: "1st Person", titleLabel: "Ego and Nōs", typeTitle: "Type out the First-Person Pronouns" },
    { mode: "secondPerson", label: "2nd Person", titleLabel: "Tū and Vōs", typeTitle: "Type out the Second-Person Pronouns" },
    { mode: "thirdPerson", label: "3rd Person", titleLabel: "Is, Ea, Id", typeTitle: "Type out the Third-Person Pronouns" },
    { mode: "reflexive", label: "Reflexive", titleLabel: "Suī Reflexive", typeTitle: "Type out the Reflexive Pronouns" },
    { mode: "mixed", label: "All", titleLabel: "Lesson 11 Pronouns", typeTitle: "Type out the Lesson 11 Pronoun Forms" }
  ],
  lesson12: [
    { mode: "present", label: "Present", titleLabel: "Mittō Present", typeTitle: "Type out the Mittō Present Forms" },
    { mode: "imperfect", label: "Imperfect", titleLabel: "Mittō Imperfect", typeTitle: "Type out the Mittō Imperfect Forms" },
    { mode: "future", label: "Future", titleLabel: "Mittō Future", typeTitle: "Type out the Mittō Future Forms" },
    { mode: "mixed", label: "All", titleLabel: "Mittō Present, Imperfect, and Future", typeTitle: "Type out the Mittō Verb Forms" }
  ],
  lesson13: [
    { mode: "present", label: "Present", titleLabel: "Audiō Present", typeTitle: "Type out the Audiō Present Forms" },
    { mode: "imperfect", label: "Imperfect", titleLabel: "Audiō Imperfect", typeTitle: "Type out the Audiō Imperfect Forms" },
    { mode: "future", label: "Future", titleLabel: "Audiō Future", typeTitle: "Type out the Audiō Future Forms" },
    { mode: "mixed", label: "All", titleLabel: "Audiō Present, Imperfect, and Future", typeTitle: "Type out the Audiō Verb Forms" }
  ],
  lesson14: [
    { mode: "present", label: "Sum Present", titleLabel: "Sum Present", typeTitle: "Type out the Sum Present Forms" },
    { mode: "imperfect", label: "Sum Imperfect", titleLabel: "Sum Imperfect", typeTitle: "Type out the Sum Imperfect Forms" },
    { mode: "future", label: "Sum Future", titleLabel: "Sum Future", typeTitle: "Type out the Sum Future Forms" },
    { mode: "absum", label: "Absum", titleLabel: "Absum Present System", typeTitle: "Type out the Absum Forms" },
    { mode: "mixed", label: "All", titleLabel: "Sum and Absum", typeTitle: "Type out the Sum and Absum Forms" }
  ],
  lesson15: [
    { mode: "perfect", label: "Perfect", titleLabel: "Laudō Perfect", typeTitle: "Type out the Laudō Perfect Forms" },
    { mode: "pluperfect", label: "Pluperfect", titleLabel: "Laudō Pluperfect", typeTitle: "Type out the Laudō Pluperfect Forms" },
    { mode: "futurePerfect", label: "Future Perfect", titleLabel: "Laudō Future Perfect", typeTitle: "Type out the Laudō Future Perfect Forms" },
    { mode: "mixed", label: "All", titleLabel: "Laudō Perfect System", typeTitle: "Type out the Laudō Perfect-System Forms" }
  ],
  lesson16: [
    { mode: "nouns", label: "Nouns", titleLabel: "Puer, Ager, and Vir", typeTitle: "Type out the Puer, Ager, and Vir Forms" },
    { mode: "adjectives", label: "Adjectives", titleLabel: "Miser and Integer", typeTitle: "Type out the Miser and Integer Forms" },
    { mode: "possessives", label: "Possessives", titleLabel: "Meus, Tuus, Noster, and Vester", typeTitle: "Type out the Possessive Adjective Forms" },
    { mode: "mixed", label: "All", titleLabel: "Lesson 16 Forms", typeTitle: "Type out all Lesson 16 Forms" }
  ],
  lesson17: [
    { mode: "passiveSigns", label: "Signs", titleLabel: "Passive Personal Signs", typeTitle: "Type out the Passive Personal Signs" },
    { mode: "present", label: "Present", titleLabel: "Laudō Present Passive", typeTitle: "Type out the Laudō Present Passive Forms" },
    { mode: "imperfect", label: "Imperfect", titleLabel: "Laudō Imperfect Passive", typeTitle: "Type out the Laudō Imperfect Passive Forms" },
    { mode: "future", label: "Future", titleLabel: "Laudō Future Passive", typeTitle: "Type out the Laudō Future Passive Forms" },
    { mode: "mixed", label: "All", titleLabel: "Laudō Present-System Passive", typeTitle: "Type out all Lesson 17 Passive Forms" }
  ],
  lesson18: [
    { mode: "present", label: "Present", titleLabel: "Moneō Present Passive", typeTitle: "Type out the Moneō Present Passive Forms" },
    { mode: "imperfect", label: "Imperfect", titleLabel: "Moneō Imperfect Passive", typeTitle: "Type out the Moneō Imperfect Passive Forms" },
    { mode: "future", label: "Future", titleLabel: "Moneō Future Passive", typeTitle: "Type out the Moneō Future Passive Forms" },
    { mode: "mixed", label: "All", titleLabel: "Moneō Present-System Passive", typeTitle: "Type out all Lesson 18 Passive Forms" }
  ],
  lesson19: [
    { mode: "present", label: "Present", titleLabel: "Mittō Present Passive", typeTitle: "Type out the Mittō Present Passive Forms" },
    { mode: "imperfect", label: "Imperfect", titleLabel: "Mittō Imperfect Passive", typeTitle: "Type out the Mittō Imperfect Passive Forms" },
    { mode: "future", label: "Future", titleLabel: "Mittō Future Passive", typeTitle: "Type out the Mittō Future Passive Forms" },
    { mode: "mixed", label: "All", titleLabel: "Mittō Present-System Passive", typeTitle: "Type out all Lesson 19 Passive Forms" }
  ],
  lesson20: [
    { mode: "present", label: "Present", titleLabel: "Audiō Present Passive", typeTitle: "Type out the Audiō Present Passive Forms" },
    { mode: "imperfect", label: "Imperfect", titleLabel: "Audiō Imperfect Passive", typeTitle: "Type out the Audiō Imperfect Passive Forms" },
    { mode: "future", label: "Future", titleLabel: "Audiō Future Passive", typeTitle: "Type out the Audiō Future Passive Forms" },
    { mode: "mixed", label: "All", titleLabel: "Audiō Present-System Passive", typeTitle: "Type out all Lesson 20 Passive Forms" }
  ],
  lesson21: [
    { mode: "perfect", label: "Perfect", titleLabel: "Laudō Perfect Passive", typeTitle: "Type out the Laudō Perfect Passive Forms" },
    { mode: "agreement", label: "Agreement", titleLabel: "Participle Agreement", typeTitle: "Type out Perfect Passive Agreement Forms" },
    { mode: "pluperfect", label: "Pluperfect", titleLabel: "Laudō Pluperfect Passive", typeTitle: "Type out the Laudō Pluperfect Passive Forms" },
    { mode: "futurePerfect", label: "Future Perfect", titleLabel: "Laudō Future Perfect Passive", typeTitle: "Type out the Laudō Future Perfect Passive Forms" },
    { mode: "mixed", label: "All", titleLabel: "Laudō Perfect-System Passive", typeTitle: "Type out all Lesson 21 Passive Forms" }
  ],
  lesson22: [
    { mode: "firstConjugation", label: "Laudō", titleLabel: "Laudō Present Subjunctive", typeTitle: "Type out the Laudō Present Subjunctive Forms" },
    { mode: "secondConjugation", label: "Moneō", titleLabel: "Moneō Present Subjunctive", typeTitle: "Type out the Moneō Present Subjunctive Forms" },
    { mode: "thirdConjugation", label: "Mittō", titleLabel: "Mittō Present Subjunctive", typeTitle: "Type out the Mittō Present Subjunctive Forms" },
    { mode: "fourthConjugation", label: "Audiō", titleLabel: "Audiō Present Subjunctive", typeTitle: "Type out the Audiō Present Subjunctive Forms" },
    { mode: "sum", label: "Sum", titleLabel: "Sum Present Subjunctive", typeTitle: "Type out the Sum Present Subjunctive Forms" },
    { mode: "mixed", label: "All", titleLabel: "Present Subjunctive", typeTitle: "Type out all Lesson 22 Present Subjunctive Forms" }
  ],
  lesson23: [
    { mode: "firstConjugation", label: "Laudō", titleLabel: "Laudō Imperfect Subjunctive", typeTitle: "Type out the Laudō Imperfect Subjunctive Forms" },
    { mode: "secondConjugation", label: "Moneō", titleLabel: "Moneō Imperfect Subjunctive", typeTitle: "Type out the Moneō Imperfect Subjunctive Forms" },
    { mode: "thirdConjugation", label: "Mittō", titleLabel: "Mittō Imperfect Subjunctive", typeTitle: "Type out the Mittō Imperfect Subjunctive Forms" },
    { mode: "fourthConjugation", label: "Audiō", titleLabel: "Audiō Imperfect Subjunctive", typeTitle: "Type out the Audiō Imperfect Subjunctive Forms" },
    { mode: "sum", label: "Sum", titleLabel: "Sum Imperfect Subjunctive", typeTitle: "Type out the Sum Imperfect Subjunctive Forms" },
    { mode: "mixed", label: "All", titleLabel: "Imperfect Subjunctive", typeTitle: "Type out all Lesson 23 Imperfect Subjunctive Forms" }
  ],
  lesson24: [
    { mode: "masculine", label: "Masc.", titleLabel: "Quī Masculine", typeTitle: "Type out the Quī Masculine Forms" },
    { mode: "feminine", label: "Fem.", titleLabel: "Quae Feminine", typeTitle: "Type out the Quae Feminine Forms" },
    { mode: "neuter", label: "Neut.", titleLabel: "Quod Neuter", typeTitle: "Type out the Quod Neuter Forms" },
    { mode: "mixed", label: "All", titleLabel: "Qui, Quae, Quod", typeTitle: "Type out all Relative Pronoun Forms" }
  ],
  lesson25: [
    { mode: "adverbs", label: "Adverbs", titleLabel: "Ubi, Quō, Unde, Cūr", typeTitle: "Type out the Direct Question Adverbs" },
    { mode: "particles", label: "Particles", titleLabel: "-ne, Num, and Nōnne", typeTitle: "Type out the Direct Question Particles" },
    { mode: "pronounSingular", label: "Pronoun Sing.", titleLabel: "Quis/Quid Singular", typeTitle: "Type out the Singular Interrogative Pronoun Forms" },
    { mode: "pronounPlural", label: "Pronoun Pl.", titleLabel: "Quis/Quid Plural", typeTitle: "Type out the Plural Interrogative Pronoun Forms" },
    { mode: "adjective", label: "Adj.", titleLabel: "Interrogative Adjective", typeTitle: "Type out the Interrogative Adjective Phrases" },
    { mode: "mixed", label: "All", titleLabel: "Lesson 25 Direct Questions", typeTitle: "Type out all Lesson 25 Direct Question Forms" }
  ],
  lesson26: [
    { mode: "laudoPerfect", label: "Laudō Perf.", titleLabel: "Laudō Perfect Subjunctive", typeTitle: "Type out the Laudō Perfect Subjunctive Forms" },
    { mode: "laudoPluperfect", label: "Laudō Plup.", titleLabel: "Laudō Pluperfect Subjunctive", typeTitle: "Type out the Laudō Pluperfect Subjunctive Forms" },
    { mode: "mittoPerfect", label: "Mittō Perf.", titleLabel: "Mittō Perfect Subjunctive", typeTitle: "Type out the Mittō Perfect Subjunctive Forms" },
    { mode: "mittoPluperfect", label: "Mittō Plup.", titleLabel: "Mittō Pluperfect Subjunctive", typeTitle: "Type out the Mittō Pluperfect Subjunctive Forms" },
    { mode: "sum", label: "Sum", titleLabel: "Sum Perfect-System Subjunctive", typeTitle: "Type out the Sum Perfect-System Subjunctive Forms" },
    { mode: "mixed", label: "All", titleLabel: "Lesson 26 Perfect-System Subjunctive", typeTitle: "Type out all Lesson 26 Perfect-System Subjunctive Forms" }
  ],
  lesson27: [
    { mode: "vocatives", label: "Vocatives", titleLabel: "Vocative Forms", typeTitle: "Type out the Vocative Forms" },
    { mode: "imperatives", label: "Commands", titleLabel: "Present Imperative Active", typeTitle: "Type out the Present Imperative Forms" },
    { mode: "wishes", label: "Wishes", titleLabel: "Wishes and Let-Us Forms", typeTitle: "Type out the Wish and Hortatory Forms" },
    { mode: "mixed", label: "All", titleLabel: "Lesson 27 Address, Command, and Wish Forms", typeTitle: "Type out all Lesson 27 Forms" }
  ],
  lesson28: [
    { mode: "sui", label: "Suī", titleLabel: "Suī Reflexive Pronoun", typeTitle: "Type out the Suī Reflexive Pronoun Forms" },
    { mode: "suus", label: "Suus", titleLabel: "Suus Possessive Adjective", typeTitle: "Type out the Suus Possessive Forms" },
    { mode: "idioms", label: "Idioms", titleLabel: "Reflexive Idioms and Rules", typeTitle: "Type out the Lesson 28 Idioms and Rule Cues" },
    { mode: "mixed", label: "All", titleLabel: "Lesson 28 Suus and Suī", typeTitle: "Type out all Lesson 28 Reflexive Forms" }
  ],
  lesson29: [
    { mode: "presentPassive", label: "Pres. Pass.", titleLabel: "Present Passive Subjunctive", typeTitle: "Type out the Present Passive Subjunctive Forms" },
    { mode: "imperfectPassive", label: "Imperf. Pass.", titleLabel: "Imperfect Passive Subjunctive", typeTitle: "Type out the Imperfect Passive Subjunctive Forms" },
    { mode: "perfectPassive", label: "Perf. Pass.", titleLabel: "Perfect Passive Subjunctive", typeTitle: "Type out the Perfect Passive Subjunctive Forms" },
    { mode: "pluperfectPassive", label: "Plup. Pass.", titleLabel: "Pluperfect Passive Subjunctive", typeTitle: "Type out the Pluperfect Passive Subjunctive Forms" },
    { mode: "patterns", label: "Patterns", titleLabel: "Cum, Causa, and Cause", typeTitle: "Type out the Cum, Causa, and Cause Patterns" },
    { mode: "mixed", label: "All", titleLabel: "Lesson 29 Passive Subjunctive and Patterns", typeTitle: "Type out all Lesson 29 Forms and Patterns" }
  ],
  lesson30: [
    { mode: "singular", label: "Singular", titleLabel: "Perfect Participle Singular Agreement", typeTitle: "Type out Perfect Participle Singular Forms" },
    { mode: "plural", label: "Plural", titleLabel: "Perfect Participle Plural Agreement", typeTitle: "Type out Perfect Participle Plural Forms" },
    { mode: "agreement", label: "Agreement", titleLabel: "Perfect Participle Agreement", typeTitle: "Type out the Perfect Participle Agreement Forms" },
    { mode: "principalParts", label: "Parts", titleLabel: "Perfect Participle Principal Parts", typeTitle: "Type out the Perfect Participle Principal Parts" },
    { mode: "vocabularyParticiples", label: "New PPPs", titleLabel: "Lesson 30 Participles", typeTitle: "Type out the Lesson 30 Participle Forms" },
    { mode: "rules", label: "Rules", titleLabel: "Lesson 30 Rule Cues", typeTitle: "Type out the Lesson 30 Rule Cues" },
    { mode: "mixed", label: "All", titleLabel: "Lesson 30 Perfect Participle Passive", typeTitle: "Type out all Lesson 30 Forms and Cues" }
  ],
  lesson31: [
    { mode: "masculine", label: "Masc.", titleLabel: "Hic Masculine", typeTitle: "Type out the Hic Masculine Forms" },
    { mode: "feminine", label: "Fem.", titleLabel: "Haec Feminine", typeTitle: "Type out the Haec Feminine Forms" },
    { mode: "neuter", label: "Neut.", titleLabel: "Hoc Neuter", typeTitle: "Type out the Hoc Neuter Forms" },
    { mode: "singular", label: "Singular", titleLabel: "Hic Singular", typeTitle: "Type out all Singular Hic Forms" },
    { mode: "plural", label: "Plural", titleLabel: "Hic Plural", typeTitle: "Type out all Plural Hic Forms" },
    { mode: "mixed", label: "All", titleLabel: "Hic, Haec, Hoc", typeTitle: "Type out all Hic, Haec, Hoc Forms" }
  ]
};

function getEndingPractice(lessonSet = activeLessonSet) {
  return endingPracticeByLesson[lessonSet] || endingPracticeByLesson.lesson1;
}

function getEndingPracticeCopy(lessonSet = activeLessonSet) {
  return endingPracticeCopy[lessonSet] || endingPracticeCopy.lesson1;
}

function getEndingModeOptions(lessonSet = activeLessonSet) {
  return endingModeOptionsByLesson[lessonSet] || endingModeOptionsByLesson.lesson1;
}

function getEndingModeOption(mode, lessonSet = activeLessonSet) {
  return getEndingModeOptions(lessonSet).find((option) => option.mode === mode);
}

function renderEndingModeButtons(attributeName, lessonSet = activeLessonSet) {
  return `
    <div class="form-button-grid ${lessonSet !== "lesson1" ? "long-form-button-grid" : ""}">
      ${getEndingModeOptions(lessonSet).map((option) =>
        `<button class="primary-button" ${attributeName}="${escapeHTML(option.mode)}">${escapeHTML(option.label)}</button>`
      ).join("")}
    </div>`;
}

function renderEndingFinalButtons(lessonSet = activeLessonSet) {
  if (lessonSet !== "lesson1") return renderEndingModeButtons("data-ending-final", lessonSet);
  return `<button class="primary-button" data-ending-final="both">Start final test</button>`;
}

const defaultState = {
  profile: { name: "Scholar", goal: 40 },
  xp: 0,
  xpToday: 0,
  today: "",
  hearts: 5,
  streak: 1,
  lastStudyDay: "",
  completed: [],
  mistakes: [],
  pairBest: {
    vocabulary: null,
    grammar: null,
    grammarSingular: null,
    grammarPlural: null,
    formsSingular: null,
    formsPlural: null,
    formsMixed: null,
    vocabularyLesson2: null,
    grammarLesson2: null,
    grammarLesson2Singular: null,
    grammarLesson2Plural: null,
    cumulativeVocabularyLesson1: null,
    unitVocabularyUnit1: null,
    unitVocabularyUnit2: null,
    unitVocabularyUnit3: null,
    unitVocabularyUnit4: null,
    unitVocabularyUnit5: null,
    unitVocabularyUnit6: null,
    unitVocabularyUnit7: null,
    unitVocabularyUnit8: null,
    unitVocabularyUnit9: null,
    cumulativeVocabularyLesson2: null,
    cumulativeVocabularyLesson3: null,
    cumulativeVocabularyLesson4: null,
    cumulativeVocabularyLesson5: null,
    cumulativeVocabularyLesson6: null,
    cumulativeVocabularyLesson7: null,
    cumulativeVocabularyLesson8: null,
    formsLesson2Singular: null,
    formsLesson2Plural: null,
    formsLesson2Mixed: null,
    vocabularyLesson3: null,
    grammarLesson3: null,
    grammarLesson3Singular: null,
    grammarLesson3Plural: null,
    formsLesson3Singular: null,
    formsLesson3Plural: null,
    formsLesson3Mixed: null,
    vocabularyLesson4: null,
    grammarLesson4: null,
    grammarLesson4Singular: null,
    grammarLesson4Plural: null,
    formsLesson4Singular: null,
    formsLesson4Plural: null,
    formsLesson4Mixed: null,
    vocabularyLesson5: null,
    grammarLesson5: null,
    grammarLesson5Singular: null,
    grammarLesson5Plural: null,
    formsLesson5Singular: null,
    formsLesson5Plural: null,
    formsLesson5Mixed: null,
    vocabularyLesson6: null,
    grammarLesson6: null,
    grammarLesson6Singular: null,
    grammarLesson6Plural: null,
    formsLesson6Singular: null,
    formsLesson6Plural: null,
    formsLesson6Mixed: null,
    vocabularyLesson7: null,
    grammarLesson7: null,
    grammarLesson7Singular: null,
    grammarLesson7Plural: null,
    formsLesson7Singular: null,
    formsLesson7Plural: null,
    formsLesson7Mixed: null,
    vocabularyLesson8: null,
    grammarLesson8: null,
    grammarLesson8Singular: null,
    grammarLesson8Plural: null,
    formsLesson8Singular: null,
    formsLesson8Plural: null,
    formsLesson8Mixed: null,
    cumulativeVocabularyLesson9: null,
    cumulativeVocabularyLesson10: null,
    vocabularyLesson9: null,
    grammarLesson9: null,
    grammarLesson9Singular: null,
    grammarLesson9Plural: null,
    formsLesson9Singular: null,
    formsLesson9Plural: null,
    formsLesson9Mixed: null,
    vocabularyLesson10: null,
    grammarLesson10: null,
    grammarLesson10Singular: null,
    grammarLesson10Plural: null,
    formsLesson10Singular: null,
    formsLesson10Plural: null,
    formsLesson10Mixed: null,
    cumulativeVocabularyLesson11: null,
    cumulativeVocabularyLesson12: null,
    vocabularyLesson11: null,
    grammarLesson11: null,
    grammarLesson11Singular: null,
    grammarLesson11Plural: null,
    formsLesson11Singular: null,
    formsLesson11Plural: null,
    formsLesson11Mixed: null,
    cumulativeVocabularyLesson13: null,
    cumulativeVocabularyLesson14: null,
    cumulativeVocabularyLesson15: null,
    cumulativeVocabularyLesson16: null,
    cumulativeVocabularyLesson17: null,
    cumulativeVocabularyLesson18: null,
    cumulativeVocabularyLesson19: null,
    cumulativeVocabularyLesson20: null,
    cumulativeVocabularyLesson21: null,
    cumulativeVocabularyLesson22: null,
    cumulativeVocabularyLesson23: null,
    cumulativeVocabularyLesson24: null,
    cumulativeVocabularyLesson25: null,
    cumulativeVocabularyLesson26: null,
    cumulativeVocabularyLesson27: null,
    cumulativeVocabularyLesson28: null,
    cumulativeVocabularyLesson29: null,
    cumulativeVocabularyLesson30: null,
    cumulativeVocabularyLesson31: null,
    vocabularyLesson12: null,
    grammarLesson12: null,
    grammarLesson12Singular: null,
    grammarLesson12Plural: null,
    formsLesson12Singular: null,
    formsLesson12Plural: null,
    formsLesson12Mixed: null,
    vocabularyLesson13: null,
    grammarLesson13: null,
    grammarLesson13Singular: null,
    grammarLesson13Plural: null,
    formsLesson13Singular: null,
    formsLesson13Plural: null,
    formsLesson13Mixed: null,
    vocabularyLesson14: null,
    grammarLesson14: null,
    grammarLesson14Singular: null,
    grammarLesson14Plural: null,
    formsLesson14Singular: null,
    formsLesson14Plural: null,
    formsLesson14Mixed: null,
    vocabularyLesson15: null,
    grammarLesson15: null,
    grammarLesson15Singular: null,
    grammarLesson15Plural: null,
    formsLesson15Singular: null,
    formsLesson15Plural: null,
    formsLesson15Mixed: null,
    vocabularyLesson16: null,
    grammarLesson16: null,
    grammarLesson16Singular: null,
    grammarLesson16Plural: null,
    formsLesson16Singular: null,
    formsLesson16Plural: null,
    formsLesson16Mixed: null,
    vocabularyLesson17: null,
    grammarLesson17: null,
    grammarLesson17Singular: null,
    grammarLesson17Plural: null,
    formsLesson17Singular: null,
    formsLesson17Plural: null,
    formsLesson17Mixed: null,
    vocabularyLesson18: null,
    grammarLesson18: null,
    grammarLesson18Singular: null,
    grammarLesson18Plural: null,
    formsLesson18Singular: null,
    formsLesson18Plural: null,
    formsLesson18Mixed: null,
    vocabularyLesson19: null,
    grammarLesson19: null,
    grammarLesson19Singular: null,
    grammarLesson19Plural: null,
    formsLesson19Singular: null,
    formsLesson19Plural: null,
    formsLesson19Mixed: null,
    vocabularyLesson20: null,
    grammarLesson20: null,
    grammarLesson20Singular: null,
    grammarLesson20Plural: null,
    formsLesson20Singular: null,
    formsLesson20Plural: null,
    formsLesson20Mixed: null,
    vocabularyLesson21: null,
    grammarLesson21: null,
    grammarLesson21Singular: null,
    grammarLesson21Plural: null,
    formsLesson21Singular: null,
    formsLesson21Plural: null,
    formsLesson21Mixed: null,
    vocabularyLesson22: null,
    grammarLesson22: null,
    grammarLesson22Singular: null,
    grammarLesson22Plural: null,
    formsLesson22Singular: null,
    formsLesson22Plural: null,
    formsLesson22Mixed: null,
    vocabularyLesson23: null,
    grammarLesson23: null,
    grammarLesson23Singular: null,
    grammarLesson23Plural: null,
    formsLesson23Singular: null,
    formsLesson23Plural: null,
    formsLesson23Mixed: null,
    vocabularyLesson24: null,
    grammarLesson24: null,
    grammarLesson24Singular: null,
    grammarLesson24Plural: null,
    formsLesson24Singular: null,
    formsLesson24Plural: null,
    formsLesson24Mixed: null,
    vocabularyLesson25: null,
    grammarLesson25: null,
    grammarLesson25Singular: null,
    grammarLesson25Plural: null,
    formsLesson25Singular: null,
    formsLesson25Plural: null,
    formsLesson25Mixed: null,
    vocabularyLesson26: null,
    grammarLesson26: null,
    grammarLesson26Singular: null,
    grammarLesson26Plural: null,
    formsLesson26Singular: null,
    formsLesson26Plural: null,
    formsLesson26Mixed: null,
    vocabularyLesson27: null,
    grammarLesson27: null,
    grammarLesson27Singular: null,
    grammarLesson27Plural: null,
    formsLesson27Singular: null,
    formsLesson27Plural: null,
    formsLesson27Mixed: null,
    vocabularyLesson28: null,
    grammarLesson28: null,
    grammarLesson28Singular: null,
    grammarLesson28Plural: null,
    formsLesson28Singular: null,
    formsLesson28Plural: null,
    formsLesson28Mixed: null,
    vocabularyLesson29: null,
    grammarLesson29: null,
    grammarLesson29Singular: null,
    grammarLesson29Plural: null,
    formsLesson29Singular: null,
    formsLesson29Plural: null,
    formsLesson29Mixed: null,
    vocabularyLesson30: null,
    grammarLesson30: null,
    grammarLesson30Singular: null,
    grammarLesson30Plural: null,
    formsLesson30Singular: null,
    formsLesson30Plural: null,
    formsLesson30Mixed: null,
    vocabularyLesson31: null,
    grammarLesson31: null,
    grammarLesson31Singular: null,
    grammarLesson31Plural: null,
    formsLesson31Singular: null,
    formsLesson31Plural: null,
    formsLesson31Mixed: null
  }
};

let state = loadState();
let currentView = "learn";
let activeLessonSet = "lesson1";
let activeReviewUnit = "unit1";
let runtime = null;
let pairRuntime = null;
let endingRuntime = null;

const view = document.querySelector("#view");
const lessonShell = document.querySelector("#lesson-shell");
const lessonStage = document.querySelector("#lesson-stage");
const lessonFooter = document.querySelector(".lesson-footer");
const feedback = document.querySelector("#feedback");
const checkButton = document.querySelector("#check-button");
const profileDialog = document.querySelector("#profile-dialog");
const topLessonMenu = document.querySelector("#top-lesson-menu");

ensureToday();
updateMetrics();
renderView();

document.querySelectorAll("[data-nav]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    currentView = button.dataset.nav;
    setActiveNav();
    renderView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.querySelector("#profile-button").addEventListener("click", openProfile);
document.querySelector("#close-lesson").addEventListener("click", closeLesson);
checkButton.addEventListener("click", handleLessonAction);
document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.repeat || lessonShell.hidden || checkButton.disabled) return;
  event.preventDefault();
  checkButton.click();
});

document.querySelector("#profile-form").addEventListener("submit", (event) => {
  if (event.submitter?.value !== "save") return;
  const name = document.querySelector("#profile-name").value.trim();
  const goal = Number(document.querySelector("#profile-goal").value);
  state.profile = { name: name || "Scholar", goal };
  saveState();
  updateMetrics();
  renderView();
  showToast("Profile saved");
});

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(defaultState);
    const mistakes = normalizeReviewItems(saved.mistakes);
    return {
      ...structuredClone(defaultState),
      ...saved,
      profile: { ...defaultState.profile, ...(saved.profile || {}) },
      completed: Array.isArray(saved.completed) ? saved.completed : [],
      mistakes,
      pairBest: { ...defaultState.pairBest, ...(saved.pairBest || {}) }
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function normalizeReviewItems(items) {
  if (!Array.isArray(items)) return [];
  const seen = new Set();
  return items
    .map((item) => {
      if (typeof item === "string") return { key: item, correct: 0 };
      if (!item || typeof item !== "object" || !item.key) return null;
      return { key: String(item.key), correct: Math.max(0, Math.min(REVIEW_MASTERY_GOAL, Number(item.correct) || 0)) };
    })
    .filter((item) => {
      if (!item || seen.has(item.key)) return false;
      seen.add(item.key);
      return true;
    });
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function localDay() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function ensureToday() {
  const today = localDay();
  if (state.today !== today) {
    state.today = today;
    state.xpToday = 0;
    state.hearts = 5;
    saveState();
  }
}

function recordStudyDay() {
  const today = localDay();
  if (state.lastStudyDay === today) return;
  if (state.lastStudyDay) {
    const previous = new Date(`${state.lastStudyDay}T12:00:00`);
    const current = new Date(`${today}T12:00:00`);
    const gap = Math.round((current - previous) / 86400000);
    state.streak = gap === 1 ? state.streak + 1 : 1;
  }
  state.lastStudyDay = today;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatQuestionPrompt(prompt) {
  return escapeHTML(prompt).replace(/&quot;([^&]+?)&quot;/g, '<span class="latin-in-prompt">&quot;$1&quot;</span>');
}

function uniqueItems(items) {
  return [...new Set(items)];
}

function renderLessonSwitcher(attributeName, ariaLabel, options = {}) {
  const { showUnitReviews = false } = options;
  const unitGroups = [];
  Object.entries(lessonCatalog).forEach(([key, info]) => {
    const unitKey = info.unit || "unit1";
    let group = unitGroups.find((candidate) => candidate.unitKey === unitKey);
    if (!group) {
      group = {
        unitKey,
        unit: unitCatalog[unitKey] || { label: info.eyebrow || "Unit", title: "" },
        lessons: []
      };
      unitGroups.push(group);
    }
    group.lessons.push([key, info]);
  });

  const unitRows = unitGroups.map((group) => `
    <div class="unit-lesson-group">
      <div class="unit-label ${showUnitReviews ? "with-review" : ""}">
        <span>${escapeHTML(group.unit.label)}</span>
        <small>${escapeHTML(group.unit.title)}</small>
        ${showUnitReviews ? `<button type="button" class="unit-review-button" data-unit-review="${escapeHTML(group.unitKey)}">${escapeHTML(group.unit.label)} Review</button>` : ""}
      </div>
      <div class="unit-lesson-tabs">
        ${group.lessons.map(([key, info]) => `
          <button type="button" class="lesson-tab ${activeLessonSet === key ? "active" : ""}" ${attributeName}="${escapeHTML(key)}" aria-label="${escapeHTML(`${info.label}: ${info.tabTitle || info.title}`)}">
            <span>${escapeHTML(info.label)}</span>
            <small>${escapeHTML(info.tabTitle || info.title)}</small>
          </button>`).join("")}
      </div>
    </div>`).join("");

  return `<div class="lesson-switcher" role="group" aria-label="${escapeHTML(ariaLabel)}">${unitRows}</div>`;
}

function getCumulativeLessonSets(lessonSet = activeLessonSet) {
  const sets = Array.from({ length: lessonRank(lessonSet) }, (_, index) => `lesson${index + 1}`)
    .filter((key) => lessonCatalog[key]);
  return sets.length ? sets : ["lesson1"];
}

function getVocabularyForLessonSet(lessonSet) {
  if (lessonSet === "lesson31") return lessonThirtyOneVocabulary;
  if (lessonSet === "lesson30") return lessonThirtyVocabulary;
  if (lessonSet === "lesson29") return lessonTwentyNineVocabulary;
  if (lessonSet === "lesson28") return lessonTwentyEightVocabulary;
  if (lessonSet === "lesson27") return lessonTwentySevenVocabulary;
  if (lessonSet === "lesson26") return lessonTwentySixVocabulary;
  if (lessonSet === "lesson25") return lessonTwentyFiveVocabulary;
  if (lessonSet === "lesson24") return lessonTwentyFourVocabulary;
  if (lessonSet === "lesson23") return lessonTwentyThreeVocabulary;
  if (lessonSet === "lesson22") return lessonTwentyTwoVocabulary;
  if (lessonSet === "lesson21") return lessonTwentyOneVocabulary;
  if (lessonSet === "lesson20") return lessonTwentyVocabulary;
  if (lessonSet === "lesson19") return lessonNineteenVocabulary;
  if (lessonSet === "lesson18") return lessonEighteenVocabulary;
  if (lessonSet === "lesson17") return lessonSeventeenVocabulary;
  if (lessonSet === "lesson16") return lessonSixteenVocabulary;
  if (lessonSet === "lesson15") return lessonFifteenVocabulary;
  if (lessonSet === "lesson14") return lessonFourteenVocabulary;
  if (lessonSet === "lesson13") return lessonThirteenVocabulary;
  if (lessonSet === "lesson12") return lessonTwelveVocabulary;
  if (lessonSet === "lesson11") return lessonElevenVocabulary;
  if (lessonSet === "lesson10") return lessonTenVocabulary;
  if (lessonSet === "lesson9") return lessonNineVocabulary;
  if (lessonSet === "lesson8") return lessonEightVocabulary;
  if (lessonSet === "lesson7") return lessonSevenVocabulary;
  if (lessonSet === "lesson6") return lessonSixVocabulary;
  if (lessonSet === "lesson5") return lessonFiveVocabulary;
  if (lessonSet === "lesson4") return lessonFourVocabulary;
  if (lessonSet === "lesson3") return lessonThreeVocabulary;
  if (lessonSet === "lesson2") return lessonTwoVocabulary;
  return vocabulary;
}

function parsePairMode(mode) {
  const formsMatch = /^forms-(lesson\d+)-(singular|plural|mixed)$/.exec(mode);
  if (formsMatch) return { kind: "forms", lessonSet: formsMatch[1], scope: formsMatch[2] };

  const cumulativeVocabularyMatch = /^vocabulary-cumulative-(lesson\d+)$/.exec(mode);
  if (cumulativeVocabularyMatch) return { kind: "cumulativeVocabulary", lessonSet: cumulativeVocabularyMatch[1] };

  const unitVocabularyMatch = /^vocabulary-unit-(unit\d+)$/.exec(mode);
  if (unitVocabularyMatch) return { kind: "unitVocabulary", unitKey: unitVocabularyMatch[1] };

  const vocabularyMatch = /^vocabulary-(lesson\d+)$/.exec(mode);
  if (vocabularyMatch) return { kind: "vocabulary", lessonSet: vocabularyMatch[1] };

  const grammarMatch = /^grammar-(lesson\d+)(?:-(singular|plural|both))?$/.exec(mode);
  if (grammarMatch) return { kind: "grammar", lessonSet: grammarMatch[1], scope: grammarMatch[2] || "both" };

  if (mode === "vocabulary") return { kind: "vocabulary", lessonSet: "lesson1" };
  if (mode === "grammar") return { kind: "grammar", lessonSet: "lesson1", scope: "both" };
  if (mode.startsWith("forms-")) return { kind: "forms", lessonSet: "lesson1", scope: mode.replace("forms-", "") };
  return { kind: mode, lessonSet: "lesson1" };
}

function pairKeyForEntry(mode, pairId) {
  const parsed = parsePairMode(mode);
  if (parsed.kind === "forms" && pairRuntime) {
    const pair = [...pairRuntime.activeLeft, ...pairRuntime.activeRight, ...pairRuntime.deck].find((entry) => entry.id === pairId);
    if (pair) return `form:${parsed.lessonSet}:${pair.left}`;
  }
  return `pair:${mode}:${pairId}`;
}

function reviewQuestionForKey(key) {
  const lessonFormMatch = /^form:(lesson\d+):(.+)$/.exec(key);
  if (lessonFormMatch) return wordFormReviewQuestion(key, lessonFormMatch[2], lessonFormMatch[1]);

  const legacyFormMatch = /^form:(.+)$/.exec(key);
  if (legacyFormMatch) return wordFormReviewQuestion(key, legacyFormMatch[1], "lesson1");

  const cumulativeVocabularyPairMatch = /^pair:vocabulary-cumulative-(lesson\d+):pair-(\d+)$/.exec(key);
  if (cumulativeVocabularyPairMatch) {
    const [, lessonSet, indexText] = cumulativeVocabularyPairMatch;
    const config = getPairConfig(`vocabulary-cumulative-${lessonSet}`);
    const pair = config.pairs[Number(indexText)];
    if (!pair) return null;
    const [left, right] = pair;
    const otherMeanings = shuffled(config.pairs.map(([, english]) => english).filter((meaning) => meaning !== right)).slice(0, 3);
    return {
      type: "choice",
      sourceId: key,
      reviewLessonSet: lessonSet,
      reviewLabel: left,
      prompt: `What does "${left}" mean?`,
      choices: shuffled([right, ...otherMeanings]),
      correct: right,
      explanation: `"${left}" means ${right}.`
    };
  }

  const unitVocabularyPairMatch = /^pair:vocabulary-unit-(unit\d+):pair-(\d+)$/.exec(key);
  if (unitVocabularyPairMatch) {
    const [, unitKey, indexText] = unitVocabularyPairMatch;
    const config = getPairConfig(`vocabulary-unit-${unitKey}`);
    const pair = config.pairs[Number(indexText)];
    if (!pair) return null;
    const [left, right] = pair;
    const otherMeanings = shuffled(config.pairs.map(([, english]) => english).filter((meaning) => meaning !== right)).slice(0, 3);
    return {
      type: "choice",
      sourceId: key,
      reviewLessonSet: unitKey,
      reviewLabel: left,
      prompt: `What does "${left}" mean?`,
      choices: shuffled([right, ...otherMeanings]),
      correct: right,
      explanation: `"${left}" means ${right}.`
    };
  }

  const pairMatch = /^pair:(vocabulary|grammar)(?:-(lesson\d+))?(?:-(singular|plural|both))?:pair-(\d+)$/.exec(key);
  if (pairMatch) {
    const [, kind, lessonSet = "lesson1", scope = "", indexText] = pairMatch;
    const mode = kind === "grammar" && scope ? `${kind}-${lessonSet}-${scope}` : `${kind}-${lessonSet}`;
    const config = getPairConfig(mode);
    const pair = config.pairs[Number(indexText)];
    if (!pair) return null;
    const [left, right] = pair;

    if (kind === "grammar") {
      const endings = config.pairs;
      const promptNoun = config.promptNoun || "ending";
      const acceptedChoices = endings
        .filter(([ending]) => ending === left)
        .map(([, job]) => job);
      const choices = shuffled(uniqueItems([
        ...acceptedChoices,
        ...shuffled(endings.map(([, job]) => job).filter((job) => !acceptedChoices.includes(job))).slice(0, Math.max(0, 4 - acceptedChoices.length))
      ]));
      return {
        type: "choice",
        sourceId: key,
        reviewLessonSet: lessonSet,
        reviewLabel: `${left} ${promptNoun}`,
        prompt: `What can the ${promptNoun} "${left}" show?`,
        choices,
        correct: right,
        acceptedChoices,
        answer: acceptedChoices.join(" / "),
        explanation: acceptedChoices.length > 1
          ? `"${left}" can do more than one job here. Any of these meanings counts.`
          : `"${left}" means ${right} here.`
      };
    }

    const vocabularyList = getReviewResources(lessonSet).vocabulary;
    const otherMeanings = shuffled(vocabularyList.map(([, english]) => english).filter((meaning) => meaning !== right)).slice(0, 3);
    return {
      type: "choice",
      sourceId: key,
      reviewLessonSet: lessonSet,
      reviewLabel: left,
      prompt: `What does "${left}" mean?`,
      choices: shuffled([right, ...otherMeanings]),
      correct: right,
      explanation: `"${left}" means ${right}.`
    };
  }

  const [lessonId, questionIndex] = key.split(":");
  const lesson = curriculum.find((item) => item.id === lessonId);
  const question = lesson?.questions[Number(questionIndex)];
  if (!question) return null;
  return {
    ...question,
    sourceId: key,
    reviewLessonSet: lesson.lessonSet || "lesson1",
    reviewLabel: lesson.title
  };
}

function wordFormReviewQuestion(key, form, lessonSet = "lesson1") {
  const allForms = wordFormsByLesson[lessonSet] || wordFormPairs;
  const acceptedChoices = allForms
    .filter(([candidate]) => candidate === form)
    .map(([, meaning]) => meaning);
  if (!acceptedChoices.length) return null;
  const choices = shuffled(uniqueItems([
    ...acceptedChoices,
    ...shuffled(allForms.map(([, meaning]) => meaning).filter((meaning) => !acceptedChoices.includes(meaning))).slice(0, Math.max(0, 4 - acceptedChoices.length))
  ]));
  return {
    type: "choice",
    sourceId: key,
    reviewLessonSet: lessonSet,
    reviewLabel: form,
    prompt: `What does "${form}" show?`,
    choices,
    correct: acceptedChoices[0],
    acceptedChoices,
    answer: acceptedChoices.join(" / "),
    explanation: acceptedChoices.length > 1
      ? `"${form}" can show more than one job. Any matching meaning counts here.`
      : `"${form}" means ${acceptedChoices[0]}.`
  };
}

function getNeedsReviewItems(lessonSet = null) {
  return state.mistakes
    .map((item) => ({ ...item, question: reviewQuestionForKey(item.key) }))
    .filter((item) => item.question && (!lessonSet || item.question.reviewLessonSet === lessonSet));
}

function findReviewItem(key) {
  return state.mistakes.find((item) => item.key === key);
}

function markNeedsReview(key) {
  if (!reviewQuestionForKey(key)) return;
  if (!findReviewItem(key)) state.mistakes.push({ key, correct: 0 });
}

function markReviewCorrect(key) {
  const item = findReviewItem(key);
  if (!item) return;
  item.correct += 1;
  if (item.correct >= REVIEW_MASTERY_GOAL) {
    state.mistakes = state.mistakes.filter((candidate) => candidate.key !== key);
  }
}

function setActiveNav() {
  const activeNav = currentView === "cumulative-review" ? "review" : currentView;
  document.querySelectorAll(".nav-item[data-nav], .bottom-nav button[data-nav]").forEach((button) => {
    button.classList.toggle("active", button.dataset.nav === activeNav);
  });
  updateNavLabels();
}

function getActiveLessonLabel() {
  return lessonCatalog[activeLessonSet]?.label || "Lesson 1";
}

function getNavLabel(navKey) {
  if (navKey === "learn") return `Learning ${getActiveLessonLabel()}`;
  if (navKey === "review") return `Review ${getActiveLessonLabel()}`;
  if (navKey === "family") return "Family";
  return "";
}

function updateNavLabels() {
  document.querySelectorAll(".nav-item[data-nav], .bottom-nav button[data-nav]").forEach((button) => {
    const label = getNavLabel(button.dataset.nav);
    const labelElement = button.querySelector(".nav-label");
    if (labelElement && label) labelElement.textContent = label;
    if (label) button.setAttribute("aria-label", label);
  });
}

function updateMetrics() {
  document.querySelector("#streak-count").textContent = state.streak;
  document.querySelector("#xp-count").textContent = state.xp;
  document.querySelector("#heart-count").textContent = state.hearts;
  document.querySelector("#lesson-heart-count").textContent = state.hearts;
  const initial = state.profile.name.trim().charAt(0).toUpperCase() || "S";
  document.querySelector("#avatar-initial").textContent = initial;
}

function renderTopLessonMenu() {
  if (!topLessonMenu) return;
  const selectedValue = currentView === "cumulative-review"
    ? `review:${activeReviewUnit || lessonCatalog[activeLessonSet]?.unit || "unit1"}`
    : `lesson:${activeLessonSet}`;
  const unitGroups = Object.entries(unitCatalog).map(([unitKey, unit]) => {
    const lessons = Object.entries(lessonCatalog).filter(([, info]) => (info.unit || "unit1") === unitKey);
    return { unitKey, unit, lessons };
  }).filter((group) => group.lessons.length);
  const options = unitGroups.map((group) => `
    <optgroup label="${escapeHTML(`${group.unit.label} · ${group.unit.title}`)}">
      <option value="review:${escapeHTML(group.unitKey)}">${escapeHTML(group.unit.label)} Review</option>
      ${group.lessons.map(([key, info]) =>
        `<option value="lesson:${escapeHTML(key)}">${escapeHTML(`${info.label} · ${info.tabTitle || info.title}`)}</option>`
      ).join("")}
    </optgroup>`).join("");

  topLessonMenu.innerHTML = `
    <label class="top-lesson-label" for="top-lesson-select">
      <span>Choose a Unit and Lesson</span>
      <select class="top-lesson-select" id="top-lesson-select" aria-label="Choose a Unit and Lesson">
        ${options}
      </select>
    </label>`;

  const select = document.querySelector("#top-lesson-select");
  if (!select) return;
  select.value = selectedValue;
  select.addEventListener("change", () => {
    const [kind, value] = select.value.split(":");
    if (kind === "review") {
      activeReviewUnit = value;
      currentView = "cumulative-review";
    } else {
      activeLessonSet = value;
      activeReviewUnit = lessonCatalog[activeLessonSet]?.unit || activeReviewUnit;
      if (currentView !== "review") currentView = "learn";
    }
    setActiveNav();
    renderView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function renderView() {
  renderTopLessonMenu();
  setActiveNav();
  if (currentView === "review") renderReview();
  else if (currentView === "cumulative-review") renderCumulativeReview();
  else if (currentView === "family") renderFamily();
  else renderLearn();
}

function renderLearn() {
  const name = escapeHTML(state.profile.name);
  const hasPersonalName = state.profile.name.trim().toLowerCase() !== "scholar";
  const goalPercent = Math.min(100, Math.round((state.xpToday / state.profile.goal) * 100));
  const lessonInfo = lessonCatalog[activeLessonSet];
  const selectedLessons = curriculum.filter((lesson) => (lesson.lessonSet || "lesson1") === activeLessonSet);
  const completedInSet = selectedLessons.filter((lesson) => state.completed.includes(lesson.id)).length;
  const lessons = selectedLessons.map((lesson, index) => {
    const completed = state.completed.includes(lesson.id);
    const unlocked = completed || index <= completedInSet;
    const status = completed ? "✓ Complete" : unlocked ? "Begin →" : "Locked";
    return `
      <button class="lesson-card ${completed ? "completed" : ""}" data-lesson="${lesson.id}" ${unlocked ? "" : "disabled"} style="--node-color:${lesson.color}">
        <span class="lesson-node">${completed ? "✓" : lesson.number}</span>
        <span class="lesson-copy">
          <small>${lesson.eyebrow}</small>
          <h3>${lesson.title}</h3>
          <p>${lesson.subtitle}</p>
        </span>
        <span class="lesson-status">${status}</span>
      </button>`;
  }).join("");

  view.innerHTML = `
    <section class="hero">
      <div>
        <span class="eyebrow">Salve, ${name}</span>
        <h1>Your Latin path<br>begins here.</h1>
        <p>Master one idea at a time, following Henle's careful order. Choose the lesson you want to work on today.</p>
      </div>
      <div class="goal-card">
        <span>Today's goal</span>
        <strong>${state.xpToday} / ${state.profile.goal} XP</strong>
        <div class="goal-bar"><span style="width:${goalPercent}%"></span></div>
      </div>
    </section>
    <section class="personal-practice-card">
      <div class="personal-seal" aria-hidden="true">✎</div>
      <div>
        <span class="eyebrow">Personal practice</span>
        <h3>${hasPersonalName ? `Sentences starring ${name}` : "Put yourself in the story"}</h3>
        <p>${hasPersonalName ? `${name} will appear in fresh ${lessonInfo.label} sentences using that lesson's new words plus earlier Latin.` : "Add the learner's name and Henle Path will create story sentences just for them."}</p>
      </div>
      <div class="personal-actions">
        <button class="primary-button" id="personal-action">${hasPersonalName ? "Practice my sentences" : "Add your name"}</button>
        ${hasPersonalName ? `<button class="text-button" id="change-name">Change name</button>` : ""}
      </div>
    </section>
    <div class="section-heading">
      <div>
        <span class="eyebrow">${lessonInfo.eyebrow}</span>
        <h2>${lessonInfo.title}</h2>
        <p>${lessonInfo.description}</p>
      </div>
      <span class="book-badge">${lessonInfo.badge}</span>
    </div>
    <div class="path">${lessons}</div>`;

  view.querySelectorAll("[data-lesson]").forEach((button) => {
    button.addEventListener("click", () => startLesson(curriculum.find((lesson) => lesson.id === button.dataset.lesson)));
  });
  document.querySelector("#personal-action").addEventListener("click", hasPersonalName ? startPersonalPractice : openProfile);
  document.querySelector("#change-name")?.addEventListener("click", openProfile);
}

function renderCumulativeReview() {
  const unitInfo = getUnitReviewInfo(activeReviewUnit || lessonCatalog[activeLessonSet]?.unit || "unit1");
  const vocabularyDescription = `Match vocabulary from ${unitInfo.unit.label} only: ${unitInfo.lessonRange}.`;
  const endingsDescription = unitReviewEndingDescription(unitInfo.unitKey);

  view.innerHTML = `
    <section class="challenge-section simple-review-section">
      <div class="challenge-heading">
        <div>
          <span class="eyebrow">Unit review</span>
          <h2>${unitInfo.title}</h2>
          <p>${unitInfo.subtitle}</p>
        </div>
        <span class="book-badge">${unitInfo.lessonRange}</span>
      </div>
      <div class="pair-mode-grid simple-review-grid">
        <article class="pair-mode-card cumulative-vocabulary-mode">
          <div class="pair-mode-icon" aria-hidden="true">Aa</div>
          <div>
            <h3>Vocabulary matching game</h3>
            <p>${vocabularyDescription}</p>
          </div>
          <button class="primary-button" id="simple-review-vocabulary">Play ${unitInfo.unit.label} vocabulary</button>
        </article>
        <article class="pair-mode-card cumulative-endings-mode">
          <div class="pair-mode-icon" aria-hidden="true">✓</div>
          <div>
            <h3>No-hint typing test</h3>
            <p>${endingsDescription}</p>
          </div>
          <button class="primary-button" id="simple-review-endings">Type forms</button>
        </article>
      </div>
      <div class="simple-review-back">
        <button class="secondary-button" id="simple-review-back">Back to lessons</button>
      </div>
    </section>`;

  document.querySelector("#simple-review-vocabulary").addEventListener("click", () => {
    startPairs(unitInfo.vocabularyMode);
  });
  document.querySelector("#simple-review-endings").addEventListener("click", () => {
    startEndingFinalTest("unit");
  });
  document.querySelector("#simple-review-back").addEventListener("click", () => {
    currentView = "learn";
    setActiveNav();
    renderView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function renderReview() {
  const lessonInfo = lessonCatalog[activeLessonSet];
  const resources = getReviewResources(activeLessonSet);
  const selectedLessons = curriculum.filter((lesson) => (lesson.lessonSet || "lesson1") === activeLessonSet);
  const completedQuestions = curriculum
    .filter((lesson) => (lesson.lessonSet || "lesson1") === activeLessonSet && state.completed.includes(lesson.id))
    .reduce((count, lesson) => count + lesson.questions.length, 0);
  const practiceAvailable = selectedLessons.some((lesson) => state.completed.includes(lesson.id));
  const needsItems = getNeedsReviewItems(activeLessonSet);
  const chips = resources.vocabulary.map(([latin, english]) => `<div class="vocab-chip"><strong>${latin}</strong><span>${english}</span></div>`).join("");
  const endingRows = resources.endings.map(([ending, job]) => `<div class="ending-chip"><strong>${escapeHTML(ending)}</strong><span>${escapeHTML(job)}</span></div>`).join("");
  const grammarCards = resources.grammar.map((section) => `
    <article class="grammar-note">
      <h4>${escapeHTML(section.title)}</h4>
      <ul>${section.points.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul>
    </article>`).join("");
  const needsList = needsItems.length
    ? needsItems.map((item) => `
      <div class="needs-item">
        <div>
          <strong>${escapeHTML(item.question.reviewLabel || item.question.prompt)}</strong>
          <span>${escapeHTML(item.question.prompt)}</span>
        </div>
        <em>${item.correct} / ${REVIEW_MASTERY_GOAL}</em>
      </div>`).join("")
    : `<p class="empty-note">No missed ideas right now. Beautiful little clean slate.</p>`;
  const endingCopy = getEndingPracticeCopy(activeLessonSet);
  const wordFormCounts = {
    singular: getLessonWordFormCount(activeLessonSet, "singular"),
    plural: getLessonWordFormCount(activeLessonSet, "plural"),
    mixed: getLessonWordFormCount(activeLessonSet, "mixed")
  };
  const maxWordFormCount = Math.max(wordFormCounts.singular, wordFormCounts.plural, wordFormCounts.mixed);
  const endingTrainerCard = getEndingPractice(activeLessonSet) ? `
        <article class="pair-mode-card endings-mode">
          <div class="pair-mode-icon" aria-hidden="true">1-5</div>
          <div>
            <h3>Step 1 · Ending order</h3>
            <p>${escapeHTML(endingCopy.step1Description)}</p>
          </div>
          ${renderEndingModeButtons("data-ending-trainer", activeLessonSet)}
        </article>
        <article class="pair-mode-card endings-type-mode">
          <div class="pair-mode-icon" aria-hidden="true">abc</div>
          <div>
            <h3>Step 2 · Type it yourself</h3>
            <p>${escapeHTML(endingCopy.step2Description)}</p>
          </div>
          ${renderEndingModeButtons("data-ending-typing", activeLessonSet)}
        </article>
        <article class="pair-mode-card endings-final-mode">
          <div class="pair-mode-icon" aria-hidden="true">✓</div>
          <div>
            <h3>${escapeHTML(endingCopy.finalStepTitle)}</h3>
            <p>${escapeHTML(endingCopy.finalCardDescription)}</p>
          </div>
          ${renderEndingFinalButtons(activeLessonSet)}
        </article>
        <article class="pair-mode-card grammar-mode">
          <div class="pair-mode-icon" aria-hidden="true">-ae</div>
          <div>
            <h3>${escapeHTML(resources.grammarMatchStepTitle || "Step 4 · Match endings to meanings")}</h3>
            <p>${escapeHTML(resources.grammarMatchDescription || "Match a Latin ending with the job it does in English.")}</p>
            <div class="mini-score-grid">
              <span class="best-score">${formatPairBest(state.pairBest[resources.bestKeys.grammarSingular], resources.grammarEndings.singular.length, "Sing.")}</span>
              <span class="best-score">${formatPairBest(state.pairBest[resources.bestKeys.grammarPlural], resources.grammarEndings.plural.length, "Pl.")}</span>
              <span class="best-score">${formatPairBest(state.pairBest[resources.bestKeys.grammar], resources.grammarEndings.both.length, "Both")}</span>
            </div>
          </div>
          <div class="form-button-grid">
            <button class="primary-button" data-pairs="${resources.grammarModes.singular}">Singular</button>
            <button class="primary-button" data-pairs="${resources.grammarModes.plural}">Plural</button>
            <button class="primary-button" data-pairs="${resources.grammarModes.both}">Both</button>
          </div>
        </article>
        <article class="pair-mode-card forms-mode">
          <div class="pair-mode-icon" aria-hidden="true">am</div>
          <div>
            <h3>Step 5 · Word forms and definitions match</h3>
            <p>${resources.wordFormsStepDescription || `Match declined ${lessonInfo.label} words with their case meaning. Each round has up to ${maxWordFormCount} forms.`}</p>
            <div class="mini-score-grid">
              <span class="best-score">${formatPairBest(state.pairBest[resources.bestKeys.singular], wordFormCounts.singular, "Sing.")}</span>
              <span class="best-score">${formatPairBest(state.pairBest[resources.bestKeys.plural], wordFormCounts.plural, "Pl.")}</span>
              <span class="best-score">${formatPairBest(state.pairBest[resources.bestKeys.mixed], wordFormCounts.mixed, "Mix")}</span>
            </div>
          </div>
          <div class="form-button-grid">
            <button class="primary-button" data-pairs="${resources.formModes.singular}">Singular</button>
            <button class="primary-button" data-pairs="${resources.formModes.plural}">Plural</button>
            <button class="primary-button" data-pairs="${resources.formModes.mixed}">Mixed</button>
          </div>
        </article>` : "";

  view.innerHTML = `
    <span class="eyebrow">Memory garden</span>
    <h1 class="view-title">Review what is taking root.</h1>
    <section class="challenge-section">
      <div class="challenge-heading">
        <div>
          <span class="eyebrow">Pairs challenge</span>
          <h2>Match quickly. Remember deeply.</h2>
        </div>
        <span class="timer-badge">5 cards at a time</span>
      </div>
      <div class="pair-mode-grid">
        <article class="pair-mode-card vocabulary-mode">
          <div class="pair-mode-icon" aria-hidden="true">A↔A</div>
          <div>
            <h3>Vocabulary</h3>
            <p>Match each ${lessonInfo.label} Latin word with its English meaning.</p>
            <span class="best-score">${formatPairBest(state.pairBest[resources.bestKeys.vocabulary], resources.vocabulary.length)}</span>
          </div>
          <button class="primary-button" data-pairs="${resources.vocabularyMode}">Play vocabulary</button>
        </article>
        ${endingTrainerCard}
      </div>
    </section>
    <div class="review-grid">
      <section class="panel">
        <h3>Smart practice</h3>
        <p>${practiceAvailable ? "A mixed set drawn from your completed quests." : "Complete your first quest to unlock mixed practice."}</p>
        <span class="stat-number">${completedQuestions}</span>
        <span class="stat-label">questions in your practice pool</span>
        <div style="margin-top:20px"><button class="primary-button" id="review-start" ${practiceAvailable ? "" : "disabled"}>Start review</button></div>
      </section>
      <section class="panel">
        <h3>Needs another look</h3>
        <p>Missed vocabulary, word forms, and grammar stay here until they are answered correctly ${REVIEW_MASTERY_GOAL} times.</p>
        <span class="stat-number">${needsItems.length}</span>
        <span class="stat-label">idea${needsItems.length === 1 ? "" : "s"} to revisit</span>
        <div class="needs-list">${needsList}</div>
        <div style="margin-top:16px"><button class="secondary-button" id="needs-review-start" ${needsItems.length ? "" : "disabled"}>Practice these</button></div>
      </section>
      <section class="panel wide">
        <h3>${resources.wordGardenTitle}</h3>
        <p>Cover either side with your hand and recall the other.</p>
        <div class="vocab-list">${chips}</div>
      </section>
      <section class="panel wide">
        <h3>${resources.grammarTitle}</h3>
        <p>All the ${lessonInfo.label} grammar points in one place.</p>
        <div class="ending-list">${endingRows}</div>
        <div class="grammar-note-grid">${grammarCards}</div>
      </section>
    </div>`;

  document.querySelector("#review-start")?.addEventListener("click", startReview);
  document.querySelector("#needs-review-start")?.addEventListener("click", startNeedsReview);
  document.querySelectorAll("[data-pairs]").forEach((button) => {
    button.addEventListener("click", () => startPairs(button.dataset.pairs));
  });
  document.querySelectorAll("[data-ending-trainer]").forEach((button) => {
    button.addEventListener("click", () => startEndingTrainer(button.dataset.endingTrainer));
  });
  document.querySelectorAll("[data-ending-typing]").forEach((button) => {
    button.addEventListener("click", () => startEndingTypeTrainer(button.dataset.endingTyping));
  });
  document.querySelectorAll("[data-ending-final]").forEach((button) => {
    button.addEventListener("click", () => startEndingFinalTest(button.dataset.endingFinal));
  });
}

function renderFamily() {
  const total = curriculum.length;
  const percent = Math.round((state.completed.length / total) * 100);
  view.innerHTML = `
    <span class="eyebrow">Family view</span>
    <h1 class="view-title">A quiet look at progress.</h1>
    <div class="family-grid">
      <section class="panel">
        <h3>Lesson progress</h3>
        <span class="stat-number">${state.completed.length} / ${total}</span>
        <span class="stat-label">quests completed</span>
        <div class="goal-bar"><span style="width:${percent}%"></span></div>
      </section>
      <section class="panel">
        <h3>Learning rhythm</h3>
        <span class="stat-number">${state.streak} day${state.streak === 1 ? "" : "s"}</span>
        <span class="stat-label">current study streak</span>
      </section>
      <section class="panel">
        <h3>Effort</h3>
        <span class="stat-number">${state.xp} XP</span>
        <span class="stat-label">earned through correct answers</span>
      </section>
      <section class="panel">
        <h3>Daily pace</h3>
        <span class="stat-number">${state.profile.goal} XP</span>
        <span class="stat-label">about ${Math.round(state.profile.goal / 4)} minutes</span>
        <div style="margin-top:18px"><button class="secondary-button" id="family-profile">Adjust pace</button></div>
      </section>
      <section class="panel wide">
        <h3>For the grown-up</h3>
        <p>This prototype stores progress only in this browser. There are no accounts, public profiles, ads, or messages. Each quest follows Henle's lesson order but teaches it in smaller interactive steps.</p>
        <button class="danger-link" id="reset-progress">Reset learning progress</button>
      </section>
    </div>`;

  document.querySelector("#family-profile").addEventListener("click", openProfile);
  document.querySelector("#reset-progress").addEventListener("click", () => {
    if (!window.confirm("Reset all Henle Path progress on this device?")) return;
    state = structuredClone(defaultState);
    ensureToday();
    saveState();
    updateMetrics();
    renderView();
    showToast("Progress reset");
  });
}

function lessonRank(lessonSet = activeLessonSet) {
  const match = /^lesson(\d+)$/.exec(lessonSet);
  return match ? Number(match[1]) : 1;
}

function getPersonalSentenceBank(name, lessonSet = activeLessonSet) {
  const rank = lessonRank(lessonSet);
  if (rank >= 31) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} hunc nuntium audīvit et hās litterās laudāvit.`,
        note: "What did the learner hear?",
        choices: ["this message", "these cities", "from the rear", "the highest hill"],
        correct: "this message",
        explanation: `Hunc nuntium means this message as a direct object.`
      },
      {
        type: "choice",
        prompt: `Read: Hī mīlitēs, spē victōriae adductī, contra hostēs pugnant.`,
        note: "Who is fighting against the enemy?",
        choices: ["these soldiers", "this messenger", "these letters", "that camp"],
        correct: "these soldiers",
        explanation: `Hī mīlitēs means these soldiers; contra takes the accusative hostēs.`
      },
      {
        type: "choice",
        prompt: `Read: Caesar, hīs litterīs commōtus, auxilia mīsit.`,
        note: "Why was Caesar moved?",
        choices: ["by these letters", "by this battle", "from the rear", "against these soldiers"],
        correct: "by these letters",
        explanation: `Hīs litterīs is ablative plural: by, with, or from these letters.`
      },
      {
        type: "choice",
        prompt: `Read: Haec castra ā tergō oppugnāta sunt.`,
        note: "How were the camp attacked?",
        choices: ["from the rear", "from the front", "for the sake of peace", "by this man"],
        correct: "from the rear",
        explanation: `Ā tergō means from the rear.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} hōc proeliō fortiter pugnat.`,
        note: "Where or when is the learner fighting bravely?",
        choices: ["in this battle", "against these letters", "of this messenger", "from the front"],
        correct: "in this battle",
        explanation: `Hōc proeliō is ablative singular: in or by this battle.`
      },
      {
        type: "build",
        prompt: `Build in Latin: These soldiers fight against the enemy.`,
        tokens: ["hī", "mīlitēs", "contra", "hostēs", "pugnant"],
        correct: `hī mīlitēs contra hostēs pugnant`,
        explanation: `Hī agrees with mīlitēs, and contra takes the accusative.`
      },
      {
        type: "build",
        prompt: `Build in Latin: Moved by these letters, Caesar came.`,
        tokens: ["hīs", "litterīs", "commōtus", "Caesar", "vēnit"],
        correct: `hīs litterīs commōtus Caesar vēnit`,
        explanation: `Commōtus describes Caesar; hīs litterīs explains what moved him.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} sees this camp.`,
        tokens: [name, "haec", "castra", "videt"],
        correct: `${name} haec castra videt`,
        explanation: `Castra is neuter plural in form, so haec agrees with it.`
      }
    ];
  }

  if (rank >= 30) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name}, nuntiō commōtus, ad Caesarem contendit.`,
        note: "What moved the learner?",
        choices: ["a message", "a hill", "these cities", "the rear"],
        correct: "a message",
        explanation: `Nuntiō is ablative singular, and commōtus means moved or alarmed.`
      },
      {
        type: "choice",
        prompt: `Read: Legiō missa oppidum defendit.`,
        note: "What kind of legion defended the town?",
        choices: ["a sent legion", "a praising legion", "a future legion", "a questioning legion"],
        correct: "a sent legion",
        explanation: `Missa is a perfect participle passive agreeing with legiō.`
      },
      {
        type: "choice",
        prompt: `Read: Castra vallō mūnīta sunt.`,
        note: "What do we know about the camp?",
        choices: ["it was fortified by a rampart", "it fought against a rampart", "it sent a rampart", "it was from the rear"],
        correct: "it was fortified by a rampart",
        explanation: `Mūnīta agrees with castra, which is neuter plural in form.`
      },
      {
        type: "choice",
        prompt: `Read: Gallī victī sē dēdidērunt.`,
        note: "What did the conquered Gauls do?",
        choices: ["they surrendered", "they praised themselves", "they sent Caesar", "they asked a question"],
        correct: "they surrendered",
        explanation: `Victī means conquered; sē dēdidērunt means they surrendered themselves.`
      },
      {
        type: "choice",
        prompt: `Read: Fortiter pugnātum est.`,
        note: "What is the natural translation?",
        choices: ["There was brave fighting.", "The brave man was fought.", "Fight bravely.", "They will fight bravely."],
        correct: "There was brave fighting.",
        explanation: `Pugnātum est is an impersonal passive expression.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The conquered enemy fled.`,
        tokens: ["hostēs", "victī", "fūgērunt"],
        correct: `hostēs victī fūgērunt`,
        explanation: `Victī describes hostēs.`
      },
      {
        type: "build",
        prompt: `Build in Latin: Caesar, alarmed by the message, sent help.`,
        tokens: ["Caesar", "nuntiō", "commōtus", "auxilia", "mīsit"],
        correct: `Caesar nuntiō commōtus auxilia mīsit`,
        explanation: `Commōtus is the perfect participle passive describing Caesar.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The sent soldiers defended the town.`,
        tokens: ["mīlitēs", "missī", "oppidum", "defendērunt"],
        correct: `mīlitēs missī oppidum defendērunt`,
        explanation: `Missī agrees with mīlitēs.`
      }
    ];
  }

  if (rank >= 29) {
    return [
      {
        type: "choice",
        prompt: `Read: Caesar parvam manum mīsit nē oppidum ab hostibus occupārētur.`,
        note: "Why did Caesar send the small band?",
        choices: ["lest the town be seized by the enemy", "so that the town might seize the enemy", "because the town had been pacified", "for the sake of water"],
        correct: "lest the town be seized by the enemy",
        explanation: `Occupārētur is imperfect passive subjunctive in a negative purpose clause.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} scit quis ad Caesarem missus sit.`,
        note: "What does the learner know?",
        choices: ["who was sent to Caesar", "who sent Caesar", "where Caesar is", "why Caesar was pacified"],
        correct: "who was sent to Caesar",
        explanation: `Missus sit is perfect passive subjunctive in an indirect question.`
      },
      {
        type: "choice",
        prompt: `Read: Cum Gallia pācāta esset, Caesar praesidia relīquit.`,
        note: "When did Caesar leave garrisons?",
        choices: ["when Gaul had been pacified", "when Gaul was pacifying Caesar", "before Gaul was known", "for the sake of Gaul"],
        correct: "when Gaul had been pacified",
        explanation: `Cum with pluperfect subjunctive shows earlier action in past narration.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} aquae causa ad flūmen contendit.`,
        note: "Why did the learner hurry to the river?",
        choices: ["for the sake of water", "because of fear", "according to custom", "to be sent by Caesar"],
        correct: "for the sake of water",
        explanation: `Aquae causa means for the sake of water.`
      },
      {
        type: "choice",
        prompt: `Read: Adventū Caesaris hostēs subitō territī sunt.`,
        note: "What frightened the enemy?",
        choices: ["Caesar's arrival", "the small band", "the cause of peace", "the custom of the Gauls"],
        correct: "Caesar's arrival",
        explanation: `Adventū Caesaris is an ablative of cause.`
      },
      {
        type: "build",
        prompt: `Build in Latin: May we not be conquered.`,
        tokens: ["nē", "vincāmur"],
        correct: `nē vincāmur`,
        explanation: `Vincāmur is present passive subjunctive.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} knows where the guards were stationed.`,
        tokens: [name, "scit", "ubi", "custōdēs", "collocātī", "sint"],
        correct: `${name} scit ubi custōdēs collocātī sint`,
        explanation: `Collocātī sint is perfect passive subjunctive in an indirect question.`
      },
      {
        type: "build",
        prompt: `Build in Latin: When the enemy had been put to flight, Caesar left.`,
        tokens: ["cum", "hostēs", "in", "fugam", "datī", "essent", "Caesar", "discessit"],
        correct: `cum hostēs in fugam datī essent Caesar discessit`,
        explanation: `Datī essent is pluperfect passive subjunctive in a cum clause.`
      }
    ];
  }

  if (rank >= 28) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} vītam suam dīligit.`,
        note: "Whose life does the learner love?",
        choices: [`${name}'s own life`, "Caesar's life", "the soldiers' life", "the enemy's life"],
        correct: `${name}'s own life`,
        explanation: `Suam modifies vītam and refers back to the subject.`
      },
      {
        type: "choice",
        prompt: `Read: Caesar mīlitēs vocāvit quī sē defenderent.`,
        note: "Whom were the soldiers to defend?",
        choices: ["Caesar", "themselves", "the enemy", name],
        correct: "Caesar",
        explanation: `Here sē is an indirect reflexive referring to Caesar, the main subject.`
      },
      {
        type: "choice",
        prompt: `Read: Gallī Rōmānīs sē dēdidērunt.`,
        note: "What did the Gauls do?",
        choices: ["They surrendered to the Romans.", "They gave Romans to themselves.", "They praised themselves before Rome.", "They put Rome to flight."],
        correct: "They surrendered to the Romans.",
        explanation: `Dēdō uses a reflexive object when it means surrender.`
      },
      {
        type: "choice",
        prompt: `Read: Caesar hostēs in fugam dedit.`,
        note: "What did Caesar do to the enemy?",
        choices: ["He put them to flight.", "He surrendered to them.", "He loved them.", "He named them."],
        correct: "He put them to flight.",
        explanation: `In fugam dare means put to flight.`
      },
      {
        type: "choice",
        prompt: `Read: Servus, nōmine Titus, praesidium docuit.`,
        note: "What do we know about the slave?",
        choices: ["He was named Titus.", "He surrendered Titus.", "He loved Titus.", "He was before Titus."],
        correct: "He was named Titus.",
        explanation: `Nōmine with a proper name can be translated named.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The soldiers defend themselves.`,
        tokens: ["mīlitēs", "sē", "defendunt"],
        correct: `mīlitēs sē defendunt`,
        explanation: `Sē refers back to the subject mīlitēs.`
      },
      {
        type: "build",
        prompt: `Build in Latin: Caesar praised his own soldiers.`,
        tokens: ["Caesar", "mīlitēs", "suōs", "laudāvit"],
        correct: `Caesar mīlitēs suōs laudāvit`,
        explanation: `Suōs agrees with mīlitēs and refers back to Caesar.`
      },
      {
        type: "build",
        prompt: `Build in Latin: They surrendered themselves and all their things.`,
        tokens: ["sē", "suaque", "omnia", "dēdidērunt"],
        correct: `sē suaque omnia dēdidērunt`,
        explanation: `Sē is the reflexive object; suaque omnia means and all their own things.`
      }
    ];
  }

  if (rank >= 27) {
    return [
      {
        type: "choice",
        prompt: `Read: Tē, Domine, ${name} laudat.`,
        note: "Whom does the learner praise?",
        choices: ["the Lord", "Caesar", "the soldiers", "the enemy"],
        correct: "the Lord",
        explanation: `Domine is vocative: O Lord.`
      },
      {
        type: "choice",
        prompt: `Read: Avē, Maria!`,
        note: "What does the sentence mean?",
        choices: ["Hail, Mary!", "Mary praises.", "Mary comes.", "Mary is sent."],
        correct: "Hail, Mary!",
        explanation: `Avē means hail.`
      },
      {
        type: "choice",
        prompt: `Read: Laudāte Deum, Christiānī!`,
        note: "What are the Christians commanded to do?",
        choices: ["praise God", "teach God", "wait without delay", "take away God"],
        correct: "praise God",
        explanation: `Laudāte is the plural imperative.`
      },
      {
        type: "choice",
        prompt: `Read: Tolle, Domine, peccāta nostra.`,
        note: "What is the Lord asked to take away?",
        choices: ["our sins", "our minds", "our soldiers", "our delay"],
        correct: "our sins",
        explanation: `Peccāta nostra means our sins.`
      },
      {
        type: "choice",
        prompt: `Read: Grātiās agāmus.`,
        note: "What does this exhortation mean?",
        choices: ["Let us give thanks.", "May he give thanks.", "Give thanks, all of you.", "We had given thanks."],
        correct: "Let us give thanks.",
        explanation: `Agāmus is first-person plural present subjunctive.`
      },
      {
        type: "build",
        prompt: `Build in Latin: O Lord, have mercy on us.`,
        tokens: ["Domine", "miserēre", "nōbīs"],
        correct: `Domine miserēre nōbīs`,
        explanation: `Miserēre nōbīs is the Lesson 27 phrase have mercy on us.`
      },
      {
        type: "build",
        prompt: `Build in Latin: Rule our minds, O Lord.`,
        tokens: ["rege", "mentēs", "nostrās", "Domine"],
        correct: `rege mentēs nostrās Domine`,
        explanation: `Rege is a command, and Domine is direct address.`
      },
      {
        type: "build",
        prompt: `Build in Latin: Let us not yield.`,
        tokens: ["nē", "cēdāmus"],
        correct: `nē cēdāmus`,
        explanation: `Nē plus first-person plural subjunctive gives let us not.`
      }
    ];
  }

  if (rank >= 26) {
    return [
      {
        type: "choice",
        prompt: `Read: Caesar rogat ubi ${name} sit.`,
        note: "What does Caesar ask?",
        choices: [`where ${name} is`, `why ${name} came`, `whether ${name} fought`, `who ${name} is`],
        correct: `where ${name} is`,
        explanation: `Rogat introduces an indirect question, so sit is subjunctive.`
      },
      {
        type: "choice",
        prompt: `Read: Dux quaerit num mīlitēs pugnaverint.`,
        note: "What is the leader asking?",
        choices: ["whether the soldiers fought", "where the soldiers are", "why the soldiers will fight", "whether the soldiers were being sent"],
        correct: "whether the soldiers fought",
        explanation: `After primary quaerit, perfect subjunctive pugnaverint shows action before the asking.`
      },
      {
        type: "choice",
        prompt: `Read: Legātus rogāvit ubi hostēs cōnstitissent.`,
        note: "What did the lieutenant ask?",
        choices: ["where the enemies had taken position", "where the enemies are taking position", "whether the enemies are true", "why the enemies inhabit the province"],
        correct: "where the enemies had taken position",
        explanation: `Rogāvit is secondary, so cōnstitissent is pluperfect subjunctive for earlier action.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} quaerit quanta mūnītiō sit.`,
        note: "What does the learner want to know?",
        choices: ["how great the fortification is", "where the water is", "whether the allies are strong", "from where the soldiers came"],
        correct: "how great the fortification is",
        explanation: `Quantus asks how great or how much, and sit is subjunctive in the indirect question.`
      },
      {
        type: "choice",
        prompt: `Read: Rogāvit num Caesar Gallōs vīcisset.`,
        note: "What is the best translation?",
        choices: ["He asked whether Caesar had conquered the Gauls.", "He asks whether Caesar conquered the Gauls.", "Did Caesar conquer the Gauls?", "Caesar asked whether the Gauls were conquering."],
        correct: "He asked whether Caesar had conquered the Gauls.",
        explanation: `A secondary main verb plus earlier action calls for the pluperfect subjunctive vīcisset.`
      },
      {
        type: "build",
        prompt: `Build in Latin: He asks where the camp is.`,
        tokens: ["rogat", "ubi", "castra", "sint"],
        correct: `rogat ubi castra sint`,
        explanation: `An indirect question uses the subjunctive: sint.`
      },
      {
        type: "build",
        prompt: `Build in Latin: He asked whether the soldiers had fought.`,
        tokens: ["rogāvit", "num", "mīlitēs", "pugnāvissent"],
        correct: `rogāvit num mīlitēs pugnāvissent`,
        explanation: `Rogāvit is secondary, and pugnāvissent is pluperfect subjunctive.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} asks how much water there is.`,
        tokens: [name, "quaerit", "quanta", "aqua", "sit"],
        correct: `${name} quaerit quanta aqua sit`,
        explanation: `Quaerit introduces an indirect question, so sit is subjunctive.`
      }
    ];
  }

  if (rank >= 25) {
    return [
      {
        type: "choice",
        prompt: `Read: Ubi sunt custōdēs?`,
        note: "What is being asked?",
        choices: ["Where are the guards?", "Where are the guards going?", "From where did the guards come?", "Why are the guards here?"],
        correct: "Where are the guards?",
        explanation: `Ubi asks where when there is rest or location.`
      },
      {
        type: "choice",
        prompt: `Read: Quō ${name} contendit?`,
        note: "What does quō ask here?",
        choices: [`Where is ${name} hastening to?`, `Where is ${name} resting?`, `From where did ${name} come?`, `Why is ${name} certain?`],
        correct: `Where is ${name} hastening to?`,
        explanation: `Quō asks where to when motion is involved.`
      },
      {
        type: "choice",
        prompt: `Read: Nōnne mīlitēs fortēs sunt?`,
        note: "What answer does nōnne expect?",
        choices: ["yes", "no", "where", "from where"],
        correct: "yes",
        explanation: `Nōnne usually expects the answer yes.`
      },
      {
        type: "choice",
        prompt: `Read: Num ${name} timet?`,
        note: "What answer does num usually expect?",
        choices: ["no", "yes", "where", "why"],
        correct: "no",
        explanation: `Num usually asks a question expecting no.`
      },
      {
        type: "choice",
        prompt: `Read: Cui gladium dedistī?`,
        note: "What is being asked?",
        choices: ["To whom did you give the sword?", "Whose sword did you give?", "What sword did you give?", "Why did you give the sword?"],
        correct: "To whom did you give the sword?",
        explanation: `Cui means to whom or for whom.`
      },
      {
        type: "build",
        prompt: `Build in Latin: Where are the guards?`,
        tokens: ["ubi", "sunt", "custōdēs"],
        correct: `ubi sunt custōdēs`,
        explanation: `Use ubi for where in place.`
      },
      {
        type: "build",
        prompt: `Build in Latin: Surely ${name} is brave?`,
        tokens: ["nōnne", name, "fortis", "est"],
        correct: `nōnne ${name} fortis est`,
        explanation: `Nōnne expects yes.`
      },
      {
        type: "build",
        prompt: `Build in Latin: By what name did they call Caesar?`,
        tokens: ["quō", "nōmine", "Caesarem", "appellāvērunt"],
        correct: `quō nōmine Caesarem appellāvērunt`,
        explanation: `With nōmen, Latin uses the ablative: quō nōmine.`
      }
    ];
  }

  if (rank >= 24) {
    return [
      {
        type: "choice",
        prompt: `Read: Nuntius quem Caesar mīsit ad ${name} vēnit.`,
        note: "Which messenger came?",
        choices: [`The messenger whom Caesar sent came to ${name}.`, `Caesar came to the messenger whom ${name} sent.`, `${name} sent Caesar to the messenger.`, `The message was useful for Caesar.`],
        correct: `The messenger whom Caesar sent came to ${name}.`,
        explanation: `Quem agrees with nuntius but is accusative because it is the direct object of mīsit.`
      },
      {
        type: "choice",
        prompt: `Read: Maria, quam ${name} laudat, Mater Dei est.`,
        note: "What does the relative clause describe?",
        choices: ["Mary, whom the learner praises", "God, whom Mary praises", "the mother who praises the learner", "the sailor whom God praises"],
        correct: "Mary, whom the learner praises",
        explanation: `Quam is feminine singular accusative and refers to Maria.`
      },
      {
        type: "choice",
        prompt: `Read: Custōdēs ad castra appropinquant.`,
        note: "Where are the guards approaching?",
        choices: ["the camp", "the river", "the night", "the council"],
        correct: "the camp",
        explanation: `Ad castra means to the camp, and appropinquant means they approach.`
      },
      {
        type: "choice",
        prompt: `Read: Auxilia mīsit quō facilius mīlitēs pugnarent.`,
        note: "Why did he send reinforcements?",
        choices: ["so the soldiers might fight more easily", "so the soldiers might fight longer", "so the messengers might remember", "so the guards might approach the night"],
        correct: "so the soldiers might fight more easily",
        explanation: `Quō facilius introduces a purpose clause with a comparative.`
      },
      {
        type: "choice",
        prompt: `Read: Ad flūmen perventum est.`,
        note: "What is the best English translation?",
        choices: ["They arrived at the river.", "The river arrived.", "They fought until the river.", "The river was useful."],
        correct: "They arrived at the river.",
        explanation: `Perventum est is impersonal, so translate it naturally.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The messenger whom ${name} sent came.`,
        tokens: ["nuntius", "quem", name, "mīsit", "vēnit"],
        correct: `nuntius quem ${name} mīsit vēnit`,
        explanation: `Quem is the direct object inside the relative clause.`
      },
      {
        type: "build",
        prompt: `Build in Latin: He sent guards to defend the gate more easily.`,
        tokens: ["custōdēs", "mīsit", "quō", "facilius", "portam", "defenderent"],
        correct: `custōdēs mīsit quō facilius portam defenderent`,
        explanation: `Quō facilius is used because the purpose clause contains the comparative facilius.`
      },
      {
        type: "build",
        prompt: `Build in Latin: They arrived at the camp.`,
        tokens: ["ad", "castra", "perventum", "est"],
        correct: `ad castra perventum est`,
        explanation: `This is the impersonal arrival expression.`
      }
    ];
  }

  if (rank >= 23) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} vēnit ut cōnsilium audīret.`,
        note: "Why did the learner come?",
        choices: ["to hear the plan", "to send a hostage", "to storm the ditch", "to approach the night"],
        correct: "to hear the plan",
        explanation: `Vēnit can be perfect here, so the purpose clause uses imperfect subjunctive audīret.`
      },
      {
        type: "choice",
        prompt: `Read: Dux legātōs vocāvit ut pācem peterent.`,
        note: "Why did the leader call the envoys?",
        choices: ["so that they might seek peace", "so that they might storm the wall", "so that they might be hostages", "so that they might praise the ditch"],
        correct: "so that they might seek peace",
        explanation: `Vocāvit is secondary, so peterent is imperfect subjunctive.`
      },
      {
        type: "choice",
        prompt: `Read: Principēs obsidēs inter sē dedērunt.`,
        note: "What did the chiefs do?",
        choices: ["They exchanged hostages.", "They approached the hostages.", "They were hostages.", "They warned the hostages."],
        correct: "They exchanged hostages.",
        explanation: `Obsidēs inter sē dant or dedērunt is the exchange-hostages idiom.`
      },
      {
        type: "choice",
        prompt: `Read: Fortēs labōrēs gravēs sustinent.`,
        note: "Who endures heavy labors?",
        choices: ["the brave", "the hostages", "the councils", "the ranks"],
        correct: "the brave",
        explanation: `Fortēs can stand as a noun: the brave.`
      },
      {
        type: "choice",
        prompt: `Read: Mīlitēs cessērunt nē magna caedēs esset.`,
        note: "Why did the soldiers yield?",
        choices: ["lest there be great slaughter", "so that they might hear the council", "because the hostages were wide", "to exchange peace"],
        correct: "lest there be great slaughter",
        explanation: `Nē plus imperfect subjunctive gives negative purpose after a secondary verb.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The soldiers came to fight.`,
        tokens: ["mīlitēs", "vēnērunt", "ut", "pugnārent"],
        correct: `mīlitēs vēnērunt ut pugnārent`,
        explanation: `Vēnērunt is secondary, so pugnārent is imperfect subjunctive.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The chiefs exchange hostages.`,
        tokens: ["principēs", "obsidēs", "inter", "sē", "dant"],
        correct: `principēs obsidēs inter sē dant`,
        explanation: `Inter sē with dant means exchange.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} stayed to wait for Caesar.`,
        tokens: [name, "mānsit", "ut", "Caesarem", "exspectāret"],
        correct: `${name} mānsit ut Caesarem exspectāret`,
        explanation: `Mānsit is secondary, so exspectāret is imperfect subjunctive.`
      }
    ];
  }

  if (rank >= 22) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} ōrat ut Deum laudet.`,
        note: "Why does the learner pray?",
        choices: ["to praise God", "to storm the camp", "to wait for Caesar", "to be a ditch"],
        correct: "to praise God",
        explanation: `Ut Deum laudet is a purpose clause using present subjunctive.`
      },
      {
        type: "choice",
        prompt: `Read: Mīlitēs veniunt ut urbem defendant.`,
        note: "Why do the soldiers come?",
        choices: ["to defend the city", "to burn the friendship", "to hear the forest", "to be new"],
        correct: "to defend the city",
        explanation: `Veniunt is primary, so defendant is present subjunctive.`
      },
      {
        type: "choice",
        prompt: `Read: Castra vallō fossāque mūniunt nē hostēs ea expugnent.`,
        note: "Why do they fortify the camp?",
        choices: ["lest the enemy storm it", "so the enemy may praise it", "because the camp waits", "so that friendship may be new"],
        correct: "lest the enemy storm it",
        explanation: `Nē expugnent is a negative purpose clause.`
      },
      {
        type: "choice",
        prompt: `Read: Amīcī celeriter veniunt ut auxilium dent.`,
        note: "What do the friends come to give?",
        choices: ["help", "a rampart", "a ditch", "night"],
        correct: "help",
        explanation: `Ut auxilium dent means so that they may give help.`
      },
      {
        type: "choice",
        prompt: `Read: Exspectāmus nē hostēs veniant.`,
        note: "What does the nē clause mean?",
        choices: ["lest the enemies come", "so the enemies may come", "because the enemies came", "after the enemies came"],
        correct: "lest the enemies come",
        explanation: `Nē plus subjunctive gives negative purpose.`
      },
      {
        type: "build",
        prompt: `Build in Latin: They wait lest the enemy come.`,
        tokens: ["exspectant", "nē", "hostēs", "veniant"],
        correct: `exspectant nē hostēs veniant`,
        explanation: `Exspectant is primary, so veniant is present subjunctive.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} prays to praise God.`,
        tokens: [name, "ōrat", "ut", "Deum", "laudet"],
        correct: `${name} ōrat ut Deum laudet`,
        explanation: `Ut Deum laudet expresses the purpose.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The friends come swiftly.`,
        tokens: ["amīcī", "celeriter", "veniunt"],
        correct: `amīcī celeriter veniunt`,
        explanation: `Celeriter means swiftly.`
      }
    ];
  }

  if (rank >= 21) {
    return [
      {
        type: "choice",
        prompt: `Read: Litterae dē ${name} ā duce missae sunt.`,
        note: "What happened to the letters?",
        choices: [`The letters about ${name} were sent by the leader.`, `The leader sent ${name} to the letters.`, `The letters heard ${name}.`, `The leader was sent by ${name}.`],
        correct: `The letters about ${name} were sent by the leader.`,
        explanation: `Missae sunt is perfect passive feminine plural, agreeing with litterae.`
      },
      {
        type: "choice",
        prompt: `Read: Oppidum mūrō mūnītum est.`,
        note: "What happened to the town?",
        choices: ["The town was fortified with a wall.", "The town fortified the wall.", "The wall was sent to the town.", "The town had been heard."],
        correct: "The town was fortified with a wall.",
        explanation: `Mūnītum est is perfect passive, and mūrō is ablative of means.`
      },
      {
        type: "choice",
        prompt: `Read: Omnia loca explōrāta erant.`,
        note: "What had happened to all the places?",
        choices: ["They had been reconnoitered.", "They had been praised.", "They were coming together.", "They were holding back the army."],
        correct: "They had been reconnoitered.",
        explanation: `Explōrāta erant is pluperfect passive and agrees with neuter plural loca.`
      },
      {
        type: "choice",
        prompt: `Read: Spēs in virtūte posita est.`,
        note: "Where has hope been placed?",
        choices: ["in courage", "with Caesar", "without the camp", "through the forest"],
        correct: "in courage",
        explanation: `Posita est is perfect passive, and in virtūte means in courage.`
      },
      {
        type: "choice",
        prompt: `Read: Ducēs vehementer pressī sunt.`,
        note: "What happened to the leaders?",
        choices: ["They were greatly pressed hard.", "They pressed greatly.", "They were sent without hope.", "They came with Caesar."],
        correct: "They were greatly pressed hard.",
        explanation: `Pressī sunt is perfect passive masculine plural; vehementer means greatly or violently.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The bridge was burned.`,
        tokens: ["pons", "incēnsus", "est"],
        correct: `pons incēnsus est`,
        explanation: `Incēnsus est is perfect passive and agrees with masculine singular pons.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The letters were sent.`,
        tokens: ["litterae", "missae", "sunt"],
        correct: `litterae missae sunt`,
        explanation: `Litterae is feminine plural, so missae agrees.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The camp had been moved.`,
        tokens: ["castra", "mōta", "erant"],
        correct: `castra mōta erant`,
        explanation: `Castra is neuter plural, so mōta agrees; erant makes the form pluperfect passive.`
      }
    ];
  }

  if (rank >= 20) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} cum amīcīs clāmōrem audit.`,
        note: "With whom does the learner hear the shout?",
        choices: ["with friends", "with a sword", "by Caesar", "without hope"],
        correct: "with friends",
        explanation: `Cum amīcīs is accompaniment: with friends.`
      },
      {
        type: "choice",
        prompt: `Read: Clamor ā vōbīs audītur.`,
        note: "By whom is the shout heard?",
        choices: ["by you all", "by the shout", "with the Romans", "with a wall"],
        correct: "by you all",
        explanation: `Audītur is passive, and ā vōbīs names the agent.`
      },
      {
        type: "choice",
        prompt: `Read: Urbs mūrō mūnītur.`,
        note: "With what is the city fortified?",
        choices: ["with a wall", "with Caesar", "with friends", "with Mary"],
        correct: "with a wall",
        explanation: `Mūrō is ablative of means.`
      },
      {
        type: "choice",
        prompt: `Read: Maria in Caelō cum Deo est.`,
        note: "Who is Mary with?",
        choices: ["God", "Caesar", "the soldiers", "the enemies"],
        correct: "God",
        explanation: `Cum Deo is accompaniment: with God.`
      },
      {
        type: "choice",
        prompt: `Read: Pontēs ā legiōnibus mūniēbantur.`,
        note: "Who was fortifying the bridges?",
        choices: ["the legions", "the walls", "the bridges", "the shouts"],
        correct: "the legions",
        explanation: `Ā legiōnibus is ablative of agent.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} came with Caesar.`,
        tokens: [name, "cum", "Caesare", "vēnit"],
        correct: `${name} cum Caesare vēnit`,
        explanation: `Cum Caesare is accompaniment.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The city will be fortified with a wall.`,
        tokens: ["urbs", "mūrō", "mūniētur"],
        correct: `urbs mūrō mūniētur`,
        explanation: `Mūrō is means, and mūniētur is future passive.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The voices were being heard.`,
        tokens: ["vōcēs", "audiēbantur"],
        correct: `vōcēs audiēbantur`,
        explanation: `Audiēbantur is imperfect passive plural.`
      }
    ];
  }

  if (rank >= 19) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} ā Caesare dīmittitur.`,
        note: "What happens to the learner?",
        choices: [`${name} is sent away by Caesar.`, `${name} sends Caesar away.`, `${name} is held by Caesar.`, `${name} thanks Caesar.`],
        correct: `${name} is sent away by Caesar.`,
        explanation: `Dīmittitur is passive: is sent away. Ā Caesare names the living agent.`
      },
      {
        type: "choice",
        prompt: `Read: Urbs hostibus trādētur.`,
        note: "What will happen to the city?",
        choices: ["It will be handed over to the enemies.", "It will send the enemies away.", "It is being held by the enemies.", "It will kill the enemies."],
        correct: "It will be handed over to the enemies.",
        explanation: `Trādētur is future passive, and hostibus tells to whom.`
      },
      {
        type: "choice",
        prompt: `Read: Christiani gladiīs nōn vincuntur.`,
        note: "By what are the Christians not conquered?",
        choices: ["by means of swords", "by Caesar", "by the leaders", "without hope"],
        correct: "by means of swords",
        explanation: `Gladiīs is ablative of means.`
      },
      {
        type: "choice",
        prompt: `Read: Ducēs ā militibus fortibus defenduntur.`,
        note: "Who defends the leaders?",
        choices: ["brave soldiers", "the enemies", "the city", "swords"],
        correct: "brave soldiers",
        explanation: `Ā militibus fortibus is ablative of agent: by brave soldiers.`
      },
      {
        type: "choice",
        prompt: `Read: Castra ferē sine spē defenduntur.`,
        note: "How is the camp defended?",
        choices: ["almost without hope", "by Caesar alone", "through the province", "afterwards by the enemies"],
        correct: "almost without hope",
        explanation: `Ferē means almost, and sine spē means without hope.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} will be sent by the leader.`,
        tokens: [name, "ā", "duce", "mittētur"],
        correct: `${name} ā duce mittētur`,
        explanation: `Mittētur means will be sent, and ā duce names the agent.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The Christians are killed with swords.`,
        tokens: ["Christiani", "gladiīs", "occīduntur"],
        correct: `Christiani gladiīs occīduntur`,
        explanation: `Gladiīs is ablative of means, so no ā or ab is used.`
      },
      {
        type: "build",
        prompt: `Build in Latin: We give thanks to God.`,
        tokens: ["Deo", "grātiās", "agimus"],
        correct: `Deo grātiās agimus`,
        explanation: `Grātiās agimus means we give thanks, and Deo means to God.`
      }
    ];
  }

  if (rank >= 18) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} clāmōre nōn terrētur.`,
        note: "What does the shout not do?",
        choices: [`It does not terrify ${name}.`, `It sends ${name} away.`, `It preserves ${name}.`, `It warns Caesar.`],
        correct: `It does not terrify ${name}.`,
        explanation: `Terrētur is passive, and clāmōre is ablative of means.`
      },
      {
        type: "choice",
        prompt: `Read: Oppidum ab amīcīs tenētur.`,
        note: "Who holds the town?",
        choices: ["friends", "mountains", "darts", "a shout"],
        correct: "friends",
        explanation: `Ab amīcīs shows living agents: by friends.`
      },
      {
        type: "choice",
        prompt: `Read: Castra montibus continentur.`,
        note: "What holds in the camp?",
        choices: ["mountains", "Caesar", "friends", "sailors"],
        correct: "mountains",
        explanation: `Montibus is ablative of means.`
      },
      {
        type: "choice",
        prompt: `Read: Hostēs neque gladiō neque clāmōre terrentur.`,
        note: "What does this say about the enemies?",
        choices: ["They are terrified by neither sword nor shout.", "They terrify neither sword nor shout.", "They are sent by the sword and shout.", "They are held by friends."],
        correct: "They are terrified by neither sword nor shout.",
        explanation: `Neque...neque means neither...nor.`
      },
      {
        type: "choice",
        prompt: `Read: Postea cīvitās obtinēbitur.`,
        note: "What will happen afterwards?",
        choices: ["The state will be held or occupied.", "The state will send the army.", "The state will praise God.", "The state will be killed."],
        correct: "The state will be held or occupied.",
        explanation: `Postea means afterwards, and obtinēbitur is future passive.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} is warned by the leader.`,
        tokens: [name, "ā", "duce", "monētur"],
        correct: `${name} ā duce monētur`,
        explanation: `Monētur is passive, and ā duce names the living agent.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The soldiers are terrified by the shout.`,
        tokens: ["militēs", "clāmōre", "terrentur"],
        correct: `militēs clāmōre terrentur`,
        explanation: `Clāmōre is ablative of means.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The camp will be held by the Romans.`,
        tokens: ["castra", "ā", "Rōmānīs", "obtinēbuntur"],
        correct: `castra ā Rōmānīs obtinēbuntur`,
        explanation: `Ā Rōmānīs is agency; obtinēbuntur is future passive.`
      }
    ];
  }

  if (rank >= 17) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} ā virīs bonīs laudātur.`,
        note: "What happens to the learner?",
        choices: [`${name} is praised by good men.`, `${name} praises good men.`, `${name} is away from good men.`, `${name} warns good men.`],
        correct: `${name} is praised by good men.`,
        explanation: `Laudātur is passive, and ā virīs bonīs names the living agents.`
      },
      {
        type: "choice",
        prompt: `Read: Deus semper appellātur.`,
        note: "What is said about God?",
        choices: ["God is always called upon.", "God always calls upon.", "God is sent away.", "God is held by mountains."],
        correct: "God is always called upon.",
        explanation: `Appellātur is passive: is called upon.`
      },
      {
        type: "choice",
        prompt: `Read: Pax ā ducibus cōnservābitur.`,
        note: "What will happen to peace?",
        choices: ["It will be preserved by leaders.", "It will preserve the leaders.", "It was praised by soldiers.", "It is far from the leaders."],
        correct: "It will be preserved by leaders.",
        explanation: `Cōnservābitur is future passive, and ā ducibus shows agency.`
      },
      {
        type: "choice",
        prompt: `Read: Militēs ab imperātōre confirmantur.`,
        note: "Who encourages the soldiers?",
        choices: ["the general", "the town", "the forest", "the weapons"],
        correct: "the general",
        explanation: `Ab imperātōre means by the general.`
      },
      {
        type: "choice",
        prompt: `Read: Cīvitās ā virīs administrābātur.`,
        note: "What was being managed?",
        choices: ["the state", "the men", "the camp", "the leader"],
        correct: "the state",
        explanation: `Cīvitās is the subject receiving the action; administrābātur means was being managed.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} is praised by friends.`,
        tokens: [name, "ab", "amīcīs", "laudātur"],
        correct: `${name} ab amīcīs laudātur`,
        explanation: `Ab amīcīs is ablative of agent.`
      },
      {
        type: "build",
        prompt: `Build in Latin: Peace will be preserved by brave men.`,
        tokens: ["pax", "ā", "virīs", "fortibus", "cōnservābitur"],
        correct: `pax ā virīs fortibus cōnservābitur`,
        explanation: `Cōnservābitur means will be preserved.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The soldiers are encouraged by the leader.`,
        tokens: ["militēs", "ā", "duce", "confirmantur"],
        correct: `militēs ā duce confirmantur`,
        explanation: `Confirmantur is passive, and ā duce names the agent.`
      }
    ];
  }

  if (rank >= 16) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} puerum miserum in agrō videt.`,
        note: "Whom does the learner see?",
        choices: ["a wretched boy in the field", "a free man across the field", "a fresh legion in Italy", "a brave king in battle"],
        correct: "a wretched boy in the field",
        explanation: `Puerum miserum means wretched boy as direct object, and in agrō means in the field.`
      },
      {
        type: "choice",
        prompt: `Read: Vir fortis trans montēs in Italiam vēnit.`,
        note: "What did the brave man do?",
        choices: ["He came across the mountains into Italy.", "He remained in the fields of Italy.", "He sent boys across the river.", "He praised the fortune of the state."],
        correct: "He came across the mountains into Italy.",
        explanation: `Trans montēs means across the mountains, and vēnit means came.`
      },
      {
        type: "choice",
        prompt: `Read: Legiōnēs integrae in prīmā aciē erant.`,
        note: "What kind of legions were in the first line?",
        choices: ["fresh or uninjured legions", "wretched legions", "free states", "Roman boys"],
        correct: "fresh or uninjured legions",
        explanation: `Integrae agrees with legiōnēs.`
      },
      {
        type: "choice",
        prompt: `Read: Fortūna virōs fortēs adiūvat.`,
        note: "Whom does fortune help?",
        choices: ["brave men", "wretched boys", "fresh fields", "free states"],
        correct: "brave men",
        explanation: `Virōs fortēs means brave men as direct object.`
      },
      {
        type: "choice",
        prompt: `Read: Cīvitātem nostram servāvimus.`,
        note: "What have we preserved?",
        choices: ["our state", "your battle", "my field", "their fortune"],
        correct: "our state",
        explanation: `Nostram agrees with cīvitātem, and servāvimus means we preserved.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} hears the boy in the field.`,
        tokens: [name, "puerum", "in", "agrō", "audit"],
        correct: `${name} puerum in agrō audit`,
        explanation: `Puerum is the direct object, and in agrō means in the field.`
      },
      {
        type: "build",
        prompt: `Build in Latin: Our men will defend the state.`,
        tokens: ["viri", "nostrī", "cīvitātem", "defendent"],
        correct: `viri nostrī cīvitātem defendent`,
        explanation: `Nostrī agrees with viri, and defendent means they will defend.`
      },
      {
        type: "build",
        prompt: `Build in Latin: They came across the fields.`,
        tokens: ["trans", "agrōs", "vēnērunt"],
        correct: `trans agrōs vēnērunt`,
        explanation: `Trans takes the accusative, so fields becomes agrōs.`
      }
    ];
  }

  if (rank >= 15) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} Deum laudāvit.`,
        note: "What did the learner do?",
        choices: [`${name} praised God.`, `${name} will praise God.`, `${name} was praising God.`, `${name} heard God.`],
        correct: `${name} praised God.`,
        explanation: `Laudāvit is perfect tense: he or she praised.`
      },
      {
        type: "choice",
        prompt: `Read: Caesar militēs in ponte collocāvit.`,
        note: "What did Caesar do?",
        choices: ["Caesar stationed soldiers on the bridge.", "Caesar will station soldiers on the bridge.", "Caesar was warning soldiers on the bridge.", "The soldiers stationed Caesar on the bridge."],
        correct: "Caesar stationed soldiers on the bridge.",
        explanation: `Collocāvit means stationed or placed.`
      },
      {
        type: "choice",
        prompt: `Read: Christus in terrā non mānsit.`,
        note: "What did Christ not do?",
        choices: ["He did not remain on earth.", "He did not come to earth.", "He did not fortify the land.", "He did not hear the earth."],
        correct: "He did not remain on earth.",
        explanation: `Mānsit is perfect of maneō: he remained.`
      },
      {
        type: "choice",
        prompt: `Read: Equitēs impetum fortiter sustinuērunt.`,
        note: "What did the cavalry do?",
        choices: ["They bravely withstood the attack.", "They sent the attack bravely.", "They came through the attack.", "They were away from the attack."],
        correct: "They bravely withstood the attack.",
        explanation: `Sustinuērunt means they withstood.`
      },
      {
        type: "choice",
        prompt: `Read: Christiani fidem servāverant.`,
        note: "What had the Christians done?",
        choices: ["They had kept the faith.", "They will keep the faith.", "They were seeing the faith.", "They had feared the faith."],
        correct: "They had kept the faith.",
        explanation: `Servāverant is pluperfect: they had kept, saved, or preserved.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} has heard the voice.`,
        tokens: [name, "vocem", "audīvit"],
        correct: `${name} vocem audīvit`,
        explanation: `Audīvit is perfect tense: has heard or heard.`
      },
      {
        type: "build",
        prompt: `Build in Latin: They filled the camp with grain.`,
        tokens: ["castra", "complēvērunt", "frumentō"],
        correct: `castra frumentō complēvērunt`,
        explanation: `Complēvērunt means they filled, and frumentō is ablative: with grain.`
      },
      {
        type: "build",
        prompt: `Build in Latin: God had helped them.`,
        tokens: ["Deus", "eōs", "adjūverat"],
        correct: `Deus eōs adjūverat`,
        explanation: `Adjūverat means had helped, and eōs means them.`
      }
    ];
  }

  if (rank >= 14) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} fortis erit.`,
        note: "What will the learner be?",
        choices: [`${name} will be brave.`, `${name} was brave.`, `${name} is far away.`, `${name} will hear.`],
        correct: `${name} will be brave.`,
        explanation: `Erit means will be.`
      },
      {
        type: "choice",
        prompt: `Read: Undique erant montēs et silvae.`,
        note: "What was on all sides?",
        choices: ["mountains and forests", "weapons and soldiers", "roads and bridges", "letters and standards"],
        correct: "mountains and forests",
        explanation: `Undique means on all sides, and erant means there were.`
      },
      {
        type: "choice",
        prompt: `Read: Hiberna ab oppidō non longē aberant.`,
        note: "Where were the winter quarters?",
        choices: ["not far away from the town", "through the town", "inside the town", "far from the province"],
        correct: "not far away from the town",
        explanation: `Aberant means were away, and ab oppidō means from the town.`
      },
      {
        type: "choice",
        prompt: `Read: Roma longē ā nōbīs abest.`,
        note: "What does this say about Rome?",
        choices: ["Rome is far away from us.", "Rome will be with us.", "Rome was on all sides.", "Rome hears us."],
        correct: "Rome is far away from us.",
        explanation: `Longē means far, and abest means is away.`
      },
      {
        type: "choice",
        prompt: `Read: Erantne tēla in castris?`,
        note: "What is being asked?",
        choices: ["Were there weapons in the camp?", "Will there be soldiers in the camp?", "Were the camps far away?", "Are the weapons coming?"],
        correct: "Were there weapons in the camp?",
        explanation: `Erantne means were there? and tēla means weapons.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} will be with God in heaven.`,
        tokens: [name, "cum", "Deo", "in", "Caelo", "erit"],
        correct: `${name} cum Deo in Caelo erit`,
        explanation: `Erit means will be.`
      },
      {
        type: "build",
        prompt: `Build in Latin: They will be away from the camp.`,
        tokens: ["ā", "castris", "aberunt"],
        correct: `ā castris aberunt`,
        explanation: `Aberunt means they will be away.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The Roman camp was full of weapons.`,
        tokens: ["castra", "Romana", "tēlōrum", "plena", "erant"],
        correct: `castra Romana tēlōrum plena erant`,
        explanation: `Erant means were, and tēlōrum means of weapons.`
      }
    ];
  }

  if (rank >= 13) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} vocem ducis audit.`,
        note: "What does the learner hear?",
        choices: ["the voice of the leader", "the road of the soldier", "the letter of the enemy", "the bridge of the province"],
        correct: "the voice of the leader",
        explanation: `Audit means hears, and ducis means of the leader.`
      },
      {
        type: "choice",
        prompt: `Read: Ducēs oppida et pontēs saepe mūniunt.`,
        note: "What do the leaders often do?",
        choices: ["They fortify towns and bridges.", "They hear towns and bridges.", "They send towns and bridges.", "They are away from towns and bridges."],
        correct: "They fortify towns and bridges.",
        explanation: `Mūniunt means they fortify.`
      },
      {
        type: "choice",
        prompt: `Read: Senātus in locum tūtum conveniet.`,
        note: "What will the senate do?",
        choices: ["It will assemble in a safe place.", "It will hear a safe place.", "It was coming from a safe place.", "It will send the safe place."],
        correct: "It will assemble in a safe place.",
        explanation: `Conveniet means will come together or assemble.`
      },
      {
        type: "choice",
        prompt: `Read: Exercitus per silvam veniēbat.`,
        note: "Where was the army coming?",
        choices: ["through the forest", "from the camp", "to the bridge", "around the town"],
        correct: "through the forest",
        explanation: `Per silvam means through the forest.`
      },
      {
        type: "choice",
        prompt: `Read: Audīsne vōcēs servōrum?`,
        note: "What is being asked?",
        choices: ["Do you hear the voices of the servants?", "Will the servants hear you?", "Were you hearing the servants?", "Did the voices serve you?"],
        correct: "Do you hear the voices of the servants?",
        explanation: `Audīsne means do you hear? and vōcēs is the direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} hears the speech.`,
        tokens: [name, "ōrātiōnem", "audit"],
        correct: `${name} ōrātiōnem audit`,
        explanation: `Audit means hears, and ōrātiōnem is the direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: They will come through the province.`,
        tokens: ["per", "provinciam", "venient"],
        correct: `per provinciam venient`,
        explanation: `Per takes the accusative, so province becomes provinciam.`
      },
      {
        type: "build",
        prompt: `Build in Latin: We shall hear the shout of the cavalry.`,
        tokens: ["clamorem", "equitum", "audiēmus"],
        correct: `clamorem equitum audiēmus`,
        explanation: `Audiēmus means we shall hear.`
      }
    ];
  }

  if (rank >= 12) {
    return [
      {
        type: "choice",
        prompt: `Read: Miles servum in castra mittit.`,
        note: "What does the soldier do?",
        choices: ["The soldier sends the servant into the camp.", "The servant sends the soldier from the camp.", "The soldier fears the servant in camp.", "The servant defends the camp."],
        correct: "The soldier sends the servant into the camp.",
        explanation: `Mittit means sends, and in castra shows motion into the camp.`
      },
      {
        type: "choice",
        prompt: `Read: Rōmānī bellum fortiter gerunt.`,
        note: "What are the Romans doing?",
        choices: ["They wage war bravely.", "They send a letter bravely.", "They fear war bravely.", "They put war there."],
        correct: "They wage war bravely.",
        explanation: `Bellum gerere means to wage war, and fortiter means bravely.`
      },
      {
        type: "choice",
        prompt: `Read: Hostēs sē defendunt, sed Rōmānī eōs vincunt.`,
        note: "What happens to the enemies?",
        choices: ["They defend themselves, but the Romans conquer them.", "They conquer themselves, but the Romans defend them.", "They send themselves to the Romans.", "They hold the Romans and move them."],
        correct: "They defend themselves, but the Romans conquer them.",
        explanation: `Sē refers back to hostēs, and eōs means them.`
      },
      {
        type: "choice",
        prompt: `Read: Litterās dē multis rēbus mittēmus.`,
        note: "What shall we send?",
        choices: ["letters about many things", "many soldiers into the camp", "arms from the town", "the enemy into the river"],
        correct: "letters about many things",
        explanation: `Litterās means letters, dē can mean about, and mittēmus means we shall send.`
      },
      {
        type: "choice",
        prompt: `Read: Caesar ibi castra pōnet.`,
        note: "What will Caesar do there?",
        choices: ["He will pitch camp.", "He will fear the camp.", "He will send the camp.", "He will praise the camp."],
        correct: "He will pitch camp.",
        explanation: `Pōnet means he will put or place; with castra, it can mean pitch camp.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} sends the servant.`,
        tokens: ["servum", name, "mittit"],
        correct: `${name} servum mittit`,
        explanation: `Mittit means sends, and servum is the direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The leader leads the army into the territory.`,
        tokens: ["in", "exercitum", "Dux", "fīnēs", "dūcit"],
        correct: `Dux exercitum in fīnēs dūcit`,
        explanation: `Dūcit means leads, and in fīnēs shows motion into the territory.`
      },
      {
        type: "build",
        prompt: `Build in Latin: We defend the town bravely.`,
        tokens: ["fortiter", "oppidum", "defendimus"],
        correct: `oppidum fortiter defendimus`,
        explanation: `Defendimus means we defend, and fortiter means bravely.`
      }
    ];
  }

  if (rank >= 11) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} tē videt et tibi praemium dabit.`,
        note: "What will the learner give?",
        choices: ["a reward to you", "a sword to Caesar", "grain to us", "a letter to them"],
        correct: "a reward to you",
        explanation: `Tē is you as direct object, and tibi means to you or for you.`
      },
      {
        type: "choice",
        prompt: `Read: Nōs pro vōbīs saepe ōrāmus.`,
        note: "For whom do we often pray?",
        choices: ["for you all", "for ourselves", "for him", "for the enemies"],
        correct: "for you all",
        explanation: `Vōbīs is the plural you form after pro.`
      },
      {
        type: "choice",
        prompt: `Read: Caesar exercitum videt et eum timet.`,
        note: "What does Caesar fear?",
        choices: ["the army", "Mary", "the rewards", "the roads"],
        correct: "the army",
        explanation: `Eum refers back to exercitum, which is masculine in Latin.`
      },
      {
        type: "choice",
        prompt: `Read: Maria sē non laudat.`,
        note: "Whom does Mary not praise?",
        choices: ["herself", "him", "us", "you all"],
        correct: "herself",
        explanation: `Sē refers back to Maria, the subject.`
      },
      {
        type: "choice",
        prompt: `Read: Nōbīs frumentum dant.`,
        note: "To whom do they give grain?",
        choices: ["to us", "to you all", "to him", "to themselves"],
        correct: "to us",
        explanation: `Nōbīs can mean to us or for us.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} sees us.`,
        tokens: ["nōs", "videt", name],
        correct: `${name} nōs videt`,
        explanation: `Nōs can be accusative plural: us.`
      },
      {
        type: "build",
        prompt: `Build in Latin: We shall pray for you all.`,
        tokens: ["ōrābimus", "vōbīs", "pro"],
        correct: `pro vōbīs ōrābimus`,
        explanation: `Pro vōbīs means for you all.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The Christians pray for themselves.`,
        tokens: ["pro", "Christiani", "ōrant", "sē"],
        correct: `Christiani pro sē ōrant`,
        explanation: `Sē can mean themselves when it refers back to a plural subject.`
      }
    ];
  }

  if (rank >= 10) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} ducem bonum monet.`,
        note: "What is the learner doing?",
        choices: [`${name} warns the good leader.`, `${name} fears the good leader.`, `${name} carries the good leader.`, `${name} praises the good leader.`],
        correct: `${name} warns the good leader.`,
        explanation: `Monet means he or she warns, and ducem bonum is the good leader as direct object.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} hostes non timet quod fortis est.`,
        note: "What does this say?",
        choices: [`${name} does not fear the enemies because ${name} is brave.`, `${name} warns the enemies because they are brave.`, `${name} terrifies the enemies because they are many.`, `${name} has enemies in the camp.`],
        correct: `${name} does not fear the enemies because ${name} is brave.`,
        explanation: `Timet means fears, and non before timet makes it negative.`
      },
      {
        type: "choice",
        prompt: `Read: Clamor hostium milites terrebat.`,
        note: "What was terrifying the soldiers?",
        choices: ["the shout of the enemies", "the arms of the soldiers", "the prayer of the centurion", "the road through the province"],
        correct: "the shout of the enemies",
        explanation: `Terrebat means was terrifying. Clamor is the subject, and hostium means of the enemies.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} arma non habet sed spem in Deo habet.`,
        note: "What does the learner have?",
        choices: ["hope in God, but not arms", "arms and no hope", "a sword in the town", "fear of the enemy"],
        correct: "hope in God, but not arms",
        explanation: `Habet means has. Arma are weapons, and spem in Deo means hope in God.`
      },
      {
        type: "choice",
        prompt: `Read: Centuriones imperatorem monebunt propter rem gravem.`,
        note: "Whom will the centurions warn?",
        choices: ["the general", "the sailors", "the servants", "the horsemen"],
        correct: "the general",
        explanation: `Monebunt means they will warn, and imperatorem is the general as direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} warns the good leader.`,
        tokens: ["monet", "bonum", "ducem", name],
        correct: `${name} ducem bonum monet`,
        explanation: `Ducem bonum is accusative singular: the good leader as direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The enemies will terrify the people.`,
        tokens: ["populum", "Hostes", "terrēbunt"],
        correct: `Hostes populum terrēbunt`,
        explanation: `Terrēbunt means they will terrify, and populum is the direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: We have arms, but we do not fear.`,
        tokens: ["habēmus", "non", "sed", "timēmus", "arma"],
        correct: `arma habēmus sed non timēmus`,
        explanation: `Habēmus means we have, and timēmus means we fear.`
      }
    ];
  }

  if (rank >= 9) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} pacem laudat et bellum non laudat.`,
        note: "What does the learner praise?",
        choices: ["peace, but not war", "war, but not peace", "the enemy and the general", "the camp and the baggage"],
        correct: "peace, but not war",
        explanation: `Laudat means praises. Pacem is peace as direct object, and bellum is war.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} et nautae pro amicis orabant.`,
        note: "For whom were they praying?",
        choices: ["for friends", "for enemies", "for winter quarters", "for a number"],
        correct: "for friends",
        explanation: `Orabant means they were praying, and pro amicis means for friends.`
      },
      {
        type: "choice",
        prompt: `Read: Servi frumentum in hiberna portabunt.`,
        note: "What will the servants carry?",
        choices: ["grain", "swords", "standards", "letters"],
        correct: "grain",
        explanation: `Portabunt means they will carry, and frumentum is grain.`
      },
      {
        type: "choice",
        prompt: `Read: Laudāsne Caesarem?`,
        note: "What does -ne do here?",
        choices: ["It turns the sentence into a yes/no question.", "It makes Caesar plural.", "It means because.", "It means meanwhile."],
        correct: "It turns the sentence into a yes/no question.",
        explanation: `The question particle -ne is attached to laudās: Do you praise Caesar?`
      },
      {
        type: "choice",
        prompt: `Read: Cur ${name} Deum laudat?`,
        note: "Which English question word does cur give us?",
        choices: ["why", "where", "who", "what"],
        correct: "why",
        explanation: `Cur means why.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} is preparing swords.`,
        tokens: ["gladios", name, "parat"],
        correct: `${name} gladios parat`,
        explanation: `Parat can mean is preparing, and gladios is swords as direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The soldiers were fighting in an unfavorable place.`,
        tokens: ["alieno", "pugnabant", "loco", "Milites", "in"],
        correct: `Milites in loco alieno pugnabant`,
        explanation: `Pugnabant means they were fighting, and in loco alieno means in an unfavorable place.`
      },
      {
        type: "build",
        prompt: `Build in Latin: Who will call the centurion?`,
        tokens: ["centurionem", "vocabit", "Quis"],
        correct: `Quis centurionem vocabit`,
        explanation: `Quis means who, and vocabit means will call.`
      }
    ];
  }

  if (rank >= 8) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} est fortis et Jēsū similis.`,
        note: "What does this say about the learner?",
        choices: [`${name} is brave and like Jesus.`, `${name} sees Jesus at dawn.`, `${name} is full of bridges.`, `${name} gives a signal to Jesus.`],
        correct: `${name} is brave and like Jesus.`,
        explanation: `Fortis means brave, and similis can take the dative Jēsū.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} et amici omnēs Jēsū gratias agunt.`,
        note: "Who gives thanks to Jesus?",
        choices: [`${name} and all the friends give thanks to Jesus.`, "The enemies captured the bridge.", "All the cities are difficult.", "The cavalry pitched camp."],
        correct: `${name} and all the friends give thanks to Jesus.`,
        explanation: `Omnēs agrees with amici, and Jēsū is dative: to Jesus.`
      },
      {
        type: "choice",
        prompt: `Read: Iter breve sed difficile erat.`,
        note: "What was the journey like?",
        choices: ["The journey was short but difficult.", "The city was full of grain.", "The bridge was high and long.", "The horsemen were brave."],
        correct: "The journey was short but difficult.",
        explanation: `Breve and difficile are neuter singular predicate adjectives agreeing with iter.`
      },
      {
        type: "choice",
        prompt: `Read: Castra erant plena gladiorum et frumenti.`,
        note: "What was the camp full of?",
        choices: ["swords and grain", "bridges and cities", "truth and peace", "horsemen and hills"],
        correct: "swords and grain",
        explanation: `Plena can take the genitive; gladiorum and frumenti tell what the camp is full of.`
      },
      {
        type: "choice",
        prompt: `Read: Prima luce equitēs fortēs signum vident.`,
        note: "What do the brave horsemen see at dawn?",
        choices: ["the signal", "the city", "Jesus", "the bridge"],
        correct: "the signal",
        explanation: `Prima luce means at dawn, and signum is the direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} sees the renowned city.`,
        tokens: ["urbem", "videt", "nobilem", name],
        correct: `${name} urbem nobilem videt`,
        explanation: `Urbem is feminine accusative singular, so nobilem agrees with it.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The bridge was not easy.`,
        tokens: ["erat", "facilis", "Pons", "non"],
        correct: `Pons non erat facilis`,
        explanation: `Pons is masculine singular, so facilis agrees with it.`
      },
      {
        type: "build",
        prompt: `Build in Latin: All Christians placed hope in Jesus.`,
        tokens: ["spem", "Christiani", "Jēsū", "in", "Omnēs", "posuērunt"],
        correct: `Omnēs Christiani spem in Jēsū posuērunt`,
        explanation: `Omnēs agrees with Christiani. In Jēsū uses the Lesson 5 posuērunt pattern.`
      }
    ];
  }

  if (rank >= 7) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} pro amicis bonis orat.`,
        note: "For whom does the learner pray?",
        choices: ["for good friends", "for Roman walls", "for many wounds", "for a deep river"],
        correct: "for good friends",
        explanation: `Pro takes the ablative, and amicis bonis means good friends.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} in via angusta est.`,
        note: "Where is the learner?",
        choices: ["on the narrow way", "in the great camp", "with many soldiers", "behind the high wall"],
        correct: "on the narrow way",
        explanation: `Via is feminine singular, so angusta agrees with it.`
      },
      {
        type: "choice",
        prompt: `Read: Nautae boni Deum laudant.`,
        note: "Who praises God?",
        choices: ["good sailors", "bad servants", "Roman legions", "many Gauls"],
        correct: "good sailors",
        explanation: `Nautae names male people here, so boni is masculine plural.`
      },
      {
        type: "choice",
        prompt: `Read: Magna inopia frumenti erat.`,
        note: "What was there?",
        choices: ["a great scarcity of grain", "a long road of Rome", "many brave soldiers", "a safe camp"],
        correct: "a great scarcity of grain",
        explanation: `Magna agrees with inopia, and frumenti means of grain.`
      },
      {
        type: "choice",
        prompt: `Read: Legiones Romanae pro castris erant.`,
        note: "Where were the Roman legions?",
        choices: ["in front of the camp", "inside the city", "on behalf of the soldiers", "into the mountains"],
        correct: "in front of the camp",
        explanation: `Pro castris means in front of the camp.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} sees the good master.`,
        tokens: ["bonum", "dominum", "videt", name],
        correct: `${name} dominum bonum videt`,
        explanation: `Dominum bonum is accusative singular: the good master as direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The soldiers are safe.`,
        tokens: ["tuti", "sunt", "Milites"],
        correct: `Milites sunt tuti`,
        explanation: `Tuti agrees with milites.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The great wall was high.`,
        tokens: ["altus", "Murus", "erat", "magnus"],
        correct: `Murus magnus erat altus`,
        explanation: `Magnus and altus agree with murus.`
      }
    ];
  }

  if (rank >= 6) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} et nauta Deo gratias agunt.`,
        note: "What are they doing in this Latin sentence?",
        choices: [`${name} and the sailor give thanks to God.`, `${name} and the sailor pitch camp.`, "The sailor captures the baggage.", "The Romans see the camp."],
        correct: `${name} and the sailor give thanks to God.`,
        explanation: `Deo means to God, and gratias agunt means they give thanks.`
      },
      {
        type: "choice",
        prompt: `Read: Copia rērum in castris erat.`,
        note: "What was in the camp?",
        choices: ["A supply of things was in the camp.", "The troops captured the camp.", "The baggage was behind the hill.", "The Christians gave thanks."],
        correct: "A supply of things was in the camp.",
        explanation: `Copia is singular here and means supply. Rērum means of things.`
      },
      {
        type: "choice",
        prompt: `Read: Copiae Romanorum in provincia erant.`,
        note: "Where were the troops?",
        choices: ["The troops of the Romans were in the province.", "The supplies of the Romans were in the camp.", "The Romans came into the harbor.", "The Romans saw the baggage."],
        correct: "The troops of the Romans were in the province.",
        explanation: `Copiae in the plural means troops or forces, and Romanorum means of the Romans.`
      },
      {
        type: "choice",
        prompt: `Read: Romani castra post collem posuērunt.`,
        note: "What did the Romans do?",
        choices: ["The Romans pitched camp behind the hill.", "The Romans placed hope on the hill.", "The Romans gave thanks behind the camp.", "The Romans captured the baggage."],
        correct: "The Romans pitched camp behind the hill.",
        explanation: `Castra posuērunt means they pitched camp. Post collem means behind the hill.`
      },
      {
        type: "choice",
        prompt: `Read: Hostes impedimenta in castris vident.`,
        note: "What do the enemies see?",
        choices: ["The enemies see the baggage in the camp.", "The enemies give thanks in the camp.", "The troops see the grace of God.", "The Romans pitched camp."],
        correct: "The enemies see the baggage in the camp.",
        explanation: `Impedimenta means baggage, and in castris means in the camp.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} sees the camp on the hill.`,
        tokens: ["colle", "castra", "videt", "in", name],
        correct: `${name} castra in colle videt`,
        explanation: `Castra is the camp as direct object, and in colle means on the hill.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The Christians give thanks because of the grace of God.`,
        tokens: ["Dei", "propter", "gratiam", "gratias", "Christiani", "agunt"],
        correct: `Christiani propter gratiam Dei gratias agunt`,
        explanation: `Propter gratiam Dei means because of the grace of God, and gratias agunt means they give thanks.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The enemies captured the baggage in the camp.`,
        tokens: ["castris", "Hostes", "impedimenta", "in", "cēpērunt"],
        correct: `Hostes impedimenta in castris cēpērunt`,
        explanation: `Impedimenta is the direct object, and in castris means in the camp.`
      }
    ];
  }

  if (rank >= 5) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} cum nauta Deum orat.`,
        note: "What is the learner doing in this Latin sentence?",
        choices: [`${name} prays with a sailor to God.`, `${name} sees a sailor.`, "The sailors praise God.", "The sailor sees a gate."],
        correct: `${name} prays with a sailor to God.`,
        explanation: `Deum is God as the object of orat, and cum nauta means with a sailor.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} et nauta spem in Deo posuērunt.`,
        note: "What did they do?",
        choices: [`${name} and the sailor placed hope in God.`, `${name} and the sailor came into a province.`, "The sailors saw the battle line.", "The sailor praised the harbor."],
        correct: `${name} and the sailor placed hope in God.`,
        explanation: `Spem is hope as direct object. In Deo uses the Lesson 5 posuērunt pattern.`
      },
      {
        type: "choice",
        prompt: `Read: Milites in aciē erant.`,
        note: "Where were the soldiers?",
        choices: ["The soldiers were in the battle line.", "The soldiers came into the harbor.", "The sailors saw the gate.", "The Romans praised the battle line."],
        correct: "The soldiers were in the battle line.",
        explanation: `Aciē is ablative singular because the sentence shows location in the battle line.`
      },
      {
        type: "choice",
        prompt: `Read: Romani Christianos propter fidem occiderunt.`,
        note: "Why did the Romans kill the Christians?",
        choices: ["on account of faith", "on account of the harbor", "because of the battle line", "because of the province"],
        correct: "on account of faith",
        explanation: `Propter takes the accusative. Fidem is faith as the object of propter.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} sees the matter.`,
        tokens: [name, "rem", "videt"],
        correct: `${name} rem videt`,
        explanation: `Rem is rēs as a direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: In Christ is the hope of the world.`,
        tokens: ["mundi", "Christo", "spēs", "In", "est"],
        correct: `In Christo est spēs mundi`,
        explanation: `Spēs is the subject, and mundi means of the world.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The soldiers placed hope of victory in courage.`,
        tokens: ["spem", "Milites", "victoriae", "virtūte", "in", "posuērunt"],
        correct: `Milites spem victoriae in virtūte posuērunt`,
        explanation: `Spem is the direct object, victoriae means of victory, and in virtūte follows the Lesson 5 posuērunt pattern.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The Gauls see the battle line of the Romans.`,
        tokens: ["vident", "Romanorum", "Galli", "aciem"],
        correct: `Galli aciem Romanorum vident`,
        explanation: `Aciem is the battle line as direct object, and Romanorum means of the Romans.`
      }
    ];
  }

  if (rank >= 4) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} in portum vēnit.`,
        note: "Where did the learner go?",
        choices: [`${name} came into the harbor.`, `${name} was in the harbor.`, `${name} saw the gate.`, `${name} praised the province.`],
        correct: `${name} came into the harbor.`,
        explanation: `In portum shows motion into the harbor, so portum is accusative.`
      },
      {
        type: "choice",
        prompt: `Read: Nautae in portū erant.`,
        note: "Where were the sailors?",
        choices: ["The sailors were in the harbor.", "The sailors came into the harbor.", "The sailors saw the battle line.", "The sailors praised the senate."],
        correct: "The sailors were in the harbor.",
        explanation: `In portū shows location, so portū is ablative.`
      },
      {
        type: "choice",
        prompt: `Read: Milites impetum in hostes fēcērunt.`,
        note: "What did the soldiers do?",
        choices: ["They made an attack against the enemies.", "They placed hope in God.", "They praised the harbor.", "They were in the forest."],
        correct: "They made an attack against the enemies.",
        explanation: `Impetum is attack, and in hostes means against the enemies.`
      },
      {
        type: "choice",
        prompt: `Read: Caesar autem cum exercitū vēnit.`,
        note: "Who came with the army?",
        choices: ["Caesar came with the army.", "The sailor came into the harbor.", "The army saw Caesar.", "The senate praised the soldiers."],
        correct: "Caesar came with the army.",
        explanation: `Autem means however and follows Caesar. Cum exercitū means with the army.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} sees the harbor.`,
        tokens: ["portum", "videt", name],
        correct: `${name} portum videt`,
        explanation: `Portum is harbor as a direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The senate praises Caesar because of the arrival.`,
        tokens: ["laudat", "adventum", "Caesarem", "Senatus", "propter"],
        correct: `Senatus Caesarem propter adventum laudat`,
        explanation: `Senatus is the subject, Caesarem is the direct object, and propter adventum means because of the arrival.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The Romans came into the province.`,
        tokens: ["vēnērunt", "Romani", "provinciam", "in"],
        correct: `Romani in provinciam vēnērunt`,
        explanation: `In provinciam shows motion into the province.`
      }
    ];
  }

  if (rank >= 3) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} legem Christi laudat.`,
        note: "What does the learner praise?",
        choices: ["the law of Christ", "the gate of the province", "the hope of the world", "the harbor of Caesar"],
        correct: "the law of Christ",
        explanation: `Legem is law as direct object, and Christi means of Christ.`
      },
      {
        type: "choice",
        prompt: `Read: Sunt pericula in Gallia.`,
        note: "What does this sentence say?",
        choices: ["There are dangers in Gaul.", "The dangers see Gaul.", "There is a harbor in Gaul.", "The Gauls praise dangers."],
        correct: "There are dangers in Gaul.",
        explanation: `Latin does not need a separate word for the English there.`
      },
      {
        type: "choice",
        prompt: `Read: Christianus vocem Dei audivit.`,
        note: "What did the Christian hear?",
        choices: ["the voice of God", "the law of Caesar", "the gate of the province", "the attack of the enemy"],
        correct: "the voice of God",
        explanation: `Vocem is voice as direct object, and Dei means of God.`
      },
      {
        type: "choice",
        prompt: `Read: Milites in montibus erant.`,
        note: "Where were the soldiers?",
        choices: ["in the mountains", "into the forests", "with the sailors", "after the battle"],
        correct: "in the mountains",
        explanation: `Montibus is plural and can be ablative: in the mountains.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} sees the truth.`,
        tokens: ["veritatem", name, "videt"],
        correct: `${name} veritatem videt`,
        explanation: `Veritatem is truth as the direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The brothers praise peace.`,
        tokens: ["pacem", "Fratres", "laudant"],
        correct: `Fratres pacem laudant`,
        explanation: `Pacem is peace as direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The enemies were in the forests.`,
        tokens: ["silvis", "Hostes", "in", "erant"],
        correct: `Hostes in silvis erant`,
        explanation: `Hostes is the subject, and in silvis means in the forests.`
      }
    ];
  }

  if (rank >= 2) {
    return [
      {
        type: "choice",
        prompt: `Read: ${name} Deum laudat.`,
        note: "What is the learner doing?",
        choices: [`${name} praises God.`, `${name} sees a sailor.`, "God gives a reward.", "The servant sees a gate."],
        correct: `${name} praises God.`,
        explanation: `Deum is God as the direct object.`
      },
      {
        type: "choice",
        prompt: `Read: ${name} cum amico orat.`,
        note: "With whom does the learner pray?",
        choices: ["with a friend", "with a sword", "after the war", "in the kingdom"],
        correct: "with a friend",
        explanation: `Cum amico means with a friend.`
      },
      {
        type: "choice",
        prompt: `Read: Servus Christi in oppido est.`,
        note: "Where is the servant of Christ?",
        choices: ["in the town", "in heaven", "with a sailor", "after the danger"],
        correct: "in the town",
        explanation: `Christi means of Christ, and in oppido means in the town.`
      },
      {
        type: "choice",
        prompt: `Read: Christus praemium servo dedit.`,
        note: "What did Christ give?",
        choices: ["a reward to the servant", "a sword to the Gaul", "a gate to Mary", "a province to the Romans"],
        correct: "a reward to the servant",
        explanation: `Praemium is the direct object, and servo means to the servant.`
      },
      {
        type: "build",
        prompt: `Build in Latin: ${name} sees the sword.`,
        tokens: ["gladium", name, "videt"],
        correct: `${name} gladium videt`,
        explanation: `Gladium is sword as a direct object.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The Romans are in Gaul.`,
        tokens: ["Gallia", "Romani", "in", "sunt"],
        correct: `Romani in Gallia sunt`,
        explanation: `In Gallia shows location.`
      },
      {
        type: "build",
        prompt: `Build in Latin: The friend prays because of danger.`,
        tokens: ["propter", "orat", "Amicus", "periculum"],
        correct: `Amicus propter periculum orat`,
        explanation: `Propter periculum means because of danger.`
      }
    ];
  }

  return [
    {
      type: "choice",
      prompt: `Read: ${name} portam provinciae videt.`,
      note: "What does the learner see?",
      choices: ["the gate of the province", "the glory of victory", "the sailors in the forest", "Mary's land"],
      correct: "the gate of the province",
      explanation: `Portam is gate as direct object, and provinciae means of the province.`
    },
    {
      type: "choice",
      prompt: `Read: Maria gloriam victoriae laudat.`,
      note: "What does Mary praise?",
      choices: ["the glory of victory", "the gate of the forest", "the sailors of the province", "the land of Mary"],
      correct: "the glory of victory",
      explanation: `Gloriam is glory as direct object, and victoriae means of victory.`
    },
    {
      type: "choice",
      prompt: `Read: Nautae silvam vident.`,
      note: "What do the sailors see?",
      choices: ["the forest", "the province", "the gate", "the victory"],
      correct: "the forest",
      explanation: `Nautae is plural here, and silvam is the forest as direct object.`
    },
    {
      type: "choice",
      prompt: `Read: ${name} non orat.`,
      note: "What does non do?",
      choices: ["It makes the praying negative.", "It makes the sentence plural.", "It means victory.", "It means gate."],
      correct: "It makes the praying negative.",
      explanation: `Non means not.`
    },
    {
      type: "build",
      prompt: `Build in Latin: ${name} sees the province.`,
      tokens: [name, "provinciam", "videt"],
      correct: `${name} provinciam videt`,
      explanation: `Provinciam is province as direct object.`
    },
    {
      type: "build",
      prompt: `Build in Latin: The sailor sees the gate.`,
      tokens: ["Nauta", "videt", "portam"],
      correct: `Nauta portam videt`,
      explanation: `Nauta is the subject, and portam is the direct object.`
    },
    {
      type: "build",
      prompt: `Build in Latin: Mary praises victory.`,
      tokens: ["victoriam", "Maria", "laudat"],
      correct: `Maria victoriam laudat`,
      explanation: `Victoriam is victory as direct object.`
    }
  ];
}

function getPersonalPracticeQuestions(name, lessonSet = activeLessonSet) {
  const bank = getPersonalSentenceBank(name, lessonSet);
  return shuffled(bank).slice(0, Math.min(5, bank.length));
}

function startPersonalPractice() {
  const name = state.profile.name.trim() || "Scholar";
  const safeName = escapeHTML(name);
  const personalLesson = {
    id: "personal",
    title: `Story Sentences Starring ${name}`,
    eyebrow: `Personal Latin · ${safeName}`,
    reference: `Generated from material through ${lessonCatalog[activeLessonSet]?.label || "Lesson 1"}`,
    questions: getPersonalPracticeQuestions(name, activeLessonSet)
  };
  startLesson(personalLesson, true);
}

function formatElapsedTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds || 0));
  if (safeSeconds < 60) return String(safeSeconds);
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function getPairSpeedStats(pair = pairRuntime) {
  const elapsed = Math.max(0, pair?.elapsedTime || 0);
  const matches = pair?.matchedRight?.size || 0;
  const average = matches ? elapsed / matches : null;
  const speedScore = average === null ? 0 : Math.max(0, Math.min(1, (6 - average) / 5));
  const angle = Math.round(-52 + speedScore * 104);
  let label = "Start matching";
  if (average !== null) {
    if (average >= 6) label = "Turtle pace";
    else if (average >= 4) label = "Careful pace";
    else if (average >= 2.5) label = "Steady pace";
    else if (average >= 1.5) label = "Quick pace";
    else label = "Rabbit pace";
  }
  const averageText = average === null
    ? "Average: — sec / pair"
    : `Average: ${average >= 10 ? average.toFixed(0) : average.toFixed(1)} sec / pair`;
  return { elapsed, matches, average, angle, label, averageText };
}

function renderPairSpeedGauge(stats = getPairSpeedStats()) {
  return `
    <div class="speed-gauge" id="pair-speed-gauge" style="--speed-angle:${stats.angle}deg" aria-label="Speed gauge">
      <div class="speed-gauge-face">
        <span class="speed-label speed-label-slow">🐢 Slow</span>
        <span class="speed-label speed-label-fast">Fast 🐇</span>
        <span class="speed-needle" aria-hidden="true"></span>
        <span class="speed-hub" aria-hidden="true"></span>
      </div>
      <div class="speed-readout">
        <strong id="pair-speed-label">${escapeHTML(stats.label)}</strong>
        <span id="pair-speed-average">${escapeHTML(stats.averageText)}</span>
      </div>
    </div>`;
}

function updatePairPaceDisplay() {
  if (!pairRuntime) return;
  const stats = getPairSpeedStats(pairRuntime);
  const timer = document.querySelector("#pair-time");
  if (timer) timer.textContent = formatElapsedTime(stats.elapsed);
  const gauge = document.querySelector("#pair-speed-gauge");
  if (gauge) gauge.style.setProperty("--speed-angle", `${stats.angle}deg`);
  const speedLabel = document.querySelector("#pair-speed-label");
  if (speedLabel) speedLabel.textContent = stats.label;
  const average = document.querySelector("#pair-speed-average");
  if (average) average.textContent = stats.averageText;
  const progressFill = document.querySelector("#lesson-progress-fill");
  if (progressFill) {
    const total = pairRuntime.config.pairs.length || 1;
    progressFill.style.width = `${(pairRuntime.matchedRight.size / total) * 100}%`;
  }
}

function formatPairBest(best, total = 6, label = "Best") {
  if (!best) return "No score yet";
  return best.matches === total ? `${label}: all ${total} in ${formatElapsedTime(best.time)}` : `${label}: ${best.matches} of ${total} matched`;
}

function getPairConfig(mode) {
  const parsed = parsePairMode(mode);
  const resources = parsed.lessonSet ? getReviewResources(parsed.lessonSet) : getReviewResources(activeLessonSet);

  if (parsed.kind === "unitVocabulary") {
    const unitInfo = getUnitReviewInfo(parsed.unitKey);
    const vocabularyPairs = unitInfo.lessonSets.flatMap((lessonSet) => getVocabularyForLessonSet(lessonSet));
    return {
      title: `${unitInfo.unit.label} Vocabulary`,
      subtitle: `Match vocabulary from ${unitInfo.unit.label} only: ${unitInfo.lessonRange}.`,
      bestKey: unitInfo.vocabularyBestKey,
      pairs: vocabularyPairs.map(([latin, english]) => [latin.split(",")[0], english])
    };
  }

  if (parsed.kind === "cumulativeVocabulary") {
    const lessonSets = getCumulativeLessonSets(parsed.lessonSet);
    const vocabularyPairs = lessonSets.flatMap((lessonSet) => getVocabularyForLessonSet(lessonSet));
    const lessonRange = lessonSets.length === 1 ? "Lesson 1" : `Lessons 1-${lessonSets.length}`;
    return {
      title: `${lessonRange} Vocabulary`,
      subtitle: lessonSets.length === 1
        ? "Match only the Lesson 1 vocabulary."
        : `Match vocabulary from ${lessonRange} mixed together.`,
      bestKey: `cumulativeVocabularyLesson${lessonSets.length}`,
      pairs: vocabularyPairs.map(([latin, english]) => [latin.split(",")[0], english])
    };
  }

  if (parsed.kind === "grammar") {
    const lessonName = lessonCatalog[parsed.lessonSet].label;
    const scope = parsed.scope || "both";
    const label = scope === "singular" ? "Singular" : scope === "plural" ? "Plural" : "";
    const bestKey = scope === "singular"
      ? resources.bestKeys.grammarSingular
      : scope === "plural"
        ? resources.bestKeys.grammarPlural
        : resources.bestKeys.grammar;
    const pairs = resources.grammarEndings?.[scope] || resources.endings;
    const grammarTitle = resources.grammarPairTitle
      ? `${resources.grammarPairTitle}${label ? ` · ${label}` : ""}`
      : `${lessonName} ${label ? `${label} ` : ""}Grammar Endings`;
    return {
      title: grammarTitle,
      subtitle: resources.grammarPairDescription || (scope === "both"
        ? "Match each ending with its English job. Some endings repeat."
        : `Match only the ${scope} endings with their English jobs.`),
      bestKey,
      promptNoun: resources.grammarPromptNoun || "ending",
      pairs
    };
  }

  if (parsed.kind === "forms") {
    const label = parsed.scope === "singular" ? "Singular" : parsed.scope === "plural" ? "Plural" : "Mixed";
    const bestKey = parsed.scope === "singular" ? resources.bestKeys.singular : parsed.scope === "plural" ? resources.bestKeys.plural : resources.bestKeys.mixed;
    return {
      title: `${label} Word Forms`,
      subtitle: resources.wordFormsPairSubtitle || `Match each declined ${lessonCatalog[parsed.lessonSet].label} word with the job it is doing.`,
      bestKey,
      formScope: parsed.scope,
      pairs: getLessonWordFormPairs(parsed.lessonSet, parsed.scope)
    };
  }

  const lessonName = lessonCatalog[parsed.lessonSet].label;
  return {
    title: `${lessonName} Vocabulary`,
    subtitle: `Match every ${lessonName} word with its English meaning.`,
    bestKey: resources.bestKeys.vocabulary,
    pairs: resources.vocabulary.map(([latin, english]) => [latin.split(",")[0], english])
  };
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapWith = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapWith]] = [copy[swapWith], copy[index]];
  }
  return copy;
}

function startPairs(mode) {
  endingRuntime = null;
  const config = getPairConfig(mode);
  const entries = shuffled(config.pairs.map(([left, right], index) => ({ id: `pair-${index}`, left, right })));
  pairRuntime = {
    mode,
    config,
    deck: entries,
    activeLeft: [],
    activeRight: [],
    visibleLimit: Math.min(5, entries.length),
    selectedLeft: null,
    selectedRight: null,
    matchedLeft: new Set(),
    matchedRight: new Set(),
    message: "Choose one card from each side.",
    mistakes: 0,
    elapsedTime: 0,
    locked: false,
    timer: null
  };
  runtime = null;
  lessonShell.hidden = false;
  lessonShell.classList.add("pairs-active");
  lessonShell.classList.remove("endings-active");
  lessonShell.classList.remove("ending-type-active");
  lessonShell.classList.remove("ending-both-active");
  lessonFooter.hidden = true;
  checkButton.disabled = true;
  document.body.style.overflow = "hidden";
  document.querySelector("#lesson-progress-fill").style.width = "0%";
  fillPairSlots(true);
  renderPairsStage();
  pairRuntime.timer = setInterval(() => {
    if (!pairRuntime) return;
    pairRuntime.elapsedTime += 1;
    updatePairPaceDisplay();
  }, 1000);
}

function fillPairSlots(shouldShuffle = false) {
  if (!pairRuntime) return;
  while (pairRuntime.activeLeft.length < pairRuntime.visibleLimit && pairRuntime.deck.length > 0) {
    const nextPair = pairRuntime.deck.shift();
    pairRuntime.activeLeft.push(nextPair);
    pairRuntime.activeRight.push(nextPair);
  }
  if (shouldShuffle) {
    pairRuntime.activeLeft = shuffled(pairRuntime.activeLeft);
    pairRuntime.activeRight = shuffled(pairRuntime.activeRight);
  }
}

function renderPairsStage() {
  const leftCards = pairRuntime.activeLeft.map((pair) => `<button class="pair-card latin-pair" data-pair-side="left" data-pair-id="${pair.id}">${escapeHTML(pair.left)}</button>`).join("");
  const rightCards = pairRuntime.activeRight.map((pair) => `<button class="pair-card meaning-pair" data-pair-side="right" data-pair-id="${pair.id}">${escapeHTML(pair.right)}</button>`).join("");
  const speedStats = getPairSpeedStats(pairRuntime);
  lessonStage.innerHTML = `
    <div class="pairs-intro">
      <div>
        <span class="question-kicker">Pairs challenge</span>
        <h1>${pairRuntime.config.title}</h1>
        <p class="question-note">${pairRuntime.config.subtitle}</p>
      </div>
      <div class="pair-pace-panel">
        <div class="pair-clock"><strong id="pair-time">${formatElapsedTime(speedStats.elapsed)}</strong><span>elapsed</span></div>
        ${renderPairSpeedGauge(speedStats)}
      </div>
    </div>
    <div class="pair-scoreline"><span id="pair-message">${pairRuntime.message}</span><strong id="pair-count">${pairRuntime.matchedRight.size} / ${pairRuntime.config.pairs.length}</strong></div>
    <div class="pairs-board">
      <div class="pair-column" aria-label="Latin cards">${leftCards}</div>
      <div class="pair-column" aria-label="English cards">${rightCards}</div>
    </div>`;
  lessonStage.querySelectorAll("[data-pair-id]").forEach((button) => {
    button.addEventListener("click", () => choosePair(button));
  });
  updatePairPaceDisplay();
}

function choosePair(button) {
  if (!pairRuntime || pairRuntime.locked) return;
  const side = button.dataset.pairSide;
  const pairId = button.dataset.pairId;
  if (side === "left") pairRuntime.selectedLeft = pairId;
  else pairRuntime.selectedRight = pairId;
  updatePairCards();

  if (!pairRuntime.selectedLeft || !pairRuntime.selectedRight) return;
  const leftEntry = pairRuntime.activeLeft.find((pair) => pair.id === pairRuntime.selectedLeft);
  const rightEntry = pairRuntime.activeRight.find((pair) => pair.id === pairRuntime.selectedRight);
  if (leftEntry && rightEntry && leftEntry.left === rightEntry.left) {
    pairRuntime.matchedLeft.add(pairRuntime.selectedLeft);
    pairRuntime.matchedRight.add(pairRuntime.selectedRight);
    markReviewCorrect(pairKeyForEntry(pairRuntime.mode, leftEntry.id));
    markReviewCorrect(pairKeyForEntry(pairRuntime.mode, rightEntry.id));
    replaceMatchedPair(pairRuntime.selectedLeft, pairRuntime.selectedRight);
    pairRuntime.selectedLeft = null;
    pairRuntime.selectedRight = null;
    state.xp += 2;
    state.xpToday += 2;
    recordStudyDay();
    saveState();
    updateMetrics();
    updatePairPaceDisplay();
    if (pairRuntime.matchedRight.size === pairRuntime.config.pairs.length) finishPairs(true);
    else renderPairsStage();
    return;
  }

  if (leftEntry) markNeedsReview(pairKeyForEntry(pairRuntime.mode, leftEntry.id));
  if (rightEntry) markNeedsReview(pairKeyForEntry(pairRuntime.mode, rightEntry.id));
  saveState();
  pairRuntime.mistakes += 1;
  pairRuntime.locked = true;
  document.querySelector("#pair-message").textContent = "Not this pair — try again.";
  lessonStage.querySelectorAll(".pair-card.selected").forEach((card) => card.classList.add("wrong"));
  updatePairCards();
  setTimeout(() => {
    if (!pairRuntime) return;
    pairRuntime.selectedLeft = null;
    pairRuntime.selectedRight = null;
    pairRuntime.locked = false;
    pairRuntime.message = "Try another pair.";
    const message = document.querySelector("#pair-message");
    if (message) message.textContent = pairRuntime.message;
    updatePairCards();
  }, 450);
}

function replaceMatchedPair(leftId, rightId) {
  if (!pairRuntime) return;
  const leftIndex = pairRuntime.activeLeft.findIndex((pair) => pair.id === leftId);
  const rightIndex = pairRuntime.activeRight.findIndex((pair) => pair.id === rightId);

  if (leftIndex !== -1) pairRuntime.activeLeft.splice(leftIndex, 1);
  if (rightIndex !== -1) pairRuntime.activeRight.splice(rightIndex, 1);

  if (pairRuntime.activeLeft.length === 0 && pairRuntime.deck.length > 0) {
    fillPairSlots(true);
    pairRuntime.message = "Set cleared! A new set is ready.";
    return;
  }

  pairRuntime.message = pairRuntime.activeLeft.length === 0 ? "Matched! Keep going." : "Matched! Clear this set.";
}

function updatePairCards() {
  if (!pairRuntime) return;
  lessonStage.querySelectorAll("[data-pair-id]").forEach((button) => {
    const side = button.dataset.pairSide;
    const selected = side === "left" ? pairRuntime.selectedLeft : pairRuntime.selectedRight;
    const matched = side === "left"
      ? pairRuntime.matchedLeft.has(button.dataset.pairId)
      : pairRuntime.matchedRight.has(button.dataset.pairId);
    button.classList.toggle("selected", selected === button.dataset.pairId);
    button.classList.toggle("matched", matched);
    if (!pairRuntime.locked) button.classList.remove("wrong");
    button.disabled = matched || pairRuntime.locked;
  });
}

function finishPairs(completed) {
  if (!pairRuntime) return;
  clearInterval(pairRuntime.timer);
  const total = pairRuntime.config.pairs.length;
  const matches = pairRuntime.matchedRight.size;
  const elapsed = pairRuntime.elapsedTime;
  const speedStats = getPairSpeedStats(pairRuntime);
  const candidate = { matches, total, time: elapsed };
  const bestKey = pairRuntime.config.bestKey || pairRuntime.mode;
  const previous = state.pairBest[bestKey];
  if (!previous || matches > previous.matches || (matches === previous.matches && elapsed < previous.time)) {
    state.pairBest[bestKey] = candidate;
    saveState();
  }
  document.querySelector("#lesson-progress-fill").style.width = completed ? "100%" : "0%";
  lessonStage.innerHTML = `
    <div class="completion pair-completion">
      <div class="completion-medal">↔</div>
      <span class="question-kicker">Pairs challenge</span>
      <h1>${completed ? "Every pair found!" : "Round ended."}</h1>
      <p class="question-note">${completed ? `You matched all ${total} in ${formatElapsedTime(elapsed)}.` : `You matched ${matches} of ${total}. Your memory is warming up.`}</p>
      <div class="pair-finish-gauge">${renderPairSpeedGauge(speedStats)}</div>
      <div class="completion-stats">
        <div><strong>${matches}</strong><span>pairs</span></div>
        <div><strong>${pairRuntime.mistakes}</strong><span>misses</span></div>
      </div>
      <div class="completion-actions">
        <button class="primary-button" id="pairs-again">Play again</button>
        <button class="secondary-button" id="pairs-done">Back to review</button>
      </div>
    </div>`;
  document.querySelector("#pairs-again").addEventListener("click", () => startPairs(pairRuntime.mode));
  document.querySelector("#pairs-done").addEventListener("click", closeLesson);
  if (completed) burstConfetti();
}

function startEndingTrainer(mode = "singular") {
  if (pairRuntime?.timer) clearInterval(pairRuntime.timer);
  pairRuntime = null;
  runtime = null;
  const lessonSet = activeLessonSet;
  const practice = getEndingPractice(lessonSet);
  const requestedMode = mode || (lessonSet === "lesson2" ? "masculineSingular" : "singular");
  const config = practice[requestedMode] || practice.singular;
  endingRuntime = {
    mode: requestedMode,
    lessonSet,
    config,
    bank: shuffled(config.items.map((item, index) => ({ id: `ending-${index}`, ending: item.ending }))),
    filled: Array(config.items.length).fill(null),
    checked: false,
    correctRuns: 0,
    message: `Round 1 of ${ENDING_MASTERY_GOAL}: match the endings in order.`
  };
  lessonShell.hidden = false;
  lessonShell.classList.remove("pairs-active");
  lessonShell.classList.add("endings-active");
  lessonShell.classList.remove("ending-type-active");
  lessonShell.classList.toggle("ending-both-active", config.items.length > 5);
  lessonFooter.hidden = true;
  checkButton.disabled = true;
  document.body.style.overflow = "hidden";
  document.querySelector("#lesson-progress-fill").style.width = "100%";
  renderEndingTrainer();
}

function renderEndingTrainer() {
  if (!endingRuntime) return;
  const { config, bank, filled } = endingRuntime;
  const rows = config.items.map((item, index) => {
    const token = filled[index] ? bank.find((entry) => entry.id === filled[index]) : null;
    const divider = index > 0 && item.group !== config.items[index - 1].group
      ? `<div class="ending-group-divider" aria-hidden="true"></div>`
      : "";
    return `
      ${divider}
      <button class="ending-order-row ${token ? "filled" : ""}" data-ending-slot="${index}">
        <span class="ending-case">
          <small>${escapeHTML(item.group)}</small>
          <strong>${escapeHTML(item.caseName)} - ${escapeHTML(item.ending)}</strong>
        </span>
        <span class="ending-slot">${token ? escapeHTML(token.ending) : "—"}</span>
      </button>`;
  }).join("");
  const tokens = bank.map((token) => {
    const used = filled.includes(token.id);
    return `<button class="ending-bank-token ${used ? "used" : ""}" data-ending-token="${token.id}" ${used ? "disabled" : ""}>${escapeHTML(token.ending)}</button>`;
  }).join("");

  lessonStage.innerHTML = `
    <span class="question-kicker">Ending order trainer</span>
    <h1>${escapeHTML(config.title)}</h1>
    <p class="question-note">${escapeHTML(config.subtitle)} Match each visible ending with the same ending from the shuffled bank.</p>
    <div class="ending-order-layout">
      <div class="ending-order-list" aria-label="Case order">${rows}</div>
      <div class="ending-bank" aria-label="Ending bank">
        <h3>Ending bank</h3>
        <div class="ending-bank-grid">${tokens}</div>
      </div>
    </div>
    <div class="ending-trainer-actions">
      <span id="ending-trainer-message">${escapeHTML(endingRuntime.message || `${filled.filter(Boolean).length} / ${config.items.length} filled`)}</span>
      <div>
        <button class="secondary-button" id="ending-reset">Reset</button>
      </div>
    </div>`;

  lessonStage.querySelectorAll("[data-ending-token]").forEach((button) => {
    button.addEventListener("click", () => fillNextEndingSlot(button.dataset.endingToken));
  });
  lessonStage.querySelectorAll("[data-ending-slot]").forEach((button) => {
    button.addEventListener("click", () => clearEndingSlot(Number(button.dataset.endingSlot)));
  });
  document.querySelector("#ending-reset").addEventListener("click", () => {
    endingRuntime.filled = Array(endingRuntime.config.items.length).fill(null);
    endingRuntime.bank = shuffled(endingRuntime.config.items.map((item, index) => ({ id: `ending-${index}`, ending: item.ending })));
    endingRuntime.checked = false;
    endingRuntime.message = `Round ${endingRuntime.correctRuns + 1} of ${ENDING_MASTERY_GOAL}: match the endings in order.`;
    renderEndingTrainer();
  });
}

function fillNextEndingSlot(tokenId) {
  if (!endingRuntime) return;
  const nextIndex = endingRuntime.filled.findIndex((slot) => !slot);
  if (nextIndex === -1) return;
  endingRuntime.filled[nextIndex] = tokenId;
  endingRuntime.checked = false;
  const filledCount = endingRuntime.filled.filter(Boolean).length;
  endingRuntime.message = filledCount === endingRuntime.config.items.length
    ? `Round ${endingRuntime.correctRuns + 1} is filled. Checking...`
    : `Round ${endingRuntime.correctRuns + 1} of ${ENDING_MASTERY_GOAL}: ${filledCount} / ${endingRuntime.config.items.length} filled.`;
  renderEndingTrainer();
  if (filledCount === endingRuntime.config.items.length) {
    window.setTimeout(checkEndingTrainer, 180);
  }
}

function clearEndingSlot(index) {
  if (!endingRuntime || !endingRuntime.filled[index]) return;
  endingRuntime.filled[index] = null;
  endingRuntime.checked = false;
  const filledCount = endingRuntime.filled.filter(Boolean).length;
  endingRuntime.message = `Round ${endingRuntime.correctRuns + 1} of ${ENDING_MASTERY_GOAL}: ${filledCount} / ${endingRuntime.config.items.length} filled.`;
  renderEndingTrainer();
}

function resetEndingTrainerBoard(message) {
  if (!endingRuntime) return;
  endingRuntime.bank = shuffled(endingRuntime.config.items.map((item, index) => ({ id: `ending-${index}`, ending: item.ending })));
  endingRuntime.filled = Array(endingRuntime.config.items.length).fill(null);
  endingRuntime.checked = false;
  endingRuntime.message = message || `Round ${endingRuntime.correctRuns + 1} of ${ENDING_MASTERY_GOAL}: match the endings in order.`;
  renderEndingTrainer();
}

function nextEndingTrainerMode(mode, lessonSet = endingRuntime?.lessonSet || activeLessonSet) {
  const options = getEndingModeOptions(lessonSet);
  const currentIndex = options.findIndex((option) => option.mode === mode);
  const next = options[currentIndex + 1];
  if (next) return { mode: next.mode, label: `Try ${next.titleLabel}` };
  return null;
}

function showEndingTrainerMastery() {
  if (!endingRuntime) return;
  const currentMode = endingRuntime.mode;
  const next = nextEndingTrainerMode(currentMode, endingRuntime.lessonSet);
  lessonStage.innerHTML = `
    <div class="completion pair-completion">
      <div class="completion-medal">3</div>
      <span class="question-kicker">Ending order mastered</span>
      <h1>Three perfect rounds!</h1>
      <p class="question-note">You matched the endings in order three times. That pattern is starting to stick.</p>
      <div class="completion-stats">
        <div><strong>${ENDING_MASTERY_GOAL}</strong><span>perfect rounds</span></div>
      </div>
      <div class="completion-actions">
        ${next ? `<button class="primary-button" id="ending-next">${next.label}</button>` : `<button class="primary-button" id="ending-again">Practice again</button>`}
        <button class="secondary-button" id="ending-done">Back to review</button>
      </div>
    </div>`;
  if (next) {
    document.querySelector("#ending-next").addEventListener("click", () => startEndingTrainer(next.mode));
  } else {
    document.querySelector("#ending-again").addEventListener("click", () => startEndingTrainer(currentMode));
  }
  document.querySelector("#ending-done").addEventListener("click", closeLesson);
}

function checkEndingTrainer() {
  if (!endingRuntime) return;
  const { config, bank, filled } = endingRuntime;
  if (!filled.every(Boolean)) return;
  endingRuntime.checked = true;
  const results = filled.map((tokenId, index) => {
    const token = bank.find((entry) => entry.id === tokenId);
    return token?.ending === config.items[index].ending;
  });
  const correct = results.every(Boolean);
  lessonStage.querySelectorAll("[data-ending-slot]").forEach((row, index) => {
    row.classList.toggle("correct", results[index]);
    row.classList.toggle("wrong", !results[index]);
  });
  const message = document.querySelector("#ending-trainer-message");
  if (correct) {
    endingRuntime.correctRuns += 1;
    const roundNumber = endingRuntime.correctRuns;
    state.xp += 4;
    state.xpToday += 4;
    recordStudyDay();
    saveState();
    updateMetrics();
    if (roundNumber < ENDING_MASTERY_GOAL) {
      if (message) message.textContent = `Perfect round ${roundNumber}! The board will clear by itself.`;
      burstConfetti(roundNumber);
      window.setTimeout(() => {
        resetEndingTrainerBoard(`Good. Round ${roundNumber + 1} of ${ENDING_MASTERY_GOAL}: do it again.`);
      }, roundNumber === 1 ? 850 : 1150);
      return;
    }
    state.xp += 8;
    state.xpToday += 8;
    saveState();
    updateMetrics();
    showEndingTrainerMastery();
    launchFireworks();
    return;
  }
  if (message) message.textContent = "A few are out of order. Tap a filled line to return an ending, then try again.";
}

function normalizeEndingAnswer(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/æ/g, "ae")
    .replace(/[-‐‑‒–—−]/g, "")
    .replace(/\s+/g, "");
}

function endingAnswerMatches(answer, expected) {
  return normalizeEndingAnswer(answer) === normalizeEndingAnswer(expected);
}

function endingTypeTitle(mode, lessonSet = endingRuntime?.lessonSet || activeLessonSet) {
  const copy = getEndingPracticeCopy(lessonSet);
  const modeOption = getEndingModeOption(mode, lessonSet);
  if (modeOption?.typeTitle) return modeOption.typeTitle;
  if (mode === "plural") return `Type out the ${copy.shortName} Plural Endings`;
  if (mode === "both") return `Type out the ${copy.shortName} Endings`;
  return `Type out the ${copy.shortName} Singular Endings`;
}

function startEndingTypeTrainer(mode = "singular") {
  if (pairRuntime?.timer) clearInterval(pairRuntime.timer);
  pairRuntime = null;
  runtime = null;
  const lessonSet = activeLessonSet;
  const practice = getEndingPractice(lessonSet);
  const requestedMode = mode || (lessonSet === "lesson2" ? "masculineSingular" : "singular");
  const config = practice[requestedMode] || practice.singular;
  endingRuntime = {
    mode: requestedMode,
    lessonSet,
    config,
    kind: "type",
    answers: Array(config.items.length).fill(""),
    checked: false,
    results: Array(config.items.length).fill(false),
    correctRuns: 0,
    locked: false,
    message: `Round 1 of ${ENDING_MASTERY_GOAL}: type each ending from memory.`
  };
  lessonShell.hidden = false;
  lessonShell.classList.remove("pairs-active");
  lessonShell.classList.add("endings-active");
  lessonShell.classList.add("ending-type-active");
  lessonShell.classList.toggle("ending-both-active", config.items.length > 5);
  lessonFooter.hidden = true;
  checkButton.disabled = true;
  document.body.style.overflow = "hidden";
  document.querySelector("#lesson-progress-fill").style.width = "100%";
  renderEndingTypeTrainer();
}

function startEndingFinalTest(mode = null) {
  if (pairRuntime?.timer) clearInterval(pairRuntime.timer);
  pairRuntime = null;
  runtime = null;
  const lessonSet = activeLessonSet;
  const practice = getEndingPractice(lessonSet);
  const unitKey = activeReviewUnit || lessonCatalog[lessonSet]?.unit || "unit1";
  const requestedMode = mode || (lessonSet === "lesson2" ? "mixed" : "both");
  const config = requestedMode === "unit"
    ? unitEndingFinalPractice[unitKey] || unitEndingFinalPractice.unit1
    : requestedMode === "cumulative"
    ? cumulativeEndingFinalPractice[lessonSet]
    : practice[requestedMode] || practice.both;
  endingRuntime = {
    mode: requestedMode,
    lessonSet,
    unitKey,
    config,
    kind: "final",
    answers: Array(config.items.length).fill(""),
    checked: false,
    results: Array(config.items.length).fill(false),
    correctRuns: 0,
    locked: false,
    message: "Final test: type each ending with no hint."
  };
  lessonShell.hidden = false;
  lessonShell.classList.remove("pairs-active");
  lessonShell.classList.add("endings-active");
  lessonShell.classList.add("ending-type-active");
  lessonShell.classList.toggle("ending-both-active", config.items.length > 5);
  lessonFooter.hidden = true;
  checkButton.disabled = true;
  document.body.style.overflow = "hidden";
  document.querySelector("#lesson-progress-fill").style.width = "100%";
  renderEndingTypeTrainer();
}

function renderEndingTypeTrainer() {
  if (!endingRuntime) return;
  const { config, answers, checked, results } = endingRuntime;
  const isFinalTest = endingRuntime.kind === "final";
  const copy = getEndingPracticeCopy(endingRuntime.lessonSet);
  const finalHeading = ["cumulative", "unit"].includes(endingRuntime.mode) || endingRuntime.lessonSet !== "lesson1"
    ? `${config.title} Test`
    : copy.finalHeading;
  const finalStepTitle = config.finalStepTitle || copy.finalStepTitle;
  const finalNote = config.finalNote || copy.finalNote;
  const rows = config.items.map((item, index) => {
    const divider = index > 0 && item.group !== config.items[index - 1].group
      ? `<div class="ending-group-divider" aria-hidden="true"></div>`
      : "";
    const rowState = checked ? (results[index] ? "correct" : "wrong") : "";
    const hint = checked && !results[index] && !isFinalTest
      ? `<span class="ending-answer-hint">Correct ending: ${escapeHTML(item.ending)}</span>`
      : `<span class="ending-answer-hint"></span>`;
    const label = isFinalTest
      ? `${item.caseName} -`
      : `${item.caseName} - ${item.ending}`;
    return `
      ${divider}
      <label class="ending-type-row ${rowState}">
        <span class="ending-case">
          <small>${escapeHTML(item.group)}</small>
          <strong>${escapeHTML(label)}</strong>
        </span>
        <input class="ending-type-input" data-ending-type-input="${index}" value="${escapeHTML(answers[index] || "")}" placeholder="type ending" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="${escapeHTML(item.caseName)} ending">
        ${hint}
      </label>`;
  }).join("");
  const filledCount = answers.filter((answer) => answer.trim()).length;

  lessonStage.innerHTML = `
    <span class="question-kicker">${escapeHTML(isFinalTest ? finalStepTitle : "Step 2 · Type it yourself")}</span>
    <h1>${escapeHTML(isFinalTest ? finalHeading : endingTypeTitle(endingRuntime.mode, endingRuntime.lessonSet))}</h1>
    <p class="question-note">${isFinalTest ? escapeHTML(finalNote) : copy.typeNote}</p>
    <div class="ending-type-list" aria-label="Type endings">${rows}</div>
    <div class="ending-trainer-actions">
      <span id="ending-type-message">${escapeHTML(endingRuntime.message || `${filledCount} / ${config.items.length} typed`)}</span>
      <div>
        <button class="secondary-button" id="ending-type-reset">Reset</button>
        <button class="primary-button" id="ending-type-check" ${filledCount === config.items.length ? "" : "disabled"}>Check</button>
      </div>
    </div>`;

  lessonStage.querySelectorAll("[data-ending-type-input]").forEach((input) => {
    input.addEventListener("input", () => {
      const index = Number(input.dataset.endingTypeInput);
      updateEndingTypeAnswer(index, input.value);
      advanceEndingTypeIfCorrect(index);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const index = Number(input.dataset.endingTypeInput);
      updateEndingTypeAnswer(index, input.value);
      if (endingRuntime.answers.every((answer) => answer.trim())) {
        checkEndingTypeTrainer();
        return;
      }
      focusNextEndingTypeInput(index);
    });
  });
  document.querySelector("#ending-type-reset").addEventListener("click", () => resetEndingTypeTrainer());
  document.querySelector("#ending-type-check").addEventListener("click", checkEndingTypeTrainer);
  const firstWrong = checked ? results.findIndex((result) => !result) : -1;
  const focusIndex = firstWrong >= 0 ? firstWrong : answers.findIndex((answer) => !answer.trim());
  window.setTimeout(() => {
    const input = lessonStage.querySelector(`[data-ending-type-input="${focusIndex >= 0 ? focusIndex : 0}"]`);
    input?.focus();
  }, 0);
}

function updateEndingTypeAnswer(index, value) {
  if (!endingRuntime || endingRuntime.locked) return;
  endingRuntime.answers[index] = value;
  if (endingRuntime.checked) {
    endingRuntime.checked = false;
    endingRuntime.results = Array(endingRuntime.config.items.length).fill(false);
    lessonStage.querySelectorAll(".ending-type-row").forEach((row) => row.classList.remove("correct", "wrong"));
    lessonStage.querySelectorAll(".ending-answer-hint").forEach((hint) => { hint.textContent = ""; });
  }
  const isCorrect = endingAnswerMatches(value, endingRuntime.config.items[index].ending);
  endingRuntime.results[index] = isCorrect;
  const row = lessonStage.querySelector(`[data-ending-type-input="${index}"]`)?.closest(".ending-type-row");
  row?.classList.toggle("correct", isCorrect);
  row?.classList.remove("wrong");
  const filledCount = endingRuntime.answers.filter((answer) => answer.trim()).length;
  endingRuntime.message = `${filledCount} / ${endingRuntime.config.items.length} typed`;
  const message = document.querySelector("#ending-type-message");
  if (message) message.textContent = endingRuntime.message;
  const check = document.querySelector("#ending-type-check");
  if (check) check.disabled = filledCount !== endingRuntime.config.items.length;
}

function nextEndingTypeInputIndex(currentIndex = -1) {
  if (!endingRuntime) return;
  const { config, answers } = endingRuntime;
  for (let index = currentIndex + 1; index < answers.length; index += 1) {
    if (!endingAnswerMatches(answers[index], config.items[index].ending)) return index;
  }
  for (let index = 0; index <= currentIndex; index += 1) {
    if (!endingAnswerMatches(answers[index], config.items[index].ending)) return index;
  }
  return -1;
}

function focusNextEndingTypeInput(currentIndex = -1) {
  if (!endingRuntime) return;
  const nextIndex = nextEndingTypeInputIndex(currentIndex);
  if (nextIndex === -1) return;
  const input = lessonStage.querySelector(`[data-ending-type-input="${nextIndex >= 0 ? nextIndex : 0}"]`);
  input?.focus();
  input?.select();
}

function advanceEndingTypeIfCorrect(index) {
  if (!endingRuntime || endingRuntime.locked) return;
  if (!endingAnswerMatches(endingRuntime.answers[index], endingRuntime.config.items[index].ending)) return;
  const nextIndex = nextEndingTypeInputIndex(index);
  const message = document.querySelector("#ending-type-message");
  if (nextIndex === -1) {
    endingRuntime.message = "All endings correct!";
    if (message) message.textContent = endingRuntime.message;
    window.setTimeout(checkEndingTypeTrainer, 220);
    return;
  }
  endingRuntime.message = `Correct. Next: ${endingRuntime.config.items[nextIndex].caseName}.`;
  if (message) message.textContent = endingRuntime.message;
  window.setTimeout(() => {
    if (!endingRuntime || !["type", "final"].includes(endingRuntime.kind)) return;
    if (!endingAnswerMatches(endingRuntime.answers[index], endingRuntime.config.items[index].ending)) return;
    focusNextEndingTypeInput(index);
  }, 70);
}

function resetEndingTypeTrainer(message) {
  if (!endingRuntime) return;
  endingRuntime.answers = Array(endingRuntime.config.items.length).fill("");
  endingRuntime.checked = false;
  endingRuntime.results = Array(endingRuntime.config.items.length).fill(false);
  endingRuntime.locked = false;
  endingRuntime.message = message || (endingRuntime.kind === "final"
    ? "Final test: type each ending with no hint."
    : `Round ${endingRuntime.correctRuns + 1} of ${ENDING_MASTERY_GOAL}: type each ending from memory.`);
  renderEndingTypeTrainer();
}

function checkEndingTypeTrainer() {
  if (!endingRuntime || endingRuntime.locked) return;
  const { config, answers } = endingRuntime;
  if (!answers.every((answer) => answer.trim())) return;
  const results = answers.map((answer, index) => endingAnswerMatches(answer, config.items[index].ending));
  endingRuntime.checked = true;
  endingRuntime.results = results;
  if (results.every(Boolean)) {
    endingRuntime.locked = true;
    if (endingRuntime.kind === "final") {
      state.xp += 20;
      state.xpToday += 20;
      recordStudyDay();
      saveState();
      updateMetrics();
      showEndingFinalCompletion();
      launchFireworks();
      return;
    }
    endingRuntime.correctRuns += 1;
    const roundNumber = endingRuntime.correctRuns;
    state.xp += 4;
    state.xpToday += 4;
    recordStudyDay();
    saveState();
    updateMetrics();
    if (roundNumber < ENDING_MASTERY_GOAL) {
      endingRuntime.message = `Perfect typing round ${roundNumber}! The board will clear by itself.`;
      const message = document.querySelector("#ending-type-message");
      if (message) message.textContent = endingRuntime.message;
      burstConfetti(roundNumber);
      window.setTimeout(() => {
        resetEndingTypeTrainer(`Good. Round ${roundNumber + 1} of ${ENDING_MASTERY_GOAL}: type them again.`);
      }, roundNumber === 1 ? 850 : 1150);
      return;
    }
    state.xp += endingRuntime.mode === "both" ? 12 : 6;
    state.xpToday += endingRuntime.mode === "both" ? 12 : 6;
    saveState();
    updateMetrics();
    showEndingTypeCompletion();
    launchFireworks();
    return;
  }
  endingRuntime.message = "A few endings need fixing. Check the red rows and try again.";
  renderEndingTypeTrainer();
}

function showEndingTypeCompletion() {
  if (!endingRuntime) return;
  const currentMode = endingRuntime.mode;
  const next = nextEndingTrainerMode(currentMode, endingRuntime.lessonSet);
  lessonStage.innerHTML = `
    <div class="completion pair-completion">
      <div class="completion-medal">✓</div>
      <span class="question-kicker">Typed endings complete</span>
      <h1>Three perfect typing rounds!</h1>
      <p class="question-note">You typed the endings from memory three times. That is the stronger kind of remembering.</p>
      <div class="completion-stats">
        <div><strong>${ENDING_MASTERY_GOAL}</strong><span>perfect rounds</span></div>
      </div>
      <div class="completion-actions">
        ${next ? `<button class="primary-button" id="ending-type-next">${next.label}</button>` : `<button class="primary-button" id="ending-type-again">Practice again</button>`}
        <button class="secondary-button" id="ending-type-done">Back to review</button>
      </div>
    </div>`;
  if (next) {
    document.querySelector("#ending-type-next").addEventListener("click", () => startEndingTypeTrainer(next.mode));
  } else {
    document.querySelector("#ending-type-again").addEventListener("click", () => startEndingTypeTrainer(currentMode));
  }
  document.querySelector("#ending-type-done").addEventListener("click", closeLesson);
}

function showEndingFinalCompletion() {
  const copy = getEndingPracticeCopy(endingRuntime?.lessonSet);
  const modeOption = getEndingModeOption(endingRuntime?.mode, endingRuntime?.lessonSet);
  const completionTitle = endingRuntime?.config?.completionTitle || (endingRuntime?.lessonSet === "lesson2" && modeOption
    ? `${modeOption.titleLabel} Endings are yours.`
    : copy.completionTitle);
  const completionNote = endingRuntime?.config?.completionNote || (endingRuntime?.lessonSet === "lesson2" && modeOption
    ? `You typed the ${modeOption.titleLabel.toLowerCase()} endings without the visible ending hints.`
    : copy.completionNote);
  lessonStage.innerHTML = `
    <div class="completion pair-completion">
      <div class="completion-medal">★</div>
      <span class="question-kicker">Final test complete</span>
      <h1>${escapeHTML(completionTitle)}</h1>
      <p class="question-note">${escapeHTML(completionNote)}</p>
      <div class="completion-actions">
        <button class="primary-button" id="ending-final-done">Back to review</button>
      </div>
    </div>`;
  document.querySelector("#ending-final-done").addEventListener("click", closeLesson);
}

function startReview() {
  const needsQuestions = getNeedsReviewItems(activeLessonSet).map((item) => item.question);
  const pool = curriculum
    .filter((lesson) => (lesson.lessonSet || "lesson1") === activeLessonSet && state.completed.includes(lesson.id))
    .flatMap((lesson) => lesson.questions.map((question, index) => ({ ...question, sourceId: `${lesson.id}:${index}` })))
    .filter((question) => !needsQuestions.some((need) => need.sourceId === question.sourceId));
  const reviewQuestions = [...needsQuestions, ...shuffled(pool)].slice(0, Math.min(6, needsQuestions.length + pool.length));
  startLesson({
    id: "review",
    title: "Memory Garden",
    eyebrow: `${lessonCatalog[activeLessonSet].label} review`,
    reference: `Completed ${lessonCatalog[activeLessonSet].label} quests`,
    questions: reviewQuestions
  }, true);
}

function startNeedsReview() {
  const reviewQuestions = shuffled(getNeedsReviewItems(activeLessonSet).flatMap((item) =>
    Array.from({ length: Math.max(1, REVIEW_MASTERY_GOAL - item.correct) }, () => ({ ...item.question }))
  ));
  if (!reviewQuestions.length) {
    showToast("No missed ideas right now");
    return;
  }
  startLesson({
    id: "needs-review",
    title: "Needs Another Look",
    eyebrow: `${lessonCatalog[activeLessonSet].label} mastery review`,
    reference: `Missed ${lessonCatalog[activeLessonSet].label} vocabulary, word forms, and grammar`,
    questions: reviewQuestions
  }, true);
}

function startLesson(lesson, isReview = false) {
  if (pairRuntime?.timer) clearInterval(pairRuntime.timer);
  pairRuntime = null;
  endingRuntime = null;
  lessonShell.classList.remove("pairs-active");
  lessonShell.classList.remove("endings-active");
  lessonShell.classList.remove("ending-type-active");
  lessonShell.classList.remove("ending-both-active");
  lessonFooter.hidden = false;
  runtime = {
    lesson,
    isReview,
    index: 0,
    selectedChoice: "",
    selectedTokens: [],
    answerText: "",
    answered: false,
    complete: false,
    score: 0,
    xpEarned: 0
  };
  lessonShell.hidden = false;
  document.body.style.overflow = "hidden";
  renderQuestion();
}

function closeLesson() {
  if (runtime?.advanceTimer) clearTimeout(runtime.advanceTimer);
  if (pairRuntime?.timer) clearInterval(pairRuntime.timer);
  pairRuntime = null;
  endingRuntime = null;
  lessonShell.classList.remove("pairs-active");
  lessonShell.classList.remove("endings-active");
  lessonShell.classList.remove("ending-type-active");
  lessonShell.classList.remove("ending-both-active");
  lessonShell.hidden = true;
  document.body.style.overflow = "";
  runtime = null;
  lessonFooter.hidden = false;
  checkButton.disabled = true;
  lessonFooter.className = "lesson-footer";
  renderView();
}

function advanceLessonQuestion() {
  if (!runtime) return;
  if (runtime.advanceTimer) {
    clearTimeout(runtime.advanceTimer);
    runtime.advanceTimer = null;
  }
  runtime.index += 1;
  runtime.selectedChoice = "";
  runtime.selectedTokens = [];
  runtime.answerText = "";
  runtime.answered = false;
  if (runtime.index >= runtime.lesson.questions.length) showCompletion();
  else renderQuestion();
}

function renderQuestion() {
  const question = runtime.lesson.questions[runtime.index];
  const progress = Math.round((runtime.index / runtime.lesson.questions.length) * 100);
  document.querySelector("#lesson-progress-fill").style.width = `${progress}%`;
  feedback.hidden = true;
  feedback.className = "feedback";
  feedback.innerHTML = "";
  lessonFooter.className = "lesson-footer";
  checkButton.textContent = "Check";
  checkButton.disabled = true;

  let answerUI = "";
  if (question.type === "choice") {
    const choices = shuffled(question.choices);
    answerUI = `<div class="choices">${choices.map((choice) => `<button class="choice" data-choice="${escapeHTML(choice)}">${escapeHTML(choice)}</button>`).join("")}</div>`;
  } else if (question.type === "type") {
    answerUI = `<input class="answer-input" id="answer-input" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Type in Latin…" aria-label="Your answer">`;
  } else if (question.type === "build") {
    const tokenButtons = shuffled(question.tokens.map((token, index) => ({ token, index })))
      .map(({ token, index }) => `<button class="word-token" data-token-index="${index}">${escapeHTML(token)}</button>`)
      .join("");
    answerUI = `
      <div class="build-zone" id="build-zone" aria-label="Your sentence"></div>
      <div class="token-bank" id="token-bank">${tokenButtons}</div>`;
  }

  lessonStage.innerHTML = `
    <span class="question-kicker">${runtime.lesson.eyebrow}</span>
    <h1>${formatQuestionPrompt(question.prompt)}</h1>
    ${question.note ? `<p class="question-note">${formatQuestionPrompt(question.note)}</p>` : ""}
    ${answerUI}`;

  if (question.type === "choice") {
    lessonStage.querySelectorAll("[data-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        handleChoiceClick(button);
      });
    });
  } else if (question.type === "type") {
    const input = document.querySelector("#answer-input");
    input.addEventListener("input", () => {
      runtime.answerText = input.value;
      checkButton.disabled = !input.value.trim();
    });
    setTimeout(() => input.focus(), 50);
  } else {
    bindTokens();
  }
}

function bindTokens() {
  const question = runtime.lesson.questions[runtime.index];
  const zone = document.querySelector("#build-zone");
  const bank = document.querySelector("#token-bank");

  const refresh = () => {
    zone.innerHTML = runtime.selectedTokens.map(({ token, index }) => `<button class="word-token" data-remove-index="${index}">${escapeHTML(token)}</button>`).join(" ");
    bank.querySelectorAll("[data-token-index]").forEach((button) => {
      button.classList.toggle("used", runtime.selectedTokens.some((item) => item.index === Number(button.dataset.tokenIndex)));
    });
    zone.querySelectorAll("[data-remove-index]").forEach((button) => {
      button.addEventListener("click", () => {
        runtime.selectedTokens = runtime.selectedTokens.filter((item) => item.index !== Number(button.dataset.removeIndex));
        refresh();
      });
    });
    checkButton.disabled = runtime.selectedTokens.length === 0;
  };

  bank.querySelectorAll("[data-token-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.tokenIndex);
      if (runtime.selectedTokens.some((item) => item.index === index)) return;
      runtime.selectedTokens.push({ token: question.tokens[index], index });
      refresh();
    });
  });
  refresh();
}

function normalize(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function answerIsCorrect(question) {
  if (question.type === "choice") return question.acceptedChoices
    ? question.acceptedChoices.includes(runtime.selectedChoice)
    : runtime.selectedChoice === question.correct;
  if (question.type === "build") return normalize(runtime.selectedTokens.map((item) => item.token).join(" ")) === normalize(question.correct);
  return question.accepted.some((answer) => normalize(answer) === normalize(runtime.answerText));
}

function handleChoiceClick(button) {
  if (!runtime || runtime.answered || button.disabled) return;
  const question = runtime.lesson.questions[runtime.index];
  runtime.selectedChoice = button.dataset.choice;
  const correct = answerIsCorrect(question);
  lessonStage.querySelectorAll(".choice").forEach((choice) => choice.classList.remove("selected"));
  button.classList.add(correct ? "correct" : "wrong");

  if (!correct) {
    state.hearts = Math.max(0, state.hearts - 1);
    markNeedsReview(questionKey(question));
    button.disabled = true;
    feedback.hidden = false;
    feedback.className = "feedback wrong";
    feedback.innerHTML = `<strong>Try again.</strong><p>That answer is not quite right.</p>`;
    lessonFooter.className = "lesson-footer wrong";
    checkButton.disabled = true;
    saveState();
    updateMetrics();
    return;
  }

  runtime.answered = true;
  runtime.score += 1;
  runtime.xpEarned += 10;
  state.xp += 10;
  state.xpToday += 10;
  recordStudyDay();
  markReviewCorrect(questionKey(question));
  feedback.hidden = false;
  feedback.className = "feedback";
  feedback.innerHTML = `<strong>Optime! Well done.</strong>`;
  lessonFooter.className = "lesson-footer correct";
  checkButton.disabled = true;
  lessonStage.querySelectorAll(".choice").forEach((choice) => {
    choice.disabled = true;
  });
  saveState();
  updateMetrics();
  runtime.advanceTimer = setTimeout(() => {
    advanceLessonQuestion();
  }, 700);
}

function questionKey(question) {
  return question.sourceId || `${runtime.lesson.id}:${runtime.index}`;
}

function handleLessonAction() {
  if (runtime.complete) {
    closeLesson();
    return;
  }
  if (runtime.answered) {
    advanceLessonQuestion();
    return;
  }

  const question = runtime.lesson.questions[runtime.index];
  const correct = answerIsCorrect(question);
  runtime.answered = true;
  checkButton.textContent = "Continue";
  checkButton.disabled = false;
  feedback.hidden = false;

  if (correct) {
    runtime.score += 1;
    runtime.xpEarned += 10;
    state.xp += 10;
    state.xpToday += 10;
    recordStudyDay();
    markReviewCorrect(questionKey(question));
    feedback.className = "feedback";
    feedback.innerHTML = `<strong>Optime! Well done.</strong><p>${formatQuestionPrompt(question.explanation)}</p>`;
    lessonFooter.classList.add("correct");
  } else {
    state.hearts = Math.max(0, state.hearts - 1);
    markNeedsReview(questionKey(question));
    const rightAnswer = question.answer || question.correct;
    feedback.className = "feedback wrong";
    feedback.innerHTML = `<strong>Almost — ${escapeHTML(rightAnswer)}</strong><p>${formatQuestionPrompt(question.explanation)}</p>`;
    lessonFooter.classList.add("wrong");
  }

  saveState();
  updateMetrics();
}

function showCompletion() {
  runtime.complete = true;
  const isPersonal = runtime.lesson.id === "personal";
  const total = runtime.lesson.questions.length;
  const percent = Math.round((runtime.score / total) * 100);
  document.querySelector("#lesson-progress-fill").style.width = "100%";
  feedback.hidden = true;
  lessonFooter.className = "lesson-footer";
  checkButton.textContent = isPersonal ? "Back to path" : runtime.isReview ? "Finish review" : "Back to path";
  checkButton.disabled = false;

  if (!isPersonal && !runtime.isReview && !state.completed.includes(runtime.lesson.id)) {
    state.completed.push(runtime.lesson.id);
    saveState();
  }

  lessonStage.innerHTML = `
    <div class="completion">
      <div class="completion-medal">${isPersonal ? "★" : runtime.isReview ? "↻" : "✦"}</div>
      <span class="question-kicker">${isPersonal ? "Personal practice complete" : runtime.isReview ? "Review complete" : "Quest complete"}</span>
      <h1>${isPersonal ? `${escapeHTML(state.profile.name)}, these sentences are yours.` : runtime.isReview ? "Your memory garden grew." : `${runtime.lesson.title} mastered!`}</h1>
      <p class="question-note">${percent >= 75 ? "A strong showing. The next step is ready when you are." : "Good work finishing. Missed ideas are waiting in Review."}</p>
      <div class="completion-stats">
        <div><strong>${runtime.xpEarned}</strong><span>XP earned</span></div>
        <div><strong>${percent}%</strong><span>accuracy</span></div>
      </div>
      ${isPersonal ? `
        <div class="completion-actions">
          <button class="primary-button" id="personal-more-sentences">Practice 5 more sentences</button>
        </div>` : ""}
    </div>`;
  document.querySelector("#personal-more-sentences")?.addEventListener("click", startPersonalPractice);
  burstConfetti();
}

function openProfile() {
  document.querySelector("#profile-name").value = state.profile.name;
  document.querySelector("#profile-goal").value = String(state.profile.goal);
  profileDialog.showModal();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function burstConfetti(times = 1) {
  const container = document.querySelector("#confetti");
  const colors = ["#c8912f", "#3e9b77", "#5b8fc9", "#de6d5f", "#9a76b4"];
  const burstCount = Math.max(1, times);
  container.innerHTML = Array.from({ length: burstCount }, (_, burstIndex) => (
    Array.from({ length: 42 }, (_, index) => {
      const left = (index * 37 + burstIndex * 19) % 100;
      const delay = (index % 9) * 0.06 + burstIndex * 0.45;
      const drift = ((index % 7) - 3) * 22;
      return `<i style="left:${left}%;background:${colors[(index + burstIndex) % colors.length]};animation-delay:${delay}s;--drift:${drift}px"></i>`;
    }).join("")
  )).join("");
  setTimeout(() => { container.innerHTML = ""; }, 2600 + (burstCount - 1) * 450);
}

function launchFireworks() {
  const container = document.querySelector("#confetti");
  const colors = ["#f5dfab", "#c8912f", "#3e9b77", "#5b8fc9", "#de6d5f", "#9a76b4"];
  container.innerHTML = Array.from({ length: 6 }, (_, burstIndex) => {
    const x = 18 + ((burstIndex * 17) % 64);
    const y = 18 + ((burstIndex * 29) % 46);
    return `<span class="firework" style="left:${x}%;top:${y}%;--firework-color:${colors[burstIndex % colors.length]};animation-delay:${burstIndex * 0.13}s"></span>`;
  }).join("");
  setTimeout(() => { container.innerHTML = ""; }, 2600);
}
