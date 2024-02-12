#include<stdio.h>
#include<conio.h>
int main()
{
    int i , j , amt = 0, n = 0, amt500 = 0, amt1 = 0, amt2 = 0;
    printf("enter n:");
    scanf("%d",&n);

    if( n >= 500)
    {
        amt1 = n / 500;
        printf("Note of amount is:%d",amt1);
        n = n - (amt1*500);
    }
    if( n >= 200)
    {
        amt2 = n / 200;
        printf("\nNote of 200 amount is:%d",amt2);
        n = n - (amt2*200);
    }

}