// Q2.  MOCK EXAM LAB EXAM-1 (JAVA)

class calculator
{
    static int add(int a, int b)
    {
        return a + b;
    }
    static int subtract(int a, int b)
    {
        return a - b;
    }

    static int multiply(int a, int b)
    {
        return a * b;
    }

    static int divide(int a, int b)
    {
        return a / b;
    }
    
    public static void main(String[] args)
    {
        int a = 10, b = 4;
        
        System.out.println("Addition: " + add(a, b));
        System.out.println("Subtraction: " + subtract(a, b));
        System.out.println("Multiplication: " + multiply(a, b));
        System.out.println("Division: " + divide(a, b));
    }
    
}