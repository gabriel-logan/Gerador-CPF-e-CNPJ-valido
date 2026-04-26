# Benchmarks

Resultados gerados em 2026-04-26 com:

```bash
go test ./cpfandcnpj -bench=. -benchmem -run=^$ -count=5
```

Ambiente:

| Campo | Valor |
| --- | --- |
| OS | linux |
| Arquitetura | amd64 |
| CPU | Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz |
| Pacote | `github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj` |

## Média das 5 execuções

| Benchmark | Média ns/op | B/op | allocs/op |
| --- | ---: | ---: | ---: |
| BenchmarkGenerateCPF-8 | 221.34 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 292.56 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 350.64 | 16 | 1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 418.90 | 40 | 2 |
| BenchmarkGenerateCNPJV1-8 | 332.76 | 16 | 1 |
| BenchmarkGenerateCNPJV2-8 | 444.88 | 40 | 2 |
| BenchmarkBytesToString-8 | 25.04 | 16 | 1 |
| BenchmarkToString-8 | 26.18 | 16 | 1 |

## Execuções

| Benchmark | Execução | Iterações | ns/op | B/op | allocs/op |
| --- | ---: | ---: | ---: | ---: | ---: |
| BenchmarkGenerateCPF-8 | 1 | 5583060 | 202.0 | 16 | 1 |
| BenchmarkGenerateCPF-8 | 2 | 4564129 | 243.6 | 16 | 1 |
| BenchmarkGenerateCPF-8 | 3 | 5706310 | 204.0 | 16 | 1 |
| BenchmarkGenerateCPF-8 | 4 | 5384940 | 203.0 | 16 | 1 |
| BenchmarkGenerateCPF-8 | 5 | 4344998 | 254.1 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 1 | 4065513 | 297.5 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 2 | 3376868 | 306.3 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 3 | 3846736 | 293.2 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 4 | 4321914 | 272.6 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 5 | 3839794 | 293.2 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 1 | 4479303 | 271.7 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 2 | 4592492 | 273.8 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 3 | 2523912 | 628.8 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 4 | 4050691 | 304.4 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 5 | 4254267 | 274.5 | 16 | 1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 1 | 2720926 | 434.1 | 40 | 2 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 2 | 3031599 | 383.9 | 40 | 2 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 3 | 3061839 | 407.1 | 40 | 2 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 4 | 2585452 | 483.6 | 40 | 2 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 5 | 2786672 | 385.8 | 40 | 2 |
| BenchmarkGenerateCNPJV1-8 | 1 | 4548360 | 279.8 | 16 | 1 |
| BenchmarkGenerateCNPJV1-8 | 2 | 4255249 | 306.3 | 16 | 1 |
| BenchmarkGenerateCNPJV1-8 | 3 | 4541456 | 265.4 | 16 | 1 |
| BenchmarkGenerateCNPJV1-8 | 4 | 3898414 | 267.4 | 16 | 1 |
| BenchmarkGenerateCNPJV1-8 | 5 | 2371855 | 544.9 | 16 | 1 |
| BenchmarkGenerateCNPJV2-8 | 1 | 3090349 | 410.2 | 40 | 2 |
| BenchmarkGenerateCNPJV2-8 | 2 | 2859590 | 405.0 | 40 | 2 |
| BenchmarkGenerateCNPJV2-8 | 3 | 2990936 | 395.2 | 40 | 2 |
| BenchmarkGenerateCNPJV2-8 | 4 | 2820640 | 604.1 | 40 | 2 |
| BenchmarkGenerateCNPJV2-8 | 5 | 3139096 | 409.9 | 40 | 2 |
| BenchmarkBytesToString-8 | 1 | 45877087 | 27.01 | 16 | 1 |
| BenchmarkBytesToString-8 | 2 | 43450448 | 23.03 | 16 | 1 |
| BenchmarkBytesToString-8 | 3 | 46109176 | 24.81 | 16 | 1 |
| BenchmarkBytesToString-8 | 4 | 42827182 | 24.95 | 16 | 1 |
| BenchmarkBytesToString-8 | 5 | 41230676 | 25.38 | 16 | 1 |
| BenchmarkToString-8 | 1 | 48462022 | 29.61 | 16 | 1 |
| BenchmarkToString-8 | 2 | 39766407 | 26.36 | 16 | 1 |
| BenchmarkToString-8 | 3 | 41430418 | 26.58 | 16 | 1 |
| BenchmarkToString-8 | 4 | 43347128 | 23.84 | 16 | 1 |
| BenchmarkToString-8 | 5 | 47984113 | 24.52 | 16 | 1 |
