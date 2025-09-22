# Repositories
- Local de armazenamento de dados
- Deve manter o estado quando for buscar novamente o dado inserido
- Um agregado não deve representar uma tabela de banco de dados
- Normalmente ao salvar dados em um repositório, nós trabalhamos com agregado
- Se a relação for sempre 1:1 com o banco dados, o DAO se sai melhor
- Quando o dado é inserido ele deve ser transformado para o banco e quando esses dados voltarem para montar o agregado deve manter a consistência
- De um modo geral temos uma relação 1:1 de um tipo Agregado e um Repositório
- Dificilmente teremos um repositório para uma única entidade
- Representa coleções