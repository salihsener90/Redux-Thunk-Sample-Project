import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";

const Basket = () => {
  const state = useSelector((store) => store.basketReducer);
  console.log('sepet',state);
  return (
    <div className='row align-items-center p-4'>
      
      <div className='col-md-9'>
        {/* eğer ürün yoksa  */}
        {state.basket.length===0&&(<p>Henüz Ürün Eklenmedi</p>)}

        {state.basket.map((basketProduct)=>(
          <BasketItem  key={basketProduct.id} basketProduct={basketProduct}/>
        )
        )}

      </div>
      <div className="col-md-3 bg-light p-5 rounded">
        <h5 className="text-black">Toplam Tutar: {state.total}</h5>
        <button className="btn btn-primary">Alışverişi Tamamla</button>
      </div>
      </div>
  )
  
 
};

export default Basket;
