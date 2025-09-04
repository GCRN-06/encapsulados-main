# Gummy Supplements - E-commerce de Suplementos em Gomas

## Sobre o Projeto

Este é um e-commerce moderno para venda de suplementos em formato de gomas, desenvolvido com React e TypeScript.

## 🚀 Tecnologias Utilizadas

- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **React 18** - Biblioteca de interface
- **shadcn/ui** - Componentes de UI
- **Tailwind CSS** - Framework de estilos
- **React Router** - Roteamento
- **React Query** - Gerenciamento de estado
- **Embla Carousel** - Carrossel de produtos

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para executar localmente

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Navegue para o diretório do projeto
cd gummy-supplements

# 3. Instale as dependências
npm install

# 4. Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🎨 Personalização

### TODO: Itens para personalizar

1. **Meta tags** - Atualize as informações em `index.html`
2. **Favicon** - Substitua `/public/favicon.jpg` pela sua logo
3. **Imagens de produtos** - Adicione suas imagens em `/src/assets/`
4. **Cores e tema** - Personalize as variáveis CSS em `/src/index.css`
5. **Conteúdo** - Atualize textos e informações dos produtos

### Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI (shadcn)
│   ├── Header.tsx      # Cabeçalho
│   ├── Hero.tsx        # Seção principal
│   └── ...
├── pages/              # Páginas da aplicação
├── assets/             # Imagens e recursos
├── hooks/              # Custom hooks
└── lib/                # Utilitários
```

## 🚀 Deploy

### Opções de Deploy

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   ```bash
   npm run build
   # Faça upload da pasta dist/
   ```

3. **GitHub Pages**
   ```bash
   npm run build
   # Configure GitHub Actions para deploy automático
   ```

## 📝 Licença

TODO: Adicione sua licença aqui

## 🤝 Contribuição

TODO: Adicione diretrizes de contribuição se necessário
