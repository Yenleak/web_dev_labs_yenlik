class Vehicle:   #жалпы

    def __init__(self, brand, model, speed):
        self.brand = brand
        self.model = model
        self.speed = speed

    def move(self):
        return f"{self.brand} {self.model} is moving"

    def stop(self):
        return f"{self.brand} {self.model} stopped"

    def __str__(self):
        return f"Vehicle: {self.brand} {self.model}, speed: {self.speed}"
    
class Car(Vehicle):

    def __init__(self, brand, model, speed, fuel_type):
        super().__init__(brand, model, speed)
        self.fuel_type = fuel_type

    def move(self):
        return f"Car {self.brand} {self.model} drives on the road"

    def honk(self):
        return "Beep Beep!"


class Bike(Vehicle):

    def __init__(self, brand, model, speed, type_bike):
        super().__init__(brand, model, speed)
        self.type_bike = type_bike

    def move(self):
        return f"Bike {self.brand} {self.model} rides on the street"

    def ring_bell(self):
        return "Ring Ring!"