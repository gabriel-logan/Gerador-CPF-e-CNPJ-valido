#ifndef CNPJ_GENERATOR_H
#define CNPJ_GENERATOR_H

#ifdef __cplusplus
extern "C" {
#endif

#define CNPJV1 "v1"
#define CNPJV2 "v2"

void GenerateCNPJ(char cnpj[15], const char *cnpjVersion);
void GenerateCNPJV1(char cnpj[15]);
void GenerateCNPJV2(char cnpj[15]);

#ifdef __cplusplus
}
#endif

#endif
