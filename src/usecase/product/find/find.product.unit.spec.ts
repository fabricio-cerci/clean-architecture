import ProductFactory from "../../../domain/product/factory/product.factory";
import FindProductUseCase from "./find.product.usecase";

const product = ProductFactory.create("a", "Product A", 100);

const mockRepository = () => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    findAll: jest.fn()
  }
}

describe("Unit test for finding a product", () => {
  it("should find a product", async () => {
    const productRepository = mockRepository();
    const productFindUseCase = new FindProductUseCase(productRepository);

    const output = await productFindUseCase.execute({ id: "1" });

    expect(output).toEqual({
      id: product.id,
      name: product.name,
      price: product.price
    });
  });
})