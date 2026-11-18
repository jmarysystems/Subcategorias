import { render as base } from '../crud.js';

const CONFIG = {
  "titulo": "Subcategorias",
  "tabela": "arm_subcategorias",
  "modulo": "subcategoria",
  "singular": "subcategoria",
  "ordem": "descricao",
  "filtro": "Código ou descrição",
  "colunas": [
    {
      "campo": "codigo_auxiliar",
      "rotulo": "Código auxiliar",
      "classe": "mono"
    },
    {
      "campo": "descricao",
      "rotulo": "Descrição"
    },
    {
      "campo": "categoria_id",
      "rotulo": "Categoria",
      "de": {
        "tabela": "arm_categorias",
        "rotulo": "descricao"
      }
    }
  ],
  "campos": [
    {
      "campo": "codigo_auxiliar",
      "rotulo": "Código auxiliar"
    },
    {
      "campo": "descricao",
      "rotulo": "Descrição",
      "obrigatorio": true
    },
    {
      "campo": "categoria_id",
      "rotulo": "Categoria",
      "tipo": "select",
      "obrigatorio": true,
      "de": {
        "tabela": "arm_categorias",
        "rotulo": "descricao"
      }
    }
  ]
};

export function render(raiz, ctx) {
  return base(raiz, ctx, CONFIG);
}
