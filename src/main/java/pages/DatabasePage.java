package pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class DatabasePage {
	String columnValue = null;
	Connection connection = null;
	Statement statement = null;
	ResultSet rs = null;
	//List<String> dataList = new ArrayList<String>();
	
	
	public String getData(String columnName) throws SQLException {
		try {//setting properties for mysql
			Class.forName("com.mysql.cj.jdbc.Driver");//this is class that we have to call
			String sqlUrl = "jdbc:mysql://localhost:3306/sep2021";
			String sqlUsername = "root";
			String sqlPassword = "root";
			String query = "Select * from users";
			
			//Create connection to local database
			//interface //refference variable
			connection = DriverManager.getConnection(sqlUrl, sqlUsername, sqlPassword);
			//Empowering the connection reference variable to excectue queries
			statement = connection.createStatement();
			
			//Delevring the query
			rs = statement.executeQuery(query);//for this code to work and get data we need while loop
			while(rs.next()){
				columnValue = rs.getString(columnName);
			return columnValue;
			}	
			}
		catch(Exception e) {
			e.printStackTrace();
		}finally {
			if (rs != null) {//because we get infinite in while loop we use if
				rs.close();//once we get the value close
			}
			if (connection != null) {
				connection.close();
			}
		}
		
		
		return columnValue;
		
	}

}
