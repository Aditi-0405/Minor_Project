from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import sympy as smp
import random

app = Flask(__name__)
CORS(app)


def cross_in_tray(x_1, x_2):
    return smp.sin(x_1) * smp.sin(x_2) * smp.exp(-((x_1**2 + x_2**2) / 2))

def holder_table(x_1, x_2):
    return -1 * (np.abs(np.sin(x_1) * np.cos(x_2) * np.exp(np.abs(1 - (x_1**2 + x_2**2)**0.5))))

def levy_function_n13(x_1, x_2):
    term1 = (smp.sin(3 * np.pi * x_1))**2
    term2 = ((x_1 - 1)**2) * (1 + (smp.sin(3 * np.pi * x_2))**2)
    term3 = ((x_2 - 1)**2) * (1 + (smp.sin(2 * np.pi * x_2))**2)
    return term1 + term2 + term3

function_map = {
    'cross_in_tray': cross_in_tray,
    'holder_table': holder_table,
    'levy_n13': levy_function_n13
}

@app.route("/api/optimize", methods=['GET', 'POST'])
def optimize():
    function_name = request.args.get('function', default='cross_in_tray', type=str)

    if function_name not in function_map:
        return jsonify({'error': 'Function not found!'}), 400

    x_1, x_2, η = smp.symbols('x_1 x_2 η', real=True)
    f = function_map[function_name](x_1, x_2)
    dfdx_1 = smp.diff(f, x_1)
    dfdx_2 = smp.diff(f, x_2)

    Choose_Algorithm = "steepest gradient descent"
    iterations = 1

    for i in range(iterations):
        arr_fplot = np.array([])
        arr_Aplot = np.array([])
        arr_xplot = np.array([])

        if Choose_Algorithm == "steepest gradient descent":
            iteration = 0
            Stop = 0.01
            Amp_df = 0.1

            previous = np.array([[random.uniform(-10, 10), random.uniform(-10, 10)]])
            print("Initial Point equal", previous)

            while Amp_df > Stop:
                iteration += 1
                f_Value = float(f.subs({x_1: previous[0][0], x_2: previous[0][1]}))

                dx_1 = float(dfdx_1.subs({x_1: previous[0][0], x_2: previous[0][1]}))
                dx_2 = float(dfdx_2.subs({x_1: previous[0][0], x_2: previous[0][1]}))

                g_df = np.array([[dx_1], [dx_2]])
                Amp_df = np.linalg.norm(g_df)

                if iteration == 1:
                    η = 0.01

                current = previous - (η * g_df.T)

                arr_fplot = np.append(arr_fplot, f_Value)
                arr_Aplot = np.append(arr_Aplot, Amp_df)
                arr_xplot = np.append(arr_xplot, previous[0])
                previous = current

                print(f"Iteration: {iteration}, Current Point: {current}, Function Value: {f_Value}, Gradient Magnitude: {Amp_df}")

    results = {
        'final_point': current.tolist(),
        'final_value': f_Value,
        'iterations': iteration,
    }

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True, port=8080)
