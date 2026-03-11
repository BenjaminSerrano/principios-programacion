---
icon: material/repeat
tags:
  - Fundamentos del lenguaje
  - Control de flujo
  - Ciclo FOR
---

# Ciclo FOR { #for-examples }

El ciclo `for` recorre un **conjunto de valores** definido de antemano. A diferencia del `while`, se sabe de antemano cuántas veces se repetirá.

## Estructura { #structure }

``` mermaid
flowchart TD
    A([INICIO]) --> B{"¿quedan valores?"}
    B -->|Sí| C["var ← valor actual"]
    C --> D[instrucciones]
    D --> B
    B -->|No| E([continúa])
```

El funcionamiento es el siguiente:

1. Se evalúa el conjunto de valores. Cada elemento tiene un **índice** (posición), que comienza en cero.
2. Por cada elemento, la variable `var` toma el valor actual y se ejecutan las instrucciones del bloque.
3. Cuando no quedan valores, el ciclo termina.

Cada repetición se denomina **iteración** o **ciclo**.

---

## La función `range()` { #range }

En Python, el conjunto de valores del `for` se define habitualmente con `range()`:

| Sintaxis | Genera | Resultado |
| --- | --- | --- |
| `range(10)` | `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]` | 10 números desde 0 |
| `range(0, 10)` | `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]` | igual al anterior |
| `range(0, 10, 2)` | `[0, 2, 4, 6, 8]` | de 2 en 2 |
| `range(9, -1, -1)` | `[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]` | descendente |

!!! info "Sintaxis general"

    `range(inicio, fin, paso)` genera enteros desde `inicio` hasta **justo antes** de `fin`, avanzando en pasos de `paso`. Si `paso` es negativo, los valores van disminuyendo.

### Ejemplos con `range()` { #range-examples }

=== "De 0 a 4"

    ```python
    print("Antes del ciclo for")
    for i in range(5):
        print("i =", i)
    print("Después del ciclo for")
    ```
    ```
    Antes del ciclo for
    i = 0
    i = 1
    i = 2
    i = 3
    i = 4
    Después del ciclo for
    ```

=== "De 0 a 8, de 2 en 2"

    ```python
    print("Antes del ciclo for")
    for i in range(0, 10, 2):
        print("i =", i)
    print("Después del ciclo for")
    ```
    ```
    Antes del ciclo for
    i = 0
    i = 2
    i = 4
    i = 6
    i = 8
    Después del ciclo for
    ```

=== "De 4 a 0, descendente"

    ```python
    print("Antes del ciclo for")
    for i in range(4, -1, -1):
        print("i =", i)
    print("Después del ciclo for")
    ```
    ```
    Antes del ciclo for
    i = 4
    i = 3
    i = 2
    i = 1
    i = 0
    Después del ciclo for
    ```

---

## Ejemplo resuelto: Pago de remuneraciones { #payroll }

Una empresa quiere calcular el sueldo **bruto** y **líquido** de cada empleado. El valor por hora es \$2.500 y el sueldo líquido corresponde al 80% del bruto.

**Algoritmo:**

1. Ingresar y validar la cantidad de empleados.
2. Por cada empleado:
    1. Ingresar y validar la cantidad de horas trabajadas.
    2. Calcular el sueldo bruto: `cant_horas × 2500`
    3. Calcular el sueldo líquido: `sueldo_bruto × 0.8`
    4. Mostrar ambos sueldos.

??? info "Ver solución"

    **Diagrama de flujo:**

    ``` mermaid
    flowchart TD
        A([INICIO]) --> B[/Ingresar cant_empleados/]
        B --> C{"¿cant_empleados\n> 0?"}
        C -->|No| B
        C -->|Sí| D{"¿indice <\ncant_empleados?"}
        D -->|Sí| E[/Ingresar cant_horas/]
        E --> F{"¿cant_horas\n> 0?"}
        F -->|No| E
        F -->|Sí| G["sueldo_bruto ← cant_horas × 2500"]
        G --> H["sueldo_liquido ← sueldo_bruto × 0.8"]
        H --> I[\"Mostrar sueldo_bruto y sueldo_liquido"\]
        I --> J["indice ← indice + 1"]
        J --> D
        D -->|No| K([FIN])
    ```

    **Implementación en Python:**

    ```python
    # 1) Ingresar y validar la cantidad de empleados
    noValido = True
    while noValido:
        try:
            cant_empleados = int(input("Ingrese la cantidad de empleados: "))
            if cant_empleados > 0:
                noValido = False
            else:
                print("Error: el número debe ser mayor a 0.")
        except:
            print("Error: dato incorrecto.")

    # 2) Procesar cada empleado
    for indice in range(cant_empleados):

        # 2.1) Ingresar y validar las horas trabajadas
        noValido = True
        while noValido:
            try:
                cant_horas = float(input(f"Empleado {indice + 1} — Ingrese horas trabajadas: "))
                if cant_horas > 0:
                    noValido = False
                else:
                    print("Error: las horas deben ser mayores a 0.")
            except:
                print("Error: dato incorrecto.")

        # 2.2 y 2.3) Calcular sueldos
        sueldo_bruto  = int(cant_horas * 2500)
        sueldo_liquido = int(sueldo_bruto * 0.8)

        # 2.4 y 2.5) Mostrar resultados
        print(f"  Sueldo bruto:   ${sueldo_bruto:,}")
        print(f"  Sueldo líquido: ${sueldo_liquido:,}")
    ```

    !!! note "FOR dentro de WHILE"

        Es habitual combinar estructuras: el `for` recorre los empleados (cantidad conocida), y el `while` valida cada dato ingresado (cantidad desconocida de intentos).

---

## Ejercicios { #exercises }

1. Escribe un programa que solicite un número entero positivo y muestre un triángulo de asteriscos de esa altura:

    ```
    *
    **
    ***
    ****
    *****
    ```

2. Escribe un programa que solicite un número entero positivo impar y muestre el siguiente triángulo (ejemplo para 9):

    ```
    1
    3 1
    5 3 1
    7 5 3 1
    9 7 5 3 1
    ```

3. Escribe un programa que calcule la nota final de cada estudiante de un curso y el promedio general de la asignatura. Por cada estudiante se ingresan sus notas; al terminar, el programa pregunta si se desea ingresar otro estudiante. Al finalizar muestra el promedio general del curso.

4. Escribe un programa que solicite un número entero positivo N y calcule la sumatoria \(\displaystyle\sum_{i=1}^{N} i\). Valida que N sea mayor a 0.

5. Escribe un programa que muestre la tabla de multiplicar del número que ingrese el usuario (del 1 al 10).
