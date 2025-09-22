# Agregados
- Um agregado é um conjunto de objetos associados (entidades, objetos de valor e etc...) que tratamos como uma unidade para propósito de mudança de dados
- Fazem parte de um objetivo ou comportamento do sistema, onde um objeto não vive sem o outro
- Muitas vezes na hora de modelar o sistema ao invés de separarmos em entidades, começaremos através dos agregados
- Muitas vezes um agregado ta tão relacionado com seus objetos que vemos ele apenas como um só
- Quando você tem um relacionamento forte você liga duas entidades uma a outra por exemplo pela própria entidade, quando o relacionamento é fraco (uma não depende da outra para viver) você utiliza o identificador (id)
- O nome do agregado é sempre o nome da raiz do agregado, a parte mais importante, onde ele começa (Root)
- O nome do root é a representação de um conjunto de coisas que fazem aquilo existir
- Se o objeto está no mesmo agregado a referência é feita pelo próprio objeto/classe, agora se estiver em outro agregado a referência é feita pelo identificador(id)

>Order{
>    item: Item[] (relacionamento forte um não vive sem o outro)
>    customerId: string (relacionamento fraco, o cliente não depende da order para existir)
>}