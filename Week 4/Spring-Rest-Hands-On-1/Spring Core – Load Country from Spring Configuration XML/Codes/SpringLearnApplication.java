package com.ctz;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ctz.springlearn.Country;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@SpringBootApplication
public class SpringLearnApplication {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) throws ParseException {
		SpringApplication.run(SpringLearnApplication.class, args);
		
		System.out.println("Project Running Successfully");
		displayCountry();
		
	}
	
	public static void displayCountry()
	{
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = (Country) context.getBean("country", Country.class);
		LOGGER.info("Country : {}", country.toString());

	}
	
	public static void displayDate() throws ParseException
	{
		LOGGER.info("START DISPLAY DATE");
		ApplicationContext context = new ClassPathXmlApplicationContext("date.xml");

        SimpleDateFormat dateFormat = context.getBean("dateFormat", SimpleDateFormat.class);


		try {
			Date date = dateFormat.parse("31/12/2018");
			
			System.out.println(date);
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		LOGGER.info("END DISPLAY DATE");
	}
	
	
	

}