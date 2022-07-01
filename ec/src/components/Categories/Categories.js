import CategoriesBox from './CategoriesBox';
import ClothingPic from '../../Images/clothing-pic.jpg';
import JewelryPic from '../../Images/jewelry-pic.jpg';
import AccessoriesPic from '../../Images/accessories-pic.jpg';
import ElectronicsPic from '../../Images/electronics-pic.jpg';


import './Categories.css';

export default function Categories({ openShoppingPage }) {
    const categoryList = [
        {
            'id': 1,
            'title': 'Accessories',
            'img': { AccessoriesPic }
        },
        {
            'id': 2,
            'title': 'Clothing',
            'img': { ClothingPic }
        },
        {
            'id': 3,
            'title': 'Electronics',
            'img': { ElectronicsPic }
        }
    ];

    return (
        <div className="categories">
            <h2 className="categories__header">Categories</h2>
            <div className="categories__boxes">
                {categoryList.map(category => (
                    <CategoriesBox
                        key={category.id}
                        id={category.id}
                        title={category.title}
                        openShoppingPage={openShoppingPage}
                    />
                ))}
            </div>
        </div >
    )
}