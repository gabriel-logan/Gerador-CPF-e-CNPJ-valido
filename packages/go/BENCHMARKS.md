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
| BenchmarkGenerateCPF-8             | 62.41 |   16 |         1 |
| BenchmarkGenerateCPF-8             | 59.69 |   16 |         1 |
| BenchmarkGenerateCPF-8             | 59.97 |   16 |         1 |
| BenchmarkGenerateCNPJDefault-8     | 66.91 |   16 |         1 |
| BenchmarkGenerateCNPJDefault-8     | 67.76 |   16 |         1 |
| BenchmarkGenerateCNPJDefault-8     | 65.98 |   16 |         1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 65.10 |   16 |         1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 64.34 |   16 |         1 |
| BenchmarkGenerateCNPJV1ByVersion-8 | 67.19 |   16 |         1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 118.0 |   16 |         1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 118.1 |   16 |         1 |
| BenchmarkGenerateCNPJV2ByVersion-8 | 118.9 |   16 |         1 |
| BenchmarkGenerateCNPJV1-8          | 64.69 |   16 |         1 |
| BenchmarkGenerateCNPJV1-8          | 65.06 |   16 |         1 |
| BenchmarkGenerateCNPJV1-8          | 66.96 |   16 |         1 |
| BenchmarkGenerateCNPJV2-8          | 117.5 |   16 |         1 |
| BenchmarkGenerateCNPJV2-8          | 119.0 |   16 |         1 |
| BenchmarkGenerateCNPJV2-8          | 115.7 |   16 |         1 |
| BenchmarkBytesToString-8           | 26.30 |   16 |         1 |
| BenchmarkBytesToString-8           | 27.42 |   16 |         1 |
| BenchmarkBytesToString-8           | 25.11 |   16 |         1 |
| BenchmarkToString-8                | 24.97 |   16 |         1 |
| BenchmarkToString-8                | 25.83 |   16 |         1 |
| BenchmarkToString-8                | 26.39 |   16 |         1 |

```bash
PASS
ok  	github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj	31.231s
```
