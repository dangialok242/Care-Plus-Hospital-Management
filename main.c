#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct patient {
    int id;
    char name[50];
    int age;
    char disease[50];
    char doctor[50];
    char contact[15];
};

int main() {
    struct patient p;
    FILE *fp;

    fp = fopen("hospital.dat", "ab+");

    if (!fp) {
        printf("Cannot open file.\n");
        return 1;
    }

    printf("Enter Patient ID: ");
    scanf("%d", &p.id);

    printf("Enter Name: ");
    scanf(" %[^\n]", p.name);

    printf("Enter Age: ");
    scanf("%d", &p.age);

    printf("Enter Disease: ");
    scanf(" %[^\n]", p.disease);

    printf("Enter Doctor Name: ");
    scanf(" %[^\n]", p.doctor);

    printf("Enter Contact Number: ");
    scanf(" %[^\n]", p.contact);

    fwrite(&p, sizeof(p), 1, fp);
    fclose(fp);

    printf("\n--- Record saved to hospital.dat ---\n");
    return 0;
}