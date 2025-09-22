# Domain Events
- Descreve algo que ocorreu dentro do domínio
- Pode ser usado para desencadear alterações no sistema
- Pode ser usado para armazenar logs dos acontecimentos
- Todo evento deve ser representado em uma ação realizado no passado (UserCreated, OrderPlaced, EmailSent)
- Normalmente um Domain Event deve ser utilizado quando queremos notificar outros Bounded Contexts de uma mudança de estado

## Componentes de um domain event:
- Event (Dados e horário que ocorreu)
- Handler (implementação concreta do que é processado quando um evento é disparado): executa o processamento quando um evento é chamado
- Event Dispatcher: Responsável por armazenar e executar os handlers de um evento quando ele for disparado

## Dinâmica
- Criar um "Event Dispatcher"
- Criar um "Evento"
- Criar um "Handler" para o "Evento"
- Registrar o Evento, juntamente com o Handler no "Event Dispatcher"

Agora para disparar um evento, basta executar o método "notify" do "Event Dispatcher". Nesse momento todos os Handlers registrados no evento serão executados.