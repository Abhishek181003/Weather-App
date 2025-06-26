import java.util.Scanner;

public class Main {
    public static int gcd (int a , int b){
		if(a==0)
			return b;
		return gcd(b%a , a);
	}
	public static int lcm(int a, int b){
		return (a / gcd(a,b) * b);
	}
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter horn blown car1 at sec :");
        int s1 = sc.nextInt();
        System.out.println("Enter horn blown car2 at sec :");
        int s2 = sc.nextInt();
        System.out.println("Enter total sec :");
        int sec = sc.nextInt();
        System.out.println("Total horn blow by both car in same second is : " + sec / lcm(s1, s2));
    }
}