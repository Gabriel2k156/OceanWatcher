from flask import Flask, render_template, jsonify
import random


app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("index.html")

# Rota da API

@app.route('/api/status', methods = ['GET'])
def dados():
    dados = {
        'plastico': [30, 32, 31, 29, 33, round(random.uniform(20, 30),2)],
        'metal': [12, 14, 13, 15, 16, round(random.uniform(10,18),2)],
        'cigarro': [12.5, 12.8, 13, 12.9, 13.1, round(random.uniform(12,14),2)] 
    }
    return jsonify(dados)


if __name__ == "__main__":
    app.run(debug=True)
