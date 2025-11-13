import { Sequelize } from "sequelize-typescript"
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import Product from "../../../domain/product/entity/product";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import UpdateProductUseCase from "./update.product.usecase";
import ProductFactory from "../../../domain/product/factory/product.factory";

describe("Integration test update product usecase", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    })

    await sequelize.addModels([ProductModel]);
    await sequelize.sync();
  })

  afterAll(async () => {
    await sequelize.close();
  })

  it("should update a product", async () => {
    const productRepository = new ProductRepository();
    const updateProductUseCase = new UpdateProductUseCase(productRepository);

    const product = new Product("1", "Product 1", 100);
    await productRepository.create(product);

    const input = {
      id: product.id,
      name: "Product 2",
      price: 200
    };

    const output = await updateProductUseCase.execute(input);

    expect(output).toEqual({
      id: product.id,
      name: input.name,
      price: input.price
    })
  });
})