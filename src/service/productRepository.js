import { firebaseDB } from './firebase';

class ProductRepository {
  constructor() {
    this.lastId = '';
  }
  async getMore() {
    const querySnapshot = await firebaseDB
      .collection('products')
      .where('id', '>', this.lastId)
      .orderBy('id')
      .limit(3)
      .get();
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
      this.lastId = doc.id;
    });
    return products;
  }
}

export default ProductRepository;
