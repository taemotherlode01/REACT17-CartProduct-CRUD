import{PRODUCTS_FETCH,PRODUCT_CREATE,PRODUCT_FETCH, PRODUCT_UPDATE} from '../actions/types';

export default function(state = [], action){
     switch(action.type){
         case PRODUCTS_FETCH :
         case PRODUCT_FETCH :
          return action.payload;
         case PRODUCT_CREATE :
          return {saved : true,msg: "บันทึกสินค้าเรียบร้อยแล้ว"};
         case PRODUCT_UPDATE :
          return {...state,saved : true,msg:"บันทึกสินค้าเรียบร้อยแล้ว"};
          
       default:
          return state;                                  
     }                         
}