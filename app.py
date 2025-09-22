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
        'plastico': [17.31,81.79, 57.54, 55.28, round(random.uniform(1,100),2)],
        'outros': [1, 5.05, 4.19, 3.30, round(random.uniform(1,100),2)], # O valor de real 2021 é 0.09 toneladas, foi alterado para 1 para a coluna não ficar oculta

    }
    return jsonify(dados)


if __name__ == "__main__":
    app.run(debug=True)
