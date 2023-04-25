import express from 'express';
import bodyParser from 'body-parser';

// import { MongoClient } from 'mongodb';
// ket nói mongodb
export const products = [{
  id: '123',
  name: 'Ayaka',
  price: '550.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/ayaka.png',
  averageRating: '5.0',
}, {
  id: '234',
  name: 'Aether',
  price: '535.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/Aether.png',
  averageRating: '5.0',
}, {
  id: '345',
  name: 'Ayato',
  price: '545.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/Ayato.png',
  averageRating: '5.0',
}, {
  id: '456',
  name: 'Barbara',
  price: '450.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/Barbara.png',
  averageRating: '5.0',
}, {
  id: '567',
  name: 'Ei',
  price: '600.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/Ei.png',
  averageRating: '5.0',
}, {
  id: '678',
  name: 'Ganyu',
  price: '560.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/Ganyu.png',
  averageRating: '5.0',
}, {
  id: '789',
  name: 'Hutao',
  price: '570.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/Hutao.png',
  averageRating: '5.0',
}, {
  id: '890',
  name: 'keqing',
  price: '630.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/keqing.png',
  averageRating: '5.0',
}, {
  id: '901',
  name: 'Klee',
  price: '635.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/Klee.png',
  averageRating: '5.0',
},
{
  id: '902',
  name: 'Lumine',
  price: '545.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/Lumine.png',
  averageRating: '5.0',
},
{
  id: '903',
  name: 'Nehida',
  price: '590.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/Nehida.png',
  averageRating: '5.0',
}, {
  id: '904',
  name: 'Shenhe',
  price: '615.000',
  description: 'Figure Ayaka là một sản phẩm tượng chibi được thực hiện dựa trên nhân vật Ayaka Kamisato trong trò chơi Genshin Impact. Với kích thước khoảng 10cm, figure Ayaka được chế tác với chất liệu nhựa cao cấp giúp tăng tính cứng cáp và bền bỉ. Thân hình của Ayaka được tái hiện rất chân thực nhờ phong cách chibi với đường nét tinh tế và chi tiết nổi bật. Bộ trang phục cũng được thiết kế chi tiết với màu sắc tươi sáng và phong cách truyền thống Nhật Bản, tôn lên vẻ đẹp của nhân vật. Figure Ayaka là món quà lý tưởng cho những fan hâm mộ trò chơi Genshin Impact và yêu thích Ayaka Kamisato.',
  imageUrl: '/images/Shenhe.png',
  averageRating: '5.0',
}];
  export let cartItems = [
    products[0],
    products[2],
    products[3],
  ];
const app= express();
app.use(bodyParser.json());
//phân tích cú pháp đối tượn json
 
// app.get('/api/products',async (req, res) =>{
//   const client = await MongoClient.connect(
//     'mongodb://localhost:27017',
//     {useNewUrlParser: true, useUnifiedTopology: true},

//   );
//   const db = client.db('vue-db');
//   // ket noi database ten vue-db 
//   const products = await db.collection('products').find({}).toArray();
//   res.status(200).json(products);
//   client.close();
// }); 
// ket noi mongodb
app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});
app.get('/api/users/:userId/cart', (req, res) =>{
  res.status(200).json(cartItems);
}); 
app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;
  const product = products.find((product) => product.id === productId);
  if (product) {
      res.status(200).json(product);
  } else {
      res.status(404).json('Không tìm thấy sản phẩm');
  }
});

app.post('/api/users/:userId/cart', (req, res) =>{
    const { productId} = req.body;
    const product = products.find(product => product.id === productId);
    if (product){
      cartItems.push(product);
      res.status(200).json(cartItems);

    }
    else{
      res.status(404).json('Không tìm thấy sản phẩm');
    }
});
app.delete('/api/users/:userId/cart/:productId', (req, res) =>{
  const { productId} = req.params;
  cartItems = cartItems.filter(product => product.id !== productId);
  res.status(200).json(cartItems); 
});
app.listen(8000, () => {
    console.log('Máy chủ đang lắng nghe trên cổng 8000');
});