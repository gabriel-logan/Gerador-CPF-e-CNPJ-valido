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

| Benchmark                          | Iterações  |  ns/op | B/op | allocs/op |
| ---------------------------------- | ---------: | -----: | ---: | --------: |
| BenchmarkGenerateCPF-8             |   25573958 |  42.26 |    0 |         0 |
| BenchmarkGenerateCPF-8             |   27712837 |  42.21 |    0 |         0 |
| BenchmarkGenerateCPF-8             |   28127764 |  41.98 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |   20446154 |  57.12 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |   20325696 |  57.89 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |   20975469 |  57.35 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |   19888783 |  58.68 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |   20924528 |  58.09 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |   20742216 |  57.60 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |   11286368 |  106.2 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |   11705794 |  105.7 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |   11656526 |  102.5 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |   24554635 |  46.79 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |   25501915 |  47.55 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |   25443499 |  47.51 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |   12202300 |  165.9 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |   12483753 |  96.50 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |   12226678 |  96.99 |    0 |         0 |
| BenchmarkCPFBytesToString-8        |   45134610 |  41.27 |   16 |         1 |
| BenchmarkCPFBytesToString-8        |   50436961 |  24.01 |   16 |         1 |
| BenchmarkCPFBytesToString-8        |   42512457 |  23.66 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |   52650078 |  23.49 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |   43453747 |  24.74 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |   40678838 |  25.26 |   16 |         1 |
| BenchmarkCPFBytesToUnsafeString-8  | 1000000000 |  1.008 |    0 |         0 |
| BenchmarkCPFBytesToUnsafeString-8  | 1000000000 | 0.9690 |    0 |         0 |
| BenchmarkCPFBytesToUnsafeString-8  | 1000000000 | 0.9775 |    0 |         0 |
| BenchmarkCNPJBytesToUnsafeString-8 | 1000000000 | 0.9002 |    0 |         0 |
| BenchmarkCNPJBytesToUnsafeString-8 | 1000000000 | 0.9082 |    0 |         0 |
| BenchmarkCNPJBytesToUnsafeString-8 | 1000000000 | 0.8969 |    0 |         0 |

```bash
PASS
ok  	github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj	39.746s
```
