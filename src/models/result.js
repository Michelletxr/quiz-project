const texts = [
    "Você tirou o caranguejo emo! Você é um caranguejo bem isolado da sociedade. Provavelmente incompreendido, alguns podem pensar que você é inseguro, mas isso não é necessariamente verdade! Talvez as roupas escuras e o Evanescence no fone sejam suas pinças lustrosas.",
    "Você tirou o caranguejo tímido! Você é um caranguejo bem discreto, como aqueles que se escondem no mangue. Às vezes você passa despercebido em ambientes sociais, mas tudo bem! Isso permite que você sempre esteja de olho e preze pelos caranguejos mais próximos a você.",
    "Você tirou o caranguejo inteligente! Você é aquele caranguejo que traz fatos curiosos à conversa e sempre tem uma resposta na ponta da língua. Outros crustáceos podem te achar irritante... Mas tudo bem! Os caranguejos ao seu redor certamente apreciam a comédia e curiosidades dos seus comentários.",
    "Você tirou o artist crab! Você certamente é um caranguejo muito divertido de se estar perto e todos apreciam sua presença. Diferente dos outros caranguejos, sua expressividade vai além da sua carapaça e pinças, e você externaliza suas emoções das formas mais diversas. Seja rodeado de caranguejos ou sozinho no seu buraco, você sempre está exercendo sua criatividade.",
    "Você tirou o caranguejo do rock! Você é um caranguejo ousado e faz as próprias regras. Outros crustáceos talvez sejam intimidados pela intensidade da sua presença, mas os caranguejos ao seu redor sabem o quão vibrante é estar ao seu lado! Além disso, você definitivamente sabe usar uma faca.",
    "Você tirou o caranguejo radical! Seja no oceano ou no manguezal, sua vida é emocionante e você nunca está parado. É difícil para os outros crustáceos acompanhar seu ritmo e para você desacelerar. Você é viciado em viver e seu maior inimigo é o tédio."
  ];


const caranguejoResults = [
    {
        "name":  'Caranguejo emo t-t',
        "text": texts[0]
    },
    {
        "name": 'Caranguejo Tímido UwU',
        "text": texts[1]
    },
    {
        "name":'Caranguejo inteligente e-e (uhm achtchually)',
        "text": texts[2]
    },
    {
        "name":'Artist Crab ;D',
        "text": texts[3]
    },
    {
        "name":'Caranguejo rock >:D',
        "text": texts[4]
    },
    {
        "name":'Caranguejo radical B)',
        "text": texts[5]
    },

]


const calculateResult = (currentPoints) => {
    
    let result = null;

    var val = [
        (currentPoints<=6),
        (currentPoints<=7),
        (currentPoints<=18),
        (currentPoints<=24),
        (currentPoints<=30),
        (currentPoints>30)
    ]

    for (let index = 0; index < val.length; index++) {
        if(val[index]){
            result = caranguejoResults[index];
            break;
        }     
    }
   
    return result;
}


export default calculateResult;