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
           return jsonify({"error": f"Помилка відилення: Такого посилання не існує"}), 404
        else:
            return jsonify({"success": f"Посилання з ID {id} успішно видалено"}), 200
    except Error as e:
        return jsonify({"error": f"Помилка видалення посилання: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=False)
