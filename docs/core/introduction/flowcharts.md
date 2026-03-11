---
icon: material/chart-timeline-variant
tags:
  - Fundamentos del lenguaje
  - Introducción
  - Diagramas de flujo
---

# Diagramas de flujo { #flowcharts }

Un **diagrama de flujo** es la representación gráfica de un algoritmo. Permite visualizar paso a paso la solución a un problema antes de escribir cualquier código. Este tipo de diagramas está definido en la norma **ISO 5807-1985** y se compone de símbolos estandarizados.

## Variables { #variables }

Antes de diseñar un diagrama de flujo, es necesario entender qué es una variable.

!!! info "Definición"

    Una **variable** es un lugar en la memoria del computador donde se almacenan datos. Se puede visualizar como una "caja" con un nombre (identificador) y un valor.

### Reglas para nombrar variables { #naming-rules }

- Debe comenzar con una letra o guión bajo.
- Puede contener letras, números y guiones bajos.
- Python diferencia entre mayúsculas y minúsculas: `peso`, `Peso` y `PESO` son variables distintas.
- No puede coincidir con una palabra reservada del lenguaje.

| Correctos | Incorrectos |
| --- | --- |
| `temperatura`, `peso`, `nombre_mascota`, `_velocidadMax` | `23peso`, `#nombre`, `tiempo.12` |

### Tipos de datos { #data-types }

Una variable puede almacenar distintos tipos de datos:

=== "Entero (`int`)"

    Números sin decimales.

    ```python
    edadEstudiante = 20
    ```

=== "Decimal (`float`)"

    Números con decimales (se usa punto, no coma).

    ```python
    temperatura = 38.8
    ```

=== "Texto (`str`)"

    Cadenas de caracteres, siempre entre comillas.

    ```python
    ciudad = "Quillota"
    autor  = "Stephen King"
    ```

    !!! warning "Las comillas NO forman parte del valor almacenado."

=== "Lógico (`bool`)"

    Solo dos valores posibles: verdadero o falso.

    ```python
    estudiante = True
    astronauta = False
    ```

---

## Símbolos { #symbols }

Los diagramas de flujo usan formas geométricas estandarizadas. A continuación se muestra cada símbolo con su representación visual:

``` mermaid
flowchart TD
    A([Inicio / Fin])
    B[Proceso\neg: pago = cantidad * precio]
    C{Decisión\neg: ¿x mayor que 0?}
    D[/Entrada\neg: Ingresar nombre/]
    E@{ shape: doc, label: "Documento\neg: Mostrar resultado" }
```

| Forma | Nombre | Descripción |
| :---: | --- | --- |
| Óvalo | **Inicio / Fin** | Marca el comienzo o el final. Todo diagrama tiene uno de cada uno. |
| Rectángulo | **Proceso** | Operación o cálculo. Ejemplo: `pago = cantidad * precio` |
| Rombo | **Decisión** | Evalúa una condición. Tiene dos salidas: **Sí** y **No**. |
| Paralelogramo | **Entrada** | Ingreso de datos por teclado. Ejemplo: `Ingresar nombre` |
| Rectángulo ondulado | **Documento / Imprimir** | Muestra información en pantalla. Equivale a `print()` en Python. |

### Líneas de flujo { #line-symbols }

- **Flecha sólida →** indica la dirección de ejecución.
- **Línea segmentada - - →** agrega un comentario aclaratorio a un símbolo.

---

## Reglas de diseño { #design-rules }

1. Todo diagrama tiene un **único inicio** y un **único fin**.
2. Los **datos de entrada** (del usuario) se capturan con el símbolo de entrada y se almacenan en variables.
3. Los **cálculos y asignaciones** se representan con el rectángulo de proceso.
4. Las **salidas** (mostrar resultados) usan el símbolo de documento.
5. Las **decisiones** usan el rombo, con ramas etiquetadas "Sí" y "No".
6. El flujo se recorre siempre desde el **inicio** hasta el **fin** siguiendo las flechas.

---

## Precedencia de operadores { #precedence }

Cuando una expresión tiene múltiples operadores, el orden de evaluación determina el resultado.

### Operadores aritméticos { #arithmetic-precedence }

| Prioridad | Operador | Descripción | Ejemplo |
| :---: | :---: | --- | --- |
| 1 (mayor) | `()` | Paréntesis | `(2 + 3) × 4 = 20` |
| 2 | `^` | Potencia | `2 ^ 3 = 8` |
| 3 | `×` `/` `%` | Multiplicación, división, módulo | `6 / 2 × 3 = 9` |
| 4 (menor) | `+` `-` | Suma, resta | `2 + 3 - 1 = 4` |

### Operadores de comparación { #comparison-precedence }

Se evalúan **después** de los aritméticos y producen un resultado lógico (verdadero o falso).

| Operador | Significado |
| :---: | --- |
| `=` | Igual a |
| `≠` | Distinto de |
| `<` | Menor que |
| `>` | Mayor que |
| `≤` | Menor o igual que |
| `≥` | Mayor o igual que |

### Operadores lógicos { #logical-precedence }

Se evalúan **después** de los de comparación y permiten combinar condiciones.

| Prioridad | Operador | Descripción |
| :---: | :---: | --- |
| 1 (mayor) | `NO` | Niega la condición |
| 2 | `Y` | Verdadero solo si **ambas** condiciones son verdaderas |
| 3 (menor) | `O` | Verdadero si **al menos una** condición es verdadera |

!!! info "Orden general"
    `()` → `^` → `×` `/` → `+` `-` → comparación → `NO` → `Y` → `O`

### Ejercicios { #precedence-exercises }

#### Expresiones sin variables

Evalúa cada expresión paso a paso e indica el resultado final.

1. `3 + 4 * 2 > 10 and 15 % 4 == 3`
2. `not (5 * 2 == 10) or 2 ** 3 < 9`
3. `(8 + 2) / 5 * 3 > 4 and not 6 % 2 == 0`

??? info "Ver soluciones"

    **1.** `3 + 4 * 2 > 10 and 15 % 4 == 3`
    → `4 * 2 = 8` (multiplicación)
    → `15 % 4 = 3` (módulo)
    → `3 + 8 = 11` (suma)
    → `11 > 10 = True` (comparación)
    → `3 == 3 = True` (comparación)
    → `True and True = True`

    **2.** `not (5 * 2 == 10) or 2 ** 3 < 9`
    → `5 * 2 = 10` (paréntesis + multiplicación)
    → `2 ** 3 = 8` (potencia)
    → `10 == 10 = True` (comparación)
    → `8 < 9 = True` (comparación)
    → `not True = False` (negación)
    → `False or True = True`

    **3.** `(8 + 2) / 5 * 3 > 4 and not 6 % 2 == 0`
    → `8 + 2 = 10` (paréntesis)
    → `6 % 2 = 0` (módulo)
    → `10 / 5 = 2.0` (división)
    → `2.0 * 3 = 6.0` (multiplicación)
    → `0 == 0 = True` (comparación)
    → `6.0 > 4 = True` (comparación)
    → `not True = False` (negación)
    → `True and False = False`

#### Expresiones con variables

Reemplaza el valor de cada variable y evalúa la expresión paso a paso. Considera: `N = 2`.

1. `N ** 3 + 10 * N < 50 and N % 2 == 0`
2. `not (N * 5 > 12) or N ** 2 == 4`
3. `15 + 59 * 75 / 9 < 2 ** 3 ** 2 and (15 + 59) * 75 % N == 1`

??? info "Ver soluciones"

    **1.** `N ** 3 + 10 * N < 50 and N % 2 == 0`, con `N = 2`
    → `2 ** 3 = 8` (potencia)
    → `10 * 2 = 20` (multiplicación)
    → `2 % 2 = 0` (módulo)
    → `8 + 20 = 28` (suma)
    → `28 < 50 = True` (comparación)
    → `0 == 0 = True` (comparación)
    → `True and True = True`

    **2.** `not (N * 5 > 12) or N ** 2 == 4`, con `N = 2`
    → `2 * 5 = 10` (paréntesis + multiplicación)
    → `2 ** 2 = 4` (potencia)
    → `10 > 12 = False` (comparación)
    → `4 == 4 = True` (comparación)
    → `not False = True` (negación)
    → `True or True = True`

    **3.** `15 + 59 * 75 / 9 < 2 ** 3 ** 2 and (15 + 59) * 75 % N == 1`, con `N = 2`
    → `15 + 59 = 74` (paréntesis)
    → `3 ** 2 = 9` (potencia, de derecha a izquierda)
    → `2 ** 9 = 512` (potencia)
    → `59 * 75 = 4425` (multiplicación)
    → `74 * 75 = 5550` (multiplicación)
    → `4425 / 9 = 491.6...` (división)
    → `5550 % 2 = 0` (módulo)
    → `15 + 491.6... = 506.6...` (suma)
    → `506.6... < 512 = True` (comparación)
    → `0 == 1 = False` (comparación)
    → `True and False = False`

    **4.** `N > M Y M > 0`, con `N = 4`, `M = 3`
    → `4 > 3 = Verdadero`
    → `3 > 0 = Verdadero`
    → `Verdadero Y Verdadero = Verdadero`

    **5.** `NO (edad >= 18) O edad = 17`, con `edad = 17`
    → `17 >= 18 = Falso` (comparación)
    → `NO Falso = Verdadero` (negación)
    → `17 = 17 = Verdadero`
    → `Verdadero O Verdadero = Verdadero`

---

## Estructuras de control { #control-structures }

### Estructura secuencial { #sequential }

Las instrucciones se ejecutan una tras otra, en orden.

``` mermaid
flowchart TD
    A([INICIO]) --> B@{ shape: doc, label: "\"Ingrese base y altura\"" }
    B --> C[/base y altura/]
    C --> D["area = base * altura / 2"]
    D --> E@{ shape: doc, label: "\"El área es:\", area" }
    E --> F([FIN])
```

### Estructura IF-THEN { #if-then }

Ejecuta un bloque **solo si** la condición es verdadera. Si es falsa, lo omite.

``` mermaid
flowchart TD
    A([INICIO]) --> B{¿condición?}
    B -->|Sí| C[instrucciones]
    B -->|No| D
    C --> D([continúa])
```

### Estructura IF-THEN-ELSE { #if-then-else }

Ejecuta un bloque distinto dependiendo de si la condición es verdadera o falsa.

``` mermaid
flowchart TD
    A([INICIO]) --> B{¿condición?}
    B -->|Sí| C[instrucciones A]
    B -->|No| D[instrucciones B]
    C --> E([continúa])
    D --> E
```

### Estructura WHILE { #while }

Repite un bloque **mientras** la condición sea verdadera. Se evalúa **antes** de cada iteración.

``` mermaid
flowchart TD
    A([INICIO]) --> B{¿condición?}
    B -->|Sí| C[instrucciones]
    C --> B
    B -->|No| D([continúa])
```

!!! warning "Bucle infinito"

    Si la condición nunca se vuelve falsa, el ciclo se repite indefinidamente. Siempre debe existir una instrucción dentro del bloque que haga que la condición eventualmente sea falsa.

### Estructura FOR { #for }

Recorre un **conjunto de valores** definido de antemano. Se usa cuando se sabe cuántas veces se va a repetir.

``` mermaid
flowchart TD
    A([INICIO]) --> B{¿quedan valores?}
    B -->|Sí| C["var = valor actual"]
    C --> D[instrucciones]
    D --> B
    B -->|No| E([continúa])
```

---

## Ejemplos resueltos { #examples }

### Ejemplo 1: Pago de entradas { #example-cinema }

**CineUniverse** necesita calcular el pago total según la cantidad de entradas vendidas. Existen dos categorías: menores de 18 años (\$2.000) y mayores de 18 años (\$5.000).

**Entrada:** cantidad de entradas de cada categoría.
**Salida:** pago total.

??? info "Ver solución"

    ``` mermaid
    flowchart TD
        A([INICIO]) --> B@{ shape: doc, label: "\"Ingrese cantidad de menores de edad\"" }
        B --> C[/cant_me/]
        C --> D@{ shape: doc, label: "\"Ingrese cantidad de mayores de edad\"" }
        D --> E[/cant_ma/]
        E --> F["pago_me = cant_me * 2000"]
        F --> G["pago_ma = cant_ma * 5000"]
        G --> H["pago = pago_me + pago_ma"]
        H --> I@{ shape: doc, label: "\"El pago total es:\", pago" }
        I --> J([FIN])
    ```

### Ejemplo 2: Descuento en librería { #example-library }

**LibroFest** aplica descuentos según el tipo de cliente. Todos los libros valen \$5.000.

| Tipo de cliente | Descuento |
| --- | --- |
| Estudiante | 15% |
| Docente | 20% |
| Miembro del club | 25% |

??? info "Ver solución"

    ``` mermaid
    flowchart TD
        A([INICIO]) --> B@{ shape: doc, label: "\"Ingrese tipo de cliente\"" }
        B --> C[/tipo_cliente/]
        C --> D{"¿tipo_cliente == estudiante?"}
        D -->|Sí| E["descuento = 0.15"]
        D -->|No| F{"¿tipo_cliente == docente?"}
        F -->|Sí| G["descuento = 0.20"]
        F -->|No| H["descuento = 0.25"]
        E --> I["precio_final = 5000 * (1 - descuento)"]
        G --> I
        H --> I
        I --> J@{ shape: doc, label: "precio_final" }
        J --> K([FIN])
    ```

### Ejemplo 3: Validación de un número { #example-validation }

Solicitar al usuario un número entre 1 y 9. Si ingresa un valor fuera del rango, mostrar error y volver a pedir.

??? info "Ver solución"

    ``` mermaid
    flowchart TD
        A([INICIO]) --> B["noValido = True"]
        B --> C{¿noValido?}
        C -->|Sí| D@{ shape: doc, label: "\"Ingrese un número entre 1 y 9\"" }
        D --> E[/num/]
        E --> F{"¿num >= 1 y num <= 9?"}
        F -->|Sí| G["noValido = False"]
        F -->|No| H@{ shape: doc, label: "\"Error\"" }
        G --> C
        H --> C
        C -->|No| I@{ shape: doc, label: "num, \"es correcto\"" }
        I --> J([FIN])
    ```

### Ejemplo 4: Pago de remuneraciones { #example-payroll }

Calcular el sueldo bruto y líquido de cada empleado. El valor hora es \$2.500 y el líquido corresponde al 80% del bruto.

??? info "Ver solución"

    ``` mermaid
    flowchart TD
        A([INICIO]) --> B@{ shape: doc, label: "\"Ingrese cantidad de empleados\"" }
        B --> C[/cant_empleados/]
        C --> D["indice = 0"]
        D --> E{"¿indice < cant_empleados?"}
        E -->|Sí| F@{ shape: doc, label: "\"Ingrese cantidad de horas\"" }
        F --> G[/cant_horas/]
        G --> H["sueldo_bruto = cant_horas * 2500"]
        H --> I["sueldo_liquido = sueldo_bruto * 0.8"]
        I --> J@{ shape: doc, label: "sueldo_bruto, sueldo_liquido" }
        J --> K["indice = indice + 1"]
        K --> E
        E -->|No| L([FIN])
    ```

---

## Ejercicios { #exercises }

1. Diseña el diagrama de flujo de un algoritmo que solicite la cantidad de pasos caminados y calcule la distancia en kilómetros (1 paso = 80 cm).
2. Diseña el diagrama de flujo de un algoritmo que solicite hora y minuto de entrada y salida de un estacionamiento y calcule el costo a \$15 por minuto.
3. Diseña el diagrama de flujo de un algoritmo que solicite un número entero y muestre si es par o impar.
4. Diseña el diagrama de flujo de un algoritmo que solicite la renta anual de una persona y muestre el impuesto correspondiente según los tramos:

    | Renta | Impuesto |
    | --- | --- |
    | Menos de \$500.000 | 5% |
    | \$500.000 – \$1.000.000 | 15% |
    | \$1.000.000 – \$1.500.000 | 20% |
    | \$1.500.000 – \$2.500.000 | 30% |
    | Más de \$2.500.000 | 45% |

5. Diseña el diagrama de flujo de un algoritmo que solicite un año e indique si es bisiesto. Un año es bisiesto si es múltiplo de 4, excepto los múltiplos de 100, que solo son bisiestos si también son múltiplos de 400.
6. Diseña el diagrama de flujo de un algoritmo que reciba un número mayor a cero, extraiga sus dígitos y lo muestre invertido.
7. Diseña el diagrama de flujo del algoritmo que calcule el promedio de notas de un curso. Por cada estudiante se ingresan sus notas; al terminar, el programa pregunta si se desea ingresar otro estudiante. Al finalizar, muestra el promedio general del curso.
