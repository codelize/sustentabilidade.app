🌿 Sustentabilidade App - Versão 1

*Sustentabilidade App* é um aplicativo de *organização pessoal* focado em ajudar os usuários a criarem e acompanharem desafios de sustentabilidade. Com este app, é possível adicionar, editar e remover desafios personalizados, incentivando práticas sustentáveis no dia a dia. Esta versão é uma implementação básica, com funcionalidades essenciais. Futuras versões trarão melhorias e novos recursos.

## ⚙️ Instruções de Execução

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

1. *Clone o repositório*:
   git clone https://github.com/codelize/sustentabilidade.app.git
   

2. *Entre na pasta do projeto*:
   cd sustentabilidade-app-master
   

3. *Instale as dependências*:
   npm install
   

4. *Execute o projeto no Android*:
   npx react-native run-android
   

                                                > *Nota*: 💡
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


![image](https://github.com/user-attachments/assets/c2cc045e-99c6-4b81-93cd-16bfac4c2ba1)



## 🔧 Componentes Utilizados e Justificativas

Aqui estão os principais componentes e bibliotecas utilizados no projeto, com suas respectivas funções e justificativas para o uso:

- *NavigationContainer*: Envolve toda a aplicação para gerenciar o estado de navegação.
- *createBottomTabNavigator*: Cria uma barra de navegação inferior, permitindo alternar entre as telas principais.
- *createStackNavigator*: Gerencia a navegação em pilha, garantindo transições suaves entre as telas.
- *Text*: Exibe texto nas telas, como títulos, descrições e mensagens.
- *View*: Contêiner básico para layouts, usado em quase todas as telas.
- *TextInput*: Campo de entrada de texto para adicionar e editar desafios personalizados.
- *Button*: Renderiza botões interativos para salvar ou navegar entre telas.
- *FlatList*: Renderiza uma lista de desafios com suporte a rolagem e atualização dinâmica.
- *Modal*: Exibe um modal sobreposto à tela principal para editar desafios.
- *TouchableOpacity*: Torna os textos e botões clicáveis, usado nos botões "Editar" e "Excluir" na lista de desafios.
- *Alert*: Mostra mensagens de alerta, como ao tentar salvar um desafio vazio.
- *KeyboardAvoidingView*: Ajusta o layout quando o teclado aparece, garantindo uma experiência mais suave para o usuário.
- *Switch*: Componente de alternância (on/off), usado na tela de configurações para controlar lembretes de desafios.
- *ActivityIndicator*: Exibe um indicador de carregamento durante a tela de loading.

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


      > RM E INTEGRANTES
      RM99487  - Alef Gabriel Alves Silva
      RM99752  - Danilo Araujo Mendonça
      RM98249  - Felipe Sieiro Paim dos Santos 
      RM551509 - Leonardo Ferreira Lizier
      RM99838  - Rodrigo Gonçalves Teixeira Filho
