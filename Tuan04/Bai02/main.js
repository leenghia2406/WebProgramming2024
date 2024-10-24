function equationTwoSolution(event) {
    event.preventDefault();
    const a = document.getElementById("numA").value;
    const b = document.getElementById("numB").value;
    const c = document.getElementById("numC").value;
    let result = "";
    if (a == 0) {
        result = "Phương trình trên không phải phương trình bậc II";
    } else {
        const delta = Math.pow(b, 2) - 4 * a * c;
        if (delta < 0) {
            result = "Phương trình vô nghiệm";
        } else if (delta === 0) {
            const x = -b / (2 * a);
            result = "Phương trình có nghiệm kép x =" + x;
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            result = "Phương trình có hai nghiệm phân biệt x1 = " + x1 + " x2 = " + x2;
        }
    }
    document.getElementById("result").innerHTML = result;
}
document.getElementById("solveBtn").addEventListener('click', equationTwoSolution);
