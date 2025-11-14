[README.md](https://github.com/user-attachments/files/23548941/README.md)
# 🛒 Sistema de Lista de Compras / Shopping List System

Este README contém as versões em **Português (PT-BR)** e **Inglês
(EN-US)**.

------------------------------------------------------------------------

# PT-BR --- Sistema de Lista de Compras

Um aplicativo simples e eficiente para gerenciar listas de compras,
desenvolvido em HTML, CSS e JavaScript puro. O sistema permite adicionar
produtos, calcular automaticamente o total, excluir itens, limpar toda a
lista e salvar/carregar a lista a partir de um arquivo `.html`.

## 🚀 Funcionalidades

### ✔️ Adicionar Produtos

-   Campo para nome do produto
-   Campo para quantidade
-   Campo para valor
-   Botão para adicionar o item à lista

### 🧮 Cálculo Automático do Total

-   O total é atualizado em tempo real
-   Exibição inicial mostra **Total: R\$ 0,00**

### 🗑️ Excluir Produtos

-   Cada item possui um botão de lixeira
-   Antes de excluir, o sistema exibe uma confirmação via SweetAlert

### 🧹 Limpar Lista

-   Remove todos os itens
-   Reinicia o total para "0"
-   Exibe alerta de confirmação

### 💾 Salvar Lista

-   Exporta todos os itens para `lista-produtos.html`
-   Quantidades e valores são preservados
-   A lista pode ser carregada novamente

### 📂 Carregar Lista

-   Permite selecionar um arquivo `.html` previamente salvo\
-   Reinsere todos os produtos
-   Reativa cálculos e exclusões
-   Recalcula o total automaticamente
-   Valida o formato do arquivo

### 📱 Interface Responsiva

-   Layout otimizado para celulares
-   Correções de overflow
-   Grade responsiva com inputs e botões alinhados

## 🧠 Tecnologias Utilizadas

-   HTML5, CSS3, JavaScript
-   SweetAlert2

## ⚠️ Alertas do Sistema

Incluem:
- Lista vazia
- Arquivo inválido
- Confirmação de exclusão
- Confirmação de limpeza

## 🔧 Como Usar

1.  Abra `index.html` no navegador
2.  Adicione produtos
3.  Clique na lixeira para apagar um item
4.  Clique em *Salvar Lista* para exportar
5.  Use *Carregar Lista* para restaurar um arquivo `.html`

## 🗂️ Regras e Validações

-   Apenas arquivos `.html` permitidos
-   Importações inválidas são bloqueadas
-   Limpar lista exige confirmação
-   Excluir item exige confirmação
-   Impede salvar lista vazia

## 🙌 Autor

Desenvolvido por **[Erick
Rodrigues](https://www.linkedin.com/in/erickrodrigues-cmd/)**.

------------------------------------------------------------------------

# EN-US --- Shopping List System

A simple and efficient application for managing shopping lists,
developed using pure HTML, CSS, and JavaScript. The system allows you to
add products, automatically calculate the total, delete items, clear the
entire list, and save/load the list from an `.html` file.

## 🚀 Features

### ✔️ Add Products

-   Field for product name
-   Field for quantity
-   Field for value
-   Button to add item

### 🧮 Automatic Total Calculation

-   Total updates in real time
-   Initial display shows **Total: R\$ 0,00**

### 🗑️ Delete Products

-   Each item has a trash icon
-   Confirmation popup via SweetAlert

### 🧹 Clear List

-   Removes all items
-   Resets total to "0"
-   Displays confirmation

### 💾 Save List

-   Exports all items to `lista-produtos.html`
-   Quantities and values preserved
-   File can be reloaded later

### 📂 Load List

-   Allows selecting a previously saved `.html` file
-   Reinserts items
-   Restores all events
-   Recalculates total
-   Validates file format

### 📱 Responsive Interface

-   Mobile-friendly layout
-   Overflow issues corrected
-   Clean responsive grid

## 🧠 Technologies Used

-   HTML5, CSS3, JavaScript
-   SweetAlert2

## ⚠️ System Alerts

Includes:
- Empty list warning
- Invalid file error
- Deletion confirmation
- List clearing confirmation

## 🔧 How to Use

1.  Open `index.html`
2.  Add products
3.  Use trash icon to delete
4.  Click *Save List*
5.  Click *Load List* to import an `.html` file

## 🗂️ Rules and Validations

-   Only `.html` files allowed
-   Invalid imports blocked
-   Clearing list requires confirmation
-   Deleting item requires confirmation
-   System prevents saving an empty list

## 🙌 Author

Developed by **[Erick
Rodrigues](https://www.linkedin.com/in/erickrodrigues-cmd/)**.
