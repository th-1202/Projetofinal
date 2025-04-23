function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (!peso || !altura || altura <= 0) {
      document.getElementById('resultado').textContent = 'Digite valores válidos.';
      return;
    }
    const imc = peso / (altura * altura);
    let r = '';
    if (imc < 17) r = 'Muito abaixo';
    else if (imc <= 18.4) r = 'Abaixo';
    else if (imc <= 24.9) r = 'Normal';
    else if (imc <= 34.9) r = 'Obesidade I';
    else if (imc <= 39.9) r = 'Obesidade II';
    else r = 'Obesidade III';
    document.getElementById('resultado').textContent = `IMC: ${imc.toFixed(2)} (${r})`;
}