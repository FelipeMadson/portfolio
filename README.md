# Portfolio

![Portfolio screenshot](docs/screenshots/portfolio-1440.png)

A bilingual Angular catalogue of verified engineering changes.

[Português](README.pt-BR.md) · [Public site](https://felipemadson.github.io/portfolio/)

## Run locally

```sh
npm --prefix frontend ci --ignore-scripts
npm --prefix frontend start
```

## Build and test

```sh
npm --prefix frontend test
npm --prefix frontend run build
```

GitHub Pages hosts the static build in docs/. Linked applications and databases run separately. Case evidence is stored under docs/evidence. Changes require a new immutable package; the private pipeline and credentials are not part of this repository.

## Scope

## [CI Workflow Fix for Build Failures](https://github.com/FelipeMadson/logsentinel-memory-guard)

The CI workflow was modified to stop on build failures and enforce strict type checks. This ensures that actual type-checking errors are visible and that strict type enforcement is maintained.

Installation, build, strict type checking and the existing tests were verified for this change. They do not certify every product feature or legacy badge.

[Verified revision](https://github.com/FelipeMadson/logsentinel-memory-guard/commit/6e412187862151739cc89bfa228baed884dacd35)

## [README.md Cleanup](https://github.com/FelipeMadson/envdoctor)

The README.md file contained duplicate badges and links, which reduced clarity and reading efficiency. The change removed these duplicates to maintain consistency and improve the user experience.

This change covers documentation. It does not certify the full product or the security and mutation-testing claims in legacy badges.

[Verified revision](https://github.com/FelipeMadson/envdoctor/commit/729ade740c7b21bf88e15f5473eec7d8126e8822)
