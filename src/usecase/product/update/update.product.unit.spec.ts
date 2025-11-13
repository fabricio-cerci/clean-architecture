import ProductFactory from "../../../domain/product/factory/product.factory"
import UpdateProductUseCase from "./update.product.usecase";

const product = ProductFactory.create("a", "Product A", 100);

const input = {
  id: product.id,
  name: "Product A Updated",
  price: 200
};

const mockRepository = () => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    findAll: jest.fn()
  }
}

describe("Unit test for update product usecase", () => {
  it("should update a product", async () => {
    const productRepository = mockRepository();
    const updateProductUseCase = new UpdateProductUseCase(productRepository);

    const output = await updateProductUseCase.execute(input);

    expect(output).toEqual({
      id: product.id,
      name: input.name,
      price: input.price
    })
  })
})