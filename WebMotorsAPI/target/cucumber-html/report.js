$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetAPIWebMotors.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Autor: mandy.thiago2511@gmail.com"
    }
  ],
  "line": 4,
  "name": "Valida buscas realizadas",
  "description": "Eu como usuario\nQuero validar as buscas de marca, modelo, versão e estoque",
  "id": "valida-buscas-realizadas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@GETS"
    }
  ]
});
formatter.before({
  "duration": 188900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "API para recuperar marcas cadastradas na webmotors",
  "description": "",
  "id": "valida-buscas-realizadas;api-para-recuperar-marcas-cadastradas-na-webmotors",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@CT01"
    },
    {
      "line": 8,
      "name": "@POSITIVO"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Make\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "o Response Code me retorna status \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "valido o Schema \"schemaMarcas\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Make",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Make executado com sucesso");
formatter.result({
  "duration": 65812700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 200 executado com sucesso");
formatter.result({
  "duration": 234200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaMarcas",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("[{\"ID\":1,\"Name\":\"Chevrolet\"},{\"ID\":2,\"Name\":\"Honda\"},{\"ID\":3,\"Name\":\"Ford\"}]");
formatter.result({
  "duration": 2231528600,
  "status": "passed"
});
formatter.after({
  "duration": 45600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "API para recuperar modelos cadastradas na webmotors",
  "description": "",
  "id": "valida-buscas-realizadas;api-para-recuperar-modelos-cadastradas-na-webmotors",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 14,
      "name": "@CT02"
    },
    {
      "line": 14,
      "name": "@POSITIVO"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que envio um GET para o endPoint \u003cendPoint\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "envio o parâmetro \u003cParametro\u003e com valor \u003cValorParametro\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o Response Code me retorna status \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "valido o Schema \u003cSchema\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "valida-buscas-realizadas;api-para-recuperar-modelos-cadastradas-na-webmotors;",
  "rows": [
    {
      "cells": [
        "endPoint",
        "Parametro",
        "ValorParametro",
        "Schema"
      ],
      "line": 22,
      "id": "valida-buscas-realizadas;api-para-recuperar-modelos-cadastradas-na-webmotors;;1"
    },
    {
      "cells": [
        "\"/api/OnlineChallenge/Model\"",
        "\"MakeID\"",
        "\"2\"",
        "\"schemaModelos\""
      ],
      "line": 23,
      "id": "valida-buscas-realizadas;api-para-recuperar-modelos-cadastradas-na-webmotors;;2"
    },
    {
      "cells": [
        "\"/api/OnlineChallenge/Version\"",
        "\"ModelID\"",
        "\"4\"",
        "\"schemaVersoes\""
      ],
      "line": 24,
      "id": "valida-buscas-realizadas;api-para-recuperar-modelos-cadastradas-na-webmotors;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 124400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "API para recuperar modelos cadastradas na webmotors",
  "description": "",
  "id": "valida-buscas-realizadas;api-para-recuperar-modelos-cadastradas-na-webmotors;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 14,
      "name": "@CT02"
    },
    {
      "line": 14,
      "name": "@POSITIVO"
    },
    {
      "line": 3,
      "name": "@GETS"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Model\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "envio o parâmetro \"MakeID\" com valor \"2\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o Response Code me retorna status \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "valido o Schema \"schemaModelos\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Model",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Model executado com sucesso");
formatter.result({
  "duration": 322100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MakeID",
      "offset": 19
    },
    {
      "val": "2",
      "offset": 38
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro MakeID com valor 2");
formatter.result({
  "duration": 308100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 200 executado com sucesso");
formatter.result({
  "duration": 598600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaModelos",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("[{\"MakeID\":2,\"ID\":4,\"Name\":\"City\"},{\"MakeID\":2,\"ID\":5,\"Name\":\"CRV\"},{\"MakeID\":2,\"ID\":6,\"Name\":\"Fit\"}]");
formatter.result({
  "duration": 453511200,
  "status": "passed"
});
formatter.after({
  "duration": 39900,
  "status": "passed"
});
formatter.before({
  "duration": 46700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "API para recuperar modelos cadastradas na webmotors",
  "description": "",
  "id": "valida-buscas-realizadas;api-para-recuperar-modelos-cadastradas-na-webmotors;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 14,
      "name": "@CT02"
    },
    {
      "line": 14,
      "name": "@POSITIVO"
    },
    {
      "line": 3,
      "name": "@GETS"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Version\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "envio o parâmetro \"ModelID\" com valor \"4\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o Response Code me retorna status \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "valido o Schema \"schemaVersoes\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Version",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Version executado com sucesso");
formatter.result({
  "duration": 329000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ModelID",
      "offset": 19
    },
    {
      "val": "4",
      "offset": 39
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro ModelID com valor 4");
formatter.result({
  "duration": 308400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 200 executado com sucesso");
formatter.result({
  "duration": 257000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaVersoes",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("[{\"ModelID\":4,\"ID\":21,\"Name\":\"1.5 DX 16V FLEX 4P AUTOMÁTICO\"},{\"ModelID\":4,\"ID\":22,\"Name\":\"1.5 LX 16V FLEX 4P MANUAL\"},{\"ModelID\":4,\"ID\":24,\"Name\":\"1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO\"},{\"ModelID\":4,\"ID\":25,\"Name\":\"1.0 MPI EL 8V FLEX 4P MANUAL\"}]");
formatter.result({
  "duration": 12489948400,
  "status": "passed"
});
formatter.after({
  "duration": 42000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "API para recuperar paginas dos veiculos cadastrados na webmotors",
  "description": "",
  "id": "valida-buscas-realizadas;api-para-recuperar-paginas-dos-veiculos-cadastrados-na-webmotors",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 26,
      "name": "@CT04"
    },
    {
      "line": 26,
      "name": "@POSITIVO"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Vehicles\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "envio o parâmetro \"Page\" com valor \u003cpagina\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "o Response Code me retorna status \u003cstatusCode\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "valido a quantidade de veiculos \u003cquantidade\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "valido o Schema \"schemaPaginas\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "valida-buscas-realizadas;api-para-recuperar-paginas-dos-veiculos-cadastrados-na-webmotors;",
  "rows": [
    {
      "cells": [
        "pagina",
        "statusCode",
        "quantidade"
      ],
      "line": 35,
      "id": "valida-buscas-realizadas;api-para-recuperar-paginas-dos-veiculos-cadastrados-na-webmotors;;1"
    },
    {
      "cells": [
        "\"1\"",
        "\"200\"",
        "\"10\""
      ],
      "line": 36,
      "id": "valida-buscas-realizadas;api-para-recuperar-paginas-dos-veiculos-cadastrados-na-webmotors;;2"
    },
    {
      "cells": [
        "\"2\"",
        "\"200\"",
        "\"10\""
      ],
      "line": 37,
      "id": "valida-buscas-realizadas;api-para-recuperar-paginas-dos-veiculos-cadastrados-na-webmotors;;3"
    },
    {
      "cells": [
        "\"3\"",
        "\"200\"",
        "\"1\""
      ],
      "line": 38,
      "id": "valida-buscas-realizadas;api-para-recuperar-paginas-dos-veiculos-cadastrados-na-webmotors;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 37000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "API para recuperar paginas dos veiculos cadastrados na webmotors",
  "description": "",
  "id": "valida-buscas-realizadas;api-para-recuperar-paginas-dos-veiculos-cadastrados-na-webmotors;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 26,
      "name": "@CT04"
    },
    {
      "line": 26,
      "name": "@POSITIVO"
    },
    {
      "line": 3,
      "name": "@GETS"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Vehicles\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "envio o parâmetro \"Page\" com valor \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "o Response Code me retorna status \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "valido a quantidade de veiculos \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "valido o Schema \"schemaPaginas\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Vehicles",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Vehicles executado com sucesso");
formatter.result({
  "duration": 238200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Page",
      "offset": 19
    },
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro Page com valor 1");
formatter.result({
  "duration": 310700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 200 executado com sucesso");
formatter.result({
  "duration": 250100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "WebMotorsAPISteps.validoAQuantidadeDeVeiculos(String)"
});
formatter.write("[{\"ID\":1,\"Make\":\"Honda\",\"Model\":\"City\",\"Version\":\"2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/01.jpg\",\"KM\":0,\"Price\":\"59000,00\",\"YearModel\":2018,\"YearFab\":2017,\"Color\":\"Azul\"},{\"ID\":2,\"Make\":\"Mitsubishi\",\"Model\":\"Lancer\",\"Version\":\"2.0 EVO 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/02.jpg\",\"KM\":47500,\"Price\":\"49000,00\",\"YearModel\":2012,\"YearFab\":2012,\"Color\":\"Branco\"},{\"ID\":3,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/03.jpg\",\"KM\":0,\"Price\":\"78000,00\",\"YearModel\":2018,\"YearFab\":2018,\"Color\":\"Preto\"},{\"ID\":4,\"Make\":\"Mitsubishi\",\"Model\":\"Lancer\",\"Version\":\"2.0 EVO 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/04.jpg\",\"KM\":12900,\"Price\":\"59000,00\",\"YearModel\":2016,\"YearFab\":2015,\"Color\":\"Vermelho\"},{\"ID\":5,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/05.jpg\",\"KM\":12000,\"Price\":\"55000,00\",\"YearModel\":2016,\"YearFab\":2016,\"Color\":\"Azul\"},{\"ID\":6,\"Make\":\"Chevrolet\",\"Model\":\"Agile\",\"Version\":\"1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/06.jpg\",\"KM\":12000,\"Price\":\"37000,00\",\"YearModel\":2014,\"YearFab\":2013,\"Color\":\"Vermelho\"},{\"ID\":7,\"Make\":\"Chevrolet\",\"Model\":\"Agile\",\"Version\":\"1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/07.jpg\",\"KM\":0,\"Price\":\"45000,00\",\"YearModel\":2018,\"YearFab\":2017,\"Color\":\"Cinza\"},{\"ID\":8,\"Make\":\"Ford\",\"Model\":\"Ecosport\",\"Version\":\"1.6 FREESTYLE 16V FLEX 4P MANUAL\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/08.jpg\",\"KM\":93000,\"Price\":\"45000,00\",\"YearModel\":2013,\"YearFab\":2012,\"Color\":\"Branca\"},{\"ID\":9,\"Make\":\"Chevrolet\",\"Model\":\"Agile\",\"Version\":\"1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/06.jpg\",\"KM\":12000,\"Price\":\"37000,00\",\"YearModel\":2014,\"YearFab\":2013,\"Color\":\"Vermelho\"},{\"ID\":10,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/05.jpg\",\"KM\":12000,\"Price\":\"55000,00\",\"YearModel\":2016,\"YearFab\":2016,\"Color\":\"Azul\"}]");
formatter.result({
  "duration": 520187900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaPaginas",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("[{\"ID\":1,\"Make\":\"Honda\",\"Model\":\"City\",\"Version\":\"2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/01.jpg\",\"KM\":0,\"Price\":\"59000,00\",\"YearModel\":2018,\"YearFab\":2017,\"Color\":\"Azul\"},{\"ID\":2,\"Make\":\"Mitsubishi\",\"Model\":\"Lancer\",\"Version\":\"2.0 EVO 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/02.jpg\",\"KM\":47500,\"Price\":\"49000,00\",\"YearModel\":2012,\"YearFab\":2012,\"Color\":\"Branco\"},{\"ID\":3,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/03.jpg\",\"KM\":0,\"Price\":\"78000,00\",\"YearModel\":2018,\"YearFab\":2018,\"Color\":\"Preto\"},{\"ID\":4,\"Make\":\"Mitsubishi\",\"Model\":\"Lancer\",\"Version\":\"2.0 EVO 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/04.jpg\",\"KM\":12900,\"Price\":\"59000,00\",\"YearModel\":2016,\"YearFab\":2015,\"Color\":\"Vermelho\"},{\"ID\":5,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/05.jpg\",\"KM\":12000,\"Price\":\"55000,00\",\"YearModel\":2016,\"YearFab\":2016,\"Color\":\"Azul\"},{\"ID\":6,\"Make\":\"Chevrolet\",\"Model\":\"Agile\",\"Version\":\"1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/06.jpg\",\"KM\":12000,\"Price\":\"37000,00\",\"YearModel\":2014,\"YearFab\":2013,\"Color\":\"Vermelho\"},{\"ID\":7,\"Make\":\"Chevrolet\",\"Model\":\"Agile\",\"Version\":\"1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/07.jpg\",\"KM\":0,\"Price\":\"45000,00\",\"YearModel\":2018,\"YearFab\":2017,\"Color\":\"Cinza\"},{\"ID\":8,\"Make\":\"Ford\",\"Model\":\"Ecosport\",\"Version\":\"1.6 FREESTYLE 16V FLEX 4P MANUAL\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/08.jpg\",\"KM\":93000,\"Price\":\"45000,00\",\"YearModel\":2013,\"YearFab\":2012,\"Color\":\"Branca\"},{\"ID\":9,\"Make\":\"Chevrolet\",\"Model\":\"Agile\",\"Version\":\"1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/06.jpg\",\"KM\":12000,\"Price\":\"37000,00\",\"YearModel\":2014,\"YearFab\":2013,\"Color\":\"Vermelho\"},{\"ID\":10,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/05.jpg\",\"KM\":12000,\"Price\":\"55000,00\",\"YearModel\":2016,\"YearFab\":2016,\"Color\":\"Azul\"}]");
formatter.result({
  "duration": 401330700,
  "status": "passed"
});
formatter.after({
  "duration": 36900,
  "status": "passed"
});
formatter.before({
  "duration": 47900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "API para recuperar paginas dos veiculos cadastrados na webmotors",
  "description": "",
  "id": "valida-buscas-realizadas;api-para-recuperar-paginas-dos-veiculos-cadastrados-na-webmotors;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 26,
      "name": "@CT04"
    },
    {
      "line": 26,
      "name": "@POSITIVO"
    },
    {
      "line": 3,
      "name": "@GETS"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Vehicles\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "envio o parâmetro \"Page\" com valor \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "o Response Code me retorna status \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "valido a quantidade de veiculos \"10\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "valido o Schema \"schemaPaginas\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Vehicles",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Vehicles executado com sucesso");
formatter.result({
  "duration": 184900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Page",
      "offset": 19
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro Page com valor 2");
formatter.result({
  "duration": 155300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 200 executado com sucesso");
formatter.result({
  "duration": 139800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 33
    }
  ],
  "location": "WebMotorsAPISteps.validoAQuantidadeDeVeiculos(String)"
});
formatter.write("[{\"ID\":11,\"Make\":\"Mitsubishi\",\"Model\":\"Lancer\",\"Version\":\"2.0 EVO 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/04.jpg\",\"KM\":12900,\"Price\":\"59000,00\",\"YearModel\":2016,\"YearFab\":2015,\"Color\":\"Vermelho\"},{\"ID\":12,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/05.jpg\",\"KM\":12000,\"Price\":\"55000,00\",\"YearModel\":2016,\"YearFab\":2016,\"Color\":\"Azul\"},{\"ID\":13,\"Make\":\"Chevrolet\",\"Model\":\"Agile\",\"Version\":\"1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/06.jpg\",\"KM\":12000,\"Price\":\"37000,00\",\"YearModel\":2014,\"YearFab\":2013,\"Color\":\"Vermelho\"},{\"ID\":14,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/05.jpg\",\"KM\":12000,\"Price\":\"55000,00\",\"YearModel\":2016,\"YearFab\":2016,\"Color\":\"Azul\"},{\"ID\":15,\"Make\":\"Honda\",\"Model\":\"City\",\"Version\":\"2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/01.jpg\",\"KM\":0,\"Price\":\"59000,00\",\"YearModel\":2018,\"YearFab\":2017,\"Color\":\"Azul\"},{\"ID\":16,\"Make\":\"Mitsubishi\",\"Model\":\"Lancer\",\"Version\":\"2.0 EVO 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/02.jpg\",\"KM\":47500,\"Price\":\"49000,00\",\"YearModel\":2012,\"YearFab\":2012,\"Color\":\"Branco\"},{\"ID\":17,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/03.jpg\",\"KM\":0,\"Price\":\"78000,00\",\"YearModel\":2018,\"YearFab\":2018,\"Color\":\"Preto\"},{\"ID\":18,\"Make\":\"Mitsubishi\",\"Model\":\"Lancer\",\"Version\":\"2.0 EVO 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/04.jpg\",\"KM\":12900,\"Price\":\"59000,00\",\"YearModel\":2016,\"YearFab\":2015,\"Color\":\"Vermelho\"},{\"ID\":19,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/05.jpg\",\"KM\":12000,\"Price\":\"55000,00\",\"YearModel\":2016,\"YearFab\":2016,\"Color\":\"Azul\"},{\"ID\":20,\"Make\":\"Chevrolet\",\"Model\":\"Agile\",\"Version\":\"1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/07.jpg\",\"KM\":0,\"Price\":\"45000,00\",\"YearModel\":2018,\"YearFab\":2017,\"Color\":\"Cinza\"}]");
formatter.result({
  "duration": 419830100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaPaginas",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("[{\"ID\":11,\"Make\":\"Mitsubishi\",\"Model\":\"Lancer\",\"Version\":\"2.0 EVO 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/04.jpg\",\"KM\":12900,\"Price\":\"59000,00\",\"YearModel\":2016,\"YearFab\":2015,\"Color\":\"Vermelho\"},{\"ID\":12,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/05.jpg\",\"KM\":12000,\"Price\":\"55000,00\",\"YearModel\":2016,\"YearFab\":2016,\"Color\":\"Azul\"},{\"ID\":13,\"Make\":\"Chevrolet\",\"Model\":\"Agile\",\"Version\":\"1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/06.jpg\",\"KM\":12000,\"Price\":\"37000,00\",\"YearModel\":2014,\"YearFab\":2013,\"Color\":\"Vermelho\"},{\"ID\":14,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/05.jpg\",\"KM\":12000,\"Price\":\"55000,00\",\"YearModel\":2016,\"YearFab\":2016,\"Color\":\"Azul\"},{\"ID\":15,\"Make\":\"Honda\",\"Model\":\"City\",\"Version\":\"2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/01.jpg\",\"KM\":0,\"Price\":\"59000,00\",\"YearModel\":2018,\"YearFab\":2017,\"Color\":\"Azul\"},{\"ID\":16,\"Make\":\"Mitsubishi\",\"Model\":\"Lancer\",\"Version\":\"2.0 EVO 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/02.jpg\",\"KM\":47500,\"Price\":\"49000,00\",\"YearModel\":2012,\"YearFab\":2012,\"Color\":\"Branco\"},{\"ID\":17,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/03.jpg\",\"KM\":0,\"Price\":\"78000,00\",\"YearModel\":2018,\"YearFab\":2018,\"Color\":\"Preto\"},{\"ID\":18,\"Make\":\"Mitsubishi\",\"Model\":\"Lancer\",\"Version\":\"2.0 EVO 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/04.jpg\",\"KM\":12900,\"Price\":\"59000,00\",\"YearModel\":2016,\"YearFab\":2015,\"Color\":\"Vermelho\"},{\"ID\":19,\"Make\":\"Honda\",\"Model\":\"Fit\",\"Version\":\"1.4 LXL 16V FLEX 4P AUTOMÁTICO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/05.jpg\",\"KM\":12000,\"Price\":\"55000,00\",\"YearModel\":2016,\"YearFab\":2016,\"Color\":\"Azul\"},{\"ID\":20,\"Make\":\"Chevrolet\",\"Model\":\"Agile\",\"Version\":\"1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/07.jpg\",\"KM\":0,\"Price\":\"45000,00\",\"YearModel\":2018,\"YearFab\":2017,\"Color\":\"Cinza\"}]");
formatter.result({
  "duration": 400743200,
  "status": "passed"
});
formatter.after({
  "duration": 40100,
  "status": "passed"
});
formatter.before({
  "duration": 36500,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "API para recuperar paginas dos veiculos cadastrados na webmotors",
  "description": "",
  "id": "valida-buscas-realizadas;api-para-recuperar-paginas-dos-veiculos-cadastrados-na-webmotors;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 26,
      "name": "@CT04"
    },
    {
      "line": 26,
      "name": "@POSITIVO"
    },
    {
      "line": 3,
      "name": "@GETS"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Vehicles\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "envio o parâmetro \"Page\" com valor \"3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "o Response Code me retorna status \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "valido a quantidade de veiculos \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "valido o Schema \"schemaPaginas\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Vehicles",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Vehicles executado com sucesso");
formatter.result({
  "duration": 292800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Page",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 36
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro Page com valor 3");
formatter.result({
  "duration": 236600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 200 executado com sucesso");
formatter.result({
  "duration": 206900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    }
  ],
  "location": "WebMotorsAPISteps.validoAQuantidadeDeVeiculos(String)"
});
formatter.write("[{\"ID\":21,\"Make\":\"Ford\",\"Model\":\"Ecosport\",\"Version\":\"1.6 FREESTYLE 16V FLEX 4P MANUAL\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/08.jpg\",\"KM\":93000,\"Price\":\"45000,00\",\"YearModel\":2013,\"YearFab\":2012,\"Color\":\"Branca\"}]");
formatter.result({
  "duration": 443560000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaPaginas",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("[{\"ID\":21,\"Make\":\"Ford\",\"Model\":\"Ecosport\",\"Version\":\"1.6 FREESTYLE 16V FLEX 4P MANUAL\",\"Image\":\"http://desafioonline.webmotors.com.br/content/img/08.jpg\",\"KM\":93000,\"Price\":\"45000,00\",\"YearModel\":2013,\"YearFab\":2012,\"Color\":\"Branca\"}]");
formatter.result({
  "duration": 386381600,
  "status": "passed"
});
formatter.after({
  "duration": 32700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "API que envia MakeID e ModelID com números inexistentes",
  "description": "",
  "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-com-números-inexistentes",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 40,
      "name": "@CT05"
    },
    {
      "line": 40,
      "name": "@NEGATIVO"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "que envio um GET para o endPoint \u003cendPoint\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 43,
  "name": "envio o parâmetro \u003cParametro\u003e com valor \"100\"",
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "o Response Code me retorna status \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "valido Response Body vazio",
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "valido o Schema \u003cSchema\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-com-números-inexistentes;",
  "rows": [
    {
      "cells": [
        "endPoint",
        "Parametro",
        "Schema"
      ],
      "line": 49,
      "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-com-números-inexistentes;;1"
    },
    {
      "cells": [
        "\"/api/OnlineChallenge/Model\"",
        "\"MakeID\"",
        "\"schemaPaginaInexistente\""
      ],
      "line": 50,
      "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-com-números-inexistentes;;2"
    },
    {
      "cells": [
        "\"/api/OnlineChallenge/Version\"",
        "\"ModelID\"",
        "\"schemaPaginaInexistente\""
      ],
      "line": 51,
      "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-com-números-inexistentes;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 29600,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "API que envia MakeID e ModelID com números inexistentes",
  "description": "",
  "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-com-números-inexistentes;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 40,
      "name": "@CT05"
    },
    {
      "line": 40,
      "name": "@NEGATIVO"
    },
    {
      "line": 3,
      "name": "@GETS"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Model\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 43,
  "name": "envio o parâmetro \"MakeID\" com valor \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "o Response Code me retorna status \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "valido Response Body vazio",
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "valido o Schema \"schemaPaginaInexistente\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Model",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Model executado com sucesso");
formatter.result({
  "duration": 214800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MakeID",
      "offset": 19
    },
    {
      "val": "100",
      "offset": 38
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro MakeID com valor 100");
formatter.result({
  "duration": 175800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 200 executado com sucesso");
formatter.result({
  "duration": 164100,
  "status": "passed"
});
formatter.match({
  "location": "WebMotorsAPISteps.validoResponseBodyVazio()"
});
formatter.write("E valido Response Body vazio");
formatter.result({
  "duration": 172200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaPaginaInexistente",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("[]");
formatter.result({
  "duration": 403940800,
  "status": "passed"
});
formatter.after({
  "duration": 29400,
  "status": "passed"
});
formatter.before({
  "duration": 46800,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "API que envia MakeID e ModelID com números inexistentes",
  "description": "",
  "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-com-números-inexistentes;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 40,
      "name": "@CT05"
    },
    {
      "line": 40,
      "name": "@NEGATIVO"
    },
    {
      "line": 3,
      "name": "@GETS"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Version\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 43,
  "name": "envio o parâmetro \"ModelID\" com valor \"100\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "o Response Code me retorna status \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 45,
  "name": "valido Response Body vazio",
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "valido o Schema \"schemaPaginaInexistente\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Version",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Version executado com sucesso");
formatter.result({
  "duration": 282100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ModelID",
      "offset": 19
    },
    {
      "val": "100",
      "offset": 39
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro ModelID com valor 100");
formatter.result({
  "duration": 186100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 200 executado com sucesso");
formatter.result({
  "duration": 156000,
  "status": "passed"
});
formatter.match({
  "location": "WebMotorsAPISteps.validoResponseBodyVazio()"
});
formatter.write("E valido Response Body vazio");
formatter.result({
  "duration": 140000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaPaginaInexistente",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("[]");
formatter.result({
  "duration": 458316300,
  "status": "passed"
});
formatter.after({
  "duration": 25000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "API que envia MakeID e ModelID Invalidos",
  "description": "",
  "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-invalidos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 53,
      "name": "@CT06"
    },
    {
      "line": 53,
      "name": "@NEGATIVO"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "que envio um GET para o endPoint \u003cendPoint\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 56,
  "name": "envio o parâmetro \u003cParametro\u003e com valor \"L\"",
  "keyword": "E "
});
formatter.step({
  "line": 57,
  "name": "o Response Code me retorna status \"400\"",
  "keyword": "E "
});
formatter.step({
  "line": 58,
  "name": "valido o Schema \u003cSchema\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 59,
  "name": "valido Response Body \u003cMessage\u003e e \u003cMessageDetail\u003e",
  "keyword": "Então "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-invalidos;",
  "rows": [
    {
      "cells": [
        "endPoint",
        "Parametro",
        "Schema",
        "Message",
        "MessageDetail"
      ],
      "line": 62,
      "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-invalidos;;1"
    },
    {
      "cells": [
        "\"/api/OnlineChallenge/Model\"",
        "\"MakeID\"",
        "\"schemaBuscaInvalida\"",
        "\"The request is invalid.\"",
        "\"The parameters dictionary contains a null entry for parameter \u0027MakeID\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Model] Model(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.\""
      ],
      "line": 63,
      "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-invalidos;;2"
    },
    {
      "cells": [
        "\"/api/OnlineChallenge/Version\"",
        "\"ModelID\"",
        "\"schemaBuscaInvalida\"",
        "\"The request is invalid.\"",
        "\"The parameters dictionary contains a null entry for parameter \u0027ModelID\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Version] Version(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.\""
      ],
      "line": 64,
      "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-invalidos;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 28500,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "API que envia MakeID e ModelID Invalidos",
  "description": "",
  "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-invalidos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 53,
      "name": "@CT06"
    },
    {
      "line": 53,
      "name": "@NEGATIVO"
    },
    {
      "line": 3,
      "name": "@GETS"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Model\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 56,
  "name": "envio o parâmetro \"MakeID\" com valor \"L\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 57,
  "name": "o Response Code me retorna status \"400\"",
  "keyword": "E "
});
formatter.step({
  "line": 58,
  "name": "valido o Schema \"schemaBuscaInvalida\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 59,
  "name": "valido Response Body \"The request is invalid.\" e \"The parameters dictionary contains a null entry for parameter \u0027MakeID\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Model] Model(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Model",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Model executado com sucesso");
formatter.result({
  "duration": 222900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MakeID",
      "offset": 19
    },
    {
      "val": "L",
      "offset": 38
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro MakeID com valor L");
formatter.result({
  "duration": 192500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 400 executado com sucesso");
formatter.result({
  "duration": 156700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaBuscaInvalida",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("{\"Message\":\"The request is invalid.\",\"MessageDetail\":\"The parameters dictionary contains a null entry for parameter \u0027MakeID\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Model] Model(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.\"}");
formatter.result({
  "duration": 451320800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The request is invalid.",
      "offset": 22
    },
    {
      "val": "The parameters dictionary contains a null entry for parameter \u0027MakeID\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Model] Model(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.",
      "offset": 50
    }
  ],
  "location": "WebMotorsAPISteps.validoResponseBodyE(String,String)"
});
formatter.result({
  "duration": 178237700,
  "status": "passed"
});
formatter.after({
  "duration": 26400,
  "status": "passed"
});
formatter.before({
  "duration": 44600,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "API que envia MakeID e ModelID Invalidos",
  "description": "",
  "id": "valida-buscas-realizadas;api-que-envia-makeid-e-modelid-invalidos;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 53,
      "name": "@CT06"
    },
    {
      "line": 53,
      "name": "@NEGATIVO"
    },
    {
      "line": 3,
      "name": "@GETS"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Version\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 56,
  "name": "envio o parâmetro \"ModelID\" com valor \"L\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 57,
  "name": "o Response Code me retorna status \"400\"",
  "keyword": "E "
});
formatter.step({
  "line": 58,
  "name": "valido o Schema \"schemaBuscaInvalida\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 59,
  "name": "valido Response Body \"The request is invalid.\" e \"The parameters dictionary contains a null entry for parameter \u0027ModelID\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Version] Version(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Version",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Version executado com sucesso");
formatter.result({
  "duration": 278600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ModelID",
      "offset": 19
    },
    {
      "val": "L",
      "offset": 39
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro ModelID com valor L");
formatter.result({
  "duration": 239200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 400 executado com sucesso");
formatter.result({
  "duration": 260100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaBuscaInvalida",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("{\"Message\":\"The request is invalid.\",\"MessageDetail\":\"The parameters dictionary contains a null entry for parameter \u0027ModelID\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Version] Version(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.\"}");
formatter.result({
  "duration": 417330600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The request is invalid.",
      "offset": 22
    },
    {
      "val": "The parameters dictionary contains a null entry for parameter \u0027ModelID\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Version] Version(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.",
      "offset": 50
    }
  ],
  "location": "WebMotorsAPISteps.validoResponseBodyE(String,String)"
});
formatter.result({
  "duration": 19831600,
  "status": "passed"
});
formatter.after({
  "duration": 35000,
  "status": "passed"
});
formatter.before({
  "duration": 29200,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "API envia pagina inexistente",
  "description": "",
  "id": "valida-buscas-realizadas;api-envia-pagina-inexistente",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 66,
      "name": "@CT07"
    },
    {
      "line": 66,
      "name": "@NEGATIVO"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Vehicles\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 69,
  "name": "envio o parâmetro \"Page\" com valor \"4\"",
  "keyword": "E "
});
formatter.step({
  "line": 70,
  "name": "o Response Code me retorna status \"200\"",
  "keyword": "E "
});
formatter.step({
  "line": 71,
  "name": "valido Response Body vazio",
  "keyword": "E "
});
formatter.step({
  "line": 72,
  "name": "valido o Schema \"schemaPaginaInexistente\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Vehicles",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Vehicles executado com sucesso");
formatter.result({
  "duration": 223900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Page",
      "offset": 19
    },
    {
      "val": "4",
      "offset": 36
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro Page com valor 4");
formatter.result({
  "duration": 153800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 200 executado com sucesso");
formatter.result({
  "duration": 144800,
  "status": "passed"
});
formatter.match({
  "location": "WebMotorsAPISteps.validoResponseBodyVazio()"
});
formatter.write("E valido Response Body vazio");
formatter.result({
  "duration": 111100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaPaginaInexistente",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("[]");
formatter.result({
  "duration": 380227800,
  "status": "passed"
});
formatter.after({
  "duration": 21800,
  "status": "passed"
});
formatter.before({
  "duration": 23300,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "API envia pagina invalida",
  "description": "",
  "id": "valida-buscas-realizadas;api-envia-pagina-invalida",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 74,
      "name": "@CT08"
    },
    {
      "line": 74,
      "name": "@NEGATIVO"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "que envio um GET para o endPoint \"/api/OnlineChallenge/Vehicles\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 77,
  "name": "envio o parâmetro \"Page\" com valor \"d\"",
  "keyword": "E "
});
formatter.step({
  "line": 78,
  "name": "o Response Code me retorna status \"400\"",
  "keyword": "E "
});
formatter.step({
  "line": 79,
  "name": "valido o Schema \"schemaBuscaInvalida\"",
  "keyword": "E "
});
formatter.step({
  "line": 80,
  "name": "valido Response Body \"The request is invalid.\" e \"The parameters dictionary contains a null entry for parameter \u0027Page\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Vehicle] Vehicle(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/OnlineChallenge/Vehicles",
      "offset": 34
    }
  ],
  "location": "WebMotorsAPISteps.queEnvioUmGETParaOEndPoint(String)"
});
formatter.write("Dado que envio um GET para o endPoint /api/OnlineChallenge/Vehicles executado com sucesso");
formatter.result({
  "duration": 212400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Page",
      "offset": 19
    },
    {
      "val": "d",
      "offset": 36
    }
  ],
  "location": "WebMotorsAPISteps.envioOParâmetroComValor(String,String)"
});
formatter.write("E envio o parâmetro Page com valor d");
formatter.result({
  "duration": 142200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 35
    }
  ],
  "location": "WebMotorsAPISteps.oResponseCodeMeRetornaStatus(String)"
});
formatter.write("Dado que Response Code me retorna status 400 executado com sucesso");
formatter.result({
  "duration": 125500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "schemaBuscaInvalida",
      "offset": 17
    }
  ],
  "location": "WebMotorsAPISteps.validoOSchema(String)"
});
formatter.write("{\"Message\":\"The request is invalid.\",\"MessageDetail\":\"The parameters dictionary contains a null entry for parameter \u0027Page\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Vehicle] Vehicle(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.\"}");
formatter.result({
  "duration": 432226300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The request is invalid.",
      "offset": 22
    },
    {
      "val": "The parameters dictionary contains a null entry for parameter \u0027Page\u0027 of non-nullable type \u0027System.Int32\u0027 for method \u0027System.Collections.Generic.List`1[Swagger.Models.Vehicle] Vehicle(Int32)\u0027 in \u0027Swagger.Controllers.OnlineChallengeController\u0027. An optional parameter must be a reference type, a nullable type, or be declared as an optional parameter.",
      "offset": 50
    }
  ],
  "location": "WebMotorsAPISteps.validoResponseBodyE(String,String)"
});
formatter.result({
  "duration": 20004900,
  "status": "passed"
});
formatter.after({
  "duration": 42400,
  "status": "passed"
});
});