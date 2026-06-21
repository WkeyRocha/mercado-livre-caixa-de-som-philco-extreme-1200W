# mercado-livre-caixa-de-som-philco-extreme-1200W

## GitHub Pages

Este projeto ja esta configurado para publicar no GitHub Pages usando GitHub Actions.

1. Suba o projeto para a branch `main`.
2. No GitHub, abra `Settings > Pages`.
3. Em `Build and deployment`, selecione `Source: GitHub Actions`.
4. A cada push na `main`, o workflow `Deploy to GitHub Pages` roda `npm run build` e publica a pasta `dist`.

O build gera `index.html`, `404.html`, `.nojekyll` e `assets` dentro de `dist`, com caminhos relativos para funcionar tambem em URLs do tipo `usuario.github.io/nome-do-repo/`.
