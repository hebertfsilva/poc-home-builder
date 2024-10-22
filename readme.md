
# Configuração do Projeto

Este documento explica a lógica por trás da configuração dos arquivos `cellsStructure.json` e `config.json`, além de como os valores em arrays são influenciados pelos breakpoints definidos no projeto.

## Estrutura do Arquivo `config.json`

O arquivo `config.json` é responsável por definir a configuração do contêiner dinâmico e dos blocos de layout da aplicação. Ele contém duas seções principais:

- **dynamicContainer**: Define o tipo de contêiner, o tamanho principal do bloco e o tamanho de proporção, que pode ser um array de valores que se ajustam com base nos breakpoints.
  
  ```json
  {
    "type": "default",
    "mainBlockSize": "60%",
    "proportionSize": ["60px", "100px"]
  }
  ```

- **homeBlocks**: Lista de blocos de layout, cada um com um `variant`, número de `rows` e `columns`.

  ```json
  [
    {
      "variant": "block-a",
      "rows": 6,
      "columns": 6
    },
    {
      "variant": "block-b",
      "rows": 4,
      "columns": 6
    }
  ]
  ```

## Estrutura do Arquivo `cellsStructure.json`

O arquivo `cellsStructure.json` define a estrutura dos `cells` para cada bloco de layout. Cada chave no objeto representa um `variant` de bloco, e o valor é um array de objetos que especificam as proporções e o conteúdo de cada célula.

```json
{
  "block-a": [
    {
      "proportions": ["2x2"],
      "content": "PERFIL"
    },
    {
      "proportions": ["4x2"],
      "content": "ATALHOS RÁPIDOS"
    }
  ],
  "block-b": [
    {
      "proportions": ["full"],
      "content": "AGENDA"
    }
  ]
}
```

## Breakpoints e Arrays de Proporção

Os valores dentro dos arrays, como `proportionSize` no `config.json` e `proportions` no `cellsStructure.json`, são ajustados com base nos breakpoints definidos no projeto. Os breakpoints são especificados no arquivo `breakpoints.ts` e são utilizados para adaptar o layout a diferentes tamanhos de tela.

### Breakpoints Definidos

Os breakpoints são definidos na seguinte ordem:

```typescript
const breakpointVariants: Breakpoints[] = [
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
];
```

Cada valor no array de proporção corresponde a um breakpoint, permitindo que o layout se ajuste dinamicamente conforme o tamanho da tela muda.

## Considerações Finais

Ao configurar os arquivos `cellsStructure.json` e `config.json`, é importante garantir que os valores nos arrays de proporção estejam alinhados com os breakpoints definidos. Isso assegura que o layout seja responsivo e se adapte corretamente a diferentes dispositivos.

Para mais detalhes sobre a implementação dos breakpoints, consulte o arquivo `breakpoints.ts`:
