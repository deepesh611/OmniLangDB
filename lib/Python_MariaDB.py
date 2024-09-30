import json
import mariadb
from mariadb import Error as MariaDBError


# Load database configuration
def load_config(filename='config.json'):
    with open(filename, 'r') as file:
        return json.load(file)


# Connect to MariaDB database
def connect_mariadb(config):
    try:
        connection = mariadb.connect(
            host=config['host'],
            user=config['user'],
            password=config['password'],
            database=config['database']
        )
        print("Connected to MariaDB")
        return connection
    except MariaDBError as e:
        print(f"Error connecting to MariaDB: {e}")
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
    except (MariaDBError) as e:
        print(f"Error executing query: {e}")


def main():
    config = load_config()           # Load database configuration       

    # Connect to MariaDB
    mariadb_connection = connect_mariadb(config['mariadb'])

    # Execute query on MariaDB
    if mariadb_connection:
        execute_query(mariadb_connection)
        mariadb_connection.close()

if __name__ == "__main__":
    main()
