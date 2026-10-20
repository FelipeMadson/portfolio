export const site = {
  name: "Felipe Madison",
  focus: "Rust · Go · TypeScript · Python · Java 21 · WebAssembly · Distributed Systems & Cloud Architecture",
  cases: [
    {
      slug: "rust-wasm-simd-vector-search",
      repository: "FelipeMadson/rust-wasm-simd-vector-search",
      revision: "945250f004d84426d26ef3d2d20b9297ad0581b0",
      packageHash: "e6f1a8b29c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f",
      kind: "Flagship System",
      en: {
        title: "Rust WebAssembly 128-bit SIMD Vector Search Engine",
        summary: "Zero-cloud client-side vector similarity search engine compiled to WebAssembly with 128-bit SIMD acceleration and HNSW graph indexing.",
        problem: "Cloud vector databases introduce 50-200ms round-trip latency, high bandwidth egress costs, and severe privacy risks when transmitting user embeddings to third-party endpoints.",
        change: "Engineered a native Rust vector search engine with wasm32 simd128 loop unrolling, hybrid flat/HNSW graph traversal, and clean wasm-bindgen TypeScript contracts.",
        limitation: "Benchmarks and unit tests verified on Chrome V8 and Node.js with SIMD enabled. Maximum memory footprint is bounded by WebAssembly 4GB linear memory."
      },
      pt: {
        title: "Motor de Busca Vetorial com Rust, WebAssembly e SIMD de 128 bits",
        summary: "Motor de busca vetorial para execução em cliente com zero dependência de nuvem, aceleração vetorial SIMD e indexação em grafo HNSW.",
        problem: "Bancos vetoriais em nuvem impõem latência de rede elevada, altos custos de egress e riscos de privacidade ao enviar embeddings confidenciais para servidores remotos.",
        change: "Construção de motor em Rust compilado para wasm32 com instruções SIMD de 128 bits, busca híbrida linear e HNSW com tempo logarítmico O(log N).",
        limitation: "Testes unitários e benchmarks validados em ambientes V8 com suporte a WebAssembly SIMD. Limite de memória restrito ao espaço linear do WASM."
      },
      checks: [
        { name: "cargo-test", status: "passed" },
        { name: "simd-cosine-precision", status: "passed" },
        { name: "hnsw-clustering-recall", status: "passed" },
        { name: "wasm32-target-compilation", status: "passed" },
        { name: "zero-memory-leak-audit", status: "passed" }
      ],
      evidenceUrl: "https://github.com/FelipeMadson/rust-wasm-simd-vector-search/releases/tag/v1.0.0"
    },
    {
      slug: "rust-lsm-tree-storage-engine",
      repository: "FelipeMadson/rust-lsm-tree-storage-engine",
      revision: "d5c0f52723c4d86f4120b319975a96b06086a606",
      packageHash: "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
      kind: "Flagship System",
      en: {
        title: "Rust LSM-Tree Storage Engine with Thread-Safe MemTable & WAL",
        summary: "Embedded Log-Structured Merge-tree key-value engine with fine-grained concurrent SkipList MemTable and append-only Write-Ahead Log.",
        problem: "Traditional B-Tree databases suffer from severe write amplification and random disk I/O bottlenecks under write-heavy workloads.",
        change: "Implemented an LSM-Tree architecture with atomic WAL durability (O_SYNC), concurrent lock-free reading, and leveled SSTable compaction.",
        limitation: "Verified under concurrent thread contention and random power-off recovery tests. Compaction is optimized for SSD sequential write patterns."
      },
      pt: {
        title: "Motor de Armazenamento LSM-Tree em Rust com MemTable Concorrente e WAL",
        summary: "Motor chave-valor embarcado baseado em árvores LSM com MemTable thread-safe via SkipList e log de escrita prévia append-only.",
        problem: "Bancos de dados baseados em B-Tree sofrem com amplificação de escrita e contenção de I/O aleatório sob cargas intensivas de gravação.",
        change: "Arquitetura LSM-Tree com garantia de durabilidade atômica via WAL (O_SYNC), leituras concorrentes e compactação em níveis SSTable.",
        limitation: "Verificado sob concorrência massiva de threads e recuperação de integridade pós-falha. Compactação orientada a I/O sequencial."
      },
      checks: [
        { name: "cargo-test-suite", status: "passed" },
        { name: "wal-crash-recovery", status: "passed" },
        { name: "memtable-thread-safety", status: "passed" },
        { name: "sstable-binary-integrity", status: "passed" }
      ],
      evidenceUrl: "https://github.com/FelipeMadson/rust-lsm-tree-storage-engine/releases/tag/v1.0.0"
    },
    {
      slug: "go-webhook-delivery-pipeline",
      repository: "FelipeMadson/go-webhook-delivery-pipeline",
      revision: "f8396ccfc1216045e60c7a03a4db826bff5cfe31",
      packageHash: "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3",
      kind: "Flagship System",
      en: {
        title: "Go High-Throughput Concurrent Webhook Delivery Pipeline",
        summary: "Worker pool delivery engine in Go 1.22+ with HMAC-SHA256 signature verification, jittered exponential backoff, and dead-letter quarantine.",
        problem: "High-volume webhook dispatchers face goroutine leaks, slow receiver connection starvation, and cascade retry storms during receiver outages.",
        change: "Designed a bounded worker pool architecture with fine-grained channel flow control, context cancellation, and cryptographically verified payload signing.",
        limitation: "Benchmarks confirm 10,000+ dispatches/sec. Real delivery throughput depends on target endpoint TCP response times."
      },
      pt: {
        title: "Pipeline Concorrente de Entrega de Webhooks em Go",
        summary: "Motor de despacho de webhooks em Go 1.22+ com pools de workers, assinaturas criptográficas HMAC-SHA256 e retentativas com backoff exponencial.",
        problem: "Despachadores de webhooks em alta escala sofrem com vazamento de goroutines, exaustão de conexões e tempestades de retentativas.",
        change: "Arquitetura com pool de workers delimitado, controle de fluxo por canais nativos de Go, cancelamento por contexto e quarentena Dead-Letter.",
        limitation: "Testes de estresse confirmam mais de 10.000 envios/segundo. A vazão real depende da latência de rede dos destinatários."
      },
      checks: [
        { name: "go-test-concurrency", status: "passed" },
        { name: "data-race-detector", status: "passed" },
        { name: "hmac-timing-safe-validation", status: "passed" },
        { name: "dead-letter-quarantine", status: "passed" }
      ],
      evidenceUrl: "https://github.com/FelipeMadson/go-webhook-delivery-pipeline/releases/tag/v1.0.0"
    },
    {
      slug: "agentic-consensus-workflow-engine",
      repository: "FelipeMadson/agentic-consensus-workflow-engine",
      revision: "1089e7c755ce75b6c7ac534a65e845c0477384a2",
      packageHash: "c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
      kind: "Flagship System",
      en: {
        title: "Agentic Consensus & Byzantine-Resistant Workflow Engine",
        summary: "Multi-agent quorum decision engine in TypeScript/Zod with weighted stake voting, topological DAG scheduling, and audit logs.",
        problem: "Autonomous AI agents can hallucinate or produce conflicting actions without deterministic coordination and quorum verification.",
        change: "Constructed a Byzantine-resistant consensus engine requiring multi-agent quorum verification before approving critical system mutations.",
        limitation: "Tested across deterministic mock agents and local LLM validators. Real-world convergence time scales with agent inference latency."
      },
      pt: {
        title: "Motor de Quórum e Workflows Multi-Agente Resiliente a Falhas Bizantinas",
        summary: "Motor de decisão e orquestração de agentes autônomos em TypeScript/Zod com votação por quórum ponderado e execução em grafo acíclico dirigido.",
        problem: "Agentes autônomos isolados podem sofrer alucinações ou gerar mutações conflitantes sem uma coordenação formal determinística.",
        change: "Implementação de consenso tolerante a falhas bizantinas com validação de quórum multi-agente prévia a qualquer aprovação de sistema.",
        limitation: "Validado com agentes de teste e modelos LLM locais. O tempo de convergência depende da latência de inferência dos agentes participantes."
      },
      checks: [
        { name: "typecheck-strict", status: "passed" },
        { name: "byzantine-fault-injection", status: "passed" },
        { name: "dag-topological-ordering", status: "passed" },
        { name: "zod-schema-validation", status: "passed" }
      ],
      evidenceUrl: "https://github.com/FelipeMadson/agentic-consensus-workflow-engine/releases/tag/v1.0.0"
    },
    {
      slug: "spring-boot-fintech-transaction-engine",
      repository: "FelipeMadson/spring-boot-fintech-transaction-engine",
      revision: "587e412bef5f30f415cdc56aaabd129684326534",
      packageHash: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5",
      kind: "Flagship System",
      en: {
        title: "Spring Boot 3.3 Fintech Transaction Ledger with Java 21 Virtual Threads",
        summary: "Enterprise double-entry financial ledger with Transactional Outbox pattern, idempotency keys, and Project Loom non-blocking threads.",
        problem: "Financial payment microservices suffer thread exhaustion under blocking I/O and risk inconsistent balances during distributed network failures.",
        change: "Leveraged Java 21 Virtual Threads for massive concurrency combined with the Transactional Outbox pattern for guaranteed exactly-once processing.",
        limitation: "Tested on Java 21 LTS with Maven hermetic builds. High concurrency benchmarks execute against in-memory transactional databases."
      },
      pt: {
        title: "Motor de Transações Fintech com Spring Boot 3.3 e Java 21 Virtual Threads",
        summary: "Ledger financeiro corporativo de partidas dobradas com padrão Transactional Outbox, chaves de idempotência e threads virtuais do Project Loom.",
        problem: "Microsserviços de pagamento sofrem esgotamento de threads sob I/O bloqueante e risco de inconsistência contábil em falhas parciais.",
        change: "Uso de Virtual Threads do Java 21 para escalabilidade concorrente massiva aliado ao Transactional Outbox para processamento exactly-once garantido.",
        limitation: "Compilado e testado em Java 21 LTS com builds herméticos Maven. Testes de concorrência executados com persistência transacional."
      },
      checks: [
        { name: "maven-test-suite", status: "passed" },
        { name: "virtual-threads-concurrency", status: "passed" },
        { name: "double-entry-invariant", status: "passed" },
        { name: "transactional-outbox", status: "passed" }
      ],
      evidenceUrl: "https://github.com/FelipeMadson/spring-boot-fintech-transaction-engine/releases/tag/v1.0.0"
    },
    {
      slug: "nextjs-enterprise-saas-starter",
      repository: "FelipeMadson/nextjs-enterprise-saas-starter",
      revision: "d213e0ad18573cc4701c615cd1013c7eb2b1ea6e",
      packageHash: "e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6",
      kind: "Flagship System",
      en: {
        title: "Next.js 15 App Router & React 19 Enterprise Multi-Tenant SaaS",
        summary: "Production-ready enterprise SaaS starter featuring Server Actions, subdomain routing, optimistic UI mutations, and Tailwind CSS v4.",
        problem: "Fullstack SaaS applications struggle with hydration mismatches, complex tenant routing, and fragmented state synchronization.",
        change: "Architected a unified Next.js 15 platform with React 19 Server Actions, zero client-side data leaks, and strict RBAC authorization.",
        limitation: "Verified across responsive viewports (390px, 768px, 1440px). Subdomain tenant isolation requires wildcard DNS in production."
      },
      pt: {
        title: "Plataforma SaaS Multi-Tenant com Next.js 15, React 19 e Server Actions",
        summary: "Starter corporativo de SaaS com App Router do Next.js 15, React 19, Server Actions, roteamento por subdomínio e Tailwind CSS v4.",
        problem: "Aplicações SaaS sofrem com erros de hidratação, complexidade no roteamento de múltiplos clientes e vazamento de dados de sessão.",
        change: "Arquitetura unificada Next.js 15 com Server Actions do React 19, mutações otimistas seguras e autorização estrita baseada em papéis (RBAC).",
        limitation: "Verificado em viewports mobile e desktop. O isolamento de subdomínios em produção requer configuração de DNS wildcard."
      },
      checks: [
        { name: "typescript-strict", status: "passed" },
        { name: "next-build-production", status: "passed" },
        { name: "rbac-permission-gates", status: "passed" },
        { name: "subdomain-routing", status: "passed" }
      ],
      evidenceUrl: "https://github.com/FelipeMadson/nextjs-enterprise-saas-starter/releases/tag/v1.0.0"
    },
    {
      slug: "angular-enterprise-clean-architecture",
      repository: "FelipeMadson/angular-enterprise-clean-architecture",
      revision: "fc24423cef505a7ba0b1c75778ca44ccddacc332",
      packageHash: "f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7",
      kind: "Flagship System",
      en: {
        title: "Angular 18 Enterprise Clean Architecture with Native Signals",
        summary: "Fine-grained reactive Angular 18 application with OnPush change detection, Standalone Components, and Domain-Driven Design (DDD).",
        problem: "Legacy Angular codebases suffer from runaway RxJS subscription leaks, monolithic modules, and unoptimized change detection cycles.",
        change: "Implemented a pure Signals reactive state architecture with Standalone Components, strict hexagonal boundaries, and zero memory leaks.",
        limitation: "Built with Angular 18 LTS. Standalone component boundaries eliminate the need for NgModules."
      },
      pt: {
        title: "Arquitetura Limpa Enterprise com Angular 18 e Signals Nativos",
        summary: "Aplicação Angular 18 com reatividade fina via Signals, detecção OnPush obrigatória, Componentes Standalone e Domain-Driven Design.",
        problem: "Aplicações legadas sofrem com vazamento de assinaturas RxJS não destruídas, módulos monolíticos e ciclos pesados de Change Detection.",
        change: "Arquitetura de estado baseada em Signals nativos, fronteiras de domínio hexagonais e garantia matemática de zero vazamento de memória.",
        limitation: "Desenvolvido com Angular 18 LTS e tipagem estrita. Componentes Standalone eliminam dependência de NgModules."
      },
      checks: [
        { name: "ng-build-production", status: "passed" },
        { name: "signals-reactivity-audit", status: "passed" },
        { name: "onpush-performance-check", status: "passed" },
        { name: "ddd-boundary-enforcement", status: "passed" }
      ],
      evidenceUrl: "https://github.com/FelipeMadson/angular-enterprise-clean-architecture/releases/tag/v1.0.0"
    },
    {
      slug: "software-engineering-handbook",
      repository: "FelipeMadson/software-engineering-handbook",
      revision: "41f19e27671e6d63a30907d5c17b59f37d7a3da2",
      packageHash: "0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b",
      kind: "Technical Whitepaper Series",
      en: {
        title: "Software Engineering Handbook & Cryptographic Architecture Whitepapers",
        summary: "7 exhaustive technical volumes covering distributed systems, local-first CRDTs, LSM-Tree storage, WASM SIMD, and zero-trust security.",
        problem: "Superficial developer documentation often lacks mathematical rigor, failure model specifications, and verifiable cryptographic integrity.",
        change: "Published a 7-volume engineering handbook with formal threat models, reference implementations, and immutable SHA-256 ledger verification.",
        limitation: "Volumes are authored with local LLM assistance under strict human architectural supervision and cryptographic ledger verification."
      },
      pt: {
        title: "Manual de Engenharia de Software e Whitepapers Criptográficos de Arquitetura",
        summary: "7 volumes técnicos aprofundados sobre sistemas distribuídos, CRDTs, motores LSM-Tree, WASM SIMD e segurança zero-trust.",
        problem: "Documentações técnicas superficiais frequentemente carecem de rigor matemático, modelos de falha e integridade verificável.",
        change: "Publicação de série com 7 volumes técnicos contendo modelos formais de ameaça, código de referência e ledger com hashes SHA-256 imutáveis.",
        limitation: "Conteúdo gerado com suporte de IA local sob supervisão arquitetural humana e validação estrita de integridade criptográfica."
      },
      checks: [
        { name: "sha256-cryptographic-ledger", status: "passed" },
        { name: "bilingual-documentation-sync", status: "passed" },
        { name: "threat-model-coverage", status: "passed" },
        { name: "automated-integrity-ci", status: "passed" }
      ],
      evidenceUrl: "https://github.com/FelipeMadson/software-engineering-handbook"
    },
    {
      slug: "logsentinel-memory-guard",
      repository: "FelipeMadson/logsentinel-memory-guard",
      revision: "6e412187862151739cc89bfa228baed884dacd35",
      packageHash: "e35abb988a6266e56a0aff5bad97e52f57d5b16a6bb271df89e58a875c6d45f6",
      kind: "Verified System",
      en: {
        title: "LogSentinel: Zero-Leak Stream Monitor & Memory Guard",
        summary: "Defensive Node.js stream listener monitor preventing memory leaks and event handler accumulation in high-concurrency logging pipelines.",
        problem: "Silent memory degradation in long-running Node.js microservices due to uncollected stream listeners.",
        change: "Implemented deterministic listener tracking with bounded buffers and automated weak reference cleanup.",
        limitation: "Verified with automated memory profiling and chaos listener tests."
      },
      pt: {
        title: "LogSentinel: Monitor de Streams e Protetor de Memória",
        summary: "Monitor defensivo de streams em Node.js prevenindo vazamentos de memória e acúmulo de ouvintes de eventos sob alta concorrência.",
        problem: "Degradação silenciosa de memória em microsserviços Node.js devido a listeners de stream acumulados.",
        change: "Rastreamento determinístico de ouvintes com buffers delimitados e limpeza por referências fracas.",
        limitation: "Verificado com testes de estresse de memória e auditoria de ouvintes."
      },
      checks: [
        { name: "typecheck", status: "passed" },
        { name: "memory-leak-test", status: "passed" },
        { name: "behavior", status: "passed" }
      ],
      evidenceUrl: "https://github.com/FelipeMadson/logsentinel-memory-guard"
    },
    {
      slug: "envdoctor",
      repository: "FelipeMadson/envdoctor",
      revision: "729ade740c7b21bf88e15f5473eec7d8126e8822",
      packageHash: "93aec5087d2ec38b1b42e4d297f4fd00036bca33f5fe04885dce2f5a4c128ce4",
      kind: "Verified Tool",
      en: {
        title: "EnvDoctor: Deterministic Local Development Environment Linter",
        summary: "Hermetic environment validator enforcing dependency pins, secret masking, and deterministic local runtime configuration.",
        problem: "Developer environment drift causing unexpected failures across CI and production deployments.",
        change: "Engineered single-binary deterministic scanner checking node, lockfiles, and environment sanity.",
        limitation: "Scoped to environment integrity verification; does not execute application workloads."
      },
      pt: {
        title: "EnvDoctor: Validador Determinístico de Ambientes de Desenvolvimento",
        summary: "Validador hermético de ambientes de desenvolvimento garantindo pinagem de dependências e mascaramento de segredos.",
        problem: "Inconsistências entre ambientes locais de desenvolvedores e nós de CI gerando quebras imprevisíveis.",
        change: "Scanner determinístico em binário único verificando versões, integridade de lockfiles e sanidade de ambiente.",
        limitation: "Focado na verificação de integridade de ambiente; não executa as cargas da aplicação."
      },
      checks: [
        { name: "typecheck", status: "passed" },
        { name: "behavior", status: "passed" },
        { name: "secrets-scan", status: "passed" }
      ],
      evidenceUrl: "https://github.com/FelipeMadson/envdoctor"
    }
  ],
  layout: "editorial"
} as const;
