import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  const features = [
    {
      icon: "Users",
      title: "Опытные преподаватели",
      description: "Команда экспертов с реальным опытом работы в IT-индустрии",
    },
    {
      icon: "Award",
      title: "Сертификаты",
      description:
        "Получите признанные в индустрии сертификаты по завершении курсов",
    },
    {
      icon: "BookOpen",
      title: "Практический подход",
      description: "Учитесь на реальных проектах и кейсах из практики",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                О{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  CodeAcademy
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Мы помогаем людям осваивать современные технологии и строить
                успешную карьеру в IT-сфере.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Наша миссия
                </h2>
                <p className="text-gray-600 mb-6">
                  CodeAcademy была создана с целью сделать качественное
                  IT-образование доступным для всех. Мы верим, что каждый может
                  освоить программирование и найти свое место в мире технологий.
                </p>
                <p className="text-gray-600">
                  За годы работы мы помогли тысячам студентов изменить свою
                  жизнь, получив новые навыки и построив успешную карьеру в
                  IT-индустрии.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Команда разработчиков"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <Icon
                        name={feature.icon as any}
                        size={32}
                        className="text-white"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
