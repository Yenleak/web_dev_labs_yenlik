from models import Vehicle, Car, Bike
def main():

    car1 = Car("Toyota", "Camry", 180, "Petrol")
    bike1 = Bike("Yamaha", "R1", 200, "Sport")
    vehicle1 = Vehicle("Generic", "ModelX", 120)

    vehicles = [car1, bike1, vehicle1]

    for v in vehicles:
        print(v)
        print(v.move())
        print(v.stop())
        print()

if __name__ == "__main__":
    main()