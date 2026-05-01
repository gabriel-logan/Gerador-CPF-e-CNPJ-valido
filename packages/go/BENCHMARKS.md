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

| Benchmark                          | ns/op | B/op | allocs/op |
| ---------------------------------- | ----: | ---: | --------: |
| BenchmarkGenerateCPF-8             | 45.05 |    0 |         0 |
| BenchmarkGenerateCPF-8             | 44.50 |    0 |         0 |
| BenchmarkGenerateCPF-8             | 43.01 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     | 58.86 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     | 58.73 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     | 61.00 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 59.31 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 59.89 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 59.46 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 109.0 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 108.4 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 107.6 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          | 49.60 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          | 84.07 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          | 48.25 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          | 99.79 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          | 102.2 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          | 98.91 |    0 |         0 |
| BenchmarkCPFBytesToString-8        | 27.21 |   16 |         1 |
| BenchmarkCPFBytesToString-8        | 26.20 |   16 |         1 |
| BenchmarkCPFBytesToString-8        | 26.76 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       | 24.96 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       | 26.47 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       | 27.10 |   16 |         1 |

```bash
PASS
ok  	github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj	33.275s
```
