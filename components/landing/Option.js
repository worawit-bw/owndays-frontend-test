import DescriptionCard from "../button/DescriptionCard";

const Option = ({ icon, title, description }) => {
  const mock =  [
    {title: '超極薄レンズ', description: '「より薄く」「より軽く」を実現した世界最高屈折のプレミアムレンズ。目の大きさなどに影響する歪みを極限まで抑えることができます。', price: '12,000', hightLight: true},
    {title: 'PCレンズ', description: 'スマホ・パソコンなど電子機器から出るブルーライトから眼を守るレンズ。度無しクリアの場合は、追加料金なしでお作りいただけます。', price: '4,000', hightLight: false},
    {title: 'カラーレンズ', description: 'お好みのフレームと組み合わせることでファッション性を楽しんだり、サングラスとして使用したりできるレンズです。', price: '4,000', hightLight: false},
    {title: '調光レンズ', description: '紫外線によってレンズカラーが変化！日差しが強くなる季節も、1本2役で荷物にならず持ち運びも便利。', price: '6,000', hightLight: false},
    {title: 'くもり止めコート', description: '表面に特殊なコーティングを施すことで、レンズを曇りにくくしクリアな視界を保ちます。マスクとメガネを併用される方ににおすすめ。', price: '4,000', hightLight: false},
    {title: '傷防止コート', description: '「レンズの傷が気になる方」におすすめ！ブルーライトカット機能を搭載した、傷に強い特殊コーティング。', price: '6,000', hightLight: false},
  ]  

  return (
    <div className="flex flex-col items-center text-center w-full bg-[#F4F4F4] py-[90px] md:py-[140px] mt-[100px] relative">
      <div className="absolute top-[-20px] md:top-[-35px] left-1/2 transform -translate-x-1/2">
        <p className="text-[40px] md:text-[65px] font-bold text-red leading-[1] [text-shadow:_-2px_-2px_0_black,_2px_-2px_0_black,_-2px_2px_0_black,_2px_2px_0_black] tracking-[5px]">OPTION</p>
        <p className="text-[12px] md:text-[21px] text-black tracking-[2px] mt-2">おすすめオプションレンズ</p>
      </div>

      <div className="w-full max-w-[1440px] h-full grid grid-cols-1 place-items-center md:place-items-stretch sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-2 mx-auto px-15 lg:px-20 xl:px-41">
        {mock.map((item, index) => (
          <DescriptionCard 
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            hightLight={item.hightLight}
          />
        ))}
      </div>
      {/* <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p> */}
    </div>
  );
};

export default Option;