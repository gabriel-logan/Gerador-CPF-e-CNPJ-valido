# Benchmarks

Resultados gerados com:

```bash
go test ./cpfandcnpj -bench=. -benchmem -run=^$ -count=3
```

## Ambiente

| Campo       | Valor                                                                       |
| ----------- | --------------------------------------------------------------------------- |
| OS          | linux                                                                       |
| Arquitetura | amd64                                                                       |
| CPU         | Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz                                    |
| RAM         | 12 GB DDR4 1400 MHz                                                         |
| Pacote      | `github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj` |

## Resultados

| Benchmark                          | Iterações | ns/op | B/op | allocs/op |
| ---------------------------------- | --------: | ----: | ---: | --------: |
| BenchmarkGenerateCPF-8             |  23673750 | 45.05 |    0 |         0 |
| BenchmarkGenerateCPF-8             |  22673230 | 44.50 |    0 |         0 |
| BenchmarkGenerateCPF-8             |  26822426 | 43.01 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |  17747131 | 58.86 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |  18645051 | 58.73 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |  20321916 | 61.00 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |  19912101 | 59.31 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |  20390506 | 59.89 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |  19124516 | 59.46 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |  11082817 | 109.0 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |  11091562 | 108.4 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |  11043366 | 107.6 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |  24004982 | 49.60 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |  24259936 | 84.07 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |  23400258 | 48.25 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |  11720666 | 99.79 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |  12002466 | 102.2 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |  11942307 | 98.91 |    0 |         0 |
| BenchmarkCPFBytesToString-8        |  41478504 | 27.21 |   16 |         1 |
| BenchmarkCPFBytesToString-8        |  49416784 | 26.20 |   16 |         1 |
| BenchmarkCPFBytesToString-8        |  41092554 | 26.76 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |  48425772 | 24.96 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |  48462888 | 26.47 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |  45225687 | 27.10 |   16 |         1 |

```bash
PASS
ok  	github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj	33.275s
```
