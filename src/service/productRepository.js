import { firebaseDB } from './firebase';

class ProductRepository {
  async getMore(cursorId) {
    const querySnapshot = await firebaseDB
      .collection('products')
      .where('id', '>', cursorId)
      .orderBy('id')
      .limit(3)
      .get();
    const products = {};
    querySnapshot.forEach((doc) => {
      products[doc.id] = { ...doc.data() };
    });
    return products;
  }

  async getById(id) {
    const document = await firebaseDB.collection('products').doc(id).get();
    const product = { ...document.data(), id: document.id };
    return product;
  }

  async getCategoryProducts(category) {
    const querySnapshot = await firebaseDB
      .collection('products')
      .where('category', '==', category)
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
