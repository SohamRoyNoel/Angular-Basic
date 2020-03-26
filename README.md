# MyFirstApp

# Create Custom Component from CLI : 
  Command : ng generate component < Component Name > | or | ng g c < Component Name >

# Data Bindings:
A> Output data </br>
1. String Interpolation : ( {{ data }} )   @ Ts to Template @ </br> 
2. Property Binding : ( [property] = " data" ) @ Ts to Template @ </br>
<p>
B> Input Data </br>
3. Event Binding : ( (event)="expression" )  @ user did some action in Template and Ts accepts the action @ </br>
<p>
C> Combination </br>
4. Two way binding :( [(ngModel)] = "data" ) @ Accepts and Sends data at a time @
