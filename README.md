# Portal interno de e-commerce com microfrontends Aula 3

## Resumo 

Este projeto implementa um portal interno de compras utilizando arquitetura de microfrontends baseada em **Module Federation**, permitindo que diferentes squads desenvolvam e façam deploy de forma independente nos domínios de catálogo, carrinho e checkout, mantendo uma experiência unificada através de um shell central.

A solução prioriza desacoplamento entre domínios, consistência visual e escalabilidade da plataforma.

---

## Estrutura

- `shell`: responsável pelo layout global, navegação e orquestração dos microfrontends.
- `mfe-catalogo`: exibição de produtos e ação de adicionar ao carrinho.
- `mfe-carrinho`: listagem de itens adicionados e gerenciamento do carrinho.
- `mfe-checkout`: formulário de endereço e finalização do pedido.
- `shared`: componentes reutilizáveis e utilitários comuns.

---

## Arquitetura adotada

A aplicação utiliza **Module Federation (Vite)** para carregamento dinâmico dos microfrontends no shell, garantindo:

- Deploy independente por domínio
- Carregamento sob demanda (lazy loading)
- Compartilhamento eficiente de dependências (React)

---

## Três pilares de microfrontends

### Justificativa consolidada da escolha

- Comunicação desacoplada via eventos globais (`CustomEvent`)
- Componentização via biblioteca compartilhada (`shared`)
- Roteamento centralizado no shell para controle de navegação

---

## 1) Comunicação entre MFEs

**Escolha:** Event-driven com `CustomEvent`

**Justificativa:**

- Baixo acoplamento entre microfrontends
- Nenhuma dependência direta entre domínios
- Comunicação baseada em eventos de negócio (ex: `add-to-cart`)
- Fácil evolução para soluções mais robustas (event bus, mensageria)

---

## 2) Componentização

**Escolha:** Biblioteca compartilhada (`shared`)

**Justificativa:**

- Consistência visual entre MFEs
- Reutilização de componentes base (botões, cards, layout)
- Redução de duplicação de código
- Independência de evolução por domínio

---

## 3) Roteamento

**Escolha:** Centralizado no `shell` com React Router

**Justificativa:**

- Controle unificado da navegação
- Experiência consistente para o usuário
- Separação clara entre orquestração e domínio
- Carregamento dinâmico via lazy + federation

---

## Integração dos microfrontends

Os MFEs são carregados dinamicamente pelo shell via Module Federation:

```js
const Catalogo = React.lazy(() => import("catalogo/App"));
```

Cada microfrontend expõe seu módulo principal, mantendo isolamento de implementação.

---

## Comunicação entre domínios (exemplo)

Adição ao carrinho:

```js
window.dispatchEvent(
  new CustomEvent("add-to-cart", { detail: produto })
);
```

Consumo no carrinho:

```js
window.addEventListener("add-to-cart", handler);
```

---

## Como executar localmente

## Estrutura

- `shell/`: Aplicação principal que orquestra os microfrontends
- `mfe-catalogo/`: Microfrontend para exibição de produtos
- `mfe-carrinho/`: Microfrontend para gerenciamento do carrinho
- `mfe-checkout/`: Microfrontend para finalização do pedido
- `shared/`: Biblioteca compartilhada de componentes

## Tecnologias

- React
- Vite
- Module Federation
- React Router
- CustomEvent para comunicação

## Como executar

1. Instale as dependências em cada módulo:
   ```
   cd shared && npm install
   cd ../shell && npm install
   cd ../mfe-catalogo && npm install
   cd ../mfe-carrinho && npm install
   cd ../mfe-checkout && npm install
   ```

2. Build a biblioteca shared:
   ```
   cd shared && npm run build
   ```

3. Inicie os servidores em terminais separados:
   ```
   cd mfe-catalogo && npm run dev
   cd mfe-carrinho && npm run dev
   cd mfe-checkout && npm run dev
   cd shell && npm run dev
   ```

4. Acesse http://localhost:3000 para ver a aplicação.

## Funcionalidades

- Navegação entre páginas usando React Router
- Carregamento dinâmico dos microfrontends
- Comunicação via eventos CustomEvent (adicionar ao carrinho)
- Componentes compartilhados (Button, Card)
