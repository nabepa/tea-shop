import { firebaseDB } from './firebase';

class ProductRepository {
  get() {
    firebaseDB
      .collection('products')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
        });
      });
  }
  order() {}
}

export default ProductRepository;
