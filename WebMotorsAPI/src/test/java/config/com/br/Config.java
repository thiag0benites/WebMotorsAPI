package config.com.br;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Config {
	
	private static Scenario scenario;

	@Before
	public void getScenario(Scenario scenario) {
		Config.scenario = scenario;

		System.out.println("*** Iniciando os testes de API");
	}

	@After
	public void finaliza() {
		System.out.println("*** Fim dos testes");
	}

	public static Scenario getScenario() {
		return scenario;
	}

}
