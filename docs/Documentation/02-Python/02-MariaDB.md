---
sidebar_position: 2
sidebar_label: MariaDB
---

# Snippets for MariaDB

Let's begin with a simple tutorial to connect and interact with MariaDB using Python.

### Step 1: Save the Database Details in `config.json`

The `config.json` file stores the credentials for your MariaDB database. Typically, MariaDB uses `localhost` as the host and `root` as the user. You can update the password and database name based on your environment.

```json
{
    "MariaDB": {
      "host": "localhost",
      "user": "root",
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
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Step 3: Python Code for Database Connection
Here’s a Python program that connects to the MariaDB database, loads the query from a file, and executes it.

1. Import Required Libraries
First, import the necessary libraries:

```python
import json
import mariadb
from mariadb import Error as MariaDBError
```

2. Define Helper Functions
Now, define the required functions for loading the configuration, connecting to MariaDB, and executing the query.

#### Load Configuration:
```python
# Load database configuration from config.json
def load_config(filename='config.json'):
    with open(filename, 'r') as file:
        return json.load(file)
```

#### Connect to MariaDB:

```python
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
```

#### Execute SQL Query:

```python
# Execute SQL query from query.sql
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
```

3. Define the Main Function
Now, define your main function that integrates everything together:

```python
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
```


### Step 4: Running the Python Script
To run the script:

1. Ensure that `config.json`, `query.sql`, and your Python file (`lib.py` or another name) are in the same directory. Othwise, you can adjust the relative file path accordingly.
2. Run the Python script:
```python
python lib.py
```
3. The script will:
- Connect to the MariaDB database using the credentials in `config.json`.
- Read and execute the SQL query from `query.sql`.


You can get the Complete file from [here](https://github.com/deepesh611/OmniLangDB/blob/main/lib/Python_MariaDB.py)