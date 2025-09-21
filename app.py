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
        'plastico': [17.31,81.79, 57.54, 55.28, round(random.uniform(1,50),2)],
        'outros': [0.09, 5.05, 4.19, 3.30, round(random.uniform(1,50),2)],
        'cigarro': [12.8, 13, 12.9, 13.1, round(random.uniform(1,50),2)] 
    }
    return jsonify(dados)


if __name__ == "__main__":
    app.run(debug=True)
