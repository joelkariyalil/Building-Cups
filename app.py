from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/calculate_pyramid', methods=['POST'])
def calculate_pyramid():
    try:
        # Get total cups from the request
        total_cups = int(request.json.get('totalCups'))

        # Perform the calculation
        a = 1
        b = 1
        c = -2 * total_cups
        d = (b**2) - (4 * a * c)
        sol1 = (-b - (d)**0.5) / (2 * a)
        sol2 = (-b + (d)**0.5) / (2 * a)

        # Checking for Complex Numbers
        if isinstance(sol1, complex):
            sol1 = sol1.real
        if isinstance(sol2, complex):
            sol2 = sol2.real

        # Discarding the Negative Values
        ans = int(sol2) if sol1 < 0 else int(sol1)

        val = ans * (ans + 1) // 2

        # Prepare the result data
        result_data = {
            'baseCups': ans,
            'usedCups': val,
            'remainingCups': total_cups - val
        }

        return jsonify(result_data)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
