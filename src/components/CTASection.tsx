import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Готовы начать карьеру в IT?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к тысячам студентов, которые уже изменили свою жизнь с
          нашими курсами
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать бесплатно
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>

        <div className="mt-8 text-purple-200">
          <p className="text-sm">
            ✓ Первый урок бесплатно ✓ Возврат денег в течение 14 дней ✓
            Рассрочка 0%
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
