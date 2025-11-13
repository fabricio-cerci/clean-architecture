import ProductFactory from "../../../domain/product/factory/product.factory";
import CreateProductUseCase from "./create.product.usecase";

const product = ProductFactory.create("a", "Product A", 100);

const input = {
  name: product.name,
  price: product.price
}

const mockRepository = () => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    find: jest.fn(),
    findAll: jest.fn()
  
  }
}

describe("Unit test for create product usecase", () => {
  it("should create a product", async () => {
    const productRepository = mockRepository();
    const productCreateUseCase = new CreateProductUseCase(productRepository);

    const output = await productCreateUseCase.execute(input);

    expect(output).toEqual({
      id: expect.any(String),
      name: product.name,
      price: product.price
    })
  })
})