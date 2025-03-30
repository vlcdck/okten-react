import {ProductModel} from "../../models/ProductModel.ts";

type ProductProp = {
    item: ProductModel;
}

export const ProductComponent = ({item}: ProductProp) => {
    return (
        <div className={'flex flex-wrap w-md border-4 rounded-2xl flex-col items-center'}>
            <h3 className={'text-2xl font-medium'}>{item.title}</h3>
            <div>
                <p>Category - {item.category}</p>
                <ul>{item.tags.map((tag, index) => (
                    <li key={index}>
                        {tag}
                    </li>
                ))}</ul>
            </div>
            <p>Rating - {item.rating}</p>
            <p>{item.brand}</p>
            <img src={item.thumbnail} alt={item.title}/>
            <div className={'flex flex-wrap justify-center gap-2.5 flex-col items-center'}>
                <p className={'text-xl'}>Price - {item.price}</p>
                <p className={'text-xl text-red-600'}>Sale Percentage - {item.discountPercentage}%</p>
            </div>
        </div>
    );
};