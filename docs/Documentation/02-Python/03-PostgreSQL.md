---
sidebar_position: 3
sidebar_label: PostgreSQL
---

# Snippets for PostgreSQL

Let's begin with a simple tutorial to connect and interact with MySQL using Python.

### Step 1: Save the Database Details in `config.json`

The `config.json` file stores the credentials for your MySQL database. Typically, MySQL uses `localhost` as the host and `root` as the user. You can update the password and database name based on your environment.

```json
{
    "mysql": {
      "host": "localhost",
      "user": "postgres",
      "password": "",
      "database": "mydb"
    }
}
```

### Step 2: Save the SQL Query
You can store your SQL queries in a separate file for better organization. Here's an example of a simple table creation query that we will save in a file named `query.sql`.

```sql
-- Demo query: Creating a sample table
CREATE TABLE IF NOT EXISTS sample_table (
id INT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Step 3: Python Code for Database Connection
Here’s a Python program that connects to the MySQL database, loads the query from a file, and executes it.

1. Import Required Libraries
First, import the necessary libraries:

```python
import json
import psycopg2
from psycopg2 import Error as PostgreSQLError
```

2. Define Helper Functions
Now, define the required functions for loading the configuration, connecting to MySQL, and executing the query.

#### Load Configuration:
```python
# Load database configuration from config.json
def load_config(filename='config.json'):
    with open(filename, 'r') as file:
        return json.load(file)
```

#### Connect to MySQL:

```python
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
```

#### Execute SQL Query:

```python
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
```

3. Define the Main Function
Now, define your main function that integrates everything together:

```python
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
```


### Step 4: Running the Python Script
To run the script:

1. Ensure that `config.json`, `query.sql`, and your Python file (`lib.py` or another name) are in the same directory.
2. Run the Python script:
```python
python lib.py
```
3. The script will:
- Connect to the MySQL database using the credentials in `config.json`.
- Read and execute the SQL query from `query.sql`.


You can get the Complete file from [here](https://github.com/deepesh611/OmniLangDB/blob/main/lib/Python_PostgreSQL.py)