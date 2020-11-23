package requests.com.br;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.MatcherAssert.assertThat;

import java.util.List;

import org.junit.Assert;

import generics.com.br.Log;
import io.restassured.response.Response;


public class Gets extends Log {
	
	private String url = "http://desafioonline.webmotors.com.br";
	
	private Response response;

	public void Get(String endPoint, String statusCodeEsperado, String parametro, String valorParam) {

		if (parametro == null) {
//			given().relaxedHTTPSValidation().when().get(url + endPoint).then()
//					.statusCode(Integer.parseInt(statusCodeEsperado));
			response = given().relaxedHTTPSValidation().when().get(url + endPoint);
			
			
		} else {

			response = given().relaxedHTTPSValidation().param(parametro, valorParam).when()
					.get(url + endPoint);

		}
		
		String body = response.body().asString();
		relatorio(body);
		Assert.assertEquals(Integer.parseInt(statusCodeEsperado), response.statusCode());

	}

	public void GetContaPaginas(String endPoint, String pagina, String statusCode, String quant) {

		response = given().relaxedHTTPSValidation().param("Page", pagina).when().get(url + endPoint);

		String body = response.body().asString();

		List<String> jsonResponse = response.jsonPath().getList("$");
		relatorio(body);

		Assert.assertEquals(Integer.parseInt(statusCode), response.statusCode());
		Assert.assertEquals(Integer.parseInt(quant), jsonResponse.size());
	}
	
	public void validaSchema(String schemaJson) {
		
		response.then().assertThat().body(matchesJsonSchemaInClasspath("schemaMarcas.json"));
		
	}

}
