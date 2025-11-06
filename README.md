## Calculadora Final

Proyecto web sencillo de una calculadora (HTML/CSS/JS) con pruebas unitarias para las operaciones básicas.

### Requisitos
- Node.js 16+ y npm

### Estructura
- `index.html`: interfaz de la calculadora
- `estilo.css`: estilos
- `funcionalidad.js`: lógica de UI y funciones puras de operaciones (exportadas para tests)
- `__tests__/operaciones.test.js`: suite de pruebas Jest

### Instalar y ejecutar pruebas

```bash
npm install
npm test
```

Esto ejecutará las pruebas unitarias de suma, resta, multiplicación y división (incluye casos con decimales, negativos, entradas no numéricas y división por cero).

### Notas
- La UI en el navegador mantiene su funcionamiento. La lógica de cálculo ahora está separada en funciones puras (sumar, restar, multiplicar, dividir) exportadas condicionalmente para poder ser probadas en Node.