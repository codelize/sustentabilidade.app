🌿 Sustentabilidade App 

*Sustentabilidade App* é um aplicativo de *organização pessoal* focado em ajudar os usuários a criarem e acompanharem desafios de sustentabilidade. Com este app, é possível adicionar, editar e remover desafios personalizados, incentivando práticas sustentáveis no dia a dia. Esta versão é uma implementação básica, com funcionalidades essenciais. Futuras versões trarão melhorias e novos recursos.

## ⚙️ Instruções de Execução

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

1. *Clone o repositório*:
   git clone https://github.com/codelize/sustentabilidade.app.git
   

2. *Entre na pasta do projeto*:
   cd sustentabilidade.app
   

3. *Instale as dependências*:
   npm install
   

4. *Execute o projeto no Android*:
   npx react-native run-android

> Nota: <br>
       usuário: *admin* <br>
       senha: *password123*
   

                                     💡 
                                     
       O desenvolvimento deste projeto trouxe alguns desafios, 
       como a navegação fluida entre telas e a adaptação da interface 
       ao teclado virtual em dispositivos móveis. Foi necessário utilizar 
       componentes como o KeyboardAvoidingView para garantir que o layout 
       não fosse prejudicado. Outro ponto interessante foi a implementação 
       do modal para editar desafios, que trouxe uma boa flexibilidade ao 
       design e usabilidade.

       Embora esta versão inicial contenha funcionalidades básicas, foi uma 
       ótima oportunidade para aprender e aplicar conceitos de React Navigation 
       e gerenciamento de estados com hooks, pavimentando o caminho para futuras 
       implementações com funcionalidades mais avançadas.

                                                                                            


## 📂 Estrutura de Pastas

A estrutura do projeto está organizada da seguinte forma:

<img src="https://github.com/user-attachments/assets/5494af2a-f305-4f54-94c0-b7b066561e01" alt="image" width="300"/>




## 🔧 Componentes Utilizados

1.  **Navigation**
   - **Local:** `AppNavigator.js`, `HomeStackNavigator.js`<br>
   - **Função:** Gerencia a navegação entre telas usando `NavigationContainer`, `createStackNavigator`, e `createBottomTabNavigator`.

2.  **View**
   - **Local:** Todas as telas
   - **Função:** Contêiner principal que organiza e estrutura os elementos nas telas.

3.  **StackView**
   - **Local:** `AppNavigator.js`, `HomeStackNavigator.js`<br>
   - **Função:** Controla a navegação em pilha, permitindo a navegação entre telas de forma empilhada.

4.  **Header**
   - **Local:** `AppNavigator.js`, `HomeStackNavigator.js`<br>
   - **Função:** Cabeçalho configurado como oculto (`headerShown: false`), mas disponível para exibir títulos ou botões de navegação.

5.  **Stack Navigation**
   - **Local:** `AppNavigator.js`, `HomeStackNavigator.js`<br>
   - **Função:** Organiza a navegação entre as telas de login e as telas principais do aplicativo.

6.  **BottomTabNavigator**
   - **Local:** `AppNavigator.js`<br>
   - **Função:** Cria uma barra de navegação inferior para alternar entre Home, Desafios e Configurações.

7.  **Text**
   - **Local:** Todas as telas<br>
   - **Função:** Exibe textos como títulos, descrições e mensagens ao usuário.

8.  **InputText**
   - **Local:** `LoginScreen.js`, `ChallengeScreen.js`<br>
   - **Função:** Captura a entrada de texto do usuário para login e criação de novos desafios.

9.  **Button**
   - **Local:** `LoginScreen.js`, `HomeScreen.js`, `ChallengeScreen.js`<br>
   - **Função:** Botões que permitem ações como "Entrar", "Salvar Desafio" e "Sair".

10.  **Alert**
    - **Local:** `LoginScreen.js`, `ChallengeScreen.js`<br>
    - **Função:** Exibe mensagens de alerta como feedback para o usuário, como erro no login ou tentativa de salvar um desafio vazio.

11.  **AsyncStorage**
    - **Local:** `AppNavigator.js`, `LoginScreen.js`, `HomeScreen.js`<br>
    - **Função:** Armazena dados localmente, como o status de login, permitindo que o usuário continue autenticado entre sessões.


## 🎨 Estilos (GlobalStyles.js)

Os estilos globais do aplicativo são definidos no arquivo GlobalStyles.js, para garantir uma identidade visual consistente em toda a aplicação. Aqui estão alguns dos principais estilos utilizados:

- *container*: Layout principal das telas, com padding e fundo escuro.
- *text*: Estilo para textos, com cor clara para contraste com o fundo escuro.
- *input*: Estilo dos campos de entrada, com bordas arredondadas e foco em acessibilidade.
- *button*: Botões estilizados com cor de destaque, bordas arredondadas e tamanho adequado para toque.
- *list*: Estilo para listas de desafios, garantindo espaçamento entre os itens e melhor visibilidade.
- *challengeItem*: Estilo para cada item da lista de desafios, com botões de edição e exclusão.
- *modalContainer*: Estilo para o fundo escuro do modal de edição.
- *modalContent*: Estilo do conteúdo exibido dentro do modal, garantindo centralização e boa usabilidade.
- *modalInput*: Estilo para o campo de entrada dentro do modal, mantendo o mesmo padrão visual do restante do app.


## Telas

<p align="center">
  <img src="https://github.com/user-attachments/assets/dfdd1543-0d65-4408-adce-2d57b294ce57" alt="image" width="250"/>
  <img src="https://github.com/user-attachments/assets/c381ee0d-f806-4017-bbae-74958743bff6" alt="image" width="250"/>
  <img src="https://github.com/user-attachments/assets/56330f9f-515b-4bd1-ac22-482ce4ab0a81" alt="image" width="250"/>
  <img src="https://github.com/user-attachments/assets/3db07ef1-9442-4ba2-b203-6888f20a3f0c" alt="image" width="250"/>
  <img src="https://github.com/user-attachments/assets/7148aa4a-4f22-496d-8269-013711c22bc4" alt="image" width="250"/>
  <img src="https://github.com/user-attachments/assets/262bfef5-7b7d-4366-9b48-e44f197dc145" alt="image" width="250"/>
</p>


      > RM E INTEGRANTES 
      RM99487  - Alef Gabriel Alves Silva
      RM99752  - Danilo Araujo Mendonça
      RM98249  - Felipe Sieiro Paim dos Santos 
      RM551509 - Leonardo Ferreira Lizier
      RM99838  - Rodrigo Gonçalves Teixeira Filho
