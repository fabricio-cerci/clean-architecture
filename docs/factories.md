# Factories
- Desloca a responsabilidade de criar instâncias de objetos complexos e agregados para um objeto separado
- Não precisa ter responsabilidade no modelo de domínio
- Faz parte do domínio
- Tem que ser expressiva do que ela está criando
- Forneça uma interface que encapsule toda a criação complexa e não exija que o cliente faça a referência às classes concretas dos objetos que estão sendo instanciados
- Cria agregados (aggregates) inteiros de uma única vez, reforçando suas invariantes
- FactoryMethod tem uma função que traz o objeto criado ao chamar
- AbstractFactory ajuda a tomar a decisão para a criação de famílias de objetos (classe)