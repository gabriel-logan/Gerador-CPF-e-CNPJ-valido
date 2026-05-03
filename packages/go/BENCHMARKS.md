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
| BenchmarkGenerateCPF-8             |   24062221 |  43.38 |    0 |         0 |
| BenchmarkGenerateCPF-8             |   25706096 |  44.39 |    0 |         0 |
| BenchmarkGenerateCPF-8             |   26732911 |  44.07 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |   18329382 |  59.76 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |   20321974 |  62.21 |    0 |         0 |
| BenchmarkGenerateCNPJDefault-8     |   21056077 |  60.45 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |   19990610 |  59.63 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |   20088080 |  59.89 |    0 |         0 |
| BenchmarkGenerateCNPJV1ByVersion-8 |   19114850 |  59.85 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |   11071507 |  107.8 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |   10778985 |  105.6 |    0 |         0 |
| BenchmarkGenerateCNPJV2ByVersion-8 |   10712264 |  107.9 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |   24323570 |  47.87 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |   24496603 |  73.53 |    0 |         0 |
| BenchmarkGenerateCNPJV1-8          |   24925220 |  49.17 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |   11717385 |  109.2 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |   11642479 |  115.0 |    0 |         0 |
| BenchmarkGenerateCNPJV2-8          |   10854007 |  101.9 |    0 |         0 |
| BenchmarkCPFBytesToString-8        |   45394596 |  25.02 |   16 |         1 |
| BenchmarkCPFBytesToString-8        |   41367046 |  25.26 |   16 |         1 |
| BenchmarkCPFBytesToString-8        |   42779102 |  25.66 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |   43679685 |  24.90 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |   39898816 |  25.29 |   16 |         1 |
| BenchmarkCNPJBytesToString-8       |   43842397 |  46.27 |   16 |         1 |
| BenchmarkCPFBytesToUnsafeString-8  | 1000000000 |  1.016 |    0 |         0 |
| BenchmarkCPFBytesToUnsafeString-8  | 1000000000 |  1.902 |    0 |         0 |
| BenchmarkCPFBytesToUnsafeString-8  | 1000000000 |  1.012 |    0 |         0 |
| BenchmarkCNPJBytesToUnsafeString-8 | 1000000000 | 0.9656 |    0 |         0 |
| BenchmarkCNPJBytesToUnsafeString-8 | 1000000000 |  1.490 |    0 |         0 |
| BenchmarkCNPJBytesToUnsafeString-8 | 1000000000 | 0.9642 |    0 |         0 |

```bash
PASS
ok  	github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj	43.255s
```
