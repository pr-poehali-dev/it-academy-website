import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Изучай программирование
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              с лучшими преподавателями
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Освой востребованные IT-навыки онлайн. От HTML до Backend разработки
            — все курсы с практическими заданиями и поддержкой менторов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-lg px-8 py-3"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть курсы
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-purple-200 text-purple-600 hover:bg-purple-50"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Бесплатный урок
            </Button>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                2000+
              </div>
              <div className="text-gray-600">Студентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Курсов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Успешных</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
