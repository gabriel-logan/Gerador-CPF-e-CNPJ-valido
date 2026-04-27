# Benchmarks

Resultados gerados com:

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

## Base - média das 5 execuções

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

## Após otimização - média das 5 execuções

| Benchmark | Base ns/op | Otimizado ns/op | Melhora | B/op | allocs/op |
| --- | ---: | ---: | ---: | ---: | ---: |
| BenchmarkGenerateCPF-8 | 221.34 | 64.56 | 70.8% | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 292.56 | 66.56 | 77.2% | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 350.64 | 67.25 | 80.8% | 16 | 1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 418.90 | 144.50 | 65.5% | 16 | 1 |
| BenchmarkGenerateCNPJV1-8 | 332.76 | 77.65 | 76.7% | 16 | 1 |
| BenchmarkGenerateCNPJV2-8 | 444.88 | 130.24 | 70.7% | 16 | 1 |
| BenchmarkBytesToString-8 | 25.04 | 37.91 | -51.4% | 16 | 1 |
| BenchmarkToString-8 | 26.18 | 28.38 | -8.4% | 16 | 1 |

Observação: os métodos de conversão para string não foram otimizados com
`unsafe`, para manter a conversão segura e sem compartilhar memória mutável com
a string retornada. A variação nesses benchmarks é ruído da execução.

## Base - execuções

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

## Após otimização - execuções

| Benchmark | Execução | Iterações | ns/op | B/op | allocs/op |
| --- | ---: | ---: | ---: | ---: | ---: |
| BenchmarkGenerateCPF-8 | 1 | 17373508 | 66.81 | 16 | 1 |
| BenchmarkGenerateCPF-8 | 2 | 15845446 | 68.26 | 16 | 1 |
| BenchmarkGenerateCPF-8 | 3 | 18797071 | 60.34 | 16 | 1 |
| BenchmarkGenerateCPF-8 | 4 | 19691618 | 62.05 | 16 | 1 |
| BenchmarkGenerateCPF-8 | 5 | 16352292 | 65.36 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 1 | 17230786 | 67.48 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 2 | 18298646 | 63.85 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 3 | 16137746 | 72.50 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 4 | 16761456 | 63.42 | 16 | 1 |
| BenchmarkGenerateCNPJDefault-8 | 5 | 17705030 | 65.53 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 1 | 16181727 | 70.37 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 2 | 16646970 | 63.80 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 3 | 18723566 | 63.42 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 4 | 18767941 | 70.23 | 16 | 1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 5 | 14888131 | 68.44 | 16 | 1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 1 | 9703011 | 112.8 | 16 | 1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 2 | 10616416 | 113.5 | 16 | 1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 3 | 9745548 | 121.8 | 16 | 1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 4 | 10744707 | 130.1 | 16 | 1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 5 | 8544224 | 244.3 | 16 | 1 |
| BenchmarkGenerateCNPJV1-8 | 1 | 14916468 | 85.21 | 16 | 1 |
| BenchmarkGenerateCNPJV1-8 | 2 | 14853598 | 75.86 | 16 | 1 |
| BenchmarkGenerateCNPJV1-8 | 3 | 16575472 | 61.86 | 16 | 1 |
| BenchmarkGenerateCNPJV1-8 | 4 | 18132255 | 61.30 | 16 | 1 |
| BenchmarkGenerateCNPJV1-8 | 5 | 19166803 | 104.0 | 16 | 1 |
| BenchmarkGenerateCNPJV2-8 | 1 | 10843735 | 109.3 | 16 | 1 |
| BenchmarkGenerateCNPJV2-8 | 2 | 10071567 | 137.3 | 16 | 1 |
| BenchmarkGenerateCNPJV2-8 | 3 | 10918392 | 131.7 | 16 | 1 |
| BenchmarkGenerateCNPJV2-8 | 4 | 8699870 | 127.8 | 16 | 1 |
| BenchmarkGenerateCNPJV2-8 | 5 | 8114727 | 145.1 | 16 | 1 |
| BenchmarkBytesToString-8 | 1 | 50287428 | 28.70 | 16 | 1 |
| BenchmarkBytesToString-8 | 2 | 32572279 | 42.89 | 16 | 1 |
| BenchmarkBytesToString-8 | 3 | 33223318 | 33.56 | 16 | 1 |
| BenchmarkBytesToString-8 | 4 | 26782064 | 41.09 | 16 | 1 |
| BenchmarkBytesToString-8 | 5 | 26475909 | 43.32 | 16 | 1 |
| BenchmarkToString-8 | 1 | 49578856 | 26.04 | 16 | 1 |
| BenchmarkToString-8 | 2 | 36082569 | 28.84 | 16 | 1 |
| BenchmarkToString-8 | 3 | 41258310 | 25.59 | 16 | 1 |
| BenchmarkToString-8 | 4 | 49903590 | 25.99 | 16 | 1 |
| BenchmarkToString-8 | 5 | 36219688 | 35.44 | 16 | 1 |
