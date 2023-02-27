console.warn(`-EJERCICIOS SIN CICLOS-`)
class ejercicios{
    ejercicio1(){
        // si n1>n2
        //    8+4=12
        //    sino no suma 
        console.error("1. sumar 2 números siempre y cuando el primero sea mayor al segundo")
        let n1=Math.floor(Math.random()*100)
        let n2=Math.floor(Math.random()*100)
        let s=0
        if (n1>n2) {
            s=n1+n2
            console.log(`${n1}+${n2}=${s}`)
        }else{
            console.log(`no se puede realizar ya que ${n1} es menor a ${n2}`)
        } 
    }
    ejercicio2(){
        // dependiendo del operador hacer una operación
        //  n=2 N1=6   operador=+
        //  entonces n2+n6=8
        console.error("2. realizar la operación segun el operador")
        let num1=Math.floor(Math.random()*10)
        let num2=Math.floor(Math.random()*10)
        let os="+",or="-",om="*",od="/",ore="%"
        let suma=0,resta=0,multi=0,divi=0,resi=0
        suma = num1+num2
        resta = num1-num2
        multi = num1*num2
        divi = num1/num2
        resi = num1%num2
        console.log(num1,os,num2,"=",suma)
        console.log(num1,or,num2,"=",resta)
        console.log(num1,om,num2,"=",multi)
        console.log(num1,od,num2,"=",divi)
        console.log(num1,ore,num2,"=",resi)
    }
    ejercicio3(){
        // comparar n1 con n2
        // si n1>n2 entonces n1 es mayor
        //y si no n2 es mayor 
        console.error("3. Presentar el mayor de 2 números")
        let n1=Math.floor(Math.random()*100)
        let n2=Math.floor(Math.random()*100)
        if(n1>n2){
            console.log(`${n1} es mayor a ${n2}`)
        }else{
            console.log(`${n2} es mayor a ${n1}`)
        }
    }
    ejercicio4(){
        // el nombre es: Juan
        // se presenta la variable: nombre, que es igual a: Juan
        console.error("4. Presentar un nombre")
        let nombre="Juan"
        console.log(nombre)
    }
    ejercicio5(){
        //el valor es de 35 entonces se multiplica por 0.12
        // lo que resulta de esa operación se suma al valor inicial
        // entonces el total es igual a: 35+4.2=39.2
        console.error("5. Dado un valor de compra presentar el total considerando un 12% de IVA")
        let n1=Math.floor(Math.random()*100)
        let iva=n1*0.12, total=n1+iva
        console.log(`${n1} dolares mas el IVA de ${iva} da como total a pagar: ${total} dolares`)
    }
    ejercicio6(){
        //Se genera un bucle para presentar 5 veces el nombre
        //con un contador que empiece en 1 y aumente en 1 hasta el 5
        //en cada bucle se repite el nombre=Carlos
        console.error("6.Presentar 5 veces un nombre")
        let nombre="Carlos",c=1
        for(c=1;c<=5;c++)
        console.log(nombre)
    }
    ejercicio7(){
        //se genera un bucle que empieza en c=3 y va aumentando de 3 hasta 21
        //en cada bucle se presenta la variable c que aumenta en 3
        //Al final tendremos todos los multiplos de 3 
        console.error("7. Presentar los multiplos de 3 desde el 3 al 21")
        let c=1
        for(c=3;c<22;c=c+3)
        console.log(c)
    }
    ejercicio8(){
        //se genera un bucle que empieza en c=21 y va disminuyendo en 3 hasta que llegue al 3
        //en cada bucle se presenta la variable c que va disminuyendo en 3
        //al final tendremos todos los multiplos de 3 desde el 21 hasta el 3
        console.error("8. Presentar los multiplos de 3 desde el 21 al 3")
        let c=1
        for(c=21;c>=3;c=c-3)
        console.log(c)
    }
    ejercicio9(){
        //declaro 2 variables con los nombres, luego con un if comparo si son iguales
        //si son iguales el if arrojara un mensaje diciendo eso
        //si no lo son el if arrojara un mensaje diciendo que no lo son
        console.error("9. Dado 2 nombres indicar si son iguales o diferentes")
        let nom1="Jose",nom2="Luis"
        if(nom1==nom2){
            console.log(`El nombre ${nom1} y ${nom2} son iguales`)
        }else{
            console.log(`El nombre ${nom1} y ${nom2} no son iguales`)
        }
    }
    ejercicio10(){
        //primero declaro un arreglo con varios numeros
        //luego hago un bucle para que recorra el arreglo
        //dentro del bucle hago un if que leera el contenido del arreglo y 
        //decidira si el numero tiene mas de 5 cifras
        console.error("10. Dado 10 números de un arreglo presentar los que tengas menos de 5 cifras")
        let arreglo=[10,2312,320,12340,30,4,64378,98272,942,]
        let long=arreglo.length, c=0
        while(c<long){
            if (arreglo[c]<10000)
            console.log(`el número ${arreglo[c]} tiene menos de 5 cifras`)
            c=c+1
        }
        
    }
    ejercicio11(){
        //primero declaro el arreglo con sun contenido
        //luego lo presento en pantalla
        console.error("11. Dado un arreglo presentarlo")
        let arreglo=[5,7,23,65,54]
        console.log(arreglo)
    }
    ejercicio12(){
        //Primero declaro el arrelgo con su contenido
        //tambien declaro una variable que mida la longitud del arreglo
        //genero un bucle que recorra el arreglo 
        //tambien genero un if dentro del bucle que lea el contenido del arreglo
        //y compare si los numeros son menores a 10
        //al final ponto un contador para que el bucle no sea infinito
        console.error("12. dado un arreglo presentar los elementos menores a 10")
        let arreglo=[12,5,3,67,45]
        let long=arreglo.length, c=0
        console.log(arreglo)
        while(c<long){
            if (arreglo[c]<10)
            console.log(`${arreglo[c]} es menor a 10`)
            c=c+1
        }
    }
    ejercicio13(){
        //declaro el arreglo con su contenido y tambien una variable con la longitud del mismo
        //genero un bucle que recorra el arreglo y un if que compare si el numero para o impar
        //si el numero es par se acumula y al final se presenta en pantalla
        //si es impar se presenta directamente el numero en pantalla
        console.error("13. Dado un arreglo presentar los impares y al final la suma de los pares")
        let arreglo=[12,7,4,89,44]
        let long=arreglo.length, c=0,suma=0
        while(c<long){
            if (arreglo[c]%2==1){
                console.log(`${arreglo[c]} es un número impar`)
            }else{
                suma=suma+arreglo[c]
            }
            c=c+1
        }
        console.log(`la suma de los pares es igual a:${suma}`)
    }
    ejercicio14(){
        //declaro el arreglo con su contenido y una variable que contenga la longitud del arreglo
        //luego genero un bucle que recorra el arreglo y presente en pantalla
        //el primer, el medio y el ultimo elemento del arreglo
        console.error("14. Presentar el primer, el medio, y el ultimo elemento del arreglo")
        let arreglo=[3,6,15,90,65,23,41]
        let long=arreglo.length, c=0
        for(c=0;c<long;c=c+3){
            console.log(arreglo[c])
        }
    }
    ejercicio15(){
        //para calcular el vuelto debo restar el pago con el precio
        //así obtendre el vuelto y luego lo presento en pantalla
        console.error("15. Calcular el vuelto de una compra")
        let pago=200, vuel=0
        let prec=Math.floor(Math.random()*100)
        vuel=pago-prec
        console.log(`El precio del producto es de ${prec} y el pago es de ${pago} entonces el vuelto es de ${vuel} dolares `)
    }
}
let cal1=new ejercicios()
cal1.ejercicio1()
let cal2=new ejercicios()
cal2.ejercicio2()
let cal3=new ejercicios()
cal3.ejercicio3()
let cal4=new ejercicios()
cal4.ejercicio4()
let cal5=new ejercicios()
cal5.ejercicio5()
let cal6=new ejercicios()
cal6.ejercicio6()
let cal7=new ejercicios()
cal7.ejercicio7()
let cal8=new ejercicios()
cal8.ejercicio8()
let cal9=new ejercicios()
cal9.ejercicio9()
let cal10=new ejercicios()
cal10.ejercicio10()
let cal11=new ejercicios()
cal11.ejercicio11()
let cal12=new ejercicios()
cal12.ejercicio12()
let cal13=new ejercicios()
cal13.ejercicio13()
let cal14=new ejercicios()
cal14.ejercicio14()
let cal15=new ejercicios()
cal15.ejercicio15()
console.warn(`-EJERCICIOS CON CICLOS-`)
class ejerci10{
    ejercicio16(){
        //genero un bucle que comience en c=1 y vaya aumentando en 1 hasta c=12
        //luego voy multiplicando un numero cualquiera con c
        //luego presento todo eso en pantala en cada bucle 
        console.error("16. Presentar la tabla de multiplicar de cualquier número")
        let nm=Math.floor(Math.random()*10)
        let mul=0,res=0
        while(mul<12){
        mul=mul+1
        res=nm*mul
        console.log(`${nm}*${mul}=${res}`)
        }
    }
    ejercicio17(){
        //genero un bucle que empiece en c=0 y vaya aumentando en 1 hasta el n2=12
        //dentro del bucle hago una acumulador que sume el acumulador con el n1
        //al final presento la variable suma que contiene la suma sucesiva
        console.error("17. Realizar la multiplicación de 2 números con sumas sucesivas")
        let n1=Math.floor(Math.random()*20)
        let n2=Math.floor(Math.random()*10)
        let c=0, suma=0
        while (c<n2){
            suma=suma+n1
            c=c+1
        }
        console.log(`La suma sucesiva de ${n1}*${n2} da como resultado: ${suma}`)
    }
    ejercicio18(){
        //Genero un bucle que se repita mientras n1 sea mayor o igual a n2
        //dentro del bucle voy restando  n1-n2 y lo guardo en n1
        //al final hago un contador que aumente en 1 y lo presento al final 
        //este contador es el que contiene el resultado de las restas sucesivas
        console.error("18. realizar la división de 2 números con restas sucesivas")
        let n1=20, re=n1
        let n2=3,coci=0
        while (n1>=n2){
            n1=n1-n2
            coci++
        }
        console.log(`la resta sucesiva de ${re}/${n2} da como resultado: ${coci}`)
    }
    ejercicio19(){
        //genero un for que empiece en n1 y mientras que n1 sea mayor a 1 se vaya restando n1-1
        //dentro del bucle genero un acumulador que se multiplique el acumulador por n1
        //al final presento el acumulador en pantalla
        console.error("19. Calcular el factorial de un número")
        let fac=1,n1=Math.floor(Math.random()*10),num=n1
        for(n1;n1>1;n1--){
            fac=fac*n1
        }
        console.log(`El factorial de ${num} es igual a: ${fac}`)
    }
    ejercicio20(){
        //Genero el bucle que mientras el contador c sea menor al exponente se repita
        //dentro del bucle hago un acumulador que sea igual acumulador por n1 
        //el contador va aumentar en 1 para que el bucle no sea infinito
        //al final presento el acumulador en pantalla
        console.error("20. Calcular un número elevado a un exponente")
        let exp=Math.floor(Math.random()*5)
        let n1=Math.floor(Math.random()*10)
        let c=0, res=1
        while(c<exp){
        res=res*n1
        c=c+1    
        }
        console.log(`El número ${n1} elevado al exponte ${exp} da como resultado: ${res}`)
    }
    ejercicio21(){
        //genero un for que empiece en n=2 y mientras n sea menor o igual a r y n se resta en 2
        //dentro del for hago que el arreglo sea igual al arreglo-1 y eso lo sumo con el arreglo-2
        //al final presento el arreglo que me queda 
        console.error("21. Calcular la serie fibonacci de un número")
        let fib=[0,1]
        let n=0, r=Math.floor(Math.random()*10)
        for(n=2;n<=r;n++){
            fib[n]=fib[n-1]+fib[n-2]
        }
        console.log(`la serie Fibonacci de ${r} es: ${fib}`)
    }
    ejercicio22(){
        //genero un bucle que empiece en serie=1253 y mientras sea mayor a 0
        //dentro del bucle un contador que sea serie%10
        //despues de eso hago que serie sea igual a serie/10
        //dentro del bucle voy presentando la variable serie que va a ir escribiendo los numeros invertidos
        console.error("22. Dado un número invertirlo")
        let serie=Math.floor(Math.random()*10000)
        let inver=0
        console.log(`El número ${serie} invertido es igual a:`)
        while(serie>0){
            inver=Math.floor(serie%10)
            serie=Math.floor(serie/10)
            console.log(inver)
        }
    }
    ejercicio23(){
        //Genero un for que empiece en c=1 y mientras c sea menor o igual a n1 c aumenta en 1
        //dentro del bucle genero un if que vera si el residuo de n1 con c es igual a 0
        //si es así va a ir presentando c en pantalla
        console.error("23. Presentar los divisores de un número")
        let n1=Math.floor(Math.random()*100), c
        console.error(`Los divisores de ${n1} son:`)
        for(c=1;c<=n1;c++){
            if(n1%c==0){
                console.log(c)
            }
        } 
    }
    ejercicio24(){
        //Genero un for que empieza en c=1 y mientras c sea menor a n1 c va aumentando en 1
        //dentro del bucle hago un if que vera si residuo de n1 con 0 es 0 acumulara todo eso en un acumulador mas c
        //fuera del bucle genero un if que comparara si el acumulador es igual al primer numero
        //si es así se presentara un mensaje en pantalla
        console.error("24. Presentar si un número es perfecto o no")
        let n1=Math.floor(Math.random()*100), c, primo=0
        for(c=1;c<n1;c++){
            if(n1%c==0){
                primo=primo+c
            }
        } 
        if(primo==n1){
            console.log(`El número ${n1} es perfecto`)
        }else{
            console.log(`El número ${n1} no es perfecto`)
        }
    }
    ejercicio25(){
        console.log("Presentar si un número es primo o no")
        let n1=Math.floor(Math.random()*100)
        let c=0, m=1
        for(m<=1;m<=n1;m++){
            if(n1%m==0){
                c++
            }
        }
        if(c==2){
            console.log(`El número ${n1} es primo`)
        }else{
            console.log(`El número ${n1} no es primo`)
        }
    }
}
let cal16=new ejerci10()
cal16.ejercicio16()
let cal17=new ejerci10()
cal17.ejercicio17()
let cal18=new ejerci10()
cal18.ejercicio18()
let cal19=new ejerci10()
cal19.ejercicio19()
let cal20=new ejerci10()
cal20.ejercicio20()
let cal21=new ejerci10()
cal21.ejercicio21()
let cal22=new ejerci10()
cal22.ejercicio22()
let cal23=new ejerci10()
cal23.ejercicio23()
let cal24=new ejerci10()
cal24.ejercicio24()
let cal25=new ejerci10()
cal25.ejercicio25()