# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Account` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` CHAR(255) NOT NULL,
  `password` CHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Survey`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Survey` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `isPaused` TINYINT NOT NULL,
  `isNamed` TINYINT NOT NULL,
  `name` CHAR(255) NULL,
  `duration` CHAR(255) NULL,
  `Account_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Survey_Account1_idx` (`Account_id` ASC) VISIBLE,
  CONSTRAINT `fk_Survey_Account1`
    FOREIGN KEY (`Account_id`)
    REFERENCES `mydb`.`Account` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Question` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Text` CHAR(255) NULL,
  `Survey_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Question_Survey1_idx` (`Survey_id` ASC) VISIBLE,
  CONSTRAINT `fk_Question_Survey1`
    FOREIGN KEY (`Survey_id`)
    REFERENCES `mydb`.`Survey` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Response`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Response` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Value` VARCHAR(16384) NULL,
  `Account_id` INT UNSIGNED NULL,
  `Question_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Response_Account_idx` (`Account_id` ASC) VISIBLE,
  INDEX `fk_Response_Question1_idx` (`Question_id` ASC) VISIBLE,
  CONSTRAINT `fk_Response_Account`
    FOREIGN KEY (`Account_id`)
    REFERENCES `mydb`.`Account` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Response_Question1`
    FOREIGN KEY (`Question_id`)
    REFERENCES `mydb`.`Question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Link`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Link` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `uses` INT NULL,
  `responces` INT NULL,
  `usageLimit` INT NULL,
  `responceLimit` INT NULL,
  `path` CHAR(32) NOT NULL,
  `Survey_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Link_Survey1_idx` (`Survey_id` ASC) VISIBLE,
  CONSTRAINT `fk_Link_Survey1`
    FOREIGN KEY (`Survey_id`)
    REFERENCES `mydb`.`Survey` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```
## RESTfull сервіс для управління даними на python з використанням Flask
__app.py__:
```python
from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error
from db_config import db_config

app = Flask(__name__)


def get_db_connection():
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except Error as e:
        return jsonify({"error": f"Помилка підключення до бази даних: {str(e)}"}), 500


@app.route('/links', methods=['GET'])
def get_links():
    try:
        conn = get_db_connection()
        if isinstance(conn, tuple):
            return conn
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM Link')
        links = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(links)
    except Error as e:
        return jsonify({"error": f"Помилка отримання даних: {str(e)}"}), 500


@app.route('/link/<int:id>', methods=['GET'])
def get_link(id):
    try:
        conn = get_db_connection()
        if isinstance(conn, tuple):
            return conn
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM Link WHERE id = %s', (id,))
        link = cursor.fetchone()
        cursor.close()
        conn.close()
        if link is None:
            return jsonify({"error": "Посилання не знайдено"}), 404
        return jsonify(link)
    except Error as e:
        return jsonify({"error": f"Помилка отримання даних: {str(e)}"}), 500


@app.route('/link', methods=['POST'])
def create_link():
    try:
        new_link = request.json
        conn = get_db_connection()
        if isinstance(conn, tuple):
            return conn
        cursor = conn.cursor()

        cursor.execute('''
            INSERT INTO Link (uses, responces, usageLimit, responceLimit, path, Survey_id) 
            VALUES (%s, %s, %s, %s, %s, %s)
        ''', (
            new_link.get('uses'),
            new_link.get('responces'),
            new_link.get('usageLimit'),
            new_link.get('responceLimit'),
            new_link.get('path'),
            new_link.get('Survey_id')
        ))

        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"success": "Посилання успішно створено", "data": new_link}), 201
    except Error as e:
        return jsonify({"error": f"Помилка створення посилання: {str(e)}"}), 500


@app.route('/link/<int:id>', methods=['PUT'])
def update_link(id):
    try:
        update_link = request.json
        conn = get_db_connection()
        if isinstance(conn, tuple):
            return conn
        cursor = conn.cursor()

        cursor.execute('''
            UPDATE Link SET 
                uses = %s, 
                responces = %s, 
                usageLimit = %s, 
                responceLimit = %s, 
                path = %s, 
                Survey_id = %s 
            WHERE id = %s
        ''', (
            update_link.get('uses'),
            update_link.get('responces'),
            update_link.get('usageLimit'),
            update_link.get('responceLimit'),
            update_link.get('path'),
            update_link.get('Survey_id'),
            id
        ))

        conn.commit()
        cursor.close()
        conn.close()
        if cursor.rowcount == 0:
           return jsonify({"error": f"Помилка оновлення: Такого посилання не існує"}), 404
        else:
            return jsonify({"success": f"Посилання з ID {id} успішно оновлено", "data": update_link}), 202
    except Error as e:
        return jsonify({"error": f"Помилка оновлення посилання: {str(e)}"}), 500


@app.route('/link/<int:id>', methods=['DELETE'])
def delete_link(id):
    try:
        conn = get_db_connection()
        if isinstance(conn, tuple):
            return conn
        cursor = conn.cursor()
        cursor.execute('DELETE FROM Link WHERE id = %s', (id,))
        conn.commit()
        cursor.close()
        conn.close()
        if cursor.rowcount == 0:
           return jsonify({"error": f"Помилка видалення: Такого посилання не існує"}), 404
        else:
            return jsonify({"success": f"Посилання з ID {id} успішно видалено"}), 200
    except Error as e:
        return jsonify({"error": f"Помилка видалення посилання: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=False)
```
__db_config.py__:
```python
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'SQLtigropass13',
    'database': 'mydb'
}
```