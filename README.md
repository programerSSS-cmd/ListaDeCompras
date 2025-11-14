[README_EN.md]
# 🛒 Shopping List System

A simple and efficient application to manage shopping lists, developed
using pure HTML, CSS, and JavaScript.

# 🛒 Shopping List System

A simple and efficient application for managing shopping lists,
developed using pure HTML, CSS, and JavaScript. The system allows you to
add products, automatically calculate the total, delete products, clear
the entire list, and even save/load the list from an `.html` file.

## 🚀 Features

### ✔️ Add Products

-   Field to enter the product name\
-   Field to enter the quantity\
-   Field to enter the value\
-   Button to add the item to the list

### 🧮 Automatic Total Calculation

-   The total updates in real time\
-   Initial display shows **Total: R\$ 0,00**

### 🗑️ Delete Products

-   Each item has a trash-bin button\
-   Before deleting, the system shows a confirmation via SweetAlert

### 🧹 Clear List

-   Removes all items from the list\
-   Resets the total to "0"\
-   A confirmation alert is shown before clearing

### 💾 Save List

-   Exports all list items to a file named `lista-produtos.html`\
-   All quantities and values are stored correctly\
-   The exported list can be reloaded later

### 📂 Load List

-   Allows selecting a previously saved `.html` file\
-   Reinserts all products into the list\
-   Reactivates all calculation and deletion events\
-   Automatically recalculates the total\
-   Validates the file format before importing

### 📱 Responsive Interface

-   Layout optimized for mobile devices\
-   Fixed layout overflow issues\
-   Responsive grid with aligned inputs and buttons

## 🧠 Technologies Used

-   HTML5, CSS3, JavaScript\
-   SweetAlert2 (for styled alerts)

## ⚠️ System Alerts

The system uses SweetAlert2 for user-friendly messages, including: -
Empty list alert\
- Error when loading invalid files\
- Deletion confirmation\
- List clearing confirmation

## 🔧 How to Use

1.  Open `index.html` in any modern browser\
2.  Add products to the list\
3.  Click the trash icon to delete an item\
4.  Click *Save List* to export the file\
5.  To restore a list, click *Load List* and select the saved `.html`
    file

## 🗂️ Rules and Validations

-   Only `.html` files are accepted\
-   Invalid imports are blocked\
-   Clearing the list requires confirmation\
-   Deleting items also requires confirmation\
-   The system prevents saving an empty list

## 🙌 Author  

System developed by [Erick Rodrigues](https://www.linkedin.com/in/erickrodrigues-cmd/), focusing on organization, practicality, and JavaScript study.


[README_PT.md]
# 🛒 Sistema de Lista de Compras

Um aplicativo simples e eficiente para gerenciamento de listas de
compras, desenvolvido utilizando HTML, CSS e JavaScript puro.
O sistema permite adicionar produtos, calcular automaticamente o total,
excluir produtos, limpar toda a lista e até salvar/carregar a lista a
partir de um arquivo .html.

🚀 Funcionalidades
✔️ Adicionar Produtos

Campo para inserir o nome do produto

Campo para inserir a quantidade

Campo para inserir o valor

Botão para adicionar o item à lista

🧮 Cálculo Automático do Total

O total é atualizado em tempo real

Exibição inicial mostra Total: R$ 0,00

🗑️ Excluir Produtos

Cada item possui um botão com ícone de lixeira

Antes de excluir, o sistema exibe uma confirmação via SweetAlert

🧹 Limpar Lista

Remove todos os itens da lista

Reseta o total para "0"

Um alerta de confirmação é exibido antes da limpeza

💾 Salvar Lista

Exporta todos os itens da lista para um arquivo chamado
lista-produtos.html

Todas as quantidades e valores são salvos corretamente

A lista exportada pode ser carregada novamente depois

📂 Carregar Lista

Permite selecionar um arquivo .html salvo anteriormente

Reinsere todos os produtos na lista

Reativa todos os eventos de cálculo e exclusão

Recalcula automaticamente o total

Valida o formato do arquivo antes de importar

📱 Interface Responsiva

Layout otimizado para dispositivos móveis

Problemas de overflow corrigidos

Grade responsiva com inputs e botões alinhados

🧠 Tecnologias Utilizadas

HTML5, CSS3, JavaScript

SweetAlert2 (para alertas estilizados)

⚠️ Alertas do Sistema

O sistema usa SweetAlert2 para mensagens amigáveis ao usuário, incluindo:

Alerta de lista vazia

Erro ao carregar arquivos inválidos

Confirmação de exclusão

Confirmação de limpeza da lista

🔧 Como Usar

Abra o arquivo index.html em qualquer navegador moderno

Adicione produtos à lista

Clique no ícone de lixeira para excluir um item

Clique em Salvar Lista para exportar o arquivo

Para restaurar a lista, clique em Carregar Lista e selecione o arquivo .html salvo

🗂️ Regras e Validações

Apenas arquivos .html são aceitos

Importações inválidas são bloqueadas

A limpeza da lista exige confirmação

A exclusão de produtos também exige confirmação

O sistema impede salvar uma lista vazia

🙌 Autor

Sistema desenvolvido por [Erick Rodrigues](https://www.linkedin.com/in/erickrodrigues-cmd/), focado em organização,
praticidade e estudos de JavaScript.
