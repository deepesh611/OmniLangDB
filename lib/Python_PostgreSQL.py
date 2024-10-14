import json
import psycopg2
from psycopg2 import Error as PostgreSQLError


# Load database configuration
def load_config(filename='config.json'):
    with open(filename, 'r') as file:
        return json.load(file)


# Connect to PostgreSQL database
def connect_postgresql(config):
    try:
        connection = psycopg2.connect(
            host=config['host'],
            user=config['user'],
            password=config['password'],
            database=config['database']
        )
        print("Connected to PostgreSQL")
        return connection
    except PostgreSQLError as e:
        print(f"Error connecting to PostgreSQL: {e}")
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
    except (PostgreSQLError) as e:
        print(f"Error executing query: {e}")


def main():
    config = load_config()           # Load database configuration       

    # Connect to PostgreSQL
    postgresql_connection = connect_postgresql(config['postgresql'])

    # Execute query on PostgreSQL
    if postgresql_connection:
        execute_query(postgresql_connection)
        postgresql_connection.close()


if __name__ == "__main__":
    main()