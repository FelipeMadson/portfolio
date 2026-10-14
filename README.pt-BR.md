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

## [WebhookVault · builds reproduzíveis](https://github.com/FelipeMadson/webhookvault)

Dependências de desenvolvimento fixadas, lockfile e verificação estrita de TypeScript na CI.

Esta atualização melhora os processos de ferramentas e CI, mas não certifica o produto inteiro ou suas reclamações legadas. A manutenção de dependências e CI é tratada pelo repositório vinculado, e este portfólio é estático.

[Revisão verificada](https://github.com/FelipeMadson/webhookvault/commit/63e1c58c2ba7443aae913505572600cbb573cdc3)

## [LogSentinel · manutenção de build e CI](https://github.com/FelipeMadson/logsentinel-memory-guard)

Versões de dependências, lockfile e configuração TypeScript atualizados. A CI agora interrompe a execução se o build falhar.

Instalação, build, checagem estrita de tipos e testes existentes foram verificados para esta alteração. Isso não certifica todas as funcionalidades ou badges legados.

[Revisão verificada](https://github.com/FelipeMadson/logsentinel-memory-guard/commit/6e412187862151739cc89bfa228baed884dacd35)

## [Envdoctor · documentação mais clara](https://github.com/FelipeMadson/envdoctor)

Seções e links duplicados do README removidos, preservando as instruções de instalação.

Esta alteração cobre a documentação. Ela não certifica o produto inteiro nem as afirmações de segurança e testes de mutação dos badges legados.

[Revisão verificada](https://github.com/FelipeMadson/envdoctor/commit/729ade740c7b21bf88e15f5473eec7d8126e8822)
