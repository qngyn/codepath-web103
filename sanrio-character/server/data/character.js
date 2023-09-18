
const characterData = 
[
    {
        "id": 1,
        "name": "Hello Kitty",
        "japanese_name": "ハローキティ",
        "description": "As tall as 5 apples and as heavy as three",
        "debut_year": "1974",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/hellokitty/img_chara3.png",
    },

    {
        "id": 2,
        "name": "Hello Mimmy",
        "japanese_name": "ミミィ",
        "description": "Hello Kitty's younger twin sister. Mimmy is often seldom shown separated from Kitty.",
        "debut_year": "1974",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/hellomimmy/img_chara1.png"
    
    },
    {
        "id": 3,
        "name": "Dear Daniel",
        "japanese_name": "ディアダニエル",
        "description": "Hello Kitty's boyfriend and companion",
        "debut_year": "1993",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/daniel/img_chara1.png"
    
    },
    {
        "id": 4,
        "name": "Risuru",
        "japanese_name": "りすくん", 
        "description": "Risuru is a boy squirrel character from the Japanese company Sanrio.",
        "debut_year": "1999",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/risuru/img_chara1.png"
    
    },
    {
        "id": 5,
        "name": "Pochacco",
        "japanese_name": "ポチャッコ",
        "description": "A white puppy with black floppy ears, a trademark sporty red cap and a positive attitude.",
        "debut_year": "1989",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/pochacco/img_chara3.png"
    
    },
    {
        "id": 6,
        "name": "My Melody",
        "japanese_name": "マイメロディ",
        "description": "A white rabbit who always wears a pink or red hood that also covers her ears and is Hello Kitty’s best friend.",
        "debut_year": "1975",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/mymelody/img_chara3.png"
    
    },
    {
        "id": 7,
        "name": "Kuromi",
        "japanese_name": "クロミ",
        "description": "The leader of a biker gang known as 'Kuromi's 5.' She is My Melody's rival",
        "debut_year": "1975",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/kuromi/img_chara3.png"
    }, 
    {
        "id": 8,
        "name": "Bad Badtz-Maru",
        "japanese_name": "バッドばつ丸",
        "description": "A penguin with spiky hair who is often portrayed as a punk or skater.",
        "debut_year": "1993",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/badtzmaru/img_chara3.png"
    }, 
    {
        "id": 9,
        "name": "Cinnamoroll",
        "japanese_name": "シナモロール",
        "description": "A white puppy with black floppy ears, a trademark sporty red cap and a positive attitude.",
        "debut_year": "1989",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/cinnamon/img_chara3.png"
    }, 
    {
        "id": 10,
        "name": "Pompompurin",
        "japanese_name": "ポムポムプリン",
        "description": "A golden retriever dog character first introduced in 1996.",
        "debut_year": "1996",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/pompompurin/img_chara3.png"
    },
    {
        "id": 11,
        "name": "Kerokerokeroppi",
        "japanese_name": "けろけろけろっぴ",
        "description": "A frog character with large eyes and a V-shaped mouth",
        "debut_year": "1988",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/keroppi/img_chara1.png"
    },
    {
        "id": 12,
        "name": "Gudetama",
        "japanese_name": "ぐでたま",
        "description": "A genderless egg with a sad face and a shiny yellow butt. They want nothing and they do nothing.",
        "debut_year": "2014",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/gudetama/img_chara1.png"
    },
    {
        "id": 13,
        "name": "Little Twin Stars",
        "japanese_name": "リトルツインスターズ",
        "description": "They were born on December 24th (Christmas Eve) on Omoiyari Star in the Dream Star-Cloud",
        "debut_year": "1975",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/kikilala/img_chara3.png"
    },
    {
        "id": 14,
        "name": "Hangyodon",
        "japanese_name": "ハンギョドン",
        "description": "A fish character who likes joking around but also feels lonely, and whose plans of heroism often go awry",
        "debut_year": "1985",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/hangyodon/img_chara3.png"
    },
    {
        "id": 15,
        "name": "Bosanimal",
        "japanese_name": "ボスあにまる",
        "description": "A group of animals who are the bosses of the forest. They are all very kind and gentle.",
        "debut_year": "2021",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/bosanimal/img_chara1.png"
    },
    {
        "id": 16,
        "name": "Cherinacherine",
        "japanese_name": "チェリーナチェリー",
        "description": "a pair of fairy characters from the Japanese company Sanrio. They are named Cherina and Cherine and they live in the cherry forest. Sometimes they help with the harvest.",
        "debut_year": "2008",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/cherinacherine/img_chara1.png"
    },
    {
        "id": 17,
        "name": "Patty & Jimmy",
        "japanese_name": "パティ＆ジミー",
        "description": "Patty is bright, cheerful, optimistic and a little clumsy. She enjoys tennis, skating, baseball, any sport is OK with her! Jimmy is a kind and gentle, enjoys playing card games. He excels at chess and he's the best in his class.",
        "debut_year": "1974",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/pattyandjimmy/img_chara1.png"
    },
    {
        "id": 18,
        "name": "Tuxedosam",
        "japanese_name": "タキシードサム",
        "description": "A young penguin with a handsome tuxedo appearance. He is a very good tap dancer and a careful listener.",
        "debut_year": "1979",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/tuxedosam/img_chara3.png"
    }, 
    {
        "id": 19,
        "name": "Cogimyun",
        "japanese_name": "こぎみゅん",
        "description": "A girl character from the Japanese company Sanrio who is made of wheat flour.",
        "debut_year": "2015",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/cogimyun/img_chara1.png"
    }, 
    {
        "id": 20,
        "name": "Marumofubiyori",
        "japanese_name": "まるもふびより",
        "description": "A polar bear cub who is always draped in his favorite blanket and loves to laze around at home",
        "debut_year": "2017",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/marumofubiyori/img_chara1.png"
    }, 
    {
        "id": 21,
        "name": "Maimaimaigoen",
        "japanese_name": "まいまいまいごえん",
        "description": "A multidimensional story about the 'growing pains of the heart' of 16 children and their nursery school teachers.",
        "debut_year": "2021",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/maimaimaigoen/img_chara1.png"
    },
    {
        "id": 22,
        "name": "Osaru no Monkichi",
        "japanese_name": "おさるのもんきち",
        "description": "A lively and playful monkey character from Sanrio. With its charming smile and energetic spirit, Monkichi captures the essence of youthful joy",
        "debut_year": "1992", 
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/monkichi/img_chara1.png",
    }, 
    {
        "id": 23,
        "name": "Bonbonribbon",
        "japanese_name": "ボンボンリボン",
        "debut_year": "2012",
        "description": "A pink bunny who is a very fashionable girl who is focused on singing and dancing",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/bonbonribbon/img_chara1.png"
    }, 
    {
        "id": 24,
        "name": "Mewkledreamy", 
        "japanese_name": "ミュークルドリーミー",
        "debute_year": "2017",
        "description": "A cat-like creature with a pink body, a white belly, and a fluffy tail with a pink heart at the end of it. By sleeping together, she will see the same dream as you. She loves to tell stories from her dreams!",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/mewkledreamy/img_chara1.png"
    },
    {
        "id": 25,
        "name": "Pannapitta",
        "japanese_name": "パンナピッタ",
        "debute_year": "2003",
        "description": "A healthy/lively baby panda boy who is only three months old. He is full of energy and finds it hard to keep still; he is always running around.",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/pannapitta/img_chara1.png", 
    }, 
    {
        "id": 26,
        "name": "Corocorokuririn",
        "japanese_name": "コロコロクリリン",
        "debute_year": "1997",
        "description": "A very curious golden hamster who is sometimes a little timid. He enjoys collecting stuff from around the house to make playhouses and is very good at fitting into tiny spaces. Coro Coro Kuririn can chew on just about anything, but his favorite foods are cookies and sunflower seeds.",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/kuririn/img_chara1.png"
    },
    {
        "id": 27,
        "name": "PataPataPeppy",
        "japanese_name": "パタパタペッピー",
        "debute_year": "1992",
        "description": "A little boy owl character from the Japanese company Sanrio. Interested in many things. A panicky horned owl boy who likes exploring. He loves cherries, nuts, and naps. Very good at low-altitude flight!",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/patapatapeppy/img_chara1.png"
    }, 
    {
        "id": 28,
        "name": "Marshmallowmitaina-fuwafuwanyanko",
        "japanese_name": "マシュマロみたいなふわふわにゃんこ",
        "debute_year": "2006",
        "description": "Marshmallow is a fluffy white kitten with a beautiful singing voice. He can not speak a human language but is skilled at playing the piano and is practising it. His dream is to become a music star. Marshmallow has a secret pocket on his belly containing a lucky marshmallow with a mysterious power inside. He lives in Paris with a Japanese fashion designer.",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/masyumaro/img_chara1.png"
    }, 
    {
        "id": 29, 
        "name": "Kashiwankomochi", 
        "japanese_name": "かしわんこもち",
        "debute_year": "2013",
        "description": "A ricecake with features of a dog. He is the eldest son of three siblings and appeared in a food shop with Botawanko, Sakurawanko, Shiomamewanko and Uguisu-san.",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/kashiwankomochi/img_chara1.png"
    }, 
    {
        "id": 30,
        "name": "Maimai",
        "japanese_name": "まいまい",
        "debute_year": "2021",
        "description": "A pink puppy from Japan, who is a singer and diva, who is very good at singing and knows both Lutz and Roseanne for a long time. She likes watermelon and has a very friendly and caring personality.",
        "image": "https://www.sanrio.co.jp/special/characterranking/2023/assets/images/characters/maimai/img_chara1.png"
    }
]

export default characterData;