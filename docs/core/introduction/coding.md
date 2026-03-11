---
icon: material/code-braces
tags:
  - Fundamentos del lenguaje
  - Introducción
  - De diagrama a código
---

# De diagrama a código { #coding }

Una vez diseñado el diagrama de flujo, el siguiente paso es traducirlo a código Python. En esta sección veremos los elementos básicos del lenguaje necesarios para hacer esa transición.

## Ambiente de desarrollo { #dev-environment }

El ambiente de desarrollo que utilizaremos en esta asignatura es **Visual Studio Code (VSC)**. Un entorno de programación tiene tres partes principales:

<div class="grid cards" markdown>

- :material-pencil: **Editor**

    ---
    Donde se escribe el código fuente del programa.

- :material-play-circle: **Intérprete**

    ---
    Ejecuta el código línea por línea y produce el resultado.

- :material-console: **Consola**

    ---
    Donde se visualiza la salida del programa en ejecución.

</div>

!!! info "Vocabulario básico"

    - **Ejecutar**: realizar cada paso de un programa línea por línea.
    - **Matar**: detener un programa que está en ejecución.

---

## Palabras reservadas { #keywords }

Python tiene un conjunto de palabras reservadas que forman el vocabulario básico del lenguaje. No pueden usarse como nombres de variables.

```python
import   class    pass     yield    from     as
print    input    def      return   and      or
not      if       elif     else     for      while
continue break    in       try      except   finally
raise    del      is       assert   lambda   global
```

---

## Entrada y salida { #io }

### Mostrar mensajes — `print()` { #print }

La función `print()` muestra información en la consola:

```python
print("Este es un mensaje de prueba")
```

```
Este es un mensaje de prueba
```

Para mostrar el valor de una variable se puede hacer de distintas formas:

=== "Con coma"

    ```python
    edad = 24
    print("La edad es:", edad)
    ```
    ```
    La edad es: 24
    ```

=== "Con f-string"

    ```python
    edad = 24
    print(f"La edad es: {edad}")
    ```
    ```
    La edad es: 24
    ```

!!! tip "F-strings"

    Los **f-strings** (cadenas formateadas) permiten incluir expresiones dentro de `{}` que se evalúan automáticamente al ejecutar el programa. Son la forma más moderna y legible de formatear texto en Python.

### Ingresar datos — `input()` { #input }

La función `input()` muestra un mensaje al usuario y espera que ingrese un valor:

```python
colorFavorito = input("¿Cuál es tu color favorito? ")
print("Tu color favorito es", colorFavorito)
```

!!! warning "Todo lo que `input()` recibe es un `str`"

    Independientemente de si el usuario escribe números o texto, `input()` **siempre devuelve una cadena de caracteres**. Para trabajar con números es necesario convertir el valor:

    ```python
    edad = int(input("Ingresa tu edad: "))     # convierte a entero
    peso = float(input("Ingresa tu peso: "))   # convierte a decimal
    ```

    **¿Cómo funciona por dentro?**

    ```python
    edad = int(input("Ingresa tu edad: "))
    # Si el usuario escribe 24:
    # input() devuelve el string "24"
    # int("24") lo convierte al entero 24
    # edad = 24
    ```

---

## Expresiones { #expressions }

### Aritméticas { #arithmetic }

Combinan números y variables con operadores matemáticos para producir un resultado numérico.

| Operador | Descripción | Ejemplo |
| :---: | --- | --- |
| `+` | Suma | `5 + 3` → `8` |
| `-` | Resta | `5 - 3` → `2` |
| `*` | Multiplicación | `5 * 3` → `15` |
| `/` | División | `5 / 2` → `2.5` |
| `//` | División entera | `5 // 2` → `2` |
| `%` | Módulo (resto) | `5 % 2` → `1` |
| `**` | Potencia | `2 ** 3` → `8` |

La **prioridad de operadores** sigue este orden:

1. Paréntesis `()`
2. Potencias `**`
3. Multiplicación, división y módulo `*`, `/`, `//`, `%`
4. Suma y resta `+`, `-`
5. De izquierda a derecha en igual prioridad

```python
total = (5 + 3) * 2   # → 16
```

### Relacionales { #relational }

Comparan dos valores y devuelven `True` o `False`.

| Operador | Descripción | Ejemplo |
| :---: | --- | --- |
| `==` | Igual a | `5 == 5` → `True` |
| `!=` | Distinto de | `5 != 3` → `True` |
| `>` | Mayor que | `5 > 3` → `True` |
| `<` | Menor que | `5 < 3` → `False` |
| `>=` | Mayor o igual | `5 >= 5` → `True` |
| `<=` | Menor o igual | `3 <= 5` → `True` |

```python
a = 5
b = 3
resultado = a > b   # True
```

### Lógicas { #logical }

Combinan expresiones booleanas con operadores lógicos.

| Operador | Descripción | Ejemplo |
| :---: | --- | --- |
| `and` | Verdadero si **ambos** son verdaderos | `True and False` → `False` |
| `or` | Verdadero si **al menos uno** es verdadero | `True or False` → `True` |
| `not` | Invierte el valor lógico | `not True` → `False` |

Prioridad: `not` → `and` → `or`

```python
a = True
b = False
resultado = a and b   # False
```

---

## Transición de diagrama a código { #transition }

Cada símbolo del diagrama de flujo tiene su equivalente directo en Python.

### Estructura secuencial { #seq-transition }

**Ejemplo:** calcular \(y = mx + c\)

=== "Diagrama de flujo"

    ``` mermaid
    flowchart TD
        A([INICIO]) --> B[/Ingresar x/]
        B --> C[/Ingresar m y c/]
        C --> D["y ← m × x + c"]
        D --> E[\"Mostrar: y"\]
        E --> F([FIN])
    ```

=== "Código Python"

    ```python
    x = float(input("Ingrese el valor de x: "))
    m = float(input("Ingrese el valor de m: "))
    c = float(input("Ingrese el valor de c: "))

    y = m * x + c

    print(f"El resultado es: {y}")
    ```

### Estructura condicional (IF) { #if-transition }

La estructura `if` en Python corresponde al rombo de decisión del diagrama:

=== "Diagrama de flujo"

    ``` mermaid
    flowchart TD
        A([INICIO]) --> B[/Ingresar x/]
        B --> C{"¿x < 20?"}
        C -->|Sí| D[\"Mostrar: Es menor que 20"\]
        C -->|No| E
        D --> E
        E --> F{"¿x < 10?"}
        F -->|Sí| G[\"Mostrar: Es menor que 10"\]
        F -->|No| H([FIN])
        G --> H
    ```

=== "Código Python"

    ```python
    x = int(input("Ingrese un número: "))

    if x < 20:
        print("Es menor que 20")

    if x < 10:
        print("Es menor que 10")
    ```

!!! warning "La indentación es obligatoria"

    Las instrucciones dentro de un bloque `if` **deben estar indentadas** con 4 espacios o 1 tabulador. Python usa la indentación para definir los bloques de código.

    ```python
    if condición:
        instruccion1    # ← indentado (dentro del if)
        instruccion2    # ← indentado (dentro del if)

    # resto del programa (fuera del if)
    ```

### Estructura repetitiva (WHILE) { #while-transition }

El bucle `while` repite un bloque mientras la condición sea verdadera:

=== "Diagrama de flujo"

    ``` mermaid
    flowchart TD
        A([INICIO]) --> B["n ← 5"]
        B --> C{"¿n > 0?"}
        C -->|Sí| D[\"Mostrar: n"\]
        D --> E["n ← n - 1"]
        E --> C
        C -->|No| F[\"Mostrar: Fin"\]
        F --> G([FIN])
    ```

=== "Código Python"

    ```python
    n = 5

    while n > 0:
        print(f"n= {n}")
        n = n - 1

    print("Fin")
    ```

=== "Salida"

    ```
    n= 5
    n= 4
    n= 3
    n= 2
    n= 1
    Fin
    ```

!!! danger "Bucle infinito"

    Si ninguna instrucción dentro del bloque modifica la condición, el bucle se repetirá indefinidamente. Siempre debe existir una instrucción que eventualmente haga la condición falsa.

    ```python
    n = 5
    while n > 0:
        print("Hola")   # n nunca cambia → bucle infinito
    ```

---

## Ejemplos resueltos { #examples }

### Ejemplo 1: Validación de un número { #example-validation }

Solicitar un número entre 1 y 9. Si el usuario ingresa un valor fuera del rango, mostrar error y pedir de nuevo.

??? info "Ver solución"

    === "Diagrama de flujo"

        ``` mermaid
        flowchart TD
            A([INICIO]) --> B["noValido ← True"]
            B --> C{"¿noValido?"}
            C -->|Sí| D[/Ingresar num/]
            D --> E{"¿num >= 1\ny num <= 9?"}
            E -->|Sí| F["noValido ← False"]
            E -->|No| G[\"Mostrar: Error"\]
            F --> C
            G --> C
            C -->|No| H[\"Mostrar: num es correcto"\]
            H --> I([FIN])
        ```

    === "Código Python"

        ```python
        noValido = True

        while noValido:
            num = int(input("Ingrese un número entre 1 y 9: "))
            if num >= 1 and num <= 9:
                noValido = False
            else:
                print("Error: el número está fuera del rango.")

        print(f"El número {num} es correcto.")
        ```

    === "Ejecución de ejemplo"

        ```
        Ingrese un número entre 1 y 9: 15
        Error: el número está fuera del rango.
        Ingrese un número entre 1 y 9: 0
        Error: el número está fuera del rango.
        Ingrese un número entre 1 y 9: 7
        El número 7 es correcto.
        ```

    !!! note "Variable de control"

        La variable `noValido` actúa como **variable de control**: comienza en `True` asumiendo que el dato es inválido, y solo se pone en `False` cuando el usuario ingresa un valor correcto.

### Ejemplo 2: Invertir un número { #example-reverse }

Recibir un número mayor a cero, extraer sus dígitos y mostrarlo invertido. Si el usuario ingresa algo que no es un número, mostrar error.

??? info "Ver solución"

    === "Diagrama de flujo"

        ``` mermaid
        flowchart TD
            A([INICIO]) --> B["noValido ← True"]
            B --> C{"¿noValido?"}
            C -->|Sí| D[/Ingresar num/]
            D --> E{"¿Es número\ny num > 0?"}
            E -->|Sí| F["noValido ← False"]
            E -->|No| G[\"Mostrar: Error"\]
            F --> C
            G --> C
            C -->|No| H["ni ← 0"]
            H --> I{"¿num > 0?"}
            I -->|Sí| J["d ← num % 10"]
            J --> K["ni ← ni × 10 + d"]
            K --> L["num ← num // 10"]
            L --> I
            I -->|No| M[\"Mostrar: ni"\]
            M --> N([FIN])
        ```

    === "Código Python"

        ```python
        noValido = True

        while noValido:
            try:
                num = int(input("Ingrese un número: "))
                if num > 0:
                    noValido = False
                else:
                    print("Error: el número debe ser mayor a 0.")
            except:
                print("Error: la entrada no es un número.")

        ni = 0
        while num > 0:
            d = num % 10        # extrae el último dígito
            ni = ni * 10 + d    # lo agrega al número invertido
            num = num // 10     # elimina el último dígito

        print("Número invertido:", ni)
        ```

    === "Ejecución de ejemplo"

        ```
        Ingrese un número: 2o2e
        Error: la entrada no es un número.
        Ingrese un número: -5
        Error: el número debe ser mayor a 0.
        Ingrese un número: 2023
        Número invertido: 3202
        ```

    !!! tip "¿Cómo funciona la inversión?"

        El algoritmo extrae los dígitos de derecha a izquierda usando el operador módulo `%` y los va acumulando en `ni`:

        | Iteración | `num` | `d` (`num % 10`) | `ni` (`ni * 10 + d`) |
        | :---: | :---: | :---: | :---: |
        | 1 | 2023 | 3 | 3 |
        | 2 | 202 | 2 | 32 |
        | 3 | 20 | 0 | 320 |
        | 4 | 2 | 2 | 3202 |
        | Fin | 0 | — | 3202 |

---

## Ejercicios { #exercises }

1. Escribe un programa que solicite la base y la altura de un triángulo y calcule su área.
2. Escribe un programa que solicite dos números y muestre el mayor de los dos.
3. Escribe un programa que solicite un número entero y determine si es par o impar.
4. Escribe un programa que solicite la renta anual de una persona y calcule el impuesto según los tramos definidos en la unidad anterior.
5. Escribe un programa que solicite un año y determine si es bisiesto (múltiplo de 4, excepto los múltiplos de 100 que no sean también múltiplos de 400).
6. Escribe un programa que solicite la cantidad de pasos caminados y calcule la distancia en kilómetros (1 paso = 80 cm). El programa debe validar que el número de pasos sea positivo.
7. Escribe un programa que calcule la suma de los números del 1 al N, donde N es ingresado por el usuario. Valida que N sea mayor a 0.
