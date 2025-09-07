import { Category, Lesson } from '../types';

export const categories: Category[] = [
  {
    id: 'basics',
    name: 'Fundamentos',
    description: 'Conceptos básicos de Excel y navegación',
    icon: 'BookOpen',
    color: 'bg-blue-500',
    lessons: [
      {
        id: 'basics-1',
        title: 'Introducción a Excel',
        description: 'Conoce la interfaz y funciones básicas',
        category: 'basics',
        difficulty: 'beginner',
        xpReward: 100,
        explanation: `
          Excel es una herramienta poderosa para trabajar con datos. En esta lección aprenderás:
          
          • Navegación básica en la hoja de cálculo
          • Selección de celdas y rangos
          • Introducción de datos
          • Atajos de teclado básicos:
            - Ctrl+C: Copiar
            - Ctrl+V: Pegar
            - Ctrl+Z: Deshacer
            - Ctrl+Y: Rehacer
            - Enter: Confirmar y bajar
            - Tab: Moverse a la derecha
        `,
        exercises: [
          {
            id: 'basics-1-1',
            instruction: 'Escribe "Hola" en la celda A1',
            targetCell: 'A1',
            solution: 'Hola',
            hints: ['Haz clic en la celda A1 y escribe "Hola"']
          },
          {
            id: 'basics-1-2',
            instruction: 'Escribe el número 42 en la celda B1',
            targetCell: 'B1',
            solution: '42',
            hints: ['Selecciona la celda B1 y escribe 42']
          },
          {
            id: 'basics-1-3',
            instruction: 'Escribe "2025" en la celda C1',
            targetCell: 'C1',
            solution: '2025',
            hints: ['Haz clic en la celda C1 y escribe 2025']
          },
          {
            id: 'basics-1-4',
            instruction: 'Escribe el número 100 en la celda A2',
            targetCell: 'A2',
            solution: '100',
            hints: ['Selecciona la celda A2 y escribe 100']
          },
          {
            id: 'basics-1-5',
            instruction: 'Escribe "Excel es útil" en la celda B2',
            targetCell: 'B2',
            solution: 'Excel es útil',
            hints: ['Haz clic en la celda B2 y escribe el texto tal como aparece']
          }
        ]
      }
    ]
  },
  {
    id: 'calculations',
    name: 'Cálculos',
    description: 'Operaciones matemáticas básicas',
    icon: 'Calculator',
    color: 'bg-green-500',
    lessons: [
      {
        id: 'calc-1',
        title: 'Operaciones Básicas',
        description: 'Suma, resta, multiplicación y división',
        category: 'calculations',
        difficulty: 'beginner',
        xpReward: 150,
        explanation: `
          Las fórmulas en Excel siempre comienzan con el signo igual (=). Puedes realizar operaciones básicas:
          
          • Suma: =A1+B1
          • Resta: =A1-B1
          • Multiplicación: =A1*B1
          • División: =A1/B1
          • Paréntesis para orden: =(A1+B1)*C1
          
          Ejemplos:
          =5+3 → 8
          =10-4 → 6
          =3*4 → 12
          =15/3 → 5
        `,
        exercises: [
          {
            id: 'calc-1-1',
            instruction: 'Calcula 5+3 en la celda A1',
            targetCell: 'A1',
            solution: '=5+3',
            hints: ['Recuerda empezar con =', 'Escribe =5+3']
          },
          {
            id: 'calc-1-2',
            instruction: 'Calcula 10*2 en la celda B1',
            targetCell: 'B1',
            solution: '=10*2',
            hints: ['Usa * para multiplicar', 'Escribe =10*2']
          },
          {
            id: "calc-1-3",
            instruction: "Resta 15 - 7 en la celda B2",
            targetCell: "B2",
            solution: "=15-7",
            hints: ["Usa - para restar", "Escribe =15-7"]
          },
          {
            id: "calc-1-4",
            instruction: "Divide 20 entre 4 en la celda B3",
            targetCell: "B3",
            solution: "=20/4",
            hints: ["Usa / para dividir", "Escribe =20/4"]
          },
          {
            id: "calc-1-5",
            instruction: "Calcula (5 + 3) * 2 en la celda B4",
            targetCell: "B4",
            solution: "=(5+3)*2",
            hints: [
              "Recuerda usar paréntesis para controlar el orden de operaciones",
              "Suma 5 + 3 primero, luego multiplica por 2",
              "Escribe =(5+3)*2"
            ]
          },
          {
            id: "calc-1-6",
            instruction: "Calcula 50 - 10 / 2 en la celda B5",
            targetCell: "B5",
            solution: "=50-10/2",
            hints: [
              "La división se realiza antes que la resta",
              "10 dividido por 2 es 5, luego 50 - 5",
              "Escribe =50-10/2"
            ]
          }
        ]
      },
      {
        id: 'calc-2',
        title: 'Cálculo de Porcentajes',
        description: 'Saca porcentajes y calcula aumentos o descuentos',
        category: 'basic-calculations',
        difficulty: 'beginner',
        xpReward: 150,
        explanation: `
          Calcular porcentajes es muy útil para encontrar descuentos, aumentos y proporciones:
      
          • Para obtener un porcentaje de un número:
            - =A1*10% → calcula el 10% de A1
      
          • Para aplicar un descuento del 25%:
            - =A1*(1-25%) → reduce A1 en un 25%
      
          • Para aplicar un aumento del 15%:
            - =A1*(1+15%) → incrementa A1 en un 15%
        `,
        exercises: [
          {
            id: 'calc-2-1',
            instruction: 'Calcula el 20% del valor en A1 en la celda B1',
            initialData: [
              [{value: '150', type: 'number'}, {value: '', type: 'number'}]
            ],
            targetCell: 'B1',
            solution: '=A1*20%',
            hints: ['Multiplica A1 por 20%', 'El resultado debe ser 30']
          },
          {
            id: 'calc-2-2',
            instruction: 'En la celda B1, calcula el precio final tras aplicar un 10% de descuento sobre A1',
            initialData: [
              [{value: '80', type: 'number'}, {value: '', type: 'number'}]
            ],
            targetCell: 'B1',
            solution: '=A1*(1-10%)',
            hints: ['Multiplica A1 por (1 - 10%)', 'El resultado debe ser 72']
          }
        ]
      },
      {
        id: 'calc-3',
        title: 'Potencias y Raíces',
        description: 'Eleva números y calcula raíces cuadradas',
        category: 'basic-calculations',
        difficulty: 'beginner',
        xpReward: 150,
        explanation: `
          Puedes usar potencias para elevar un número y funciones como RAIZ para calcular raíces cuadradas:

          • Elevar al cuadrado:
            - =A1^2 → A1 elevado al cuadrado

          • Elevar a cualquier potencia:
            - =A1^3 → A1 al cubo

          • Raíz cuadrada:
            - =RAIZ(A1) → raíz cuadrada de A1

          También puedes usar exponentes fraccionarios:
            - =A1^(1/2) es igual a =RAIZ(A1)
        `,
        exercises: [
          {
            id: 'calc-3-1',
            instruction: 'Eleva A1 al cuadrado',
            initialData: [
              [{value: '7', type: 'number'}, {value: '', type: 'number'}]
            ],
            targetCell: 'B1',
            solution: '=A1^2',
            hints: ['Usa A1^2', 'El resultado debe ser 49']
          },
          {
            id: 'calc-3-2',
            instruction: 'Calcula la raíz cuadrada de A1',
            initialData: [
              [{value: '81', type: 'number'}, {value: '', type: 'number'}]
            ],
            targetCell: 'B1',
            solution: '=RAIZ(A1)',
            hints: ['Usa =RAIZ(A1)', 'El resultado debe ser 9']
          }
        ]
      },
      {
        id: 'calc-5',
        title: 'Funciones MOD y COCIENTE',
        description: 'Obtener residuo o parte entera de una división',
        category: 'basic-calculations',
        difficulty: 'intermediate',
        xpReward: 200,
        explanation: `
          Las funciones MOD y COCIENTE permiten trabajar con divisiones:
      
          • MOD: Devuelve el residuo de una división
            - =MOD(10; 3) → 1 (porque 10 dividido entre 3 da 3 y sobra 1)
      
          • COCIENTE: Devuelve solo la parte entera de una división (sin decimales)
            - =COCIENTE(10; 3) → 3
      
          También puedes usar MOD y QUOTIENT si usas Excel en inglés.
        `,
        exercises: [
          {
            id: 'calc-5-1',
            instruction: 'Obtén el residuo de dividir A1 entre B1',
            initialData: [
              [{value: '17', type: 'number'}, {value: '5', type: 'number'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C1',
            solution: '=MOD(A1;B1)',
            hints: ['Usa =MOD(A1;B1)', '17 dividido entre 5 da 3 y sobra 2']
          },
          {
            id: 'calc-5-2',
            instruction: 'Calcula el residuo de dividir A1 entre B1',
            initialData: [
              [{value: '22', type: 'number'}, {value: '4', type: 'number'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C1',
            solution: '=MOD(A1;B1)',
            hints: ['Usa =MOD(A1;B1)', '22 dividido entre 4 deja un residuo de 2']
          },
          {
            id: 'calc-5-3',
            instruction: 'Obtén la parte entera de la división entre A1 y B1',
            initialData: [
              [{value: '19', type: 'number'}, {value: '4', type: 'number'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C1',
            solution: '=COCIENTE(A1;B1)',
            hints: ['Usa =COCIENTE(A1;B1)', '19 dividido entre 4 da 4 como parte entera']
          },
          {
            id: 'calc-5-4',
            instruction: 'Calcula el cociente (parte entera) de A1 dividido por B1',
            initialData: [
              [{value: '35', type: 'number'}, {value: '6', type: 'number'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C1',
            solution: '=COCIENTE(A1;B1)',
            hints: ['Usa =COCIENTE(A1;B1)', '35 entre 6 da 5 como parte entera']
          }
        ]
      }
      

      
    ]
  },
  {
    id: 'sum-functions',
    name: 'Funciones de Suma',
    description: 'SUMA, SUMAR.SI y más',
    icon: 'Plus',
    color: 'bg-purple-500',
    lessons: [
      {
        id: 'sum-1',
        title: 'Función SUMA',
        description: 'Suma rangos de celdas',
        category: 'sum-functions',
        difficulty: 'beginner',
        xpReward: 200,
        explanation: `
          La función SUMA te permite sumar múltiples celdas o rangos:
          
          • Sintaxis: =SUMA(rango)
          • Ejemplos:
            - =SUMA(A1:A5) → suma desde A1 hasta A5
            - =SUMA(A1;B1;C1) → suma celdas individuales
            - =SUMA(A1:A3;B1:B3) → suma múltiples rangos
          
          También puedes usar SUM (en inglés) que funciona igual.
        `,
        exercises: [
          {
            id: 'sum-1-1',
            instruction: 'Suma el rango A1:A3 en la celda A4',
            initialData: [
              [{value: '10', type: 'number'}, {value: '', type: 'text'}],
              [{value: '20', type: 'number'}, {value: '', type: 'text'}],
              [{value: '30', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A4',
            solution: '=SUMA(A1:A3)',
            hints: ['Usa =SUMA(A1:A3)', 'El resultado debe ser 60']
          },
          {
            id: 'sum-1-2',
            instruction: 'Suma las celdas A1, B1 y C1 en la celda D1',
            initialData: [
              [{value: '15', type: 'number'}, {value: '25', type: 'number'}, {value: '35', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'D1',
            solution: '=SUMA(A1;B1;C1)',
            hints: ['Usa =SUMA(A1;B1;C1)', 'Separa las celdas con punto y coma', 'El resultado debe ser 75']
          },
          {
            id: 'sum-1-3',
            instruction: 'Suma los rangos A1:A2 y B1:B2 en la celda C3',
            initialData: [
              [{value: '5', type: 'number'}, {value: '8', type: 'number'}, {value: '', type: 'text'}],
              [{value: '12', type: 'number'}, {value: '15', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C3',
            solution: '=SUMA(A1:A2;B1:B2)',
            hints: ['Usa =SUMA(A1:A2;B1:B2)', 'Separa los rangos con punto y coma', 'El resultado debe ser 40']
          }
        ]
      },
      {
        id: 'sum-2',
        title: 'Función SUMAR.SI',
        description: 'Suma condicional',
        category: 'sum-functions',
        difficulty: 'intermediate',
        xpReward: 250,
        explanation: `
          SUMAR.SI suma solo las celdas que cumplen una condición:
          
          • Sintaxis: =SUMAR.SI(rango; criterio; [suma_rango])
          • Ejemplos:
            - =SUMAR.SI(A1:A5; ">10") → suma valores mayores a 10
            - =SUMAR.SI(A1:A5; "Producto"; B1:B5) → suma B donde A="Producto"
            - =SUMAR.SI(A1:A5; ">=100") → suma valores >= 100
          
          También puedes usar SUMIF (en inglés).
        `,
        exercises: [
          {
            id: 'sum-2-1',
            instruction: 'Suma solo los valores mayores a 15 del rango A1:A4',
            initialData: [
              [{value: '10', type: 'number'}, {value: '', type: 'text'}],
              [{value: '20', type: 'number'}, {value: '', type: 'text'}],
              [{value: '5', type: 'number'}, {value: '', type: 'text'}],
              [{value: '25', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A5',
            solution: '=SUMAR.SI(A1:A4;">15")',
            hints: ['Usa =SUMAR.SI(A1:A4;">15")', 'El resultado debe ser 45 (20+25)']
          },
          {
            id: 'sum-2-2',
            instruction: 'Suma los valores de la columna B donde en la columna A aparezca "Manzana"',
            initialData: [
              [{value: 'Manzana', type: 'text'}, {value: '10', type: 'number'}],
              [{value: 'Pera', type: 'text'}, {value: '5', type: 'number'}],
              [{value: 'Manzana', type: 'text'}, {value: '8', type: 'number'}],
              [{value: 'Uva', type: 'text'}, {value: '12', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B5',
            solution: '=SUMAR.SI(A1:A4;"Manzana";B1:B4)',
            hints: ['Usa =SUMAR.SI(A1:A4;"Manzana";B1:B4)', 'El resultado debe ser 18 (10+8)']
          },
          {
            id: 'sum-2-3',
            instruction: 'Suma los valores de A1:A5 que sean mayores o iguales a 50',
            initialData: [
              [{value: '40', type: 'number'}, {value: '', type: 'text'}],
              [{value: '55', type: 'number'}, {value: '', type: 'text'}],
              [{value: '70', type: 'number'}, {value: '', type: 'text'}],
              [{value: '20', type: 'number'}, {value: '', type: 'text'}],
              [{value: '90', type: 'number'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A6',
            solution: '=SUMAR.SI(A1:A5;">=50")',
            hints: ['Usa =SUMAR.SI(A1:A5;">=50")', 'El resultado debe ser 215 (55+70+90)']
          }
        ]
      },
      {
        id: 'sum-3',
        title: 'Función SUMAR.SI.CONJUNTO',
        description: 'Suma condicional con múltiples criterios',
        category: 'sum-functions',
        difficulty: 'advanced',
        xpReward: 400,
        explanation: `
          SUMAR.SI.CONJUNTO permite sumar valores que cumplen **más de una condición**.
      
          • Sintaxis: =SUMAR.SI.CONJUNTO(rango_suma; rango_criterios1; criterio1; [rango_criterios2; criterio2]; …)
          • Ejemplos:
            - =SUMAR.SI.CONJUNTO(C1:C10; A1:A10; "Manzana"; B1:B10; ">5")
              → Suma los valores de C cuando en A hay "Manzana" y en B el valor es mayor a 5
            - =SUMAR.SI.CONJUNTO(B1:B8; A1:A8; "Rojo"; C1:C8; "<=100")
              → Suma los valores de B cuando A="Rojo" y C ≤ 100
        `,
        exercises: [
          {
            id: 'sum-3-1',
            instruction: 'Suma los valores de la columna C donde A="Manzana" y B sea mayor que 5',
            initialData: [
              [{value: 'Manzana', type: 'text'}, {value: '3', type: 'number'}, {value: '10', type: 'number'}],
              [{value: 'Pera', type: 'text'}, {value: '7', type: 'number'}, {value: '15', type: 'number'}],
              [{value: 'Manzana', type: 'text'}, {value: '8', type: 'number'}, {value: '20', type: 'number'}],
              [{value: 'Manzana', type: 'text'}, {value: '2', type: 'number'}, {value: '5', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C5',
            solution: '=SUMAR.SI.CONJUNTO(C1:C4;A1:A4;"Manzana";B1:B4;">5")',
            hints: ['Aplica dos condiciones: A="Manzana" y B>5', 'El resultado debe ser 20 (solo fila 3 cumple)']
          },
          {
            id: 'sum-3-2',
            instruction: 'Suma los valores de B donde A="Rojo" y C ≤ 100',
            initialData: [
              [{value: 'Rojo', type: 'text'}, {value: '50', type: 'number'}, {value: '100', type: 'number'}],
              [{value: 'Rojo', type: 'text'}, {value: '30', type: 'number'}, {value: '120', type: 'number'}],
              [{value: 'Azul', type: 'text'}, {value: '40', type: 'number'}, {value: '80', type: 'number'}],
              [{value: 'Rojo', type: 'text'}, {value: '70', type: 'number'}, {value: '90', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B5',
            solution: '=SUMAR.SI.CONJUNTO(B1:B4;A1:A4;"Rojo";C1:C4;"<=100")',
            hints: ['Aplica dos condiciones: A="Rojo" y C<=100', 'El resultado debe ser 120 (50+70)']
          },
          {
            id: 'sum-3-3',
            instruction: 'Suma los valores de C cuando A="Producto1" y B sea "Zona1"',
            initialData: [
              [{value: 'Producto1', type: 'text'}, {value: 'Zona1', type: 'text'}, {value: '100', type: 'number'}],
              [{value: 'Producto2', type: 'text'}, {value: 'Zona1', type: 'text'}, {value: '150', type: 'number'}],
              [{value: 'Producto1', type: 'text'}, {value: 'Zona2', type: 'text'}, {value: '200', type: 'number'}],
              [{value: 'Producto1', type: 'text'}, {value: 'Zona1', type: 'text'}, {value: '50', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C5',
            solution: '=SUMAR.SI.CONJUNTO(C1:C4;A1:A4;"Producto1";B1:B4;"Zona1")',
            hints: ['Filtra por dos condiciones de texto', 'El resultado debe ser 150 (100+50)']
          },
          {
            id: 'sum-3-4',
            instruction: 'Reto: Suma los valores de D cuando A="Producto1", B="Zona1" y C sea mayor que 50',
            initialData: [
              [{value: 'Producto1', type: 'text'}, {value: 'Zona1', type: 'text'}, {value: '40', type: 'number'}, {value: '100', type: 'number'}],
              [{value: 'Producto1', type: 'text'}, {value: 'Zona1', type: 'text'}, {value: '60', type: 'number'}, {value: '200', type: 'number'}],
              [{value: 'Producto2', type: 'text'}, {value: 'Zona1', type: 'text'}, {value: '80', type: 'number'}, {value: '300', type: 'number'}],
              [{value: 'Producto1', type: 'text'}, {value: 'Zona2', type: 'text'}, {value: '70', type: 'number'}, {value: '400', type: 'number'}],
              [{value: 'Producto1', type: 'text'}, {value: 'Zona1', type: 'text'}, {value: '90', type: 'number'}, {value: '150', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'D6',
            solution: '=SUMAR.SI.CONJUNTO(D1:D5;A1:A5;"Producto1";B1:B5;"Zona1";C1:C5;">50")',
            hints: [
              'Recuerda: rango_suma es D1:D5',
              'Condición 1: A="Producto1"',
              'Condición 2: B="Zona1"',
              'Condición 3: C>50',
              'El resultado debe ser 350 (200 + 150)'
            ]
          }          
        ]
      }
      
    ]
  },
  {
    id: 'logical-functions',
    name: 'Funciones Lógicas',
    description: 'SI, Y, O y más',
    icon: 'GitBranch',
    color: 'bg-orange-500',
    lessons: [
      {
        id: 'logical-1',
        title: 'Función SI',
        description: 'Condiciones lógicas',
        category: 'logical-functions',
        difficulty: 'intermediate',
        xpReward: 200,
        explanation: `
          La función SI evalúa una condición y devuelve un valor según el resultado:
          
          • Sintaxis: =SI(condición; valor_si_verdadero; valor_si_falso)
          • Ejemplos:
            - =SI(A1>10; "Mayor"; "Menor") → "Mayor" si A1>10, sino "Menor"
            - =SI(A1=""; "Vacío"; A1) → "Vacío" si A1 está vacía, sino el valor
            - =SI(A1>=18; "Adulto"; "Menor") → clasifica por edad
          
          También puedes usar IF (en inglés).
        `,
        exercises: [
          {
            id: 'logical-1-1',
            instruction: 'Si A1 es mayor a 50, muestra "Alto", sino "Bajo"',
            initialData: [
              [{value: '75', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=SI(A1>50;"Alto";"Bajo")',
            hints: ['Usa =SI(A1>50;"Alto";"Bajo")', 'El resultado debe ser "Alto"']
          }
        ]
      },
      {
        id: 'logical-2',
        title: 'Funciones Y y O',
        description: 'Múltiples condiciones',
        category: 'logical-functions',
        difficulty: 'intermediate',
        xpReward: 250,
        explanation: `
          Las funciones Y y O evalúan múltiples condiciones:
          
          • Y: Todas las condiciones deben ser verdaderas
            - =Y(A1>10; B1<20) → verdadero si ambas condiciones se cumplen
          
          • O: Al menos una condición debe ser verdadera
            - =O(A1>10; B1<20) → verdadero si cualquiera se cumple
          
          También puedes usar AND y OR (en inglés).
        `,
        exercises: [
          {
            id: 'logical-2-1',
            instruction: 'Verifica si A1>10 Y B1<30',
            initialData: [
              [{value: '15', type: 'number'}, {value: '25', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C1',
            solution: '=Y(A1>10;B1<30)',
            hints: ['Usa =Y(A1>10;B1<30)', 'El resultado debe ser VERDADERO']
          }
        ]
      },
      {
        id: 'logical-3',
        title: 'Función NO',
        description: 'Invierte un valor lógico',
        category: 'logical-functions',
        difficulty: 'beginner',
        xpReward: 150,
        explanation: `
          La función NO invierte un valor lógico. Si es VERDADERO, devuelve FALSO, y viceversa.
          
          • NO(valor_lógico)
            - =NO(VERDADERO) → FALSO
            - =NO(FALSO) → VERDADERO
      
          También puedes usar NOT si tu Excel está en inglés.
        `,
        exercises: [
          {
            id: 'logical-3-1',
            instruction: 'Evalúa si NO(A1>10)',
            initialData: [
              [{value: '8', type: 'number'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=NO(A1>10)',
            hints: ['A1>10 es FALSO, así que NO(FALSO) es VERDADERO']
          },
          {
            id: 'logical-3-2',
            instruction: 'Evalúa si A1 NO es mayor que 50',
            initialData: [
              [{value: '45', type: 'number'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=NO(A1>50)',
            hints: ['A1>50 es FALSO, así que NO(FALSO) es VERDADERO']
          }
        ]
      },
      {
        id: 'logic-4',
        title: 'Función ESBLANCO',
        description: 'Comprobar si una celda está vacía',
        category: 'logic-functions',
        difficulty: 'beginner',
        xpReward: 160,
        explanation: `
      La función ESBLANCO comprueba si una celda está vacía y devuelve VERDADERO si no contiene ningún valor.
      
      - Sintaxis:  
        =ESBLANCO(valor)
      
      - Ejemplo:  
        =ESBLANCO(A1)  
        Devuelve VERDADERO si A1 está vacía, y FALSO si contiene texto, número, fórmula, etc.
      
      Esta función es útil cuando necesitas detectar celdas vacías para tomar decisiones con funciones como SI.
        `,
        exercises: [
          {
            id: 'logic-4-1',
            instruction: 'Escribe en la celda B1 una fórmula que compruebe si A1 está vacía.',
            initialData: [
              [{value: 'Hola', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=ESBLANCO(A1)',
            hints: ['Usa ESBLANCO con la celda A1', 'Una celda vacía da como resultado VERDADERO']
          },
          {
            id: 'logic-4-2',
            instruction: 'En la celda C2, escribe una fórmula que diga "Vacío" si A2 está vacía, y "Lleno" si no (tienes que saber usar la funcion SI).',
            initialData: [
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C2',
            solution: '=SI(ESBLANCO(A2); "Vacío"; "Lleno")',
            hints: ['Combina SI con ESBLANCO', 'El valor si verdadero es "Vacío"']
          }
        ]
      },
      {
        id: 'logic-5',
        title: 'Función SI.ERROR',
        description: 'Manejo de errores',
        category: 'logic-functions',
        difficulty: 'intermediate',
        xpReward: 250,
        explanation: `
          SI.ERROR permite manejar los errores en fórmulas devolviendo un valor alternativo:
          
          • Sintaxis: =SI.ERROR(valor; valor_si_error)
          • Ejemplos:
            - =SI.ERROR(10/0; "Error en división") → devuelve "Error en división"
            - =SI.ERROR(BUSCARV("Ana";A1:B5;2;FALSO);"No encontrado") → devuelve "No encontrado" si no encuentra "Ana"
          
          También puedes usar IFERROR en inglés.
        `,
        exercises: [
          {
            id: 'logic-5-1',
            instruction: 'Divide 10 entre 0 y usa SI.ERROR para devolver "Error" en caso de fallo',
            initialData: [
              [{value: '10', type: 'number'}, {value: '0', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A2',
            solution: '=SI.ERROR(A1/B1;"Error")',
            hints: ['Intenta =A1/B1 pero usa SI.ERROR para capturar el error', 'El resultado debe ser "Error"']
          },
          {
            id: 'logic-5-2',
            instruction: 'Usa SI.ERROR para buscar "Luis" en A1:B2 y devolver "No encontrado" si no existe',
            initialData: [
              [{value: 'Ana', type: 'text'}, {value: '25', type: 'number'}],
              [{value: 'Maria', type: 'text'}, {value: '30', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A3',
            solution: '=SI.ERROR(BUSCARV("Luis";A1:B2;2;FALSO);"No encontrado")',
            hints: ['Busca "Luis" con BUSCARV y atrápalo con SI.ERROR', 'El resultado debe ser "No encontrado"']
          }
        ]
      },
      {
        id: 'logic-6',
        title: 'Función SI.ND',
        description: 'Manejo del error #N/D',
        category: 'logic-functions',
        difficulty: 'intermediate',
        xpReward: 250,
        explanation: `
          SI.ND devuelve un valor alternativo solo si la fórmula genera el error #N/D:
          
          • Sintaxis: =SI.ND(valor; valor_si_nd)
          • Ejemplos:
            - =SI.ND(BUSCARV("Pedro";A1:B5;2;FALSO);"No existe") → devuelve "No existe" si Pedro no está en la tabla
          
          También puedes usar IFNA en inglés.
        `,
        exercises: [
          {
            id: 'logic-6-1',
            instruction: 'Busca "Pedro" en A1:B2 y usa SI.ND para devolver "No existe" si no aparece',
            initialData: [
              [{value: 'Ana', type: 'text'}, {value: '25', type: 'number'}],
              [{value: 'Maria', type: 'text'}, {value: '30', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A3',
            solution: '=SI.ND(BUSCARV("Pedro";A1:B2;2;FALSO);"No existe")',
            hints: ['Usa BUSCARV dentro de SI.ND', 'El resultado debe ser "No existe"']
          },
          {
            id: 'logic-6-2',
            instruction: 'Busca "Ana" en A1:B2 y usa SI.ND para mostrar "No esta" si falla',
            initialData: [
              [{value: 'Ana', type: 'text'}, {value: '40', type: 'number'}],
              [{value: 'Maria', type: 'text'}, {value: '30', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A3',
            solution: '=SI.ND(BUSCARV("Ana";A1:B2;2;FALSO);"No esta")',
            hints: ['El resultado debe ser 40 porque Ana sí está', 'Usa SI.ND para manejar el #N/D en caso de fallo']
          }
        ]
      },
      {
        id: 'logic-7',
        title: 'Función SI.CONJUNTO',
        description: 'Múltiples condiciones sin anidar SI',
        category: 'logic-functions',
        difficulty: 'advanced',
        xpReward: 300,
        explanation: `
          SI.CONJUNTO evalúa múltiples condiciones en orden y devuelve el resultado de la primera verdadera:
          
          • Sintaxis: =SI.CONJUNTO(condición1; resultado1; condición2; resultado2; ...)
          • Ejemplos:
            - =SI.CONJUNTO(A1<5;"Pequeño";A1<10;"Medio";A1>=10;"Grande")
            - =SI.CONJUNTO(B1="Rojo";"Stop";B1="Verde";"Go")
          
          También puedes usar IFS en inglés.
        `,
        exercises: [
          {
            id: 'logic-7-1',
            instruction: 'Clasifica el valor de A1: si <5 "Bajo", si <10 "Medio", si >=10 "Alto"',
            initialData: [
              [{value: '7', type: 'number'}],
              [{value: '', type: 'text'}]
            ],
            targetCell: 'A2',
            solution: '=SI.CONJUNTO(A1<5;"Bajo";A1<10;"Medio";A1>=10;"Alto")',
            hints: ['Evalúa en orden las condiciones', 'Con A1=7 el resultado debe ser "Medio"']
          },
          {
            id: 'logic-7-2',
            instruction: 'En A1 hay un color. Si es "Rojo" devuelve "Stop", si es "Verde" devuelve "Go", si es "Amarillo" devuelve "Espera"',
            initialData: [
              [{value: 'Verde', type: 'text'}],
              [{value: '', type: 'text'}]
            ],
            targetCell: 'A2',
            solution: '=SI.CONJUNTO(A1="Rojo";"Stop";A1="Verde";"Go";A1="Amarillo";"Espera")',
            hints: ['Verifica las condiciones en orden', 'Con A1="Verde" el resultado debe ser "Go"']
          }
        ]
      }
      
      

    ]
  },
  {
    id: 'text-functions',
    name: 'Funciones de Texto',
    description: 'LARGO, IZQUIERDA, DERECHA y más',
    icon: 'Type',
    color: 'bg-teal-500',
    lessons: [
      {
        id: 'text-1',
        title: 'Función LARGO',
        description: 'Longitud de texto',
        category: 'text-functions',
        difficulty: 'beginner',
        xpReward: 150,
        explanation: `
          La función LARGO cuenta el número de caracteres en un texto:
          
          • Sintaxis: =LARGO(texto)
          • Ejemplos:
            - =LARGO("Hola") → 4
            - =LARGO(A1) → número de caracteres en A1
            - =LARGO("") → 0 (texto vacío)
          
          También puedes usar LEN (en inglés).
        `,
        exercises: [
          {
            id: 'text-1-1',
            instruction: 'Cuenta los caracteres de A1',
            initialData: [
              [{value: 'Excel', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=LARGO(A1)',
            hints: ['Usa =LARGO(A1)', 'El resultado debe ser 5']
          },
          {
            id: 'text-1-2',
            instruction: 'Cuenta los caracteres de A1',
            initialData: [
              [{value: 'Funciones', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=LARGO(A1)',
            hints: ['Usa =LARGO(A1)', 'El resultado debe ser 9']
          },
          {
            id: 'text-1-3',
            instruction: 'Cuenta los caracteres de A1 (incluye espacios)',
            initialData: [
              [{value: 'Hola mundo', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=LARGO(A1)',
            hints: ['Usa =LARGO(A1)', 'El resultado debe ser 10']
          }

        ]
      },
      {
        id: 'text-2',
        title: 'Funciones IZQUIERDA y DERECHA',
        description: 'Extraer caracteres',
        category: 'text-functions',
        difficulty: 'intermediate',
        xpReward: 200,
        explanation: `
          Estas funciones extraen caracteres del inicio o final de un texto:
          
          • IZQUIERDA: =IZQUIERDA(texto; num_caracteres)
            - =IZQUIERDA("Hola"; 2) → "Ho"
          
          • DERECHA: =DERECHA(texto; num_caracteres)
            - =DERECHA("Mundo"; 3) → "ndo"
          
          También puedes usar LEFT y RIGHT (en inglés).
        `,
        exercises: [
          {
            id: 'text-2-1',
            instruction: 'Extrae los primeros 3 caracteres de A1',
            initialData: [
              [{value: 'Microsoft', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=IZQUIERDA(A1;3)',
            hints: ['Usa =IZQUIERDA(A1;3)', 'El resultado debe ser "Mic"']
          },
          {
            id: 'text-2-2',
            instruction: 'Extrae los primeros 4 caracteres de A1',
            initialData: [
              [{value: 'Barcelona', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=IZQUIERDA(A1;4)',
            hints: ['Usa =IZQUIERDA(A1;4)', 'El resultado debe ser "Barc"']
          },
          {
            id: 'text-3-1',
            instruction: 'Extrae los últimos 3 caracteres de A1',
            initialData: [
              [{value: 'Ordenador', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=DERECHA(A1;3)',
            hints: ['Usa =DERECHA(A1;3)', 'El resultado debe ser "dor"']
          },
          {
            id: 'text-3-2',
            instruction: 'Extrae los últimos 2 caracteres de A1',
            initialData: [
              [{value: 'Fórmula', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=DERECHA(A1;2)',
            hints: ['Usa =DERECHA(A1;2)', 'El resultado debe ser "la"']
          }

        ]
      },
      {
        id: 'text-3',
        title: 'Función CONCATENAR',
        description: 'Unir textos en una sola celda',
        category: 'text-functions',
        difficulty: 'intermediate',
        xpReward: 200,
        explanation: `
          La función CONCATENAR (o CONCAT en versiones modernas) sirve para unir varios textos o celdas en una sola:
      
          • CONCATENAR: =CONCATENAR(texto1; texto2; ...)
            - =CONCATENAR("Hola"; " Mundo") → "Hola Mundo"
      
          También puedes usar & como alternativa:
            - =A1 & " " & B1
        `,
        exercises: [
          {
            id: 'text-3-1',
            instruction: 'Une los valores de A1 y B1 en la celda C1',
            initialData: [
              [{value: 'Hola', type: 'text'}, {value: 'Mundo', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C1',
            solution: '=CONCATENAR(A1;B1)',
            hints: ['Usa =CONCATENAR(A1;B1)', 'El resultado será "HolaMundo"']
          },
          {
            id: 'text-3-2',
            instruction: 'Une A1 y B1 con un espacio entre medio',
            initialData: [
              [{value: 'Buenos', type: 'text'}, {value: 'días', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C1',
            solution: '=CONCATENAR(A1;" ";B1)',
            hints: ['Incluye un espacio entre comillas: " "', 'El resultado debe ser "Buenos días"']
          },
          {
            id: 'text-3-3',
            instruction: 'Une el nombre y la edad con el texto "años"',
            initialData: [
              [{value: 'Laura', type: 'text'}, {value: '30', type: 'number'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C1',
            solution: '=CONCATENAR(A1;" tiene ";B1;" años")',
            hints: ['Concatena con texto adicional', 'El resultado debe ser "Laura tiene 30 años"']
          }
        ]
      },
      {
          id: 'text-4',
          title: 'Función EXTRAE',
          description: 'Obtener una parte del texto',
          category: 'text-functions',
          difficulty: 'intermediate',
          xpReward: 200,
          explanation: `
            La función EXTRAE permite extraer una parte específica de un texto, indicando desde qué posición comenzar y cuántos caracteres tomar:
        
            • EXTRAE: =EXTRAE(texto; posición_inicial; número_de_caracteres)
              - =EXTRAE("Ordenador"; 2; 4) → "rden"
        
            También puedes usar MID si tienes Excel en inglés.
          `,
          exercises: [
            {
              id: 'text-4-1',
              instruction: 'Extrae 3 caracteres desde la posición 2 de A1',
              initialData: [
                [{value: 'Madrid', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=EXTRAE(A1;2;3)',
              hints: ['Usa =EXTRAE(A1;2;3)', 'El resultado debe ser "adr"']
            },
            {
              id: 'text-4-2',
              instruction: 'Extrae 4 caracteres desde la posición 4 de A1',
              initialData: [
                [{value: 'Barcelona', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=EXTRAE(A1;4;4)',
              hints: ['Usa =EXTRAE(A1;4;4)', 'El resultado debe ser "cele"']
            },
            {
              id: 'text-4-3',
              instruction: 'Extrae 5 caracteres desde la posición 1 de A1',
              initialData: [
                [{value: 'Valencia', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=EXTRAE(A1;1;5)',
              hints: ['Usa =EXTRAE(A1;1;5)', 'El resultado debe ser "Valen"']
            }
          ]
        },
        {
          id: 'text-5',
          title: 'Funciones MAYUSC, MINUSC y NOMPROPIO',
          description: 'Cambiar mayúsculas, minúsculas y capitalizar texto',
          category: 'text-functions',
          difficulty: 'beginner',
          xpReward: 180,
          explanation: `
        Estas funciones permiten cambiar el formato del texto:

        - =MAYUSC(texto): convierte todo el texto en mayúsculas.
        - =MINUSC(texto): convierte todo el texto en minúsculas.
        - =NOMPROPIO(texto): convierte la primera letra de cada palabra en mayúscula.

        Son útiles para estandarizar nombres y textos introducidos por usuarios.
          `,
          exercises: [
            {
              id: 'text-5-1',
              instruction: 'Escribe en la celda B2 la fórmula para convertir el texto de A2 a mayúsculas.',
              initialData: [
                [{value: 'Texto original', type: 'text'}, {value: 'Resultado', type: 'text'}],
                [{value: 'hola mundo', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B2',
              solution: '=MAYUSC(A2)',
              hints: ['Utiliza MAYUSC para convertir todo a mayúsculas']
            },
            {
              id: 'text-5-2',
              instruction: 'Introduce en la celda B2 la fórmula que transforma el texto de A2 en minúsculas.',
              initialData: [
                [{value: 'Texto original', type: 'text'}, {value: 'Resultado', type: 'text'}],
                [{value: 'EXCEL ES GENIAL', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B2',
              solution: '=MINUSC(A2)',
              hints: ['MINUSC convierte a minúsculas']
            },
            {
              id: 'text-5-3',
              instruction: 'Escribe en la celda B2 la fórmula que convierte el texto de A2 a formato nombre propio.',
              initialData: [
                [{value: 'Texto original', type: 'text'}, {value: 'Resultado', type: 'text'}],
                [{value: 'juan perez gomez', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B2',
              solution: '=NOMPROPIO(A2)',
              hints: ['NOMPROPIO pone mayúscula inicial en cada palabra']
            }
          ]
        },
        {
          id: 'text-6',
          title: 'Funciones HALLAR y ENCONTRAR',
          description: 'Buscar la posición de un texto dentro de otro',
          category: 'text-functions',
          difficulty: 'intermediate',
          xpReward: 220,
          explanation: `
        Las funciones HALLAR y ENCONTRAR permiten localizar la posición de un texto dentro de otro.
        
        • Sintaxis:  
          =HALLAR(texto_buscado; dentro_del_texto; [posición_inicial])  
          =ENCONTRAR(texto_buscado; dentro_del_texto; [posición_inicial])  
        
        Diferencias:  
        - HALLAR **no distingue mayúsculas/minúsculas**.  
        - ENCONTRAR **sí distingue mayúsculas/minúsculas**.  
        
        Ejemplos:  
        - =HALLAR("a"; "Casa") → 2  
        - =ENCONTRAR("a"; "Casa") → 3 (porque distingue mayúsculas)
          `,
          exercises: [
            {
              id: 'text-6-1',
              instruction: 'Encuentra la posición de la letra "a" en la palabra "Banana" usando HALLAR.',
              initialData: [
                [{value: 'Banana', type: 'text'}, {value: '', type: 'text'}],
                [{value: '', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=HALLAR("a";A1)',
              hints: ['Usa HALLAR("a";A1)', 'El resultado debe ser 2']
            },
            {
              id: 'text-6-2',
              instruction: 'Encuentra la posición de la letra "C" en la palabra "Casa" usando ENCONTRAR.',
              initialData: [
                [{value: 'Casa', type: 'text'}, {value: '', type: 'text'}],
                [{value: '', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=ENCONTRAR("C";A1)',
              hints: ['Recuerda que ENCONTRAR distingue mayúsculas', 'El resultado debe ser 1']
            },
            {
              id: 'text-6-3',
              instruction: 'Usa HALLAR para encontrar la posición de "@" en la dirección de correo en A1.',
              initialData: [
                [{value: 'usuario@mail.com', type: 'text'}, {value: '', type: 'text'}],
                [{value: '', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=HALLAR("@";A1)',
              hints: ['Usa HALLAR("@";A1)', 'El resultado debe ser 8']
            }
          ]
        },
        {
          id: 'text-7',
          title: 'Funciones SUSTITUIR y REEMPLAZAR',
          description: 'Reemplazar partes de un texto',
          category: 'text-functions',
          difficulty: 'intermediate',
          xpReward: 230,
          explanation: `
        Las funciones SUSTITUIR y REEMPLAZAR permiten cambiar partes de un texto por otro.
        
        • SUSTITUIR: reemplaza un texto existente por otro.  
          Sintaxis: =SUSTITUIR(texto; texto_original; nuevo_texto; [n_ocasión])  
        
        • REEMPLAZAR: sustituye un número de caracteres en una posición concreta del texto.  
          Sintaxis: =REEMPLAZAR(texto_original; posición_inicial; núm_caracteres; nuevo_texto)  
        
        Ejemplos:  
        - =SUSTITUIR("Hola Mundo"; "Mundo"; "Excel") → "Hola Excel"  
        - =REEMPLAZAR("12345"; 2; 3; "ABC") → "1ABC5"  
          `,
          exercises: [
            {
              id: 'text-7-1',
              instruction: 'Usa SUSTITUIR para reemplazar la palabra "Mundo" por "Excel" en A1.',
              initialData: [
                [{value: 'Hola Mundo', type: 'text'}, {value: '', type: 'text'}],
                [{value: '', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=SUSTITUIR(A1;"Mundo";"Excel")',
              hints: ['Usa SUSTITUIR con los argumentos correctos', 'El resultado debe ser "Hola Excel"']
            },
            {
              id: 'text-7-2',
              instruction: 'En A1 está el texto "12345". Reemplaza los tres caracteres desde la posición 2 por "ABC" usando REEMPLAZAR.',
              initialData: [
                [{value: '12345', type: 'text'}, {value: '', type: 'text'}],
                [{value: '', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=REEMPLAZAR(A1;2;3;"ABC")',
              hints: ['La posición inicial es 2 y el número de caracteres es 3', 'El resultado debe ser "1ABC5"']
            },
            {
              id: 'text-7-3',
              instruction: 'Cambia solo la primera aparición de "a" en el texto "Banana" por "o" usando SUSTITUIR.',
              initialData: [
                [{value: 'Banana', type: 'text'}, {value: '', type: 'text'}],
                [{value: '', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=SUSTITUIR(A1;"a";"o";1)',
              hints: ['Recuerda usar el cuarto argumento para indicar la aparición', 'El resultado debe ser "Bonana"']
            }
          ]
        },
        {
          id: 'text-8',
          title: 'Función ESPACIOS',
          description: 'Eliminar espacios sobrantes en un texto',
          category: 'text-functions',
          difficulty: 'beginner',
          xpReward: 150,
          explanation: `
        La función ESPACIOS elimina todos los espacios sobrantes en un texto, dejando solo un espacio entre palabras.  
        También elimina los espacios al principio y al final del texto.  
        
        Sintaxis: =ESPACIOS(texto)
        
        Ejemplos:  
        - =ESPACIOS("   Hola   Mundo   ") → "Hola Mundo"  
        - =ESPACIOS(" Excel   es   útil ") → "Excel es útil"
          `,
          exercises: [
            {
              id: 'text-8-1',
              instruction: 'En A1 está el texto "   Hola   Mundo   ". Usa ESPACIOS para limpiarlo.',
              initialData: [
                [{value: '   Hola   Mundo   ', type: 'text'}, {value: '', type: 'text'}],
                [{value: '', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=ESPACIOS(A1)',
              hints: ['Recuerda que ESPACIOS elimina espacios extra', 'El resultado debe ser "Hola Mundo"']
            },
            {
              id: 'text-8-2',
              instruction: 'En A1 está el texto " Excel   es   útil ". Usa ESPACIOS para corregirlo.',
              initialData: [
                [{value: ' Excel   es   útil ', type: 'text'}, {value: '', type: 'text'}],
                [{value: '', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=ESPACIOS(A1)',
              hints: ['La función eliminará los espacios al inicio y entre palabras', 'El resultado debe ser "Excel es útil"']
            },
            {
              id: 'text-8-3',
              instruction: 'Corrige con ESPACIOS el texto en A1: "  Aprende   Excel   Fácil  " para que quede bien escrito.',
              initialData: [
                [{value: '  Aprende   Excel   Fácil  ', type: 'text'}, {value: '', type: 'text'}],
                [{value: '', type: 'text'}, {value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=ESPACIOS(A1)',
              hints: ['ESPACIOS también elimina los espacios iniciales y finales', 'El resultado debe ser "Aprende Excel Fácil"']
            }
          ]
        },
        {
          id: 'text-9',
          title: 'Función UNICADENAS',
          description: 'Unir varios textos con un delimitador',
          category: 'text-functions',
          difficulty: 'intermediate',
          xpReward: 220,
          explanation: `
        La función UNICADENAS (TEXTJOIN en inglés) permite unir varios textos en una sola celda, usando un delimitador (como una coma, un espacio o un guion).  
        Además, puedes indicar si quieres ignorar celdas vacías.  
        
        Sintaxis: =UNICADENAS(delimitador; ignorar_vacíos; texto1; [texto2]; …)
        
        • delimitador → el carácter o texto que separa los valores (por ejemplo, ", " o " - ")  
        • ignorar_vacíos → VERDADERO para omitir celdas vacías, FALSO para incluirlas  
        • texto1, texto2… → los valores o rangos de texto a unir  
        
        Ejemplos:  
        - =UNICADENAS(", "; VERDADERO; A1:A3) → "Manzana, Pera, Uva"  
        - =UNICADENAS(" - "; FALSO; A1:A3) → "Manzana -  - Uva"  
          `,
          exercises: [
            {
              id: 'text-9-1',
              instruction: 'Une los valores de A1:A3 separados por coma y espacio.',
              initialData: [
                [{value: 'Manzana', type: 'text'}],
                [{value: 'Pera', type: 'text'}],
                [{value: 'Uva', type: 'text'}],
                [{value: '', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=UNICADENAS(", "; VERDADERO; A1:A3)',
              hints: [
                'Usa coma y espacio como delimitador → ", "',
                'El resultado debe ser "Manzana, Pera, Uva"'
              ]
            },
            {
              id: 'text-9-2',
              instruction: 'En A1:A4 hay valores, pero A3 está vacío. Une todo con " - " sin omitir vacíos.',
              initialData: [
                [{value: 'Rojo', type: 'text'}],
                [{value: 'Azul', type: 'text'}],
                [{value: '', type: 'text'}],
                [{value: 'Verde', type: 'text'}]
              ],
              targetCell: 'B1',
              solution: '=UNICADENAS(" - "; FALSO; A1:A4)',
              hints: [
                'Recuerda que ignorar_vacíos = FALSO',
                'El resultado debe ser "Rojo - Azul -  - Verde"'
              ]
            }
            
          ]
        }
        
        
        
        


    ]
  },
  {
    id: 'lookup-functions',
    name: 'Funciones de Búsqueda',
    description: 'BUSCARV, BUSCARH y más',
    icon: 'Search',
    color: 'bg-red-500',
    lessons: [
      {
  id: 'lookup-1',
  title: 'Función BUSCAR',
  description: 'Búsqueda básica en un rango o vector',
  category: 'lookup-functions',
  difficulty: 'intermediate',
  xpReward: 250,
  explanation: `
    BUSCAR permite encontrar un valor dentro de un rango y devolver el correspondiente en otro.
    
    • Sintaxis: =BUSCAR(valor_buscado; vector_buscado; [resultado_vector])
    • Ejemplos:
      - =BUSCAR(5; A1:A5; B1:B5) → busca el 5 en A1:A5 y devuelve el valor en B1:B5
      - =BUSCAR("Producto"; A1:A5; C1:C5) → busca "Producto" y devuelve el dato relacionado
  `,
  exercises: [
    {
      id: 'lookup-1-1',
      instruction: 'Busca el valor 20 en A1:A4 y devuelve el correspondiente de B1:B4',
      initialData: [
        [{value: '10', type: 'number'}, {value: 'Manzana', type: 'text'}],
        [{value: '20', type: 'number'}, {value: 'Pera', type: 'text'}],
        [{value: '30', type: 'number'}, {value: 'Naranja', type: 'text'}],
        [{value: '40', type: 'number'}, {value: 'Uva', type: 'text'}]
      ],
      targetCell: 'C1',
      solution: '=BUSCAR(20;A1:A4;B1:B4)',
      hints: ['Usa =BUSCAR(20;A1:A4;B1:B4)', 'El resultado debe ser Pera']
    },
    {
      id: 'lookup-1-2',
      instruction: 'Busca el valor 30 en A1:A4 y devuelve el correspondiente de B1:B4',
      initialData: [
        [{value: '10', type: 'number'}, {value: 'Lunes', type: 'text'}],
        [{value: '20', type: 'number'}, {value: 'Martes', type: 'text'}],
        [{value: '30', type: 'number'}, {value: 'Miércoles', type: 'text'}],
        [{value: '40', type: 'number'}, {value: 'Jueves', type: 'text'}]
      ],
      targetCell: 'C1',
      solution: '=BUSCAR(30;A1:A4;B1:B4)',
      hints: ['El valor buscado es 30', 'El resultado debe ser Miércoles']
    },
    {
      id: 'lookup-1-3',
      instruction: 'Busca el valor 40 en A1:A4 y devuelve el correspondiente de B1:B4',
      initialData: [
        [{value: '10', type: 'number'}, {value: 'Azul', type: 'text'}],
        [{value: '20', type: 'number'}, {value: 'Rojo', type: 'text'}],
        [{value: '30', type: 'number'}, {value: 'Verde', type: 'text'}],
        [{value: '40', type: 'number'}, {value: 'Amarillo', type: 'text'}]
      ],
      targetCell: 'C1',
      solution: '=BUSCAR(40;A1:A4;B1:B4)',
      hints: ['El valor buscado es 40', 'El resultado debe ser Amarillo']
    }
  ]
},
{
  id: 'lookup-2',
  title: 'Función INDICE',
  description: 'Devuelve el valor en una posición de un rango',
  category: 'lookup-functions',
  difficulty: 'intermediate',
  xpReward: 250,
  explanation: `
    INDICE devuelve el valor de una celda dentro de un rango, especificando la fila y la columna.
    
    • Sintaxis: =INDICE(matriz; núm_fila; [núm_columna])
    • Ejemplos:
      - =INDICE(A1:C3; 2; 1) → devuelve el valor de la segunda fila, primera columna
      - =INDICE(B1:B5; 3) → devuelve el valor en la tercera fila del rango
  `,
  exercises: [
    {
      id: 'lookup-2-1',
      instruction: 'Devuelve el valor de la segunda fila, tercera columna del rango A1:C3',
      initialData: [
        [{value: 'A', type: 'text'}, {value: 'B', type: 'text'}, {value: 'C', type: 'text'}],
        [{value: 'D', type: 'text'}, {value: 'E', type: 'text'}, {value: 'F', type: 'text'}],
        [{value: 'G', type: 'text'}, {value: 'H', type: 'text'}, {value: 'I', type: 'text'}]
      ],
      targetCell: 'E1',
      solution: '=INDICE(A1:C3;2;3)',
      hints: ['Fila 2, columna 3', 'El resultado debe ser F']
    },
    {
      id: 'lookup-2-2',
      instruction: 'Devuelve el valor de la primera fila, segunda columna del rango A1:C3',
      initialData: [
        [{value: 'Uno', type: 'text'}, {value: 'Dos', type: 'text'}, {value: 'Tres', type: 'text'}],
        [{value: 'Cuatro', type: 'text'}, {value: 'Cinco', type: 'text'}, {value: 'Seis', type: 'text'}],
        [{value: 'Siete', type: 'text'}, {value: 'Ocho', type: 'text'}, {value: 'Nueve', type: 'text'}]
      ],
      targetCell: 'E1',
      solution: '=INDICE(A1:C3;1;2)',
      hints: ['Fila 1, columna 2', 'El resultado debe ser Dos']
    },
    {
      id: 'lookup-2-3',
      instruction: 'Devuelve el valor de la tercera fila, primera columna del rango A1:C3',
      initialData: [
        [{value: 'X', type: 'text'}, {value: 'Y', type: 'text'}, {value: 'Z', type: 'text'}],
        [{value: 'P', type: 'text'}, {value: 'Q', type: 'text'}, {value: 'R', type: 'text'}],
        [{value: 'L', type: 'text'}, {value: 'M', type: 'text'}, {value: 'N', type: 'text'}]
      ],
      targetCell: 'E1',
      solution: '=INDICE(A1:C3;3;1)',
      hints: ['Fila 3, columna 1', 'El resultado debe ser L']
    }
  ]
},
{
  id: 'lookup-3',
  title: 'Función COINCIDIR',
  description: 'Devuelve la posición de un valor en un rango',
  category: 'lookup-functions',
  difficulty: 'intermediate',
  xpReward: 250,
  explanation: `
    COINCIDIR devuelve la posición relativa de un valor dentro de un rango.
    
    • Sintaxis: =COINCIDIR(valor_buscado; rango; [tipo_de_coincidencia])
      - tipo_de_coincidencia: 0 (exacta), 1 (menor o igual), -1 (mayor o igual).
    
    • Ejemplos:
      - =COINCIDIR(20; A1:A5; 0) → devuelve la posición donde se encuentra 20
      - =COINCIDIR("Pera"; B1:B5; 0) → devuelve la posición de "Pera" en la lista
  `,
  exercises: [
    {
      id: 'lookup-3-1',
      instruction: 'Devuelve la posición de "Naranja" en el rango A1:A4',
      initialData: [
        [{value: 'Manzana', type: 'text'}],
        [{value: 'Pera', type: 'text'}],
        [{value: 'Naranja', type: 'text'}],
        [{value: 'Uva', type: 'text'}]
      ],
      targetCell: 'B1',
      solution: '=COINCIDIR("Naranja";A1:A4;0)',
      hints: ['Busca Naranja', 'El resultado debe ser 3']
    },
    {
      id: 'lookup-3-2',
      instruction: 'Devuelve la posición del número 50 en el rango A1:A5',
      initialData: [
        [{value: '10', type: 'number'}],
        [{value: '20', type: 'number'}],
        [{value: '30', type: 'number'}],
        [{value: '40', type: 'number'}],
        [{value: '50', type: 'number'}]
      ],
      targetCell: 'B1',
      solution: '=COINCIDIR(50;A1:A5;0)',
      hints: ['Busca 50 en A1:A5', 'El resultado debe ser 5']
    },
    {
      id: 'lookup-3-3',
      instruction: 'Devuelve la posición de "Perro" en el rango A1:A4',
      initialData: [
        [{value: 'Gato', type: 'text'}],
        [{value: 'Perro', type: 'text'}],
        [{value: 'Conejo', type: 'text'}],
        [{value: 'Pez', type: 'text'}]
      ],
      targetCell: 'B1',
      solution: '=COINCIDIR("Perro";A1:A4;0)',
      hints: ['Busca Perro', 'El resultado debe ser 2']
    }
  ]
},
{
  id: 'lookup-4',
  title: 'Función DIRECCION',
  description: 'Devuelve la referencia de una celda como texto',
  category: 'lookup-functions',
  difficulty: 'advanced',
  xpReward: 300,
  explanation: `
    DIRECCION devuelve la referencia de una celda en formato texto, a partir de un número de fila y columna.
    
    • Sintaxis: =DIRECCION(núm_fila; núm_columna; [abs]; [a1]; [hoja])
    • Ejemplos:
      - =DIRECCION(2;3) → devuelve "$C$2"
      - =DIRECCION(5;1;4) → devuelve "A5"
  `,
  exercises: [
    {
      id: 'lookup-4-1',
      instruction: 'Devuelve la referencia de la celda en fila 4, columna 2',
      initialData: [
        [{value: 'A', type: 'text'}, {value: 'B', type: 'text'}],
        [{value: 'C', type: 'text'}, {value: 'D', type: 'text'}],
        [{value: 'E', type: 'text'}, {value: 'F', type: 'text'}],
        [{value: 'G', type: 'text'}, {value: 'H', type: 'text'}]
      ],
      targetCell: 'C1',
      solution: '=DIRECCION(4;2)',
      hints: ['Fila 4, columna 2', 'El resultado debe ser "$B$4"']
    },
    {
      id: 'lookup-4-2',
      instruction: 'Devuelve la referencia de la celda en fila 1, columna 3',
      initialData: [
        [{value: 'X', type: 'text'}, {value: 'Y', type: 'text'}, {value: 'Z', type: 'text'}]
      ],
      targetCell: 'C2',
      solution: '=DIRECCION(1;3)',
      hints: ['Fila 1, columna 3', 'El resultado debe ser "$C$1"']
    },
    {
      id: 'lookup-4-3',
      instruction: 'Devuelve la referencia de la celda en fila 5, columna 1',
      initialData: [
        [{value: 'A', type: 'text'}],
        [{value: 'B', type: 'text'}],
        [{value: 'C', type: 'text'}],
        [{value: 'D', type: 'text'}],
        [{value: 'E', type: 'text'}]
      ],
      targetCell: 'B1',
      solution: '=DIRECCION(5;1)',
      hints: ['Fila 5, columna 1', 'El resultado debe ser "$A$5"']
    }
  ]
},
{
  id: 'lookup-advanced-2',
  title: 'Función combinada INDICE + COINCIDIR',
  description: 'Alternativa flexible a BUSCARV',
  category: 'lookup-functions',
  difficulty: 'advanced',
  xpReward: 350,
  explanation: `
    La combinación de INDICE y COINCIDIR se utiliza como una alternativa más flexible a BUSCARV:
    
    • INDICE devuelve un valor según su posición: =INDICE(rango; fila; [columna])
    • COINCIDIR devuelve la posición de un valor en un rango: =COINCIDIR(valor; rango; [tipo])

    Combinados, permiten buscar un valor en una columna y devolver un resultado de otra columna:
    
    - Ejemplo: =INDICE(B2:B10; COINCIDIR("Juan"; A2:A10; 0))
      → Busca "Juan" en A2:A10 y devuelve su valor correspondiente en B2:B10.
      
    Ventajas frente a BUSCARV:
    • No depende de que la columna de búsqueda sea la primera.
    • Funciona hacia la izquierda o derecha.
    • Más flexible con rangos dinámicos.
  `,
  exercises: [
    {
      id: 'lookup-adv-2-1',
      instruction: 'Busca la edad de "Luis" usando INDICE + COINCIDIR en A2:B4',
      initialData: [
        [{value: 'Nombre', type: 'text'}, {value: 'Edad', type: 'text'}],
        [{value: 'Ana', type: 'text'}, {value: '20', type: 'number'}],
        [{value: 'Luis', type: 'text'}, {value: '25', type: 'number'}],
        [{value: 'Maria', type: 'text'}, {value: '30', type: 'number'}]
      ],
      targetCell: 'C1',
      solution: '=INDICE(B2:B4;COINCIDIR("Luis";A2:A4;0))',
      hints: ['COINCIDIR devuelve la fila de "Luis"', 'INDICE devuelve la edad en esa fila → 25']
    },
    {
      id: 'lookup-adv-2-2',
      instruction: 'Usa INDICE + COINCIDIR para encontrar el precio de "Monitor" en A2:B4',
      initialData: [
        [{value: 'Producto', type: 'text'}, {value: 'Precio', type: 'text'}],
        [{value: 'Ratón', type: 'text'}, {value: '15', type: 'number'}],
        [{value: 'Teclado', type: 'text'}, {value: '25', type: 'number'}],
        [{value: 'Monitor', type: 'text'}, {value: '100', type: 'number'}]
      ],
      targetCell: 'C1',
      solution: '=INDICE(B2:B4;COINCIDIR("Monitor";A2:A4;0))',
      hints: ['Busca "Monitor" en A2:A4', 'Devuelve su precio en B2:B4 → 100']
    },
    {
      id: 'lookup-adv-2-3',
      instruction: 'Encuentra la nota de "Maria" en A2:C4 usando INDICE + COINCIDIR',
      initialData: [
        [{value: 'Nombre', type: 'text'}, {value: 'Edad', type: 'text'}, {value: 'Nota', type: 'text'}],
        [{value: 'Ana', type: 'text'}, {value: '20', type: 'number'}, {value: '85', type: 'number'}],
        [{value: 'Luis', type: 'text'}, {value: '25', type: 'number'}, {value: '90', type: 'number'}],
        [{value: 'Maria', type: 'text'}, {value: '30', type: 'number'}, {value: '95', type: 'number'}]
      ],
      targetCell: 'D1',
      solution: '=INDICE(C2:C4;COINCIDIR("Maria";A2:A4;0))',
      hints: ['Busca "Maria" en A2:A4', 'Devuelve su nota en C2:C4 → 95']
    }
  ]
},


      {
        id: 'lookup-5',
        title: 'Función BUSCARV',
        description: 'Búsqueda vertical',
        category: 'lookup-functions',
        difficulty: 'advanced',
        xpReward: 300,
        explanation: `
          BUSCARV busca un valor en la primera columna de una tabla y devuelve un valor de otra columna:
          
          • Sintaxis: =BUSCARV(valor_buscado; tabla; columna; [ordenado])
          • Ejemplos:
            - =BUSCARV("Juan"; A1:C10; 2; FALSO) → busca "Juan" y devuelve valor de columna 2
            - =BUSCARV(A1; datos; 3; FALSO) → busca valor de A1 y devuelve columna 3
          
          También puedes usar VLOOKUP (en inglés).
        `,
        exercises: [
          {
            id: 'lookup-5-1',
            instruction: 'Busca "Ana" en A1:B3 y devuelve el valor de la columna 2',
            initialData: [
              [{value: 'Ana', type: 'text'}, {value: '25', type: 'number'}],
              [{value: 'Luis', type: 'text'}, {value: '30', type: 'number'}],
              [{value: 'Maria', type: 'text'}, {value: '28', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A4',
            solution: '=BUSCARV("Ana";A1:B3;2;FALSO)',
            hints: ['Usa =BUSCARV("Ana";A1:B3;2;FALSO)', 'El resultado debe ser 25']
          },
          {
            id: 'lookup-5-2',
            instruction: 'Busca "Luis" en A1:B3 y devuelve el valor de la columna 2',
            initialData: [
              [{value: 'Ana', type: 'text'}, {value: '25', type: 'number'}],
              [{value: 'Luis', type: 'text'}, {value: '30', type: 'number'}],
              [{value: 'Maria', type: 'text'}, {value: '28', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A4',
            solution: '=BUSCARV("Luis";A1:B3;2;FALSO)',
            hints: ['Usa =BUSCARV("Luis";A1:B3;2;FALSO)', 'El resultado debe ser 30']
          },
          {
            id: 'lookup-5-3',
            instruction: 'Busca "Teclado" en A1:B4 y devuelve el precio en la columna 2',
            initialData: [
              [{value: 'Ratón', type: 'text'}, {value: '15', type: 'number'}],
              [{value: 'Teclado', type: 'text'}, {value: '25', type: 'number'}],
              [{value: 'Monitor', type: 'text'}, {value: '100', type: 'number'}],
              [{value: 'Altavoces', type: 'text'}, {value: '40', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A6',
            solution: '=BUSCARV("Teclado";A1:B4;2;FALSO)',
            hints: ['Usa =BUSCARV("Teclado";A1:B4;2;FALSO)', 'El resultado debe ser 25']
          }

        ]
      },
      {
        id: 'lookup-6',
        title: 'Función BUSCARH',
        description: 'Búsqueda horizontal',
        category: 'lookup-functions',
        difficulty: 'advanced',
        xpReward: 300,
        explanation: `
          BUSCARH busca un valor en la primera fila de una tabla y devuelve un valor de otra fila:
          
          • Sintaxis: =BUSCARH(valor_buscado; tabla; fila; [ordenado])
          • Ejemplos:
            - =BUSCARH("Edad"; A1:D2; 2; FALSO) → busca "Edad" en la fila 1 y devuelve valor de fila 2
            - =BUSCARH(A1; datos; 3; FALSO) → busca valor de A1 y devuelve fila 3
          
          También puedes usar HLOOKUP (en inglés).
        `,
        exercises: [
          {
            id: 'lookup-6-1',
            instruction: 'Busca "Edad" en A1:D2 y devuelve el valor de la fila 2',
            initialData: [
              [{value: 'Nombre', type: 'text'}, {value: 'Edad', type: 'text'}, {value: 'Ciudad', type: 'text'}, {value: 'País', type: 'text'}],
              [{value: 'Ana', type: 'text'}, {value: '25', type: 'number'}, {value: 'Madrid', type: 'text'}, {value: 'España', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A4',
            solution: '=BUSCARH("Edad";A1:D2;2;FALSO)',
            hints: ['Usa =BUSCARH("Edad";A1:D2;2;FALSO)', 'El resultado debe ser 25']
          },
          {
            id: 'lookup-6-2',
            instruction: 'Busca "Ciudad" en A1:D2 y devuelve el valor de la fila 2',
            initialData: [
              [{value: 'Nombre', type: 'text'}, {value: 'Edad', type: 'text'}, {value: 'Ciudad', type: 'text'}, {value: 'País', type: 'text'}],
              [{value: 'Ana', type: 'text'}, {value: '25', type: 'number'}, {value: 'Madrid', type: 'text'}, {value: 'España', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A4',
            solution: '=BUSCARH("Ciudad";A1:D2;2;FALSO)',
            hints: ['Usa =BUSCARH("Ciudad";A1:D2;2;FALSO)', 'El resultado debe ser "Madrid"']
          },
          {
            id: 'lookup-6-3',
            instruction: 'Busca "Producto" en A1:E2 y devuelve el valor de la fila 2',
            initialData: [
              [{value: 'Producto', type: 'text'}, {value: 'Precio', type: 'text'}, {value: 'Stock', type: 'text'}, {value: 'Categoría', type: 'text'}, {value: 'Código', type: 'text'}],
              [{value: 'Teclado', type: 'text'}, {value: '25', type: 'number'}, {value: '10', type: 'number'}, {value: 'Electrónica', type: 'text'}, {value: 'TK123', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A4',
            solution: '=BUSCARH("Producto";A1:E2;2;FALSO)',
            hints: ['Usa =BUSCARH("Producto";A1:E2;2;FALSO)', 'El resultado debe ser "Teclado"']
          }
        ]
}

    ]
  },
  {
    id: 'est-functions',
    name: 'Funciones Estadísticas',
    description: 'CONTAR, CONTAR.SI, PROMEDIO, MAX y más',
    icon: 'Hash',
    color: 'bg-indigo-500',
    lessons: [
      {
        id: 'count-1',
        title: 'Función CONTAR',
        description: 'Contar números',
        category: 'est-functions',
        difficulty: 'beginner',
        xpReward: 150,
        explanation: `
          La función CONTAR cuenta el número de celdas que contienen números:
          
          • Sintaxis: =CONTAR(rango)
          • Ejemplos:
            - =CONTAR(A1:A10) → cuenta números en A1:A10
            - =CONTAR(A1,B1,C1) → cuenta números en celdas individuales
          
          También puedes usar COUNT (en inglés).
        `,
        exercises: [
          {
            id: 'count-1-1',
            instruction: 'Cuenta los números en A1:A4',
            initialData: [
              [{value: '10', type: 'number'}, {value: '', type: 'text'}],
              [{value: 'Texto', type: 'text'}, {value: '', type: 'text'}],
              [{value: '20', type: 'number'}, {value: '', type: 'text'}],
              [{value: '30', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=CONTAR(A1:A4)',
            hints: ['Usa =CONTAR(A1:A4)', 'El resultado debe ser 3']
          },
          {
            id: 'count-1-2',
            instruction: 'Cuenta cuántos números hay en el rango B1:B5',
            initialData: [
              [{value: '', type: 'text'}, {value: '5', type: 'number'}],
              [{value: '', type: 'text'}, {value: 'Hola', type: 'text'}],
              [{value: '', type: 'text'}, {value: '8', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '12', type: 'number'}]
            ],
            targetCell: 'C1',
            solution: '=CONTAR(B1:B5)',
            hints: ['Usa =CONTAR(B1:B5)', 'El resultado debe ser 3']
          },
          {
            id: 'count-1-3',
            instruction: 'Cuenta los números en las celdas A1, A3 y A5',
            initialData: [
              [{value: '100', type: 'number'}, {value: '', type: 'text'}],
              [{value: 'Texto', type: 'text'}, {value: '', type: 'text'}],
              [{value: '200', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}],
              [{value: '300', type: 'number'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B2',
            solution: '=CONTAR(A1;A3;A5)',
            hints: ['Usa =CONTAR(A1;A3;A5)', 'El resultado debe ser 3']
          }
        ]
      },
      {
        id: 'count-2',
        title: 'Función CONTAR.SI',
        description: 'Contar con condición',
        category: 'est-functions',
        difficulty: 'intermediate',
        xpReward: 200,
        explanation: `
          CONTAR.SI cuenta las celdas que cumplen una condición:
          
          • Sintaxis: =CONTAR.SI(rango; criterio)
          • Ejemplos:
            - =CONTAR.SI(A1:A10; ">10") → cuenta valores mayores a 10
            - =CONTAR.SI(A1:A10; "Excel") → cuenta celdas que contienen "Excel"
            - =CONTAR.SI(A1:A10; ">=100") → cuenta valores >= 100
          
          También puedes usar COUNTIF (en inglés).
        `,
        exercises: [
          {
            id: 'count-2-1',
            instruction: 'Cuenta los valores mayores a 15 en A1:A4',
            initialData: [
              [{value: '10', type: 'number'}, {value: '', type: 'text'}],
              [{value: '20', type: 'number'}, {value: '', type: 'text'}],
              [{value: '15', type: 'number'}, {value: '', type: 'text'}],
              [{value: '25', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=CONTAR.SI(A1:A4;">15")',
            hints: ['Usa =CONTAR.SI(A1:A4;">15")', 'El resultado debe ser 2']
          },
          {
            id: 'count-2-2',
            instruction: 'Cuenta cuántas veces aparece "Sí" en A1:A5',
            initialData: [
              [{value: 'Sí', type: 'text'}, {value: '', type: 'text'}],
              [{value: 'No', type: 'text'}, {value: '', type: 'text'}],
              [{value: 'Sí', type: 'text'}, {value: '', type: 'text'}],
              [{value: 'Sí', type: 'text'}, {value: '', type: 'text'}],
              [{value: 'No', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=CONTAR.SI(A1:A5;"Sí")',
            hints: ['Usa =CONTAR.SI(A1:A5;"Sí")', 'El resultado debe ser 3']
          },
          {
            id: 'count-2-3',
            instruction: 'Cuenta los valores menores o iguales a 50 en A1:A4',
            initialData: [
              [{value: '75', type: 'number'}, {value: '', type: 'text'}],
              [{value: '30', type: 'number'}, {value: '', type: 'text'}],
              [{value: '50', type: 'number'}, {value: '', type: 'text'}],
              [{value: '45', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B2',
            solution: '=CONTAR.SI(A1:A4;"<=50")',
            hints: ['Usa =CONTAR.SI(A1:A4;"<=50")', 'El resultado debe ser 3']
          }
        ]
      },
            
      {
        id: 'avg-1',
        title: 'Función PROMEDIO',
        description: 'Media de un conjunto de valores',
        category: 'est-functions',
        difficulty: 'beginner',
        xpReward: 150,
        explanation: `
          La función PROMEDIO calcula la media aritmética de un grupo de números.
      
          • Sintaxis: =PROMEDIO(número1; número2; ...)
          • También puedes usar un rango: =PROMEDIO(A1:A5)
      
          Ejemplos:
          - =PROMEDIO(10; 20; 30) → 20
          - =PROMEDIO(A1:A3) → calcula la media de esos valores
      
          En inglés se usa AVERAGE.
        `,
        exercises: [
          {
            id: 'avg-1-1',
            instruction: 'Calcula el promedio de las celdas B1 a B3 en la celda C2',
            initialData: [
              [{value: '', type: 'text'}, {value: '12', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '18', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '20', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C2',
            solution: '=PROMEDIO(B1:B3)',
            hints: ['Usa =PROMEDIO(B1:B3)', 'Suma los valores y divídelos entre 3']
          },
          {
            id: 'avg-1-2',
            instruction: 'Calcula el promedio de los valores en A1, A2 y A3',
            initialData: [
              [{value: '30', type: 'number'}, {value: '', type: 'text'}, {value: '', type: 'text'}],
              [{value: '45', type: 'number'}, {value: '', type: 'text'}, {value: '', type: 'text'}],
              [{value: '60', type: 'number'}, {value: '', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=PROMEDIO(A1:A3)',
            hints: ['Usa =PROMEDIO(A1:A3)', 'El promedio será 45']
          }
        ]
      },
      {
        id: 'maxmin-1',
        title: 'Funciones MAX y MIN',
        description: 'Buscar el mayor o menor valor',
        category: 'est-functions',
        difficulty: 'beginner',
        xpReward: 180,
        explanation: `
          Las funciones MAX y MIN devuelven el valor más alto o más bajo de un conjunto de números.
      
          • MAX: encuentra el número más grande.
            - Ejemplo: =MAX(5; 10; 3) → 10
      
          • MIN: encuentra el número más pequeño.
            - Ejemplo: =MIN(5; 10; 3) → 3
      
          También puedes usar rangos:
          - =MAX(A1:A5)
          - =MIN(B1:B3)
      
          En inglés se utilizan MAX y MIN también.
        `,
        exercises: [
          {
            id: 'maxmin-1-1',
            instruction: 'Encuentra el valor máximo entre A1 y A4',
            initialData: [
              [{value: '15', type: 'number'}, {value: '', type: 'text'}],
              [{value: '28', type: 'number'}, {value: '', type: 'text'}],
              [{value: '9', type: 'number'}, {value: '', type: 'text'}],
              [{value: '34', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B1',
            solution: '=MAX(A1:A4)',
            hints: ['Usa =MAX(A1:A4)', 'El número más alto es 34']
          },
          {
            id: 'maxmin-1-2',
            instruction: 'Calcula el valor máximo entre B2 y B4',
            initialData: [
              [{value: '', type: 'text'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '20', type: 'number'}],
              [{value: '', type: 'text'}, {value: '50', type: 'number'}],
              [{value: '', type: 'text'}, {value: '35', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A1',
            solution: '=MAX(B2:B4)',
            hints: ['Usa =MAX(B2:B4)', '¿Cuál es el número más grande entre 20, 50 y 35?']
          },
          {
            id: 'maxmin-1-3',
            instruction: 'Encuentra el valor mínimo entre C1 y C4',
            initialData: [
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '40', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '22', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '18', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}, {value: '25', type: 'number'}]
            ],
            targetCell: 'B1',
            solution: '=MIN(C1:C4)',
            hints: ['Usa =MIN(C1:C4)', 'Busca el número más pequeño del rango']
          },
          {
            id: 'maxmin-1-4',
            instruction: 'Calcula el valor mínimo de A2 a A5',
            initialData: [
              [{value: '', type: 'text'}],
              [{value: '8', type: 'number'}],
              [{value: '19', type: 'number'}],
              [{value: '12', type: 'number'}],
              [{value: '5', type: 'number'}]
            ],
            targetCell: 'B2',
            solution: '=MIN(A2:A5)',
            hints: ['Usa =MIN(A2:A5)', '¿Cuál es el menor valor?']
          }
        ]
      },
      {
        id: 'stat-1',
        title: 'Funciones MODA.UNO y MEDIANA',
        description: 'Obtener el valor más frecuente y el valor central',
        category: 'est-functions',
        difficulty: 'beginner',
        xpReward: 180,
        explanation: `
          Estas funciones permiten analizar datos estadísticos:
      
          • MODA.UNO: Devuelve el valor que más se repite en un conjunto.
            - Sintaxis: =MODA.UNO(número1; [número2]; ...)
            - Ejemplo: =MODA.UNO(A1:A5)
          
          • MEDIANA: Devuelve el valor central de un conjunto ordenado.
            - Sintaxis: =MEDIANA(número1; [número2]; ...)
            - Ejemplo: =MEDIANA(A1:A5)
      
          Estas funciones son útiles para entender la tendencia de los datos.
        `,
        exercises: [
          {
            id: 'stat-1-1',
            instruction: 'Escribe en la celda B6 la fórmula para obtener la MODA.UNO de los datos en A1:A5.',
            initialData: [
              [{value: '4', type: 'number'}, {value: '', type: 'text'}],
              [{value: '2', type: 'number'}, {value: '', type: 'text'}],
              [{value: '4', type: 'number'}, {value: '', type: 'text'}],
              [{value: '3', type: 'number'}, {value: '', type: 'text'}],
              [{value: '4', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'B6',
            solution: '=MODA.UNO(A1:A5)',
            hints: ['MODA.UNO devuelve el valor más frecuente', 'En este caso es 4']
          },
          {
            id: 'stat-1-2',
            instruction: 'Introduce en la celda C1 la fórmula para hallar la MODA.UNO de los valores en B1:B6.',
            initialData: [
              [{value: '', type: 'text'}, {value: '5', type: 'number'}],
              [{value: '', type: 'text'}, {value: '6', type: 'number'}],
              [{value: '', type: 'text'}, {value: '5', type: 'number'}],
              [{value: '', type: 'text'}, {value: '7', type: 'number'}],
              [{value: '', type: 'text'}, {value: '5', type: 'number'}],
              [{value: '', type: 'text'}, {value: '6', type: 'number'}]
            ],
            targetCell: 'C1',
            solution: '=MODA.UNO(B1:B6)',
            hints: ['Busca el número que más se repite en B1:B6', 'Respuesta: 5']
          },
          {
            id: 'stat-1-3',
            instruction: 'Escribe en la celda C5 la fórmula para obtener la MEDIANA de los datos en B1:B5.',
            initialData: [
              [{value: '', type: 'text'}, {value: '8', type: 'number'}],
              [{value: '', type: 'text'}, {value: '3', type: 'number'}],
              [{value: '', type: 'text'}, {value: '5', type: 'number'}],
              [{value: '', type: 'text'}, {value: '7', type: 'number'}],
              [{value: '', type: 'text'}, {value: '4', type: 'number'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'C5',
            solution: '=MEDIANA(B1:B5)',
            hints: ['Ordena los valores mentalmente: 3, 4, 5, 7, 8', 'El valor central es 5']
          },
          {
            id: 'stat-1-4',
            instruction: 'Introduce en la celda A6 la fórmula para calcular la MEDIANA de los valores en A1:A5.',
            initialData: [
              [{value: '12', type: 'number'}, {value: '', type: 'text'}],
              [{value: '18', type: 'number'}, {value: '', type: 'text'}],
              [{value: '15', type: 'number'}, {value: '', type: 'text'}],
              [{value: '14', type: 'number'}, {value: '', type: 'text'}],
              [{value: '19', type: 'number'}, {value: '', type: 'text'}],
              [{value: '', type: 'text'}, {value: '', type: 'text'}]
            ],
            targetCell: 'A6',
            solution: '=MEDIANA(A1:A5)',
            hints: ['Orden: 12, 14, 15, 18, 19 → valor central: 15', 'Usa =MEDIANA(A1:A5)']
          }
        ]
      }
      
      
      
      
      
    ]
  }
];

// Función helper para obtener datos mock de usuarios
export const mockUsers = [
  {
    id: '1',
    name: 'María García',
    level: 8,
    xp: 2450,
    streak: 12,
    totalLessons: 25,
    completedLessons: 18,
    lastActive: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Carlos López',
    level: 6,
    xp: 1800,
    streak: 5,
    totalLessons: 25,
    completedLessons: 12,
    lastActive: new Date('2024-01-14')
  },
  {
    id: '3',
    name: 'Ana Martínez',
    level: 10,
    xp: 3200,
    streak: 25,
    totalLessons: 25,
    completedLessons: 25,
    lastActive: new Date('2024-01-15')
  },
  {
    id: '4',
    name: 'Luis Rodríguez',
    level: 4,
    xp: 1200,
    streak: 8,
    totalLessons: 25,
    completedLessons: 8,
    lastActive: new Date('2024-01-13')
  },
  {
    id: '5',
    name: 'Elena Sánchez',
    level: 7,
    xp: 2100,
    streak: 15,
    totalLessons: 25,
    completedLessons: 15,
    lastActive: new Date('2024-01-15')
  }
];

export const currentUser = mockUsers[0];