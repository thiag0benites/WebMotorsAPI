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
  "duration": 179300,
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
  "duration": 66944400,
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
  "duration": 250600,
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
formatter.result({
  "duration": 1547300,
  "error_message": "java.lang.NullPointerException\r\n\tat requests.com.br.Gets.validaSchema(Gets.java:57)\r\n\tat steps.com.br.WebMotorsAPISteps.validoOSchema(WebMotorsAPISteps.java:61)\r\n\tat ✽.Então valido o Schema \"schemaMarcas\"(GetAPIWebMotors.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 33400,
  "status": "passed"
});
});