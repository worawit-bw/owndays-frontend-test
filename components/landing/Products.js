import ProductCarousel from "../carousel/ProductCarousel";
import ButtonSeeMoreProduct from "../button/ButtonSeeMoreProduct";

const Products = () => {
  // Products data for 3 different price groups
  const premiumProducts = [
    { productName: '千一作', productCode: 'SENICHI12 C2 ハバナ', productImg: '/assets/image/product_group1_1.png', bgColor: "#B58741", productPrice: '20,000', },
    { productName: 'marcus raw', productCode: 'MR1007Y-0S C1 ブラック', productImg: '/assets/image/product_group1_2.png', bgColor: "#B58741", productPrice: '20,000', },
    { productName: '千一作', productCode: 'SENICHI30 C1 ブラック', productImg: '/assets/image/product_group1_3.png', bgColor: "#B58741", productPrice: '22,000', },
    { productName: 'OWNDAYS × HUAWEI Eyewear 2', productCode: 'HW2006-3A C1 ブラック', productImg: '/assets/image/product_group1_4.png', bgColor: "#B58741", productPrice: '37,800', isAudio: true }
  ];

  const standardProducts = [
    { productName: 'AIR', productCode: 'AF2007A-3S C1 ブラック', productImg: '/assets/image/product_group2_1.png', bgColor: "#468A59", productPrice: '11,000', },
    { productName: 'Graph Belle', productCode: 'GB1039B-3A C3 ゴールド', productImg: '/assets/image/product_group2_2.png', bgColor: "#468A59", productPrice: '10,000', },
    { productName: 'AIR', productCode: 'AU2091T-1A C2 ブラウンデミ', productImg: '/assets/image/product_group2_3.png', bgColor: "#468A59", productPrice: '12,000', },
    { productName: 'SUN', productCode: 'OB2005N-4A C1 ブラック', productImg: '/assets/image/product_group2_4.png', bgColor: "#468A59", productPrice: '13,000', }
  ];

  const budgetProducts = [
    { productName: 'Essential', productCode: 'FC2024T-1S C2 ブラウンデミ', productImg: '/assets/image/product_group3_1.png', bgColor: "#7ABC8C", productPrice: '8,000', },
    { productName: 'SUN', productCode: 'SUN2093T-2S C1 ブラウンデミ', productImg: '/assets/image/product_group3_2.png', bgColor: "#7ABC8C", productPrice: '6,000', },
    { productName: 'Junni', productCode: 'JU2038N-4S C3 クリアブルー', productImg: '/assets/image/product_group3_3.png', bgColor: "#7ABC8C", productPrice: '7,000', isKids : true },
    { productName: 'ESSENTIAL', productCode: 'FC2036V-4A C1 ブラウン', productImg: '/assets/image/product_group3_4.png', bgColor: "#7ABC8C", productPrice: '8,000', }
  ];

  // Handle button clicks for each product group
  const handlePremiumClick = () => {
    console.log('Navigate to premium products');
    // Add navigation logic here
  };

  const handleStandardClick = () => {
    console.log('Navigate to standard products');
    // Add navigation logic here
  };

  const handleBudgetClick = () => {
    console.log('Navigate to budget products');
    // Add navigation logic here
  };

  return (
    <div className="w-full bg-white">
      {/* Premium Products - 20,000円以上 */}
      <ProductCarousel
        products={premiumProducts}
        title="20,000円"
        subTitle="以上"
        buttonText="20,000円以上の商品を見る"
        onButtonClick={handlePremiumClick}
      />

      {/* Standard Products - 10,000円台 */}
      <ProductCarousel
        products={standardProducts}
        title="10,000円"
        subTitle="台"
        buttonText="10,000円台の商品を見る"
        onButtonClick={handleStandardClick}
      />

      {/* Budget Products - 8,000円以下 */}
      <ProductCarousel
        products={budgetProducts}
        title="8,000円"
        subTitle="以下"
        buttonText="8,000円以下の商品を見る"
        onButtonClick={handleBudgetClick}
      />
    </div>
  );
};

export default Products;