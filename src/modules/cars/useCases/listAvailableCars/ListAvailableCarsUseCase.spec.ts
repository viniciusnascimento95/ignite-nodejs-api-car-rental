import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });

    it("should be albe to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car",
            description: "car description",
            daily_rate: 110.0,
            license_plate: "DEF-1234",
            brand: "car_brand",
            fine_amount: 40,
            category_id: "category_id",
        });
        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be albe to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "car description",
            daily_rate: 110.0,
            license_plate: "DEF-1234",
            brand: "car_brand_teste",
            fine_amount: 40,
            category_id: "category_id",
        });
        const cars = await listAvailableCarsUseCase.execute({
            brand: "car_brand_teste",
        });

        expect(cars).toEqual([car]);
    });

    it("should be albe to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "car description",
            daily_rate: 110.0,
            license_plate: "DEF-1235",
            brand: "car_brand_teste",
            fine_amount: 40,
            category_id: "category_id",
        });
        const cars = await listAvailableCarsUseCase.execute({
            name: "Car3",
        });

        expect(cars).toEqual([car]);
    });

    it("should be albe to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "car description",
            daily_rate: 110.0,
            license_plate: "DEF-1235",
            brand: "car_brand_teste",
            fine_amount: 40,
            category_id: "123",
        });
        const cars = await listAvailableCarsUseCase.execute({
            category_id: "123",
        });

        expect(cars).toEqual([car]);
    });
});
