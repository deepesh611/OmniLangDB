import json
import mysql.connector
from mysql.connector import Error as MySQLError


# Load database configuration
def load_config(filename='config.json'):
    with open(filename, 'r') as file:
        return json.load(file)


# Connect to MySQL database
def connect_mysql(config):
    try: 
        connection = mysql.connector.connect(
            host=config['host'],
            user=config['user'],
            password=config['password'],
            database=config['database']
        )
        if connection.is_connected():
            print("Connected to MySQL")
            return connection
    except MySQLError as e:
        print(f"Error connecting to MySQL: {e}")
        return None


# Execute SQL query
def execute_query(connection, query_file='query.sql'):
    with open(query_file, 'r') as file:
        query = file.read()
    
    try:
        cursor = connection.cursor()
        cursor.execute(query)
        connection.commit()
        print("Query executed successfully")
    except (MySQLError) as e:
        print(f"Error executing query: {e}")


def main():
    config = load_config()           # Load database configuration       

    # Connect to MySQL
    mysql_connection = connect_mysql(config['mysql'])

    # Execute query on MySQL
    if mysql_connection:
        execute_query(mysql_connection)
        mysql_connection.close()

if __name__ == "__main__":
    main()
