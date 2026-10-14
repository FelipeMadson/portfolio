# Portfólio

![Portfolio screenshot](docs/screenshots/portfolio-1440.png)

Catálogo Angular bilíngue de alterações de engenharia verificadas.

[English](README.md) · [Página pública](https://felipemadson.github.io/portfolio/)

## Executar localmente

```sh
npm --prefix frontend ci --ignore-scripts
npm --prefix frontend start
```

## Compilar e testar

```sh
npm --prefix frontend test
npm --prefix frontend run build
```

GitHub Pages hospeda o build estático em docs/. Aplicações e bancos vinculados executam separadamente. Evidências estão em docs/evidence. Alterações exigem um pacote imutável novo; a esteira privada e as credenciais não fazem parte deste repositório.

## Escopo

## [Correção do Fluxo de CI para Falhas de Construção](https://github.com/FelipeMadson/logsentinel-memory-guard)

O fluxo de CI foi modificado para parar em falhas de construção e forçar a verificação estrita de tipos. Isso garante que os erros de verificação de tipos reais sejam visíveis e que a verificação estrita de tipos seja mantida.

Instalação, build, checagem estrita de tipos e testes existentes foram verificados para esta alteração. Isso não certifica todas as funcionalidades ou badges legados.

[Revisão verificada](https://github.com/FelipeMadson/logsentinel-memory-guard/commit/6e412187862151739cc89bfa228baed884dacd35)

## [Limpeza do README.md](https://github.com/FelipeMadson/envdoctor)

O README.md contém duplicatas de badges e links, o que reduz a clareza e a eficiência da leitura. A mudança removiu essas duplicatas para manter a consistência e melhorar a experiência do usuário.

Esta alteração cobre a documentação. Ela não certifica o produto inteiro nem as afirmações de segurança e testes de mutação dos badges legados.

[Revisão verificada](https://github.com/FelipeMadson/envdoctor/commit/729ade740c7b21bf88e15f5473eec7d8126e8822)
