from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import sympy as smp
import random
from pymoo.problems import get_problem
from pymoo.algorithms.moo.nsga2 import NSGA2
from pymoo.optimize import minimize
from pymoo.util.plotting import plot

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

@app.route("/api/optimize/gradient_descent", methods=['POST'])
def optimize_gradient_descent():
    return optimize('gradient_descent')

@app.route("/api/optimize/newton_raphson", methods=['POST'])
def optimize_newton_raphson():
    return optimize('newton_raphson')

@app.route("/api/optimize/moop", methods=['POST'])
def optimize_moop():
    return optimize_moop()

def optimize(method):
    function_name = request.args.get('function', default='cross_in_tray', type=str)

    if function_name not in function_map:
        return jsonify({'error': 'Function not found!'}), 400

    x_1, x_2 = smp.symbols('x_1 x_2', real=True)

    f = function_map[function_name](x_1, x_2)
    dfdx_1 = smp.diff(f, x_1)
    dfdx_2 = smp.diff(f, x_2)

    # Hessian calculation for Newton-Raphson
    hessian = smp.Matrix([[smp.diff(dfdx_1, x_1), smp.diff(dfdx_1, x_2)],
                           [smp.diff(dfdx_2, x_1), smp.diff(dfdx_2, x_2)]])

    iterations = 100
    results = []
    current = np.array([[random.uniform(-10, 10), random.uniform(-10, 10)]])
    
    try:
        if method == 'gradient_descent':
            iteration = 0
            Stop = 0.01
            Amp_df = 0.1
            print("Initial Point equal", current)

            while Amp_df > Stop and iteration < iterations:
                iteration += 1
                f_Value = float(f.subs({x_1: current[0][0], x_2: current[0][1]}))

                dx_1 = float(dfdx_1.subs({x_1: current[0][0], x_2: current[0][1]}))
                dx_2 = float(dfdx_2.subs({x_1: current[0][0], x_2: current[0][1]}))

                g_df = np.array([[dx_1], [dx_2]])
                Amp_df = np.linalg.norm(g_df)

                η = 0.01
                current = current - (η * g_df.T)

                results.append({
                    'iteration': iteration,
                    'current_point': current.tolist(),
                    'function_value': f_Value,
                    'gradient_magnitude': Amp_df
                })

                print(f"Iteration: {iteration}, Current Point: {current}, Function Value: {f_Value}, Gradient Magnitude: {Amp_df}")

        elif method == 'newton_raphson':
            iteration = 0
            Stop = 0.01
            print("Initial Point equal", current)

            while iteration < iterations:
                iteration += 1
                f_Value = float(f.subs({x_1: current[0][0], x_2: current[0][1]}))

                dx_1 = float(dfdx_1.subs({x_1: current[0][0], x_2: current[0][1]}))
                dx_2 = float(dfdx_2.subs({x_1: current[0][0], x_2: current[0][1]}))
                g_df = np.array([[dx_1], [dx_2]])

                hessian_eval = hessian.subs({x_1: current[0][0], x_2: current[0][1]})
                hessian_inv = hessian_eval.inv()

                current = current - hessian_inv @ g_df

                results.append({
                    'iteration': iteration,
                    'current_point': current.tolist(),
                    'function_value': f_Value
                })

                print(f"Iteration: {iteration}, Current Point: {current}, Function Value: {f_Value}")

                if np.linalg.norm(g_df) < Stop:
                    break

        final_value = float(f.subs({x_1: current[0][0], x_2: current[0][1]}))
        final_point = current.tolist()

        results_summary = {
            'final_point': final_point,
            'final_value': final_value,
            'iterations': iteration,
        }

        return jsonify(results_summary)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def optimize_moop():

    problem = get_problem("zdt1") 


    algorithm = NSGA2(pop_size=100)

    res = minimize(problem, algorithm, ('n_gen', 100), verbose=True)


    plot(problem.pareto_front(), no_fill=True)

    return jsonify({
        'pareto_front': res.F.tolist(), 
        'optimum_points': res.X.tolist()  
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)
