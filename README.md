![LBCA | Helpinho](/assets/header.svg)

Helpinho é uma plataforma onde pessoas podem ajudar e pedir ajuda. Você pode se cadastrar e criar o seu helpinho, onde outras pessoas lhe darão todo o apoio que precisar.

### FrontEnd:

- **Angular v17+**
- **Tailwind**

1. **Página de Listagem de Helpinhos**:

   - Listar todos os helpinhos criados.
   - Função de pesquisa (opcional ter filtros e ordenação).

2. **Página de Criação de Helpinho**:

   - Validação de formulário.
   - Campos obrigatórios: foto, título, descrição, meta, nome do criador, categoria, prazo e informações bancárias.
   - Confirmação de envio e redirecuionar para o helpinho criado.

3. **Página de Visualização de Helpinho**:

   - Mostrar todos os dados não sensíveis do helpinho e do criador.
   - Mostrar valores recebidos até o momento (opcional realtime).

4. **Página de Autenticação**:

   - Tela de login e cadastro.
   - Validação de formulário.
   - Seguração de dados do usuário.

### BackEnd:

- **Serverless** utilizando **AWS**

Esperamos as funcionalidades:

1. **CRUD de Usuário**:

   - Nome, telefone, email e senha.

2. **CRUD de Solicitação de Help**:

   - Imagem, meta, descrição, título e solicitante.

3. **CRUD de Help Realizado**:

   - Solicitação, valor e doador.

## Instruções para a Aplicação

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/LBCA-TI/Helpinho.git
   ```

2. **Desenvolva sua aplicação**
   Dentro de cada pasta, `frontend` e `backend`, crie sua aplicação e documente o passo a passo para execução e uma breve explicação do seu desenvolvimento. Caso necessário, crie um outro arquivo .md na raíz, mas não altere este arquivo README.md

3. **Documente sua aplicação**
   Crie uma breve documentação do seu código, explicando sua tomada de decisão e qualquer ponto que ache relevante documentar

4. **Teste sua aplicação** (opcional)
   Garanta que sua aplicação irá funcionar corretamente, faça testes unitários para garatir que cada parte da sua aplicação está funcionando corretamente

## Links

- **Figma**: [Link para o protótipo no Figma](https://www.figma.com/design/0E94SZ4NUCkU6Oc5er2jzK/Helpinho---Frontend-test?node-id=18-2022&t=FrRW3RVj9UYuqUwN-1)
- **Serverless**: [Serverless framework website](https://www.serverless.com/)
- **Angular**: [Angular framework website](https://angular.dev/)
- **Tailwind**: [Tailwind website](https://tailwindcss.com/)
