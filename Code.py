import math
import argparse
'''
parser = argparse.ArgumentParser(description="Server-Client Program")
parser.add_argument('--value', required=True, help="Enter the Cups (No.): ")
args = parser.parse_args()
n=int(args.value)
'''
n=10000
#making small changes to the code

#Calculating the Roots using the Quadratic Equation
a=1;b=1;c=-2*n
d = (b**2) - (4*a*c)   
sol1 = (-b-math.sqrt(d))/(2*a)
sol2 = (-b+math.sqrt(d))/(2*a)

#Checking for Complex Numbers
if isinstance(sol1, complex):
    sol1=sol1.real
if isinstance(sol2, complex):
    sol2=sol2.real

#Discarding the Negative Values
ans=math.floor(sol2) if sol1<0 else math.floor(sol1)

val=ans*(ans+1)//2

#Printing the Results
print('\nResults: \n')
print('The number of Cups at the Base: ',ans)
print('The number of Cups Used: ',val)
print('Cups Remaining: ',n-val)   
