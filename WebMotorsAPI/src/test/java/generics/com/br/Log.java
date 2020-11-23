package generics.com.br;

import java.text.SimpleDateFormat;
import java.util.Date;

import config.com.br.Config;

public class Log {
	Date horaAtual;
	public void relatorio(String msg) {
		
		horaAtual = new Date();
		String dataHora = new SimpleDateFormat("HH:mm:ss").format(horaAtual);
		
		Config.getScenario().write(msg);
		System.out.println(dataHora + ": " + msg);
	
	}
}
