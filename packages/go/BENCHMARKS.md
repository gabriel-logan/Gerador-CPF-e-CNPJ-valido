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
| BenchmarkGenerateCPF-8             |   24650571 |  42.62 |    0 |         0 |
| BenchmarkGenerateCPF-8             |   27627451 |  42.04 |    0 |         0 |
| BenchmarkGenerateCPF-8             |   27210181 |  42.02 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |   11587345 |  102.3 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |   11576164 |  104.9 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |   11282385 |  102.9 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |   20011533 |  58.18 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |   19894837 |  61.74 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |   20314668 |  58.58 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |   11017000 |  103.1 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |   10820197 |  104.1 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |   10708131 |  103.1 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |   24503614 |  46.75 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |   24857425 |  67.22 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |   25259823 |  47.78 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |   11980585 |  98.38 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |   12125487 |  98.70 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |   12085605 |  97.97 |    0 |         0 |
| BenchmarkCPFBytesToString-8        |   51526366 |  23.92 |   16 |         1 |
| BenchmarkCPFBytesToString-8        |   45488023 |  24.10 |   16 |         1 |
| BenchmarkCPFBytesToString-8        |   39822495 |  26.06 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |   50301717 |  22.93 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |   44485856 |  22.81 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |   46062145 |  22.74 |   16 |         1 |
| BenchmarkCPFBytesToUnsafeString-8  | 1000000000 |  1.070 |    0 |         0 |
| BenchmarkCPFBytesToUnsafeString-8  | 1000000000 |  1.735 |    0 |         0 |
| BenchmarkCPFBytesToUnsafeString-8  | 1000000000 | 0.9807 |    0 |         0 |
| BenchmarkCNPJBytesToUnsafeString-8 | 1000000000 | 0.9178 |    0 |         0 |
| BenchmarkCNPJBytesToUnsafeString-8 | 1000000000 | 0.8988 |    0 |         0 |
| BenchmarkCNPJBytesToUnsafeString-8 | 1000000000 | 0.8915 |    0 |         0 |

```bash
PASS
ok  	github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj	41.070s
```
