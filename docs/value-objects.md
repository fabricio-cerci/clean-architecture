# Value Objects
- Quando você se preocupa apenas com os atributos de um elemento de um model, classifique isso  como um Value Object
- Trate o Value Object como imútavel, exemplo um endereço tem várias váriaveis que quando uma muda, praticamente todas mudam juntas
- Não precisa de identificador único pois ele pode ser trocado
- Algumas coisas podem se tornar entidades ao invés de VOs por conta de contexto, como por exemplo o endereço quando é cadastrado em um contexto onde ele é único
- Deve estar sempre se autovalidando, ter o estado sempre coeso
- Sempre pense se o tipo primitivo não pode ser um value object

>Muitas vezes nós desenvolvedores não deixamos nosso sistema expressivos e acaba quebrando muitas coisas em tipos primitivos de maneira que ele fique pobre.

>Nós devemos modelar o coração do sistema da forma mais rica/expressiva possível, da forma que ela expresse realmente o que ela é com suas características e não com características totalmente genéricas, como um cpf poderia ser a mesma coisa que um cpf.

>Devemos modelar o domínio de uma maneira tão expressiva que quando olhamos para as propriedades conseguimos entender e que cada coisa esteja em seu lugar.

>Quando olhamos para o miolo/coração do domínio deve ser algo estável e o externo "instável", pois tem as coisas como bibliotecas, protocolos, coisas que podem mudar a qualquer momento.

>Para alcançar a estabilidade é necessário expressividade. Uma coisa para evitar essa falta de expressivade, é parar de trabalhar apenas com tipos primitivos e começar a criar os próprios tipos que representam um conjunto de propriedades que vão fazer sentido para o sistema.