import { firebaseDB } from './firebase';

class ProductRepository {
  async getAll() {
    const querySnapshot = await firebaseDB.collection('products').get();
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  }
  // order() {}
}

export default ProductRepository;
