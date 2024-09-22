const Categories = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex gap-5">
        <div className="w-[40%] bg-gray-100 p-5">
          <div className="flex items-center justify-between pb-5">
            <p className="text-4xl desktop2:text-5xl font-medium">Утилиты</p>
            <p className="desktop2:text-2xl">132 товара</p>
          </div>
          <p className="desktop2:text-2xl">
            Шаблоны для утилитарных сайтов обеспечивают идеальные решения для
            создания функциональных и эффективных онлайн-ресурсов
          </p>
        </div>
        <div className="bg-gray-300 w-px"></div>
        <div className="flex flex-col justify-between">
          <p className="text-xl">Выбрать по:</p>
          <div className="w-[500px] flex flex-wrap gap-3">
            {["По популярности", "По возрастанию цены", 'По убывании цены', 'Новинки', 'Скидки'].map((el) => (
              <button key={el} className="bg-gray-100 p-3 hover:bg-green-500 hover:text-white transition-colors duration-300">{el}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
